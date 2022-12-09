import {loadStdlib} from '@reach-sh/stdlib';
import * as backendClaim from './build/claim.main.mjs';
import * as backendChallenge from './build/challenge.main.mjs';

export const stdlib = typeof process === 'object'
    ? loadStdlib({...process.env, REACH_NO_WARN: 'Y'}) // Node.js
    : loadStdlib('ALGO');  // Browser

// stdlib.setProviderByName("TestNet");

export const securityConnection = "0x" + "0".repeat(64);

// Function to get the UNIX timestamp that it will be after some time. Time should be a number of milliseconds
export const deadlineFromTime = (time) => time + Date.now();

const sha256 = (text) => stdlib.digest(stdlib.T_Bytes(100_000_000), text);

export const hashingAnswer = (proof, addressContractParent="") =>
  sha256(proof + addressContractParent);

const uIntArrayToHex = (a) => "0x" + Array.from(a)
                                .map(x => x.toString(16))
                                .map(x => x.length == 1 ? "0" + x : x)
                                .join('');

export const hashingChallenge = (addressContractAnswer, indexPartChallenged) =>
  sha256(addressContractAnswer + indexPartChallenged.toString());

export const answer = async (account,
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
  return [ctc, ctc.p.Alice(interact)];
};

// To create and return the contract for a new Sprig
export const newSprig = async (account,
                        addressSprig,
                        interactionHash,
                        deadline,
                        wagerDown,
) => await answer(account,
  addressSprig,
  null,
  interactionHash,
  deadline,
  stdlib.parseCurrency(0),
  wagerDown,
  false,
  );

export const challenge = async (account,
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
  const interact = {
    addressSprig: addressSprig,
    interaction: interactionHash,
    wagerDown: wagerDown,
    deadline: deadline,
  };
  return [ctc, ctc.p.Alice(interact)];
}

const verifyAnswer = async (ctc,
                          author,
                          addressSprig,
                          addressSkeptic,
                          interactionHash,
                          deadline,
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
  const correctInteraction = uIntArrayToHex((await ctc.views.interaction())[1]) == interactionHash;
  const correctWagerDown = stdlib.eq((await ctc.views.wagerDown())[1], wagerDown);
  const correctWagerUp = stdlib.eq((await ctc.views.wagerUp())[1], wagerUp);
  const correctDeadline = stdlib.eq((await ctc.views.deadline())[1], deadline);
  const correctBottom = (await ctc.views.isBottom())[1] == isBottom;
  return correctSprig && correctSkeptic
        && correctInteraction && correctWagerDown
        && correctWagerUp && correctDeadline
        && correctBottom && correctAuthor;
};

const verifyChallenge = async (ctc,
                              author,
                               addressSprig,
                               interactionHash,
                               deadline,
                               wagerDown,
                               ) => {
  const correctAuthor = (await ctc.views.author())[1] == author;
  const correctSprig = (await ctc.views.addressSprig())[1] == addressSprig;
  const correctInteraction = uIntArrayToHex((await ctc.views.interaction())[1]) == interactionHash;
  const correctWagerDown = stdlib.eq((await ctc.views.wagerDown())[1], wagerDown);
  const correctDeadline = stdlib.ge((await ctc.views.deadline())[1], deadline);
  return correctAuthor && correctSprig && correctInteraction && correctWagerDown && correctDeadline;
};

export const monitorEventsAnswer = async (ctc) => {
  /*
    Run to have messages on the console for each
    important event of the contract.
  */
  ctc.events.incorrectContract.monitor((event) => {console.log(`The contract was deemed incorrect at time ${event.when}.`)})
  ctc.events.newParticipant.monitor((event) => {console.log(`A new participant has been added, with address ${event.what[0]}, with contract ${event.what[1]}`)});
  ctc.events.announceWinner.monitor((event) => {console.log(`The winner is announced: the claim was ${event.what[0] ? "correct" : "incorrect"} and the winner is ${event.what[1]} with contract ${event.what[2]}`)});
  ctc.events.announceVerification.monitor((event) => {console.log(`The verification is done, and the claim was ${event.what[0] ? "correct" : "incorrect"}`)});
}

export const monitorEventsChallenge = async (ctc) => {
  /*
    Run to have messages on the console for each
    important event of the contract.
  */
  ctc.events.incorrectContract.monitor((event) => {console.log(`The contract was deemed incorrect at time ${event.when}.`)})
  ctc.events.newParticipant.monitor((event) => {console.log(`A new participant has been added, with address ${event.what[0]}, with contract ${event.what[1]}`)});
  ctc.events.announceWinner.monitor((event) => {console.log(`The winner is announced: the claim was ${event.what[0] ? "correct" : "incorrect"} and the winner is ${event.what[1]} with contract ${event.what[2]}`)});
}

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

export const getBalance = async (acc) => {
  // To get the balance of an account
  const bal = await acc.balanceOf();
  return `${stdlib.formatCurrency(bal, 4)} ${stdlib.standardUnit}`;
};
