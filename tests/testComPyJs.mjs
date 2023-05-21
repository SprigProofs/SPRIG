import * as rchfd from '../frontend/reach/lib.mjs'
import {stdlib} from '../frontend/reach/lib.mjs'
/*
  Testing the Reach frontend in Javascript,
  and the interactions between Python and Javascript. First run
  this, and then run testComPyJs.py after pasting the infos given
  in the console at the place indicated in the code.

*/

// Addresses of participants and giving them funds.
const secretAlice = "0x" + "1".repeat(64);
const secretBob = "0x" + "2".repeat(64);
const secretCharles = "0x" + "3".repeat(64);
const startingBalance = stdlib.parseCurrency(100);
const accAlice = await stdlib.newAccountFromSecret(secretAlice);
const addressAlice = stdlib.formatAddress(accAlice.getAddress());
const accBob = await stdlib.newAccountFromSecret(secretBob);
const addressBob = stdlib.formatAddress(accBob.getAddress());
const accCharles = await stdlib.newAccountFromSecret(secretCharles);
const addressCharles = stdlib.formatAddress(accCharles.getAddress());
const addressesOracles = [addressAlice, addressBob, addressCharles]

await stdlib.fundFromFaucet(addressAlice, startingBalance);
await stdlib.fundFromFaucet(addressCharles, startingBalance);
await stdlib.fundFromFaucet(addressBob, startingBalance)
console.log("Alice's balance: ", await rchfd.getBalance(accAlice));
console.log("Bob's balance: ", await rchfd.getBalance(accBob));

console.log("\nInfos to paste in testComPyJs.py:")
console.log("Address Alice: ", addressAlice)
console.log("Address Bob: ", addressBob)
console.log("Address Charles: ", addressCharles)

const test = async () => {

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  // Creating the root, the original proof
  const proofRoot = "-!:=cE\n+.";
  const duration = 10_000_000;
  const deadlineSprig = rchfd.deadlineFromTime(duration);
  const wagerDown = stdlib.parseCurrency(10);
  const [ctcSprig, _iSprig] = await rchfd.newSprig(accAlice,
                      addressesOracles,
                      rchfd.hashingAnswer(proofRoot),
                      deadlineSprig,
                      wagerDown,
                      );
  const infoCtcSprig = stdlib.bigNumberToNumber(await ctcSprig.getInfo());
  console.log("ctcRoot = ", infoCtcSprig);
  console.log("deadlineRoot = ", deadlineSprig);


  // First challenge
  const partAttacked1 = 1;
  const deadlineChallenge1 = rchfd.deadlineFromTime(duration);
  const hashChallenge = rchfd.hashingChallenge(infoCtcSprig.toString(), partAttacked1);
  const [ctcChallenge1, _iChallenge1] = await rchfd.challenge(accBob,
                                            addressesOracles,
                                            hashChallenge,
                                            deadlineChallenge1,
                                            wagerDown,
                                            );
  const infoCtcChallenge1 = stdlib.bigNumberToNumber(await ctcChallenge1.getInfo());
  console.log("ctcChallenge1 = ", infoCtcChallenge1);
  console.log("deadlineChallenge1 = ", deadlineChallenge1);

  // Answer to first challenge
  const proof1 = "Trivial by theorem 2";
  const wagerUp = stdlib.parseCurrency(5);
  const deadlineAnswer1 = rchfd.deadlineFromTime(duration);
  const hashAnswer1 = rchfd.hashingAnswer(proof1, infoCtcChallenge1.toString());
  const [ctcAnswer1, _iAnswer1] = await rchfd.answer(accAlice,
                                      addressesOracles,
                                      addressBob,
                                      hashAnswer1,
                                      deadlineAnswer1,
                                      wagerUp,
                                      stdlib.parseCurrency(0),
                                      true,
                                      );
  const infoCtcAnswer1 = stdlib.bigNumberToNumber(await ctcAnswer1.getInfo());
  console.log("ctcAnswer1 = ", infoCtcAnswer1);
  console.log("deadlineAnswer1 = ", deadlineAnswer1);

  // Second challenge
  const partAttacked2 = 3;
  const deadlineChallenge2 = rchfd.deadlineFromTime(duration);
  const hashChallenge2 = rchfd.hashingChallenge(infoCtcSprig.toString(), 3)
  const [ctcChallenge2, _iChallenge2] = await rchfd.challenge(accBob,
                                            addressesOracles,
                                            hashChallenge2,
                                            deadlineChallenge2,
                                            wagerDown,
                                            );
  const infoCtcChallenge2 = stdlib.bigNumberToNumber(await ctcChallenge2.getInfo());
  console.log("ctcChallenge2 = ", infoCtcChallenge2);
  console.log("deadlineChallenge2 = ", deadlineChallenge2);

  // Answer to second challenge
  const proof2 = "Seems true to me";
  const deadlineAnswer2 = rchfd.deadlineFromTime(duration);
  const hashAnswer2 = rchfd.hashingAnswer(proof2, infoCtcChallenge2.toString());
  const [ctcAnswer2, _iAnswer2] = await rchfd.answer(accAlice,
                                      addressesOracles,
                                      addressBob,
                                      hashAnswer2,
                                      deadlineAnswer2,
                                      wagerUp,
                                      stdlib.parseCurrency(0),
                                      true,
                                      );
  const infoCtcAnswer2 = stdlib.bigNumberToNumber(await ctcAnswer2.getInfo());
  console.log("ctcAnswer2 = ", infoCtcAnswer2);
  console.log("deadlineAnswer2 = ", deadlineAnswer2);
  

  rchfd.monitorEventsAnswer(ctcSprig);
  rchfd.monitorEventsChallenge(ctcChallenge1);
  rchfd.monitorEventsAnswer(ctcAnswer1);
  rchfd.monitorEventsChallenge(ctcChallenge2);
  rchfd.monitorEventsAnswer(ctcAnswer2);

};
test();