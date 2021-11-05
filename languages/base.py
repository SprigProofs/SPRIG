from dataclasses import dataclass


@dataclass
class Language:
    """
    The base class for all languages.

    Languages and be loaded via Language.load automaticaly,
    as long as they are loaded in the interpreter (imported).

    Languages are supposed to be very lght classes containing almost no data,
    but describe the rules of a specific game. Those rules are implemented
    in three methods:
        - validate_top_level: validate the initial claim.
        - validate_subclaims: verify the coherence of proof attempts.
        - judge_low_level: machine level verification of a claim.

    A Language is identified with its class name.
    """

    REGISTER = {}

    def __str__(self):
        return self.name

    def judge_low_level(self, statement: str, machine_proof: str) -> bool:
        """Perform the machine level verification.
        :param machine_proof:
        """
        raise NotImplementedError

    def validate_subclaims(self, root_statement: str, *sub_claim_statements: str):
        """Check that a proof attempt is coherent."""
        raise NotImplementedError

    def validate_top_level(self, initial_claim: str):
        """Check that an initial claim is valid."""
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
    def load(**data):
        id_ = data.pop("type")
        cls = Language.REGISTER[id_]
        return cls(**data)

    def dump(self):
        return {"type": self.name, **self.__dict__}
