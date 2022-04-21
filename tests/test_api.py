from sre_constants import ASSERT_NOT
from fastapi import Path
import pytest
from fastapi.testclient import TestClient

from api import ClaimData, all_instances_filenames, api, load, path_from_hash
import languages
from sprig import *

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

def test_get_all_instances():
    response = client.get('/instances')
    instances = response.json()
    assert len(instances) == len(list(all_instances_filenames()))

    for instance in instances.values():
        # If this set has changed, one needs to be sure the JS api is updated as well in sprig.ts
        assert set(instance.keys()) == {'hash', 'params', 'language', 'root_claim', 'counts', 'author', 'bounties'}
        assert set(instance['counts'].keys()) == {'unchallenged', 'challenged', 'rejected', 'validated'}
        assert Parameters(**instance['params'])
        assert isinstance(instance['language'], str)
        assert ClaimData(**instance['root_claim'])

@pytest.mark.parametrize("hash", [p.stem for p in all_instances_filenames()])
def test_instance_get(hash):
    response = client.get(f"/{hash}")

    data = response.json()
    assert data['hash'] == hash
    data.pop('hash')
    
    stored = json.loads(path_from_hash(hash).read_text())

    purge_key(stored, 'money_held')
    for k in stored.keys():
        assert stored[k] == data[k]
    assert stored == data



def test_post_new_instance():
    creation_data = {
        'params': {
            'root_height': 4,
            'max_length': 100,
            'time_for_questions': 5,
            'time_for_answers': 10,
            'upstakes': [1, 2, 3, 4, 0],
            'downstakes': [0, 7, 8, 9, 10],
            'question_bounties': [11, 12, 13, 14, 15],
            'verification_cost': 16,
        },
        'language': 'TicTacToe',
        'claimer': 'diego',
        'root_claim': 'XO.|.X.|... O plays X wins',
        'sub_claims': [
            'XOO|.X.|..X O plays X wins',
            'XO.|OX.|..X O plays X wins',
            'XO.|.XO|..X O plays X wins',
            'XO.|.X.|O.X O plays X wins',
            'XO.|.X.|.OX O plays X wins',
            'XO.|.X.|X.O O plays X wins',
        ],
    }

    before = set(all_instances_filenames())

    resp = client.post('/instances', json=creation_data)
    assert resp.status_code == 200
    data = resp.json()

    after = set(all_instances_filenames())
    path = path_from_hash(data['hash'])
    assert after - {path} == before
    # We clean up early the file we just created, so that it is deleted even if some test fails
    path.unlink()

    assert data['params'] == creation_data['params']
    assert data['language'] == creation_data['language']
    assert data['proof_attempts']['0'][0]['claimer'] == creation_data['claimer']
    assert data['claims']['0']['statement'] == creation_data['root_claim']
    for i, claim in enumerate(creation_data['sub_claims']):
        assert data['claims'][str(i + 1)]['statement'] == claim
