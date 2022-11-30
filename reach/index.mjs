import {loadStdlib} from '@reach-sh/stdlib';
import * as backendClaim from './build/claim.main.mjs';
import * as backendChallenge from './build/challenge.main.mjs';
const stdlib = loadStdlib({...process.env, REACH_NO_WARN: 'Y'});
// stdlib.setProviderByName("TestNet");

const securityConnection = null; // TODO: how do we connect to the account?


// Acceptable time delay for the server to receive infos on the contract of a new interaction
const delayAcceptation = 100;

// Function to get the UNIX timestamp that it will be after some time. Time should be a number of seconds
const deadlineFromTime = (time) => time + (Date.now() / 1000);

const sha256 = (text) => stdlib.digest(stdlib.T_Bytes(64), text);

const hashingAnswer = (proof, addressContractParent="") => 
  sha256(proof + addressContractParent)

const hashingChallenge = (addressContractAnswer, indexPartChallenged) =>
  sha256(addressContractAnswer + toString(indexPartChallenged))

const answer = async (account,
                   addressSprig,
                   addressSkeptic,
                   interactionHash,
                   deadline,
                   wagerUp,
                   wagerDown,
                   isBottom=false,
) => {
  /*
    Create and return a new contract for a new Sprig or
    to answer a challenge.
  */
  const ctc = account.contract(backendClaim);
  const interact = {
    addressSprig: addressSprig,
    addressSkeptic: (addressSkeptic === null ? ['None', null] : ['Some', addressSkeptic]),
    interaction: interactionHash,
    wagerUp: wagerUp,
    wagerDown: wagerDown,
    deadline: deadline,
    isBottom: isBottom,
  };
  ctc.p.Alice(interact);
  return ctc;
};

// To create and return the contract for a new Sprig
const newSprig = async (account,
                        addressSprig,
                        interactionHash,
                        deadline,
                        wagerDown,
) => await answer(account,
  addressSprig,
  null,
  interactionHash,
  deadline,
  0,
  wagerDown,
  false,
  );

const challenge = async (account,
                         addressSprig,
                         interactionHash,
                         deadline,
                         wagerDown,
) => {
  /*
    Create and return the contract for a new
    challenge.

  */
  const ctc = account.contract(backendChallenge);
  const deadline = deadline;
  const interact = {
    addressSprig: addressSprig,
    interaction: interactionHash,
    wagerDown: wagerDown,
    deadline: deadline,
  };
  ctc.p.Alice(interact);
  return ctc;  
}

const verifyAnswer = async (ctc,
                          author,
                          addressSprig,
                          addressSkeptic,
                          interactionHash,
                          durationDebate,
                          wagerUp,
                          wagerDown,
                          isBottom,
                          ) => {
  /*
    To verify the answer contract given by the user. Returns a boolean.
    A view is a function that returns a Maybe, because it can be not set for the moment.
  */
  const correctAuthor = (await ctc.views.author())[1] == author;
  const correctSprig = (await ctc.views.addressSprig())[1] == addressSprig;
  const correctSkeptic = (await ctc.views.addressSkeptic())[1][1] ==  addressSkeptic;
  const correctInteraction = (await ctc.views.interaction())[1].replaceAll('\x00', '') == interactionHash;
  const correctWagerDown = stdlib.eq((await ctc.views.wagerDown())[1], wagerDown);
  const correctWagerUp = stdlib.eq((await ctc.views.wagerUp())[1], wagerUp);
  const correctDeadline = stdlib.ge((await ctc.views.deadline())[1], deadlineFromTime(durationDebate - delayAcceptation));
  const correctBottom = (await ctc.views.isBottom())[1] == isBottom;
  return correctSprig && correctSkeptic 
        && correctInteraction && correctWagerDown
        && correctWagerUp && correctDeadline
        && correctBottom && correctAuthor;
};

const verifyChallenge = async (ctc,
                              author,
                               addressSprig,
                               interactionBytes,
                               durationDebate,
                               wagerDown,
                               ) => {
  const correctAuthor = (await ctc.views.author())[1] == author;
  const correctSprig = (await ctc.views.addressSprig())[1] == addressSprig;
  const correctInteraction = (await ctc.views.interaction())[1].replaceAll('\x00', '') == interactionBytes;
  const correctWagerDown = stdlib.eq((await ctc.views.wagerDown())[1], wagerDown);
  const correctDeadline = stdlib.ge((await ctc.views.deadline())[1], deadlineFromTime(durationDebate - delayAcceptation));
  return correctAuthor && correctSprig && correctInteraction && correctWagerDown && correctDeadline;
};

const monitorEvents = async (ctc) => {
  ctc.events.incorrectContract.monitor((event) => {console.log(`The contract was deemed incorrect at time ${event.when}.`)})
  ctc.events.newParticipant.monitor((event) => {console.log(`A new participant has been added, with address ${event.what[0]}, with contract ${event.what[1]}`)});
  ctc.events.announceWinner.monitor((event) => {console.log(`The winner is announced: the claim was ${event.what[0] ? "correct" : "incorrect"} and the winner is ${event.what[1]} with contract ${event.what[2]}`)});
  ctc.events.announceVerification.monitor((event) => {console.log(`The verification is done, and the claim was ${event.what[0] ? "correct" : "incorrect"}`)});
}

const monitorEventsChallenge = async (ctc) => {
  ctc.events.incorrectContract.monitor((event) => {console.log(`The contract was deemed incorrect at time ${event.when}.`)})
  ctc.events.newParticipant.monitor((event) => {console.log(`A new participant has been added, with address ${event.what[0]}, with contract ${event.what[1]}`)});
  ctc.events.announceWinner.monitor((event) => {console.log(`The winner is announced: the claim was ${event.what[0] ? "correct" : "incorrect"} and the winner is ${event.what[1]} with contract ${event.what[2]}`)});
}

const getParticipants = async (ctc) => {
  resultView = await ctc.views.participants()
  if (resultView[0] == "None"){
    return None
  }
  else{
    // resultView[1] is of the form [["Some", address0], ["Some", address1],..., ["Some", addressn], ["None", Null], ["None", Null],..., ["None", Null]]
    // and each addressk is a tuple (addressAccount, addressContract)
    return resultView[1].filter(x => x[0] == "Some").map(x => x[1])
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

const getBalance = async (acc) => {
  // To get the balance of an account
  const bal = await acc.balanceOf();
  return `${stdlib.formatCurrency(bal, 4)} ${stdlib.standardUnit}`;
};


if (process.argv.length() > 2){
  const [action, typeContract, addressContract] = process.argv[2].slice(2,5);
  const backend = {"CHALLENGE":backendChallenge, "ANSWER":backendAnswer}[typeContract];
  const accountSprig = await stdlib.newAccountFromMnemonic(securityConnection);
  const addressSprig = accountSprig.getAddress();
  const ctc = accountSprig.contract(backend, parseInt(addressContract));
  switch (action) {
    case "VERIFY":
      const [author,
            addressSkeptic,
            time,
            wagerUp,
            wagerDown,
            hashInteraction,
            isBottom
            ] = process.argv.slice(5);
        let b = none;
        switch (typeContract){
          case "CHALLENGE":
            b = verifyChallenge(ctc, author, addressSprig, hashInteraction, parseInt(time), parseInt(wagerDown));
            break;
          case "ANSWER":
            b = verifyAnswer(ctc, author, addressSprig, addressSkeptic, hashInteraction, parseInt(time), parseInt(wagerUp), parseInt(wagerDown), isBottom=="true");
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
      ctc.apis.Sprig.announceVerification(verification=="true");
      break;
    case "ANNOUNCE_WINNER":
      const [wasRight,
            addressContractWinner
            ] = process.argv.slice(5);
      if (!wasRight){
        participants = getParticipants(ctc);
        contracts = participants.map(x => stdlib.bigNumberToNumber(x[1][1]));
        indexWinner = contracts.indexOf(parseInt(addressContractWinner));
      } else {
        indexWinner = 0;
      }
      ctc.apis.Sprig.announceWinner(wasRight=="true", indexWinner);
      break;
    default:
      throw new Error("Action not handled.")
  }
    
}