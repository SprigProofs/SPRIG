from __future__ import annotations

import dataclasses
import json
import os
import sys
import subprocess
from collections import defaultdict
from contextlib import contextmanager
from copy import deepcopy
from dataclasses import dataclass
from enum import Enum
from pathlib import Path
from textwrap import indent
from time import sleep, time_ns
from hashlib import sha256
from typing import Generator, Literal, NewType, Optional, Tuple, Iterator, Any, cast

from languages import Lean4, TicTacToe
from languages.base import Language
from utils import *

# A type alias to know when a str is the address of someone.
# It is used only for type checking, and does nothing at runtime
Address = NewType("Address", str)
# A Type alias to identify claims
Hash = NewType("Hash", str)
Time = NewType("Time", int)
Branch = list[tuple[str, int]]

# ROOT_HASH = Hash("P0")
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

REAL_TIME = "real"  # UNIX timestamp, in milliseconds
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


def transfer_money(from_: Address, to: Address, amount: float, msg: str = "") -> bool:
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

    def __str__(self) -> str:
        return fmt(self.value.title(), fg=self.color())


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

    def pay_new_proof_attempt(self, attempt: ProofAttempt, sprig: Sprig) -> bool:
        """Make the transactions for a new proof attempt. Return whether it succeeded."""
        raise NotImplementedError

    def pay_attempt_accepted(self, attempt: ProofAttempt) -> None:
        """Make the transactions when an attempt is accepted.

        In particular:
         - Reimburse the author of the attempt of its (up+down)stakes
        """
        raise NotImplementedError

    def pay_attempt_rejected(self, attempt: ProofAttempt, rejecting: Challenge | None,
                             sprig: Sprig) -> None:
        """Make the transactions when an attempt is rejected.

        In particular:downstakes
         - Distribute the upstake to the parent challenge (if any)
         - Distribute the downstake to the closing challenge (if not machine)
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


def jsFrontendReach(parameters: list[str],
                    throwingError: bool = False) -> subprocess.CompletedProcess[str]:
    """To call the frontend for Reach written in Javascript, to interact
    with the blockchain. It throws an error when the Javascript returns
    an error if throwingError=True, and parameters must be a list of
    strings.
    """
    env = os.environ.copy()
    env.update({'REACH_CONNECTOR_MODE': 'ALGO'})
    parameters = ["node", "./frontend/reach/index.mjs"] + parameters
    print("Running", parameters)
    process = subprocess.run(parameters, capture_output=True, env=env, text=True)
    print("JS stdout", process.stdout)
    if throwingError and process.returncode != 0:
        print("JS stderr", process.stderr)
        raise Exception("JS error")
    return process


def hashingChallenge(challenge: Challenge, attempt: ProofAttempt) -> str:
    """Create the hash corresponding to a challenge. It returns
    an hexadecimal number.
    """
    part_challenged = attempt.challenges.index(challenge.hash)
    h = sha256()
    h.update(bytes(attempt.contract + str(part_challenged), 'utf-8'))
    return "0x" + h.hexdigest()


def hashingAnswer(answer: ProofAttempt, challenge: Challenge | None) -> str:
    """Create the hash corresponding to an answer or a claim. It
    returns an hexadecimal number.
    """
    contractParent = "" if challenge is None else challenge.contract
    h = sha256()
    assert isinstance(contractParent, str), "contractParent is not a string: report this bug"
    h.update(bytes(answer.proof + contractParent, 'utf-8'))
    return "0x" + h.hexdigest()


@dataclass
class Parameters(AbstractParameters):
    """Parameters of a Sprig instance."""

    root_height: int
    max_length: int
    time_for_questions: int
    time_for_answers: int
    upstakes: list[float]
    downstakes: list[float]
    question_bounties: list[float]
    verification_cost: float

    def __post_init__(self) -> None:
        assert self.root_height > 1
        assert len(self.upstakes) == self.root_height
        assert len(self.downstakes) == self.root_height
        assert len(self.question_bounties) == self.root_height

        assert self.downstakes[0] == 0
        assert self.question_bounties[0] == 0
        assert all(x > 0 for x in self.upstakes[:-1])
        assert all(x > 0 for x in self.downstakes[1:])
        assert all(x > 0 for x in self.question_bounties[1:])

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
            assert challenge.challenged_at is not None  # Sanity check
            return Time(challenge.challenged_at + self.time_for_answers)

    def attempt_passes_constraints(self, attempt: ProofAttempt) -> bool:
        return len(attempt.proof) < self.max_length

    # Attempts

    def pay_new_proof_attempt(self, attempt: ProofAttempt, sprig: Sprig) -> bool:
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
            attempt.money_held -= self.verification_cost
            transfer_money(SPRIG_ADDRESS, MACHINE_VERIF, self.verification_cost, msg)

        return success

    def pay_attempt_accepted(self, attempt: ProofAttempt) -> None:
        amount = 0.0

        # non-machine: reimburse the downstake
        if attempt.height > 0:
            amount = self.downstakes[attempt.height]

        # non-root: reimburse the upstake
        if attempt.height < self.root_height - 1:
            amount += self.upstakes[attempt.height]

        attempt.money_held -= amount
        transfer_money(SPRIG_ADDRESS, attempt.author, amount, f"attempt validated")

    def pay_attempt_rejected(self, attempt: ProofAttempt, rejecting: Challenge | None,
                             sprig: Sprig) -> None:

        # non-machine: downstakes goes to closing claim challenger.
        if attempt.height > 0:
            amount = self.downstakes[attempt.height]
            attempt.money_held -= amount
            assert rejecting and rejecting.author  # Sanity check (also for mypy)
            transfer_money(SPRIG_ADDRESS, rejecting.author, amount,
                           f"downstakes to {rejecting.hash}")
        else:
            assert rejecting is None

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
class ParametersBlockchain(Parameters):
    """Parameters of a Sprig instance on the blockchain"""

    DELAY = 10 * 60 * 1000  # 10 minutes

    # Attempts

    def pay_new_proof_attempt(self, attempt: ProofAttempt, sprig: Sprig) -> bool:
        # Check that it was not created too long ago
        if not (now() - self.DELAY < attempt.created_at <= now()):
            raise AssertionError("Attempt created too long ago (more than 10min).")

        if attempt.parent is None:
            challenge = None
            address_skeptic = "None"
        else:
            challenge = sprig.challenges[attempt.parent]
            address_skeptic = str(challenge.author)
        if attempt.height == 0:
            process = jsFrontendReach([
                "VERIFY",
                "ANSWER",
                str(attempt.contract),
                attempt.author,
                address_skeptic,
                str(attempt.created_at + self.time_for_questions),
                str(self.upstakes[attempt.height]),
                '0',
                hashingAnswer(attempt, challenge),
                "true",
            ])
        else:
            process = jsFrontendReach([
                "VERIFY",
                "ANSWER",
                str(attempt.contract),
                attempt.author,
                address_skeptic,
                str(attempt.created_at + self.time_for_questions),
                str(self.upstakes[attempt.height]),
                str(self.downstakes[attempt.height]),
                hashingAnswer(attempt, challenge),
                "false",
            ])
        print(process.stdout)
        successful = process.returncode == 0 and process.stdout.endswith("true\n")
        if successful and challenge is not None:
            jsFrontendReach([
                "ADD_PARTICIPANT", "CHALLENGE",
                str(challenge.contract), attempt.author, attempt.contract
            ])
        elif not successful:
            print("Error: ", process.stderr)
            print("Output: ", process.stdout)
        return successful

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
            attempt.money_held -= self.verification_cost
            transfer_money(SPRIG_ADDRESS, MACHINE_VERIF, self.verification_cost, msg)

        return success

    def pay_attempt_accepted(self, attempt: ProofAttempt) -> None:
        if attempt.height == 0:
            jsFrontendReach([
                "ANNOUNCE_VERIFICATION",
                "ANSWER",
                str(attempt.contract),
                "true",
            ],
                            throwingError=True)
        else:
            jsFrontendReach(["ANNOUNCE_WINNER", "ANSWER",
                             str(attempt.contract), "true", "0"],
                            throwingError=True)
        return
        amount = 0

        # non-machine: reimburse the downstake
        if attempt.height > 0:
            amount = self.downstakes[attempt.height]

        # non-root: reimburse the upstake
        if attempt.height < self.root_height - 1:
            amount += self.upstakes[attempt.height]

        attempt.money_held -= amount
        transfer_money(SPRIG_ADDRESS, attempt.author, amount, f"attempt validated")

    def pay_attempt_rejected(self, attempt: ProofAttempt, rejecting: Challenge | None,
                             sprig: Sprig) -> None:

        if attempt.height == 0:
            jsFrontendReach([
                "ANNOUNCE_VERIFICATION",
                "ANSWER",
                str(attempt.contract),
                "false",
            ],
                            throwingError=True)
        else:
            assert rejecting is not None
            jsFrontendReach([
                "ANNOUNCE_WINNER",
                "ANSWER",
                str(attempt.contract),
                "false",
                str(rejecting.contract),
            ],
                            throwingError=True)
        return
        # non-machine: downstakes goes to closing claim challenger.
        if attempt.height > 0:
            amount = self.downstakes[attempt.height]
            attempt.money_held -= amount
            assert rejecting and rejecting.author  # Sanity check (also for mypy)
            transfer_money(SPRIG_ADDRESS, rejecting.author, amount,
                           f"downstakes to {rejecting.hash}")
        else:
            assert rejecting is None

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
        assert challenge.challenged_at is not None
        assert challenge.author is not None
        assert challenge.contract is not None

        # Check that it was not created too long ago
        if not (now() - self.DELAY < challenge.challenged_at <= now()):
            print(now() - self.DELAY, challenge.challenged_at, now())
            raise AssertionError("Attempt created too long ago (more than 10min).")

        process = jsFrontendReach([
            "VERIFY", "CHALLENGE",
            str(challenge.contract),
            str(challenge.author), "NONE",
            str(challenge.open_until), "0",
            str(self.downstakes[challenge.height]),
            hashingChallenge(challenge, attempt), "false"
        ])
        print("stderr js:", process.stderr)
        print("stdout js:", process.stdout)
        successful = process.returncode == 0 and process.stdout.endswith("true\n")
        if successful:
            jsFrontendReach([
                "ADD_PARTICIPANT", "ANSWER",
                str(attempt.contract), challenge.author, challenge.contract
            ])
        return successful
        amount = self.question_bounties[challenge.height]
        attempt.money_held += amount
        return transfer_money(skeptic, SPRIG_ADDRESS, amount, f"challenge {challenge.hash}")

    def pay_challenge_validated(self, attempt: ProofAttempt, challenge: Challenge) -> None:
        assert challenge.author  # Sanity check
        jsFrontendReach(["ANNOUNCE_WINNER", "CHALLENGE",
                         str(challenge.contract), "true", "0"],
                        throwingError=True)
        return
        amount = self.question_bounties[attempt.height]
        attempt.money_held -= amount
        transfer_money(SPRIG_ADDRESS, challenge.author, amount,
                       f"challenge {challenge.hash} unanswered")

    def pay_challenge_rejected(self, answer: ProofAttempt, sprig: Sprig) -> None:
        assert answer.parent is not None  # Sanity check
        challenge = sprig.challenges[answer.parent]
        jsFrontendReach(
            ["ANNOUNCE_WINNER", "CHALLENGE",
             str(challenge.contract), "false", answer.contract],
            throwingError=True)
        return
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
    # Hash of the parent challenge
    parent: Optional[Hash]
    # Address of the contract on the blockchain
    contract: str
    # Address of the author of the contract
    author: Address
    proof: str
    height: int
    # About height:
    #  - The height of a challenge is the same as its parent attempt
    #  - In general, the height of an object is the number of proofs that can bo below it.
    # Example:
    #  Root question  3  <- also params.root_height
    #  Proof initial  2
    #  Challenge      2
    #  Proof          1
    #  Challenge      1
    #  Machine proof  0

    status: Status
    created_at: Time

    # The index of a challenge corresponds to the part of the proof that is challenged.
    # So for example the challenge at index 4 challenges the fifth part of the proof.
    challenges: list[Hash]

    money_held: float

    @property
    def hash(self) -> Hash:
        return Hash(self.contract)

    def __str__(self) -> str:
        return (
            f"Attempt {self.hash} by {fmt(self.author, (255, 255, 255))} at {self.created_at} " +
            f"({self.status}, {fmt_money(self.money_held)}, {self.height}{HEIGHT_SYMBOL})")


@dataclass
class Challenge:
    hash: Hash
    parent: Hash
    contract: Optional[str]
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
        elif self.author is None:
            return f"Challenge point {self.hash} {self.status}"
        return f"Challenge {self.hash} by {self.author} at {self.challenged_at}. {self.status}"


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
    root_hash: Hash

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
        contract: Hash,
        created_at: Time | None = None,
    ) -> Sprig:
        """Start a new instance of the SPRIG protocol, originating from a claim."""

        height = params.protocol_height()
        language = Language.load(language_type)
        self = cls(language,
                   params,
                   proofs={},
                   challenges={},
                   root_question=claim,
                   root_hash=contract)

        assert self.language.validate_top_level(claim), "Invalid top level statement"

        self.answer(contract, claimer, proof_attempt, contract, created_at)

        return self

    def __str__(self) -> str:
        # Can we make this a bit cleaner ?

        def attempt_str(attempt_hash: Hash) -> str:
            attempt = self.proofs[attempt_hash]

            ret = f"{attempt}\n"
            for challenge_hash in attempt.challenges:
                challenge = self.challenges[challenge_hash]
                ret += f"+ {challenge}\n"

                for child_attempt_hash in challenge.attempts:
                    claim_s = indent(attempt_str(child_attempt_hash), INDENT)
                    ret += "  - " + claim_s[len(INDENT):]

            return ret

        return f"""
SPRIG instance:
 - Language: {self.language}
 - Claim: {self.root_question}
{indent(attempt_str(self.root_hash), "   ")}"""

    def next_hashes(self, count: int = 1, for_attempts: bool = True) -> list[Hash]:
        """Generate a new hashes for attempt or challenges.

        Those hash needs to be added to the attempt/challenges dictionary before other hashes can be generated."""
        assert not for_attempts

        first = len(self.proofs) if for_attempts else len(self.challenges)
        prefix = 'P' if for_attempts else 'C'

        return [Hash(prefix + str(first + i)) for i in range(count)]

    def status_count(self, status: Status) -> int:
        """Count the number of challenges of a given status."""
        return sum(1 for claim in self.challenges.values() if claim.status is status)

    def total_bounties(self) -> float:
        """Count the total amount of money held by all attempts and challenges."""
        return sum(attempt.money_held for attempt in self.proofs.values())

    # Public interface to add claims/challenges

    def challenge(self,
                  skeptic: Address,
                  challenge_hash: Hash,
                  contract: str,
                  created_at: Time | None = None) -> Challenge:
        self.distribute_all_bets()

        assert challenge_hash in self.challenges, f"The claim hash ({challenge_hash}) is not valid. Valid hashes are {list(self.challenges.keys())}"
        challenge = self.challenges[challenge_hash]
        # assert challenge.height > 0, "A machine level claim cannot be challenged."
        assert challenge.status is Status.UNCHALLENGED, f"This challenge cannot be activated anymore. {challenge}"
        assert skeptic
        assert contract

        attempt = self.proofs[challenge.parent]
        new = deepcopy(challenge)
        new.contract = contract
        new.status = Status.CHALLENGED
        new.author = skeptic
        new.challenged_at = created_at or now()
        new.open_until = self.params.challenge_deadline(new)

        if not self.params.pay_new_challenge(skeptic, attempt, new):
            raise AssertionError("Payment/verification failed")

        self.challenges[challenge_hash] = new
        attempt.status = Status.CHALLENGED

        return new

    def answer(self,
               challenge_hash: Hash,
               claimer: Address,
               proof: str,
               contract: str,
               created_at: Time | None = None) -> ProofAttempt:
        """Answer a challenge with a (non-machine) proof."""

        if challenge_hash is self.root_hash:
            assert self.root_hash not in self.proofs, "The root question already has an attempt."
            height = self.params.protocol_height() - 1
            parents: Branch = []
        else:
            self.distribute_all_bets()

            assert challenge_hash in self.challenges, "The claim hash is not valid."
            challenge = self.challenges[challenge_hash]
            assert challenge.status is Status.CHALLENGED, f"The challenge is not open: {challenge}"
            assert challenge.height > 1, "Use answer_low_level instead"

            height = challenge.height - 1
            parents = self.gather_branch(challenge.hash)

        assert self.language.validate_attempt(self.root_question, parents,
                                              proof), "Invalid proof attempt."

        nb_of_challenges = self.language.nb_of_challenges(proof)
        challenges_hashes = self.next_hashes(nb_of_challenges, for_attempts=False)
        assert nb_of_challenges > 0, "Proof with no challenges must be submitted with answer_low_level."

        if created_at is None:
            created_at = now()
        attempt = ProofAttempt(
            parent=challenge_hash if challenge_hash is not self.root_hash else None,
            author=claimer,
            proof=proof,
            contract=contract,
            height=height,
            status=Status.UNCHALLENGED,
            created_at=created_at,
            challenges=challenges_hashes,
            money_held=0)

        assert self.params.pay_new_proof_attempt(attempt, self), "Cannot pay the proof attempt."

        # Since the payment was successful, we can now modify the sprig instance
        self.proofs[attempt.hash] = attempt
        for h in challenges_hashes:
            challenge = Challenge(
                hash=h,
                parent=attempt.hash,
                author=None,
                contract=None,
                created_at=created_at,
                open_until=Time(-1),  # placeholder
                challenged_at=None,
                attempts=[],
                status=Status.UNCHALLENGED,
                height=height)
            challenge.open_until = self.params.challenge_deadline(challenge)
            self.challenges[h] = challenge

        if challenge_hash is not self.root_hash:
            self.challenges[challenge_hash].attempts.append(attempt.hash)

        # No need to update anything else in the tree
        # self.distribute_all_bets()
        return attempt

    def answer_low_level(self,
                         challenge_hash: Hash,
                         claimer: Address,
                         proof: str,
                         contract: str,
                         created_at: Time | None = None) -> ProofAttempt:
        self.distribute_all_bets()

        assert challenge_hash in self.challenges, "No such challenge."
        challenge = self.challenges[challenge_hash]
        assert challenge.status is Status.CHALLENGED, "The challenge is not open."
        assert contract

        attempt = ProofAttempt(parent=challenge_hash,
                               author=claimer,
                               proof=proof,
                               contract=contract,
                               height=0,
                               status=Status.UNCHALLENGED,
                               created_at=created_at or now(),
                               challenges=[],
                               money_held=0)

        assert self.params.pay_new_proof_attempt(attempt, self)

        self.proofs[attempt.hash] = attempt
        challenge.attempts.append(attempt.hash)

        # Verify the proof
        self.distribute_all_bets()

        return attempt

    # Updating the state of the tree.

    def gather_branch(self, challenge_hash: Hash) -> Branch:
        """Get the content of the branch above (and including) a challenge."""

        branch: Branch = []
        h: Hash | None = challenge_hash
        while h is not None:
            challenge = self.challenges[h]
            attempt = self.proofs[challenge.parent]
            branch.append((attempt.proof, attempt.challenges.index(h)))

            h = attempt.parent

        return branch

    def update_attempt(self, attempt: ProofAttempt) -> None:
        """Update an attempt when it must be modified. Distributes stakes when needed."""

        challenges = [self.challenges[h] for h in attempt.challenges]

        if attempt.status.decided():
            return

        elif attempt.height == 0:
            assert attempt.parent  # sanity check. It Should not be possible to create a sprig instance directly with a machine proof.
            if self.language.judge_low_level(self.root_question, self.gather_branch(attempt.parent),
                                             attempt.proof):
                attempt.status = Status.VALIDATED
                self.params.pay_attempt_accepted(attempt)
            else:
                attempt.status = Status.REJECTED
                self.params.pay_attempt_rejected(attempt, None, self)

        elif all(c.status is Status.VALIDATED for c in challenges):
            # If no question came, this claim is valid!
            attempt.status = Status.VALIDATED
            self.params.pay_attempt_accepted(attempt)

        elif (rejecting := get(challenges, status=Status.REJECTED)):
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
                # If no question came, this claim is valid and there no one to pay.
                challenge.status = Status.VALIDATED

        elif challenge.status is Status.CHALLENGED:
            children_attempts = [self.proofs[h] for h in challenge.attempts]

            # If any proof attempt is validated, the claim is validated too.
            answer = get(children_attempts, status=Status.VALIDATED)
            if answer:
                challenge.status = Status.VALIDATED
                challenge.open_until = now()
                # Distribute the bet from the challenge that just closed
                # downwards to the successful attempt
                self.params.pay_challenge_rejected(answer, self)
            elif now() > challenge.open_until and all(c.status is Status.REJECTED
                                                      for c in children_attempts):
                # If all child attempts are rejected and the time is over, we know the claim is invalid.
                challenge.status = Status.REJECTED
                self.params.pay_challenge_validated(attempt, challenge)

    def distribute_all_bets(self) -> None:
        for attempt in self._dfs(self.proofs[self.root_hash]):
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
        yield start

    # Serialisation

    def dump_as_dict(self) -> dict[str, Any]:
        return cast(dict[str, Any], json.loads(self.dumps()))

    def dumps(self) -> str:
        base = dataclasses.asdict(self)
        base['language'] = self.language.dump()
        return json.dumps(base)

    @classmethod
    def loads(cls, s: str, blockchain: bool = False) -> Sprig:
        data = json.loads(s)

        def mkStatus(d: dict[str, Any]) -> None:
            """Recursivelly convert the status to the correct type."""
            if 'status' in d:
                d['status'] = Status(d['status'])
            for k, v in d.items():
                if isinstance(v, dict):
                    mkStatus(v)

        mkStatus(data)

        if not blockchain:
            params = Parameters(**data["params"])
        else:
            params = ParametersBlockchain(**data["params"])

        proofs = {h: ProofAttempt(**attempt) for h, attempt in data["proofs"].items()}
        challenges = {h: Challenge(**challenge) for h, challenge in data["challenges"].items()}
        language = Language.load(data['language'])
        root_question = data["root_question"]
        root_hash = data["root_hash"]

        return cls(language=language,
                   params=params,
                   proofs=proofs,
                   challenges=challenges,
                   root_question=root_question,
                   root_hash=root_hash)


####################################################
#                                                 #
#        Example runs on TicTacToe and Lean       #
#                                                 #
####################################################

MICHAEL = Address("Michael")
DIEGO = Address("Diego")
CLEMENT = Address("Clément")


def time_passes(sprig: Sprig, amount: int = 1) -> None:
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


def play_tictactoe(params: Parameters) -> Sprig:
    sprig = Sprig.start(
        TicTacToe().dump(), params, Address("Diego"), "...|XX.|... O plays X wins", """
        1 -> 6
        2 -> 6
        3 -> 6
        6 -> 1
        7 -> 6
        8 -> 6
        9 -> 6
        """, Hash("ctc1"))

    time_passes(sprig)

    root = sprig.proofs[sprig.root_hash]
    c1 = sprig.challenge(MICHAEL, root.challenges[1], "ctc2")
    c2 = sprig.challenge(MICHAEL, root.challenges[3], "ctc3")

    time_passes(sprig)
    a1 = sprig.answer(
        c2.hash, DIEGO, """
        Case X..|XXO|...
        2 -> 7
        3 -> 2
        7 -> 9
        8 -> 7
        9 -> 7
        """, "ctc4")

    time_passes(sprig)
    sprig.answer_low_level(c2.hash, DIEGO, "-2", "ctc5")

    print(sprig.dumps())
    # quit()
    time_passes(sprig)
    c3 = sprig.challenge(MICHAEL, a1.challenges[2], "ctc6")

    time_passes(sprig)

    sprig.answer(
        c2.hash, CLEMENT, """
        Case X..|XXO|...
        2 -> 7
        3 -> 7
        7 -> 9
        8 -> 7
        9 -> 7
        """, "ctc7")

    for _ in range(5):
        time_passes(sprig)

    # print(sprig.gather_claims(sprig.proofs['4']))

    from pprint import pprint
    # pprint(sprig)

    pprint(sprig.params)

    return sprig


def play_lean(params: Parameters) -> Sprig:
    sprig = Sprig.start(
        Lean4().dump(), params, Address("Diego"), """
--! SPRIG Claim
theorem this_add_comm (m n : Nat) : m + n = n + m := sorry
--! Claim end
""", """
open Nat

example : m + 0 = m := add_zero m
example : m + succ n = succ (m + n) := add_succ m n

--! SPRIG Claim
theorem this_succ_add (n m : Nat) : succ n + m = succ (n + m) := sorry
--! Claim end

--! SPRIG Claim
theorem this_add_comm (m n : Nat) : m + n = n + m := sorry
--! Claim end
""", Hash("ctc1"))

    time_passes(sprig)

    succ_add = sprig.proofs[sprig.root_hash].challenges[0]
    c1 = sprig.challenge(MICHAEL, succ_add, "ctc2")

    add_comm = sprig.proofs[sprig.root_hash].challenges[1]
    c2 = sprig.challenge(MICHAEL, add_comm, "ctc3")

    time_passes(sprig)

    a1 = sprig.answer(
        c1.hash, DIEGO, """
        --! SPRIG Claim
        theorem this_succ_add (n m : Nat) : succ n + m = succ (n + m) := sorry
        --! Claim end
        """, "ctc4")

    a2 = sprig.answer_low_level(
        c2.hash, DIEGO, """
        theorem this_add_comm (m n : Nat) : m + n = n + m :=
            Nat.recOn (motive := fun x => m + x = x + m) n
                (by simp)
                (fun m ih => by simp only [add_succ, this_succ_add, ih])
        """, "ctc5")

    time_passes(sprig)

    c3 = sprig.challenge(MICHAEL, a1.challenges[0], "ctc6")

    time_passes(sprig)

    a3 = sprig.answer(
        c3.hash, DIEGO, """
        --! SPRIG Claim
        theorem this_succ_add (n m : Nat) : succ n + m = succ (n + m) := sorry
        --! Claim end
        """, "ctc7")

    time_passes(sprig)

    c4 = sprig.challenge(MICHAEL, a3.challenges[0], "ctc8")

    time_passes(sprig)

    a4 = sprig.answer(
        c4.hash, DIEGO, """
        --! SPRIG Claim
        theorem this_succ_add (n m : Nat) : succ n + m = succ (n + m) := sorry
        --! Claim end
        """, "ctc9")

    time_passes(sprig)

    c5 = sprig.challenge(MICHAEL, a4.challenges[0], "ctc10")

    time_passes(sprig)

    a5 = sprig.answer_low_level(
        c5.hash, DIEGO, """
        theorem this_succ_add (n m : Nat) : succ n + m = succ (n + m) := 2
        """, "ctc11")

    time_passes(sprig)

    a6 = sprig.answer_low_level(
        succ_add, CLEMENT, """
    theorem this_succ_add (n m : Nat) : succ n + m = succ (n + m) :=
        Nat.recOn (motive := fun x => succ n + x = succ (n + x)) m
            rfl
            (fun m ih => by simp only [add_succ, ih])
    """, "ctc12")

    time_passes(sprig, 4 * 1000 * 3600 * 24 + 1)

    return sprig


def main() -> None:
    now(-now())  # reset the time to 0
    BANK.clear()  # reset the bank

    level = 5
    params = Parameters(
        root_height=level,
        max_length=1000,
        time_for_questions=3 * 1000 * 3600 * 24,
        time_for_answers=4 * 1000 * 3600 * 24,
        upstakes=[5, 4, 3, 2, 1],
        downstakes=[0, 1, 2, 3, 4],
        question_bounties=[0, 1, 2, 3, 4],
        verification_cost=1,
    )

    if "tictactoe" in sys.argv:
        s = play_tictactoe(params)
    else:
        s = play_lean(params)

    print(s.dumps())


if __name__ == "__main__":
    main()
