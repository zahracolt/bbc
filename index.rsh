'reach 0.1';


const commonFunctions = {
  seeNotification : Fun([Bool],Null),
  attacherMatched : Fun([Bool],Null),
};

export const main = Reach.App(() => {
  const Alice = Participant('Alice', {
    ...commonFunctions,
    tokenDetails : Fun([], Tuple(Token, UInt, UInt)),
    attacherMatched1 :Fun([Bool],Null),
    aliceAdd : Fun([], Address), 
    aliceAdd2 : Fun([], Address)   
  });
  const Bob = Participant('Bob', {
    ...commonFunctions,
    ready : Fun([Token, UInt], Bool)
  });
  const Mcintyre = Participant('Mcintyre', {
    ...commonFunctions,
    attacherMatched1 : Fun([Bool],Null),
    ready1 : Fun([Token, UInt], Bool)
    
  });
  init();
  
  Alice.only(() => {
    const [IToken, IAmt, time] = declassify(interact.tokenDetails());
    check(IToken != IAmt);
    
  });
  
  Alice.publish(IToken, IAmt, time);
  
  commit();
  
  Bob.only(() => {
    const ready = declassify(interact.ready(IToken, IAmt))
  });
  Bob.publish(ready);
  commit();

  Mcintyre.only(() => {
    const ready1 = declassify(interact.ready1(IToken,IAmt))
  });
  Mcintyre.publish(ready1);

  const transferWho = new Set();
  transferWho.insert(Mcintyre);
  commit();

  if(ready && ready1)
    each([Alice, Bob, Mcintyre], () => interact.seeNotification(ready));

  Alice.pay([[IAmt, IToken]])
  .when(ready)
  .timeout(relativeTime(time), () => {
    Alice.publish();
   
    
    commit();
    exit();
  });

  commit();

  Alice.only(() => {
    const aliceAddress = declassify(interact.aliceAdd());
    const mcintyreAddress = declassify(interact.aliceAdd2());
  })
  
  Alice.publish(aliceAddress, mcintyreAddress);
  
  if(transferWho.member(aliceAddress) && !transferWho.member(mcintyreAddress)){
    each([Alice, Bob], () => interact.attacherMatched(true));
    each([Alice, Mcintyre], () => interact.attacherMatched1(false));
    
    transfer(IAmt, IToken).to(Bob);    
  }else if(!transferWho.member(aliceAddress) && transferWho.member(mcintyreAddress)) {
    each([Alice, Mcintyre], () => interact.attacherMatched1(true));
    each([Alice, Bob], () => interact.attacherMatched(false));

    transfer(IAmt, IToken).to(Mcintyre);
  }
  else{
    each([Alice, Mcintyre], () => interact.attacherMatched1(false));
    each([Alice, Bob], () => interact.attacherMatched(false));
    transfer(IAmt, IToken).to(Alice);

  }
  commit();
  exit();
});
