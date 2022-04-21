import re
import os, subprocess

from languages.base import Language
from typing import Dict, List, NewType, Optional


class Lean(Language):
    """
    Language that represents Lean proofs
    """

    def judge_low_level(self, sprig, statement: str, machine_proof: List[str]) -> bool:
        # TODO: better check
        if 'sorry' in machine_proof[-1]:
            return False

        # TODO: find a way to use stdin
        # Store proof in a file
        f = open('tmp', 'w')
        f.write('\n'.join(machine_proof))
        f.close()

        # Pass it to lean
        out =  subprocess.Popen(['lean', 'tmp'], stdout=subprocess.PIPE, stderr=subprocess.STDOUT)
        stdout, stderr = out.communicate()

        os.remove('tmp')

        # TODO: return error message ?
        return out.returncode == 0

    def validate_subclaims(self, sprig, root_statement: str, *sub_claim_statements: str):
        return True

    def validate_top_level(self, sprig, initial_statement: str):
        return True
