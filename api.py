"""
This file contains the code of the API / Server.

It reads and updates the sprig instances in the data/ folder.
"""

import json
import os
from pathlib import Path
from typing import Any, Iterator

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.params import Depends
from pydantic import BaseModel

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


def all_instances_filenames() -> Iterator[Path]:
    """Yield all the filenames of sprig instances stored on disk."""
    for file in sprig.DATA.glob("*.json"):
        if file.stem != "users":
            yield file


def new_hash() -> str:
    """Generate a new hash for a new sprig instance."""
    maxi = max((int(p.stem) for p in all_instances_filenames()), default=0) + 1
    return f"{maxi:0>5}"


def path_from_hash(hash_: str) -> Path:
    """Return the path where the sprig instance corresponding to the hash is stored."""
    assert len(hash_) == 5
    assert hash_.isnumeric()
    return sprig.DATA / f"{hash_}.json"


def save(instance: sprig.Sprig, hash_: str) -> None:
    """Save a SPRIG instance on disk."""
    path_from_hash(hash_).write_text(instance.dumps())


def load(instance_hash: str) -> sprig.Sprig:
    """Load a prig instance from disk."""
    return sprig.Sprig.loads(path_from_hash(instance_hash).read_text())


class ParameterData(BaseModel):
    root_height: int
    max_length: int
    time_for_questions: int
    time_for_answers: int
    upstakes: list[int]
    downstakes: list[int]
    question_bounties: list[int]
    verification_cost: int


class SprigData(BaseModel):
    hash: sprig.Hash
    language: str
    params: ParameterData
    proofs: dict[sprig.Hash, sprig.ProofAttempt]
    challenges: dict[sprig.Hash, sprig.Challenge]
    root_question: sprig.Hash


@api.get("/everything", response_model=dict[sprig.Hash, SprigData])
def get_everything() -> Any:
    """Get all the data of all the SPRIG instances."""

    everything = {}
    for file in all_instances_filenames():
        instance = json.loads(file.read_text())
        instance['hash'] = file.stem
        everything[file.stem] = instance

    return everything


class SprigInitData(BaseModel):
    language: str
    params: dict[str, Any]
    author: sprig.Address
    root_claim: str
    proof: str


@api.post("/instances", response_model=SprigData)
def add_new_instance(new_instance: SprigInitData) -> Any:
    """
    Start a new instance of the sprig protocol.

    The language is the name of the desired language.
    """

    with sprig.time_mode('real'):
        try:
            parameters = sprig.Parameters(**new_instance.params)
            instance = sprig.Sprig.start(
                new_instance.language,
                parameters,
                new_instance.author,
                new_instance.root_claim,
                new_instance.proof,
            )
        except AssertionError as e:
            raise HTTPException(400, e.args)

        h = new_hash()
        save(instance, h)

        data = instance.dump_as_dict()
        data['hash'] = h
        return data


@api.get("/users", response_model=dict[sprig.Address, int])
def get_users() -> dict[sprig.Address, int]:
    """Return a mapping User -> Account Balance."""
    return sprig.BANK


class ChallengeCreatedData(BaseModel):
    balance: int
    challenge: sprig.Challenge
    parent: sprig.ProofAttempt

@api.post("/challenge/{instance_hash}/{claim_hash}")
def new_challenge(skeptic: sprig.Address, claim_hash: sprig.Hash, instance_hash: sprig.Hash) -> ChallengeCreatedData:
    """Challenge a claim that isn't yet challenged and still active."""

    instance = load(instance_hash)

    instance.challenge(skeptic, claim_hash)

    save(instance, instance_hash)

    return ChallengeCreatedData(
        balance=sprig.BANK[skeptic],
        claim=instance.challenges[claim_hash],
        parent=instance.proofs[claim_hash].parent,
    )


if False:

    @api.get("/{instance_hash}", response_model=SprigData)
    def get_instance(instance_hash: str) -> Any:
        """All the data of one SPRIG instance."""
        data = json.loads(path_from_hash(instance_hash).read_text())
        data['hash'] = instance_hash
        return data

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
