import { stdlib, verifyAnswer, verifyChallenge } from './lib.mjs';
import * as backendClaim from './build/claim.main.mjs';
import * as backendChallenge from './build/challenge.main.mjs';


const getParticipants = async (ctc) => {
  /*
    Return the list of participants. More precisely, it
    returns the list of pairs (addressAccount, addressContract).
    If there is no participants, it returns None.

  */
  const resultView = await ctc.views.participants()
  if (resultView[0] == "None"){
    return None
  }
  else{
    // resultView[1] is of the form [["Some", address0], ["Some", address1],..., ["Some", addressn], ["None", Null], ["None", Null],..., ["None", Null]]
    // and each addressk is a tuple (addressAccount, addressContract)
    return resultView[1].filter(x => x[0] == "Some").map(x => x[1]);
  }
}

const announceIsCorrect = (ctc) => {
  ctc.apis.Sprig.announceWinner(true, 0);
}

const announceVerification = (ctc, verification) => {
  ctc.apis.Sprig.announceVerification(verification);
}

const announceWinner = (ctc, index) => {
  ctc.apis.Sprig.announceWinner(false, index);
}

if (process.argv.length > 2){
  const securityConnection = "0x" + "0".repeat(64);

  const [action, typeContract, addressContract] = process.argv.slice(2,5);
  const backend = {"CHALLENGE":backendChallenge, "ANSWER":backendClaim}[typeContract];
  const accountSprig = await stdlib.newAccountFromSecret(securityConnection);
  const addressSprig = stdlib.formatAddress(accountSprig.getAddress());

  const ctc = accountSprig.contract(backend, parseInt(addressContract));
  switch (action) {
    case "VERIFY":
      const [author,
            addressSkeptic,
            deadline,
            wagerUp,
            wagerDown,
            hashInteraction,
            isBottom
            ] = process.argv.slice(5);
        let b = null;
        switch (typeContract){
          case "CHALLENGE":
            b = await verifyChallenge(ctc, author, addressSprig, hashInteraction, parseInt(deadline), stdlib.parseCurrency(wagerDown));
            break;
          case "ANSWER":
            b = await verifyAnswer(ctc, author, addressSprig, ["None","none","null"].includes(addressSkeptic) ? null : addressSkeptic, hashInteraction, parseInt(deadline), stdlib.parseCurrency(wagerUp), stdlib.parseCurrency(wagerDown), isBottom=="true");
            break;
          default:
            throw new Error("type contract not handled.")
        }
      console.log(b);
      break;
    case "ADD_PARTICIPANT":
      const [addressNewParticipant,
            addressContractNewParticipant,
            ] = process.argv.slice(5);
      ctc.apis.Sprig.addParticipant(addressNewParticipant, parseInt(addressContractNewParticipant));
      break;
    case "ANNOUNCE_VERIFICATION":
      const verification = process.argv[5];
      ctc.apis.Sprig.announceVerification(verification=="true" || verification=="True");
      break;
    case "ANNOUNCE_WINNER":
      const [wasRight,
            addressContractWinner
            ] = process.argv.slice(5);
      let indexWinner = 0;
      if (wasRight == "false" || wasRight == "False"){
        const participants = await getParticipants(ctc);
        const contracts = participants.map(x => stdlib.bigNumberToNumber(x[1]));
        indexWinner = contracts.indexOf(parseInt(addressContractWinner));
      }
      ctc.apis.Sprig.announceWinner(wasRight=="true" || wasRight=="True", indexWinner);
      break;
    default:
      throw new Error("Action not handled.")
  }
}