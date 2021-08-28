import pytest

from sprig import *
from tests import exemples


@pytest.mark.parametrize(
    "sprig",
    [
        exemples.sprig_started(),
        exemples.sprig_challenged(),
        exemples.sprig_answer(),
        exemples.sprig_challenged_2(),
    ],
)
def test_serialisation(sprig):
    new = Sprig.loads(sprig.dumps())

    assert new.language == sprig.language
    assert new == sprig

    d = sprig.dump_as_dict()
    assert set(d) == {"language_data", "constraints", "claims", "proof_attempts"}


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
