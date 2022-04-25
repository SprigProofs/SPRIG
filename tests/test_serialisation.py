import pytest

from sprig import *
from tests import exemples


@pytest.mark.parametrize(
    "sprig",
    [
        exemples.sprig_started,  # We pass functions because calling them might raise error and stop test detection early
        exemples.sprig_challenged,
        exemples.sprig_answer,
        exemples.sprig_challenged_2,
    ],
)
def test_serialisation(sprig):
    with time_mode(DISCRETE_TIME):
        instance = sprig()
    new = Sprig.loads(instance.dumps())

    assert new.language == instance.language
    assert new == instance

    d = instance.dump_as_dict()
    assert set(d) == {"language", "params", "claims", "proof_attempts"}


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
