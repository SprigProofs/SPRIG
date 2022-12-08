import * as rchfd from '../reach/index.mjs'
import {stdlib} from '../reach/index.mjs'
/*
  Testing the Reach frontend in Javascript,
  and the interactions between Python and Javascript. First run
  this, and then run testComPyJs.py after replacing the number of
  the contract and the deadline in the code.

*/

// Addresses of participants and giving them funds.
const secretAlice = "0x" + "1".repeat(64);
const secretBob = "0x" + "2".repeat(64);
const startingBalance = stdlib.parseCurrency(100);
const sprig = await stdlib.newAccountFromSecret(rchfd.securityConnection);
const addressSprig = sprig.getAddress();
const accAlice = await stdlib.newAccountFromSecret(secretAlice);
const addressAlice = accAlice.getAddress();
const accBob = await stdlib.newAccountFromSecret(secretBob);
const addressBob = await accBob.getAddress();
await stdlib.fundFromFaucet(addressAlice, startingBalance);
await stdlib.fundFromFaucet(addressSprig, startingBalance);
await stdlib.fundFromFaucet(addressBob, startingBalance)
console.log("Alice's balance: ", await rchfd.getBalance(accAlice));
console.log("Bob's balance: ", await rchfd.getBalance(accBob));

const test = async () => {

  // Creating the root, the original proof
  const proofRoot = "-!:=cE\n+.";
  const duration = 10_000_000;
  const deadlineSprig = rchfd.deadlineFromTime(duration);
  const wagerDown = stdlib.parseCurrency(10);
  const ctcSprig = await rchfd.newSprig(accAlice,
                      addressSprig,
                      rchfd.hashingAnswer(proofRoot),
                      deadlineSprig,
                      wagerDown,
                      );
  rchfd.monitorEventsAnswer(ctcSprig);
  const infoCtcSprig = stdlib.bigNumberToNumber(await ctcSprig.getInfo());
  console.log("ctcRoot = ", infoCtcSprig);
  console.log("deadlineRoot = ", deadlineSprig);


  // First challenge
  const partAttacked1 = 1;
  const deadlineChallenge1 = rchfd.deadlineFromTime(duration);
  const hashChallenge = rchfd.hashingChallenge(infoCtcSprig.toString(), partAttacked1);
  const ctcChallenge1 = await rchfd.challenge(accBob,
                                            addressSprig,
                                            hashChallenge,
                                            deadlineChallenge1,
                                            wagerDown,
                                            );
  rchfd.monitorEventsChallenge(ctcChallenge1);
  const infoCtcChallenge1 = stdlib.bigNumberToNumber(await ctcChallenge1.getInfo());
  console.log("ctcChalleng1 = ", infoCtcChallenge1);
  console.log("deadlineChallenge1 = ", deadlineChallenge1);

  // Answer to first challenge
  const proof1 = "Trivial by theorem 2";
  const wagerUp = stdlib.parseCurrency(5);
  const deadlineAnswer1 = rchfd.deadlineFromTime(duration);
  const hashAnswer1 = rchfd.hashingAnswer(proof1, infoCtcChallenge1.toString());
  const ctcAnswer1 = await rchfd.answer(accAlice,
                                      addressSprig,
                                      addressBob,
                                      hashAnswer1,
                                      deadlineAnswer1,
                                      wagerUp,
                                      stdlib.parseCurrency(0),
                                      true,
                                      );
  rchfd.monitorEventsAnswer(ctcAnswer1);
  const infoCtcAnswer1 = stdlib.bigNumberToNumber(await ctcAnswer1.getInfo());
  console.log("ctcAnswer1 = ", infoCtcAnswer1);
  console.log("deadlineAnswer1 = ", deadlineAnswer1);

  // Second challenge
  const partAttacked2 = 3;
  const deadlineChallenge2 = rchfd.deadlineFromTime(duration);
  const hashChallenge2 = rchfd.hashingChallenge(infoCtcSprig.toString(), 3)
  const ctcChallenge2 = await rchfd.challenge(accBob,
                                            addressSprig,
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
                                      addressSprig,
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
  console.log("deadlineAnswer2 = ", deadlineAnswer2);

};
test();