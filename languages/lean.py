import re
import os, subprocess

from languages.base import Language
from typing import Dict, List, NewType, Optional

REGEX = '(theorem|lemma|example)\s([^\s]*)\s\(.*\)\s:\s(.*)\s:='

def lean_validate(lean_code: str) -> bool:
    f = open('tmp', 'w')
    f.write(lean_code)
    f.close()

    out = subprocess.Popen(['lean', 'tmp'], stdout=subprocess.PIPE, stderr=subprocess.STDOUT)
    stdout, stderr = out.communicate()

    os.remove('tmp')

    return out.returncode > 0


class Lean4(Language):
    """
    Language that represents Lean proofs.

    TODO: Explain in detail the format of:
        - root questions
        - proof attempts
        - machine proofs
    """

    name = "Lean4"

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

        # The low-level proof should not contain a sorry
        assert 'sorry' not in machine_proof

        # Accumulate content of proof, ignoring challenged elements and what follows them
        proof_elements = []
        for proof_attempt, chal_nb in branch:
            challenge_starts = list(re.compile('-- chal').finditer(proof_attempt))
            challenge_start = challenge_starts[chal_nb].start()

            proof_elements.append(proof_attempt[:challenge_start])
        proof_elements.append(machine_proof)

        # Validate proof with lean
        proof = '\n'.join(proof_elements)
        assert lean_validate(proof)

        return True

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

        # Recover text of challenged proof attempt, and claim position
        proof_attempt, chal_nb = branch[-1] if len(branch) > 0 else (root_question, 0)

        # Recover challenged portion
        challenge_starts = list(re.compile('-- chal').finditer(proof_attempt))
        challenge_ends = list(re.compile('-- endchal').finditer(proof_attempt))

        challenge_start, challenge_end = challenge_starts[chal_nb].end() + 1, challenge_ends[chal_nb].start()
        challenged_text = proof_attempt[challenge_start:challenge_end]

        challenged_thm = re.match(REGEX, challenged_text.strip())
        assert challenged_thm is not None
        challenged_header = challenged_text[challenged_thm.start():challenged_thm.end() + 1]

        # Read attempt
        attempt_starts = list(re.compile('-- chal').finditer(attempt))
        attempt_ends = list(re.compile('-- endchal').finditer(attempt))

        # Verify coherence of markers
        assert len(attempt_starts) == len(attempt_ends)
        assert all([attempt_starts[i].end() < attempt_ends[i].start() for i in range(len(attempt_starts))])
        assert all([attempt_ends[i].end() < attempt_starts[i + 1].start() for i in range(len(attempt_starts) - 1)])

        # Verify a sorry between each pair of markers
        assert all([len(re.findall(r"\bsorry\b", attempt[attempt_starts[i].end():attempt_ends[i].start()])) == 1 for i in range(len(attempt_starts))])

        # Verify no sorry outside of pairs of markers
        if len(attempt_starts) > 0:
            assert 'sorry' not in attempt[:attempt_starts[0].start()]
            assert all(['sorry' not in attempt[attempt_ends[i].end():attempt_starts[i + 1].start()] for i in range(len(attempt_starts) - 1)])
            assert 'sorry' not in attempt[attempt_ends[-1].end():]
        else:
            assert 'sorry' not in attempt

        # TODO: improve this check
        # Verify that challenged claim is proven again
        assert challenged_header.strip() in attempt

        return True

    def validate_top_level(self, root_question: str) -> bool:
        """Check that an initial claim is valid. Raises AssertionError if not."""
        #assert lean_validate(root_question), "This is not a valid lean file"

        # Get markers
        attempt_starts = list(re.compile('-- chal').finditer(root_question))
        attempt_ends = list(re.compile('-- endchal').finditer(root_question))

        # Verify there is only one, it contains one sorry and no other sorries outside of marks
        assert len(attempt_starts) == len(attempt_ends) == 1
        assert len(re.findall(r"\bsorry\b", root_question[attempt_starts[0].end():attempt_ends[0].start()])) == 1
        assert 'sorry' not in root_question[:attempt_starts[0].start()]
        assert 'sorry' not in root_question[attempt_ends[0].end():]

        challenged_thm = re.match(REGEX, root_question[attempt_starts[0].end() + 1:attempt_ends[0].start()].strip())
        assert challenged_thm is not None

        return True

    def nb_of_challenges(self, proof: str) -> int:
        """Return the number of points that a proof can be challenged."""
        attempt_starts = list(re.compile('-- chal').finditer(proof))
        attempt_ends = list(re.compile('-- endchal').finditer(proof))

        assert len(attempt_starts) == len(attempt_ends)

        return len(attempt_starts)
