import pytest
import sprig

def test_constants():
    assert sprig.ROOT_HASH == '0'


common_params = dict(
        time_for_questions=2,
        time_for_answers=2,
        verification_cost=3,
        root_height=3,
        max_length=1000,
)
def test_params_nice():
    sprig.Parameters(
        upstakes=[1, 2, 3],
        downstakes=[0, 7, 8],
        question_bounties=[0, 14, 15],
        **common_params,
    )


@pytest.mark.parametrize("upstakes, downstakes, question_bounties", [
    ([1, 2, 3], [1, 7, 8], [0, 14, 15]),
    ([1, 2, 3], [0, 7, 8], [1, 14, 15]),
    ([0, 1, 2, 3], [0, 7, 8], [0, 14, 15]),
    ([1, 2, 3], [0, 0, 7, 8], [0, 14, 15]),
    ([1, 2, 3], [0, 7, 8], [0, 0, 14, 15]),
    ([0, 1, 2, 3], [0, 0, 7, 8], [0, 0, 14, 15]),
    ([], [], []),
])
def test_params_fail(upstakes, downstakes, question_bounties):
    with pytest.raises(AssertionError):
        sprig.Parameters(
            upstakes=upstakes,
            downstakes=downstakes,
            question_bounties=question_bounties,
            **common_params,
        )