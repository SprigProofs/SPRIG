import os
from subprocess import run as command_run
from hashlib import sha256

def jsFrontendReach(parameters, throwingError=False):
    """To call the frontend for Reach written in Javascript, to interact
    with the blockchain.
    """
    env = os.environ.copy()
    env.update({'REACH_CONNECTOR_MODE':'ALGO'})
    return command_run(["node", "./reach/index.mjs"] + parameters, 
                            capture_output=True,
                            check=throwingError,
                            env=env,
                            text=True)

def hashing(text):
    h = sha256()
    h.update(bytes(text, 'utf-8'))
    return "0x" + h.hexdigest()


addressAlice = "0xd04ab232742bb4ab3a1368bd4615e4e6d0224ab71a016baf8520a332c9778737"
addressBob = "0xa09aa5f47a6759802ff955f8dc2d2a14a5c99d23be97f864127ff9383455a4f0"
contractSprig = 401
proofRoot = "-!:=cE\n+."
hashSprig = hashing(proofRoot)
deadlineRoot = 1670300878981
wagerDown = 10
wagerUp = 5

rootVerification = jsFrontendReach(["VERIFY",
                "ANSWER",
                str(contractSprig),
                addressAlice,
                "None",
                str(deadlineRoot),
                "0",
                str(wagerDown),
                hashSprig,
                "false"],
                throwingError=True)

assert(rootVerification.stdout == "true\n")

partAttacked = 1
deadlineChallenge1 = 1670300879049
contractChallenge1 = 402
hashChallenge1 = hashing(str(contractSprig) + str(partAttacked))

challenge1Verification = jsFrontendReach(["VERIFY",
                        "CHALLENGE",
                        str(contractChallenge1),
                        addressBob,
                        "None",
                        str(deadlineChallenge1),
                        "0",
                        str(wagerDown),
                        hashChallenge1,
                        "false"],
                        throwingError=True)

assert(challenge1Verification.stdout == "true\n")


jsFrontendReach(["ADD_PARTICIPANT",
                "ANSWER",
                str(contractSprig),
                addressBob,
                str(contractChallenge1)],
                throwingError=True)

input()

proof1 = "Trivial by theorem 2"
hashAnswer1 = hashing(proof1 + str(contractChallenge1))
deadlineAnswer1 = 1670300879130
contractAnswer1 = 407

answer1Verification = jsFrontendReach(["VERIFY",
                "ANSWER",
                str(contractAnswer1),
                addressAlice,
                addressBob,
                str(deadlineAnswer1),
                str(wagerUp),
                "0",
                hashAnswer1,
                "true"],
                throwingError=True)

assert(answer1Verification.stdout == "true\n")

jsFrontendReach(["ADD_PARTICIPANT",
                "CHALLENGE",
                str(contractChallenge1),
                addressAlice,
                str(contractAnswer1)],
                throwingError=True)

input()

jsFrontendReach(["ANNOUNCE_VERIFICATION",
                "ANSWER",
                str(contractAnswer1),
                "true"])

input()

jsFrontendReach(["ANNOUNCE_WINNER",
                "CHALLENGE",
                str(contractChallenge1),
                "false",
                str(contractAnswer1)],
                throwingError=True)

input()

contractChallenge2 = 412
partAttacked2 = 3
hashChallenge2 = hashing(str(contractSprig) + str(partAttacked2))
deadlineChallenge2 = 1670300879209

challenge2Verification = jsFrontendReach(["VERIFY",
                    "CHALLENGE",
                    str(contractChallenge2),
                    addressBob,
                    "None",
                    str(deadlineChallenge2),
                    "0",
                    str(wagerDown),
                    hashChallenge2,
                    "false"],
                    throwingError=True)

assert(challenge2Verification.stdout == "true\n")

jsFrontendReach(["ADD_PARTICIPANT",
                "ANSWER",
                str(contractSprig),
                addressBob,
                str(contractChallenge2)],
                throwingError=True)

input()

contractAnswer2 = 417
proof2 = "Seems true to me"
hashAnswer2 = hashing(proof2 + str(contractChallenge2))
deadlineAnswer2 = 1670300879288

answer2Verification = jsFrontendReach(["VERIFY",
                    "ANSWER",
                    str(contractAnswer2),
                    addressAlice,
                    addressBob,
                    str(deadlineAnswer2),
                    str(wagerUp),
                    "0",
                    hashAnswer2,
                    "true"],
                    throwingError=True)

assert(answer2Verification.stdout == "true\n")

jsFrontendReach(["ADD_PARTICIPANT",
                "CHALLENGE",
                str(contractChallenge2),
                addressAlice,
                str(contractAnswer2)],
                throwingError=True)

input()

jsFrontendReach(["ANNOUNCE_VERIFICATION",
                "ANSWER",
                str(contractAnswer2),
                "false"])

input()

jsFrontendReach(["ANNOUNCE_WINNER",
                "CHALLENGE",
                str(contractChallenge2),
                "true",
                str(0)],
                throwingError=True)

input()

announcing_winner = jsFrontendReach(["ANNOUNCE_WINNER",
                "ANSWER",
                str(contractSprig),
                "false",
                str(contractChallenge2)],
                throwingError=True)

print(announcing_winner.stdout)