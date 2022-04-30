import re
import os, subprocess

from languages.base import Language
from typing import Dict, List, NewType, Optional


def lean_validate(lean_code: str) -> bool:
    f = open('tmp', 'w')
    f.write(lean_code)
    f.close()

    out = subprocess.Popen(['lean', 'tmp'], stdout=subprocess.PIPE, stderr=subprocess.STDOUT)
    stdout, stderr = out.communicate()

    os.remove('tmp')

    return out.returncode > 0


def extract_lemma_name(code_piece: str) -> Optional[str]:
    lemma_match = re.match(r"^lemma\s([^\s]*)", code_piece)

    if lemma_match is None:
        return None
    else:
        return lemma_match.groups()[0]


class Lean(Language):
    """
    Language that represents Lean proofs.

    TODO: Explain in detail the format of:
        - root questions
        - proof attempts
        - machine proofs
    """

    name = "Lean"

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

        # TODO: better check (btw machine proofs can contain `def sorry_functor := ...`)
        if 'sorry' in machine_proof[-1]:
            return False

        return lean_validate('\n'.join(machine_proof)) == 0

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

        # This code was previously in validate_subclaims:

        # assert extract_lemma_name(sub_claim_statements[-1]) == extract_lemma_name(root_statement)

        # common_code = '\n'.join(common_proof_part)
        # for statement in sub_claim_statements:
        #     assert lean_validate(common_code + '\n' + statement) != 0

        # return True

        raise NotImplementedError

    def validate_top_level(self, root_question: str) -> bool:
        """Check that an initial claim is valid. Raises AssertionError if not."""

        assert extract_lemma_name(root_question) is not None

        # TODO: Also check that the definition is valid lean code

        return True

    def nb_of_challenges(self, proof: str) -> int:
        """Return the number of points that a proof can be challenged."""
        return len(re.findall(r"\bsorry\b", proof))
