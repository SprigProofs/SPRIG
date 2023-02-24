import * as rchfd from '../frontend/reach/lib.mjs'
import {stdlib} from '../frontend/reach/lib.mjs'
import * as backendClaim from '../frontend/reach/build/claim.main.mjs';
/*
  Testing the JS frontend for the contracts with multiple
  oracles.
*/
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Addresses of participants and giving them funds.
const secretAlice = "0x" + "1".repeat(64);
const secretBob = "0x" + "2".repeat(64);
const secretCharlie = "0x" + "3".repeat(64);
const startingBalance = stdlib.parseCurrency(100);
const accAlice = await stdlib.newAccountFromSecret(secretAlice);
const addressAlice = accAlice.getAddress();
const accBob = await stdlib.newAccountFromSecret(secretBob);
const addressBob = await accBob.getAddress();
const accCharlie = await stdlib.newAccountFromSecret(secretCharlie);
const addressCharlie = await accCharlie.getAddress();
const addressesOracles = [addressAlice, addressBob, addressCharlie];

await stdlib.fundFromFaucet(addressAlice, startingBalance);
await stdlib.fundFromFaucet(addressBob, startingBalance);
await stdlib.fundFromFaucet(addressCharlie, startingBalance);
console.log("Alice's balance: ", await rchfd.getBalance(accAlice));
console.log("Bob's balance: ", await rchfd.getBalance(accBob));
console.log("Charlie's balance: ", await rchfd.getBalance(accCharlie));

const test = async () => {

  // Creating the root, the original proof
  const proofRoot = "-!:=cE\n+.";
  const duration = 10_000_000;
  const deadlineSprig = rchfd.deadlineFromTime(duration);
  const wagerDown = stdlib.parseCurrency(0);
  const [ctcSprig, interactAlice] = rchfd.newSprig(accAlice,
                      addressesOracles,
                      rchfd.hashingAnswer(proofRoot),
                      deadlineSprig,
                      wagerDown,
                      );
  
  const infoCtcSprig = stdlib.bigNumberToNumber(await ctcSprig.getInfo());
  /* console.log("ctcRoot = ", infoCtcSprig);
  console.log("deadlineRoot = ", deadlineSprig); */
  await sleep(1000);
  const verifyRoot = await rchfd.verifyAnswer(ctcSprig,
                                        addressAlice,
                                        addressBob,
                                        null,
                                        rchfd.hashingAnswer(proofRoot),
                                        deadlineSprig,
                                        0,
                                        wagerDown,
                                        false,
                                        );
  rchfd.monitorEventsAnswer(ctcSprig);
  const ctcSprigBob = accBob.contract(backendClaim, infoCtcSprig);
  if (verifyRoot){
    await ctcSprig.apis.Oracle.correctContract();
    await ctcSprigBob.apis.Oracle.correctContract();
  } else { console.log("Verification root didn't work out") }

  // First challenge
  const partAttacked1 = 1;
  const deadlineChallenge1 = rchfd.deadlineFromTime(duration);
  const hashChallenge = rchfd.hashingChallenge(infoCtcSprig.toString(), partAttacked1);
  const [ctcChallenge1, interactChallenge1] = rchfd.challenge(accBob,
                                            addressesOracles,
                                            hashChallenge,
                                            deadlineChallenge1,
                                            wagerDown,
                                            );
  const infoCtcChallenge1 = stdlib.bigNumberToNumber(await ctcChallenge1.getInfo());
  await sleep(1000);
  rchfd.monitorEventsAnswer(ctcChallenge1);
  const verifyChallenge1 = await rchfd.verifyChallenge(ctcChallenge1,
                                                      addressBob,
                                                      addressAlice,
                                                      hashChallenge,
                                                      deadlineChallenge1,
                                                      wagerDown,  
                                                      );
  const ctcChallenge1Alice = accAlice.contract(backendClaim, infoCtcChallenge1)
  if (verifyChallenge1) {
    await ctcChallenge1.apis.Oracle.correctContract();
    await ctcChallenge1Alice.apis.Oracle.correctContract();
  } else { console.log("Verification challenge1 didn't work out") }
  await ctcSprig.apis.Oracle.addParticipant(addressBob, infoCtcChallenge1);
  try{
    await ctcSprigBob.apis.Oracle.addParticipant(addressBob, infoCtcChallenge1);}
    catch (e) {if ( !e.message.includes("It is already a participant") ) throw e}
  /*console.log("ctcChallenge1 = ", infoCtcChallenge1);
  console.log("deadlineChallenge1 = ", deadlineChallenge1);*/

  // Answer to first challenge
  const proof1 = "Trivial by theorem 2";
  const wagerUp = stdlib.parseCurrency(0);
  const deadlineAnswer1 = rchfd.deadlineFromTime(duration);
  const hashAnswer1 = rchfd.hashingAnswer(proof1, infoCtcChallenge1.toString());
  const [ctcAnswer1, interactAnswer1] = rchfd.answer(accAlice,
                                      addressesOracles,
                                      addressBob,
                                      hashAnswer1,
                                      deadlineAnswer1,
                                      wagerUp,
                                      stdlib.parseCurrency(0),
                                      true,
                                      );
  const infoCtcAnswer1 = stdlib.bigNumberToNumber(await ctcAnswer1.getInfo());
  await sleep(1000);
  rchfd.monitorEventsAnswer(ctcAnswer1);
  const verifyAnswer1 = await rchfd.verifyAnswer(ctcAnswer1,
    addressAlice,
    addressCharlie,
    addressBob,
    hashAnswer1,
    deadlineAnswer1,
    wagerUp,
    stdlib.parseCurrency(0),
    true,
    );
const ctcAnswer1Bob = accBob.contract(backendClaim, infoCtcAnswer1);
if (verifyAnswer1){
  await ctcAnswer1.apis.Oracle.correctContract();
  await ctcAnswer1Bob.apis.Oracle.correctContract();
} else { console.log("Verification answer1 didn't work out") }
await ctcChallenge1.apis.Oracle.addParticipant(addressAlice, infoCtcAnswer1);
await ctcAnswer1.apis.Oracle.announceVerification(true);
await ctcAnswer1Bob.apis.Oracle.announceVerification(true);
await ctcChallenge1.apis.Oracle.announceWinner(1);
await ctcChallenge1Alice.apis.Oracle.announceWinner(1);
await ctcSprig.apis.Oracle.announceWinner(0);
await ctcSprigBob.apis.Oracle.announceWinner(0);




  /*console.log("ctcAnswer1 = ", infoCtcAnswer1);
  console.log("deadlineAnswer1 = ", deadlineAnswer1);*/
  /*
  // Second challenge
  const partAttacked2 = 3;
  const deadlineChallenge2 = rchfd.deadlineFromTime(duration);
  const hashChallenge2 = rchfd.hashingChallenge(infoCtcSprig.toString(), 3)
  const ctcChallenge2 = await rchfd.challenge(accBob,
                                            addressesOracles,
                                            hashChallenge2,
                                            deadlineChallenge2,
                                            wagerDown,
                                            );
  rchfd.monitorEventsChallenge(ctcChallenge2);
  const infoCtcChallenge2 = stdlib.bigNumberToNumber(await ctcChallenge2.getInfo());
  console.log("ctcChallenge2 = ", infoCtcChallenge2);
  console.log("deadlineChallenge2 = ", deadlineChallenge2);

  // Answer to second challenge
  const proof2 = "Seems true to me";
  const deadlineAnswer2 = rchfd.deadlineFromTime(duration);
  const hashAnswer2 = rchfd.hashingAnswer(proof2, infoCtcChallenge2.toString());
  const ctcAnswer2 = await rchfd.answer(accAlice,
                                      addressesOracles,
                                      addressBob,
                                      hashAnswer2,
                                      deadlineAnswer2,
                                      wagerUp,
                                      stdlib.parseCurrency(0),
                                      true,
                                      );
  rchfd.monitorEventsAnswer(ctcAnswer2);
  const infoCtcAnswer2 = stdlib.bigNumberToNumber(await ctcAnswer2.getInfo());
  console.log("ctcAnswer2 = ", infoCtcAnswer2);
  console.log("deadlineAnswer2 = ", deadlineAnswer2); */


  console.log("Alice's balance: ", await rchfd.getBalance(accAlice));
  console.log("Bob's balance: ", await rchfd.getBalance(accBob));
};
test();