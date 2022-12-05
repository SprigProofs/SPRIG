import {loadStdlib} from '@reach-sh/stdlib';
import * as backendClaim from './build/claim.main.mjs';
import * as backendChallenge from './build/challenge.main.mjs';
export const stdlib = loadStdlib({...process.env, REACH_NO_WARN: 'Y'});
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
  sha256(addressContractAnswer + toString(indexPartChallenged));

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
  ctc.p.Alice(interact);
  return ctc;
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
  ctc.p.Alice(interact);
  return ctc;  
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
                               interactionBytes,
                               deadline,
                               wagerDown,
                               ) => {
  const correctAuthor = (await ctc.views.author())[1] == author;
  const correctSprig = (await ctc.views.addressSprig())[1] == addressSprig;
  const correctInteraction = (await ctc.views.interaction())[1].replaceAll('\x00', '') == interactionBytes;
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

export const getBalance = async (acc) => {
  // To get the balance of an account
  const bal = await acc.balanceOf();
  return `${stdlib.formatCurrency(bal, 4)} ${stdlib.standardUnit}`;
};


if (process.argv.length > 2){
  const [action, typeContract, addressContract] = process.argv.slice(2,5);
  const backend = {"CHALLENGE":backendChallenge, "ANSWER":backendClaim}[typeContract];
  const accountSprig = await stdlib.newAccountFromSecret(securityConnection);
  const addressSprig = accountSprig.getAddress();
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
            b = await verifyAnswer(ctc, author, addressSprig, addressSkeptic == "None" ? null : addressSkeptic, hashInteraction, parseInt(deadline), stdlib.parseCurrency(wagerUp), stdlib.parseCurrency(wagerDown), isBottom=="true");
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
      let indexWinner = 0
      if (!wasRight){
        participants = getParticipants(ctc);
        contracts = participants.map(x => stdlib.bigNumberToNumber(x[1][1]));
        indexWinner = contracts.indexOf(parseInt(addressContractWinner));
      }
      ctc.apis.Sprig.announceWinner(wasRight=="true", indexWinner);
      break;
    default:
      throw new Error("Action not handled.")
  }
    
}

const secretAlice = "0x" + "1".repeat(64);
const startingBalance = stdlib.parseCurrency(100);
const Alice = await stdlib.newAccountFromSecret(secretAlice);
const Sprig = await stdlib.newAccountFromSecret(securityConnection);
const Bob   = await stdlib.newTestAccount(startingBalance);
const addressSprig = Sprig.getAddress();
const addressBob = Bob.getAddress();
const addressAlice = Alice.getAddress();
await stdlib.fundFromFaucet(addressAlice, startingBalance);
await stdlib.fundFromFaucet(addressSprig, startingBalance);


const bytes = "0x92f7d2a7f4f9ed7b8282d3413fc3579236553290504d671227e3b58a34fb4d50";
const duration = 100000;
const deadline = deadlineFromTime(duration);
const wagerDown = stdlib.parseCurrency(1);
const wagerUp = stdlib.parseCurrency(0);
const firstTest = async () =>
{
  console.log("test 1")
  console.log("Expected result: the claim was wrong, there is a winner")
  console.log(`Money on Bob's account: ${await getBalance(Bob)}`)
  const ctcAlice = await newSprig(Alice, addressSprig, bytes, deadline, wagerDown);
  const infoCtcAlice = (await ctcAlice.getInfo());
  console.log("Launching Alice's contract");
  const ctcSprig = Sprig.contract(backendClaim, infoCtcAlice);
  console.log("Connecting Sprig");

  monitorEventsAnswer(ctcSprig);
  if (await verifyAnswer(ctcSprig, addressAlice, addressSprig, null, bytes, duration, wagerUp, wagerDown, false)){
    await ctcSprig.apis.Sprig.addParticipant(addressBob, infoCtcAlice);
    await ctcSprig.apis.Sprig.announceWinner(false, 0);
    console.log(`Money on Bob's account: ${await getBalance(Bob)}`)
  } else {
    await ctcSprig.apis.Sprig.incorrectContract();
  }
}