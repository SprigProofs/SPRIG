import pytest
from fastapi.testclient import TestClient

from api import all_instances_filenames, api, load
from sprig import Sprig

client = TestClient(api)


@pytest.mark.parametrize(
    "path",
    [
        "/instances",
        "/00001",
        "/00001/0",
        "/00001/2",
        "/00001/0/proof_attempts",
        "/00001/3/proof_attempts",
        "/users",
    ],
)
def test_all_get_are_success(path):
    response = client.get(path)
    assert response.ok


@pytest.mark.parametrize("hash", [p.stem for p in all_instances_filenames()])
def test_instance_get(hash):
    response = client.get(f"/{hash}")

    sent = Sprig(**response.json())
    stored = load(hash)

    assert stored == sent
