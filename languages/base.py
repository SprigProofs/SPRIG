from dataclasses import dataclass
from typing import Dict, List, NewType, Optional, Type


class Language:
    """
    The base class for all languages.

    Languages and be loaded via Language.load automaticaly,
    as long as they are loaded in the interpreter (imported).

    Languages are supposed to be very light classes containing no data,
    but describe the rules of a specific game. Those rules are implemented
    in three methods:
        - validate_top_level: validate the initial claim.
        - validate_subclaims: verify the coherence of proof attempts.
        - judge_low_level: machine level verification of a claim.

    A Language is identified with its class name.
    """

    # Stores all languages known to the interpreter.
    REGISTER: dict[str, "Type[Language]"] = {}
    name: str

    def __str__(self) -> str:
        return self.name

    def judge_low_level(self, proof: list[str]) -> bool:
        """Perform the machine level verification.

        Arguments:
            proof: A list of all attempt content above the machine proof.
                The first element is the machine proof, the last is the initial claim.
        """
        raise NotImplementedError

    def validate_attempt(self, parents: list[str], challenge_nb: int, attempt: str) -> bool:
        """Check that a proof attempt is coherent. Raises AssertionError if not."""
        raise NotImplementedError

    def validate_top_level(self, initial_claim: str) -> bool:
        """Check that an initial claim is valid. Raises AssertionError if not."""
        raise NotImplementedError

    def nb_of_challenges(self, proof: str) -> int:
        """Return the number of points that a proof can be challenged."""
        raise NotImplementedError

    # Serialisation

    def __init_subclass__(cls, **kwargs):
        """Registers the subclasses in REGISTER with their class name as key."""

        # Note: This code is duplicated with AbstractConstraints
        id_ = cls.__name__
        cls.name = cls.__name__
        assert id_ not in Language.REGISTER
        Language.REGISTER[id_] = cls

    @staticmethod
    def load(language_type: str) -> "Language":
        cls = Language.REGISTER[language_type]
        return cls()

    def dump(self) -> str:
        return self.name
