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
      const [v1069, v1070, v1071, v1072, v1073, v1128, v1129] = svs;
      return (await ((async () => {
        
        
        return v1070;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _author = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v1069, v1070, v1071, v1072, v1073, v1128, v1129] = svs;
      return (await ((async () => {
        
        
        return v1069;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _deadline = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v1069, v1070, v1071, v1072, v1073, v1128, v1129] = svs;
      return (await ((async () => {
        
        
        return v1073;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _interaction = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v1069, v1070, v1071, v1072, v1073, v1128, v1129] = svs;
      return (await ((async () => {
        
        
        return v1071;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _participants = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v1069, v1070, v1071, v1072, v1073, v1128, v1129] = svs;
      return (await ((async () => {
        
        
        return v1129;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _wagerDown = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v1069, v1070, v1071, v1072, v1073, v1128, v1129] = svs;
      return (await ((async () => {
        
        
        return v1072;}))(...args));
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
    Sprig_addParticipant0_321: ctc4,
    Sprig_announceWinner0_321: ctc6,
    Sprig_incorrectContract0_321: ctc7
    });
  const ctc9 = stdlib.T_Null;
  
  
  const v1062 = stdlib.protect(ctc0, interact.addressSprig, 'for Alice\'s interact field addressSprig');
  const v1063 = stdlib.protect(ctc1, interact.deadline, 'for Alice\'s interact field deadline');
  const v1064 = stdlib.protect(ctc2, interact.interaction, 'for Alice\'s interact field interaction');
  const v1065 = stdlib.protect(ctc1, interact.wagerDown, 'for Alice\'s interact field wagerDown');
  
  const v1068 = stdlib.safeAdd(v1065, stdlib.checkedBigNumberify('./challenge.rsh:3:13:decimal', stdlib.UInt_max, '1000'));
  
  const txn1 = await (ctc.sendrecv({
    args: [v1062, v1064, v1065, v1063],
    evt_cnt: 4,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./challenge.rsh:44:5:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0, ctc2, ctc1, ctc1],
    pay: [v1068, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v1070, v1071, v1072, v1073], secs: v1075, time: v1074, didSend: v38, from: v1069 } = txn1;
      
      const v1076 = stdlib.safeAdd(v1072, stdlib.checkedBigNumberify('./challenge.rsh:3:13:decimal', stdlib.UInt_max, '1000'));
      sim_r.txns.push({
        amt: v1076,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      sim_r.txns.push({
        kind: 'from',
        to: v1070,
        tok: undefined /* Nothing */
        });
      const v1084 = ['None', null];
      const v1104 = [v1084, v1084, v1084, v1084, v1084, v1084, v1084, v1084, v1084, v1084];
      const v1127 = false;
      const v1128 = stdlib.checkedBigNumberify('./challenge.rsh:55:29:decimal', stdlib.UInt_max, '0');
      const v1129 = v1104;
      const v1130 = v1074;
      
      if (await (async () => {
        const v1288 = v1127 ? false : true;
        
        return v1288;})()) {
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
  const {data: [v1070, v1071, v1072, v1073], secs: v1075, time: v1074, didSend: v38, from: v1069 } = txn1;
  const v1076 = stdlib.safeAdd(v1072, stdlib.checkedBigNumberify('./challenge.rsh:3:13:decimal', stdlib.UInt_max, '1000'));
  ;
  ;
  const v1084 = ['None', null];
  const v1104 = [v1084, v1084, v1084, v1084, v1084, v1084, v1084, v1084, v1084, v1084];
  let v1127 = false;
  let v1128 = stdlib.checkedBigNumberify('./challenge.rsh:55:29:decimal', stdlib.UInt_max, '0');
  let v1129 = v1104;
  let v1130 = v1074;
  
  let txn2 = txn1;
  while (await (async () => {
    const v1288 = v1127 ? false : true;
    
    return v1288;})()) {
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 2,
      out_tys: [ctc8],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v1413], secs: v1415, time: v1414, didSend: v832, from: v1412 } = txn3;
    switch (v1413[0]) {
      case 'Sprig_addParticipant0_321': {
        const v1416 = v1413[1];
        undefined /* setApiDetails */;
        const v1423 = stdlib.addressEq(v1412, v1070);
        stdlib.assert(v1423, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./challenge.rsh:75:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./challenge.rsh:74:53:application call to [unknown function] (defined at: ./challenge.rsh:74:53:function exp)', 'at ./challenge.rsh:55:19:application call to [unknown function] (defined at: ./challenge.rsh:74:53:function exp)', 'at ./challenge.rsh:55:19:application call to [unknown function] (defined at: ./challenge.rsh:55:19:function exp)'],
          msg: 'You are not Sprig',
          who: 'Alice'
          });
        const v1425 = stdlib.lt(v1128, stdlib.checkedBigNumberify('./challenge.rsh:4:25:decimal', stdlib.UInt_max, '10'));
        stdlib.assert(v1425, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./challenge.rsh:76:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./challenge.rsh:74:53:application call to [unknown function] (defined at: ./challenge.rsh:74:53:function exp)', 'at ./challenge.rsh:55:19:application call to [unknown function] (defined at: ./challenge.rsh:74:53:function exp)', 'at ./challenge.rsh:55:19:application call to [unknown function] (defined at: ./challenge.rsh:55:19:function exp)'],
          msg: 'Too many participants',
          who: 'Alice'
          });
        ;
        const v1441 = v1416[stdlib.checkedBigNumberify('./challenge.rsh:74:10:spread', stdlib.UInt_max, '0')];
        const v1442 = v1416[stdlib.checkedBigNumberify('./challenge.rsh:74:10:spread', stdlib.UInt_max, '1')];
        const v1449 = [v1441, v1442];
        const v1450 = ['Some', v1449];
        const v1452 = stdlib.Array_set(v1129, v1128, v1450);
        null;
        const v1453 = null;
        await txn3.getOutput('Sprig_addParticipant', 'v1453', ctc9, v1453);
        const v1461 = stdlib.safeAdd(v1128, stdlib.checkedBigNumberify('./challenge.rsh:81:46:decimal', stdlib.UInt_max, '1'));
        const cv1127 = false;
        const cv1128 = v1461;
        const cv1129 = v1452;
        const cv1130 = v1414;
        
        v1127 = cv1127;
        v1128 = cv1128;
        v1129 = cv1129;
        v1130 = cv1130;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'Sprig_announceWinner0_321': {
        const v1513 = v1413[1];
        undefined /* setApiDetails */;
        const v1525 = v1513[stdlib.checkedBigNumberify('./challenge.rsh:85:10:spread', stdlib.UInt_max, '0')];
        const v1526 = v1513[stdlib.checkedBigNumberify('./challenge.rsh:85:10:spread', stdlib.UInt_max, '1')];
        const v1527 = stdlib.addressEq(v1412, v1070);
        stdlib.assert(v1527, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./challenge.rsh:86:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./challenge.rsh:85:58:application call to [unknown function] (defined at: ./challenge.rsh:85:58:function exp)', 'at ./challenge.rsh:55:19:application call to [unknown function] (defined at: ./challenge.rsh:85:58:function exp)', 'at ./challenge.rsh:55:19:application call to [unknown function] (defined at: ./challenge.rsh:55:19:function exp)'],
          msg: 'You are not Sprig',
          who: 'Alice'
          });
        const v1529 = stdlib.lt(v1526, v1128);
        const v1530 = v1525 ? true : v1529;
        stdlib.assert(v1530, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./challenge.rsh:87:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./challenge.rsh:85:58:application call to [unknown function] (defined at: ./challenge.rsh:85:58:function exp)', 'at ./challenge.rsh:55:19:application call to [unknown function] (defined at: ./challenge.rsh:85:58:function exp)', 'at ./challenge.rsh:55:19:application call to [unknown function] (defined at: ./challenge.rsh:55:19:function exp)'],
          msg: 'This participant does not exist.',
          who: 'Alice'
          });
        ;
        const v1571 = await ctc.getContractInfo();
        const v1572 = [v1069, v1571];
        const v1574 = v1129[v1526];
        const v1577 = stdlib.fromSome(v1574, v1572);
        const v1570 = v1525 ? v1572 : v1577;
        const v1578 = v1570[stdlib.checkedBigNumberify('./challenge.rsh:90:43:array ref', stdlib.UInt_max, '0')];
        const v1579 = v1570[stdlib.checkedBigNumberify('./challenge.rsh:90:54:array ref', stdlib.UInt_max, '1')];
        null;
        ;
        const v1585 = null;
        await txn3.getOutput('Sprig_announceWinner', 'v1585', ctc9, v1585);
        const cv1127 = true;
        const cv1128 = v1128;
        const cv1129 = v1129;
        const cv1130 = v1414;
        
        v1127 = cv1127;
        v1128 = cv1128;
        v1129 = cv1129;
        v1130 = cv1130;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'Sprig_incorrectContract0_321': {
        const v1610 = v1413[1];
        undefined /* setApiDetails */;
        const v1630 = stdlib.addressEq(v1412, v1070);
        stdlib.assert(v1630, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./challenge.rsh:64:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./challenge.rsh:63:39:application call to [unknown function] (defined at: ./challenge.rsh:63:39:function exp)', 'at ./challenge.rsh:55:19:application call to [unknown function] (defined at: ./challenge.rsh:63:39:function exp)', 'at ./challenge.rsh:55:19:application call to [unknown function] (defined at: ./challenge.rsh:55:19:function exp)'],
          msg: 'You are not Sprig',
          who: 'Alice'
          });
        const v1632 = stdlib.eq(v1128, stdlib.checkedBigNumberify('./challenge.rsh:65:35:decimal', stdlib.UInt_max, '0'));
        stdlib.assert(v1632, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./challenge.rsh:65:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./challenge.rsh:63:39:application call to [unknown function] (defined at: ./challenge.rsh:63:39:function exp)', 'at ./challenge.rsh:55:19:application call to [unknown function] (defined at: ./challenge.rsh:63:39:function exp)', 'at ./challenge.rsh:55:19:application call to [unknown function] (defined at: ./challenge.rsh:55:19:function exp)'],
          msg: 'Debate has already begun',
          who: 'Alice'
          });
        ;
        null;
        ;
        const v1700 = null;
        await txn3.getOutput('Sprig_incorrectContract', 'v1700', ctc9, v1700);
        const cv1127 = true;
        const cv1128 = stdlib.checkedBigNumberify('./challenge.rsh:70:24:decimal', stdlib.UInt_max, '0');
        const cv1129 = v1129;
        const cv1130 = v1414;
        
        v1127 = cv1127;
        v1128 = cv1128;
        v1129 = cv1129;
        v1130 = cv1130;
        
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
    Sprig_addParticipant0_321: ctc5,
    Sprig_announceWinner0_321: ctc9,
    Sprig_incorrectContract0_321: ctc10
    });
  
  
  const [v1069, v1070, v1071, v1072, v1073, v1128, v1129] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc0, ctc0, ctc1, ctc2, ctc2, ctc2, ctc7]);
  const v1351 = ctc.selfAddress();
  const v1353 = stdlib.protect(ctc5, await interact.in(), {
    at: './challenge.rsh:1:23:application',
    fs: ['at ./challenge.rsh:74:53:application call to [unknown function] (defined at: ./challenge.rsh:74:53:function exp)', 'at ./challenge.rsh:55:19:application call to "runSprig_addParticipant0_321" (defined at: ./challenge.rsh:74:10:function exp)', 'at ./challenge.rsh:55:19:application call to [unknown function] (defined at: ./challenge.rsh:55:19:function exp)'],
    msg: 'in',
    who: 'Sprig_addParticipant'
    });
  const v1358 = stdlib.addressEq(v1351, v1070);
  stdlib.assert(v1358, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./challenge.rsh:75:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./challenge.rsh:74:53:application call to [unknown function] (defined at: ./challenge.rsh:74:53:function exp)', 'at ./challenge.rsh:55:19:application call to "runSprig_addParticipant0_321" (defined at: ./challenge.rsh:74:10:function exp)', 'at ./challenge.rsh:55:19:application call to [unknown function] (defined at: ./challenge.rsh:55:19:function exp)'],
    msg: 'You are not Sprig',
    who: 'Sprig_addParticipant'
    });
  const v1360 = stdlib.lt(v1128, stdlib.checkedBigNumberify('./challenge.rsh:4:25:decimal', stdlib.UInt_max, '10'));
  stdlib.assert(v1360, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./challenge.rsh:76:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./challenge.rsh:74:53:application call to [unknown function] (defined at: ./challenge.rsh:74:53:function exp)', 'at ./challenge.rsh:55:19:application call to "runSprig_addParticipant0_321" (defined at: ./challenge.rsh:74:10:function exp)', 'at ./challenge.rsh:55:19:application call to [unknown function] (defined at: ./challenge.rsh:55:19:function exp)'],
    msg: 'Too many participants',
    who: 'Sprig_addParticipant'
    });
  const v1369 = ['Sprig_addParticipant0_321', v1353];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1069, v1070, v1071, v1072, v1073, v1128, v1129, v1369],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc11],
    pay: [stdlib.checkedBigNumberify('./challenge.rsh:77:16:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v1413], secs: v1415, time: v1414, didSend: v832, from: v1412 } = txn1;
      
      switch (v1413[0]) {
        case 'Sprig_addParticipant0_321': {
          const v1416 = v1413[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Sprig_addParticipant"
            });
          ;
          const v1441 = v1416[stdlib.checkedBigNumberify('./challenge.rsh:74:10:spread', stdlib.UInt_max, '0')];
          const v1442 = v1416[stdlib.checkedBigNumberify('./challenge.rsh:74:10:spread', stdlib.UInt_max, '1')];
          const v1449 = [v1441, v1442];
          const v1450 = ['Some', v1449];
          const v1452 = stdlib.Array_set(v1129, v1128, v1450);
          null;
          const v1453 = null;
          const v1454 = await txn1.getOutput('Sprig_addParticipant', 'v1453', ctc3, v1453);
          
          const v1461 = stdlib.safeAdd(v1128, stdlib.checkedBigNumberify('./challenge.rsh:81:46:decimal', stdlib.UInt_max, '1'));
          const v2186 = v1461;
          const v2187 = v1452;
          sim_r.isHalt = false;
          
          break;
          }
        case 'Sprig_announceWinner0_321': {
          const v1513 = v1413[1];
          
          break;
          }
        case 'Sprig_incorrectContract0_321': {
          const v1610 = v1413[1];
          
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
  const {data: [v1413], secs: v1415, time: v1414, didSend: v832, from: v1412 } = txn1;
  switch (v1413[0]) {
    case 'Sprig_addParticipant0_321': {
      const v1416 = v1413[1];
      undefined /* setApiDetails */;
      const v1423 = stdlib.addressEq(v1412, v1070);
      stdlib.assert(v1423, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./challenge.rsh:75:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./challenge.rsh:74:53:application call to [unknown function] (defined at: ./challenge.rsh:74:53:function exp)', 'at ./challenge.rsh:55:19:application call to [unknown function] (defined at: ./challenge.rsh:74:53:function exp)', 'at ./challenge.rsh:55:19:application call to [unknown function] (defined at: ./challenge.rsh:55:19:function exp)'],
        msg: 'You are not Sprig',
        who: 'Sprig_addParticipant'
        });
      const v1425 = stdlib.lt(v1128, stdlib.checkedBigNumberify('./challenge.rsh:4:25:decimal', stdlib.UInt_max, '10'));
      stdlib.assert(v1425, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./challenge.rsh:76:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./challenge.rsh:74:53:application call to [unknown function] (defined at: ./challenge.rsh:74:53:function exp)', 'at ./challenge.rsh:55:19:application call to [unknown function] (defined at: ./challenge.rsh:74:53:function exp)', 'at ./challenge.rsh:55:19:application call to [unknown function] (defined at: ./challenge.rsh:55:19:function exp)'],
        msg: 'Too many participants',
        who: 'Sprig_addParticipant'
        });
      ;
      const v1441 = v1416[stdlib.checkedBigNumberify('./challenge.rsh:74:10:spread', stdlib.UInt_max, '0')];
      const v1442 = v1416[stdlib.checkedBigNumberify('./challenge.rsh:74:10:spread', stdlib.UInt_max, '1')];
      const v1449 = [v1441, v1442];
      const v1450 = ['Some', v1449];
      const v1452 = stdlib.Array_set(v1129, v1128, v1450);
      null;
      const v1453 = null;
      const v1454 = await txn1.getOutput('Sprig_addParticipant', 'v1453', ctc3, v1453);
      if (v832) {
        stdlib.protect(ctc3, await interact.out(v1416, v1454), {
          at: './challenge.rsh:74:11:application',
          fs: ['at ./challenge.rsh:74:11:application call to [unknown function] (defined at: ./challenge.rsh:74:11:function exp)', 'at ./challenge.rsh:80:12:application call to "ret" (defined at: ./challenge.rsh:77:25:function exp)', 'at ./challenge.rsh:77:25:application call to [unknown function] (defined at: ./challenge.rsh:77:25:function exp)'],
          msg: 'out',
          who: 'Sprig_addParticipant'
          });
        }
      else {
        }
      
      const v1461 = stdlib.safeAdd(v1128, stdlib.checkedBigNumberify('./challenge.rsh:81:46:decimal', stdlib.UInt_max, '1'));
      const v2186 = v1461;
      const v2187 = v1452;
      return;
      
      break;
      }
    case 'Sprig_announceWinner0_321': {
      const v1513 = v1413[1];
      return;
      break;
      }
    case 'Sprig_incorrectContract0_321': {
      const v1610 = v1413[1];
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
    Sprig_addParticipant0_321: ctc5,
    Sprig_announceWinner0_321: ctc9,
    Sprig_incorrectContract0_321: ctc10
    });
  
  
  const [v1069, v1070, v1071, v1072, v1073, v1128, v1129] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc0, ctc0, ctc1, ctc2, ctc2, ctc2, ctc7]);
  const v1371 = ctc.selfAddress();
  const v1373 = stdlib.protect(ctc9, await interact.in(), {
    at: './challenge.rsh:1:23:application',
    fs: ['at ./challenge.rsh:85:58:application call to [unknown function] (defined at: ./challenge.rsh:85:58:function exp)', 'at ./challenge.rsh:55:19:application call to "runSprig_announceWinner0_321" (defined at: ./challenge.rsh:85:10:function exp)', 'at ./challenge.rsh:55:19:application call to [unknown function] (defined at: ./challenge.rsh:55:19:function exp)'],
    msg: 'in',
    who: 'Sprig_announceWinner'
    });
  const v1374 = v1373[stdlib.checkedBigNumberify('./challenge.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v1375 = v1373[stdlib.checkedBigNumberify('./challenge.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v1378 = stdlib.addressEq(v1371, v1070);
  stdlib.assert(v1378, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./challenge.rsh:86:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./challenge.rsh:85:58:application call to [unknown function] (defined at: ./challenge.rsh:85:58:function exp)', 'at ./challenge.rsh:55:19:application call to "runSprig_announceWinner0_321" (defined at: ./challenge.rsh:85:10:function exp)', 'at ./challenge.rsh:55:19:application call to [unknown function] (defined at: ./challenge.rsh:55:19:function exp)'],
    msg: 'You are not Sprig',
    who: 'Sprig_announceWinner'
    });
  const v1380 = stdlib.lt(v1375, v1128);
  const v1381 = v1374 ? true : v1380;
  stdlib.assert(v1381, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./challenge.rsh:87:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./challenge.rsh:85:58:application call to [unknown function] (defined at: ./challenge.rsh:85:58:function exp)', 'at ./challenge.rsh:55:19:application call to "runSprig_announceWinner0_321" (defined at: ./challenge.rsh:85:10:function exp)', 'at ./challenge.rsh:55:19:application call to [unknown function] (defined at: ./challenge.rsh:55:19:function exp)'],
    msg: 'This participant does not exist.',
    who: 'Sprig_announceWinner'
    });
  const v1390 = ['Sprig_announceWinner0_321', v1373];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1069, v1070, v1071, v1072, v1073, v1128, v1129, v1390],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc11],
    pay: [stdlib.checkedBigNumberify('./challenge.rsh:88:16:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v1413], secs: v1415, time: v1414, didSend: v832, from: v1412 } = txn1;
      
      switch (v1413[0]) {
        case 'Sprig_addParticipant0_321': {
          const v1416 = v1413[1];
          
          break;
          }
        case 'Sprig_announceWinner0_321': {
          const v1513 = v1413[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Sprig_announceWinner"
            });
          const v1525 = v1513[stdlib.checkedBigNumberify('./challenge.rsh:85:10:spread', stdlib.UInt_max, '0')];
          const v1526 = v1513[stdlib.checkedBigNumberify('./challenge.rsh:85:10:spread', stdlib.UInt_max, '1')];
          ;
          const v1571 = await ctc.getContractInfo();
          const v1572 = [v1069, v1571];
          const v1574 = v1129[v1526];
          const v1577 = stdlib.fromSome(v1574, v1572);
          const v1570 = v1525 ? v1572 : v1577;
          const v1578 = v1570[stdlib.checkedBigNumberify('./challenge.rsh:90:43:array ref', stdlib.UInt_max, '0')];
          const v1579 = v1570[stdlib.checkedBigNumberify('./challenge.rsh:90:54:array ref', stdlib.UInt_max, '1')];
          null;
          sim_r.txns.push({
            kind: 'from',
            to: v1578,
            tok: undefined /* Nothing */
            });
          const v1585 = null;
          const v1586 = await txn1.getOutput('Sprig_announceWinner', 'v1585', ctc3, v1585);
          
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          
          break;
          }
        case 'Sprig_incorrectContract0_321': {
          const v1610 = v1413[1];
          
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
  const {data: [v1413], secs: v1415, time: v1414, didSend: v832, from: v1412 } = txn1;
  switch (v1413[0]) {
    case 'Sprig_addParticipant0_321': {
      const v1416 = v1413[1];
      return;
      break;
      }
    case 'Sprig_announceWinner0_321': {
      const v1513 = v1413[1];
      undefined /* setApiDetails */;
      const v1525 = v1513[stdlib.checkedBigNumberify('./challenge.rsh:85:10:spread', stdlib.UInt_max, '0')];
      const v1526 = v1513[stdlib.checkedBigNumberify('./challenge.rsh:85:10:spread', stdlib.UInt_max, '1')];
      const v1527 = stdlib.addressEq(v1412, v1070);
      stdlib.assert(v1527, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./challenge.rsh:86:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./challenge.rsh:85:58:application call to [unknown function] (defined at: ./challenge.rsh:85:58:function exp)', 'at ./challenge.rsh:55:19:application call to [unknown function] (defined at: ./challenge.rsh:85:58:function exp)', 'at ./challenge.rsh:55:19:application call to [unknown function] (defined at: ./challenge.rsh:55:19:function exp)'],
        msg: 'You are not Sprig',
        who: 'Sprig_announceWinner'
        });
      const v1529 = stdlib.lt(v1526, v1128);
      const v1530 = v1525 ? true : v1529;
      stdlib.assert(v1530, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./challenge.rsh:87:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./challenge.rsh:85:58:application call to [unknown function] (defined at: ./challenge.rsh:85:58:function exp)', 'at ./challenge.rsh:55:19:application call to [unknown function] (defined at: ./challenge.rsh:85:58:function exp)', 'at ./challenge.rsh:55:19:application call to [unknown function] (defined at: ./challenge.rsh:55:19:function exp)'],
        msg: 'This participant does not exist.',
        who: 'Sprig_announceWinner'
        });
      ;
      const v1571 = await ctc.getContractInfo();
      const v1572 = [v1069, v1571];
      const v1574 = v1129[v1526];
      const v1577 = stdlib.fromSome(v1574, v1572);
      const v1570 = v1525 ? v1572 : v1577;
      const v1578 = v1570[stdlib.checkedBigNumberify('./challenge.rsh:90:43:array ref', stdlib.UInt_max, '0')];
      const v1579 = v1570[stdlib.checkedBigNumberify('./challenge.rsh:90:54:array ref', stdlib.UInt_max, '1')];
      null;
      ;
      const v1585 = null;
      const v1586 = await txn1.getOutput('Sprig_announceWinner', 'v1585', ctc3, v1585);
      if (v832) {
        stdlib.protect(ctc3, await interact.out(v1513, v1586), {
          at: './challenge.rsh:85:11:application',
          fs: ['at ./challenge.rsh:85:11:application call to [unknown function] (defined at: ./challenge.rsh:85:11:function exp)', 'at ./challenge.rsh:92:12:application call to "ret" (defined at: ./challenge.rsh:88:25:function exp)', 'at ./challenge.rsh:88:25:application call to [unknown function] (defined at: ./challenge.rsh:88:25:function exp)'],
          msg: 'out',
          who: 'Sprig_announceWinner'
          });
        }
      else {
        }
      
      return;
      
      break;
      }
    case 'Sprig_incorrectContract0_321': {
      const v1610 = v1413[1];
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
    Sprig_addParticipant0_321: ctc5,
    Sprig_announceWinner0_321: ctc10,
    Sprig_incorrectContract0_321: ctc8
    });
  
  
  const [v1069, v1070, v1071, v1072, v1073, v1128, v1129] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc0, ctc0, ctc1, ctc2, ctc2, ctc2, ctc7]);
  const v1339 = ctc.selfAddress();
  const v1341 = stdlib.protect(ctc8, await interact.in(), {
    at: './challenge.rsh:1:23:application',
    fs: ['at ./challenge.rsh:63:39:application call to [unknown function] (defined at: ./challenge.rsh:63:39:function exp)', 'at ./challenge.rsh:55:19:application call to "runSprig_incorrectContract0_321" (defined at: ./challenge.rsh:63:10:function exp)', 'at ./challenge.rsh:55:19:application call to [unknown function] (defined at: ./challenge.rsh:55:19:function exp)'],
    msg: 'in',
    who: 'Sprig_incorrectContract'
    });
  const v1342 = stdlib.addressEq(v1339, v1070);
  stdlib.assert(v1342, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./challenge.rsh:64:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./challenge.rsh:63:39:application call to [unknown function] (defined at: ./challenge.rsh:63:39:function exp)', 'at ./challenge.rsh:55:19:application call to "runSprig_incorrectContract0_321" (defined at: ./challenge.rsh:63:10:function exp)', 'at ./challenge.rsh:55:19:application call to [unknown function] (defined at: ./challenge.rsh:55:19:function exp)'],
    msg: 'You are not Sprig',
    who: 'Sprig_incorrectContract'
    });
  const v1344 = stdlib.eq(v1128, stdlib.checkedBigNumberify('./challenge.rsh:65:35:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v1344, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./challenge.rsh:65:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./challenge.rsh:63:39:application call to [unknown function] (defined at: ./challenge.rsh:63:39:function exp)', 'at ./challenge.rsh:55:19:application call to "runSprig_incorrectContract0_321" (defined at: ./challenge.rsh:63:10:function exp)', 'at ./challenge.rsh:55:19:application call to [unknown function] (defined at: ./challenge.rsh:55:19:function exp)'],
    msg: 'Debate has already begun',
    who: 'Sprig_incorrectContract'
    });
  const v1349 = ['Sprig_incorrectContract0_321', v1341];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1069, v1070, v1071, v1072, v1073, v1128, v1129, v1349],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc11],
    pay: [stdlib.checkedBigNumberify('./challenge.rsh:66:16:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v1413], secs: v1415, time: v1414, didSend: v832, from: v1412 } = txn1;
      
      switch (v1413[0]) {
        case 'Sprig_addParticipant0_321': {
          const v1416 = v1413[1];
          
          break;
          }
        case 'Sprig_announceWinner0_321': {
          const v1513 = v1413[1];
          
          break;
          }
        case 'Sprig_incorrectContract0_321': {
          const v1610 = v1413[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Sprig_incorrectContract"
            });
          ;
          null;
          sim_r.txns.push({
            kind: 'from',
            to: v1069,
            tok: undefined /* Nothing */
            });
          const v1700 = null;
          const v1701 = await txn1.getOutput('Sprig_incorrectContract', 'v1700', ctc3, v1700);
          
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
  const {data: [v1413], secs: v1415, time: v1414, didSend: v832, from: v1412 } = txn1;
  switch (v1413[0]) {
    case 'Sprig_addParticipant0_321': {
      const v1416 = v1413[1];
      return;
      break;
      }
    case 'Sprig_announceWinner0_321': {
      const v1513 = v1413[1];
      return;
      break;
      }
    case 'Sprig_incorrectContract0_321': {
      const v1610 = v1413[1];
      undefined /* setApiDetails */;
      const v1630 = stdlib.addressEq(v1412, v1070);
      stdlib.assert(v1630, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./challenge.rsh:64:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./challenge.rsh:63:39:application call to [unknown function] (defined at: ./challenge.rsh:63:39:function exp)', 'at ./challenge.rsh:55:19:application call to [unknown function] (defined at: ./challenge.rsh:63:39:function exp)', 'at ./challenge.rsh:55:19:application call to [unknown function] (defined at: ./challenge.rsh:55:19:function exp)'],
        msg: 'You are not Sprig',
        who: 'Sprig_incorrectContract'
        });
      const v1632 = stdlib.eq(v1128, stdlib.checkedBigNumberify('./challenge.rsh:65:35:decimal', stdlib.UInt_max, '0'));
      stdlib.assert(v1632, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./challenge.rsh:65:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./challenge.rsh:63:39:application call to [unknown function] (defined at: ./challenge.rsh:63:39:function exp)', 'at ./challenge.rsh:55:19:application call to [unknown function] (defined at: ./challenge.rsh:63:39:function exp)', 'at ./challenge.rsh:55:19:application call to [unknown function] (defined at: ./challenge.rsh:55:19:function exp)'],
        msg: 'Debate has already begun',
        who: 'Sprig_incorrectContract'
        });
      ;
      null;
      ;
      const v1700 = null;
      const v1701 = await txn1.getOutput('Sprig_incorrectContract', 'v1700', ctc3, v1700);
      if (v832) {
        stdlib.protect(ctc3, await interact.out(v1610, v1701), {
          at: './challenge.rsh:63:11:application',
          fs: ['at ./challenge.rsh:63:11:application call to [unknown function] (defined at: ./challenge.rsh:63:11:function exp)', 'at ./challenge.rsh:69:12:application call to "ret" (defined at: ./challenge.rsh:66:25:function exp)', 'at ./challenge.rsh:66:25:application call to [unknown function] (defined at: ./challenge.rsh:66:25:function exp)'],
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
  appApproval: `ByAQAAEDAinR9afRB+ng39YN0sS1gQ6kjoiGDvvS/o8K5/HbtwK2q8rMBu2Aj58CeJoD6AcmBgEBAQABAgEDAQQAIjUAMRhBBHYnBWRJIls1AYEIWzUCNhoAF0lBAVQiNQQjNQZJIQUMQAChSSEGDEAAXUkhBwxAAD5JIQgMQAAjIQgSRDQBJBJEKWQoZFAqZFArZFAnBGRQSTUDVwAgNQdCBBQhBxJENhoBNhoCUDX/KTT/UEIBESEGEkQ2GgE2GgJQNf8oNP9QgR+vUEIA+UkhCQxAABMhCRJEJwU1/yo0/1CBKK9QQgDfIQUSRDQBJBJEKWQoZFAqZFArZFAnBGRQSTUDVyAgNQdCA6tJIQoMQABNSSELDEAAIyELEkQ0ASQSRClkKGRQKmRQK2RQJwRkUEk1A1dAIDUHQgN6IQoSRDQBJBJEKWQoZFAqZFArZFAnBGRQSTUDV2gINQdCA1dJIQwMQAAjIQwSRDQBJBJEKWQoZFAqZFArZFAnBGRQSTUDV2AINQdCAy2BocC/UBJENAEkEkQpZChkUCpkUCtkUCcEZFBJNQMhDSEOWDUHQgMFNhoCFzUENhoDNhoBF0klDEABsSUSRCQ0ARJENARJIhJMNAISEUQpZChkUCpkUCtkUCcEZFBJNQNJSkpJVwAgNf9XICA1/ldAIDX9gWBbNfyBaFs1+4FwWzX6IQ0hDlg1+Uk1BTX4gAT8W2bHNPhQsDT4IlVJIwxAAOdJJQxAAEclEkQxADT+EkQ0+iISRIAEiHfGILCxIrIBNPyyCCOyEDT/sgezgAgAAAAAAAAGpLAnBTUHNP80/jT9NPw0+yMiNPkyBkIBj0g0+FcBCTX3NPdXAAEXNfY09yNbNfUxADT+EkQ09jT1NPoMEUQ0/zEYFlBJNfQ0+SEENPULIQRYSTXyVwEoNPIiVU009DT2TUk181cAIDXygAR8+X8ONPYWUQcIUDTyUDTzVyAIULCxIrIBNPyyCCOyEDTysgezgAgAAAAAAAAGMbAnBTUHNP80/jT9NPw0+yM0+jT5MgZCAPVINPhXASg19zEANP4SRDT6gQoMRDT3VwAgNfY094EgWzX1gASGERlsNPZQNPUWULCACAAAAAAAAAWtsCcFNQc0/zT+NP00/DT7IjT6Iwg0+TT6IQQLKDT2NPUWUFBdMgZCAJIiEkSBoI0GiAFdIjQBEkQ0BEkiEkw0AhIRREk1BUlKVwAgNf9XICA1/oFAWzX9gUhbNfyABOj1h/g0/1A0/lA0/RZQNPwWULA0/SEPCIgBF7EisgEhD7III7IQNP+yB7MhBK81+zEANP80/jT9NPwiIjT7SVA0+1A0+1A0+1A0+1A0+1A0+1A0+1A0+1AyBkIAADX/Nf41/TX8Nfs1+jX5Nfg19zT8QQADQgBMNPc0+FA0+VA0+hZQNPsWUDT9FlA0/lApSwFXAH9nKEsBV39/ZypLAVf+f2crSwGB/QKBf1hnJwRLAYH8A4EWWGdIJDUBMgY1AkIAHDEZgQUSRLEisgEisggjshAyCbIJMgqyB7NCAAUxGSISRCcFNAEWNAIWUGc0BkEACoAEFR98dTQHULA0AEkjCDIEEkQxFhJEI0MxGSISREL/3yIxNBJEgQYxNRJEIjE2EkQiMTcSRCI1ASI1AkL/rTQASUojCDUAOAcyChJEOBAjEkQ4CBJEiQ==`,
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
  ABI: `[{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"address payable","name":"elem1","type":"address"},{"internalType":"bytes32","name":"elem2","type":"bytes32"},{"internalType":"uint256","name":"elem3","type":"uint256"},{"internalType":"uint256","name":"elem4","type":"uint256"}],"internalType":"struct T8","name":"v2259","type":"tuple"}],"stateMutability":"payable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"msg","type":"uint256"}],"name":"ReachError","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"address payable","name":"elem1","type":"address"},{"internalType":"bytes32","name":"elem2","type":"bytes32"},{"internalType":"uint256","name":"elem3","type":"uint256"},{"internalType":"uint256","name":"elem4","type":"uint256"}],"indexed":false,"internalType":"struct T8","name":"_a","type":"tuple"}],"name":"_reach_e0","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T5","name":"which","type":"uint8"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"},{"internalType":"address payable","name":"elem1","type":"address"}],"internalType":"struct T0","name":"_Sprig_addParticipant0_321","type":"tuple"},{"components":[{"internalType":"bool","name":"elem0","type":"bool"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T3","name":"_Sprig_announceWinner0_321","type":"tuple"},{"internalType":"bool","name":"_Sprig_incorrectContract0_321","type":"bool"}],"internalType":"struct T5","name":"elem1","type":"tuple"}],"indexed":false,"internalType":"struct T6","name":"_a","type":"tuple"}],"name":"_reach_e2","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v1453","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v1585","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v1700","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"},{"indexed":false,"internalType":"address payable","name":"v1","type":"address"},{"indexed":false,"internalType":"address payable","name":"v2","type":"address"}],"name":"announceWinner","type":"event"},{"anonymous":false,"inputs":[],"name":"incorrectContract","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address payable","name":"v0","type":"address"},{"indexed":false,"internalType":"address payable","name":"v1","type":"address"}],"name":"newParticipant","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[{"internalType":"address payable","name":"v2242","type":"address"},{"internalType":"address payable","name":"v2243","type":"address"}],"name":"Sprig_addParticipant","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"bool","name":"v2248","type":"bool"},{"internalType":"uint256","name":"v2249","type":"uint256"}],"name":"Sprig_announceWinner","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"Sprig_incorrectContract","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"_reachCreationTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentState","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T5","name":"which","type":"uint8"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"},{"internalType":"address payable","name":"elem1","type":"address"}],"internalType":"struct T0","name":"_Sprig_addParticipant0_321","type":"tuple"},{"components":[{"internalType":"bool","name":"elem0","type":"bool"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T3","name":"_Sprig_announceWinner0_321","type":"tuple"},{"internalType":"bool","name":"_Sprig_incorrectContract0_321","type":"bool"}],"internalType":"struct T5","name":"elem1","type":"tuple"}],"internalType":"struct T6","name":"v2265","type":"tuple"}],"name":"_reachp_2","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"addressSprig","outputs":[{"internalType":"address payable","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"author","outputs":[{"internalType":"address payable","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"deadline","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"interaction","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"participants","outputs":[{"components":[{"internalType":"enum _enum_T1","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"},{"internalType":"address payable","name":"elem1","type":"address"}],"internalType":"struct T0","name":"_Some","type":"tuple"}],"internalType":"struct T1[10]","name":"","type":"tuple[10]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"wagerDown","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"stateMutability":"payable","type":"receive"}]`,
  Bytecode: `0x6080601f62001e2838819003918201601f19168301916001600160401b03831184841017620005c15780849260a09460405283398101031262000665576040519060a082016001600160401b03811183821017620005c157604052805182526020810151906001600160a01b0382168203620006655760809160208401526040810151604084015260608101516060840152015160808201526000805543600355604051610140810181811060018060401b03821117620005c157600091610120916040528281528260208201528260408201528260608201528260808201528260a08201528260c08201528260e0820152620000fb62000724565b6101008201520152604051906200011282620006bf565b6200011c620006db565b82526200012862000724565b602083015260ff60045416620006a6577f567452ba5b7d6cf37730cadd39239f364eeda223e6d513cb826341db6bc39a2560c06040513381528351602082015260018060a01b0360208501511660408201526040840151606082015260608401516080820152608084015160a0820152a18051801590811562000699575b5015620006805760608101516103e890818101908181116200066a578110620006655734036200064c5760208201516000918291829182916001600160a01b031682f115620006405760008251526000602083510152815160208301515281516020808401510152815160406020840151015281516060602084015101528151608060208401510152815160a060208401510152815160c060208401510152815160e060208401510152815161010060208401510152815161012060208401510152604051918261012081011060018060401b0361012085011117620005c157602090610120840160405260008452600082850152600060408501526000606085015260006080850152600060a0850152600060c0850152620002c862000724565b60e085015260806101008501936000855233865260018060a01b03848201511684870152604081015160408701526060810151606087015201516080850152600060a0850152600060c0850152015160e08301524390526040518060e081011060018060401b0360e083011117620005c1578060e060c092016040526000815260006020820152600060408201526000606082015260006080820152600060a08201526200037562000724565b8282015260e060018060a01b038451169384835260018060a01b0360208201511660208401526040810151604084015260608101516060840152608081015160808401528381015160a084015201518282015260036000554360015560405192602084015260018060a01b0360208201511660408401526040810151606084015260608101516080840152608081015160a084015260a081015182840152015160e082016000905b600a8210620005d7576105c08452836105e081016001600160401b03811182821017620005c15760405280516001600160401b038111620005c157600254600181811c91168015620005b6575b6020821014620005a057601f811162000536575b50602091601f8211600114620004cc57918192600092620004c0575b50508160011b916000199060031b1c1916176002555b6040516116ba90816200076e8239f35b0151905082806200049a565b601f19821692600260005260206000209160005b8581106200051d5750836001951062000503575b505050811b01600255620004b0565b015160001960f88460031b161c19169055828080620004f4565b91926020600181928685015181550194019201620004e0565b60026000527f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace601f830160051c8101916020841062000595575b601f0160051c01905b8181106200058857506200047e565b6000815560010162000579565b909150819062000570565b634e487b7160e01b600052602260045260246000fd5b90607f16906200046a565b634e487b7160e01b600052604160045260246000fd5b825180519060028210156200062a5782604060809260209460019652848101511515858401520151848060a01b03815116604083015283858060a01b03910151166060820152019301910190916200041d565b634e487b7160e01b600052602160045260246000fd5b6040513d6000823e3d90fd5b60405163100960cb60e01b8152600f6004820152602490fd5b600080fd5b634e487b7160e01b600052601160045260246000fd5b60405163100960cb60e01b8152600e6004820152602490fd5b90506001541438620001a6565b60405163100960cb60e01b8152600d6004820152602490fd5b604081019081106001600160401b03821117620005c157604052565b60405190606082016001600160401b03811183821017620005c15760405281600081526000602082015260408051916200071583620006bf565b60008352600060208401520152565b604051906101408083016001600160401b03811184821017620005c1576040528260005b8281106200075557505050565b60209062000762620006db565b81840152016200074856fe6080604081815260048036101561001e575b505050361561001c57005b005b600092833560e01c9081631e93b0f1146106865750806329dcb0cf1461063857806352b3db8f1461051b5780636aef8ef1146104db5780636ba240221461048c5780636c4470fb146103f05780636c697331146103885780638323075714610369578063a6c3e6b9146102fb578063ab53f2c61461028f578063ae8647df146101f4578063aecca2e01461017f5763d7032d0603610011578160031936011261017b576001600160a01b039290358381169190829003610178576024359184831680930361017457610169906100f26108c7565b92839186519061010182610741565b6020988997888401928452825288519161011a83610741565b895161012581610741565b858152858a8201528352818984019461013c61092b565b86525116835152511687825101528282515251868251015261015c610989565b9182525185820152610b80565b015115159051908152f35b5080fd5b80fd5b8280fd5b50829034610174578160031936011261017457600361019c6108c7565b9254036101dd576020608084846101b16107a9565b80516001600160a01b039186916101cf9190810183019083016109c3565b015116928391015251908152f35b602490600784519163100960cb60e01b8352820152fd5b508160031936011261017b5735918215158093036101785781906101696102196108c7565b8092845161022681610741565b602097888201908252602435815286519061024082610741565b875161024b81610741565b848152848b82015282528982019261026161092b565b84525115158251525189825101526001825152518682510152610282610989565b9182525187820152610b80565b50503461017457816003193601126101745781546102ab6107a9565b91805193849283526020828185015284518093850152815b8381106102e457505060608094508284010152601f80199101168101030190f35b8086018201518782016060015286945081016102c3565b5082903461017457816003193601126101745760036103186108c7565b92540361035257602060a0848461032d6107a9565b610345600180861b03918680825183010191016109c3565b5116928391015251908152f35b602490600884519163100960cb60e01b8352820152fd5b5050346101745781600319360112610174576020906001549051908152f35b5082903461017457816003193601126101745760036103a56108c7565b9254036103d957602060e08484816103cc6103be6107a9565b8680825183010191016109c3565b0151928391015251908152f35b602490600a84519163100960cb60e01b8352820152fd5b5082903461017457816003193601126101745761040b610894565b506104146108c7565b90600383540361047557506101009261042b6107a9565b9160c06104426020948580825183010191016109c3565b01519401849052519291835b600a821061045c5761050085f35b8261046a60019286516106bd565b94019101909261044e565b602490600b85519163100960cb60e01b8352820152fd5b5082903461017457816003193601126101745760036104a96108c7565b9254036104c4576020610120848460606103cc6103be6107a9565b602490600c84519163100960cb60e01b8352820152fd5b5050816003193601126101745760606020926101696104f86108c7565b8092610502610989565b8781019060028251525115158682510152610282610989565b50919060e0366003190112610174576105326108c7565b9281519061053f82610741565b8035825260c036602319011261061d5782519060808201906001600160401b038211838310176106255750835260243560038110156106155781528260431936011261061d57825161059081610741565b6001600160a01b036044358181168103610621578252606435908116810361061957602082015260208201528260831936011261061d5782516105d281610741565b608435801515810361061957815260a43560208201528382015260c435801515810361061557918161060f93606060209894015286820152610b80565b51908152f35b8480fd5b8580fd5b8380fd5b8680fd5b634e487b7160e01b865260419052602485fd5b5082903461017457816003193601126101745760036106556108c7565b92540361066f57602060c0848460806103cc6103be6107a9565b602490600984519163100960cb60e01b8352820152fd5b8490346101745781600319360112610174576020906003548152f35b80516001600160a01b03908116835260209182015116910152565b9081519160028310156106f15760406106ed916080948452602081015115156020850152015160408301906106a2565b0190565b634e487b7160e01b600052602160045260246000fd5b90600182811c92168015610737575b602083101461072157565b634e487b7160e01b600052602260045260246000fd5b91607f1691610716565b604081019081106001600160401b0382111761075c57604052565b634e487b7160e01b600052604160045260246000fd5b606081019081106001600160401b0382111761075c57604052565b61014081019081106001600160401b0382111761075c57604052565b6040519060006002546107bb81610707565b80855260019180831690811561083f57506001146107f9575b5050829003601f01601f191682016001600160401b0381118382101761075c57604052565b6002600090815260209350918360008051602061166e8339815191525b83851061082b575050505083010138806107d4565b805488860183015293019284908201610816565b919250506020925060ff191682850152151560051b83010138806107d4565b6040519061086b82610772565b816000815260006020820152604080519161088583610741565b60008352600060208401520152565b604051906108a18261078d565b8160005b61014081106108b2575050565b6020906108bd61085e565b81840152016108a5565b6040519061014082016001600160401b0381118382101761075c57604052816101206000918281528260208201528260408201528260608201528260808201528260a08201528260c08201528260e0820152610921610894565b6101008201520152565b60405190608082016001600160401b0381118382101761075c5760405281606060009182815260405161095d81610741565b838152836020820152602082015260405161097781610741565b83815283602082015260408201520152565b6040519061099682610741565b816000815260206109a561092b565b910152565b51906001600160a01b03821682036109be57565b600080fd5b906105c09182818303126109be57604080519390919060e085016001600160401b0381118682101761075c5783526109fa826109aa565b8552602090610a0a8284016109aa565b8287015283830151848701526060938484015185880152608094858501518689015260a085015160a08901528660df860112156109be57815196610a4d8861078d565b87938601958187116109be5760c001935b868510610a7557505050505050505060c082015290565b8482038881126109be57845190610a8b82610772565b865160028110156109be578252878701519081151582036109be57869189840152603f1901126109be57889187918651610ac481610741565b610acf888a016109aa565b8152610adc878a016109aa565b8482015287820152815201940193610a5e565b5160038110156106f15790565b6040519061012082016001600160401b0381118382101761075c57604052816101006000918281528260208201528260408201528260608201528260808201528260a08201528260c0820152610b50610894565b60e08201520152565b90600a811015610b6a5760051b0190565b634e487b7160e01b600052603260045260246000fd5b6040519160c083016001600160401b0381118482101761075c5780604052610ba781610741565b60008152600060e08501528352604051610bc081610741565b60008152600060208201526020840152610bd861085e565b6040840152604051610be981610741565b60008152600060208201526060840152604051610c0581610741565b60008152600060208201526080840152604051610c2181610741565b600081526000602082015260a084015260ff6004541661163d5760405133815282516020820152602083015180519160038310156106f1576060610100927fe8aa810f1587470aec42d7e63c52ad8192b910f8e44127f952b8a086987e0f81946040840152610c976020820151838501906106a2565b602060408201518051151560a0860152015160c08401520151151560e0820152a160036000540361162457610cdc610ccd6107a9565b602080825183010191016109c3565b9180518015908115611618575b50156115ff57610cfc6020820151610aef565b60038110156106f1576111fe5760209081015181015184528201516001600160a01b031633036111e557600a60a083015110156111cc57346111b357825151602084810180516001600160a01b03938416905285518201518151908416908301526040808701805160019052915191518101919091528551805190830151825191851682529093168383015260009391927fe83724cfd6213e1ca8e053f3ce1163bc5fea531b9b733cc0b8443d16084c4c0d9190a17fade3cabd17667e24a5a7eb0f2e80b230d86b950152272c32c83ec12eface04f682604051858152a10152610de4610afc565b9160018060a01b03825116835260018060a01b036020830151166020840152604082015160408401526060820151606084015260808201516080840152600060a084015260a082015160018101811161119d578060018101106109be5760010160c0840152604060a060c0840151930151910151610e60610894565b9260005b600a811061116b57505090610e8491610e7d8285610b59565b5282610b59565b5060e08201524361010082015260a081015115610f1d5750600080556000600155610eb0600254610707565b80610eb85750565b601f8111600114610ecb57506000600255565b6002600052610f1090601f0160051c60008051602061166e833981519152017f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acf611656565b6000602081208160025555565b6040519091906001600160401b0360e082019081119082111761075c578060e060c092016040526000815260006020820152600060408201526000606082015260006080820152600060a0820152610f73610894565b8282015260e060018060a01b038551169485835260018060a01b0360208201511660208401526040810151604084015260608101516060840152608081015160808401528381015160a084015201518282015260036000554360015560405193602085015260018060a01b0360208201511660408501526040810151606085015260608101516080850152608081015160a085015260a081015182850152015160e083016000905b600a82106111515750506105c08352506105e082016001600160401b0381118382101761075c5760405281516001600160401b03811161075c57611060600254610707565b601f8111611109575b50602092601f82116001146110a6579281929360009261109b575b50508160011b916000199060031b1c191617600255565b015190503880611084565b601f19821693600260005260206000209160005b8681106110f157508360019596106110d8575b505050811b01600255565b015160001960f88460031b161c191690553880806110cd565b919260206001819286850151815501940192016110ba565b60026000526111419060008051602061166e833981519152601f840160051c81019160208510611147575b601f0160051c0190611656565b38611069565b9091508190611134565b602061116060019285516106bd565b93019101909161101b565b6111758183610b59565b516111808287610b59565b5261118b8186610b59565b50600019811461119d57600101610e64565b634e487b7160e01b600052601160045260246000fd5b60405163100960cb60e01b815260156004820152602490fd5b60405163100960cb60e01b815260146004820152602490fd5b60405163100960cb60e01b815260136004820152602490fd5b61120f602082959394950151610aef565b60038110156106f157600103611488576020908101516040015160608301528301516001600160a01b0316330361146f576060810151805115611460575060015b15611447573461142e57825160a0820180516001600160a01b03909216909152513060209091015260608101518051156113bc575060008051602061168e833981519152606060a08301515b60808401819052818401515181516020928301516040805193151584526001600160a01b03928316948401949094521691810191909152a160800151516060830180519093916000918291829182916001600160a01b03168282156113b3575bf1156113a7576000604060c0937f2e86fe9169085e51755da39dcaa9c8d147b33dc5ee7c58c64c31996d95de7af260208351858152a1015261133c610afc565b9260018060a01b03825116845260018060a01b0360208301511660208501526040820151604085015251606084015260808101516080840152600160a084015260a081015182840152015160e082015261010043910152600080556000600155610eb0600254610707565b6040513d6000823e3d90fd5b506108fc6112fc565b6113d090602060c086015191015190610b59565b515160028110156106f1576001036114135760008051602061168e8339815191526060604061140b60c0870151602084870151015190610b59565b51015161129c565b60008051602061168e833981519152606060a083015161129c565b60405163100960cb60e01b815260186004820152602490fd5b60405163100960cb60e01b815260176004820152602490fd5b6020015160a084015111611250565b60405163100960cb60e01b815260166004820152602490fd5b611496915060200151610aef565b60038110156106f1576002146114aa575050565b6020820180519092906001600160a01b0390811633036115e65760a08201516115cd57346115b4577fee67b7f614b91ff061c6dc403b96e7722d7bc7d1c186466659dcabd318d8ad8e6000604051a18082511690600080808060608701958651908282156115ab575bf1156113a7576000606060c0957f4204ec11e05185619f54d4aa1fe29074c3ca4f6b65863596c22d91fd4b60bbd36020604051858152a10152611554610afc565b94818451168652511660208501526040820151604085015251606084015260808101516080840152600160a0840152600082840152015160e082015261010043910152600080556000600155610eb0600254610707565b506108fc611513565b60405163100960cb60e01b8152601b6004820152602490fd5b60405163100960cb60e01b8152601a6004820152602490fd5b60405163100960cb60e01b815260196004820152602490fd5b60405163100960cb60e01b815260126004820152602490fd5b90506001541438610ce9565b60405163100960cb60e01b815260116004820152602490fd5b60405163100960cb60e01b815260106004820152602490fd5b818110611661575050565b6000815560010161165656fe405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace5cb5dec175be8d27a73236ff5782772d4dc3b1358215e6f9e1f8343abe740d53a164736f6c6343000810000a`,
  BytecodeLen: 7720,
  version: 9,
  views: {
    }
  };
export const _stateSourceMap = {
  2: {
    at: './challenge.rsh:97:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './challenge.rsh:55:19:after expr stmt semicolon',
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
