from __future__ import annotations

import re
from dataclasses import dataclass
from enum import Enum
from textwrap import indent

# from time import time
from typing import Dict, Iterator, List, Tuple

Address = str  # A type alias to know when a str is the address of someone.
Hash = str  # A Type alias for identify claims
ProofAttempt = List[Hash]

ORANGE = (255, 165, 0)
ROOT_HASH = "#root"


def time(increment=0, __now=[0]):
    """Own time function for testing purpose"""
    __now[0] += increment

    return __now[0]


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


class Status(Enum):
    CHALLENGED = 0
    VALIDATED = 1
    REJECTED = 2
    UNCHALLENGED = 3

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


@dataclass
class Constraints:
    max_depth: int
    max_length: int
    time_for_questions: int
    time_for_answers: int
    upstakes: List[int]
    downstakes: List[int]
    question_bounties: List[int]


class Sprig:
    """An instance of the SPRIG protocol"""

    constraints: Constraints
    language: Language
    claims: Dict[Hash, Claim]
    proof_attempts: Dict[Hash, List[ProofAttempt]]
    """A mapping from claims to a list of all proof attempts, where each one is a list of children claims."""

    challenges: Dict[Hash, Challenge]

    def __init__(
        self,
        language: Language,
        constraints: Constraints,
        root_claim: Claim,
        *sub_claims: Claim,
    ):
        """Start a new instance of the SPRIG protocol."""

        self.language = language
        self.constraints = constraints
        self.challenges = {}
        self.claims = {ROOT_HASH: root_claim}
        self.proof_attempts = {}

        self.language.validate_top_level(root_claim)
        self.language.validate_subclaims(root_claim, *sub_claims)

        self._add_proof_attempt(ROOT_HASH, *sub_claims)

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

        self.challenges[claim_hash] = Challenge(skeptic)
        claim = self.claims[claim_hash]
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
        now = time()
        # we propagate status and bets repartition starting from the leaves
        # so we move in DFS order
        for hash, level in self._dfs():
            self.distribute_bets(hash, level, now)

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

    # Helper functions

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


class Claim:
    claimer: Address
    time: float
    statement: str
    status: Status

    def __init__(self, claimer, statement):
        self.claimer = claimer
        self.statement = statement
        self.time = time()
        self.status = Status.UNCHALLENGED

    def __str__(self):
        return (
            fmt(self.statement, fg=self.status.color())
            + f" ({self.status}) at {self.time} by {self.claimer}"
        )


class Challenge:
    skeptic: Address
    time: float

    def __init__(self, skeptic):
        self.skeptic = skeptic
        self.time = time()

    def __str__(self):
        return self.skeptic


class Language:
    def __str__(self):
        return self.__class__.__name__

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
        time(amount)
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
    claim = Claim("Diego", "...|XX.|... O plays X wins")

    ctx = " O plays X wins"
    sprig = Sprig(
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


if __name__ == "__main__":
    main()
