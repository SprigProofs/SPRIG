from typing import Iterator

import pytest
from languages import TicTacToe
from sprig import *

MICHAEL = Address("Michael")
DIEGO = Address("Diego")
CLEMENT = Address("Clément")

params = Parameters(
    root_height=5,
    max_length=1000,
    time_for_questions=3,
    time_for_answers=4,
    upstakes=[5, 4, 3, 2, 1],
    downstakes=[0, 1, 2, 3, 4],
    question_bounties=[0, 1, 2, 3, 4],
    verification_cost=1,
)


def example_tictactoe(params: Parameters) -> Iterator[Sprig]:
    with time_mode("discrete"):
        sprig = Sprig.start(
            TicTacToe().dump(), params, Address("Diego"), "...|XX.|... O plays X wins", """1 -> 6
            2 -> 6
            3 -> 6
            6 -> 1
            7 -> 6
            8 -> 6
            9 -> 6
            """, Hash("ctc0"))

        time_passes(sprig)
        yield sprig

        root = sprig.proofs[sprig.root_hash]
        c1 = sprig.challenge(MICHAEL, root.challenges[1], "ctc1")
        c2 = sprig.challenge(MICHAEL, root.challenges[3], "ctc2")

        time_passes(sprig)
        yield sprig

        a1 = sprig.answer(
            c2.hash, DIEGO, """Case X..|XXO|...
            2 -> 7
            3 -> 2
            7 -> 9
            8 -> 7
            9 -> 7""", "cta1")

        time_passes(sprig)
        yield sprig

        sprig.answer_low_level(c2.hash, DIEGO, "-2", "cta2")

        time_passes(sprig)
        yield sprig
        c3 = sprig.challenge(MICHAEL, a1.challenges[2], "ctc3")

        time_passes(sprig)
        yield sprig

        sprig.answer(
            c2.hash, CLEMENT, """Case X..|XXO|...
            2 -> 7
            3 -> 7
            7 -> 9
            8 -> 7
            9 -> 7""", "cta3")

        for _ in range(5):
            time_passes(sprig)
            yield sprig


@pytest.fixture(params=list(example_tictactoe(params)))
def instance(request) -> Sprig:
    return request.param
