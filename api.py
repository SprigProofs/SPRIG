"""
This file contains the code of the API / Server.

It reads and updates the sprig instances in the data/ folder.

Environment variables:
- DATA: the path to the folder where the sprig instances are stored.
- DEV: set to true if run on localhost (allow cross-origin requests & move the API to / instead of /api).
"""

import os
from pathlib import Path
import traceback
from typing import Any, Iterator
from pprint import pprint

from fastapi import FastAPI, Request, HTTPException
from fastapi.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

# os.environ["BANK_FILE"] = str((Path(__file__).parent / "data" / "api_bank").absolute())

import sprig
import utils

USE_BLOCKCHAIN = True

DEV = os.environ.get("DEV", "").lower() in ("true", "1", "yes", "y'")
DATA = Path(os.environ.get("DATA", str(Path(__file__).parent / "data")))
ROOT_PATH = "/api" if not DEV else ""
api = FastAPI(root_path=ROOT_PATH)

if not DATA.exists():
    DATA.mkdir(parents=True)

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
else:
    api.add_middleware(
        CORSMiddleware,
        # Not sure if this is precisely what we need, but it seems to work.
        # allow_origin_regex=r"https://(.*\.)?sprig\.therandom\.space",
        allow_origins=["*"],
        # allow_credentials=True,
        allow_methods=["*"],
        # allow_headers=["*"],
    )


def all_instances_filenames() -> Iterator[Path]:
    """Yield all the filenames of sprig instances stored on disk."""
    for file in DATA.glob(r"*.json"):
        if file.stem != "users":
            yield file


def path_from_hash(hash_: str) -> Path:
    """Return the path where the sprig instance corresponding to the hash is stored."""
    assert hash_.isnumeric(), "Contract hash must be numeric."
    return DATA / f"{hash_}.json"


def save(instance: sprig.Sprig) -> None:
    """Save a SPRIG instance on disk."""
    path_from_hash(instance.root_hash).write_text(instance.dumps())


def load(instance_hash: str) -> sprig.Sprig:
    """Load a prig instance from disk."""
    return sprig.Sprig.loads(path_from_hash(instance_hash).read_text(), blockchain=USE_BLOCKCHAIN)


@api.exception_handler(AssertionError)
async def unicorn_exception_handler(request: Request, exc: AssertionError) -> JSONResponse:
    if len(exc.args) > 0:
        detail = exc.args[0]
    else:
        detail = "Unkown error, please report this."
        traceback.print_tb(exc.__traceback__)
    return JSONResponse(
        status_code=400,
        content={"detail": detail},
    )


class ParameterData(BaseModel):
    root_height: int
    max_length: int
    time_for_questions: int
    time_for_answers: int
    upstakes: list[float]
    downstakes: list[float]
    question_bounties: list[float]
    verification_cost: float


class SprigData(BaseModel):
    hash: sprig.Hash
    language: str
    params: ParameterData
    proofs: dict[sprig.Hash, sprig.ProofAttempt]
    challenges: dict[sprig.Hash, sprig.Challenge]
    root_question: sprig.Hash
    root_hash: sprig.Hash

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
        save(instance)
        data = instance.dump_as_dict()
        # Note: data already has a key "root_hash" of the same value, which
        # was added later, but we want to keep the old key "hash" for
        # compatibility.
        data['hash'] = file.stem
        everything[file.stem] = data

    return everything


class SprigInitData(BaseModel):
    language: str
    params: ParameterData  # I would like to use Parameters, but it doesn't work...
    author: sprig.Address
    root_claim: str
    proof: str
    contract: str
    created_at: sprig.Time


@api.post("/instances", response_model=SprigData)
def add_new_instance(new_instance: SprigInitData) -> dict[str, Any]:  # SprigData:
    """
    Start a new instance of the sprig protocol.

    The language is the name of the desired language.
    """
    print("Creating new instance...", DATA)
    pprint(new_instance.dict())

    with sprig.time_mode('real'):
        if not USE_BLOCKCHAIN:
            parameters = sprig.Parameters(**new_instance.params.dict())
        else:  # We always use the blockchain parameters, except for testing.
            parameters = sprig.ParametersBlockchain(**new_instance.params.dict())

        instance = sprig.Sprig.start(
            new_instance.language,
            parameters,
            new_instance.author,
            new_instance.root_claim,
            new_instance.proof,
            sprig.Hash(new_instance.contract),
            new_instance.created_at,
        )

        save(instance)

        data = instance.dump_as_dict()
        data['hash'] = instance.root_hash
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
def new_challenge(skeptic: sprig.Address, claim_hash: sprig.Hash, instance_hash: sprig.Hash,
                  contract: str, created_at: sprig.Time) -> ChallengeCreatedData:
    """
    Challenge a claim that isn't yet challenged and still active.

    created_at: The time at which the challenge was created, in milliseconds since the epoch.
    """

    instance = load(instance_hash)

    with sprig.time_mode('real'):
        challenge = instance.challenge(skeptic, claim_hash, contract, created_at)

    save(instance)

    challenge = instance.challenges[claim_hash]
    return ChallengeCreatedData(
        balance=sprig.BANK[skeptic],
        challenge=challenge,
        parent=instance.proofs[challenge.parent],
    )


class NewProofAttemptData(BaseModel):
    contract: str
    statement: str
    author: sprig.Address
    machine_level: bool
    created_at: sprig.Time


@api.post("/proof/{instance_hash}/{challenge_hash}")
def new_proof_attempt(instance_hash: sprig.Hash, challenge_hash: sprig.Hash,
                      attempt_data: NewProofAttemptData) -> sprig.ProofAttempt:
    """Create a new proof attempt to answer a challenge."""

    instance = load(instance_hash)

    with sprig.time_mode('real'):
        if attempt_data.machine_level:
            method = instance.answer_low_level
        else:
            method = instance.answer
        attempt = method(challenge_hash, attempt_data.author, attempt_data.statement,
                         attempt_data.contract, attempt_data.created_at)

    save(instance)

    return attempt