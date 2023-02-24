import {loadStdlib} from '@reach-sh/stdlib';
import * as backendClaim from './build/claim.main.mjs';
import * as backendChallenge from './build/challenge.main.mjs';

export const stdlib = typeof process === 'object'
    ? loadStdlib({...process.env, REACH_NO_WARN: 'Y'}) // Node.js
    : loadStdlib('ALGO');  // Browser

// stdlib.setProviderByName("TestNet");
// export const SPRIG_ADDRESS = 'H4RUFKUVAVR7MH6GF45IE3GW73D4ISNJ4Q6CEWLMI6E4NN6TZATHNIUKQM';
export const SPRIG_ADDRESSES = [
  'VY4OFDKCNHTNXB7B36H5YP2XUTIAZCJHKHPJD3V6DED2Y7CRA72W6EDIPU',
  'LPI3D5YBLSOX2T3FEAENXUG7J6URCX2PYGEVK26Y7K5V5LAFTDSW5CBAUU',
  'OEKIUSWDTRNTH4JEVAXKC2YNZ5B5P45KEQERWHAXO2UZLLBADIQMD6XQQ4',
]

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

export const answer = (account,
                   addressesOracles,
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
    addressesOracles: addressesOracles,
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
export const newSprig = (account,
                        addressesOracles,
                        interactionHash,
                        deadline,
                        wagerDown,
) => answer(account,
  addressesOracles,
  null,
  interactionHash,
  deadline,
  stdlib.parseCurrency(0),
  wagerDown,
  false,
  );

export const challenge = (account,
                         addressesOracles,
                         interactionHash,
                         deadline,
                         wagerDown,
) => {
  /*
    Create and return the contract for a new
    challenge.

  */
  return answer(account,
                addressesOracles,
                null,
                interactionHash,
                deadline,
                stdlib.parseCurrency(0),
                wagerDown,
                );
}

export const verifyAnswer = async (ctc,
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
  const correctAuthor = stdlib.formatAddress((await ctc.views.author())[1]) == author;
  const correctSprig = (await ctc.views.addressesOracles())[1]
                        .map(stdlib.formatAddress)
                        .includes(addressSprig);
  const correctSkeptic = (addressSkeptic === null)
    ? (await ctc.views.addressSkeptic())[1][0] == 'None'
    : stdlib.formatAddress((await ctc.views.addressSkeptic())[1][1]) ==  addressSkeptic;
  const correctInteraction = uIntArrayToHex((await ctc.views.interaction())[1]) == interactionHash;
  const correctWagerDown = stdlib.eq((await ctc.views.wagerDown())[1], wagerDown);
  const correctWagerUp = stdlib.eq((await ctc.views.wagerUp())[1], wagerUp);
  const correctDeadline = stdlib.eq((await ctc.views.deadline())[1], deadline);
  const correctBottom = (await ctc.views.isBottom())[1] == isBottom;
  /*console.log(
    "correctSprig", correctSprig,
    "\ncorrectSkeptic", correctSkeptic, addressSkeptic, (await ctc.views.addressSkeptic()),
    "\ncorrectInteraction", correctInteraction,
    "\ncorrectWagerDown", correctWagerDown,
    "\ncorrectWagerUp", correctWagerUp,
    "\ncorrectDeadline", correctDeadline,
    "\ncorrectBottom", correctBottom,
    "\ncorrectAuthor", correctAuthor
  );*/
  return correctSprig && correctSkeptic
        && correctInteraction && correctWagerDown
        && correctWagerUp && correctDeadline
        && correctBottom && correctAuthor;
};

export const verifyChallenge = async (ctc,
                               author,
                               addressSprig,
                               interactionHash,
                               deadline,
                               wagerDown,
                               ) => {
  return verifyAnswer(ctc,
                      author,
                      addressSprig,
                      null,
                      interactionHash,
                      deadline,
                      stdlib.parseCurrency(0),
                      wagerDown,
                      false);
};

export const monitorEventsAnswer = async (ctc) => {
  /*
    Run to have messages on the console for each
    important event of the contract.
  */
  ctc.events.correctContract.monitor((event) => {console.log(`The contract was deemed correct at time ${event.when}.`)})
  ctc.events.newParticipant.monitor((event) => {console.log(`A new participant has been added, with address ${event.what[0]}, with contract ${event.what[1]}`)});
  ctc.events.announceWinner.monitor((event) => {console.log(`The winner is announced: the winner is ${event.what[0]} with contract ${event.what[1]}`)});
  ctc.events.announceVerification.monitor((event) => {console.log(`The verification is done, and the claim was ${event.what[0] ? "correct" : "incorrect"}`)});
}

export const monitorEventsChallenge = async (ctc) => {monitorEventsAnswer(ctc);}

export const getBalance = async (acc) => {
  // To get the balance of an account
  const bal = await acc.balanceOf();
  return `${stdlib.formatCurrency(bal, 4)} ${stdlib.standardUnit}`;
};