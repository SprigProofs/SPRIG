// Automatically generated with Reach 0.1.12 (1f68dfdb)
/* eslint-disable */
export const _version = '0.1.12';
export const _versionHash = '0.1.12 (1f68dfdb)';
export const _backendVersion = 26;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Bool;
  const ctc1 = stdlib.T_Address;
  const ctc2 = stdlib.T_Contract;
  return {
    announceWinner: [ctc0, ctc1, ctc2],
    incorrectContract: [],
    newParticipant: [ctc1, ctc2]
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Null;
  const ctc4 = stdlib.T_Contract;
  const ctc5 = stdlib.T_Tuple([ctc0, ctc4]);
  const ctc6 = stdlib.T_Data({
    None: ctc3,
    Some: ctc5
    });
  const ctc7 = stdlib.T_Array(ctc6, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '10'));
  
  const _addressSprig = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v1062, v1063, v1064, v1065, v1066, v1116, v1117] = svs;
      return (await ((async () => {
        
        
        return v1063;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _author = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v1062, v1063, v1064, v1065, v1066, v1116, v1117] = svs;
      return (await ((async () => {
        
        
        return v1062;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _deadline = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v1062, v1063, v1064, v1065, v1066, v1116, v1117] = svs;
      return (await ((async () => {
        
        
        return v1066;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _interaction = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v1062, v1063, v1064, v1065, v1066, v1116, v1117] = svs;
      return (await ((async () => {
        
        
        return v1064;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _participants = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v1062, v1063, v1064, v1065, v1066, v1116, v1117] = svs;
      return (await ((async () => {
        
        
        return v1117;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _wagerDown = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v1062, v1063, v1064, v1065, v1066, v1116, v1117] = svs;
      return (await ((async () => {
        
        
        return v1065;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  return {
    infos: {
      addressSprig: {
        decode: _addressSprig,
        dom: [],
        rng: ctc0
        },
      author: {
        decode: _author,
        dom: [],
        rng: ctc0
        },
      deadline: {
        decode: _deadline,
        dom: [],
        rng: ctc2
        },
      interaction: {
        decode: _interaction,
        dom: [],
        rng: ctc1
        },
      participants: {
        decode: _participants,
        dom: [],
        rng: ctc7
        },
      wagerDown: {
        decode: _wagerDown,
        dom: [],
        rng: ctc2
        }
      },
    views: {
      3: [ctc0, ctc0, ctc1, ctc2, ctc2, ctc2, ctc7]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Alice(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Alice expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Alice expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc3 = stdlib.T_Contract;
  const ctc4 = stdlib.T_Tuple([ctc0, ctc3]);
  const ctc5 = stdlib.T_Bool;
  const ctc6 = stdlib.T_Tuple([ctc5, ctc1]);
  const ctc7 = stdlib.T_Tuple([]);
  const ctc8 = stdlib.T_Data({
    Sprig_addParticipant0_315: ctc4,
    Sprig_announceWinner0_315: ctc6,
    Sprig_incorrectContract0_315: ctc7
    });
  const ctc9 = stdlib.T_Null;
  
  
  const v1056 = stdlib.protect(ctc0, interact.addressSprig, 'for Alice\'s interact field addressSprig');
  const v1057 = stdlib.protect(ctc1, interact.deadline, 'for Alice\'s interact field deadline');
  const v1058 = stdlib.protect(ctc2, interact.interaction, 'for Alice\'s interact field interaction');
  const v1059 = stdlib.protect(ctc1, interact.wagerDown, 'for Alice\'s interact field wagerDown');
  
  const txn1 = await (ctc.sendrecv({
    args: [v1056, v1058, v1059, v1057],
    evt_cnt: 4,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./challenge.rsh:43:5:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0, ctc2, ctc1, ctc1],
    pay: [v1059, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v1063, v1064, v1065, v1066], secs: v1068, time: v1067, didSend: v36, from: v1062 } = txn1;
      
      sim_r.txns.push({
        amt: v1065,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v1072 = ['None', null];
      const v1092 = [v1072, v1072, v1072, v1072, v1072, v1072, v1072, v1072, v1072, v1072];
      const v1115 = false;
      const v1116 = stdlib.checkedBigNumberify('./challenge.rsh:53:29:decimal', stdlib.UInt_max, '0');
      const v1117 = v1092;
      const v1118 = v1067;
      
      if (await (async () => {
        const v1276 = v1115 ? false : true;
        
        return v1276;})()) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc2, ctc1, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [v1063, v1064, v1065, v1066], secs: v1068, time: v1067, didSend: v36, from: v1062 } = txn1;
  ;
  const v1072 = ['None', null];
  const v1092 = [v1072, v1072, v1072, v1072, v1072, v1072, v1072, v1072, v1072, v1072];
  let v1115 = false;
  let v1116 = stdlib.checkedBigNumberify('./challenge.rsh:53:29:decimal', stdlib.UInt_max, '0');
  let v1117 = v1092;
  let v1118 = v1067;
  
  let txn2 = txn1;
  while (await (async () => {
    const v1276 = v1115 ? false : true;
    
    return v1276;})()) {
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 2,
      out_tys: [ctc8],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v1401], secs: v1403, time: v1402, didSend: v826, from: v1400 } = txn3;
    switch (v1401[0]) {
      case 'Sprig_addParticipant0_315': {
        const v1404 = v1401[1];
        undefined /* setApiDetails */;
        const v1411 = stdlib.addressEq(v1400, v1063);
        stdlib.assert(v1411, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./challenge.rsh:73:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./challenge.rsh:72:53:application call to [unknown function] (defined at: ./challenge.rsh:72:53:function exp)', 'at ./challenge.rsh:53:19:application call to [unknown function] (defined at: ./challenge.rsh:72:53:function exp)', 'at ./challenge.rsh:53:19:application call to [unknown function] (defined at: ./challenge.rsh:53:19:function exp)'],
          msg: 'You are not Sprig',
          who: 'Alice'
          });
        const v1413 = stdlib.lt(v1116, stdlib.checkedBigNumberify('./challenge.rsh:3:25:decimal', stdlib.UInt_max, '10'));
        stdlib.assert(v1413, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./challenge.rsh:74:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./challenge.rsh:72:53:application call to [unknown function] (defined at: ./challenge.rsh:72:53:function exp)', 'at ./challenge.rsh:53:19:application call to [unknown function] (defined at: ./challenge.rsh:72:53:function exp)', 'at ./challenge.rsh:53:19:application call to [unknown function] (defined at: ./challenge.rsh:53:19:function exp)'],
          msg: 'Too many participants',
          who: 'Alice'
          });
        ;
        const v1429 = v1404[stdlib.checkedBigNumberify('./challenge.rsh:72:10:spread', stdlib.UInt_max, '0')];
        const v1430 = v1404[stdlib.checkedBigNumberify('./challenge.rsh:72:10:spread', stdlib.UInt_max, '1')];
        const v1437 = [v1429, v1430];
        const v1438 = ['Some', v1437];
        const v1440 = stdlib.Array_set(v1117, v1116, v1438);
        null;
        const v1441 = null;
        await txn3.getOutput('Sprig_addParticipant', 'v1441', ctc9, v1441);
        const v1449 = stdlib.safeAdd(v1116, stdlib.checkedBigNumberify('./challenge.rsh:79:46:decimal', stdlib.UInt_max, '1'));
        const cv1115 = false;
        const cv1116 = v1449;
        const cv1117 = v1440;
        const cv1118 = v1402;
        
        v1115 = cv1115;
        v1116 = cv1116;
        v1117 = cv1117;
        v1118 = cv1118;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'Sprig_announceWinner0_315': {
        const v1501 = v1401[1];
        undefined /* setApiDetails */;
        const v1513 = v1501[stdlib.checkedBigNumberify('./challenge.rsh:83:10:spread', stdlib.UInt_max, '0')];
        const v1514 = v1501[stdlib.checkedBigNumberify('./challenge.rsh:83:10:spread', stdlib.UInt_max, '1')];
        const v1515 = stdlib.addressEq(v1400, v1063);
        stdlib.assert(v1515, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./challenge.rsh:84:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./challenge.rsh:83:58:application call to [unknown function] (defined at: ./challenge.rsh:83:58:function exp)', 'at ./challenge.rsh:53:19:application call to [unknown function] (defined at: ./challenge.rsh:83:58:function exp)', 'at ./challenge.rsh:53:19:application call to [unknown function] (defined at: ./challenge.rsh:53:19:function exp)'],
          msg: 'You are not Sprig',
          who: 'Alice'
          });
        const v1517 = stdlib.lt(v1514, v1116);
        const v1518 = v1513 ? true : v1517;
        stdlib.assert(v1518, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./challenge.rsh:85:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./challenge.rsh:83:58:application call to [unknown function] (defined at: ./challenge.rsh:83:58:function exp)', 'at ./challenge.rsh:53:19:application call to [unknown function] (defined at: ./challenge.rsh:83:58:function exp)', 'at ./challenge.rsh:53:19:application call to [unknown function] (defined at: ./challenge.rsh:53:19:function exp)'],
          msg: 'This participant does not exist.',
          who: 'Alice'
          });
        ;
        const v1559 = await ctc.getContractInfo();
        const v1560 = [v1062, v1559];
        const v1562 = v1117[v1514];
        const v1565 = stdlib.fromSome(v1562, v1560);
        const v1558 = v1513 ? v1560 : v1565;
        const v1566 = v1558[stdlib.checkedBigNumberify('./challenge.rsh:88:43:array ref', stdlib.UInt_max, '0')];
        const v1567 = v1558[stdlib.checkedBigNumberify('./challenge.rsh:88:54:array ref', stdlib.UInt_max, '1')];
        null;
        ;
        const v1573 = null;
        await txn3.getOutput('Sprig_announceWinner', 'v1573', ctc9, v1573);
        const cv1115 = true;
        const cv1116 = v1116;
        const cv1117 = v1117;
        const cv1118 = v1402;
        
        v1115 = cv1115;
        v1116 = cv1116;
        v1117 = cv1117;
        v1118 = cv1118;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'Sprig_incorrectContract0_315': {
        const v1598 = v1401[1];
        undefined /* setApiDetails */;
        const v1618 = stdlib.addressEq(v1400, v1063);
        stdlib.assert(v1618, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./challenge.rsh:62:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./challenge.rsh:61:39:application call to [unknown function] (defined at: ./challenge.rsh:61:39:function exp)', 'at ./challenge.rsh:53:19:application call to [unknown function] (defined at: ./challenge.rsh:61:39:function exp)', 'at ./challenge.rsh:53:19:application call to [unknown function] (defined at: ./challenge.rsh:53:19:function exp)'],
          msg: 'You are not Sprig',
          who: 'Alice'
          });
        const v1620 = stdlib.eq(v1116, stdlib.checkedBigNumberify('./challenge.rsh:63:35:decimal', stdlib.UInt_max, '0'));
        stdlib.assert(v1620, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./challenge.rsh:63:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./challenge.rsh:61:39:application call to [unknown function] (defined at: ./challenge.rsh:61:39:function exp)', 'at ./challenge.rsh:53:19:application call to [unknown function] (defined at: ./challenge.rsh:61:39:function exp)', 'at ./challenge.rsh:53:19:application call to [unknown function] (defined at: ./challenge.rsh:53:19:function exp)'],
          msg: 'Debate has already begun',
          who: 'Alice'
          });
        ;
        null;
        ;
        const v1688 = null;
        await txn3.getOutput('Sprig_incorrectContract', 'v1688', ctc9, v1688);
        const cv1115 = true;
        const cv1116 = stdlib.checkedBigNumberify('./challenge.rsh:68:24:decimal', stdlib.UInt_max, '0');
        const cv1117 = v1117;
        const cv1118 = v1402;
        
        v1115 = cv1115;
        v1116 = cv1116;
        v1117 = cv1117;
        v1118 = cv1118;
        
        txn2 = txn3;
        continue;
        break;
        }
      }
    
    }
  return;
  
  
  };
export async function _Sprig_addParticipant3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Sprig_addParticipant3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Sprig_addParticipant3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Null;
  const ctc4 = stdlib.T_Contract;
  const ctc5 = stdlib.T_Tuple([ctc0, ctc4]);
  const ctc6 = stdlib.T_Data({
    None: ctc3,
    Some: ctc5
    });
  const ctc7 = stdlib.T_Array(ctc6, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '10'));
  const ctc8 = stdlib.T_Bool;
  const ctc9 = stdlib.T_Tuple([ctc8, ctc2]);
  const ctc10 = stdlib.T_Tuple([]);
  const ctc11 = stdlib.T_Data({
    Sprig_addParticipant0_315: ctc5,
    Sprig_announceWinner0_315: ctc9,
    Sprig_incorrectContract0_315: ctc10
    });
  
  
  const [v1062, v1063, v1064, v1065, v1066, v1116, v1117] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc0, ctc0, ctc1, ctc2, ctc2, ctc2, ctc7]);
  const v1339 = ctc.selfAddress();
  const v1341 = stdlib.protect(ctc5, await interact.in(), {
    at: './challenge.rsh:1:23:application',
    fs: ['at ./challenge.rsh:72:53:application call to [unknown function] (defined at: ./challenge.rsh:72:53:function exp)', 'at ./challenge.rsh:53:19:application call to "runSprig_addParticipant0_315" (defined at: ./challenge.rsh:72:10:function exp)', 'at ./challenge.rsh:53:19:application call to [unknown function] (defined at: ./challenge.rsh:53:19:function exp)'],
    msg: 'in',
    who: 'Sprig_addParticipant'
    });
  const v1346 = stdlib.addressEq(v1339, v1063);
  stdlib.assert(v1346, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./challenge.rsh:73:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./challenge.rsh:72:53:application call to [unknown function] (defined at: ./challenge.rsh:72:53:function exp)', 'at ./challenge.rsh:53:19:application call to "runSprig_addParticipant0_315" (defined at: ./challenge.rsh:72:10:function exp)', 'at ./challenge.rsh:53:19:application call to [unknown function] (defined at: ./challenge.rsh:53:19:function exp)'],
    msg: 'You are not Sprig',
    who: 'Sprig_addParticipant'
    });
  const v1348 = stdlib.lt(v1116, stdlib.checkedBigNumberify('./challenge.rsh:3:25:decimal', stdlib.UInt_max, '10'));
  stdlib.assert(v1348, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./challenge.rsh:74:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./challenge.rsh:72:53:application call to [unknown function] (defined at: ./challenge.rsh:72:53:function exp)', 'at ./challenge.rsh:53:19:application call to "runSprig_addParticipant0_315" (defined at: ./challenge.rsh:72:10:function exp)', 'at ./challenge.rsh:53:19:application call to [unknown function] (defined at: ./challenge.rsh:53:19:function exp)'],
    msg: 'Too many participants',
    who: 'Sprig_addParticipant'
    });
  const v1357 = ['Sprig_addParticipant0_315', v1341];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1062, v1063, v1064, v1065, v1066, v1116, v1117, v1357],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc11],
    pay: [stdlib.checkedBigNumberify('./challenge.rsh:75:16:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v1401], secs: v1403, time: v1402, didSend: v826, from: v1400 } = txn1;
      
      switch (v1401[0]) {
        case 'Sprig_addParticipant0_315': {
          const v1404 = v1401[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Sprig_addParticipant"
            });
          ;
          const v1429 = v1404[stdlib.checkedBigNumberify('./challenge.rsh:72:10:spread', stdlib.UInt_max, '0')];
          const v1430 = v1404[stdlib.checkedBigNumberify('./challenge.rsh:72:10:spread', stdlib.UInt_max, '1')];
          const v1437 = [v1429, v1430];
          const v1438 = ['Some', v1437];
          const v1440 = stdlib.Array_set(v1117, v1116, v1438);
          null;
          const v1441 = null;
          const v1442 = await txn1.getOutput('Sprig_addParticipant', 'v1441', ctc3, v1441);
          
          const v1449 = stdlib.safeAdd(v1116, stdlib.checkedBigNumberify('./challenge.rsh:79:46:decimal', stdlib.UInt_max, '1'));
          const v2174 = v1449;
          const v2175 = v1440;
          sim_r.isHalt = false;
          
          break;
          }
        case 'Sprig_announceWinner0_315': {
          const v1501 = v1401[1];
          
          break;
          }
        case 'Sprig_incorrectContract0_315': {
          const v1598 = v1401[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc0, ctc1, ctc2, ctc2, ctc2, ctc7, ctc11],
    waitIfNotPresent: false
    }));
  const {data: [v1401], secs: v1403, time: v1402, didSend: v826, from: v1400 } = txn1;
  switch (v1401[0]) {
    case 'Sprig_addParticipant0_315': {
      const v1404 = v1401[1];
      undefined /* setApiDetails */;
      const v1411 = stdlib.addressEq(v1400, v1063);
      stdlib.assert(v1411, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./challenge.rsh:73:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./challenge.rsh:72:53:application call to [unknown function] (defined at: ./challenge.rsh:72:53:function exp)', 'at ./challenge.rsh:53:19:application call to [unknown function] (defined at: ./challenge.rsh:72:53:function exp)', 'at ./challenge.rsh:53:19:application call to [unknown function] (defined at: ./challenge.rsh:53:19:function exp)'],
        msg: 'You are not Sprig',
        who: 'Sprig_addParticipant'
        });
      const v1413 = stdlib.lt(v1116, stdlib.checkedBigNumberify('./challenge.rsh:3:25:decimal', stdlib.UInt_max, '10'));
      stdlib.assert(v1413, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./challenge.rsh:74:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./challenge.rsh:72:53:application call to [unknown function] (defined at: ./challenge.rsh:72:53:function exp)', 'at ./challenge.rsh:53:19:application call to [unknown function] (defined at: ./challenge.rsh:72:53:function exp)', 'at ./challenge.rsh:53:19:application call to [unknown function] (defined at: ./challenge.rsh:53:19:function exp)'],
        msg: 'Too many participants',
        who: 'Sprig_addParticipant'
        });
      ;
      const v1429 = v1404[stdlib.checkedBigNumberify('./challenge.rsh:72:10:spread', stdlib.UInt_max, '0')];
      const v1430 = v1404[stdlib.checkedBigNumberify('./challenge.rsh:72:10:spread', stdlib.UInt_max, '1')];
      const v1437 = [v1429, v1430];
      const v1438 = ['Some', v1437];
      const v1440 = stdlib.Array_set(v1117, v1116, v1438);
      null;
      const v1441 = null;
      const v1442 = await txn1.getOutput('Sprig_addParticipant', 'v1441', ctc3, v1441);
      if (v826) {
        stdlib.protect(ctc3, await interact.out(v1404, v1442), {
          at: './challenge.rsh:72:11:application',
          fs: ['at ./challenge.rsh:72:11:application call to [unknown function] (defined at: ./challenge.rsh:72:11:function exp)', 'at ./challenge.rsh:78:12:application call to "ret" (defined at: ./challenge.rsh:75:25:function exp)', 'at ./challenge.rsh:75:25:application call to [unknown function] (defined at: ./challenge.rsh:75:25:function exp)'],
          msg: 'out',
          who: 'Sprig_addParticipant'
          });
        }
      else {
        }
      
      const v1449 = stdlib.safeAdd(v1116, stdlib.checkedBigNumberify('./challenge.rsh:79:46:decimal', stdlib.UInt_max, '1'));
      const v2174 = v1449;
      const v2175 = v1440;
      return;
      
      break;
      }
    case 'Sprig_announceWinner0_315': {
      const v1501 = v1401[1];
      return;
      break;
      }
    case 'Sprig_incorrectContract0_315': {
      const v1598 = v1401[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Sprig_announceWinner3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Sprig_announceWinner3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Sprig_announceWinner3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Null;
  const ctc4 = stdlib.T_Contract;
  const ctc5 = stdlib.T_Tuple([ctc0, ctc4]);
  const ctc6 = stdlib.T_Data({
    None: ctc3,
    Some: ctc5
    });
  const ctc7 = stdlib.T_Array(ctc6, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '10'));
  const ctc8 = stdlib.T_Bool;
  const ctc9 = stdlib.T_Tuple([ctc8, ctc2]);
  const ctc10 = stdlib.T_Tuple([]);
  const ctc11 = stdlib.T_Data({
    Sprig_addParticipant0_315: ctc5,
    Sprig_announceWinner0_315: ctc9,
    Sprig_incorrectContract0_315: ctc10
    });
  
  
  const [v1062, v1063, v1064, v1065, v1066, v1116, v1117] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc0, ctc0, ctc1, ctc2, ctc2, ctc2, ctc7]);
  const v1359 = ctc.selfAddress();
  const v1361 = stdlib.protect(ctc9, await interact.in(), {
    at: './challenge.rsh:1:23:application',
    fs: ['at ./challenge.rsh:83:58:application call to [unknown function] (defined at: ./challenge.rsh:83:58:function exp)', 'at ./challenge.rsh:53:19:application call to "runSprig_announceWinner0_315" (defined at: ./challenge.rsh:83:10:function exp)', 'at ./challenge.rsh:53:19:application call to [unknown function] (defined at: ./challenge.rsh:53:19:function exp)'],
    msg: 'in',
    who: 'Sprig_announceWinner'
    });
  const v1362 = v1361[stdlib.checkedBigNumberify('./challenge.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v1363 = v1361[stdlib.checkedBigNumberify('./challenge.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v1366 = stdlib.addressEq(v1359, v1063);
  stdlib.assert(v1366, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./challenge.rsh:84:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./challenge.rsh:83:58:application call to [unknown function] (defined at: ./challenge.rsh:83:58:function exp)', 'at ./challenge.rsh:53:19:application call to "runSprig_announceWinner0_315" (defined at: ./challenge.rsh:83:10:function exp)', 'at ./challenge.rsh:53:19:application call to [unknown function] (defined at: ./challenge.rsh:53:19:function exp)'],
    msg: 'You are not Sprig',
    who: 'Sprig_announceWinner'
    });
  const v1368 = stdlib.lt(v1363, v1116);
  const v1369 = v1362 ? true : v1368;
  stdlib.assert(v1369, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./challenge.rsh:85:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./challenge.rsh:83:58:application call to [unknown function] (defined at: ./challenge.rsh:83:58:function exp)', 'at ./challenge.rsh:53:19:application call to "runSprig_announceWinner0_315" (defined at: ./challenge.rsh:83:10:function exp)', 'at ./challenge.rsh:53:19:application call to [unknown function] (defined at: ./challenge.rsh:53:19:function exp)'],
    msg: 'This participant does not exist.',
    who: 'Sprig_announceWinner'
    });
  const v1378 = ['Sprig_announceWinner0_315', v1361];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1062, v1063, v1064, v1065, v1066, v1116, v1117, v1378],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc11],
    pay: [stdlib.checkedBigNumberify('./challenge.rsh:86:16:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v1401], secs: v1403, time: v1402, didSend: v826, from: v1400 } = txn1;
      
      switch (v1401[0]) {
        case 'Sprig_addParticipant0_315': {
          const v1404 = v1401[1];
          
          break;
          }
        case 'Sprig_announceWinner0_315': {
          const v1501 = v1401[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Sprig_announceWinner"
            });
          const v1513 = v1501[stdlib.checkedBigNumberify('./challenge.rsh:83:10:spread', stdlib.UInt_max, '0')];
          const v1514 = v1501[stdlib.checkedBigNumberify('./challenge.rsh:83:10:spread', stdlib.UInt_max, '1')];
          ;
          const v1559 = await ctc.getContractInfo();
          const v1560 = [v1062, v1559];
          const v1562 = v1117[v1514];
          const v1565 = stdlib.fromSome(v1562, v1560);
          const v1558 = v1513 ? v1560 : v1565;
          const v1566 = v1558[stdlib.checkedBigNumberify('./challenge.rsh:88:43:array ref', stdlib.UInt_max, '0')];
          const v1567 = v1558[stdlib.checkedBigNumberify('./challenge.rsh:88:54:array ref', stdlib.UInt_max, '1')];
          null;
          sim_r.txns.push({
            kind: 'from',
            to: v1566,
            tok: undefined /* Nothing */
            });
          const v1573 = null;
          const v1574 = await txn1.getOutput('Sprig_announceWinner', 'v1573', ctc3, v1573);
          
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          
          break;
          }
        case 'Sprig_incorrectContract0_315': {
          const v1598 = v1401[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc0, ctc1, ctc2, ctc2, ctc2, ctc7, ctc11],
    waitIfNotPresent: false
    }));
  const {data: [v1401], secs: v1403, time: v1402, didSend: v826, from: v1400 } = txn1;
  switch (v1401[0]) {
    case 'Sprig_addParticipant0_315': {
      const v1404 = v1401[1];
      return;
      break;
      }
    case 'Sprig_announceWinner0_315': {
      const v1501 = v1401[1];
      undefined /* setApiDetails */;
      const v1513 = v1501[stdlib.checkedBigNumberify('./challenge.rsh:83:10:spread', stdlib.UInt_max, '0')];
      const v1514 = v1501[stdlib.checkedBigNumberify('./challenge.rsh:83:10:spread', stdlib.UInt_max, '1')];
      const v1515 = stdlib.addressEq(v1400, v1063);
      stdlib.assert(v1515, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./challenge.rsh:84:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./challenge.rsh:83:58:application call to [unknown function] (defined at: ./challenge.rsh:83:58:function exp)', 'at ./challenge.rsh:53:19:application call to [unknown function] (defined at: ./challenge.rsh:83:58:function exp)', 'at ./challenge.rsh:53:19:application call to [unknown function] (defined at: ./challenge.rsh:53:19:function exp)'],
        msg: 'You are not Sprig',
        who: 'Sprig_announceWinner'
        });
      const v1517 = stdlib.lt(v1514, v1116);
      const v1518 = v1513 ? true : v1517;
      stdlib.assert(v1518, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./challenge.rsh:85:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./challenge.rsh:83:58:application call to [unknown function] (defined at: ./challenge.rsh:83:58:function exp)', 'at ./challenge.rsh:53:19:application call to [unknown function] (defined at: ./challenge.rsh:83:58:function exp)', 'at ./challenge.rsh:53:19:application call to [unknown function] (defined at: ./challenge.rsh:53:19:function exp)'],
        msg: 'This participant does not exist.',
        who: 'Sprig_announceWinner'
        });
      ;
      const v1559 = await ctc.getContractInfo();
      const v1560 = [v1062, v1559];
      const v1562 = v1117[v1514];
      const v1565 = stdlib.fromSome(v1562, v1560);
      const v1558 = v1513 ? v1560 : v1565;
      const v1566 = v1558[stdlib.checkedBigNumberify('./challenge.rsh:88:43:array ref', stdlib.UInt_max, '0')];
      const v1567 = v1558[stdlib.checkedBigNumberify('./challenge.rsh:88:54:array ref', stdlib.UInt_max, '1')];
      null;
      ;
      const v1573 = null;
      const v1574 = await txn1.getOutput('Sprig_announceWinner', 'v1573', ctc3, v1573);
      if (v826) {
        stdlib.protect(ctc3, await interact.out(v1501, v1574), {
          at: './challenge.rsh:83:11:application',
          fs: ['at ./challenge.rsh:83:11:application call to [unknown function] (defined at: ./challenge.rsh:83:11:function exp)', 'at ./challenge.rsh:90:12:application call to "ret" (defined at: ./challenge.rsh:86:25:function exp)', 'at ./challenge.rsh:86:25:application call to [unknown function] (defined at: ./challenge.rsh:86:25:function exp)'],
          msg: 'out',
          who: 'Sprig_announceWinner'
          });
        }
      else {
        }
      
      return;
      
      break;
      }
    case 'Sprig_incorrectContract0_315': {
      const v1598 = v1401[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Sprig_incorrectContract3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Sprig_incorrectContract3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Sprig_incorrectContract3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Null;
  const ctc4 = stdlib.T_Contract;
  const ctc5 = stdlib.T_Tuple([ctc0, ctc4]);
  const ctc6 = stdlib.T_Data({
    None: ctc3,
    Some: ctc5
    });
  const ctc7 = stdlib.T_Array(ctc6, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '10'));
  const ctc8 = stdlib.T_Tuple([]);
  const ctc9 = stdlib.T_Bool;
  const ctc10 = stdlib.T_Tuple([ctc9, ctc2]);
  const ctc11 = stdlib.T_Data({
    Sprig_addParticipant0_315: ctc5,
    Sprig_announceWinner0_315: ctc10,
    Sprig_incorrectContract0_315: ctc8
    });
  
  
  const [v1062, v1063, v1064, v1065, v1066, v1116, v1117] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc0, ctc0, ctc1, ctc2, ctc2, ctc2, ctc7]);
  const v1327 = ctc.selfAddress();
  const v1329 = stdlib.protect(ctc8, await interact.in(), {
    at: './challenge.rsh:1:23:application',
    fs: ['at ./challenge.rsh:61:39:application call to [unknown function] (defined at: ./challenge.rsh:61:39:function exp)', 'at ./challenge.rsh:53:19:application call to "runSprig_incorrectContract0_315" (defined at: ./challenge.rsh:61:10:function exp)', 'at ./challenge.rsh:53:19:application call to [unknown function] (defined at: ./challenge.rsh:53:19:function exp)'],
    msg: 'in',
    who: 'Sprig_incorrectContract'
    });
  const v1330 = stdlib.addressEq(v1327, v1063);
  stdlib.assert(v1330, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./challenge.rsh:62:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./challenge.rsh:61:39:application call to [unknown function] (defined at: ./challenge.rsh:61:39:function exp)', 'at ./challenge.rsh:53:19:application call to "runSprig_incorrectContract0_315" (defined at: ./challenge.rsh:61:10:function exp)', 'at ./challenge.rsh:53:19:application call to [unknown function] (defined at: ./challenge.rsh:53:19:function exp)'],
    msg: 'You are not Sprig',
    who: 'Sprig_incorrectContract'
    });
  const v1332 = stdlib.eq(v1116, stdlib.checkedBigNumberify('./challenge.rsh:63:35:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v1332, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./challenge.rsh:63:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./challenge.rsh:61:39:application call to [unknown function] (defined at: ./challenge.rsh:61:39:function exp)', 'at ./challenge.rsh:53:19:application call to "runSprig_incorrectContract0_315" (defined at: ./challenge.rsh:61:10:function exp)', 'at ./challenge.rsh:53:19:application call to [unknown function] (defined at: ./challenge.rsh:53:19:function exp)'],
    msg: 'Debate has already begun',
    who: 'Sprig_incorrectContract'
    });
  const v1337 = ['Sprig_incorrectContract0_315', v1329];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1062, v1063, v1064, v1065, v1066, v1116, v1117, v1337],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc11],
    pay: [stdlib.checkedBigNumberify('./challenge.rsh:64:16:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v1401], secs: v1403, time: v1402, didSend: v826, from: v1400 } = txn1;
      
      switch (v1401[0]) {
        case 'Sprig_addParticipant0_315': {
          const v1404 = v1401[1];
          
          break;
          }
        case 'Sprig_announceWinner0_315': {
          const v1501 = v1401[1];
          
          break;
          }
        case 'Sprig_incorrectContract0_315': {
          const v1598 = v1401[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Sprig_incorrectContract"
            });
          ;
          null;
          sim_r.txns.push({
            kind: 'from',
            to: v1062,
            tok: undefined /* Nothing */
            });
          const v1688 = null;
          const v1689 = await txn1.getOutput('Sprig_incorrectContract', 'v1688', ctc3, v1688);
          
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc0, ctc1, ctc2, ctc2, ctc2, ctc7, ctc11],
    waitIfNotPresent: false
    }));
  const {data: [v1401], secs: v1403, time: v1402, didSend: v826, from: v1400 } = txn1;
  switch (v1401[0]) {
    case 'Sprig_addParticipant0_315': {
      const v1404 = v1401[1];
      return;
      break;
      }
    case 'Sprig_announceWinner0_315': {
      const v1501 = v1401[1];
      return;
      break;
      }
    case 'Sprig_incorrectContract0_315': {
      const v1598 = v1401[1];
      undefined /* setApiDetails */;
      const v1618 = stdlib.addressEq(v1400, v1063);
      stdlib.assert(v1618, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./challenge.rsh:62:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./challenge.rsh:61:39:application call to [unknown function] (defined at: ./challenge.rsh:61:39:function exp)', 'at ./challenge.rsh:53:19:application call to [unknown function] (defined at: ./challenge.rsh:61:39:function exp)', 'at ./challenge.rsh:53:19:application call to [unknown function] (defined at: ./challenge.rsh:53:19:function exp)'],
        msg: 'You are not Sprig',
        who: 'Sprig_incorrectContract'
        });
      const v1620 = stdlib.eq(v1116, stdlib.checkedBigNumberify('./challenge.rsh:63:35:decimal', stdlib.UInt_max, '0'));
      stdlib.assert(v1620, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./challenge.rsh:63:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./challenge.rsh:61:39:application call to [unknown function] (defined at: ./challenge.rsh:61:39:function exp)', 'at ./challenge.rsh:53:19:application call to [unknown function] (defined at: ./challenge.rsh:61:39:function exp)', 'at ./challenge.rsh:53:19:application call to [unknown function] (defined at: ./challenge.rsh:53:19:function exp)'],
        msg: 'Debate has already begun',
        who: 'Sprig_incorrectContract'
        });
      ;
      null;
      ;
      const v1688 = null;
      const v1689 = await txn1.getOutput('Sprig_incorrectContract', 'v1688', ctc3, v1688);
      if (v826) {
        stdlib.protect(ctc3, await interact.out(v1598, v1689), {
          at: './challenge.rsh:61:11:application',
          fs: ['at ./challenge.rsh:61:11:application call to [unknown function] (defined at: ./challenge.rsh:61:11:function exp)', 'at ./challenge.rsh:67:12:application call to "ret" (defined at: ./challenge.rsh:64:25:function exp)', 'at ./challenge.rsh:64:25:application call to [unknown function] (defined at: ./challenge.rsh:64:25:function exp)'],
          msg: 'out',
          who: 'Sprig_incorrectContract'
          });
        }
      else {
        }
      
      return;
      
      break;
      }
    }
  
  
  };
export async function Sprig_addParticipant(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Sprig_addParticipant expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Sprig_addParticipant expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _Sprig_addParticipant3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Sprig_announceWinner(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Sprig_announceWinner expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Sprig_announceWinner expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _Sprig_announceWinner3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Sprig_incorrectContract(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Sprig_incorrectContract expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Sprig_incorrectContract expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _Sprig_incorrectContract3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
const _ALGO = {
  ABI: {
    impure: [`Sprig_addParticipant(address,uint64)byte[0]`, `Sprig_announceWinner(byte,uint64)byte[0]`, `Sprig_incorrectContract()byte[0]`],
    pure: [`addressSprig()address`, `author()address`, `deadline()uint64`, `interaction()byte[32]`, `participants()(byte,byte[40])[10]`, `wagerDown()uint64`],
    sigs: [`Sprig_addParticipant(address,uint64)byte[0]`, `Sprig_announceWinner(byte,uint64)byte[0]`, `Sprig_incorrectContract()byte[0]`, `addressSprig()address`, `author()address`, `deadline()uint64`, `interaction()byte[32]`, `participants()(byte,byte[40])[10]`, `wagerDown()uint64`]
    },
  GlobalNumByteSlice: 6,
  GlobalNumUint: 0,
  LocalNumByteSlice: 0,
  LocalNumUint: 0,
  appApproval: `ByAPAAEDAinR9afRB+ng39YN0sS1gQ6kjoiGDvvS/o8K5/HbtwK2q8rMBu2Aj58CeJoDJgYBAQEAAQIBAwEEACI1ADEYQQRjJwVkSSJbNQGBCFs1AjYaABdJQQFUIjUEIzUGSSEFDEAAoUkhBgxAAF1JIQcMQAA+SSEIDEAAIyEIEkQ0ASQSRClkKGRQKmRQK2RQJwRkUEk1A1cAIDUHQgQBIQcSRDYaATYaAlA1/yk0/1BCAREhBhJENhoBNhoCUDX/KDT/UIEfr1BCAPlJIQkMQAATIQkSRCcFNf8qNP9QgSivUEIA3yEFEkQ0ASQSRClkKGRQKmRQK2RQJwRkUEk1A1cgIDUHQgOYSSEKDEAATUkhCwxAACMhCxJENAEkEkQpZChkUCpkUCtkUCcEZFBJNQNXQCA1B0IDZyEKEkQ0ASQSRClkKGRQKmRQK2RQJwRkUEk1A1doCDUHQgNESSEMDEAAIyEMEkQ0ASQSRClkKGRQKmRQK2RQJwRkUEk1A1dgCDUHQgMagaHAv1ASRDQBJBJEKWQoZFAqZFArZFAnBGRQSTUDIQ0hDlg1B0IC8jYaAhc1BDYaAzYaARdJJQxAAbElEkQkNAESRDQESSISTDQCEhFEKWQoZFAqZFArZFAnBGRQSTUDSUpKSVcAIDX/VyAgNf5XQCA1/YFgWzX8gWhbNfuBcFs1+iENIQ5YNflJNQU1+IAE/FtmxzT4ULA0+CJVSSMMQADnSSUMQABHJRJEMQA0/hJENPoiEkSABIh3xiCwsSKyATT8sggjshA0/7IHs4AIAAAAAAAABpiwJwU1BzT/NP40/TT8NPsjIjT5MgZCAXxINPhXAQk19zT3VwABFzX2NPcjWzX1MQA0/hJENPY09TT6DBFENP8xGBZQSTX0NPkhBDT1CyEEWEk18lcBKDTyIlVNNPQ09k1JNfNXACA18oAEfPl/DjT2FlEHCFA08lA081cgCFCwsSKyATT8sggjshA08rIHs4AIAAAAAAAABiWwJwU1BzT/NP40/TT8NPsjNPo0+TIGQgDiSDT4VwEoNfcxADT+EkQ0+oEKDEQ091cAIDX2NPeBIFs19YAEhhEZbDT2UDT1FlCwgAgAAAAAAAAFobAnBTUHNP80/jT9NPw0+yI0+iMINPk0+iEECyg09jT1FlBQXTIGQgB/IhJEgaCNBogBSiI0ARJENARJIhJMNAISEURJNQVJSlcAIDX/VyAgNf6BQFs1/YFIWzX8gATo9Yf4NP9QNP5QNP0WUDT8FlCwNP2IAQchBK81+zEANP80/jT9NPwiIjT7SVA0+1A0+1A0+1A0+1A0+1A0+1A0+1A0+1AyBkIAADX/Nf41/TX8Nfs1+jX5Nfg19zT8QQADQgBMNPc0+FA0+VA0+hZQNPsWUDT9FlA0/lApSwFXAH9nKEsBV39/ZypLAVf+f2crSwGB/QKBf1hnJwRLAYH8A4EWWGdIJDUBMgY1AkIAHDEZgQUSRLEisgEisggjshAyCbIJMgqyB7NCAAUxGSISRCcFNAEWNAIWUGc0BkEACoAEFR98dTQHULA0AEkjCDIEEkQxFhJEI0MxGSISREL/3yIxNBJEgQYxNRJEIjE2EkQiMTcSRCI1ASI1AkL/rTQASUojCDUAOAcyChJEOBAjEkQ4CBJEiQ==`,
  appClear: `Bw==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 5,
  stateSize: 530,
  unsupported: [],
  version: 11,
  warnings: []
  };
const _ETH = {
  ABI: `[{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"address payable","name":"elem1","type":"address"},{"internalType":"bytes32","name":"elem2","type":"bytes32"},{"internalType":"uint256","name":"elem3","type":"uint256"},{"internalType":"uint256","name":"elem4","type":"uint256"}],"internalType":"struct T8","name":"v2247","type":"tuple"}],"stateMutability":"payable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"msg","type":"uint256"}],"name":"ReachError","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"address payable","name":"elem1","type":"address"},{"internalType":"bytes32","name":"elem2","type":"bytes32"},{"internalType":"uint256","name":"elem3","type":"uint256"},{"internalType":"uint256","name":"elem4","type":"uint256"}],"indexed":false,"internalType":"struct T8","name":"_a","type":"tuple"}],"name":"_reach_e0","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T5","name":"which","type":"uint8"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"},{"internalType":"address payable","name":"elem1","type":"address"}],"internalType":"struct T0","name":"_Sprig_addParticipant0_315","type":"tuple"},{"components":[{"internalType":"bool","name":"elem0","type":"bool"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T3","name":"_Sprig_announceWinner0_315","type":"tuple"},{"internalType":"bool","name":"_Sprig_incorrectContract0_315","type":"bool"}],"internalType":"struct T5","name":"elem1","type":"tuple"}],"indexed":false,"internalType":"struct T6","name":"_a","type":"tuple"}],"name":"_reach_e2","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v1441","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v1573","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v1688","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"},{"indexed":false,"internalType":"address payable","name":"v1","type":"address"},{"indexed":false,"internalType":"address payable","name":"v2","type":"address"}],"name":"announceWinner","type":"event"},{"anonymous":false,"inputs":[],"name":"incorrectContract","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address payable","name":"v0","type":"address"},{"indexed":false,"internalType":"address payable","name":"v1","type":"address"}],"name":"newParticipant","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[{"internalType":"address payable","name":"v2230","type":"address"},{"internalType":"address payable","name":"v2231","type":"address"}],"name":"Sprig_addParticipant","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"bool","name":"v2236","type":"bool"},{"internalType":"uint256","name":"v2237","type":"uint256"}],"name":"Sprig_announceWinner","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"Sprig_incorrectContract","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"_reachCreationTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentState","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T5","name":"which","type":"uint8"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"},{"internalType":"address payable","name":"elem1","type":"address"}],"internalType":"struct T0","name":"_Sprig_addParticipant0_315","type":"tuple"},{"components":[{"internalType":"bool","name":"elem0","type":"bool"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T3","name":"_Sprig_announceWinner0_315","type":"tuple"},{"internalType":"bool","name":"_Sprig_incorrectContract0_315","type":"bool"}],"internalType":"struct T5","name":"elem1","type":"tuple"}],"internalType":"struct T6","name":"v2253","type":"tuple"}],"name":"_reachp_2","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"addressSprig","outputs":[{"internalType":"address payable","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"author","outputs":[{"internalType":"address payable","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"deadline","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"interaction","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"participants","outputs":[{"components":[{"internalType":"enum _enum_T1","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"},{"internalType":"address payable","name":"elem1","type":"address"}],"internalType":"struct T0","name":"_Some","type":"tuple"}],"internalType":"struct T1[10]","name":"","type":"tuple[10]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"wagerDown","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"stateMutability":"payable","type":"receive"}]`,
  Bytecode: `0x6080601f62001dcc38819003918201601f19168301916001600160401b03831184841017620005875780849260a0946040528339810103126200065e576040519060a082016001600160401b038111838210176200058757604052805182526020810151906001600160a01b03821682036200065e57608091602084015260408101516040840152606081015160608401520151608082015243600355604051610140810181811060018060401b038211176200058757600091610120916040528281528260208201528260408201528260608201528260808201528260a08201528260c08201528260e0820152620000f7620006c8565b6101008201520152604051906200010e8262000663565b620001186200067f565b825262000124620006c8565b602083015260ff6004541662000645577f567452ba5b7d6cf37730cadd39239f364eeda223e6d513cb826341db6bc39a2560c06040513381528351602082015260018060a01b0360208501511660408201526040840151606082015260608401516080820152608084015160a0820152a18051801590811562000638575b50156200061f5760608101513403620006065760008251526000602083510152815160208301515281516020808401510152815160406020840151015281516060602084015101528151608060208401510152815160a060208401510152815160c060208401510152815160e060208401510152815161010060208401510152815161012060208401510152604051918261012081011060018060401b03610120850111176200058757602090610120840160405260008452600082850152600060408501526000606085015260006080850152600060a0850152600060c08501526200028e620006c8565b60e085015260806101008501936000855233865260018060a01b03848201511684870152604081015160408701526060810151606087015201516080850152600060a0850152600060c0850152015160e08301524390526040518060e081011060018060401b0360e08301111762000587578060e060c092016040526000815260006020820152600060408201526000606082015260006080820152600060a08201526200033b620006c8565b8282015260e060018060a01b038451169384835260018060a01b0360208201511660208401526040810151604084015260608101516060840152608081015160808401528381015160a084015201518282015260036000554360015560405192602084015260018060a01b0360208201511660408401526040810151606084015260608101516080840152608081015160a084015260a081015182840152015160e082016000905b600a82106200059d576105c08452836105e081016001600160401b03811182821017620005875760405280516001600160401b0381116200058757600254600181811c911680156200057c575b60208210146200056657601f8111620004fc575b50602091601f8211600114620004925791819260009262000486575b50508160011b916000199060031b1c1916176002555b6040516116ba9081620007128239f35b01519050828062000460565b601f19821692600260005260206000209160005b858110620004e357508360019510620004c9575b505050811b0160025562000476565b015160001960f88460031b161c19169055828080620004ba565b91926020600181928685015181550194019201620004a6565b60026000527f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace601f830160051c810191602084106200055b575b601f0160051c01905b8181106200054e575062000444565b600081556001016200053f565b909150819062000536565b634e487b7160e01b600052602260045260246000fd5b90607f169062000430565b634e487b7160e01b600052604160045260246000fd5b82518051906002821015620005f05782604060809260209460019652848101511515858401520151848060a01b03815116604083015283858060a01b0391015116606082015201930191019091620003e3565b634e487b7160e01b600052602160045260246000fd5b60405163100960cb60e01b8152600f6004820152602490fd5b60405163100960cb60e01b8152600e6004820152602490fd5b90506001541438620001a2565b60405163100960cb60e01b8152600d6004820152602490fd5b600080fd5b604081019081106001600160401b038211176200058757604052565b60405190606082016001600160401b0381118382101762000587576040528160008152600060208201526040805191620006b98362000663565b60008352600060208401520152565b604051906101408083016001600160401b0381118482101762000587576040528260005b828110620006f957505050565b602090620007066200067f565b8184015201620006ec56fe6080604081815260048036101561001e575b505050361561001c57005b005b600092833560e01c9081631e93b0f1146106865750806329dcb0cf1461063857806352b3db8f1461051b5780636aef8ef1146104db5780636ba240221461048c5780636c4470fb146103f05780636c697331146103885780638323075714610369578063a6c3e6b9146102fb578063ab53f2c61461028f578063ae8647df146101f4578063aecca2e01461017f5763d7032d0603610011578160031936011261017b576001600160a01b039290358381169190829003610178576024359184831680930361017457610169906100f26108c7565b92839186519061010182610741565b6020988997888401928452825288519161011a83610741565b895161012581610741565b858152858a8201528352818984019461013c61092b565b86525116835152511687825101528282515251868251015261015c610989565b9182525185820152610b80565b015115159051908152f35b5080fd5b80fd5b8280fd5b50829034610174578160031936011261017457600361019c6108c7565b9254036101dd576020608084846101b16107a9565b80516001600160a01b039186916101cf9190810183019083016109c3565b015116928391015251908152f35b602490600784519163100960cb60e01b8352820152fd5b508160031936011261017b5735918215158093036101785781906101696102196108c7565b8092845161022681610741565b602097888201908252602435815286519061024082610741565b875161024b81610741565b848152848b82015282528982019261026161092b565b84525115158251525189825101526001825152518682510152610282610989565b9182525187820152610b80565b50503461017457816003193601126101745781546102ab6107a9565b91805193849283526020828185015284518093850152815b8381106102e457505060608094508284010152601f80199101168101030190f35b8086018201518782016060015286945081016102c3565b5082903461017457816003193601126101745760036103186108c7565b92540361035257602060a0848461032d6107a9565b610345600180861b03918680825183010191016109c3565b5116928391015251908152f35b602490600884519163100960cb60e01b8352820152fd5b5050346101745781600319360112610174576020906001549051908152f35b5082903461017457816003193601126101745760036103a56108c7565b9254036103d957602060e08484816103cc6103be6107a9565b8680825183010191016109c3565b0151928391015251908152f35b602490600a84519163100960cb60e01b8352820152fd5b5082903461017457816003193601126101745761040b610894565b506104146108c7565b90600383540361047557506101009261042b6107a9565b9160c06104426020948580825183010191016109c3565b01519401849052519291835b600a821061045c5761050085f35b8261046a60019286516106bd565b94019101909261044e565b602490600b85519163100960cb60e01b8352820152fd5b5082903461017457816003193601126101745760036104a96108c7565b9254036104c4576020610120848460606103cc6103be6107a9565b602490600c84519163100960cb60e01b8352820152fd5b5050816003193601126101745760606020926101696104f86108c7565b8092610502610989565b8781019060028251525115158682510152610282610989565b50919060e0366003190112610174576105326108c7565b9281519061053f82610741565b8035825260c036602319011261061d5782519060808201906001600160401b038211838310176106255750835260243560038110156106155781528260431936011261061d57825161059081610741565b6001600160a01b036044358181168103610621578252606435908116810361061957602082015260208201528260831936011261061d5782516105d281610741565b608435801515810361061957815260a43560208201528382015260c435801515810361061557918161060f93606060209894015286820152610b80565b51908152f35b8480fd5b8580fd5b8380fd5b8680fd5b634e487b7160e01b865260419052602485fd5b5082903461017457816003193601126101745760036106556108c7565b92540361066f57602060c0848460806103cc6103be6107a9565b602490600984519163100960cb60e01b8352820152fd5b8490346101745781600319360112610174576020906003548152f35b80516001600160a01b03908116835260209182015116910152565b9081519160028310156106f15760406106ed916080948452602081015115156020850152015160408301906106a2565b0190565b634e487b7160e01b600052602160045260246000fd5b90600182811c92168015610737575b602083101461072157565b634e487b7160e01b600052602260045260246000fd5b91607f1691610716565b604081019081106001600160401b0382111761075c57604052565b634e487b7160e01b600052604160045260246000fd5b606081019081106001600160401b0382111761075c57604052565b61014081019081106001600160401b0382111761075c57604052565b6040519060006002546107bb81610707565b80855260019180831690811561083f57506001146107f9575b5050829003601f01601f191682016001600160401b0381118382101761075c57604052565b6002600090815260209350918360008051602061166e8339815191525b83851061082b575050505083010138806107d4565b805488860183015293019284908201610816565b919250506020925060ff191682850152151560051b83010138806107d4565b6040519061086b82610772565b816000815260006020820152604080519161088583610741565b60008352600060208401520152565b604051906108a18261078d565b8160005b61014081106108b2575050565b6020906108bd61085e565b81840152016108a5565b6040519061014082016001600160401b0381118382101761075c57604052816101206000918281528260208201528260408201528260608201528260808201528260a08201528260c08201528260e0820152610921610894565b6101008201520152565b60405190608082016001600160401b0381118382101761075c5760405281606060009182815260405161095d81610741565b838152836020820152602082015260405161097781610741565b83815283602082015260408201520152565b6040519061099682610741565b816000815260206109a561092b565b910152565b51906001600160a01b03821682036109be57565b600080fd5b906105c09182818303126109be57604080519390919060e085016001600160401b0381118682101761075c5783526109fa826109aa565b8552602090610a0a8284016109aa565b8287015283830151848701526060938484015185880152608094858501518689015260a085015160a08901528660df860112156109be57815196610a4d8861078d565b87938601958187116109be5760c001935b868510610a7557505050505050505060c082015290565b8482038881126109be57845190610a8b82610772565b865160028110156109be578252878701519081151582036109be57869189840152603f1901126109be57889187918651610ac481610741565b610acf888a016109aa565b8152610adc878a016109aa565b8482015287820152815201940193610a5e565b5160038110156106f15790565b6040519061012082016001600160401b0381118382101761075c57604052816101006000918281528260208201528260408201528260608201528260808201528260a08201528260c0820152610b50610894565b60e08201520152565b90600a811015610b6a5760051b0190565b634e487b7160e01b600052603260045260246000fd5b6040519160c083016001600160401b0381118482101761075c5780604052610ba781610741565b60008152600060e08501528352604051610bc081610741565b60008152600060208201526020840152610bd861085e565b6040840152604051610be981610741565b60008152600060208201526060840152604051610c0581610741565b60008152600060208201526080840152604051610c2181610741565b600081526000602082015260a084015260ff6004541661163d5760405133815282516020820152602083015180519160038310156106f1576060610100927fe8aa810f1587470aec42d7e63c52ad8192b910f8e44127f952b8a086987e0f81946040840152610c976020820151838501906106a2565b602060408201518051151560a0860152015160c08401520151151560e0820152a160036000540361162457610cdc610ccd6107a9565b602080825183010191016109c3565b9180518015908115611618575b50156115ff57610cfc6020820151610aef565b60038110156106f1576111fe5760209081015181015184528201516001600160a01b031633036111e557600a60a083015110156111cc57346111b357825151602084810180516001600160a01b03938416905285518201518151908416908301526040808701805160019052915191518101919091528551805190830151825191851682529093168383015260009391927fe83724cfd6213e1ca8e053f3ce1163bc5fea531b9b733cc0b8443d16084c4c0d9190a17f43e698aef09a172310cf7c21ac86ac38502400719872b408c249d70da1f1847182604051858152a10152610de4610afc565b9160018060a01b03825116835260018060a01b036020830151166020840152604082015160408401526060820151606084015260808201516080840152600060a084015260a082015160018101811161119d578060018101106109be5760010160c0840152604060a060c0840151930151910151610e60610894565b9260005b600a811061116b57505090610e8491610e7d8285610b59565b5282610b59565b5060e08201524361010082015260a081015115610f1d5750600080556000600155610eb0600254610707565b80610eb85750565b601f8111600114610ecb57506000600255565b6002600052610f1090601f0160051c60008051602061166e833981519152017f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acf611656565b6000602081208160025555565b6040519091906001600160401b0360e082019081119082111761075c578060e060c092016040526000815260006020820152600060408201526000606082015260006080820152600060a0820152610f73610894565b8282015260e060018060a01b038551169485835260018060a01b0360208201511660208401526040810151604084015260608101516060840152608081015160808401528381015160a084015201518282015260036000554360015560405193602085015260018060a01b0360208201511660408501526040810151606085015260608101516080850152608081015160a085015260a081015182850152015160e083016000905b600a82106111515750506105c08352506105e082016001600160401b0381118382101761075c5760405281516001600160401b03811161075c57611060600254610707565b601f8111611109575b50602092601f82116001146110a6579281929360009261109b575b50508160011b916000199060031b1c191617600255565b015190503880611084565b601f19821693600260005260206000209160005b8681106110f157508360019596106110d8575b505050811b01600255565b015160001960f88460031b161c191690553880806110cd565b919260206001819286850151815501940192016110ba565b60026000526111419060008051602061166e833981519152601f840160051c81019160208510611147575b601f0160051c0190611656565b38611069565b9091508190611134565b602061116060019285516106bd565b93019101909161101b565b6111758183610b59565b516111808287610b59565b5261118b8186610b59565b50600019811461119d57600101610e64565b634e487b7160e01b600052601160045260246000fd5b60405163100960cb60e01b815260156004820152602490fd5b60405163100960cb60e01b815260146004820152602490fd5b60405163100960cb60e01b815260136004820152602490fd5b61120f602082959394950151610aef565b60038110156106f157600103611488576020908101516040015160608301528301516001600160a01b0316330361146f576060810151805115611460575060015b15611447573461142e57825160a0820180516001600160a01b03909216909152513060209091015260608101518051156113bc575060008051602061168e833981519152606060a08301515b60808401819052818401515181516020928301516040805193151584526001600160a01b03928316948401949094521691810191909152a160800151516060830180519093916000918291829182916001600160a01b03168282156113b3575bf1156113a7576000604060c0937f6d46253644490a7705f217f4c6e74c4f5a155466a5fd610672be14ced1ab1c4360208351858152a1015261133c610afc565b9260018060a01b03825116845260018060a01b0360208301511660208501526040820151604085015251606084015260808101516080840152600160a084015260a081015182840152015160e082015261010043910152600080556000600155610eb0600254610707565b6040513d6000823e3d90fd5b506108fc6112fc565b6113d090602060c086015191015190610b59565b515160028110156106f1576001036114135760008051602061168e8339815191526060604061140b60c0870151602084870151015190610b59565b51015161129c565b60008051602061168e833981519152606060a083015161129c565b60405163100960cb60e01b815260186004820152602490fd5b60405163100960cb60e01b815260176004820152602490fd5b6020015160a084015111611250565b60405163100960cb60e01b815260166004820152602490fd5b611496915060200151610aef565b60038110156106f1576002146114aa575050565b6020820180519092906001600160a01b0390811633036115e65760a08201516115cd57346115b4577fee67b7f614b91ff061c6dc403b96e7722d7bc7d1c186466659dcabd318d8ad8e6000604051a18082511690600080808060608701958651908282156115ab575bf1156113a7576000606060c0957f3247b2860f61c74f06d8ae8ad59c5547c0a6aec5aa55e84ad9ae2ccac5178afb6020604051858152a10152611554610afc565b94818451168652511660208501526040820151604085015251606084015260808101516080840152600160a0840152600082840152015160e082015261010043910152600080556000600155610eb0600254610707565b506108fc611513565b60405163100960cb60e01b8152601b6004820152602490fd5b60405163100960cb60e01b8152601a6004820152602490fd5b60405163100960cb60e01b815260196004820152602490fd5b60405163100960cb60e01b815260126004820152602490fd5b90506001541438610ce9565b60405163100960cb60e01b815260116004820152602490fd5b60405163100960cb60e01b815260106004820152602490fd5b818110611661575050565b6000815560010161165656fe405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace5cb5dec175be8d27a73236ff5782772d4dc3b1358215e6f9e1f8343abe740d53a164736f6c6343000810000a`,
  BytecodeLen: 7628,
  version: 9,
  views: {
    }
  };
export const _stateSourceMap = {
  2: {
    at: './challenge.rsh:95:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './challenge.rsh:53:19:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Alice": Alice,
  "Sprig_addParticipant": Sprig_addParticipant,
  "Sprig_announceWinner": Sprig_announceWinner,
  "Sprig_incorrectContract": Sprig_incorrectContract
  };
export const _APIs = {
  Sprig: {
    addParticipant: Sprig_addParticipant,
    announceWinner: Sprig_announceWinner,
    incorrectContract: Sprig_incorrectContract
    }
  };
