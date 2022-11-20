import {loadStdlib} from '@reach-sh/stdlib';
import * as backendClaim from './build/claim.main.mjs';
import * as backendChallenge from './build/challenge.main.mjs';
const stdlib = loadStdlib({...process.env, REACH_NO_WARN: 'Y'});
stdlib.setProviderByName("TestNet");

const securityConnection = null; // TODO: how do we connect to the account?


// Acceptable time delay for the server to receive infos on the contract of a new interaction
const delayAcceptation = 100;

// Function to get the Network time that it will be after some time.
const deadlineFromTime = async (time) => (await stdlib.getNetworkTime()).add(time);

const answer = async (account,
                   addressSprig,
                   addressSkeptic,
                   interactionHash,
                   durationDebate,
                   wagerUp,
                   wagerDown,
                   isBottom=false,
) => {
  /*
    Create and return a new contract for a new Sprig or
    to answer a challenge.
  */
  const ctc = account.contract(backendClaim);
  const deadline = await deadlineFromTime(durationDebate);
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
                        durationDebate,
                        wagerDown,
                        isBottom,
) => await answer(account,
  addressSprig,
  null,
  interactionHash,
  durationDebate,
  0,
  wagerDown,
  isBottom,
  );

const challenge = async (account,
                         addressSprig,
                         interactionHash,
                         durationDebate,
                         wagerDown,
) => {
  /*
    Create and return the contract for a new
    challenge.

  */
  const ctc = account.contract(backendChallenge);
  const deadline = await deadlineFromTime(durationDebate);
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
  const correctSprig = (await ctc.views.addressSprig())[1] == addressSprig;
  const correctSkeptic = (await ctc.views.addressSkeptic())[1][1] ==  addressSkeptic;
  const correctInteraction = (await ctc.views.interaction())[1].replaceAll('\x00', '') == interactionHash;
  const correctWagerDown = stdlib.eq((await ctc.views.wagerDown())[1], wagerDown);
  const correctWagerUp = stdlib.eq((await ctc.views.wagerUp())[1], wagerUp);
  const correctDeadline = stdlib.ge((await ctc.views.deadline())[1], (await stdlib.getNetworkTime()).add(durationDebate - delayAcceptation));
  const correctBottom = (await ctc.views.isBottom())[1] == isBottom;
  return correctSprig && correctSkeptic && correctInteraction && correctWagerDown && correctWagerUp && correctDeadline && correctBottom;
};

const verifyChallenge = async (ctc,
                               addressSprig,
                               interactionBytes,
                               durationDebate,
                               wagerDown,
                               ) => {
  const correctSprig = (await ctc.views.addressSprig())[1] == addressSprig;
  const correctInteraction = (await ctc.views.interaction())[1].replaceAll('\x00', '') == interactionBytes;
  const correctWagerDown = stdlib.eq((await ctc.views.wagerDown())[1], wagerDown);
  const correctDeadline = stdlib.ge((await ctc.views.deadline())[1], (await stdlib.getNetworkTime()).add(durationDebate - delayAcceptation));
  return correctSprig && correctInteraction && correctWagerDown && correctDeadline;
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

const announceIsCorrect = (ctc) => {
  ctc.apis.Sprig.announceWinner(true, 0);
}

const announceVerification = (ctc, verification) => {
  ctc.apis.Sprig.announceVerification(verification);
}

const announceWinner = (ctc, index) => {
  ctc.apis.Sprig.announceWinner(false, index);
}


// Test part

const getBalance = async (acc) => {
  // To get the balance of an account
  const bal = await acc.balanceOf();
  return `${stdlib.formatCurrency(bal, 4)} ${stdlib.standardUnit}`;
};

const startingBalance = stdlib.parseCurrency(100);
const Alice = await stdlib.newTestAccount(startingBalance);
const Sprig = await stdlib.newTestAccount(startingBalance);
const Bob   = await stdlib.newTestAccount(startingBalance);
const addressSprig = Sprig.getAddress();
const addressBob = Bob.getAddress();


const bytes = "100";
const duration = 1000;
const wagerDown = stdlib.parseCurrency(1);
const wagerUp = stdlib.parseCurrency(0);
const firstTest = async () =>
{
  console.log("test 1")
  console.log("Expected result: the claim was wrong, there is a winner")
  const ctcAlice = await newSprig(Alice, addressSprig, bytes, duration, wagerDown, false);
  const infoCtcAlice = (await ctcAlice.getInfo());
  console.log("Launching Alice's contract");
  const ctcSprig = Sprig.contract(backendClaim, infoCtcAlice);
  console.log("Connecting Sprig");

  monitorEvents(ctcSprig);
  if (await verifyAnswer(ctcSprig, addressSprig, null, bytes, duration, wagerUp, wagerDown, false)){
    await ctcSprig.apis.Sprig.addParticipant(addressBob, infoCtcAlice);
    await ctcSprig.apis.Sprig.announceWinner(false, 0);
  } else {
    await ctcSprig.apis.Sprig.incorrectContract();
  }
}

const secondTest = async () =>
{
  console.log("test 2");
  console.log("Expected result: the deadline is too soon")
  const ctcAlice = await newSprig(Alice, addressSprig, bytes, duration, wagerDown);
  const infoCtcAlice = (await ctcAlice.getInfo());
  console.log("Launching Alice's contract");
  const ctcSprig = Sprig.contract(backendClaim, infoCtcAlice);
  console.log("Connecting Sprig");

  monitorEvents(ctcSprig);
  await stdlib.wait(100);
  if (await verifyAnswer(ctcSprig, addressSprig, null, bytes, duration, wagerUp, wagerDown, false)){
    await ctcSprig.apis.Sprig.addParticipant(addressBob, infoCtcAlice);
    await ctcSprig.apis.Sprig.announceWinner(false, 0);
  } else {
    await ctcSprig.apis.Sprig.incorrectContract();
  }
}

const thirdTest = async () =>
{
  console.log("test 3");
  console.log("Expected result: the claim is correct")
  const ctcAlice = await newSprig(Alice, addressSprig, bytes, duration, wagerDown);
  const infoCtcAlice = (await ctcAlice.getInfo());
  console.log("Launching Alice's contract");
  const ctcSprig = Sprig.contract(backendClaim, infoCtcAlice);
  console.log("Connecting Sprig");
  monitorEvents(ctcSprig);
  if (await verifyAnswer(ctcSprig, addressSprig, null, bytes, duration, wagerUp, wagerDown, false)){
    await stdlib.wait(duration);
    await ctcSprig.apis.Sprig.announceWinner(true, 0);
  } else {
    await ctcSprig.apis.Sprig.incorrectContract();
  }
}

const fourthTest = async () => 
{
  const skeptic = addressBob;
  const wagerDown = stdlib.parseCurrency(0);
  const wagerUp = stdlib.parseCurrency(1);
  console.log("test 4");
  console.log("Expected result: It is a bottom claim, and it is correct")
  const ctcAlice = await answer(Alice, addressSprig, addressBob, bytes, duration, wagerUp, wagerDown, true);
  const infoCtcAlice = (await ctcAlice.getInfo());
  console.log("Launching Alice's contract");
  const ctcSprig = Sprig.contract(backendClaim, infoCtcAlice);
  console.log("Connecting Sprig");
  monitorEvents(ctcSprig);
  if (await verifyAnswer(ctcSprig, addressSprig, addressBob, bytes, duration, wagerUp, wagerDown, true)){
    await ctcSprig.apis.Sprig.announceVerification(true);
  } else {
    await ctcSprig.apis.Sprig.incorrectContract();
  } 
}

const fifthTest = async () =>
{
  const wagerDown = stdlib.parseCurrency(1);
  console.log("test 5");
  console.log("Expected result: The challenge is correct")
  const ctcAlice = await challenge(Alice, addressSprig, bytes, duration, wagerDown);
  const infoCtcAlice = (await ctcAlice.getInfo());
  console.log("Launching Alice's contract");
  const ctcSprig = Sprig.contract(backendChallenge, infoCtcAlice);
  console.log("Connecting Sprig");
  monitorEventsChallenge(ctcSprig);
  if (await verifyChallenge(ctcSprig, addressSprig, bytes, duration, wagerDown)){
    await ctcSprig.apis.Sprig.addParticipant(addressBob, infoCtcAlice);
    await stdlib.wait(duration);
    await ctcSprig.apis.Sprig.announceWinner(true, 0);
  } else {
    await ctcSprig.apis.Sprig.incorrectContract();
  } 
}

if (process.argv.length() > 2){
  const [action, typeContract, addressContract] = process.argv[2].slice(2,5);
  const backend = {"CHALLENGE":backendChallenge, "ANSWER":backendAnswer}[typeContract];
  const accountSprig = await stdlib.newAccountFromMnemonic(securityConnection);
  const addressSprig = accountSprig.getAddress();
  const ctc = accountSprig.contract(backend, JSON.parse(addressContract));
  switch (action) {
    case "VERIFY":
      const [addressSkeptic,
            time,
            wagerUp,
            wagerDown,
            hashInteraction,
            isBottom
            ] = process.argv.slice(5);
        let b = none;
        switch (typeContract){
          case "CHALLENGE":
            b = verifyChallenge(ctc, addressSprig, hashInteraction, parseInt(time), parseInt(wagerDown));
            break;
          case "ANSWER":
            b = verifyAnswer(ctc, addressSprig, addressSkeptic, hashInteraction, parseInt(time), parseInt(wagerUp), parseInt(wagerDown), isBottom=="true");
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
      ctc.apis.Sprig.addParticipant(addressNewParticipant, addressContractNewParticipant);
      break;
    case "ANNOUNCE_VERIFICATION":
      const verification = process.argv[5];
      ctc.apis.Sprig.announceVerification(verification=="true");
      break;
    case "ANNOUNCE_WINNER":
      const [wasRight,
            indexWinner
            ] = process.argv.slice(5);
      ctc.apis.Sprig.announceWinner(wasRight=="true", parseInt(indexWinner));
      break;
    default:
      throw new Error("Action not handled.")
  }
    
}

// await firstTest();
// await secondTest();
// await thirdTest();
// await fourthTest();
// await fifthTest();