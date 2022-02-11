from __future__ import annotations

import dataclasses
import json
from collections import defaultdict
from enum import Enum
from pathlib import Path
from typing import Dict, List, NewType, Optional

from languages.base import Language
from utils import *

try:
    # Simplifies stuff for the web interface,
    # but if the api is not wanted, work without.
    # from pydantic.dataclasses import dataclasss
    from pydantic.dataclasses import dataclass
except ImportError:
    print("No support for the web API.")
    from dataclasses import dataclass

# A type alias to know when a str is the address of someone.
# It is used only for type checking, and does nothing at runtime
Address = NewType("Address", str)
# A Type alias to identify claims
Hash = NewType("Hash", str)

ROOT_HASH = Hash("0")
SPRIG_ADDRESS = Address("@SPRIG")
BANK = defaultdict(int)

TIME_FILE = Path(__file__).parent / "data" / "time"
TIME_FILE.touch()


def now(increment=0):
    """Own time function for testing purpose."""

    time = int(TIME_FILE.read_text() or "0")
    time += increment
    TIME_FILE.write_text(str(time))

    return time


def transfer_money(from_, to, amount, msg=""):
    """Function called to for all payements."""

    assert from_
    assert to

    if msg:
        msg = f" ({FG_ORANGE}{msg}{RESET}{BG_BLUE}) <<< "
    txt = f" >>> {to} gets {amount} pokedollars from {from_}.{msg}"
    print(fmt(txt, bg=BG))

    BANK[to] += amount
    BANK[from_] -= amount


class Status(str, Enum):
    UNCHALLENGED = "unchallenged"
    CHALLENGED = "challenged"
    VALIDATED = "validated"
    REJECTED = "rejected"

    def decided(self):
        """Whether the validity of the claim has been decided or not."""
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
            return default or cls.UNCHALLENGED
        elif isinstance(value, str):
            # For deserialisation
            return cls(value.lower())
        return value


class AbstractConstraints:
    """
    Abstract base class for all constraints types.

    Its purpose is *for now* only to register and load
    the correct constraints types.
    """

    ID = None
    REGISTER = {}

    root_height: int

    def __init_subclass__(cls, **kwargs):
        """Registers the subclasses in REGISTER with their class name as key or ID if defined."""

        # Note: This code is duplicated with Language
        id_ = cls.ID or cls.__name__
        assert id_ not in AbstractConstraints.REGISTER
        AbstractConstraints.REGISTER[id_] = cls

    @staticmethod
    def load(**data):
        assert (
            "type" in data
        ), f"Cannot load constraints with no 'type' key. Valid keys are {', '.join(AbstractConstraints.REGISTER)}."
        id_ = data.pop("type")
        cls = AbstractConstraints.REGISTER[id_]
        return cls(**data)

    def pay_to_challenge(self, skeptic: Address, claim: Claim):
        pass

    def pay_new_proof_attempt(self, attempt: ProofAttempt):
        pass

    def pay_for_machine_verification(self, claim: Claim):
        pass

    def pay_attempt_validated(self, attempt: ProofAttempt):
        """
        Reimbourse the stakes of the claimer when an attempt is validated.
        Doesn't take any challenge into account.
        """
        pass

    def pay_challenge_closed(self, challenged_claim: Claim, closing_attempt: ProofAttempt):
        pass

    def pay_skeptic_invalidating_attempt(self, attempt: ProofAttempt, claim: Claim):
        pass

    def pay_upstake_on_failed_answer(self, parent_claim: Claim, attempt: ProofAttempt):
        """Distribute the upstake."""
        pass

    def inside_limits(self, claim: Claim) -> bool:
        pass

    def can_challenge(self, claim: Claim) -> bool:
        pass

    def can_answer(self, claim: Claim) -> bool:
        pass


@dataclass
class Constraints(AbstractConstraints):
    root_height: int
    max_length: int
    time_for_questions: int
    time_for_answers: int
    upstakes: List[int]
    downstakes: List[int]
    question_bounties: List[int]
    verification_cost: int

    def pay_to_challenge(self, skeptic: Address, claim: Claim):
        amount = self.question_bounties[claim.height]
        transfer_money(
            skeptic,
            SPRIG_ADDRESS,
            amount,
            f"challenge {claim.hash}",
        )
        claim.money_held += amount

    def pay_new_proof_attempt(self, attempt: ProofAttempt):
        # Would be a bug as pay_for_machine_verification should be called.
        assert attempt.height > 0

        amount = self.downstakes[attempt.height]
        if attempt.height < self.root_height - 1:
            amount += self.upstakes[attempt.height]
        transfer_money(
            attempt.claimer,
            SPRIG_ADDRESS,
            amount,
            f"new proof attempt - ⛰️{attempt.height}",
        )
        attempt.money_held += amount

    def pay_for_machine_verification(self, attempt: ProofAttempt):
        assert attempt.height == 0
        amount = self.verification_cost + self.upstakes[attempt.height]
        transfer_money(
            attempt.claimer,
            SPRIG_ADDRESS,
            amount,
            f"machine verification {attempt.claims[0]}",
        )
        attempt.money_held += amount

    def pay_attempt_validated(self, attempt: ProofAttempt):
        """
        Reimbourse the stakes of the claimer when an attempt is validated.
        Doesn't take any challenge into account.
        """

        amount = self.downstakes[attempt.height]
        if attempt.height < self.root_height - 1:
            amount += self.upstakes[attempt.height]

        transfer_money(SPRIG_ADDRESS, attempt.claimer, amount, f"attempt validated")
        attempt.money_held -= amount

    def pay_attempt_rejected(self, attempt: ProofAttempt, rejecting: Claim, parent: Claim):
        if rejecting.height > 0:
            # The only reason for now downstakes is that
            # the rejecting claim is a wrong machine proof
            amount = self.downstakes[attempt.height]
            transfer_money(
                SPRIG_ADDRESS,
                rejecting.skeptic,
                amount,
                f"downstakes to {rejecting.hash}",
            )
            attempt.money_held -= amount

        if parent.skeptic:
            # Always but at the root
            amount = self.upstakes[attempt.height]
            transfer_money(
                SPRIG_ADDRESS,
                parent.skeptic,
                amount,
                f"upstakes to {parent.hash}",
            )
            attempt.money_held -= amount

    def pay_challenge_closed(self, challenged_claim: Claim, closing_attempt: ProofAttempt = None):
        """Transfer the challenge fee to who deserves them."""

        if challenged_claim.status is Status.VALIDATED:
            destination = closing_attempt.claimer
        else:
            destination = challenged_claim.skeptic

        amount = self.question_bounties[challenged_claim.height]
        transfer_money(
            SPRIG_ADDRESS,
            destination,
            amount,
            f"challenge {challenged_claim.hash} answered",
        )
        challenged_claim.money_held -= amount

    def pay_skeptic_invalidating_attempt(self, attempt: ProofAttempt, claim: Claim):
        bounty = self.question_bounties[claim.height]
        stake = self.downstakes[claim.height]
        transfer_money(SPRIG_ADDRESS, claim.skeptic, bounty + stake, "skeptic invalidated attempt")
        attempt.money_held -= stake
        claim.money_held -= bounty

    def pay_upstake_on_failed_answer(self, parent_claim: Claim, attempt: ProofAttempt):
        """Distribute the upstake."""

        if parent_claim.skeptic:
            destination = parent_claim.skeptic
        else:
            # When the parent claim is not challenged,
            # This happens at the root of sprig.
            destination = attempt.claimer

        amount = self.upstakes[attempt.height]
        transfer_money(SPRIG_ADDRESS, destination, amount, "claim failed to answer challenge")
        attempt.money_held -= amount

    def inside_limits(self, claim: Claim) -> bool:
        return len(claim.statement) < self.max_length

    def can_challenge(self, claim: Claim) -> bool:
        return now() < claim.time + self.time_for_questions

    def can_answer(self, claim: Claim) -> bool:
        return now() < claim.time + self.time_for_answers


@dataclass
class DefaultConstraints(Constraints):
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

    # The skeptic is the one who challenged the claim
    # and not the challenge from which the claim originates,
    # except for the root claim, where the skeptic corresponds,
    # if set, to the person asking the initial question.
    # The case of the root claim must always be treated separately.
    # TODO: Add logic to handle initial questions.
    skeptic: Optional[Address]
    challenged_time: Optional[int]

    # For debugging purposes: those don't need to be stored on the blockchain
    money_held: int
    hash: Hash

    def __init__(
        self,
        statement,
        height,
        hash,
        *,
        status=None,
        skeptic=None,
        challenged_time=None,
        money_held=0,
    ):
        self.height = height
        self.hash = hash
        self.statement = statement
        self.status = Status.load(status)

        if skeptic is not None:
            assert challenged_time is not None

        self.skeptic = skeptic
        self.challenged_time = challenged_time

        self.money_held = money_held

    def __str__(self):
        skeptic = f" skeptic: {self.skeptic}" if self.skeptic is not None else ""
        money = f" {self.money_held}{CURRENCY}" if self.money_held else ""
        return (
            f"#{self.hash} - "
            + fmt(self.statement, fg=self.status.color())
            + f" ({self.status}){skeptic}"
            + money
        )

    def challenge(self, skeptic: Address):
        assert self.skeptic is None

        self.status = Status.CHALLENGED
        self.skeptic = skeptic
        self.challenged_time = now()


@dataclass
class ProofAttempt:
    claimer: Address
    claims: List[Hash]
    height: int
    time: int
    status: Status

    # For debugging purposes
    money_held: int

    def __init__(self, claimer, claims, height, *, time=None, status: Status = None, money_held=0):
        self.claimer = claimer
        self.claims = claims
        self.height = height
        self.status = Status.load(status)
        self.time = time if time is not None else now()
        self.money_held = money_held


@dataclass
class Sprig:
    """An instance of the SPRIG protocol"""

    constraints: Constraints
    language_data: dict
    claims: Dict[Hash, Claim]
    proof_attempts: Dict[Hash, List[ProofAttempt]]

    @classmethod
    def start(
        cls,
        language_data: dict,
        constraints: Constraints,
        claimer: Address,
        claim: str,
        *proof_attempt: str,
    ):
        """Start a new instance of the SPRIG protocol, originating from a claim."""

        root_claim = Claim(
            claim,
            constraints.root_height,
            ROOT_HASH,
            status=Status.CHALLENGED,
            challenged_time=now(),
        )

        print(cls.__init__, constraints, language_data, type(language_data))
        self = cls(constraints, language_data, {ROOT_HASH: root_claim}, {})

        self.language.validate_top_level(root_claim.statement)
        # TODO: Do we need to pay at the root ?
        # self.constraints.pay_to_answer(root_claim)

        self.answer(ROOT_HASH, claimer, *proof_attempt)

        return self

    def __str__(self):
        INDENT = " " * 4

        def claim_str(claim_hash: Hash):
            ret = ""
            if claim_hash != ROOT_HASH:
                # We don't want to draw the root here
                claim = self.claims[claim_hash]
                claim_s = fmt(claim.statement, claim.status.color())
                status = claim.status.name.title()
                money = f" ({fmt_money(claim.money_held)})" if claim.money_held else ""
                if claim.skeptic is not None:
                    ret = f"{claim_s} ({status} by {claim.skeptic}) #{claim_hash}{money}\n"
                else:
                    ret = f"{claim_s} ({status}) #{claim_hash}{money}\n"

            attempt: ProofAttempt
            for i, attempt in enumerate(self.proof_attempts.get(claim_hash, [])):
                money = f" ({fmt_money(attempt.money_held)})" if attempt.money_held else ""
                ret += (
                    fmt(f"Attempt {i + 1} by {attempt.claimer}", attempt.status.color())
                    + f" at {attempt.time}⌛{money}:\n"
                )
                for claim in attempt.claims:
                    claim_s = indent(claim_str(claim), INDENT)
                    ret += "  - " + claim_s[len(INDENT) :]

            return ret

        root_claim = self.claims[ROOT_HASH]
        return f"""
SPRIG instance:
 - Language: {self.language}
 - Claim: {fmt(root_claim.statement, root_claim.status.color())} ({fmt_money(root_claim.money_held)})
{indent(claim_str(ROOT_HASH), "   ")}"""

    @property
    def language(self) -> Language:
        return Language.load(**self.language_data)

    def status_count(self, status: Status):
        """Count the number of claims of a given status."""
        return sum(1 for claim in self.claims.values() if claim.status is status)

    def _add_claim(self, statement: str, height: int) -> Hash:
        """Add a claim to the dictionnary of claims, returning the generated hash."""

        assert height >= 0

        hash_ = Hash(str(len(self.claims)))
        assert hash_ not in self.claims  # Should never happen, it would be a bug

        self.claims[hash_] = Claim(statement, height, hash_)
        return hash_

    def challenge(self, skeptic: Address, claim_hash: Hash):
        assert claim_hash in self.claims, "The claim hash is not valid."
        claim = self.claims[claim_hash]
        assert claim.status == Status.UNCHALLENGED, "This claim cannot be challenged anymore."
        assert claim.height > 0, "A machine level claim cannot be challenged."

        self.constraints.pay_to_challenge(skeptic, claim)
        claim.challenge(skeptic)

    def answer(self, challenged_claim: Hash, claimer: Address, *sub_statements: str):
        assert challenged_claim in self.claims, "No such claim."
        claim = self.claims[challenged_claim]
        assert claim.status is Status.CHALLENGED
        assert claim.height > 1, "Use answer_low_level instead"

        self.language.validate_subclaims(claim.statement, *sub_statements)

        hashes = [self._add_claim(statement, claim.height - 1) for statement in sub_statements]
        attempt = ProofAttempt(claimer, hashes, claim.height - 1)

        self.constraints.pay_new_proof_attempt(attempt)
        # Create the list of proof attempts if it doesn't exist yet and add the attempt.
        self.proof_attempts.setdefault(challenged_claim, []).append(attempt)

    def answer_low_level(self, challenged_claim: Hash, claimer: Address, machine_proof: str):
        assert challenged_claim in self.claims, "No such claim."
        claim = self.claims[challenged_claim]
        assert claim.status is Status.CHALLENGED
        assert claim.height >= 0

        h = self._add_claim(machine_proof, 0)
        attempt = ProofAttempt(claimer, [h], 0)

        self.constraints.pay_for_machine_verification(attempt)
        # Create the list of proof attempts if it doesn't exist yet and add the attempt.
        self.proof_attempts.setdefault(challenged_claim, []).append(attempt)

    def distribute_all_bets(self):
        self._distribute_all_bets(ROOT_HASH, None, None, now())

    def _distribute_all_bets(self, start, parent, parent_attempt, now_):
        # we propagate status and bets repartition starting from the leaves
        # so we move in DFS order, but we also need to provide the parents
        # of each claim to distribute the upstakes

        for attempt in self.proof_attempts.get(start, []):
            for claim in attempt.claims:
                self._distribute_all_bets(claim, start, attempt, now_)
            self.update_attempt_status(attempt, start)
        self.update_claim_status(start, parent, parent_attempt, now_)

    def update_attempt_status(self, attempt: ProofAttempt, parent_claim: Hash):
        """This method updates the status of one attempt and distributes the up/down stakes when needed."""

        # Nothing to do here, the bets have already been distributed.
        if attempt.status.decided():
            return

        # If all the claims are validated, the attempt too.
        if all(self.claims[h].status is Status.VALIDATED for h in attempt.claims):
            attempt.status = Status.VALIDATED
            self.constraints.pay_attempt_validated(attempt)
            return

        # If any claim is rejected, the attempt is rejected.
        rejecting_claim = get((self.claims[h] for h in attempt.claims), status=Status.REJECTED)
        if rejecting_claim:
            attempt.status = Status.REJECTED
            parent = self.claims.get(parent_claim)
            self.constraints.pay_attempt_rejected(attempt, rejecting_claim, parent)

    def update_claim_status(
        self,
        hash: Hash,
        parent_claim_hash: Hash,
        parent_attempt: ProofAttempt,
        now: int,
    ):
        """This method updates the status of one claim and distribute its question bounty if needed."""
        if hash == ROOT_HASH:
            # TODO: Handle the root
            return

        claim = self.claims[hash]
        if claim.status.decided():
            # Nothing to do here, the bets have already been distributed.
            return

        elif claim.status is Status.UNCHALLENGED:
            if claim.height == 0:
                parent = self.claims[parent_claim_hash]
                if self.language.judge_low_level(parent.statement, claim.statement):
                    claim.status = Status.VALIDATED
                else:
                    claim.status = Status.REJECTED
            elif now > parent_attempt.time + self.constraints.time_for_questions:
                # If no question came, this part of the proof is valid!
                claim.status = Status.VALIDATED

        elif claim.status is Status.CHALLENGED:
            attempts = self.proof_attempts.get(hash, [])

            # If any proof attempt is validated, the claim is validated too.
            validated_attempt = get(attempts, status=Status.VALIDATED)
            if validated_attempt:
                claim.status = Status.VALIDATED
                # Distribute the bet from the challenge that just closed
                # downwards to the successful attempt
                self.constraints.pay_challenge_closed(claim, validated_attempt)
                return

            last_interaction = max(
                (attempt.time for attempt in attempts), default=claim.challenged_time
            )
            # Otherwise, after the time elapsed
            if now > last_interaction + self.constraints.time_for_answers:
                # If the battle of each attempt is decided and we are here, all attempts failed
                if all(attempt.status.decided() for attempt in attempts):
                    claim.status = Status.REJECTED
                    self.constraints.pay_challenge_closed(claim, None)

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
        # data = cls.loads_to_dict(s)
        return cls(**json.loads(s))

        constraints = Constraints(**data["constraints"])
        claims = {h: Claim(**claim) for h, claim in data["claims"].items()}
        attempts = {
            h: [ProofAttempt(**a) for a in attempt] for h, attempt in data["proof_attempts"].items()
        }

        return cls(constraints, data["language"], claims, attempts)


def main():
    from languages import TicTacToe

    def time_passes(amount=1):
        now(amount)
        sprig.distribute_all_bets()
        print(sprig)

        padding = max(map(len, BANK))
        for address, balance in BANK.items():
            balance = f"{balance} ₽"
            print(f"{address.ljust(padding)} ({fmt(balance, ORANGE)})")
        print()

    MICHAEL = Address("Michael")
    DIEGO = Address("Diego")
    CLEMENT = Address("Clément")

    level = 6
    recommended_constraints = Constraints(
        root_height=level - 1,
        max_length=1000,
        time_for_questions=2,
        time_for_answers=2,
        upstakes=list(range(level)),
        downstakes=list(range(level)),
        question_bounties=list(range(level)),
        verification_cost=1,
    )

    ctx = " O plays X wins"
    sprig = Sprig.start(
        TicTacToe().dump(),
        recommended_constraints,
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

    print(sprig)
    time_passes()

    sprig.challenge(MICHAEL, "4")
    sprig.challenge(MICHAEL, "2")

    time_passes()

    sprig.answer(
        "4",
        DIEGO,
        "XO.|XXO|X.." + ctx,
        "XXO|XXO|..." + ctx,
        "X..|XXO|O.X" + ctx,
        "X..|XXO|XO." + ctx,
        "X..|XXO|X.O" + ctx,
    )

    time_passes()
    sprig.answer_low_level("2", DIEGO, "-2")

    time_passes()
    sprig.challenge(MICHAEL, "9")

    time_passes()

    sprig.answer(
        "4",
        CLEMENT,
        "XO.|XXO|X.." + ctx,
        "X.O|XXO|X.." + ctx,
        "X..|XXO|O.X" + ctx,
        "X..|XXO|XO." + ctx,
        "X..|XXO|X.O" + ctx,
    )

    time_passes()
    time_passes()
    time_passes()


if __name__ == "__main__":
    main()
