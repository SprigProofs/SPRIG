import re
import os, subprocess

import docker  # type: ignore

from languages.base import Language
from typing import Dict, List, NewType, Optional

REGEX = r'(theorem|lemma|example)\s([^\s]*)\s\(.*\)\s:\s(.*)\s:='
DEV = os.environ.get("DEV", "").lower() in ("true", "1", "yes", "y'")

class Lean4(Language):
    """
    Language that represents Lean proofs.

    TODO: Explain in detail the format of:
        - root questions
        - proof attempts
        - machine proofs
    """

    name = "Lean4"
    if not DEV:
        docker_client = docker.from_env()
        # Check if image is built
        try:
            docker_client.images.get('sprig/lean4')
        except:
            print('Building docker image')
            docker_client.images.build(path='.', tag='sprig/lean4')
            print('Build done')

    def lean_validate(self, lean_code: str) -> bool:
        """ Call lean to verify validity of machine proof """
        # Write code to file
        f = open(f'{os.getcwd()}/tmp_file', 'w')
        f.write(lean_code)
        f.close()

        # Call lean, potentially in a container
        isValid = False
        if DEV:
            out = subprocess.Popen(['lean', f'"{os.getcwd()}/tmp_file"'], stdout=subprocess.PIPE, stderr=subprocess.STDOUT)
            stdout, stderr = out.communicate()

            isValid = out.returncode == 0
        else:
            try:
                self.docker_client.containers.run(
                    'sprig/lean4', ['/bin/sh', '-c', '/root/.elan/bin/lean /tmp_file'],
                    volumes={f'{os.getcwd()}/tmp_file': {
                        'bind': '/tmp_file',
                        'mode': 'ro'
                    }},
                    remove=True)
                isValid = True
            except:
                isValid = False

        # Delete file and return
        os.remove(f'{os.getcwd()}/tmp_file')
        return isValid

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

        # Sanity check: low-level proof should not contain a sorry (it is checked in validate_attempt)
        assert 'sorry' not in machine_proof, 'Proof is not a machine proof (contains sorry)'

        # Accumulate content of proof, ignoring challenged elements and what follows them
        proof_elements = []
        for proof_attempt, chal_nb in branch:
            challenge_starts = list(re.compile('-- chal').finditer(proof_attempt))
            challenge_start = challenge_starts[chal_nb]

            proof_elements.append(proof_attempt[:challenge_start.start()])
        proof_elements.append(machine_proof)

        # Validate proof with lean
        proof = '\n'.join(proof_elements)
        if not self.lean_validate(proof):
            return False

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

        challenge_start = challenge_starts[chal_nb].end() + 1
        challenge_end = challenge_ends[chal_nb].start()
        challenged_text = proof_attempt[challenge_start:challenge_end]

        challenged_thm = re.match(REGEX, challenged_text.strip())
        assert challenged_thm is not None, "The parent challenged cannot be parsed. Please report this, it should not happen."
        challenged_header = challenged_text[challenged_thm.start():challenged_thm.end() + 1]

        # Read attempt
        attempt_starts = list(re.compile('-- chal').finditer(attempt))
        attempt_ends = list(re.compile('-- endchal').finditer(attempt))

        # Verify coherence of markers
        assert len(attempt_starts) == len(
            attempt_ends), 'The number of -- chal and -- endchal markers is not the same.'
        assert all([
            attempt_starts[i].end() < attempt_ends[i].start() for i in range(len(attempt_starts))
        ]), 'Mismatch of challenge markers.'
        assert all([
            attempt_ends[i].end() < attempt_starts[i + 1].start()
            for i in range(len(attempt_starts) - 1)
        ]), 'Mismatch of challenge markers.'

        # Verify a sorry between each pair of markers
        assert all([
            len(re.findall(r"\bsorry\b",
                           attempt[attempt_starts[i].end():attempt_ends[i].start()])) == 1
            for i in range(len(attempt_starts))
        ]), 'Not all challenge contain a sorry.'

        # Verify no sorry outside of pairs of markers
        if len(attempt_starts) > 0:
            assert 'sorry' not in attempt[:attempt_starts[0].start(
            )], 'There is a sorry outside of a challenge.'
            assert all([
                'sorry' not in attempt[attempt_ends[i].end():attempt_starts[i + 1].start()]
                for i in range(len(attempt_starts) - 1)
            ]), 'There is a sorry outside of a challenge.'
            assert 'sorry' not in attempt[attempt_ends[-1].end(
            ):], 'There is a sorry outside of a challenge.'
        else:
            assert 'sorry' not in attempt, "A machine level proof should not contain a sorry."

        # TODO: improve this check
        # Verify that challenged claim is proven again
        assert challenged_header.strip() in attempt, "The challenged claim is not proven again."

        return True

    def validate_top_level(self, root_question: str) -> bool:
        """Check that an initial claim is valid. Raises AssertionError if not."""
        #assert lean_validate(root_question), "This is not a valid lean file"

        # Get markers
        attempt_starts = list(re.compile('-- chal').finditer(root_question))
        attempt_ends = list(re.compile('-- endchal').finditer(root_question))

        # Verify there is only one, it contains one sorry and no other sorries outside of marks
        assert len(attempt_starts) == len(
            attempt_ends
        ) == 1, "The root question should contain exactly one of both challenge markers."
        assert 1 == len(
            re.findall(r"\bsorry\b", root_question[attempt_starts[0].end():attempt_ends[0].start()])
        ), "The root question should contain exactly one sorry between the challenge markers."
        assert 'sorry' not in root_question[:attempt_starts[0].start(
        )], "The root question contains a sorry outside of the challenge markers."
        assert 'sorry' not in root_question[attempt_ends[0].end(
        ):], "The root question contains a sorry outside of the challenge markers."

        challenged_thm = re.match(
            REGEX, root_question[attempt_starts[0].end() + 1:attempt_ends[0].start()].strip())
        assert challenged_thm is not None, "The root question cannot be parsed."

        return True

    def nb_of_challenges(self, proof: str) -> int:
        """Return the number of points on which a proof can be challenged.

        This is called only with syntaxic validity checked."""
        attempt_starts = list(re.compile('-- chal').finditer(proof))
        attempt_ends = list(re.compile('-- endchal').finditer(proof))

        assert len(attempt_starts) == len(attempt_ends), 'Sanity check'

        return len(attempt_starts)
