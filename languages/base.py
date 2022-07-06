from dataclasses import dataclass
from typing import Any, Dict, List, NewType, Optional, Type


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

    name: str

    def __str__(self) -> str:
        return self.name

    def __eq__(self, __o: object) -> bool:
        if isinstance(__o, Language):
            return self.name == __o.name
        else:
            return False

    def __hash__(self) -> int:
        return hash(self.name)

    def judge_low_level(self, root_question: str, branch: list[tuple[str, int]],
                        machine_proof: str) -> bool:
        """Perform the machine level verification.

        Arguments:
            root_question: the initial claim.
            branch: A list of (proof_attempt, challenge_nb) tuples.
                This list gives all information about the branch of the
                sprig tree. The first element is the initial proof attempt,
                followed by the number of the challenge that was activated,
                and so on until the number of the challenge above the machine proof.
            machine_proof: the low-level proof.

        Returns:
            True if the proof is correct, False otherwise.
        """
        raise NotImplementedError

    def validate_attempt(self, root_question: str, branch: list[tuple[str, int]],
                         attempt: str) -> bool:
        """Check that a proof attempt is coherent. Raises AssertionError if not.

        Arguments:
            root_question: the initial claim.
            branch: A list of (proof_attempt, challenge_nb) tuples.
                This list gives all information about the branch of the
                sprig tree. The first element is the initial proof attempt,
                followed by the number of the challenge that was activated,
                and so on until the number of the challenge above the machine proof.
            attempt: the attempt to check for (syntaxic) validity.
        """
        raise NotImplementedError

    def validate_top_level(self, root_question: str) -> bool:
        """Check that an initial claim is valid. Raises AssertionError if not."""
        raise NotImplementedError

    def nb_of_challenges(self, proof: str) -> int:
        """Return the number of points on which a proof can be challenged.

        This is called only with syntaxic validity checked."""
        raise NotImplementedError

    # Serialisation

    @staticmethod
    def load(language_type: str) -> "Language":
        import languages
        cls = languages.LANGUAGES[language_type]
        return cls()

    def dump(self) -> str:
        return self.name
