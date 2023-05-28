import re
import os, subprocess

from languages.base import Language

REGEX = r'(theorem|lemma|example) .*:='
DEV = os.environ.get("DEV", "").lower() in ("true", "1", "yes", "y'")
DUPLICATE_TOKENS = ['theorem', 'lemma', 'example', ':=']
OPENING_TAG = '--! SPRIG Claim'
CLOSING_TAG = '--! Claim end'

if not DEV:
    import docker


class Lean4(Language):
    """
    Language that represents Lean proofs.
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
        """
        Call lean to verify validity of machine proof
        """

        random_id = os.urandom(16).hex()

        # Write code to file
        f = open(f'{os.getcwd()}/tmp_file{random_id}', 'w')
        f.write(lean_code)
        f.close()

        # Call lean, potentially in a container
        isValid = False
        if DEV:
            out = subprocess.Popen(['lean', f'{os.getcwd()}/tmp_file{random_id}'],
                                   stdout=subprocess.PIPE,
                                   stderr=subprocess.STDOUT)
            stdout, _ = out.communicate()

            isValid = out.returncode == 0
            feedback = stdout.decode()
        else:
            feedback = self.docker_client.containers.run(
                'sprig/lean4', ['/bin/sh', '-c', '/root/.elan/bin/lean /tmp_file ; echo $?'],
                volumes={
                    f'{os.getcwd()}/tmp_file{random_id}': {
                        'bind': '/tmp_file',
                        'mode': 'ro'
                    }
                },
                remove=True).decode()

            isValid = int(feedback.strip().split('\n')[-1]) == 0
            feedback = '\n'.join(feedback.strip().split('\n')[:-1])

        # Delete file and return
        os.remove(f'{os.getcwd()}/tmp_file{random_id}')
        print(feedback)
        return isValid

    def gather_and_validate(self, branch: list[tuple[str, int]], proof: str) -> bool:
        """
        Gather proof elements and call lean validate
        """

        # Accumulate content of proof, ignoring challenged elements and what follows them
        proof_elements = []
        for proof_attempt, chal_nb in branch:
            challenge_starts = list(re.compile(OPENING_TAG).finditer(proof_attempt))
            challenge_start = challenge_starts[chal_nb]

            proof_elements.append(proof_attempt[:challenge_start.start()])
        proof_elements.reverse()
        proof_elements.append(proof)

        # Validate proof with lean
        full_proof = '\n'.join(proof_elements)
        return self.lean_validate(full_proof)

    def check_answer(self, root_question: str, branch: list[tuple[str, int]], proof: str) -> bool:
        """
        Check that a proof attempt answers the corresponding challenge
        """
        # Recover text of challenged proof attempt, and claim position
        proof_attempt, chal_nb = branch[-1] if len(branch) > 0 else (root_question, 0)

        # Recover challenged portion
        challenge_starts = list(re.compile(OPENING_TAG).finditer(proof_attempt))
        challenge_ends = list(re.compile(CLOSING_TAG).finditer(proof_attempt))

        challenge_start = challenge_starts[chal_nb].end() + 1
        challenge_end = challenge_ends[chal_nb].start()
        challenged_text = proof_attempt[challenge_start:challenge_end]

        challenged_thm = re.match(REGEX, challenged_text.strip())
        assert challenged_thm is not None, "The parent challenged cannot be parsed. Please report this, it should not happen."
        challenged_header = challenged_text[challenged_thm.start():challenged_thm.end() + 1]

        # Verify that challenged claim is proven again
        assert any([
            line.strip().startswith(challenged_header.strip()) for line in proof.split('\n')
        ]), "The challenged claim is not proven again."

        return True

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

        try:
            self.check_answer(root_question, branch, machine_proof)
        except:
            return False

        # Sanity check: low-level proof should not contain a sorry
        if 'sorry' in machine_proof:
            return False

        return self.gather_and_validate(branch, machine_proof)

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

        self.check_answer(root_question, branch, attempt)

        # Read attempt
        attempt_starts = list(re.compile(OPENING_TAG).finditer(attempt))
        attempt_ends = list(re.compile(CLOSING_TAG).finditer(attempt))

        # Verify coherence of markers
        assert len(attempt_starts) == len(
            attempt_ends), 'The number of OPENING_TAG and CLOSING_TAG markers is not the same.'
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
        ]), 'Some marked theorems don\'t contain a sorry'

        # Verify only one theorem between each pair of markers
        for token in DUPLICATE_TOKENS:
            assert all([
                len(re.findall(f"{token}",
                               attempt[attempt_starts[i].end():attempt_ends[i].start()])) <= 1
                for i in range(len(attempt_starts))
            ]), 'Several theorems between the same markers pair'

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

        assert self.gather_and_validate(branch, attempt), "The proof is not valid Lean code"

        return True

    def validate_top_level(self, root_question: str) -> bool:
        """Check that an initial claim is valid. Raises AssertionError if not."""
        #assert lean_validate(root_question), "This is not a valid lean file"

        # Get markers
        attempt_starts = list(re.compile(OPENING_TAG).finditer(root_question))
        attempt_ends = list(re.compile(CLOSING_TAG).finditer(root_question))

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

        between_markers = root_question[attempt_starts[0].end() + 1:attempt_ends[0].start()]
        assert between_markers.count(":=") == 1, "The root question should contain exactly one theorem (i.e. one :=) between the challenge markers."

        thm = re.match(REGEX, between_markers)
        assert thm is not None, f"Could not recognize a theorem between the challenge markers: {between_markers}"

        assert self.lean_validate(root_question)

        return True

    def nb_of_challenges(self, proof: str) -> int:
        """Return the number of points on which a proof can be challenged.

        This is called only with syntaxic validity checked."""
        attempt_starts = list(re.compile(OPENING_TAG).finditer(proof))
        attempt_ends = list(re.compile(CLOSING_TAG).finditer(proof))

        assert len(attempt_starts) == len(attempt_ends), 'Sanity check'

        return len(attempt_starts)
