from ..sprig import *
"""See testComPyJs.mjs for infos"""

root_height = 2
duration = 10_000_000
wagerUp = 5
wagerDown = 10
addressAlice = "0xd04ab232742bb4ab3a1368bd4615e4e6d0224ab71a016baf8520a332c9778737"
addressBob = "0xa09aa5f47a6759802ff955f8dc2d2a14a5c99d23be97f864127ff9383455a4f0"

proofRoot = "-!:=cE\n+."
partAttackedChallenge1 = 1
proof1 = "Trivial by theorem 2"
partAttackedChallenge2 = 3
proof2 = "Seems true to me"

# Paste here informations given by the console, replacing the current infos
ctcRoot = 53
deadlineRoot = 1670508559745
ctcChallenge1 = 54
deadlineChallenge1 = 1670508559809
ctcAnswer1 = 59
deadlineAnswer1 = 1670508559889
ctcChallenge2 = 64
deadlineChallenge2 = 1670508559957
ctcAnswer2 = 69
deadlineAnswer2 = 1670508560043

param = ParametersBlockchain(root_height=root_height,
                             max_length=100,
                             time_for_questions=duration,
                             time_for_answers=duration,
                             upstakes=[wagerUp] * (root_height - 1) + [0],
                             downstakes=[0] + [wagerDown] * (root_height - 1),
                             question_bounties=[0] + [wagerDown] * (root_height - 1),
                             verification_cost=1)

s = Sprig(language="hihi", params=param, proofs={}, challenges={}, root_question="")

rootAttempt = ProofAttempt(hash=1,
                           parent=None,
                           contract=str(ctcRoot),
                           author=addressAlice,
                           proof=proofRoot,
                           height=root_height - 1,
                           status="UNCHALLENGED",
                           created_at=deadlineRoot - duration,
                           challenges=[None] * 10,
                           money_held=0)

s.proofs.update({rootAttempt.hash: rootAttempt})

assert (param.pay_new_proof_attempt(rootAttempt, s))

challenge1 = Challenge(hash=rootAttempt.hash + 1,
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

answer1 = ProofAttempt(hash=challenge1.hash + 1,
                       parent=challenge1.hash,
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

challenge2 = Challenge(hash=answer1.hash + 1,
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

answer2 = ProofAttempt(hash=challenge2.hash + 1,
                       parent=challenge2.hash,
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
