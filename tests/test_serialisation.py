import pytest

from sprig import *
from tests.test_fixtures import instance


def test_serialisation(instance: Sprig) -> None:
        new = Sprig.loads(instance.dumps())

        assert new.language == instance.language
        assert new == instance

        d = instance.dump_as_dict()
        assert set(d) == {"language", "params", "proofs", "challenges", "root_question"}


@pytest.mark.parametrize(
    "enum,value",
    [
        (Status.UNCHALLENGED, "unchallenged"),
        (Status.CHALLENGED, "challenged"),
        (Status.REJECTED, "rejected"),
        (Status.VALIDATED, "validated"),
    ],
)
def test_status_values(enum, value):
    assert enum.value == value
