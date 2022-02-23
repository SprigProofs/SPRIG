from __future__ import annotations

import dataclasses
from dataclasses import dataclass
import json
from collections import defaultdict
from enum import Enum
from pathlib import Path
from typing import Dict, List, NewType, Optional

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
BANK = defaultdict(int)

TIME_FILE = Path(__file__).parent / "data" / "time"
TIME_FILE.touch()


def now(increment=0):
    """Own time function for testing purpose."""

    time = int(TIME_FILE.read_text() or "0")
    time += increment
    TIME_FILE.write_text(str(time))

    return time


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
    """Interface that all parametrization of the sprig protocol must follow."""

    def protocol_height(self) -> int:
        """Initial height of the protocol."""
        raise NotImplementedError

    def deadline(self, claim: Claim, sprig: Sprig) -> Time:
        """Compute the time at which a non-decided claim becomes decided, if no actions are taken.

        If the claim is UNCHALLENGED, it is the time to ask questions.
        If the claim is CHALLENGED, it is the time to answer questions.
        """
        raise NotImplementedError

    def claim_passes_constraints(self, claim: Claim) -> bool:
        """Whether a claim passes all constraints such as bounds on size."""
        raise NotImplementedError

    def pay_new_instance(self, sprig: Sprig) -> bool:
        """Make the transaction necessary for the creation of a new sprig instance.

        Return whether it succeeded."""
        # Note: on the blockchain we will need to make sure that nothing is done if the transaction doesn't pass.
        raise NotImplementedError

    # Transfers related to proof attempts.

    def pay_new_proof_attempt(self, attempt: ProofAttempt) -> bool:
        """Make the transactions for a new proof attempt."""
        raise NotImplementedError

    def pay_attempt_accepted(self, attempt: ProofAttempt, sprig: Sprig) -> bool:
        """Make the transactions when an attempt is accepted.

        In particular:
         - Reimburse the author of the attempt of its (up+down)stakes
        """
        raise NotImplementedError

    def pay_attempt_rejected(self, attempt: ProofAttempt, rejecting: Claim, sprig: Sprig) -> bool:
        """Make the transactions when an attempt is rejected.

        In particular:
         - Distribute the upstake to the parent challenge (if any)
         - Distribute the downstake to the closing challenge
        """
        raise NotImplementedError

    # Transfers related to challenges

    def pay_new_challenge(self, skeptic: Address, claim: Claim) -> bool:
        """Make the transactions for the challenging of a claim."""
        raise NotImplementedError

    def pay_challenge_closed(self, claim: Claim, closing_attempt: ProofAttempt) -> bool:
        """Make the transactions when a challenge is closed, either positively or negatively.

        In particular:
         - If non-answered, reimburse the bounty to the author of the challenge
         - If answered, pay the bounty to the author of the claim that was validated.
        """
        raise NotImplementedError


@dataclass
class Parameters(AbstractParameters):
    """Parameters of a Sprig instance."""

    root_height: int
    max_length: int
    time_for_questions: int
    time_for_answers: int
    upstakes: List[int]
    downstakes: List[int]
    question_bounties: List[int]
    verification_cost: int

    def protocol_height(self) -> int:
        return self.root_height

    def deadline(self, claim: Claim, sprig: Sprig) -> Time:
        pass

    def claim_passes_constraints(self, claim: Claim) -> bool:
        return len(claim.statement) < self.max_length

    def pay_new_instance(self, sprig: Sprig) -> bool:
        pass

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
        return transfer_money(attempt.claimer, SPRIG_ADDRESS, amount, msg)

    def pay_attempt_accepted(self, attempt: ProofAttempt, sprig: Sprig) -> bool:
        amount = 0

        # non-machine: reimburse the downstake
        if attempt.height > 0:
            amount = self.downstakes[attempt.height]

        # non-root: reimburse the upstake
        if attempt.height < self.root_height - 1:
            amount += self.upstakes[attempt.height]

        attempt.money_held -= amount
        return transfer_money(SPRIG_ADDRESS, attempt.claimer, amount, f"attempt validated")

    def pay_attempt_rejected(self, attempt: ProofAttempt, rejecting: Claim, sprig: Sprig) -> bool:

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
            parent = sprig.claims[attempt.parent]
            amount = self.upstakes[parent.height]
            attempt.money_held -= amount
            transfer_money(
                SPRIG_ADDRESS,
                parent.skeptic,
                amount,
                f"upstakes to {parent.hash}",
            )

        return True

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

    def pay_challenge_closed(self, claim: Claim, closing_attempt: ProofAttempt = None) -> bool:
        if claim.status is Status.VALIDATED:
            destination = closing_attempt.claimer
        else:
            destination = claim.skeptic

        amount = self.question_bounties[claim.height]
        claim.money_held -= amount
        return transfer_money(
            SPRIG_ADDRESS,
            destination,
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
    # The parent is None iff it is the root claim.
    parent: Optional[Hash]

    # The skeptic is the one who challenged the claim
    # and not the challenge from which the claim originates,
    # except for the root claim, where the skeptic corresponds,
    # if set, to the person asking the initial question.
    # The case of the root claim must always be treated separately.
    # TODO: Add logic to handle initial questions.
    skeptic: Optional[Address]
    # open_until is the time until which actions can be made on this
    # claim. If the claim is UNCHALLENGED, it is the last time to challenge it,
    # if the claim is CHALLENGED, it is the last time to add proofs attempts.
    # this field is not used on other states.
    open_until: Optional[int]

    # For debugging purposes: those don't need to be stored on the blockchain
    money_held: int
    hash: Hash

    def __init__(
            self,
            statement,
            height,
            hash,
            open_until,
            parent,
            status=None,
            skeptic=None,
            money_held=0,
    ):
        self.parent = parent
        self.height = height
        self.hash = hash
        self.statement = statement
        self.open_until = open_until

        self.status = Status.load(status)
        self.skeptic = skeptic

        self.money_held = money_held

    @classmethod
    def new(
            cls, statement: str, parent: Optional[Claim], hash: Hash, params: Parameters
    ):
        """Simplified constructor for uses other than serialisation."""
        height = 0 if params is None else parent.height + 1
        status = Status.CHALLENGED if parent is None else Status.UNCHALLENGED
        cls(statement, height, hash, 0, parent.hash, status)
        params.time_for_answers

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
        assert self.status is Status.UNCHALLENGED

        self.status = Status.CHALLENGED
        self.skeptic = skeptic
        # FIXME: replace challenged_time by open_until, but we need the constraints for that.
        self.challenged_time = now()
        self.open_until = ...


@dataclass
class ProofAttempt:
    parent: Hash
    claimer: Address
    claims: List[Hash]
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
        # self.time = time if time is not None else now()
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
    params: Parameters
    claims: Dict[Hash, Claim]
    proof_attempts: Dict[Hash, List[ProofAttempt]]

    # Calls to fixup that will need to be done in the future,
    # when we reached timeouts.
    future_actions: List[(int, Hash)]

    @classmethod
    def start(
            cls,
            language_type: str,
            params: Parameters,
            claimer: Address,
            claim: str,
            *proof_attempt: str,
    ):
        """Start a new instance of the SPRIG protocol, originating from a claim."""

        root_claim = Claim(
            claim,
            params.root_height,
            ROOT_HASH,
            status=Status.CHALLENGED,
        )

        print(cls.__init__, params, language_type)
        self = cls(
            Language.load(language_type), params, {ROOT_HASH: root_claim}, {}, []
        )

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
                money = (
                    f" ({fmt_money(attempt.money_held)})" if attempt.money_held else ""
                )
                ret += (
                        fmt(f"Attempt {i + 1} by {attempt.claimer}", attempt.status.color())
                        + f" at {attempt.time}⌛{money}:\n"
                )
                for claim in attempt.claims:
                    claim_s = indent(claim_str(claim), INDENT)
                    ret += "  - " + claim_s[len(INDENT):]

            return ret

        root_claim = self.claims[ROOT_HASH]
        return f"""
SPRIG instance:
 - Language: {self.language}
 - Claim: {fmt(root_claim.statement, root_claim.status.color())} ({fmt_money(root_claim.money_held)})
{indent(claim_str(ROOT_HASH), "   ")}"""

    @property
    def language(self) -> Language:
        return Language.load(**self.language_type)

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

    # Public interface to add claims/challenges

    def challenge(self, skeptic: Address, claim_hash: Hash):
        assert claim_hash in self.claims, "The claim hash is not valid."
        claim = self.claims[claim_hash]
        assert (
                claim.status == Status.UNCHALLENGED
        ), "This claim cannot be challenged anymore."
        assert claim.height > 0, "A machine level claim cannot be challenged."
        assert self.params.can_challenge(claim)  # Checks for the time and such

        self.params.pay_to_challenge(skeptic, claim)
        claim.challenge(skeptic)

        self.fixup(claim)

    def answer(self, challenged_claim: Hash, claimer: Address, *sub_statements: str):
        assert challenged_claim in self.claims, "No such claim."
        claim = self.claims[challenged_claim]
        assert claim.status is Status.CHALLENGED
        assert claim.height > 1, "Use answer_low_level instead"
        assert self.params.can_answer(claim)

        self.language.validate_subclaims(claim.statement, *sub_statements)

        hashes = [
            self._add_claim(statement, claim.height - 1) for statement in sub_statements
        ]
        attempt = ProofAttempt(challenged_claim, claimer, hashes, claim.height - 1)

        self.params.pay_new_proof_attempt(attempt)
        # Create the list of proof attempts if it doesn't exist yet and add the attempt.
        self.proof_attempts.setdefault(challenged_claim, []).append(attempt)

        self.fixup()

    def answer_low_level(
            self, challenged_claim: Hash, claimer: Address, machine_proof: str
    ):
        assert challenged_claim in self.claims, "No such claim."
        claim = self.claims[challenged_claim]
        assert claim.status is Status.CHALLENGED
        assert claim.height >= 0
        assert self.params.can_answer(claim)

        h = self._add_claim(machine_proof, 0)
        attempt = ProofAttempt(challenged_claim, claimer, [h], 0)

        self.params.pay_for_machine_verification(attempt)
        # Create the list of proof attempts if it doesn't exist yet and add the attempt.
        self.proof_attempts.setdefault(challenged_claim, []).append(attempt)

    # Updating the state of the tree.

    def fixup(self, start: Claim):
        pass

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
            self.params.pay_attempt_validated(attempt)
            return

        # If any claim is rejected, the attempt is rejected.
        rejecting_claim = get(
            (self.claims[h] for h in attempt.claims), status=Status.REJECTED
        )
        if rejecting_claim:
            attempt.status = Status.REJECTED
            parent = self.claims.get(parent_claim)
            self.params.pay_attempt_rejected(attempt, rejecting_claim, parent)

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
            elif now > parent_attempt.time + self.params.time_for_questions:
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
                self.params.pay_challenge_closed(claim, validated_attempt)
                return

            last_interaction = max(
                (attempt.time for attempt in attempts), default=claim.challenged_time
            )
            # Otherwise, after the time elapsed
            if now > last_interaction + self.params.time_for_answers:
                # If the battle of each attempt is decided and we are here, all attempts failed
                if all(attempt.status.decided() for attempt in attempts):
                    claim.status = Status.REJECTED
                    self.params.pay_challenge_closed(claim, None)

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

        constraints = Parameters(**data["constraints"])
        claims = {h: Claim(**claim) for h, claim in data["claims"].items()}
        attempts = {
            h: [ProofAttempt(**a) for a in attempt]
            for h, attempt in data["proof_attempts"].items()
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
    recommended_constraints = Parameters(
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
