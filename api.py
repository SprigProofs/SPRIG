from pathlib import Path

from fastapi import FastAPI

import sprig

DATA = Path(__file__).parent / "data"
DATA.mkdir(exist_ok=True)
USERS = DATA / "user.json"
USERS.touch()

api = FastAPI()


@api.get("/instances")
def get_instances_list():
    """Return a dictionnary of all the SPRIG instances along with short details."""
    instances = {}
    for file in DATA.glob("*.json"):
        if file.stem == "users":
            continue

        data = sprig.Sprig.loads(file.read_text())
        instances[file.stem] = {
            "constraints": data.constraints,
            "language": data.language.ID,
            "root_claim": data.claims[sprig.ROOT_HASH],
            "claim_count": len(data.claims),
            "challenge_count": data.open_challenge_count,
            "unchallenged_count": data.unchallenged_claim_count,
        }

    return instances


@api.post("/instances")
def add_new_instance():
    """Start a new instance of the sprig protocol."""
    ...


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
