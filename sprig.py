from __future__ import annotations

import dataclasses
import itertools
import os

# try:
#     from NOPEpydantic.dataclasses import dataclass
# except ImportError:
#     print("No support for the web api. Install the dependancies with poetry install.")
from dataclasses import dataclass
import json
from collections import defaultdict
from enum import Enum
from pathlib import Path
import sys
from time import sleep, time_ns
from typing import NewType, Optional

from languages.base import Language
from utils import *

from languages import TicTacToe, Lean

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

def now(increment=0) -> Time:
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


def transfer_money(from_, to, amount, msg="") -> bool:
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

    def decided(self):
        """Whether the validity of the claim has been decided or not.

        Once a status is decided, it shouldn't change anymore.
        """
        return self in (Status.VALIDATED, Status.REJECTED)

    def color(self):
        return {
            Status.REJECTED: (255, 0, 0),
            Status.VALIDATED: (0, 255, 0),
            Status.UNCHALLENGED: (255, 255, 0),
            Status.CHALLENGED: (0, 165, 255),
        }[self]

    @classmethod
    def load(cls, value, default=None):
        if value is None:
            # With no information, we use UNCHALLENGED, as it is
            # the default value when creating claims/attempts.
            return default or cls.UNCHALLENGED
        elif isinstance(value, str):
            # For deserialisation
            return cls(value.lower())
        return value


class AbstractParameters:
    """Interface that all parametrization of the sprig protocol must follow.

    Note: For now, only the Parameter class works in the rest of the code,
        for simplicity. This class only describes what interface would be needed
        if we where to extend the kinds of parameters.
    """

    def protocol_height(self) -> int:
        """Initial height of the protocol and height of the root."""
        raise NotImplementedError

    def deadline(self, claim: Claim) -> Optional[Time]:
        """Compute the time at which a non-decided claim becomes decided, if no actions are taken.

        If the claim is UNCHALLENGED, it is the time to ask questions.
        If the claim is CHALLENGED, it is the time to answer questions.
        """
        raise NotImplementedError

    def claim_passes_constraints(self, claim: Claim) -> bool:
        """Whether a claim passes all constraints such as bounds on size."""
        raise NotImplementedError

    # Transfers related to proof attempts.

    def pay_new_proof_attempt(self, attempt: ProofAttempt) -> bool:
        """Make the transactions for a new proof attempt. Return whether it succeeded."""
        raise NotImplementedError

    def pay_attempt_accepted(self, attempt: ProofAttempt, sprig: Sprig):
        """Make the transactions when an attempt is accepted.

        In particular:
         - Reimburse the author of the attempt of its (up+down)stakes
        """
        raise NotImplementedError

    def pay_attempt_rejected(self, attempt: ProofAttempt, rejecting: Claim, sprig: Sprig):
        """Make the transactions when an attempt is rejected.

        In particular:
         - Distribute the upstake to the parent challenge (if any)
         - Distribute the downstake to the closing challenge
        """
        raise NotImplementedError

    # Transfers related to challenges

    def pay_new_challenge(self, skeptic: Address, claim: Claim) -> bool:
        """Make the transactions for the challenging of a claim. Return whether it succeeded."""
        raise NotImplementedError

    def pay_challenge_defeating(self, claim: Claim):
        """Make the transactions when a challenge get no answer and invalidates a proof attempt.

        In particular:
         - Reimburse the bounty to the author of the challenge.
        """
        raise NotImplementedError

    def pay_challenge_answered(self, claim: Claim, closing_attempt: ProofAttempt) -> bool:
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

    def __post_init__(self):
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

    def deadline(self, claim: Claim) -> Optional[Time]:
        if claim.status is Status.UNCHALLENGED:
            return Time(claim.last_modification + self.time_for_questions)
        elif claim.status is Status.CHALLENGED:
            return Time(claim.last_modification + self.time_for_answers)
        else:
            return None

    def claim_passes_constraints(self, claim: Claim) -> bool:
        return len(claim.statement) < self.max_length

    # Attempts

    def pay_new_proof_attempt(self, attempt: ProofAttempt) -> bool:
        if attempt.height == 0:  # machine => upstake + verif cost
            amount = self.verification_cost + self.upstakes[attempt.height]
            msg = f"machine verification {attempt.claims[0]}"
        else:
            amount = self.downstakes[attempt.height]
            if attempt.height < self.root_height - 1:  # non-root
                amount += self.upstakes[attempt.height]
            msg = f"new proof attempt - ⛰️{attempt.height}"

        attempt.money_held += amount
        success = transfer_money(attempt.claimer, SPRIG_ADDRESS, amount, msg)

        # transfer machine verification cost, which never fails
        if success and attempt.height == 0:
            transfer_money(SPRIG_ADDRESS, MACHINE_VERIF, self.verification_cost, f"machine verification of {attempt.claims[0]}")
        return success

    def pay_attempt_accepted(self, attempt: ProofAttempt, sprig: Sprig):
        amount = 0

        # non-machine: reimburse the downstake
        if attempt.height > 0:
            amount = self.downstakes[attempt.height]

        # non-root: reimburse the upstake
        if attempt.height < self.root_height - 1:
            amount += self.upstakes[attempt.height]

        attempt.money_held -= amount
        transfer_money(SPRIG_ADDRESS, attempt.claimer, amount, f"attempt validated")

    def pay_attempt_rejected(self, attempt: ProofAttempt, rejecting: Claim, sprig: Sprig):

        # non-machine: downstakes goes to closing claim challenger.
        if attempt.height > 0:
            amount = self.downstakes[attempt.height]
            attempt.money_held -= amount
            transfer_money(
                SPRIG_ADDRESS,
                rejecting.skeptic,
                amount,
                f"downstakes to {rejecting.hash}",
            )

        # non-root: upstake goes to un-answered challenge
        if attempt.height < self.root_height - 1:
            amount = self.upstakes[attempt.height]
            parent = sprig.claims[attempt.parent]
            attempt.money_held -= amount
            transfer_money(
                SPRIG_ADDRESS,
                parent.skeptic,
                amount,
                f"upstakes to {parent.hash}",
            )

    # Challenges

    def pay_new_challenge(self, skeptic: Address, claim: Claim) -> bool:
        amount = self.question_bounties[claim.height]
        claim.money_held += amount
        return transfer_money(
            skeptic,
            SPRIG_ADDRESS,
            amount,
            f"challenge {claim.hash}",
        )

    def pay_challenge_defeating(self, claim: Claim):
        amount = self.question_bounties[claim.height]
        claim.money_held -= amount
        transfer_money(
            SPRIG_ADDRESS,
            claim.skeptic,
            amount,
            f"challenge {claim.hash} unanswered",
        )

    def pay_challenge_answered(self, claim: Claim, closing_attempt: ProofAttempt):
        amount = self.question_bounties[claim.height]
        claim.money_held -= amount
        transfer_money(
            SPRIG_ADDRESS,
            closing_attempt.claimer,
            amount,
            f"challenge {claim.hash} answered",
        )


@dataclass
class DefaultParameters(Parameters):
    def __init__(self, root_height=6):
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
class Claim:
    statement: str
    status: Status
    height: int
    # The parent is None iff it is the root claim.
    parent: Optional[Hash]
    proof_attempt: Optional[int]
    claim_nb: Optional[int]

    # The skeptic is the one who challenged the claim
    # and not the challenge from which the claim originates,
    # except for the root claim, where the skeptic corresponds,
    # if set, to the person asking the initial question.
    # The case of the root claim must always be treated separately.
    # TODO: Add logic to handle initial questions.
    skeptic: Optional[Address]
    last_modification: Time
    # open_until is the time until which actions can be made on this
    # claim. If the claim is UNCHALLENGED, it is the last time to challenge it,
    # if the claim is CHALLENGED, it is the last time to add proofs attempts.
    # this field is undefined on other states.
    open_until: Optional[Time]
    # For debugging purposes: those don't need to be stored on the blockchain

    money_held: int
    hash: Hash

    def __init__(
        self,
        statement: str,
        height: int,
        hash: Hash,
        parent: Hash,
        proof_attempt: int,
        claim_nb: int,
        last_modification: Time,
        open_until: Time = None,
        status: Status = None,
        skeptic: Address = None,
        money_held=0,
    ):
        self.parent = parent
        self.proof_attempt = proof_attempt
        self.claim_nb = claim_nb
        self.height = height
        self.hash = hash
        self.statement = statement
        self.last_modification = last_modification
        self.open_until = open_until

        self.status = Status.load(status)
        self.skeptic = skeptic

        self.money_held = money_held

    @classmethod
    def new(
        cls,
        statement: str,
        parent: Optional[Claim],
        proof_attempt: Optional[int],
        claim_nb: Optional[int],
        hash: Hash,
        params: AbstractParameters,
        low_level=False,
    ):
        """Simplified constructor for uses other than serialisation."""

        if low_level:  # machine
            height = 0
        elif parent:
            height = parent.height - 1
        else:  # root
            height = params.protocol_height()

        if parent is None:
            status = Status.CHALLENGED
            parent_hash = None
        else:
            status = Status.UNCHALLENGED
            parent_hash = parent.hash

        claim = cls(statement, height, hash, parent_hash, proof_attempt, claim_nb, now(), status=status)
        claim.open_until = params.deadline(claim)
        return claim

    def __str__(self):
        claim_s = fmt(self.statement, self.status.color())
        status = self.status.name.title()
        money = f" ({fmt_money(self.money_held)})" if self.money_held else ""
        open = f" ⌛{self.open_until}" if not self.status.decided() else ""
        skeptic = f" skeptic: {self.skeptic}" if self.skeptic is not None else ""
        height = f" ⛰️ {self.height}"

        return f"#{self.hash} {claim_s} [{status}] {skeptic}{money}{height}{open}"


@dataclass
class ProofAttempt:
    parent: Hash
    claimer: Address
    claims: list[Hash]
    # Height is the height of the claims it contains, not the height of the claims it answers.
    height: int
    # time: int  # Those may not be needed!
    status: Status

    # For debugging purposes
    money_held: int

    def __init__(self, parent, claimer, claims, height, *, status: Status = None, money_held=0):
        self.parent = parent
        self.claimer = claimer
        self.claims = claims
        self.height = height
        self.status = Status.load(status)
        self.money_held = money_held


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
    claims: dict[Hash, Claim]
    proof_attempts: dict[Hash, list[ProofAttempt]]

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
        *proof_attempt: str,
    ):
        """Start a new instance of the SPRIG protocol, originating from a claim."""

        root_claim = Claim.new(claim, None, None, None, ROOT_HASH, params)
        language = Language.load(language_type)
        self = cls(language, params, {ROOT_HASH: root_claim}, {})  #, [])

        assert self.language.validate_top_level(self, root_claim.statement), "Invalid top level statement"

        self.answer(ROOT_HASH, claimer, *proof_attempt)

        return self

    def __str__(self):
        # Can we make this a bit cleaner ?

        def claim_str(claim_hash: Hash):
            ret = ""

            if claim_hash != ROOT_HASH:
                # We don't want to draw the root here, as it is in the base template string.
                ret += str(self.claims[claim_hash]) + "\n"

            attempt: ProofAttempt
            for i, attempt in enumerate(self.proof_attempts.get(claim_hash, [])):
                money = f" ({fmt_money(attempt.money_held)})" if attempt.money_held else ""
                ret += (
                    fmt(f"Attempt {i + 1} by {attempt.claimer}", attempt.status.color()) + f" {money}:\n"
                )
                for claim in attempt.claims:
                    claim_s = indent(claim_str(claim), INDENT)
                    ret += "  - " + claim_s[len(INDENT):]

            return ret

        root_claim = self.claims[ROOT_HASH]
        return f"""
SPRIG instance:
 - Language: {self.language}
 - Claim: {root_claim}
{indent(claim_str(ROOT_HASH), "   ")}"""

    def next_hash(self, __memory=[0]) -> Hash:
        """Generate a new hash for a claim. This hash needs to be added to the claims dictionary before other hashes can be generated."""
        return Hash(str(len(self.claims)))

    def status_count(self, status: Status):
        """Count the number of claims of a given status."""
        return sum(1 for claim in self.claims.values() if claim.status is status)

    def total_bounties(self) -> int:
        """Count the total amount of money held by all attempts and challenges."""
        return sum(claim.money_held for claim in self.claims.values()) + sum(
            attempt.money_held for attempts in self.proof_attempts.values() for attempt in attempts
        )

    # Public interface to add claims/challenges

    def challenge(self, skeptic: Address, claim_hash: Hash):
        assert claim_hash in self.claims, f"The claim hash ({claim_hash}) is not valid. Valid hashes are {list(self.claims.keys())}"
        claim = self.claims[claim_hash]
        assert claim.height > 0, "A machine level claim cannot be challenged."
        assert claim.status is Status.UNCHALLENGED, f"This claim cannot be challenged anymore. {claim}"
        assert skeptic

        assert self.params.pay_new_challenge(skeptic, claim)

        claim.status = Status.CHALLENGED
        claim.skeptic = skeptic

        self.extend_deadlines(claim)
        self.fixup(claim)

    def answer(self, challenged_claim: Hash, claimer: Address, *sub_statements: str):
        """Answer a challenge with a (non-machine) proof."""
        assert challenged_claim in self.claims, "The claim hash is not valid."
        claim = self.claims[challenged_claim]
        assert claim.status is Status.CHALLENGED, f"There is no open challenge for: {claim}"
        assert claim.height > 1, "Use answer_low_level instead"

        assert self.language.validate_subclaims(self, claim.statement, self.gather_claims(self.claims[challenged_claim]), *sub_statements), "Invalid proof attempt."

        hashes = []
        for i, statement in enumerate(sub_statements):
            h = self.next_hash()
            hashes.append(h)
            self.claims[h] = Claim.new(
                statement,
                claim,
                len(self.proof_attempts.get(challenged_claim, [])),
                i, h, self.params,
            )
        attempt = ProofAttempt(
            challenged_claim, claimer, hashes, claim.height - 1
        )

        if not self.params.pay_new_proof_attempt(attempt):
            for h in hashes:
                del self.claims[h]
            assert False, "Cannot pay the proof attempt."

        # Create the list of proof attempts if it doesn't exist yet and add the attempt.
        self.proof_attempts.setdefault(challenged_claim, []).append(attempt)

        self.extend_deadlines(claim)

    def answer_low_level(self, challenged_claim: Hash, claimer: Address, machine_proof: str):
        assert challenged_claim in self.claims, "No such claim."
        claim = self.claims[challenged_claim]
        assert claim.status is Status.CHALLENGED, "There is no open challenge for this claim."
        assert claim.height >= 0  # Should not happen

        proof = Claim.new(machine_proof, claim, len(self.proof_attempts.get(challenged_claim, [])), 0, self.next_hash(), self.params, True)
        attempt = ProofAttempt(challenged_claim, claimer, [proof.hash], 0)

        assert self.params.pay_new_proof_attempt(attempt)

        # Add the attempt
        self.claims[proof.hash] = proof
        self.proof_attempts.setdefault(challenged_claim, []).append(attempt)

        # Verify the proof
        self.fixup(proof)

    # Updating the state of the tree.

    def extend_deadlines(self, start: Claim):
        """Propagate deadline upwards when a claim/challenge is modified."""

        if start.status.decided():
            return

        start.last_modification = now()
        start.open_until = self.params.deadline(start)

        if start.parent:
            self.extend_deadlines(self.claims[start.parent])

    def gather_claims(self, start: Claim):
        """Retrieve statements that may be used as hypothesis to prove a claim"""
        if not start.parent:
            return []

        claims = self.gather_claims(self.claims[start.parent])
        for claim_index in range(start.claim_nb):
            claims.append(self.claims[self.proof_attempts[start.parent][start.proof_attempt].claims[claim_index]].statement)

        return claims

    def fixup(self, start: Claim):
        """Propagate changes upwards when a claim/challenge is modified."""

        # We start by computing the status that the start claim should have,
        # depending on its children statuses / low-level acceptation.

        if start.status.decided():
            return  # Nothing to do.

        elif start.height == 0:
            if self.language.judge_low_level(self, self.claims[start.parent].statement, self.gather_claims(start) + [start.statement]):
                start.status = Status.VALIDATED
            else:
                start.status = Status.REJECTED

        elif start.status is Status.UNCHALLENGED:
            if now() > start.open_until:
                # If no question came, this claim is valid!
                # There are no bet distribution here though, it happens when attempts are valid.
                start.status = Status.VALIDATED

        elif start.status is Status.CHALLENGED:
            attempts = self.proof_attempts.get(start.hash, [])

            # If any proof attempt is validated, the claim is validated too.
            validated_attempt = get(attempts, status=Status.VALIDATED)
            if validated_attempt:
                start.status = Status.VALIDATED
                # Distribute the bet from the challenge that just closed
                # downwards to the successful attempt
                # self.params.pay_challenge_closed(start, validated_attempt)
            elif now() > start.open_until:
                start.status = Status.REJECTED
                if start.hash != ROOT_HASH:
                    self.params.pay_challenge_defeating(start)
        else:
            raise ValueError

        # Now we check whether the status of the proof attempt containing the claim
        # changes and distribute the up/down-stakes at the same time.

        if not start.parent:
            return

        parent = self.claims[start.parent]
        # this is a bit ugly... maybe it would be better to store which attempt a claim is part?
        attempt = next(p for p in self.proof_attempts[parent.hash] if start.hash in p.claims)
        # Nothing to do here, the bets have already been distributed.
        if attempt.status.decided():
            return

        # If all the claims are validated, the attempt too.
        if all(self.claims[h].status is Status.VALIDATED for h in attempt.claims):
            attempt.status = Status.VALIDATED
            self.params.pay_attempt_accepted(attempt, self)

            # If the claim that the attempt proves was not validated before, collect the bounty
            if parent.status is Status.CHALLENGED and parent.hash != ROOT_HASH:
                self.params.pay_challenge_answered(parent, attempt)

        # The attempt is rejected iff the claim is rejected, as all other claims
        # have not changed, and before the attempt was still undecided, so there is no other
        # rejected claim.
        if start.status is Status.REJECTED:
            attempt.status = Status.REJECTED
            self.params.pay_attempt_rejected(attempt, start, self)

    def distribute_all_bets(self):
        for h in self._dfs():
            claim = self.claims[h]
            if not claim.status.decided():
                self.fixup(claim)

    def _dfs(self, _start=ROOT_HASH) -> Iterator[Hash]:
        """Yield all the hashes of claims in the node tree, starting with the leaves.

        Claims are always yielded after all their children are yielded."""

        for attempt in self.proof_attempts.get(_start, []):
            for hash in attempt.claims:
                yield from self._dfs(hash)
        yield _start

    # Serialisation

    def dump_as_dict(self):
        return json.loads(self.dumps())

    def dumps(self):
        base = dataclasses.asdict(self)
        base['language'] = self.language.dump()
        return json.dumps(base)

    @staticmethod
    def loads_to_dict(s):
        def object_hook(dct: dict):
            if "__class__" in dct:
                klass = dct.pop("__class__")
                if klass == "Status":
                    return Status[dct["name"]]

                # lang = get(all_subclasses(Language), __name__=klass)
                # if lang is None:
                #     assert False, f"No language found for the name {klass}"
                #
                # return lang(**dct)

            return dct

        return json.loads(s, object_hook=object_hook)

    @classmethod
    def loads(cls, s: str):
        data = json.loads(s)
        def mkStatus(d):
            """Recursivelly convert the status to the correct type."""
            if 'status' in d:
                d['status'] = Status(d['status'])
            for k, v in d.items():
                if isinstance(v, dict):
                    mkStatus(v)
        mkStatus(data)

        params = Parameters(**data["params"])
        claims = {h: Claim(**claim) for h, claim in data["claims"].items()}
        attempts = {
            h: [ProofAttempt(**a) for a in attempt] for h, attempt in data["proof_attempts"].items()
        }
        language = Language.load(data['language'])

        return cls(language, params, claims, attempts)

def time_passes(sprig, amount=1):
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

def play_tictactoe(
    params: Parameters,
    MICHAEL, DIEGO, CLEMENT
):
    ctx = " O plays X wins"
    sprig = Sprig.start(
        TicTacToe().dump(),
        params,
        Address("Diego"),
        "...|XX.|... O plays X wins",

        "O..|XXX|... O plays X wins",
        ".O.|XXX|... O plays X wins",
        "..O|XXX|... O plays X wins",
        "X..|XXO|... O plays X wins",
        "...|XXX|O.. O plays X wins",
        "...|XXX|.O. O plays X wins",
        "...|XXX|..O O plays X wins",
    )

    time_passes(sprig)

    sprig.challenge(MICHAEL, "4")
    sprig.challenge(MICHAEL, "2")

    time_passes(sprig)

    sprig.answer(
        "4",
        DIEGO,
        "XO.|XXO|X.." + ctx,
        "XXO|XXO|..." + ctx,
        "X..|XXO|O.X" + ctx,
        "X..|XXO|XO." + ctx,
        "X..|XXO|X.O" + ctx,
    )

    time_passes(sprig)
    sprig.answer_low_level("2", DIEGO, "-2")

    time_passes(sprig)
    sprig.challenge(MICHAEL, "9")

    time_passes(sprig)

    sprig.answer(
        "4",
        CLEMENT,
        "XO.|XXO|X.." + ctx,
        "X.O|XXO|X.." + ctx,
        "X..|XXO|O.X" + ctx,
        "X..|XXO|XO." + ctx,
        "X..|XXO|X.O" + ctx,
    )

    time_passes(sprig)
    time_passes(sprig)
    time_passes(sprig)

    print(sprig.gather_claims(sprig.claims['4']))

    return sprig

def play_lean(
    params: Parameters,
    MICHAEL, DIEGO, CLEMENT
):
    sprig = Sprig.start(
        Lean().dump(),
        params,
        Address("Diego"),
        "lemma add_comm a b : nat) : a + b = b + a",

        """lemma z_add (n : nat) : 0 + n = n :=
        begin
            sorry
        end
        """,
        """lemma add_succ (a b : nat) : a + nat.succ(b) = nat.succ(a + b) :=
        begin
            sorry
        end
        """,
        """lemma add_comm (a b : nat) : a + b = b + a :=
        begin
            sorry
        end
        """
    )

    time_passes(sprig)

    sprig.challenge(MICHAEL, "3")

    time_passes(sprig)

    sprig.answer(
        "3",
        DIEGO,
        """false claim""",
        """false claim => add_comm"""
    )

    time_passes(sprig)

    sprig.challenge(MICHAEL, "4")
    sprig.answer(
        "3",
        CLEMENT,
        """lemma succ_add (a b : nat) : nat.succ a + b = nat.succ (a + b) :=
        begin
            sorry
        end
        """,
        """lemma add_comm (a b : nat) : a + b = b + a :=
        begin
        induction b, rw add_zero, rw z_add, refl,
        rw succ_add, rw add_succ, rw b_ih, refl,
        end
        """
    )

    time_passes(sprig)

    sprig.challenge(MICHAEL, "6")

    time_passes(sprig)

    sprig.answer_low_level(
        "6",
        DIEGO,
        """lemma succ_add (a b : nat) : nat.succ a + b = nat.succ (a + b) :=
        begin
            induction b, rw add_zero, rw add_zero,
            rw add_succ, rw b_ih,
        end
        """
    )

    time_passes(sprig)
    time_passes(sprig)
    time_passes(sprig)

    return sprig

def main():
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
