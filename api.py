from http import HTTPStatus
from pathlib import Path
from typing import List

import pydantic
from fastapi import FastAPI, HTTPException

import sprig

DATA = Path(__file__).parent / "data"
DATA.mkdir(exist_ok=True)
USERS = DATA / "users.json"
USERS.touch()

api = FastAPI()


def all_instances_filenames():
    """Yield all the filenames of sprig instances stored on disk."""
    for file in DATA.glob("*.json"):
        if file.stem != "users":
            yield file


def new_hash():
    maxi = max((int(p.stem) for p in all_instances_filenames()), default=0) + 1
    return f"{maxi:0>5}"


def path_from_hash(hash_):
    assert len(hash_) == 5
    assert hash_.isnumeric()
    return DATA / f"{hash_}.json"


def save(instance: sprig.Sprig, hash_: str):
    path_from_hash(hash_).write_text(instance.dumps())


def load(hash_: str):
    return sprig.Sprig.loads(path_from_hash(hash_).read_text())


@api.get("/instances")
def get_instances_list():
    """Return a dictionnary of all the SPRIG instances along with short details."""
    instances = {}

    for file in all_instances_filenames():
        data = sprig.Sprig.loads(file.read_text())
        instances[file.stem] = {
            "constraints": data.constraints,
            "language": data.language.name(),
            "root_claim": data.claims[sprig.ROOT_HASH],
            "claim_count": len(data.claims),
            "challenge_count": data.open_challenge_count,
            "unchallenged_count": data.unchallenged_claim_count,
        }

    return instances


class SprigInitData(pydantic.BaseModel):
    language: dict
    constraints: dict
    claimer: sprig.Address
    root_claim: str
    sub_claims: List[str]


@api.post("/instances")
def add_new_instance(new_instance: SprigInitData):
    """
    Start a new instance of the sprig protocol.

    The language (resp. constraints) dict must containt the
    Language (resp. AbstractConstraints) type ID as the "type" key.
    and the other fields are the keyword arguments of the corresponding
    type.
    """

    try:
        language = sprig.Language.load(**new_instance.language)
        constraints = sprig.AbstractConstraints.load(**new_instance.constraints)
        instance = sprig.Sprig.start(
            language,
            constraints,
            sprig.Claim(new_instance.claimer, new_instance.root_claim),
            *[
                sprig.Claim(new_instance.claimer, sub_claim)
                for sub_claim in new_instance.sub_claims
            ],
        )
    except AssertionError as e:
        raise HTTPException(400, e.args)

    save(instance, new_hash())


@api.get("/{instance_hash}")
def get_instance():
    """All the metadata of one SPRIG instance."""
    ...


@api.get("/{instance_hash}/tree")
def get_instance_tree():
    """Tree of claims of one instance."""
    ...


@api.get("/{instance_hash}/{claim_hash}")
def get_claim():
    """Return all the details about one claim."""
    ...


@api.get("/{instance_hash}/{claim_hash}/challenge")
def get_claim_challenge():
    """Return all the details about one challenge."""
    ...


@api.post("/{instance_hash}/{claim_hash}/challenge")
def new_challenge_claim():
    """Challenge a claim that isn't yet challenged and still active."""
    ...


@api.get("/{instance_hash}/{claim_hash}/proof_attempts")
def get_proof_attempts():
    """Return a list of all proof attempts for a claim.
    A proof attempt is a list of the hashes of the claims that make up the proof."""
    ...


@api.post("/{instance_hash}/{claim_hash}/proof_attempts")
def add_proof_attempt():
    """Create a new proof attempt of a challenged claim."""
    ...


@api.get("/users")
def get_users():
    """Return a mapping User -> Account Balance."""
    ...


if __name__ == "__main__":
    print(sprig.AbstractConstraints.REGISTER)
