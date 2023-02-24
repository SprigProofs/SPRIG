'reach 0.1';

const maxParticipants = 10;
const sizeBinaryInfo = 32;
const nbrOracles = 3;
// The minimal number of oracles that need to agree in order to take a decision
const minForDecisions = nbrOracles/2 + 1;

const Child = Maybe(Tuple(Address, Contract));

export const main = Reach.App(() => {
  const A = Participant('Alice', {
    addressesOracles: Array(Address, nbrOracles),
    addressSkeptic: Maybe(Address),
    interaction: Bytes(sizeBinaryInfo),
    wagerUp: UInt, // Non-zero only if a claimer is defending against a skeptic's attack, will go to the skeptic's address if A is wrong
    wagerDown: UInt, // Will go to the person who shows that this claim or this attack is wrong. It is 0 if this claim is at the bottom and should be formally verified.
    deadline: UInt, // Unix timestamp for the deadline
    isBottom: Bool,
  });

  const Oracle = API('Oracle', {
    correctContract: Fun([], Null),
    addParticipant: Fun([Address, Contract], Null),
    announceVerification: Fun([Bool], Null), // Only called if it is at the bottom and should be formal verification
    announceWinner: Fun([UInt], Null) // The UInt should be the index of the winner. The index is 0 if the original claim is correct.
  });
  
  const V = View({
    author: Address,
    addressesOracles: Array(Address, nbrOracles),
    addressSkeptic: Maybe(Address),
    interaction: Bytes(sizeBinaryInfo),
    wagerUp: UInt,
    wagerDown: UInt,
    deadline: UInt,
    isBottom: Bool,
    isCorrect: Array(Bool, nbrOracles),
    participants: Array(Child, maxParticipants),
  });

  const E = Events({
    correctContract: [],
    newParticipant: [Address, Contract],
    announceWinner: [Address, Contract], // The address is the address of the winner, and the contract is the winning interaction
    announceVerification: [Bool],
  });
  init();

  A.only(() => {
    const addressesOracles = declassify(interact.addressesOracles);
    const addressSkeptic = declassify(interact.addressSkeptic);
    const interaction = declassify(interact.interaction);
    const wagerUp = declassify(interact.wagerUp); 
    const wagerDown = declassify(interact.wagerDown); 
    const deadline = declassify(interact.deadline);
    const isBottom = declassify(interact.isBottom);
    assume(implies(isBottom, wagerDown == 0));
  });

  A.publish(addressesOracles, addressSkeptic, interaction, wagerUp, wagerDown, deadline, isBottom)
  .pay(wagerUp + wagerDown);
  require(implies(isBottom, wagerDown == 0));

  V.author.set(A);
  V.addressesOracles.set(addressesOracles);
  V.addressSkeptic.set(addressSkeptic);
  V.interaction.set(interaction);
  V.wagerUp.set(wagerUp);
  V.wagerDown.set(wagerDown);
  V.deadline.set(deadline);
  V.isBottom.set(isBottom);

  const initParticipants = () => Array.replicate(maxParticipants, 
                                          Child.None(null))
                                          .set(0, Child.Some([A, getContract()])); // Will contain the address of the participants and the contracts of the child interactions
  
  const [ isConcluded, 
          isCorrect, 
          numberParticipants, 
          participants,
          scores,
          hasDeclaredAWinner,
          verifications
        ] = 
    parallelReduce([ false, 
                      Array.replicate(nbrOracles, false),
                      1,
                      initParticipants(),
                      Array.replicate(maxParticipants, 0),
                      Array.replicate(nbrOracles, false),
                      Array.replicate(nbrOracles, Maybe(Bool).None(null)) ])
    .define(() => {
      V.participants.set(participants);
      V.isCorrect.set(isCorrect);
      const verificationConcluded = () => (verifications.count(x => x == Maybe(Bool).Some(true)) == minForDecisions)
                      || (verifications.count(x => x == Maybe(Bool).Some(false)) == minForDecisions);
    })
    .invariant(numberParticipants <= maxParticipants)
    .invariant(balance() == (isConcluded ? 0 : wagerUp + wagerDown))
    .invariant(implies(isBottom, scores.all(x => x == 0) && hasDeclaredAWinner.all(x => x == false)))
    .invariant(implies(isBottom && isConcluded, verificationConcluded()))
    // Should be true, but is not able to verify:
    // .invariant(implies(isBottom && verificationConcluded(), isConcluded))
    .invariant(implies(!isBottom, isConcluded == scores.any(x => x == minForDecisions)))
    .invariant(implies(!isBottom, scores.all(x => x <= minForDecisions)))
    .while ( !isConcluded )

    .api_(Oracle.correctContract, () => {
      const index = addressesOracles.findIndex(x => x == this);
      check(isSome(index), 'You are not an oracle');
      return [ 0, (ret) => {
        const newIsCorrect = isCorrect.set(fromSome(index, 0), true);
        if ( newIsCorrect.count(x => x) == minForDecisions ){
          E.correctContract();
        }
        ret(null);
        return [ false, newIsCorrect, numberParticipants, participants, scores, hasDeclaredAWinner, verifications ];
      } ];
    })

    .api_(Oracle.addParticipant, (newPart, newInter) => {
      const index = addressesOracles.findIndex(x => x == this);
      check(isSome(index), 'You are not an oracle');
      check(numberParticipants < maxParticipants, 'Too many participants');
      check(!isBottom, 'Cannot challenge a bottom claim');
      const newChild = Child.Some([ newPart, newInter ]);
      check(!participants.includes(newChild), "It is already a participant")
      return [ 0, (ret) => {
        const newListParticipants = participants.set(numberParticipants, newChild);
        E.newParticipant(newPart, newInter);
        ret(null);
        return [ false, isCorrect, numberParticipants + 1, newListParticipants, scores, hasDeclaredAWinner, verifications ];
      } ];
    })

    .api_(Oracle.announceWinner, (indexWinner) => {
      const index = addressesOracles.findIndex(x => x == this);
      check(isSome(index), 'You are not an oracle');
      check(!hasDeclaredAWinner[fromSome(index, 0)], 'You already declared a winner');
      check(indexWinner < numberParticipants, 'This participant does not exist.');
      check(!isBottom, 'Can only announce verification.')
      return [ 0, (ret) => {
        const newHasDeclaredAWinner = hasDeclaredAWinner.set(fromSome(index,0), true);
        const newScore = scores[indexWinner] + 1;
        const newScores = scores.set(indexWinner, newScore);
        const newIsConcluded = newScore == minForDecisions;
        if ( newIsConcluded ){
          const winner = fromSome(participants[indexWinner], [ A, getContract() ]);
          E.announceWinner(winner[0], winner[1]);
          transfer(wagerDown).to(winner[0]);
          transfer(wagerUp).to(indexWinner == 0 ? A : fromSome(addressSkeptic, A));
        }
        ret(null);
        return [ newIsConcluded, isCorrect, numberParticipants, participants, newScores, newHasDeclaredAWinner, verifications ];
      } ];
    })

    .api_(Oracle.announceVerification, (wasRight) => {
      const someIndex = addressesOracles.findIndex(x => x == this);
      check(isSome(someIndex), 'You are not an oracle');
      check(isBottom, 'Can only announce formal verification if it is bottom');
      const index = fromSome(someIndex, 0);
      check(isNone(verifications[index]), "You already announced a verification")
      return [ 0, (ret) => {
        const newVerifications = verifications.set(index, Maybe(Bool).Some(wasRight));
        const newIsConcluded = (newVerifications.count(x => x == Maybe(Bool).Some(wasRight)) == minForDecisions);
        if ( newIsConcluded ) {
          E.announceVerification(wasRight);
          transfer(wagerUp).to(wasRight ? A : fromSome(addressSkeptic, A));
        }
        ret(null);
        return [ newIsConcluded, isCorrect, numberParticipants, participants, scores, hasDeclaredAWinner, newVerifications ];
      } ];
    });

  commit();
  exit();
});