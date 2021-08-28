import pytest
from fastapi.testclient import TestClient

from api import api

client = TestClient(api)


@pytest.mark.parametrize(
    "path",
    [
        "/instances",
        "/00001",
        "/00001/0",
        "/00001/2",
        "/00001/0/proof_attempts",
        "/00001/2/proof_attempts",
        "/users",
    ],
)
def test_all_get_are_success(path):
    response = client.get(path)
    if not response.ok:
        print(response.url)
        print(path)
        print(response.json())
    assert response.ok
