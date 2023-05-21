from sprig import *
"""See testComPyJs.mjs for infos"""

root_height = 2
duration = 10_000_000
wagerUp = 5
wagerDown = 10
addressAlice = "2BFLEMTUFO2KWOQTNC6UMFPE43ICESVXDIAWXL4FECRTFSLXQ43Y4T7XGU"
addressBob = "UCNKL5D2M5MYAL7ZKX4NYLJKCSS4THJDX2L7QZASP74TQNCVUTYKTMWCMM"

proofRoot = "-!:=cE\n+."
partAttackedChallenge1 = 1
proof1 = "Trivial by theorem 2"
partAttackedChallenge2 = 3
proof2 = "Seems true to me"

# Paste here informations given by the console, replacing the current infos
ctcRoot =  324
deadlineRoot =  1677298126559
ctcChallenge1 =  325
deadlineChallenge1 =  1677298126654
ctcAnswer1 =  330
deadlineAnswer1 =  1677298126753
ctcChallenge2 =  335
deadlineChallenge2 =  1677298126848
ctcAnswer2 =  340
deadlineAnswer2 =  1677298126945

print(deadlineRoot - duration)

param = ParametersBlockchain(root_height=root_height,
                             max_length=100,
                             time_for_questions=duration,
                             time_for_answers=duration,
                             upstakes=[wagerUp] * (root_height - 1) + [0],
                             downstakes=[0] + [wagerDown] * (root_height - 1),
                             question_bounties=[0] + [wagerDown] * (root_height - 1),
                             verification_cost=1)

s = Sprig(language="hihi", params=param, proofs={}, challenges={}, root_question="", root_hash=1)

rootAttempt = ProofAttempt(parent=None,
                           contract=str(ctcRoot),
                           author=addressAlice,
                           proof=proofRoot,
                           height=root_height - 1,
                           status="UNCHALLENGED",
                           created_at=(deadlineRoot - duration),
                           challenges=[None] * 10,
                           money_held=0)

s.proofs.update({rootAttempt.hash: rootAttempt})

assert (param.pay_new_proof_attempt(rootAttempt, s))

challenge1 = Challenge(hash=rootAttempt.hash + "1",
                       parent=rootAttempt.hash,
                       contract=str(ctcChallenge1),
                       author=addressBob,
                       created_at=deadlineChallenge1 - duration,
                       challenged_at=deadlineChallenge1 - duration,
                       open_until=deadlineChallenge1,
                       attempts=[],
                       status="CHALLENGED",
                       height=root_height - 1)

rootAttempt.challenges[partAttackedChallenge1] = challenge1.hash
s.challenges.update({challenge1.hash: challenge1})

assert (param.pay_new_challenge(challenge1.author, rootAttempt, challenge1))

answer1 = ProofAttempt(parent=challenge1.hash,
                       contract=str(ctcAnswer1),
                       author=addressAlice,
                       proof=proof1,
                       height=root_height - 2,
                       status="UNCHALLENGED",
                       created_at=deadlineAnswer1 - duration,
                       challenges=[],
                       money_held=0)

challenge1.attempts.append(answer1.hash)
s.proofs.update({answer1.hash: answer1})

assert (param.pay_new_proof_attempt(answer1, s))
param.pay_attempt_accepted(answer1)
param.pay_challenge_rejected(answer1, s)

challenge2 = Challenge(hash=answer1.hash + "1",
                       parent=rootAttempt.hash,
                       contract=str(ctcChallenge2),
                       author=addressBob,
                       created_at=deadlineChallenge2 - duration,
                       challenged_at=deadlineChallenge2 - duration,
                       open_until=deadlineChallenge2,
                       attempts=[],
                       status="CHALLENGED",
                       height=root_height - 1)

rootAttempt.challenges[partAttackedChallenge2] = challenge2.hash
s.challenges.update({challenge2.hash: challenge2})

assert (param.pay_new_challenge(challenge2.author, rootAttempt, challenge2))

answer2 = ProofAttempt(parent=challenge2.hash,
                       contract=str(ctcAnswer2),
                       author=addressAlice,
                       proof=proof2,
                       height=root_height - 2,
                       status="UNCHALLENGED",
                       created_at=deadlineAnswer2 - duration,
                       challenges=[],
                       money_held=0)

challenge2.attempts.append(answer2.hash)
s.proofs.update({answer2.hash: answer2})

assert (param.pay_new_proof_attempt(answer2, s))
param.pay_attempt_rejected(answer2, None, s)
param.pay_challenge_validated(rootAttempt, challenge2)
param.pay_attempt_rejected(rootAttempt, challenge2, s)