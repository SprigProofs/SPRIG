from sprig import *
from tests.test_fixtures import instance


def test_height(instance: Sprig):
    for challenge in instance.challenges.values():
        # The height of the challenge is allways the same as its parent proof
        assert challenge.height == instance.proofs[challenge.parent].height

    for attempt in instance.proofs.values():
        if attempt.parent is not None:
            # The height of an attempt is either 0 or one less than the challenge it tries to solve
            assert attempt.height in {0, instance.challenges[attempt.parent].height - 1}
        if attempt.height == 0:
            assert len(attempt.challenges) == 0