from __future__ import annotations

import dataclasses
import json
import os
import sys
from collections import defaultdict
from contextlib import contextmanager
from dataclasses import dataclass
from enum import Enum
from pathlib import Path
from textwrap import indent
from time import sleep, time_ns
from typing import Generator, Literal, NewType, Optional, Tuple, Iterator, Any, cast

from languages import Lean, TicTacToe
from languages.base import Language
from utils import *

# A type alias to know when a str is the address of someone.
# It is used only for type checking, and does nothing at runtime
Address = NewType("Address", str)
# A Type alias to identify claims
Hash = NewType("Hash", str)
Time = NewType("Time", int)

ROOT_HASH = Hash("0")
SPRIG_ADDRESS = Address("@SPRIG")
MACHINE_VERIF = Address("@MACHINE_VERIF")

DATA = Path(__file__).parent / "data"
DATA.mkdir(exist_ok=True)
TIME_FILE = DATA / "time"
TIME_FILE.touch()
BANK_FILE = Path(os.environ.get("BANK_FILE", DATA / "bank"))
BANK_FILE.touch()

BANK = defaultdict(int, json.loads(BANK_FILE.read_text() or "{}"))

INDENT = " " * 4  # For pretty printing

REAL_TIME = "real"
DISCRETE_TIME = "discrete"
TIME_MODE = os.environ.get("TIME_MODE", DISCRETE_TIME)


def now(increment: int = 0) -> Time:
    """Current time. If an increment is given, it is added to the current time.

    If TIME_MODE is real, the time is the number of miliseconds since the epoch.
    If TIME_MODE is discrete, the time is a monotonically increasing number (stored in TIME_FILE).
    """

    if TIME_MODE == REAL_TIME:
        if increment > 0:
            sleep(increment / 1000)
        return Time(time_ns() // 1_000_000)
    else:
        time = int(TIME_FILE.read_text() or "0")
        time += increment
        TIME_FILE.write_text(str(time))

        return Time(time)


@contextmanager
def time_mode(mode: Literal["real", "discrete"]) -> Generator[None, None, None]:
    """Context manager to temporarily change the time mode."""

    global TIME_MODE
    old_mode = TIME_MODE
    TIME_MODE = mode
    try:
        yield
    finally:
        TIME_MODE = old_mode


def transfer_money(from_: Address, to: Address, amount: int, msg: str = "") -> bool:
    """Function called to for all payments. Return whether the transaction was a success."""

    assert from_
    assert to

    if msg:
        msg = f" ({FG_ORANGE}{msg}{RESET}{BG_BLUE}) <<< "
    txt = f" >>> {to} gets {amount} pokedollars from {from_}.{msg}"
    print(fmt(txt, bg=BG))

    BANK[to] += amount
    BANK[from_] -= amount

    BANK_FILE.write_text(json.dumps(BANK))

    # For now, all transactions are successes, we do not care about non-sufficient balances.
    return True


class Status(str, Enum):
    UNCHALLENGED = "unchallenged"
    CHALLENGED = "challenged"
    VALIDATED = "validated"
    REJECTED = "rejected"

    def decided(self) -> bool:
        """Whether the validity of the claim has been decided or not.

        Once a status is decided, it shouldn't change anymore.
        """
        return self in (Status.VALIDATED, Status.REJECTED)

    def color(self) -> Tuple[int, int, int]:
        return {
            Status.REJECTED: (255, 0, 0),
            Status.VALIDATED: (0, 255, 0),
            Status.UNCHALLENGED: (255, 255, 0),
            Status.CHALLENGED: (0, 165, 255),
        }[self]


class AbstractParameters:
    """Interface that all parametrization of the sprig protocol must follow.

    Note: For now, only the Parameter class works in the rest of the code,
        for simplicity. This class only describes what interface would be needed
        if we where to extend the kinds of parameters.
    """

    def protocol_height(self) -> int:
        """Initial height of the protocol and height of the root."""
        raise NotImplementedError

    def challenge_deadline(self, challenge: Challenge) -> Time:
        """Compute the time at which a challenge cannot be activated or receive new proof attempts (depending on its status)."""
        raise NotImplementedError

    def attempt_passes_constraints(self, attempt: ProofAttempt) -> bool:
        """Whether a claim passes all constraints such as bounds on size."""
        raise NotImplementedError

    # Transfers related to proof attempts.

    def pay_new_proof_attempt(self, attempt: ProofAttempt) -> bool:
        """Make the transactions for a new proof attempt. Return whether it succeeded."""
        raise NotImplementedError

    def pay_attempt_accepted(self, attempt: ProofAttempt) -> None:
        """Make the transactions when an attempt is accepted.

        In particular:
         - Reimburse the author of the attempt of its (up+down)stakes
        """
        raise NotImplementedError

    def pay_attempt_rejected(self, attempt: ProofAttempt, rejecting: Challenge,
                             sprig: Sprig) -> None:
        """Make the transactions when an attempt is rejected.

        In particular:downstakes
         - Distribute the upstake to the parent challenge (if any)
         - Distribute the downstake to the closing challenge
        """
        raise NotImplementedError

    # Transfers related to challenges

    def pay_new_challenge(self, skeptic: Address, attempt: ProofAttempt,
                          challenge: Challenge) -> bool:
        """Make the transactions for the challenging of an attempt. Return whether it succeeded."""
        raise NotImplementedError

    def pay_challenge_validated(self, attempt: ProofAttempt, challenge: Challenge) -> None:
        """Make the transactions when a challenge get no answer and invalidates a proof attempt.

        In particular:
         - Reimburse the bounty to the author of the challenge.
        """
        raise NotImplementedError

    def pay_challenge_rejected(self, answer: ProofAttempt, sprig: Sprig) -> None:
        """Make the transactions when a challenge is closed by a valid proof attempt.

        In particular:
         - Pay the bounty to the author of the attempt that was validated.
        """
        raise NotImplementedError


@dataclass
class Parameters(AbstractParameters):
    """Parameters of a Sprig instance."""

    root_height: int
    max_length: int
    time_for_questions: int
    time_for_answers: int
    upstakes: list[int]
    downstakes: list[int]
    question_bounties: list[int]
    verification_cost: int

    def __post_init__(self) -> None:
        assert self.root_height > 0
        assert len(self.upstakes) == self.root_height
        assert len(self.downstakes) == self.root_height
        assert len(self.question_bounties) == self.root_height

        assert self.downstakes[0] == 0
        assert self.question_bounties[0] == 0

        assert self.verification_cost > 0
        assert self.max_length > 0
        assert self.time_for_questions > 0
        assert self.time_for_answers > 0

    def protocol_height(self) -> int:
        return self.root_height

    def attempt_deadline(self, created: Time, height: int) -> Time:
        return Time(created + self.time_for_questions)

    def challenge_deadline(self, challenge: Challenge) -> Time:
        if challenge.status == Status.UNCHALLENGED:
            return Time(challenge.created_at + self.time_for_questions)
        else:
            return Time(challenge.created_at + self.time_for_answers)

    def attempt_passes_constraints(self, attempt: ProofAttempt) -> bool:
        return len(attempt.proof) < self.max_length

    # Attempts

    def pay_new_proof_attempt(self, attempt: ProofAttempt) -> bool:
        if attempt.height == 0:  # machine => upstake + verif cost
            amount = self.verification_cost + self.upstakes[attempt.height]
            msg = f"machine verification {attempt}"
        else:
            amount = self.downstakes[attempt.height]
            if attempt.height < self.root_height - 1:  # non-root
                amount += self.upstakes[attempt.height]
            msg = f"new proof attempt - ⛰️{attempt.height}"

        attempt.money_held += amount
        success = transfer_money(attempt.author, SPRIG_ADDRESS, amount, msg)

        # transfer machine verification cost, which never fails
        if success and attempt.height == 0:
            transfer_money(SPRIG_ADDRESS, MACHINE_VERIF, self.verification_cost, msg)

        return success

    def pay_attempt_accepted(self, attempt: ProofAttempt) -> None:
        amount = 0

        # non-machine: reimburse the downstake
        if attempt.height > 0:
            amount = self.downstakes[attempt.height]

        # non-root: reimburse the upstake
        if attempt.height < self.root_height - 1:
            amount += self.upstakes[attempt.height]

        attempt.money_held -= amount
        transfer_money(SPRIG_ADDRESS, attempt.author, amount, f"attempt validated")

    def pay_attempt_rejected(self, attempt: ProofAttempt, rejecting: Challenge,
                             sprig: Sprig) -> None:

        # non-machine: downstakes goes to closing claim challenger.
        if attempt.height > 0:
            amount = self.downstakes[attempt.height]
            attempt.money_held -= amount
            assert rejecting.author  # Sanity check (also for mypy)
            transfer_money(SPRIG_ADDRESS, rejecting.author, amount,
                           f"downstakes to {rejecting.hash}")

        # non-root: upstake goes to challenge that was failed to answer
        if attempt.parent is not None:
            amount = self.upstakes[attempt.height]
            parent_challenge = sprig.challenges[attempt.parent]
            attempt.money_held -= amount
            assert parent_challenge.author  # Sanity check (also for mypy)
            transfer_money(SPRIG_ADDRESS, parent_challenge.author, amount,
                           f"upstakes to {parent_challenge.hash}")

    # Challenges

    def pay_new_challenge(self, skeptic: Address, attempt: ProofAttempt,
                          challenge: Challenge) -> bool:
        amount = self.question_bounties[challenge.height]
        attempt.money_held += amount
        return transfer_money(skeptic, SPRIG_ADDRESS, amount, f"challenge {challenge.hash}")

    def pay_challenge_validated(self, attempt: ProofAttempt, challenge: Challenge) -> None:
        assert challenge.author  # Sanity check
        amount = self.question_bounties[attempt.height]
        attempt.money_held -= amount
        transfer_money(SPRIG_ADDRESS, challenge.author, amount,
                       f"challenge {challenge.hash} unanswered")

    def pay_challenge_rejected(self, answer: ProofAttempt, sprig: Sprig) -> None:
        assert answer.parent is not None  # Sanity check

        challenge = sprig.challenges[answer.parent]
        amount = self.question_bounties[challenge.height]
        sprig.proofs[challenge.parent].money_held -= amount
        transfer_money(SPRIG_ADDRESS, answer.author, amount, f"challenge {challenge.hash} answered")


@dataclass
class DefaultParameters(Parameters):

    def __init__(self, root_height: int = 6):
        super().__init__(
            root_height=root_height,
            max_length=1000,
            time_for_questions=3,
            time_for_answers=3,
            upstakes=[1] * root_height,
            downstakes=[1] * root_height,
            question_bounties=[1] * root_height,
            verification_cost=1,
        )


@dataclass
class ProofAttempt:
    hash: Hash
    # Hash of the parent challenge
    parent: Optional[Hash]
    author: Address
    proof: str
    height: int
    # About height:
    #  - The height of a challenge is the same as its parent attempt
    #  - In general, the height of an object is the number of proofs that can bo below it.
    # Example:
    #  Root question  3
    #  Proof initial  2
    #  Challenge      2
    #  Proof          1
    #  Challenge      1
    #  Machine proof  0

    status: Status
    created_at: Time

    challenges: list[Hash]
    # For debugging purposes
    money_held: int

    def __str__(self) -> str:
        return f"Attempt {self.hash} by {self.author} at {self.created_at} ({self.status} {fmt_money(self.money_held)} {self.height}{HEIGHT_SYMBOL})"


@dataclass
class Challenge:
    hash: Hash
    parent: Hash
    author: Address | None
    created_at: Time
    challenged_at: Time | None
    open_until: Time
    attempts: list[Hash]
    status: Status
    height: int  # The height of a challenge is the same as it's parent attempt

    def __str__(self) -> str:
        if self.status is Status.UNCHALLENGED:
            return f"Challenge point {self.hash}"
        return f"Challenge {self.hash} by {self.author} at {self.created_at}. {self.status}"


@dataclass
class Sprig:
    """An instance of the SPRIG protocol"""

    # On the blockchain, it would likely be the address of a smart contract
    # with a compatible interface, maybe with parameters.
    language: Language
    # Constraints could also be delegated to other smart contracts, to account for different constraints,
    # different stakes models, however it is much harder to design a general interface for all possible
    # types of constraints.
    params: AbstractParameters
    proofs: dict[Hash, ProofAttempt]
    challenges: dict[Hash, Challenge]
    root_question: str

    # Calls to fixup that will need to be done in the future,
    # when we reached timeouts.
    # future_actions: list[tuple[int, Hash]]

    @classmethod
    def start(
        cls,
        language_type: str,
        params: AbstractParameters,
        claimer: Address,
        claim: str,
        proof_attempt: str,
    ) -> Sprig:
        """Start a new instance of the SPRIG protocol, originating from a claim."""

        height = params.protocol_height()
        root_attempt = ProofAttempt(hash=ROOT_HASH,
                                    parent=None,
                                    author=claimer,
                                    proof=proof_attempt,
                                    height=height,
                                    status=Status.UNCHALLENGED,
                                    created_at=now(),
                                    challenges=[],
                                    money_held=0)
        language = Language.load(language_type)
        self = cls(language,
                   params,
                   proofs={ROOT_HASH: root_attempt},
                   challenges={},
                   root_question=claim)

        assert self.language.validate_top_level(claim), "Invalid top level statement"

        self.answer(ROOT_HASH, claimer, proof_attempt)

        return self

    def __str__(self) -> str:
        # Can we make this a bit cleaner ?

        def attempt_str(attempt_hash: Hash) -> str:
            attempt = self.proofs[attempt_hash]

            ret = fmt(attempt, attempt.status.color())
            for challenge_hash in attempt.challenges:
                challenge = self.challenges[challenge_hash]
                # money = f" ({fmt_money(attempt.money_held)})" if attempt.money_held else ""
                ret += fmt(challenge, challenge.status.color())
                # ret += (
                #     fmt(f"Attempt {i + 1} by {attempt.claimer}", attempt.status.color()) + f" {money}:\n"
                # )
                for child_attempt_hash in challenge.attempts:
                    claim_s = indent(attempt_str(child_attempt_hash), INDENT)
                    ret += "  - " + claim_s[len(INDENT):]

            return ret

        return f"""
SPRIG instance:
 - Language: {self.language}
 - Claim: {self.root_question}
{indent(attempt_str(ROOT_HASH), "   ")}"""

    def next_hashes(self, count: int = 1, for_attempts: bool = True) -> list[Hash]:
        """Generate a new hashes for attempt or challenges.

        Those hash needs to be added to the attempt/challenges dictionary before other hashes can be generated."""

        first = len(self.proofs) if for_attempts else len(self.challenges)
        prefix = '' if for_attempts else 'C'

        return [Hash(prefix + str(first + i)) for i in range(count)]

    def status_count(self, status: Status) -> int:
        """Count the number of challenges of a given status."""
        return sum(1 for claim in self.challenges.values() if claim.status is status)

    def total_bounties(self) -> int:
        """Count the total amount of money held by all attempts and challenges."""
        return sum(attempt.money_held for attempt in self.proofs.values())

    # Public interface to add claims/challenges

    def challenge(self, skeptic: Address, challenge_hash: Hash) -> Challenge:
        self.distribute_all_bets()

        assert challenge_hash in self.challenges, f"The claim hash ({challenge_hash}) is not valid. Valid hashes are {list(self.challenges.keys())}"
        challenge = self.challenges[challenge_hash]
        # assert challenge.height > 0, "A machine level claim cannot be challenged."
        assert challenge.status is Status.UNCHALLENGED, f"This challenge cannot be activated anymore. {challenge}"
        assert skeptic

        attempt = self.proofs[challenge.parent]
        assert self.params.pay_new_challenge(skeptic, attempt, challenge)

        challenge.status = Status.CHALLENGED
        challenge.author = skeptic
        challenge.challenged_at = now()
        challenge.open_until = self.params.challenge_deadline(challenge)
        attempt.status = Status.CHALLENGED

        return challenge

    def answer(self, challenge_hash: Hash, claimer: Address, proof: str) -> ProofAttempt:
        """Answer a challenge with a (non-machine) proof."""
        self.distribute_all_bets()

        assert challenge_hash in self.challenges, "The claim hash is not valid."
        challenge = self.challenges[challenge_hash]
        assert challenge.status is Status.CHALLENGED, f"The challenge is not open: {challenge}"
        assert challenge.height > 1, "Use answer_low_level instead"

        parents: list[str] = self.gather_claims(challenge.parent)
        challenge_idx = self.proofs[challenge.parent].challenges.index(challenge_hash)
        assert self.language.validate_attempt(parents, challenge_idx,
                                              proof), "Invalid proof attempt."

        attempt_hash = self.next_hashes()[0]
        nb_of_challenges = self.language.nb_of_challenges(proof)
        challenges_hashes = self.next_hashes(nb_of_challenges)

        height = challenge.height - 1
        current_time = now()
        attempt = ProofAttempt(hash=attempt_hash,
                               parent=challenge_hash,
                               author=claimer,
                               proof=proof,
                               height=challenge.height - 1,
                               status=Status.UNCHALLENGED,
                               created_at=current_time,
                               challenges=challenges_hashes,
                               money_held=0)

        assert self.params.pay_new_proof_attempt(attempt), "Cannot pay the proof attempt."

        # Since the payment was successful, we can now modify the sprig instance
        self.proofs[attempt.hash] = attempt
        for h in challenges_hashes:
            challenge = Challenge(
                hash=h,
                parent=attempt.hash,
                author=None,
                created_at=current_time,
                open_until=Time(-1),  # placeholder
                challenged_at=None,
                attempts=[],
                status=Status.UNCHALLENGED,
                height=challenge.height - 1)
            challenge.open_until = self.params.challenge_deadline(challenge)
            self.challenges[h] = challenge

        # No need to update anything else in the tree
        # self.distribute_all_bets()
        return attempt

    def answer_low_level(self, challenge_hash: Hash, claimer: Address, machine_proof: str) -> ProofAttempt:
        self.distribute_all_bets()

        assert challenge_hash in self.challenges, "No such challenge."
        challenge = self.challenges[challenge_hash]
        assert challenge.status is Status.CHALLENGED, "The challenge is not open."

        attempt = ProofAttempt(hash=self.next_hashes()[0],
                               parent=challenge_hash,
                               author=claimer,
                               proof=machine_proof,
                               height=0,
                               status=Status.UNCHALLENGED,
                               created_at=now(),
                               challenges=[],
                               money_held=0)

        assert self.params.pay_new_proof_attempt(attempt)

        self.proofs[attempt.hash] = attempt
        challenge.attempts.append(attempt.hash)

        # Verify the proof
        self.distribute_all_bets()

        return attempt

    # Updating the state of the tree.

    def gather_claims(self, attempt_hash: Hash) -> list[str]:
        """Get the content of all proof attempts above (and including) an attempt."""

        attempt = self.proofs[attempt_hash]
        result = [attempt.proof]
        while attempt.parent is not None:
            challenge = self.challenges[attempt.parent]
            attempt = self.proofs[challenge.parent]
            # TODO: append only what is above in the proof ?
            result.append(attempt.proof)

        return result

    def update_attempt(self, attempt: ProofAttempt) -> None:
        """Update an attempt when it must be modified. Distributes stakes when needed."""

        challenges = [self.challenges[h] for h in attempt.challenges]

        if attempt.status.decided():
            return

        elif attempt.height == 0:
            if self.language.judge_low_level(self.gather_claims(attempt.hash)):
                attempt.status = Status.VALIDATED
            else:
                attempt.status = Status.REJECTED

        elif all(c.status is Status.VALIDATED for c in challenges):
            # If no question came, this claim is valid!
            attempt.status = Status.VALIDATED
            self.params.pay_attempt_accepted(attempt)

        elif (rejecting := get(challenges, status=Status.CHALLENGED)):
            # We know the attempt is CHALLENGED here, because
            # decided attempts are handled in the first if
            attempt.status = Status.REJECTED
            self.params.pay_attempt_rejected(attempt, rejecting, self)
        else:
            # We need to wait until all challenges are validated or one is rejected
            pass

    def update_challenge(self, challenge: Challenge) -> None:
        """Update a challenge when it must be. Distributes bounties when needed."""

        attempt = self.proofs[challenge.parent]
        if challenge.status.decided():
            return  # Nothing to do.

        elif challenge.status is Status.UNCHALLENGED:
            if now() > challenge.open_until:
                # If no question came, this claim is valid!
                challenge.status = Status.VALIDATED
                self.params.pay_challenge_validated(attempt, challenge)

        elif challenge.status is Status.CHALLENGED:
            children_attempts = [self.proofs[h] for h in challenge.attempts]

            # If any proof attempt is validated, the claim is validated too.
            answer = get(children_attempts, status=Status.VALIDATED)
            if answer:
                challenge.status = Status.VALIDATED
                # Distribute the bet from the challenge that just closed
                # downwards to the successful attempt
                self.params.pay_challenge_rejected(answer, self)
            elif now() > challenge.open_until:
                challenge.status = Status.REJECTED
                self.params.pay_challenge_validated(attempt, challenge)

    def distribute_all_bets(self) -> None:
        for attempt in self._dfs(self.proofs[ROOT_HASH]):
            for c in attempt.challenges:
                self.update_challenge(self.challenges[c])
            self.update_attempt(attempt)

    def _dfs(self, start: ProofAttempt) -> Iterator[ProofAttempt]:
        """Yield all proof attempts in the tree, starting with the leaves.

        Attempts are always yielded after all their children are yielded."""

        for challenge_hash in start.challenges:
            challenge = self.challenges[challenge_hash]
            for attempt_hash in challenge.attempts:
                attempt = self.proofs[attempt_hash]
                yield from self._dfs(attempt)
        yield attempt

    # Serialisation

    def dump_as_dict(self) -> Any:
        return json.loads(self.dumps())

    def dumps(self) -> str:
        base = dataclasses.asdict(self)
        base['language'] = self.language.dump()
        return json.dumps(base)

    @classmethod
    def loads(cls, s: str) -> Sprig:
        data = json.loads(s)

        def mkStatus(d: dict[str, Any]) -> None:
            """Recursivelly convert the status to the correct type."""
            if 'status' in d:
                d['status'] = Status(d['status'])
            for k, v in d.items():
                if isinstance(v, dict):
                    mkStatus(v)

        mkStatus(data)

        params = Parameters(**data["params"])
        proofs = {h: ProofAttempt(**attempt) for h, attempt in data["attempts"].items()}
        challenges = {h: Challenge(**challenge) for h, challenge in data["challenge"].items()}
        language = Language.load(data['language'])
        root_question = data["root_question"]

        return cls(language=language,
                   params=params,
                   proofs=proofs,
                   challenges=challenges,
                   root_question=root_question)


def time_passes(sprig: Sprig, amount: int=1) -> None:
    sprig.distribute_all_bets()
    print("Time is", fmt(now(), ORANGE))
    print(sprig)

    now(amount)

    sprig.distribute_all_bets()
    print("Time is", fmt(now(), ORANGE))
    print(sprig)

    padding = max(map(len, BANK))
    for address, balance in BANK.items():
        balance = f"{balance} ₽"
        print(f"{address.ljust(padding)} ({fmt(balance, ORANGE)})")
    print()


def play_tictactoe(params: Parameters, MICHAEL: Address, DIEGO: Address, CLEMENT: Address) -> Sprig:
    ctx = " O plays X wins"
    sprig = Sprig.start(
        TicTacToe().dump(), params, Address("Diego"), "...|XX.|... O plays X wins",
        """O plays X wins
        O..|XXX|...
        .O.|XXX|...
        ..O|XXX|...
        X..|XXO|...
        ...|XXX|O..
        ...|XXX|.O.
        ...|XXX|..O""")

    time_passes(sprig)

    root = sprig.proofs[ROOT_HASH]
    c1 = sprig.challenge(MICHAEL, root.challenges[2])
    c2 = sprig.challenge(MICHAEL, root.challenges[4])

    time_passes(sprig)
    a1 = sprig.answer(
        c1.hash,
        DIEGO,
        """O plays X wins
        XO.|XXO|X..
        XXO|XXO|...
        X..|XXO|O.X
        X..|XXO|XO.
        X..|XXO|X.O"""
    )

    time_passes(sprig)
    sprig.answer_low_level(c2.hash, DIEGO, "-2")

    time_passes(sprig)
    c3 = sprig.challenge(MICHAEL, a1.challenges[2])

    time_passes(sprig)

    sprig.answer(
        c2.hash,
        CLEMENT,
        """O plays X wins
        XO.|XXO|X..
        X.O|XXO|X..
        X..|XXO|O.X
        X..|XXO|XO.
        X..|XXO|X.O"""
    )

    time_passes(sprig)
    time_passes(sprig)
    time_passes(sprig)

    # print(sprig.gather_claims(sprig.proofs['4']))

    return sprig


def play_lean(params: Parameters, MICHAEL, DIEGO, CLEMENT):
    sprig = Sprig.start(
        Lean().dump(), params, Address("Diego"), "lemma add_comm a b : nat) : a + b = b + a", """
        def zero := 0

        lemma z_add (n : nat) : zero + n = n :=
        begin
            sorry
        end

        lemma add_succ (a b : nat) : a + nat.succ(b) = nat.succ(a + b) :=
        begin
            sorry
        end

        lemma add_comm (a b : nat) : a + b = b + a :=
        begin
            sorry
        end
        """)

    time_passes(sprig)

    sprig.challenge(MICHAEL, "3")

    time_passes(sprig)

    sprig.answer("3", DIEGO, """false claim""", """false claim => add_comm""")

    time_passes(sprig)

    sprig.challenge(MICHAEL, "4")
    sprig.answer(
        "3", CLEMENT, """lemma succ_add (a b : nat) : nat.succ a + b = nat.succ (a + b) :=
        begin
            sorry
        end
        """, """lemma add_comm (a b : nat) : a + b = b + a :=
        begin
        induction b, rw add_zero, rw z_add, refl,
        rw succ_add, rw add_succ, rw b_ih, refl,
        end
        """)

    time_passes(sprig)

    sprig.challenge(MICHAEL, "6")

    time_passes(sprig)

    sprig.answer_low_level(
        "6", DIEGO, """lemma succ_add (a b : nat) : nat.succ a + b = nat.succ (a + b) :=
        begin
            induction b, rw add_zero, rw add_zero,
            rw add_succ, rw b_ih,
        end
        """)

    time_passes(sprig)
    time_passes(sprig)
    time_passes(sprig)

    return sprig


def main() -> None:
    now(-now())  # reset the time to 0
    BANK.clear()  # reset the bank

    MICHAEL = Address("Michael")
    DIEGO = Address("Diego")
    CLEMENT = Address("Clément")

    level = 5
    params = Parameters(
        root_height=level,
        max_length=1000,
        time_for_questions=2,
        time_for_answers=2,
        upstakes=[5, 4, 3, 2, 1],
        downstakes=[0, 1, 2, 3, 4],
        question_bounties=[0, 1, 2, 3, 4],
        verification_cost=1,
    )

    if "tictactoe" in sys.argv:
        s = play_tictactoe(params, MICHAEL, DIEGO, CLEMENT)
    else:
        s = play_lean(params, MICHAEL, DIEGO, CLEMENT)

    # print(s.dumps())


if __name__ == "__main__":
    main()
