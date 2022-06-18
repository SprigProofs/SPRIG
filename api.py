"""
This file contains the code of the API / Server.

It reads and updates the sprig instances in the data/ folder.
"""

import os
from pathlib import Path
from typing import Any, Iterator

from fastapi import FastAPI, Request, HTTPException
from fastapi.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

os.environ["BANK_FILE"] = str((Path(__file__).parent / "data" / "api_bank").absolute())

import sprig
import utils

DEV = os.environ.get("DEV", "").lower() in ("true", "1", "yes", "y'")
ROOT_PATH = "/api" if not DEV else ""
api = FastAPI(root_path=ROOT_PATH)

if DEV:
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


@api.exception_handler(AssertionError)
async def unicorn_exception_handler(request: Request, exc: AssertionError) -> JSONResponse:
    return JSONResponse(
        status_code=400,
        content={"detail": exc.args[0]},
    )


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

    class Config:
        arbitrary_types_allowed = True
        orm_mode = True


@api.get("/everything", response_model=dict[sprig.Hash, SprigData])
def get_everything() -> Any:
    """Get all the data of all the SPRIG instances."""

    everything = {}
    for file in all_instances_filenames():
        instance = load(file.stem)
        with sprig.time_mode('real'):
            instance.distribute_all_bets()
        save(instance, file.stem)
        data = instance.dump_as_dict()
        data['hash'] = file.stem
        everything[file.stem] = data

    return everything


class SprigInitData(BaseModel):
    language: str
    params: ParameterData  # I would like to use Parameters, but it doesn't work...
    author: sprig.Address
    root_claim: str
    proof: str


@api.post("/instances", response_model=SprigData)
def add_new_instance(new_instance: SprigInitData) -> dict[str, Any]:  # SprigData:
    """
    Start a new instance of the sprig protocol.

    The language is the name of the desired language.
    """

    with sprig.time_mode('real'):
        parameters = sprig.Parameters(**new_instance.params.dict())
        instance = sprig.Sprig.start(
            new_instance.language,
            parameters,
            new_instance.author,
            new_instance.root_claim,
            new_instance.proof,
        )

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


@api.post(
    "/challenge/{instance_hash}/{claim_hash}"
)  #, response_model=ChallengeCreatedData)  # The response_model is not working and I don't know why.
def new_challenge(skeptic: sprig.Address, claim_hash: sprig.Hash,
                  instance_hash: sprig.Hash) -> ChallengeCreatedData:
    """Challenge a claim that isn't yet challenged and still active."""

    instance = load(instance_hash)

    with sprig.time_mode('real'):
        challenge = instance.challenge(skeptic, claim_hash)

    save(instance, instance_hash)

    challenge = instance.challenges[claim_hash]
    return ChallengeCreatedData(
        balance=sprig.BANK[skeptic],
        challenge=challenge,
        parent=instance.proofs[challenge.parent],
    )


class NewProofAttemptData(BaseModel):
    statement: str
    author: sprig.Address
    machine_level: bool


@api.post("/proof/{instance_hash}/{challenge_hash}")
def new_proof_attempt(instance_hash: sprig.Hash, challenge_hash: sprig.Hash,
                      attempt_data: NewProofAttemptData) -> sprig.ProofAttempt:
    """Create a new proof attempt to answer a challenge."""

    instance = load(instance_hash)

    with sprig.time_mode('real'):
        if attempt_data.machine_level:
            attempt = instance.answer_low_level(challenge_hash, attempt_data.author,
                                                attempt_data.statement)
        else:
            attempt = instance.answer(challenge_hash, attempt_data.author, attempt_data.statement)

    save(instance, instance_hash)

    return attempt