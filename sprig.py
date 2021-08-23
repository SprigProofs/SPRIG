from __future__ import annotations

# Drop in replacement for dataclass that works better with fastapi
import dataclasses
import json
from collections import defaultdict
from enum import Enum
from operator import attrgetter
from pprint import pprint
from textwrap import indent

from typing import Dict, Iterator, List, Optional, Tuple

try:
    # Simplifies stuff for the web interface,
    # but if the api is not wanted, work without.
    from pydantic.dataclasses import dataclass
except ImportError:
    from dataclasses import dataclass

Address = str  # A type alias to know when a str is the address of someone.
Hash = str  # A Type alias for identify claims
ProofAttempt = List[Hash]

ORANGE = (255, 165, 0)
ROOT_HASH = "#root"
SPRIG_ADDRESS = "@SPRIG"
CURRENCY = " ₽"


def now(increment=0, __now=[0]):
    """Own time function for testing purpose"""
    __now[0] += increment

    return __now[0]


def get(iterator, **kwargs):
    """Return the first object in iterator that has the correct values for each attribute name in kwargs."""
    getter = attrgetter(*kwargs.keys())
    values = tuple(kwargs.values())

    # attrgetter does not return a tuple in this case.
    if len(values) == 1:
        values = values[0]

    for obj in iterator:
        if getter(obj) == values:
            return obj


def all_subclasses(klass: type) -> Iterator[type]:
    """Yield all subclasses of a class."""
    for k in klass.__subclasses__():
        yield from all_subclasses(k)
    yield klass


def fmt(s, fg=None, bg=None, end=True):
    """
    Add ANSI escape codes to a string.

    [fg] and [bg] are a rgb tuple of integers.

    If [reset] is False, the colors and any ANSI flags are not cleared.
    """

    flags = ""
    if fg is not None:
        r, g, b = fg
        flags += f"38;2;{r};{g};{b};"

    if bg is not None:
        r, g, b = bg
        flags += f"48;2;{r};{g};{b};"

    flags = flags.strip(";")
    ending = "\033[m" if end else ""
    return f"\033[{flags}m{s}{ending}"


def fmt_money(amount):
    return fmt(str(amount) + CURRENCY, ORANGE)


BANK = defaultdict(int)


def transfer_money(from_, to, amount, msg=""):
    """Function called to for all payements.

    It only prints the payments, but can be overriden to do something meaningful."""
    BG = 12, 34, 56
    assert from_
    assert to

    if msg:
        msg = f" ({fmt(msg, ORANGE)}" + fmt(") <<< ", bg=BG)
    txt = f" >>> {to} gets {amount} pokedollars from {from_}.{msg}"
    print(fmt(txt, bg=BG))

    BANK[to] += amount
    BANK[from_] -= amount


class Status(str, Enum):
    CHALLENGED = "challenged"
    VALIDATED = "validated"
    REJECTED = "rejected"
    UNCHALLENGED = "unchallenged"

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


class AbstractConstraints:
    """
    Abstract base class for all constraints types.

    Its purpose is *for now* only to register and load
    the correct constraints types.
    """

    ID = None
    REGISTER = {}

    def __init_subclass__(cls, **kwargs):
        """Registers the subclasses in REGISTER with their class name as key or ID if defined."""

        # Note: This code is duplicated with Language
        id_ = cls.__name__ if cls.ID is None else cls.ID
        assert id_ not in AbstractConstraints.REGISTER
        AbstractConstraints.REGISTER[id_] = cls

    @staticmethod
    def load(**data):
        id_ = data.pop("type")
        cls = AbstractConstraints.REGISTER[id_]
        print(cls)
        return cls(**data)

    def pay_to_challenge(self, skeptic, claim):
        pass

    def pay_to_answer(self, claim):
        pass

    def pay_for_machine_verification(self, claim: Claim):
        pass

    def pay_claim_validated(self, claim: Claim):
        pass

    def pay_skeptic_invalidating_claim(self, claim: Claim):
        pass

    def pay_skeptic_on_failed_answer(self, claim: Claim):
        pass

    def inside_limits(self, claim) -> bool:
        pass

    def can_challenge(self, claim) -> bool:
        pass

    def can_answer(self, claim) -> bool:
        pass


@dataclass
class Constraints(AbstractConstraints):
    max_depth: int
    max_length: int
    time_for_questions: int
    time_for_answers: int
    upstakes: List[int]
    downstakes: List[int]
    question_bounties: List[int]
    verification_cost: int

    def pay_to_challenge(self, skeptic, claim):
        level = 0
        amount = self.question_bounties[level]
        transfer_money(skeptic, SPRIG_ADDRESS, amount, "challenge")
        claim.money_held += amount

    def pay_to_answer(self, claim):
        level = 1

        amount = self.downstakes[level]
        if level > 0:
            amount += self.upstakes[level]

        transfer_money(
            claim.claimer, SPRIG_ADDRESS, amount, "answer",
        )
        claim.money_held += amount

    def pay_for_machine_verification(self, claim):
        transfer_money(
            claim.claimer, SPRIG_ADDRESS, self.verification_cost, "machine verification"
        )

    def pay_claim_validated(self, claim):
        """
        Reimbourse the stakes of the claimer when a claim is validated.
        Doesn't take any challenge into account.
        """

        level = 1

        amount = self.downstakes[level]
        if level > 0:
            amount += self.upstakes[level]

        amount = self.upstakes[level] + self.downstakes[level]

        transfer_money(SPRIG_ADDRESS, claim.claimer, amount, "claim validated")
        claim.money_held -= amount

    def pay_challenge_answered(self, claim):
        level = 1
        amount = self.question_bounties[level]
        transfer_money(
            SPRIG_ADDRESS, claim.claimer, amount, "challenge answered",
        )
        claim.money_held -= amount

    def pay_skeptic_invalidating_claim(self, claim: Claim):
        level = 1
        amount = self.question_bounties[level] + self.downstakes[level]
        transfer_money(
            SPRIG_ADDRESS, claim.skeptic, amount, "skeptic invalidated claim"
        )
        claim.money_held -= amount

    def pay_skeptic_on_failed_answer(self, claim: Claim):
        level = 1
        amount = self.question_bounties[level - 1] + self.upstakes[level]
        transfer_money(
            SPRIG_ADDRESS, claim.skeptic, amount, "claim failed to answer challenge"
        )
        claim.money_held -= amount

    def inside_limits(self, claim):
        return len(claim.statement) < self.max_length

    def can_challenge(self, claim):
        return now() < claim.time + self.time_for_questions

    def can_answer(self, claim):
        return now() < claim.time + self.time_for_answers


@dataclass
class DefaultConstraints(Constraints):
    def __init__(self):
        super().__init__(
            max_depth=10,
            max_length=1000,
            time_for_questions=2,
            time_for_answers=2,
            upstakes=(1,) * 10,
            downstakes=(1,) * 10,
            question_bounties=(1,) * 10,
            verification_cost=1,
        )


@dataclass
class Claim:
    claimer: Address
    time: float
    statement: str
    status: Status

    # The skeptic is the one who challenged the claim
    # and not the challenge from which the claim originates,
    # except for the root claim, where the skeptic corresponds,
    # if set, to the person asking the initial question.
    # The case of the root claim must always be treated separately.
    # TODO: Add logic to handle initial questions.

    skeptic: Address
    challenged_time: Optional[int]

    # For debugging purposes
    money_held: int

    def __init__(
        self,
        claimer,
        statement,
        *,
        time=None,
        status=None,
        skeptic=None,
        challenged_time=None,
        money_held=0,
    ):
        self.claimer = claimer
        self.statement = statement
        self.time = now() if time is None else time
        if status is None:
            self.status = Status.UNCHALLENGED
        elif isinstance(status, str):
            self.status = Status(status.lower())
        else:
            self.status = status

        if skeptic is not None:
            assert challenged_time is not None

        self.skeptic = skeptic
        self.challenged_time = challenged_time

        self.money_held = money_held

    def __str__(self):
        skeptic = f" by {self.skeptic}" if self.skeptic is not None else ""
        money = f" {self.money_held}{CURRENCY}" if self.money_held else ""
        return (
            fmt(self.statement, fg=self.status.color())
            + f" at {self.time} by {self.claimer} ({self.status}{skeptic})"
            + money
        )

    def challenge(self, skeptic: Address):
        assert self.skeptic is None

        self.status = Status.CHALLENGED
        self.skeptic = skeptic
        self.challenged_time = now()


@dataclass
class Challenge:
    skeptic: Address
    time: float

    def __init__(self, skeptic, *, time=None):
        self.skeptic = skeptic
        self.time = now() if time is None else time

    def __str__(self):
        return self.skeptic


class Language(str):
    """
    The base class for all languages.

    Languages and be loaded via Language.load automaticaly,
    as long as they are loaded in the interpreter (imported).

    Languages are supposed to be very lght classes containing almost no data,
    but describe the rules of a specific game. Those rules are implemented
    in three methods:
        - validate_top_level: validate the initial claim.
        - validate_subclaims: verify the coherence of proof attempts.
        - judge_low_level: machine level verification of a claim.

    A Language is identified with its class name.
    """

    REGISTER = {}

    def __str__(self):
        return self.name

    def __init_subclass__(cls, **kwargs):
        """Registers the subclasses in REGISTER with their class name as key."""

        # Note: This code is duplicated with AbstractConstraints
        id_ = cls.__name__
        cls.name = cls.__name__
        assert id_ not in Language.REGISTER
        Language.REGISTER[id_] = cls

    @staticmethod
    def load(**data):
        id_ = data.pop("type")
        cls = Language.REGISTER[id_]
        return cls(**data)

    def dump(self):
        return {"__class__": self.name, **self.__dict__}

    def judge_low_level(self):
        raise NotImplementedError

    def validate_subclaims(self, root: "Claim", *subclaims: "Claim"):
        raise NotImplementedError

    def validate_top_level(self, initial_claim: "Claim"):
        raise NotImplementedError


@dataclass
class Sprig:
    """An instance of the SPRIG protocol"""

    constraints: Constraints
    language: Language
    claims: Dict[Hash, Claim]
    proof_attempts: Dict[Hash, List[ProofAttempt]]
    """A mapping from claims to a list of all proof attempts, where each one is a list of children claims."""

    @classmethod
    def start(
        cls,
        language: Language,
        constraints: Constraints,
        root_claim: Claim,
        *sub_claims: Claim,
    ):
        """Start a new instance of the SPRIG protocol."""

        root_claim.status = Status.CHALLENGED

        self = cls(constraints, language, {ROOT_HASH: root_claim}, {})

        self.language.validate_top_level(root_claim)
        self.language.validate_subclaims(root_claim, *sub_claims)

        for claim in sub_claims:
            self.constraints.pay_to_answer(claim)
        self._add_proof_attempt(ROOT_HASH, *sub_claims)

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
                    ret = f"{claim_s} ({status} by {claim.skeptic}) {claim_hash} at {claim.time}{money}\n"
                else:
                    ret = f"{claim_s} ({status}) {claim_hash} at {claim.time}{money}\n"

            for i, attempt in enumerate(self.proof_attempts.get(claim_hash, [])):
                ret += f"Attempt {i + 1} by {self.claims[attempt[0]].claimer}:\n"
                for claim in attempt:
                    claim_s = indent(claim_str(claim), INDENT)
                    ret += "  - " + claim_s[len(INDENT) :]

            return ret

        root_claim = self.claims[ROOT_HASH]
        return f"""
SPRIG instance:
 - Language: {self.language}
 - Claimer: {root_claim.claimer}
 - Claim: {fmt(root_claim.statement, root_claim.status.color())} ({fmt_money(root_claim.money_held)})
{indent(claim_str(ROOT_HASH), "   ")}"""

    @property
    def open_challenge_count(self):
        """Numper of claim that are challenged and not resolved yet"""
        return sum(
            1 for claim in self.claims if self.claims[claim].status is Status.CHALLENGED
        )

    @property
    def unchallenged_claim_count(self):
        """Numper of claim that are unchallenged."""
        return sum(
            1
            for claim in self.claims
            if self.claims[claim].status is Status.UNCHALLENGED
        )

    def _add_claim(self, claim: Claim) -> Hash:
        """Add a claim to the dictionnary of claims, returning the generated hash."""

        hash_ = "#" + str(len(self.claims))
        assert hash_ not in self.claims  # Should never happen, it would be a bug

        self.claims[hash_] = claim
        return hash_

    def _add_proof_attempt(self, root: Hash, *sub_claims: Claim):
        """Add a proof attempt given the of the claim it proves and the subclaims that build the proof.

        This method does not perform any check nor payment."""

        if root not in self.proof_attempts:
            # Create the list of proof attempts if it doesn't exist yet.
            # We could have used a defaultdict, but I doubt can use defaultdicts on any blockchain.
            self.proof_attempts[root] = []

        hashes = [self._add_claim(claim) for claim in sub_claims]
        self.proof_attempts[root].append(hashes)

    def challenge(self, skeptic: Address, claim_hash: Hash):
        assert claim_hash in self.claims, "The claim hash is not valid."
        assert (
            self.claims[claim_hash].status == Status.UNCHALLENGED
        ), "This claim has already been challenged."

        claim = self.claims[claim_hash]

        self.constraints.pay_to_challenge(skeptic, claim)
        claim.challenge(skeptic)

    def answer(self, challenged_claim: Hash, *sub_claims: Claim):
        assert challenged_claim in self.claims
        claim = self.claims[challenged_claim]
        assert claim.status is Status.CHALLENGED

        self.language.validate_subclaims(claim, *sub_claims)

        for sub_claim in sub_claims:
            self.constraints.pay_to_answer(sub_claim)

        self._add_proof_attempt(challenged_claim, *sub_claims)

    def proof_attempt_status(self, attempt: List[Hash]):
        """Compute the status of a proof attempt based on its claims."""

        cannot_be_decided = False
        for h in attempt:
            status = self.claims[h].status
            if status is Status.REJECTED:
                # If any claim is false, the proof attempt is instantly rejected.
                return Status.REJECTED
            elif not status.decided():
                cannot_be_decided = True

        # There is a claim that is either UNCHALLENGED or CHALLENGED,
        # so the proof attempt cannot be closed thus stays CHALLENGED
        if cannot_be_decided:
            return Status.CHALLENGED

        # All claims are VALIDATED, so this one too.
        return Status.VALIDATED

    def distribute_all_bets(self):
        now_ = now()
        # we propagate status and bets repartition starting from the leaves
        # so we move in DFS order
        for hash in self._dfs():
            self.distribute_bets(hash, now_)

    def distribute_bets(self, hash: Hash, now: int):
        claim = self.claims[hash]
        if claim.status in (Status.VALIDATED, Status.REJECTED):
            # Nothing to do here, the bets have already been distributed.
            return

        elif claim.status is Status.UNCHALLENGED:
            if now > claim.time + self.constraints.time_for_questions:
                # no question came, the proof is valid!
                self.constraints.pay_claim_validated(claim)
                claim.status = Status.VALIDATED
                # No challenge stake distribution here, it is done downwards
                # from the challenge that is closed.

        elif claim.status is Status.CHALLENGED:
            attempts = self.proof_attempts.get(hash, [])
            last_interaction = max(
                (self.claims[h].time for attempt in attempts for h in attempt),
                default=claim.challenged_time,
            )

            attempts_status = [
                self.proof_attempt_status(attempt) for attempt in attempts
            ]

            # If an attempt is validated, the claim is validated too.
            for i, status in enumerate(attempts_status):
                if status is Status.VALIDATED:
                    # proof is correct!
                    closing_claim = self.claims[attempts[i][0]]
                    # We used that all claims in an attempt have the same claimer.
                    self.constraints.pay_claim_validated(claim)
                    if hash == ROOT_HASH:
                        # TODO: pay root if there is an initial question
                        # otherwise there is nothing to do.
                        ...
                    else:
                        self.constraints.pay_challenge_answered(closing_claim)
                    claim.status = Status.VALIDATED
                    return

            # Otherwise, after the time elapsed
            if now > last_interaction + self.constraints.time_for_answers:
                # With one of the subclaims is still undecided, we need to wait.
                if any(not status.decided() for status in attempts_status):
                    return
                else:  # Otherwise, all subclaims are rejected
                    assert all(s is Status.REJECTED for s in attempts_status)

                    claim.status = Status.REJECTED
                    if hash == ROOT_HASH:
                        # TODO: if there is an initial question, send money back
                        ...
                    else:
                        self.constraints.pay_skeptic_invalidating_claim(claim)
                    # Todo: distribute the upstake too

        else:
            # Yes, I miss exaustive matching from Rust...
            raise ValueError(f"Unkown status {claim.status} for {hash}")

    def _dfs(self, _start=ROOT_HASH) -> Iterator[Hash]:
        """Yield all the hashes of claims in the node tree, starting with the leaves.

        Claims are always yielded after all their children are yielded."""

        for attempt in self.proof_attempts.get(_start, []):
            for hash in attempt:
                yield from self._dfs(hash)
        yield _start

    # Serialisation

    def dump_as_dict(self):
        return json.loads(self.dumps())

    def dumps(self):
        base = dataclasses.asdict(self)
        # return {
        #     "language": self.language.__class__.__name__,
        #     "constraints": dataclasses.asdict(self.constraints),
        #     "claims": {
        #         h: dataclasses.asdict(claim)
        #         for h, claim in self.claims.items()
        #     },
        #     "proof_attempts": self.proof_attempts,
        #     "challenges": {
        #         h: dataclasses.asdict(challenge)
        #         for h, challenge in self.challenges.items()
        #     }
        # }

        class CustomEncoder(json.JSONEncoder):
            def default(self, o):
                if isinstance(o, Status):
                    return {"name": o.name, "__class__": "Status"}
                if isinstance(o, Language):
                    return {"__class__": o.__class__.__name__}
                return o

        return json.dumps(base, cls=CustomEncoder)

    @staticmethod
    def loads_to_dict(s):
        def object_hook(dct: dict):
            if "__class__" in dct:
                klass = dct.pop("__class__")
                if klass == "Status":
                    return Status[dct["name"]]

                lang = get(all_subclasses(Language), __name__=klass)
                if lang is None:
                    assert False, f"No language found for the name {klass}"

                return lang(**dct)

            return dct

        return json.loads(s, object_hook=object_hook)

    @classmethod
    def loads(cls, s: str):
        data = cls.loads_to_dict(s)

        constraints = Constraints(**data["constraints"])
        claims = {h: Claim(**claim) for h, claim in data["claims"].items()}
        challenges = {
            h: Challenge(**challenge) for h, challenge in data["challenges"].items()
        }

        return cls(
            constraints, data["language"], claims, data["proof_attempts"], challenges
        )


def tree_str(iterable):
    # For future reference for printing tree.
    if not iterable:
        return ""

    BIFURC = "├── "
    LAST_BIFURC = "└── "

    out = ""
    for item in iterable[:-1]:
        s = indent(str(item), "│   ")
        out += BIFURC + s[4:]
    # add the last separately as we don't want the gutter
    out += LAST_BIFURC + indent(str(iterable[-1]), "    ")[4:]

    return out


def main():
    from languages import TicTacToe

    MINUTES = 60

    def time_passes(amount=1):
        now(amount)
        sprig.distribute_all_bets()
        print(sprig)

        padding = max(map(len, BANK))
        for address, balance in BANK.items():
            balance = f"{balance} ₽"
            print(f"{address.ljust(padding)} ({fmt(balance, ORANGE)})")
        print()

    level = 8
    recommended_constraints = Constraints(
        max_depth=level,
        max_length=1000,
        time_for_questions=2,
        time_for_answers=2,
        upstakes=[1] * level,
        downstakes=[1] * level,
        question_bounties=[1] * level,
        verification_cost=1,
    )

    claim = Claim("Diego", "...|XX.|... O plays X wins")

    ctx = " O plays X wins"
    sprig = Sprig.start(
        TicTacToe(),
        recommended_constraints,
        claim,
        Claim("Diego", "O..|XXX|..." + ctx),
        Claim("Diego", ".O.|XXX|..." + ctx),
        Claim("Diego", "..O|XXX|..." + ctx),
        Claim("Diego", "X..|XXO|..." + ctx),
        Claim("Diego", "...|XXX|O.." + ctx),
        Claim("Diego", "...|XXX|.O." + ctx),
        Claim("Diego", "...|XXX|..O" + ctx),
    )

    print(sprig)
    time_passes()

    sprig.challenge("Michael", "#4")
    sprig.challenge("Michael", "#2")

    time_passes()

    sprig.answer(
        "#4",
        Claim("Diego", "XO.|XXO|X.." + ctx),
        Claim("Diego", "XXO|XXO|..." + ctx),
        Claim("Diego", "X..|XXO|O.X" + ctx),
        Claim("Diego", "X..|XXO|XO." + ctx),
        Claim("Diego", "X..|XXO|X.O" + ctx),
    )

    time_passes()

    sprig.challenge("Michael", "#9")

    time_passes()

    sprig.answer(
        "#4",
        Claim("Clément", "XO.|XXO|X.." + ctx),
        Claim("Clément", "X.O|XXO|X.." + ctx),
        Claim("Clément", "X..|XXO|O.X" + ctx),
        Claim("Clément", "X..|XXO|XO." + ctx),
        Claim("Clément", "X..|XXO|X.O" + ctx),
    )

    time_passes()
    time_passes()
    time_passes()

    # pprint(sprig.dumps())
    # pprint(json.loads(sprig.dumps()))
    # new = Sprig.loads(sprig.dumps())
    # print(new.claims[ROOT_HASH].status.__class__)


if __name__ == "__main__":
    main()
