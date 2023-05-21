from time import time_ns
import pytest
from fastapi.testclient import TestClient
import functools
import json

import api as api_module
from api import all_instances_filenames, api, load, path_from_hash, save
from sprig import *
from tests.test_fixtures import example_tictactoe

client = TestClient(api)


def no_blockchain(func):

    @functools.wraps(func)
    def wrapper(*args, **kwargs):
        saved = api_module.USE_BLOCKCHAIN
        api_module.USE_BLOCKCHAIN = False
        try:
            return func(*args, **kwargs)
        finally:
            api_module.USE_BLOCKCHAIN = saved

    return wrapper


@pytest.mark.parametrize(
    "path",
    [
        # "/instances",
        "/everything",
        # "/00001",
        # "/00001/0",
        # "/00001/2",
        # "/00001/0/proof_attempts",
        # "/00001/3/proof_attempts",
        "/users",
    ],
)
def test_all_get_are_success(path: str) -> None:
    response = client.get(path)
    assert response.ok


@pytest.mark.skip()
def test_get_all_instances() -> None:
    response = client.get('/instances')
    instances = response.json()
    assert len(instances) == len(list(all_instances_filenames()))

    for instance in instances.values():
        # If this set has changed, one needs to be sure the JS api is updated as well in sprig.ts
        assert set(instance.keys()) == {
            'hash',
            'params',
            'language',
            'root_claim',
            'counts',
            'author',
            'bounties',
        }
        assert set(instance['counts'].keys()) == {
            'unchallenged',
            'challenged',
            'rejected',
            'validated',
        }
        assert Parameters(**instance['params'])
        assert isinstance(instance['language'], str)
        assert ClaimData(**instance['root_claim'])


def test_get_everything() -> None:
    response = client.get('/everything')
    data = response.json()
    assert set(data.keys()) == {p.stem for p in all_instances_filenames()}


@pytest.mark.skip()
@pytest.mark.parametrize("hash", [p.stem for p in all_instances_filenames()])
def test_instance_get(hash: str) -> None:
    response = client.get(f"/{hash}")

    data = response.json()
    assert data['hash'] == hash
    data.pop('hash')

    stored = json.loads(path_from_hash(hash).read_text())

    purge_key(stored, 'money_held')
    for k in stored.keys():
        assert stored[k] == data[k]
    assert stored == data


@no_blockchain
def test_post_new_instance() -> None:
    root_hash = "0" * 64
    creation_data = {
        'params': {
            'root_height': 5,
            'max_length': 100,
            'time_for_questions': 5,
            'time_for_answers': 10,
            'upstakes': [1, 2, 3, 4, 5],
            'downstakes': [0, 7, 8, 9, 10],
            'question_bounties': [0, 12, 13, 14, 15],
            'verification_cost': 16,
        },
        'language':
            'TicTacToe',
        'author':
            'diego',
        'root_claim':
            'XO.|.X.|... O plays X wins',
        'proof':
            """Win or double attack
            3 -> 9
            4 -> 9
            6 -> 9
            7 -> 9
            8 -> 9
            9 -> 7
        """,
        "contract":
            root_hash,
        "created_at":
            now(),
    }

    before = set(all_instances_filenames())

    resp = client.post('/instances', json=creation_data)
    print(resp.json())
    assert resp.status_code == 200, resp
    data = resp.json()

    after = set(all_instances_filenames())
    path = path_from_hash(data['hash'])
    assert after - {path} == before
    # We clean up early the file we just created, so that it is deleted even if some test fails
    path.unlink()

    assert data['hash'] == root_hash
    assert data['params'] == creation_data['params']
    assert data['language'] == creation_data['language']
    assert data['root_question'] == creation_data['root_claim']
    assert data['proofs'][root_hash]['author'] == creation_data['author']
    assert data['proofs'][root_hash]['proof'] == creation_data['proof']
    assert data['proofs'][root_hash]['contract'] == root_hash


@no_blockchain
def test_challenge_claim_api() -> None:
    DAY = 86_400_000
    with time_mode('real'):
        hash_ = Hash("F" * 64)
        sprig = Sprig.start(
            'TicTacToe', Parameters(3, 100, DAY, DAY, [1, 1, 0], [0, 1, 1], [0, 1, 1], 1),
            Address("Diego"), "...|XX.|... O plays X wins", """1 -> 6
            2 -> 6
            3 -> 6
            6 -> 1
            7 -> 6
            8 -> 6
            9 -> 6
            """, hash_)
        save(sprig)
        try:
            response = client.post(f'/challenge/{hash_}/C1',
                                   params={
                                       'skeptic': 'diego',
                                       "created_at": now(),
                                       "contract": hash_
                                   })
            print(response.json())
            assert response.status_code == 200
            assert set(response.json()) == {'balance', 'parent', 'challenge'}
        finally:
            path_from_hash(hash_).unlink()
