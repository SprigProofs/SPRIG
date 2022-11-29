'reach 0.1';

const fee = 1000; // Money that goes to Sprig
const maxParticipants = 10;
const sizeBinaryInfo = 300;

export const main = Reach.App(() => {
  const A = Participant('Alice', {
    addressSprig: Address,
    addressSkeptic: Maybe(Address),
    interaction: Bytes(sizeBinaryInfo),
    wagerUp: UInt, // Non-zero only if a claimer is defending against a skeptic's attack, will go to the skeptic's address if A is wrong
    wagerDown: UInt, // Will go to the person who shows that this claim or this attack is wrong. It is 0 if this claim is at the bottom and should be formally verified.
    deadline: UInt, // Unix timestamp for the deadline
    isBottom: Bool,
  });

  const Sprig = API('Sprig', {
    incorrectContract: Fun([], Null),
    addParticipant: Fun([Address, Contract], Null),
    announceVerification: Fun([Bool], Null), // Only called if it is at the bottom and should be formal verification
    announceWinner: Fun([Bool, UInt], Null) // The boolean is whether the original claim or attack of A was right or not,
  });                                       // and the UInt is the index of the winner in the list of participants if the boolean is false
  
  const V = View({
    addressSprig: Address,
    addressSkeptic: Maybe(Address),
    interaction: Bytes(sizeBinaryInfo),
    wagerUp: UInt,
    wagerDown: UInt,
    deadline: UInt,
    isBottom: Bool,
    participants: Array(Maybe(Tuple(Address, Contract)), maxParticipants),
  });

  const E = Events({
    incorrectContract: [],
    newParticipant: [Address, Contract],
    announceWinner: [Bool, Address, Contract], // The bool indicates if A was right, the address is the address of the winner, and the contract is the winning interaction
    announceVerification: [Bool],
  });
  init();

  A.only(() => {
    const addressSprig = declassify(interact.addressSprig);
    const addressSkeptic = declassify(interact.addressSkeptic);
    const interaction = declassify(interact.interaction);
    const wagerUp = declassify(interact.wagerUp); 
    const wagerDown = declassify(interact.wagerDown); 
    const deadline = declassify(interact.deadline);
    const isBottom = declassify(interact.isBottom);
    assume(implies(isBottom, wagerDown == 0));
  });

  A.publish(addressSprig, addressSkeptic, interaction, wagerUp, wagerDown, deadline, isBottom)
  .pay(wagerUp + wagerDown + fee);
  require(implies(isBottom, wagerDown == 0));

  transfer(fee).to(addressSprig);
  V.addressSprig.set(addressSprig);
  V.addressSkeptic.set(addressSkeptic);
  V.interaction.set(interaction);
  V.wagerUp.set(wagerUp);
  V.wagerDown.set(wagerDown);
  V.deadline.set(deadline);
  V.isBottom.set(isBottom);

  const emptyArray = () => Array.replicate(maxParticipants, Maybe(Tuple(Address, Contract)).None(null)); // Will contain the address of the participants and the contracts of the child interactions
  const [ isConcluded, numberParticipants, participants ] = 
    parallelReduce([ false, 0, emptyArray() ])
    .define(() => {
      V.participants.set(participants);
    })
    .invariant(numberParticipants <= maxParticipants)
    .invariant(balance() == (isConcluded ? 0 : wagerUp + wagerDown))
    .while ( !isConcluded )

    .api_(Sprig.incorrectContract, () => {
      check(this == addressSprig, 'You are not Sprig');
      check(numberParticipants == 0, 'Debate has already begun');
      return [ 0, (ret) => {
        E.incorrectContract();
        transfer(wagerUp + wagerDown).to(A);
        ret(null);
        return [ true, 0, participants ];
      } ];
    })

    .api_(Sprig.addParticipant, (newPart, newInter) => {
      check(this == addressSprig, 'You are not Sprig');
      check(numberParticipants < maxParticipants, 'Too many participants');
      check(!isBottom, 'Cannot challenge a bottom claim');
      return [ 0, (ret) => {
        const newListParticipants = participants.set(numberParticipants, Maybe(Tuple(Address, Contract)).Some([newPart, newInter]));
        E.newParticipant(newPart, newInter);
        ret(null);
        return [ false, numberParticipants + 1, newListParticipants ];
      } ];
    })

    .api_(Sprig.announceWinner, (wasARight, indexWinner) => {
      check(this == addressSprig, 'You are not Sprig');
      check(wasARight || indexWinner < numberParticipants, 'This participant does not exist.');
      check(!isBottom, 'Can only announce verification.')
      return [ 0, (ret) => {
        const winner = wasARight ? [ A, getContract() ] : fromSome(participants[indexWinner], [ A, getContract() ]);
        E.announceWinner(wasARight, winner[0], winner[1]);
        transfer(wagerDown).to(winner[0]);
        transfer(wagerUp).to(wasARight ? A : fromSome(addressSkeptic, A));
        ret(null);
        return [ true, numberParticipants, participants ];
      } ];
    })

    .api_(Sprig.announceVerification, (wasRight) => {
      check(this == addressSprig, 'You are not Sprig');
      check(isBottom, 'Can only announce formal verification if it is bottom.');
      return [ 0, (ret) => {
        E.announceVerification(wasRight);
        transfer(wagerUp).to(wasRight ? A : fromSome(addressSkeptic, A));
        ret(null);
        return [ true, 0, participants ];
      } ];
    });

  commit();
  exit();
});