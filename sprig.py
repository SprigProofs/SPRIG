from __future__ import annotations

from operator import attrgetter
from pprint import pprint
import re
from enum import Enum
from textwrap import indent
import json

# from time import time
from typing import Dict, Iterator, List, Tuple

# Drop in replacement for dataclass that works better with fastapi
from pydantic import dataclasses
from pydantic.dataclasses import dataclass


Address = str  # A type alias to know when a str is the address of someone.
Hash = str  # A Type alias for identify claims
ProofAttempt = List[Hash]

ORANGE = (255, 165, 0)
ROOT_HASH = "#root"


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


def fmt(s, fg=None, bg=None):
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
    return f"\033[{flags}m{s}\033[m"


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


@dataclass
class Constraints(AbstractConstraints):
    max_depth: int
    max_length: int
    time_for_questions: int
    time_for_answers: int
    upstakes: List[int]
    downstakes: List[int]
    question_bounties: List[int]


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
        )


@dataclass
class Sprig:
    """An instance of the SPRIG protocol"""

    constraints: Constraints
    language: Language
    claims: Dict[Hash, Claim]
    proof_attempts: Dict[Hash, List[ProofAttempt]]
    """A mapping from claims to a list of all proof attempts, where each one is a list of children claims."""

    challenges: Dict[Hash, Challenge]

    @classmethod
    def start(
        cls,
        language: Language,
        constraints: Constraints,
        root_claim: Claim,
        *sub_claims: Claim,
    ):
        """Start a new instance of the SPRIG protocol."""

        self = cls(constraints, language, {ROOT_HASH: root_claim}, {}, {})

        self.language.validate_top_level(root_claim)
        self.language.validate_subclaims(root_claim, *sub_claims)

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
                if claim_hash in self.challenges:
                    ret = f"{claim_s} ({status} by {self.challenges[claim_hash]}) {claim_hash} at {claim.time}\n"
                else:
                    ret = f"{claim_s} ({status}) {claim_hash} at {claim.time}\n"

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
 - Claim: {fmt(root_claim.statement, ORANGE)}
{indent(claim_str(ROOT_HASH), "   ")}"""

    @property
    def open_challenge_count(self):
        """Numper of claim that are challenged and not resolved yet"""
        return sum(
            1
            for challenge in self.challenges
            if self.claims[challenge].status is Status.CHALLENGED
        )

    @property
    def unchallenged_claim_count(self):
        """Numper of claim that are unchallenged."""
        return sum(
            1
            for challenge in self.challenges
            if self.claims[challenge].status is Status.UNCHALLENGED
        )

    def _add_claim(self, claim: Claim) -> Hash:
        """Add a claim to the dictionnary of claims, returning the generated hash."""

        hash_ = "#" + str(len(self.claims))
        assert hash_ not in self.claims  # Should never happen, it would be a bug

        self.claims[hash_] = claim
        return hash_

    def _add_proof_attempt(self, root: Hash, *sub_claims: Claim):
        """Add a proof attempt given the of the claim it proves and the subclaims that build the proof."""

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

        # TODO: add a level attribute in Claim
        # This is a quick hack while it is not done.
        for hash_, level in self._dfs():
            if hash_ == claim_hash:
                break
        else:
            raise RuntimeError

        self.pay(skeptic, -self.constraints.question_bounties[level])
        self.challenges[claim_hash] = Challenge(skeptic)
        claim.status = Status.CHALLENGED

    def answer(self, challenge: Hash, *sub_claims: Claim):
        assert challenge in self.challenges or challenge == ROOT_HASH
        claim = self.claims[challenge]
        assert claim.status == Status.CHALLENGED
        self.language.validate_subclaims(self.claims[challenge], *sub_claims)

        self._add_proof_attempt(challenge, *sub_claims)

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
        for hash, level in self._dfs():
            self.distribute_bets(hash, level, now_)

    def distribute_bets(self, hash: Hash, level: int, now: int):
        claim = self.claims[hash]
        if claim.status in (Status.VALIDATED, Status.REJECTED):
            # Nothing to do here, the bets have already been distributed.
            return

        elif claim.status is Status.UNCHALLENGED:
            if now > claim.time + self.constraints.time_for_questions:
                # no question came, the proof is valid!
                claim.status = Status.VALIDATED
                # No bet distribution here, it is done downwards
                # from the challenge that is closed.

        elif claim.status is Status.CHALLENGED:
            challenge = self.challenges[hash]
            attempts = self.proof_attempts.get(hash, [])
            last_interaction = max(
                (self.claims[h].time for attempt in attempts for h in attempt),
                default=challenge.time,
            )

            attempts_status = [
                self.proof_attempt_status(attempt) for attempt in attempts
            ]

            # If an attempt is validated, the claim is validated too.
            for i, status in enumerate(attempts_status):
                if status is Status.VALIDATED:
                    # proof is correct!
                    claimer = self.claims[attempts[i][0]].claimer
                    # We used that all claims in an attempt have the same claimer.
                    self.pay(claimer, self.constraints.question_bounties[level])
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
                    self.pay(
                        challenge.skeptic,
                        self.constraints.downstakes[level]
                        + self.constraints.question_bounties[level],
                    )

        else:
            # Yes, I miss exaustive matching from Rust...
            raise ValueError(f"Unkown status {claim.status} for {hash}")

    def _dfs(self, _start=ROOT_HASH, _level=None) -> Iterator[Tuple[Hash, int]]:
        """Yield all the hashes of claims in the node tree with their corresponding levels, starting with the leaves.

        Claims are always yielded after all their children are yielded."""

        if _level is None:
            _level = self.constraints.max_depth

        for attempt in self.proof_attempts.get(_start, []):
            for hash in attempt:
                yield from self._dfs(hash, _level - 1)
        yield (_start, _level)

    def pay(self, who: Address, amount: int):
        txt = f" >>> {who} gets a reward of {amount}. <<< "
        space = " " * len(txt)
        for t in (space, txt, space):
            print(fmt(t, bg=(12, 34, 56)))

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


@dataclass()
class Claim:
    claimer: Address
    time: float
    statement: str
    status: Status

    def __init__(self, claimer, statement, *, time=None, status=None):
        self.claimer = claimer
        self.statement = statement
        self.time = now() if time is None else time
        if status is None:
            self.status = Status.UNCHALLENGED
        elif isinstance(status, str):
            self.status = Status(status.lower())
        else:
            self.status = status

    def __str__(self):
        return (
            fmt(self.statement, fg=self.status.color())
            + f" ({self.status}) at {self.time} by {self.claimer}"
        )


@dataclass()
class Challenge:
    skeptic: Address
    time: float

    def __init__(self, skeptic, *, time=None):
        self.skeptic = skeptic
        self.time = now() if time is None else time

    def __str__(self):
        return self.skeptic


class Language:
    REGISTER = {}

    @classmethod
    def name(cls):
        return cls.__name__

    def __str__(self):
        return self.name()

    def __init_subclass__(cls, **kwargs):
        """Registers the subclasses in REGISTER with their class name as key or ID if defined."""

        # Note: This code is duplicated with AbstractConstraints
        id_ = cls.name()
        assert id_ not in Language.REGISTER
        Language.REGISTER[id_] = cls

    @staticmethod
    def load(**data):
        id_ = data.pop("type")
        cls = Language.REGISTER[id_]
        return cls(**data)

    def judge_low_level(self):
        raise NotImplementedError

    def validate_subclaims(self, root: Claim, *subclaims: Claim):
        raise NotImplementedError

    def validate_top_level(self, initial_claim: Claim):
        raise NotImplementedError


class TicTacToe(Language):

    RE_BOARD = re.compile(r"[.XO]{3}\|[.XO]{3}\|[.XO]{3} ([XO]) plays ([.XO]) wins")

    def parse_board(self, board):
        match = self.RE_BOARD.match(board)

        assert match, "Invalid board format."

        turn = match.group(1)
        wins = match.group(2)
        grid = board[:3] + board[4:7] + board[8:11]

        return grid, turn, wins

    def judge_low_level(self):
        return True

    def validate_subclaims(self, root: Claim, *subclaims: Claim):
        move_covered = [False] * 9
        prev_grid, prev_turn, prev_win = self.parse_board(root.statement)
        for claim in subclaims:
            grid, turn, win = self.parse_board(claim.statement)

            assert turn == prev_turn, "The turn has changed."
            assert win == prev_win, "The winner has changed."

            # Check that it correspond to a move from both players
            assert (
                grid.count("X") == prev_grid.count("X") + 1
            ), "X did not play exactly once."
            assert (
                grid.count("O") == prev_grid.count("O") + 1
            ), "Y did not play exactly once."

            for cell, (a, b) in enumerate(zip(prev_grid, grid)):
                # The new board extend the previous
                if a in "XO":
                    assert a == b, "New grid is incompatible with previous grid."

                # Find if the other player played here
                if a == "." and b == turn:
                    assert not move_covered[
                        cell
                    ], f"Two claims cover the same move for {prev_turn}."
                    move_covered[cell] = True

        # Check that all possibilites have been checked
        assert prev_grid.count(".") == sum(
            move_covered
        ), f"Not all possibilities for {prev_turn} have been covered."

    def validate_top_level(self, initial_claim: Claim):
        grid, turn, win = self.parse_board(initial_claim.statement)
        assert turn != win


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
    MINUTES = 60

    def time_passes(amount=1):
        print("\n\n")
        now(amount)
        sprig.distribute_all_bets()
        print(sprig)

    level = 8
    recommended_constraints = Constraints(
        max_depth=level,
        max_length=1000,
        time_for_questions=2,
        time_for_answers=2,
        upstakes=[1] * level,
        downstakes=[1] * level,
        question_bounties=[1] * level,
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
    pprint(json.loads(sprig.dumps()))
    new = Sprig.loads(sprig.dumps())
    print(new.claims[ROOT_HASH].status.__class__)


if __name__ == "__main__":
    main()
