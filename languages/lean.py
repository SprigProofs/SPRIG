import re
import os, subprocess

from languages.base import Language
from typing import Dict, List, NewType, Optional


def lean_validate(lean_code: str) -> bool:
    f = open('tmp', 'w')
    f.write(lean_code)
    f.close()

    out =  subprocess.Popen(['lean', 'tmp'], stdout=subprocess.PIPE, stderr=subprocess.STDOUT)
    stdout, stderr = out.communicate()

    os.remove('tmp')

    return out.returncode

def extract_lemma_name(code_piece: str) -> Optional[str]:
    lemma_match = re.match("^lemma\s([^\s]*)", code_piece)
    
    if lemma_match is None:
        return None
    else:
        return lemma_match.groups()[0]

class Lean(Language):
    """
    Language that represents Lean proofs
    """

    def judge_low_level(self, sprig, statement: str, machine_proof: List[str]) -> bool:
        # TODO: better check
        if 'sorry' in machine_proof[-1]:
            return False

        return lean_validate('\n'.join(machine_proof)) == 0

    def validate_subclaims(self, sprig, root_statement: str, common_proof_part: List[str], *sub_claim_statements: str):
        if extract_lemma_name(sub_claim_statements[-1]) != extract_lemma_name(root_statement):
            return False

        common_code = '\n'.join(common_proof_part)
        for statement in sub_claim_statements:
            if lean_validate(common_code + '\n' + statement) != 0:
                return False

        return True

    def validate_top_level(self, sprig, initial_statement: str):
        return extract_lemma_name(initial_statement) is not None
