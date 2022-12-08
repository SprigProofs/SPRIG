'reach 0.1';

const fee = 1000; // Money that goes to Sprig
const maxParticipants = 10;
const sizeBinaryInfo = 32;

export const main = Reach.App(() => {
  const A = Participant('Alice', {
    addressSprig: Address,
    interaction: Bytes(sizeBinaryInfo),
    wagerDown: UInt, // Will go to the person who shows that this claim or this attack is wrong.
    deadline: UInt, // UNIX timestamp for the deadline
  });

  const Sprig = API('Sprig', {
    incorrectContract: Fun([], Null),
    addParticipant: Fun([Address, Contract], Null),
    announceWinner: Fun([Bool, UInt], Null) // The boolean is whether the original claim or attack of A was right or not,
  });                                       // and the UInt is the index of the winner in the list of participants if the boolean is false
  
  const V = View({
    author: Address,
    addressSprig: Address,
    interaction: Bytes(sizeBinaryInfo),
    wagerDown: UInt,
    deadline: UInt,
    participants: Array(Maybe(Tuple(Address, Contract)), maxParticipants),
  });

  const E = Events({
    incorrectContract: [],
    newParticipant: [Address, Contract],
    announceWinner: [Bool, Address, Contract], // The bool indicates if A was right, the address is the address of the winner, and the contract is the winning interaction
  });
  init();

  A.only(() => {
    const addressSprig = declassify(interact.addressSprig);
    const interaction = declassify(interact.interaction);
    const wagerDown = declassify(interact.wagerDown); 
    const deadline = declassify(interact.deadline);
  });

  A.publish(addressSprig, interaction, wagerDown, deadline)
  .pay(wagerDown + fee);
  transfer(fee).to(addressSprig);
  V.author.set(A);
  V.addressSprig.set(addressSprig);
  V.interaction.set(interaction);
  V.wagerDown.set(wagerDown);
  V.deadline.set(deadline);

  const emptyArray = () => Array.replicate(maxParticipants, Maybe(Tuple(Address, Contract)).None(null)); // Will contain the address of the participants and the contracts of the child interactions
  const [ isConcluded, numberParticipants, participants ] = 
    parallelReduce([ false, 0, emptyArray() ])
    .define(() => {
      V.participants.set(participants);
    })
    .invariant(numberParticipants <= maxParticipants)
    .invariant(balance() == (isConcluded ? 0 : wagerDown))
    .while ( !isConcluded )

    .api_(Sprig.incorrectContract, () => {
      check(this == addressSprig, 'You are not Sprig');
      check(numberParticipants == 0, 'Debate has already begun');
      return [ 0, (ret) => {
        E.incorrectContract();
        transfer(wagerDown).to(A);
        ret(null);
        return [ true, 0, participants ];
      } ];
    })

    .api_(Sprig.addParticipant, (newPart, newInter) => {
      check(this == addressSprig, 'You are not Sprig');
      check(numberParticipants < maxParticipants, 'Too many participants');
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
      return [ 0, (ret) => {
        const winner = wasARight ? [ A, getContract() ] : fromSome(participants[indexWinner], [ A, getContract() ]);
        E.announceWinner(wasARight, winner[0], winner[1]);
        transfer(wagerDown).to(winner[0]);
        ret(null);
        return [ true, numberParticipants, participants ];
      } ];
    });

  commit();
  exit();
});