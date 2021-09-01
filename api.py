import json
from collections import defaultdict
from contextlib import contextmanager
from pathlib import Path
from typing import List

from fastapi import FastAPI, HTTPException
from fastapi.params import Depends
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

import languages.base
import sprig
import utils

DATA = Path(__file__).parent / "data"
DATA.mkdir(exist_ok=True)
USERS = DATA / "users.json"
USERS.touch()

api = FastAPI()
api.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    # allow_credentials=True,
    allow_methods=["*"],
    # allow_headers=["*"],
)


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


def load(instance_hash: str) -> sprig.Sprig:
    return sprig.Sprig.loads(path_from_hash(instance_hash).read_text())


@contextmanager
def load_users() -> defaultdict:
    user_dict = json.loads(USERS.read_text() or "{}")
    try:
        yield defaultdict(int, user_dict)
    finally:
        # Todo: do we really want to always save it on error ?
        USERS.write_text(json.dumps(user_dict))


def transfer_money(from_, to, amount, msg=""):
    old_transfer_money(from_, to, amount, msg)

    with load_users() as users:
        users[from_] -= amount
        users[to] += amount


sprig.transfer_money, old_transfer_money = transfer_money, sprig.transfer_money


class SprigInitData(BaseModel):
    language: dict
    constraints: dict
    claimer: sprig.Address
    root_claim: str
    sub_claims: List[str]


@api.get("/instances")
def get_instances_list():
    """Return a dictionnary of all the SPRIG instances along with short details."""
    instances = {}

    for file in all_instances_filenames():
        data = sprig.Sprig.loads(file.read_text())
        instances[file.stem] = {
            "constraints": data.constraints,
            "language": data.language.name,
            "root_claim": data.claims[sprig.ROOT_HASH],
            "counts": {status: data.status_count(status) for status in sprig.Status},
        }

    return instances


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
        language = languages.base.Language.load(**new_instance.language)
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


@api.get("/users")
def get_users():
    """Return a mapping User -> Account Balance."""
    with load_users() as users:
        return users


@api.get("/{instance_hash}", response_model=sprig.Sprig)
def get_instance(instance_hash: str):
    """All the metadata of one SPRIG instance."""
    return json.loads(path_from_hash(instance_hash).read_text())


@api.get("/{instance_hash}/{claim_hash}")
def get_claim(claim_hash: str, instance: sprig.Sprig = Depends(load)):
    """Return all the details about one claim."""
    return instance.claims[claim_hash]


class ChallengeRecord(BaseModel):
    balance: int
    claim: sprig.Claim


@api.post("/{instance_hash}/{claim_hash}/challenge")
def new_challenge(skeptic: sprig.Address, claim_hash: str, instance_hash: str):
    """Challenge a claim that isn't yet challenged and still active."""

    instance = load(instance_hash)
    with load_users() as users:
        instance.challenge(skeptic, claim_hash)
        instance.distribute_all_bets()
        sprig.now(1)
        # TODO: payment in Sprig, not just a default of 1
        users[skeptic] = users.get(skeptic, 100) - 1

        save(instance, instance_hash)

        return ChallengeRecord(balance=users[skeptic], claim=instance.claims[claim_hash])


@api.get("/{instance_hash}/{claim_hash}/proof_attempts")
def get_proof_attempts(claim_hash: str, instance: sprig.Sprig = Depends(load)):
    """Return a list of all proof attempts for a claim.
    A proof attempt is a list of the hashes of the claims that make up the proof."""
    return instance.proof_attempts.get(claim_hash, [])


class NewProofAttempt(BaseModel):
    claimer: sprig.Address
    claims: List[str]
    machine_level: bool = False


class AnswerRecord(BaseModel):
    balance: int
    attempt: sprig.ProofAttempt


@api.post("/{instance_hash}/{claim_hash}/proof_attempts")
def add_proof_attempt(attempt: NewProofAttempt, claim_hash: str, instance_hash: str):
    """Create a new proof attempt of a challenged claim."""

    instance = load(instance_hash)

    if attempt.machine_level:
        assert len(attempt.claims) == 1
        instance.answer_low_level(claim_hash, attempt.claimer, *attempt.claims)
    else:
        instance.answer(claim_hash, attempt.claimer, *attempt.claims)

    instance.distribute_all_bets()
    sprig.now(1)
    save(instance, instance_hash)

    return AnswerRecord(balance=42, attempt=instance.proof_attempts[claim_hash][-1])


if __name__ == "__main__":
    print(sprig.AbstractConstraints.REGISTER)
