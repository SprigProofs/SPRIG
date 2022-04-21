"""
This file contains the code of the API / Server.

It reads and updates the sprig instances in the data/ folder.
"""

from lib2to3.pgen2.token import OP
import os
import json
from collections import defaultdict
from contextlib import contextmanager
from pathlib import Path
from typing import Optional

from fastapi import FastAPI, HTTPException
from fastapi.params import Depends
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

os.environ["BANK_FILE"] = str((Path(__file__).parent / "data" / "api_bank").absolute())

import languages.base
import sprig
import utils


api = FastAPI()
# This allows cross-origin requests.
# It is needed in development because the frontend dev server is not the same as the backend.
api.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    # allow_credentials=True,
    allow_methods=["*"],
    # allow_headers=["*"],
)


def all_instances_filenames():
    """Yield all the filenames of sprig instances stored on disk."""
    for file in sprig.DATA.glob("*.json"):
        if file.stem != "users":
            yield file


def new_hash():
    """Generate a new hash for a new sprig instance."""
    maxi = max((int(p.stem) for p in all_instances_filenames()), default=0) + 1
    return f"{maxi:0>5}"


def path_from_hash(hash_: str):
    """Return the path where the sprig instance corresponding to the hash is stored."""
    assert len(hash_) == 5
    assert hash_.isnumeric()
    return sprig.DATA / f"{hash_}.json"


def save(instance: sprig.Sprig, hash_: str):
    """Save a SPRIG instance on disk."""
    path_from_hash(hash_).write_text(instance.dumps())


def load(instance_hash: str) -> sprig.Sprig:
    """Load a prig instance from disk."""
    return sprig.Sprig.loads(path_from_hash(instance_hash).read_text())



class SprigInitData(BaseModel):
    language: str
    params: dict
    claimer: sprig.Address
    root_claim: str
    sub_claims: list[str]

class ParameterData(BaseModel):
    root_height: int
    max_length: int
    time_for_questions: int
    time_for_answers: int
    upstakes: list[int]
    downstakes: list[int]
    question_bounties: list[int]
    verification_cost: int

class ClaimData(BaseModel):
    statement: str
    status: sprig.Status
    height: int
    parent: Optional[sprig.Hash]
    proof_attempt: Optional[int]
    claim_nb: Optional[int]
    skeptic: Optional[sprig.Address]
    last_modification: sprig.Time
    open_until: Optional[sprig.Time]
    hash: sprig.Hash

class CountsData(BaseModel):
    challenged: int
    unchallenged: int
    rejected: int
    validated: int


class SprigSummaryData(BaseModel):
    constraints: ParameterData
    language: str
    root_claim: ClaimData
    counts: CountsData

class ProofAttemptData(BaseModel):
    parent: sprig.Hash
    claimer: sprig.Address
    claims: list[sprig.Hash]
    height: int
    status: sprig.Status


class SprigData(BaseModel):
    hash: sprig.Hash
    params: ParameterData
    language: str
    claims: dict[sprig.Hash, ClaimData]
    proof_attempts: dict[sprig.Hash, list[ProofAttemptData]]

@api.get("/instances", response_model=dict[sprig.Hash, SprigSummaryData])
def get_instances_list():
    """Return a dictionnary of all the SPRIG instances along with short details."""
    instances = {}

    for file in all_instances_filenames():
        data = sprig.Sprig.loads(file.read_text())
        instances[file.stem] = {
            "constraints": data.params,
            "language": data.language.name,
            "root_claim": data.claims[sprig.ROOT_HASH],
            "counts": {status: data.status_count(status) for status in sprig.Status},
        }

    return instances


@api.post("/instances", response_model=SprigData)
def add_new_instance(new_instance: SprigInitData):
    """
    Start a new instance of the sprig protocol.

    The language is the name of the desired language.
    """

    try:
        parameters = sprig.Parameters(**new_instance.params)
        instance = sprig.Sprig.start(
            new_instance.language,
            parameters,
            new_instance.claimer,
            new_instance.root_claim,
            *new_instance.sub_claims,
        )
    except AssertionError as e:
        raise HTTPException(400, e.args)

    h = new_hash()
    save(instance, h)

    return {
        "hash": h,
        "params": instance.params,
        "language": instance.language.dump(),
        "claims": instance.claims,
        "proof_attempts": instance.proof_attempts,
    }

@api.get("/users", response_model=dict[sprig.Address, int])
def get_users():
    """Return a mapping User -> Account Balance."""
    return sprig.BANK

@api.get("/{instance_hash}", response_model=SprigData)
def get_instance(instance_hash: str):
    """All the data of one SPRIG instance."""
    data = json.loads(path_from_hash(instance_hash).read_text())
    data['hash'] = instance_hash
    return data


@api.get("/{instance_hash}/{claim_hash}", response_model=ClaimData)
def get_claim(claim_hash: str, instance: sprig.Sprig = Depends(load)):
    """Return all the details about one claim."""
    return instance.claims[claim_hash]

class ChallengeCreatedData(BaseModel):
    balance: int
    claim: sprig.Claim

if False:

    @api.post("/{instance_hash}/{claim_hash}/challenge")
    def new_challenge(skeptic: sprig.Address, claim_hash: str, instance_hash: str):
        """Challenge a claim that isn't yet challenged and still active."""

        instance = load(instance_hash)

        instance.challenge(skeptic, claim_hash)
        
        save(instance, instance_hash)

        return ChallengeCreatedData(balance=sprig.BANK[skeptic], claim=instance.claims[claim_hash])

    @api.get("/{instance_hash}/{claim_hash}/proof_attempts")
    def get_proof_attempts(claim_hash: str, instance: sprig.Sprig = Depends(load)):
        """Return a list of all proof attempts for a claim.
        A proof attempt is a list of the hashes of the claims that make up the proof."""
        return instance.proof_attempts.get(claim_hash, [])


    class NewProofAttempt(BaseModel):
        claimer: sprig.Address
        claims: list[str]
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
