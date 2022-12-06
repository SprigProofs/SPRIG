'reach 0.1';

const READ_COST = 1000;

export const main = Reach.App(() => {
  const Admin = Participant('Admin', {
    secret: UInt,  // Nothing but the name makes it a secret!
  });
  const Client = API('Client', {
    read_secret: Fun([], UInt),
  })
  init();

  Admin.only(() => {
    const secret = declassify(interact.secret);
  });
  Admin.publish(secret);

  const [nbCalls] =
    parallelReduce([ 0 ])
    .invariant(nbCalls >= 0)
    .invariant( balance() == nbCalls * READ_COST )
    .while(true)
    .api_(Client.read_secret, () => {
      return [ READ_COST, (ret) => {
        ret(secret);
        return [ nbCalls + 1 ];
      } ];
    });

    commit();
    exit()
});