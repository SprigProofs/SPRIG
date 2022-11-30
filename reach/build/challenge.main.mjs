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
  const ctc1 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '300'));
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
      const [v1077, v1078, v1079, v1080, v1081, v1136, v1137] = svs;
      return (await ((async () => {
        
        
        return v1078;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _deadline = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v1077, v1078, v1079, v1080, v1081, v1136, v1137] = svs;
      return (await ((async () => {
        
        
        return v1081;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _interaction = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v1077, v1078, v1079, v1080, v1081, v1136, v1137] = svs;
      return (await ((async () => {
        
        
        return v1079;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _participants = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v1077, v1078, v1079, v1080, v1081, v1136, v1137] = svs;
      return (await ((async () => {
        
        
        return v1137;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _wagerDown = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v1077, v1078, v1079, v1080, v1081, v1136, v1137] = svs;
      return (await ((async () => {
        
        
        return v1080;}))(...args));
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
  const ctc2 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '300'));
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
  
  
  const v1070 = stdlib.protect(ctc0, interact.addressSprig, 'for Alice\'s interact field addressSprig');
  const v1071 = stdlib.protect(ctc1, interact.deadline, 'for Alice\'s interact field deadline');
  const v1072 = stdlib.protect(ctc2, interact.interaction, 'for Alice\'s interact field interaction');
  const v1073 = stdlib.protect(ctc1, interact.wagerDown, 'for Alice\'s interact field wagerDown');
  
  const v1076 = stdlib.safeAdd(v1073, stdlib.checkedBigNumberify('./challenge.rsh:3:13:decimal', stdlib.UInt_max, '1000'));
  
  const txn1 = await (ctc.sendrecv({
    args: [v1070, v1072, v1073, v1071],
    evt_cnt: 4,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./challenge.rsh:43:5:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0, ctc2, ctc1, ctc1],
    pay: [v1076, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v1078, v1079, v1080, v1081], secs: v1083, time: v1082, didSend: v38, from: v1077 } = txn1;
      
      const v1084 = stdlib.safeAdd(v1080, stdlib.checkedBigNumberify('./challenge.rsh:3:13:decimal', stdlib.UInt_max, '1000'));
      sim_r.txns.push({
        amt: v1084,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      sim_r.txns.push({
        kind: 'from',
        to: v1078,
        tok: undefined /* Nothing */
        });
      const v1092 = ['None', null];
      const v1112 = [v1092, v1092, v1092, v1092, v1092, v1092, v1092, v1092, v1092, v1092];
      const v1135 = false;
      const v1136 = stdlib.checkedBigNumberify('./challenge.rsh:53:29:decimal', stdlib.UInt_max, '0');
      const v1137 = v1112;
      const v1138 = v1082;
      
      if (await (async () => {
        const v1296 = v1135 ? false : true;
        
        return v1296;})()) {
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
  const {data: [v1078, v1079, v1080, v1081], secs: v1083, time: v1082, didSend: v38, from: v1077 } = txn1;
  const v1084 = stdlib.safeAdd(v1080, stdlib.checkedBigNumberify('./challenge.rsh:3:13:decimal', stdlib.UInt_max, '1000'));
  ;
  ;
  const v1092 = ['None', null];
  const v1112 = [v1092, v1092, v1092, v1092, v1092, v1092, v1092, v1092, v1092, v1092];
  let v1135 = false;
  let v1136 = stdlib.checkedBigNumberify('./challenge.rsh:53:29:decimal', stdlib.UInt_max, '0');
  let v1137 = v1112;
  let v1138 = v1082;
  
  let txn2 = txn1;
  while (await (async () => {
    const v1296 = v1135 ? false : true;
    
    return v1296;})()) {
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 2,
      out_tys: [ctc8],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v1421], secs: v1423, time: v1422, didSend: v832, from: v1420 } = txn3;
    switch (v1421[0]) {
      case 'Sprig_addParticipant0_321': {
        const v1424 = v1421[1];
        undefined /* setApiDetails */;
        const v1431 = stdlib.addressEq(v1420, v1078);
        stdlib.assert(v1431, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./challenge.rsh:73:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./challenge.rsh:72:53:application call to [unknown function] (defined at: ./challenge.rsh:72:53:function exp)', 'at ./challenge.rsh:53:19:application call to [unknown function] (defined at: ./challenge.rsh:72:53:function exp)', 'at ./challenge.rsh:53:19:application call to [unknown function] (defined at: ./challenge.rsh:53:19:function exp)'],
          msg: 'You are not Sprig',
          who: 'Alice'
          });
        const v1433 = stdlib.lt(v1136, stdlib.checkedBigNumberify('./challenge.rsh:4:25:decimal', stdlib.UInt_max, '10'));
        stdlib.assert(v1433, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./challenge.rsh:74:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./challenge.rsh:72:53:application call to [unknown function] (defined at: ./challenge.rsh:72:53:function exp)', 'at ./challenge.rsh:53:19:application call to [unknown function] (defined at: ./challenge.rsh:72:53:function exp)', 'at ./challenge.rsh:53:19:application call to [unknown function] (defined at: ./challenge.rsh:53:19:function exp)'],
          msg: 'Too many participants',
          who: 'Alice'
          });
        ;
        const v1449 = v1424[stdlib.checkedBigNumberify('./challenge.rsh:72:10:spread', stdlib.UInt_max, '0')];
        const v1450 = v1424[stdlib.checkedBigNumberify('./challenge.rsh:72:10:spread', stdlib.UInt_max, '1')];
        const v1458 = stdlib.lt(v1422, v1081);
        stdlib.assert(v1458, {
          at: './challenge.rsh:76:16:application',
          fs: ['at ./challenge.rsh:75:25:application call to [unknown function] (defined at: ./challenge.rsh:75:25:function exp)'],
          msg: 'too late to add new participants',
          who: 'Alice'
          });
        const v1459 = [v1449, v1450];
        const v1460 = ['Some', v1459];
        const v1462 = stdlib.Array_set(v1137, v1136, v1460);
        null;
        const v1463 = null;
        await txn3.getOutput('Sprig_addParticipant', 'v1463', ctc9, v1463);
        const v1471 = stdlib.safeAdd(v1136, stdlib.checkedBigNumberify('./challenge.rsh:80:46:decimal', stdlib.UInt_max, '1'));
        const cv1135 = false;
        const cv1136 = v1471;
        const cv1137 = v1462;
        const cv1138 = v1422;
        
        v1135 = cv1135;
        v1136 = cv1136;
        v1137 = cv1137;
        v1138 = cv1138;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'Sprig_announceWinner0_321': {
        const v1527 = v1421[1];
        undefined /* setApiDetails */;
        const v1539 = v1527[stdlib.checkedBigNumberify('./challenge.rsh:84:10:spread', stdlib.UInt_max, '0')];
        const v1540 = v1527[stdlib.checkedBigNumberify('./challenge.rsh:84:10:spread', stdlib.UInt_max, '1')];
        const v1541 = stdlib.addressEq(v1420, v1078);
        stdlib.assert(v1541, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./challenge.rsh:85:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./challenge.rsh:84:58:application call to [unknown function] (defined at: ./challenge.rsh:84:58:function exp)', 'at ./challenge.rsh:53:19:application call to [unknown function] (defined at: ./challenge.rsh:84:58:function exp)', 'at ./challenge.rsh:53:19:application call to [unknown function] (defined at: ./challenge.rsh:53:19:function exp)'],
          msg: 'You are not Sprig',
          who: 'Alice'
          });
        const v1543 = stdlib.lt(v1540, v1136);
        const v1544 = v1539 ? true : v1543;
        stdlib.assert(v1544, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./challenge.rsh:86:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./challenge.rsh:84:58:application call to [unknown function] (defined at: ./challenge.rsh:84:58:function exp)', 'at ./challenge.rsh:53:19:application call to [unknown function] (defined at: ./challenge.rsh:84:58:function exp)', 'at ./challenge.rsh:53:19:application call to [unknown function] (defined at: ./challenge.rsh:53:19:function exp)'],
          msg: 'This participant does not exist.',
          who: 'Alice'
          });
        ;
        const v1587 = stdlib.ge(v1422, v1081);
        const v1589 = v1539 ? v1587 : true;
        stdlib.assert(v1589, {
          at: './challenge.rsh:88:16:application',
          fs: ['at ./challenge.rsh:87:25:application call to [unknown function] (defined at: ./challenge.rsh:87:25:function exp)'],
          msg: 'cannot announce A was right before the end',
          who: 'Alice'
          });
        const v1591 = await ctc.getContractInfo();
        const v1592 = [v1077, v1591];
        const v1594 = v1137[v1540];
        const v1597 = stdlib.fromSome(v1594, v1592);
        const v1590 = v1539 ? v1592 : v1597;
        const v1598 = v1590[stdlib.checkedBigNumberify('./challenge.rsh:90:43:array ref', stdlib.UInt_max, '0')];
        const v1599 = v1590[stdlib.checkedBigNumberify('./challenge.rsh:90:54:array ref', stdlib.UInt_max, '1')];
        null;
        ;
        const v1605 = null;
        await txn3.getOutput('Sprig_announceWinner', 'v1605', ctc9, v1605);
        const cv1135 = true;
        const cv1136 = v1136;
        const cv1137 = v1137;
        const cv1138 = v1422;
        
        v1135 = cv1135;
        v1136 = cv1136;
        v1137 = cv1137;
        v1138 = cv1138;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'Sprig_incorrectContract0_321': {
        const v1630 = v1421[1];
        undefined /* setApiDetails */;
        const v1650 = stdlib.addressEq(v1420, v1078);
        stdlib.assert(v1650, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./challenge.rsh:62:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./challenge.rsh:61:39:application call to [unknown function] (defined at: ./challenge.rsh:61:39:function exp)', 'at ./challenge.rsh:53:19:application call to [unknown function] (defined at: ./challenge.rsh:61:39:function exp)', 'at ./challenge.rsh:53:19:application call to [unknown function] (defined at: ./challenge.rsh:53:19:function exp)'],
          msg: 'You are not Sprig',
          who: 'Alice'
          });
        const v1652 = stdlib.eq(v1136, stdlib.checkedBigNumberify('./challenge.rsh:63:35:decimal', stdlib.UInt_max, '0'));
        stdlib.assert(v1652, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./challenge.rsh:63:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./challenge.rsh:61:39:application call to [unknown function] (defined at: ./challenge.rsh:61:39:function exp)', 'at ./challenge.rsh:53:19:application call to [unknown function] (defined at: ./challenge.rsh:61:39:function exp)', 'at ./challenge.rsh:53:19:application call to [unknown function] (defined at: ./challenge.rsh:53:19:function exp)'],
          msg: 'Debate has already begun',
          who: 'Alice'
          });
        ;
        null;
        ;
        const v1726 = null;
        await txn3.getOutput('Sprig_incorrectContract', 'v1726', ctc9, v1726);
        const cv1135 = true;
        const cv1136 = stdlib.checkedBigNumberify('./challenge.rsh:68:24:decimal', stdlib.UInt_max, '0');
        const cv1137 = v1137;
        const cv1138 = v1422;
        
        v1135 = cv1135;
        v1136 = cv1136;
        v1137 = cv1137;
        v1138 = cv1138;
        
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
  const ctc1 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '300'));
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
  
  
  const [v1077, v1078, v1079, v1080, v1081, v1136, v1137] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc0, ctc0, ctc1, ctc2, ctc2, ctc2, ctc7]);
  const v1359 = ctc.selfAddress();
  const v1361 = stdlib.protect(ctc5, await interact.in(), {
    at: './challenge.rsh:1:23:application',
    fs: ['at ./challenge.rsh:72:53:application call to [unknown function] (defined at: ./challenge.rsh:72:53:function exp)', 'at ./challenge.rsh:53:19:application call to "runSprig_addParticipant0_321" (defined at: ./challenge.rsh:72:10:function exp)', 'at ./challenge.rsh:53:19:application call to [unknown function] (defined at: ./challenge.rsh:53:19:function exp)'],
    msg: 'in',
    who: 'Sprig_addParticipant'
    });
  const v1366 = stdlib.addressEq(v1359, v1078);
  stdlib.assert(v1366, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./challenge.rsh:73:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./challenge.rsh:72:53:application call to [unknown function] (defined at: ./challenge.rsh:72:53:function exp)', 'at ./challenge.rsh:53:19:application call to "runSprig_addParticipant0_321" (defined at: ./challenge.rsh:72:10:function exp)', 'at ./challenge.rsh:53:19:application call to [unknown function] (defined at: ./challenge.rsh:53:19:function exp)'],
    msg: 'You are not Sprig',
    who: 'Sprig_addParticipant'
    });
  const v1368 = stdlib.lt(v1136, stdlib.checkedBigNumberify('./challenge.rsh:4:25:decimal', stdlib.UInt_max, '10'));
  stdlib.assert(v1368, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./challenge.rsh:74:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./challenge.rsh:72:53:application call to [unknown function] (defined at: ./challenge.rsh:72:53:function exp)', 'at ./challenge.rsh:53:19:application call to "runSprig_addParticipant0_321" (defined at: ./challenge.rsh:72:10:function exp)', 'at ./challenge.rsh:53:19:application call to [unknown function] (defined at: ./challenge.rsh:53:19:function exp)'],
    msg: 'Too many participants',
    who: 'Sprig_addParticipant'
    });
  const v1377 = ['Sprig_addParticipant0_321', v1361];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1077, v1078, v1079, v1080, v1081, v1136, v1137, v1377],
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
      
      
      const {data: [v1421], secs: v1423, time: v1422, didSend: v832, from: v1420 } = txn1;
      
      switch (v1421[0]) {
        case 'Sprig_addParticipant0_321': {
          const v1424 = v1421[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Sprig_addParticipant"
            });
          ;
          const v1449 = v1424[stdlib.checkedBigNumberify('./challenge.rsh:72:10:spread', stdlib.UInt_max, '0')];
          const v1450 = v1424[stdlib.checkedBigNumberify('./challenge.rsh:72:10:spread', stdlib.UInt_max, '1')];
          const v1459 = [v1449, v1450];
          const v1460 = ['Some', v1459];
          const v1462 = stdlib.Array_set(v1137, v1136, v1460);
          null;
          const v1463 = null;
          const v1464 = await txn1.getOutput('Sprig_addParticipant', 'v1463', ctc3, v1463);
          
          const v1471 = stdlib.safeAdd(v1136, stdlib.checkedBigNumberify('./challenge.rsh:80:46:decimal', stdlib.UInt_max, '1'));
          const v2204 = v1471;
          const v2205 = v1462;
          sim_r.isHalt = false;
          
          break;
          }
        case 'Sprig_announceWinner0_321': {
          const v1527 = v1421[1];
          
          break;
          }
        case 'Sprig_incorrectContract0_321': {
          const v1630 = v1421[1];
          
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
  const {data: [v1421], secs: v1423, time: v1422, didSend: v832, from: v1420 } = txn1;
  switch (v1421[0]) {
    case 'Sprig_addParticipant0_321': {
      const v1424 = v1421[1];
      undefined /* setApiDetails */;
      const v1431 = stdlib.addressEq(v1420, v1078);
      stdlib.assert(v1431, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./challenge.rsh:73:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./challenge.rsh:72:53:application call to [unknown function] (defined at: ./challenge.rsh:72:53:function exp)', 'at ./challenge.rsh:53:19:application call to [unknown function] (defined at: ./challenge.rsh:72:53:function exp)', 'at ./challenge.rsh:53:19:application call to [unknown function] (defined at: ./challenge.rsh:53:19:function exp)'],
        msg: 'You are not Sprig',
        who: 'Sprig_addParticipant'
        });
      const v1433 = stdlib.lt(v1136, stdlib.checkedBigNumberify('./challenge.rsh:4:25:decimal', stdlib.UInt_max, '10'));
      stdlib.assert(v1433, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./challenge.rsh:74:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./challenge.rsh:72:53:application call to [unknown function] (defined at: ./challenge.rsh:72:53:function exp)', 'at ./challenge.rsh:53:19:application call to [unknown function] (defined at: ./challenge.rsh:72:53:function exp)', 'at ./challenge.rsh:53:19:application call to [unknown function] (defined at: ./challenge.rsh:53:19:function exp)'],
        msg: 'Too many participants',
        who: 'Sprig_addParticipant'
        });
      ;
      const v1449 = v1424[stdlib.checkedBigNumberify('./challenge.rsh:72:10:spread', stdlib.UInt_max, '0')];
      const v1450 = v1424[stdlib.checkedBigNumberify('./challenge.rsh:72:10:spread', stdlib.UInt_max, '1')];
      const v1458 = stdlib.lt(v1422, v1081);
      stdlib.assert(v1458, {
        at: './challenge.rsh:76:16:application',
        fs: ['at ./challenge.rsh:75:25:application call to [unknown function] (defined at: ./challenge.rsh:75:25:function exp)'],
        msg: 'too late to add new participants',
        who: 'Sprig_addParticipant'
        });
      const v1459 = [v1449, v1450];
      const v1460 = ['Some', v1459];
      const v1462 = stdlib.Array_set(v1137, v1136, v1460);
      null;
      const v1463 = null;
      const v1464 = await txn1.getOutput('Sprig_addParticipant', 'v1463', ctc3, v1463);
      if (v832) {
        stdlib.protect(ctc3, await interact.out(v1424, v1464), {
          at: './challenge.rsh:72:11:application',
          fs: ['at ./challenge.rsh:72:11:application call to [unknown function] (defined at: ./challenge.rsh:72:11:function exp)', 'at ./challenge.rsh:79:12:application call to "ret" (defined at: ./challenge.rsh:75:25:function exp)', 'at ./challenge.rsh:75:25:application call to [unknown function] (defined at: ./challenge.rsh:75:25:function exp)'],
          msg: 'out',
          who: 'Sprig_addParticipant'
          });
        }
      else {
        }
      
      const v1471 = stdlib.safeAdd(v1136, stdlib.checkedBigNumberify('./challenge.rsh:80:46:decimal', stdlib.UInt_max, '1'));
      const v2204 = v1471;
      const v2205 = v1462;
      return;
      
      break;
      }
    case 'Sprig_announceWinner0_321': {
      const v1527 = v1421[1];
      return;
      break;
      }
    case 'Sprig_incorrectContract0_321': {
      const v1630 = v1421[1];
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
  const ctc1 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '300'));
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
  
  
  const [v1077, v1078, v1079, v1080, v1081, v1136, v1137] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc0, ctc0, ctc1, ctc2, ctc2, ctc2, ctc7]);
  const v1379 = ctc.selfAddress();
  const v1381 = stdlib.protect(ctc9, await interact.in(), {
    at: './challenge.rsh:1:23:application',
    fs: ['at ./challenge.rsh:84:58:application call to [unknown function] (defined at: ./challenge.rsh:84:58:function exp)', 'at ./challenge.rsh:53:19:application call to "runSprig_announceWinner0_321" (defined at: ./challenge.rsh:84:10:function exp)', 'at ./challenge.rsh:53:19:application call to [unknown function] (defined at: ./challenge.rsh:53:19:function exp)'],
    msg: 'in',
    who: 'Sprig_announceWinner'
    });
  const v1382 = v1381[stdlib.checkedBigNumberify('./challenge.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v1383 = v1381[stdlib.checkedBigNumberify('./challenge.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v1386 = stdlib.addressEq(v1379, v1078);
  stdlib.assert(v1386, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./challenge.rsh:85:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./challenge.rsh:84:58:application call to [unknown function] (defined at: ./challenge.rsh:84:58:function exp)', 'at ./challenge.rsh:53:19:application call to "runSprig_announceWinner0_321" (defined at: ./challenge.rsh:84:10:function exp)', 'at ./challenge.rsh:53:19:application call to [unknown function] (defined at: ./challenge.rsh:53:19:function exp)'],
    msg: 'You are not Sprig',
    who: 'Sprig_announceWinner'
    });
  const v1388 = stdlib.lt(v1383, v1136);
  const v1389 = v1382 ? true : v1388;
  stdlib.assert(v1389, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./challenge.rsh:86:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./challenge.rsh:84:58:application call to [unknown function] (defined at: ./challenge.rsh:84:58:function exp)', 'at ./challenge.rsh:53:19:application call to "runSprig_announceWinner0_321" (defined at: ./challenge.rsh:84:10:function exp)', 'at ./challenge.rsh:53:19:application call to [unknown function] (defined at: ./challenge.rsh:53:19:function exp)'],
    msg: 'This participant does not exist.',
    who: 'Sprig_announceWinner'
    });
  const v1398 = ['Sprig_announceWinner0_321', v1381];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1077, v1078, v1079, v1080, v1081, v1136, v1137, v1398],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc11],
    pay: [stdlib.checkedBigNumberify('./challenge.rsh:87:16:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v1421], secs: v1423, time: v1422, didSend: v832, from: v1420 } = txn1;
      
      switch (v1421[0]) {
        case 'Sprig_addParticipant0_321': {
          const v1424 = v1421[1];
          
          break;
          }
        case 'Sprig_announceWinner0_321': {
          const v1527 = v1421[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Sprig_announceWinner"
            });
          const v1539 = v1527[stdlib.checkedBigNumberify('./challenge.rsh:84:10:spread', stdlib.UInt_max, '0')];
          const v1540 = v1527[stdlib.checkedBigNumberify('./challenge.rsh:84:10:spread', stdlib.UInt_max, '1')];
          ;
          const v1591 = await ctc.getContractInfo();
          const v1592 = [v1077, v1591];
          const v1594 = v1137[v1540];
          const v1597 = stdlib.fromSome(v1594, v1592);
          const v1590 = v1539 ? v1592 : v1597;
          const v1598 = v1590[stdlib.checkedBigNumberify('./challenge.rsh:90:43:array ref', stdlib.UInt_max, '0')];
          const v1599 = v1590[stdlib.checkedBigNumberify('./challenge.rsh:90:54:array ref', stdlib.UInt_max, '1')];
          null;
          sim_r.txns.push({
            kind: 'from',
            to: v1598,
            tok: undefined /* Nothing */
            });
          const v1605 = null;
          const v1606 = await txn1.getOutput('Sprig_announceWinner', 'v1605', ctc3, v1605);
          
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          
          break;
          }
        case 'Sprig_incorrectContract0_321': {
          const v1630 = v1421[1];
          
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
  const {data: [v1421], secs: v1423, time: v1422, didSend: v832, from: v1420 } = txn1;
  switch (v1421[0]) {
    case 'Sprig_addParticipant0_321': {
      const v1424 = v1421[1];
      return;
      break;
      }
    case 'Sprig_announceWinner0_321': {
      const v1527 = v1421[1];
      undefined /* setApiDetails */;
      const v1539 = v1527[stdlib.checkedBigNumberify('./challenge.rsh:84:10:spread', stdlib.UInt_max, '0')];
      const v1540 = v1527[stdlib.checkedBigNumberify('./challenge.rsh:84:10:spread', stdlib.UInt_max, '1')];
      const v1541 = stdlib.addressEq(v1420, v1078);
      stdlib.assert(v1541, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./challenge.rsh:85:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./challenge.rsh:84:58:application call to [unknown function] (defined at: ./challenge.rsh:84:58:function exp)', 'at ./challenge.rsh:53:19:application call to [unknown function] (defined at: ./challenge.rsh:84:58:function exp)', 'at ./challenge.rsh:53:19:application call to [unknown function] (defined at: ./challenge.rsh:53:19:function exp)'],
        msg: 'You are not Sprig',
        who: 'Sprig_announceWinner'
        });
      const v1543 = stdlib.lt(v1540, v1136);
      const v1544 = v1539 ? true : v1543;
      stdlib.assert(v1544, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./challenge.rsh:86:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./challenge.rsh:84:58:application call to [unknown function] (defined at: ./challenge.rsh:84:58:function exp)', 'at ./challenge.rsh:53:19:application call to [unknown function] (defined at: ./challenge.rsh:84:58:function exp)', 'at ./challenge.rsh:53:19:application call to [unknown function] (defined at: ./challenge.rsh:53:19:function exp)'],
        msg: 'This participant does not exist.',
        who: 'Sprig_announceWinner'
        });
      ;
      const v1587 = stdlib.ge(v1422, v1081);
      const v1589 = v1539 ? v1587 : true;
      stdlib.assert(v1589, {
        at: './challenge.rsh:88:16:application',
        fs: ['at ./challenge.rsh:87:25:application call to [unknown function] (defined at: ./challenge.rsh:87:25:function exp)'],
        msg: 'cannot announce A was right before the end',
        who: 'Sprig_announceWinner'
        });
      const v1591 = await ctc.getContractInfo();
      const v1592 = [v1077, v1591];
      const v1594 = v1137[v1540];
      const v1597 = stdlib.fromSome(v1594, v1592);
      const v1590 = v1539 ? v1592 : v1597;
      const v1598 = v1590[stdlib.checkedBigNumberify('./challenge.rsh:90:43:array ref', stdlib.UInt_max, '0')];
      const v1599 = v1590[stdlib.checkedBigNumberify('./challenge.rsh:90:54:array ref', stdlib.UInt_max, '1')];
      null;
      ;
      const v1605 = null;
      const v1606 = await txn1.getOutput('Sprig_announceWinner', 'v1605', ctc3, v1605);
      if (v832) {
        stdlib.protect(ctc3, await interact.out(v1527, v1606), {
          at: './challenge.rsh:84:11:application',
          fs: ['at ./challenge.rsh:84:11:application call to [unknown function] (defined at: ./challenge.rsh:84:11:function exp)', 'at ./challenge.rsh:92:12:application call to "ret" (defined at: ./challenge.rsh:87:25:function exp)', 'at ./challenge.rsh:87:25:application call to [unknown function] (defined at: ./challenge.rsh:87:25:function exp)'],
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
      const v1630 = v1421[1];
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
  const ctc1 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '300'));
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
  
  
  const [v1077, v1078, v1079, v1080, v1081, v1136, v1137] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc0, ctc0, ctc1, ctc2, ctc2, ctc2, ctc7]);
  const v1347 = ctc.selfAddress();
  const v1349 = stdlib.protect(ctc8, await interact.in(), {
    at: './challenge.rsh:1:23:application',
    fs: ['at ./challenge.rsh:61:39:application call to [unknown function] (defined at: ./challenge.rsh:61:39:function exp)', 'at ./challenge.rsh:53:19:application call to "runSprig_incorrectContract0_321" (defined at: ./challenge.rsh:61:10:function exp)', 'at ./challenge.rsh:53:19:application call to [unknown function] (defined at: ./challenge.rsh:53:19:function exp)'],
    msg: 'in',
    who: 'Sprig_incorrectContract'
    });
  const v1350 = stdlib.addressEq(v1347, v1078);
  stdlib.assert(v1350, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./challenge.rsh:62:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./challenge.rsh:61:39:application call to [unknown function] (defined at: ./challenge.rsh:61:39:function exp)', 'at ./challenge.rsh:53:19:application call to "runSprig_incorrectContract0_321" (defined at: ./challenge.rsh:61:10:function exp)', 'at ./challenge.rsh:53:19:application call to [unknown function] (defined at: ./challenge.rsh:53:19:function exp)'],
    msg: 'You are not Sprig',
    who: 'Sprig_incorrectContract'
    });
  const v1352 = stdlib.eq(v1136, stdlib.checkedBigNumberify('./challenge.rsh:63:35:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v1352, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./challenge.rsh:63:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./challenge.rsh:61:39:application call to [unknown function] (defined at: ./challenge.rsh:61:39:function exp)', 'at ./challenge.rsh:53:19:application call to "runSprig_incorrectContract0_321" (defined at: ./challenge.rsh:61:10:function exp)', 'at ./challenge.rsh:53:19:application call to [unknown function] (defined at: ./challenge.rsh:53:19:function exp)'],
    msg: 'Debate has already begun',
    who: 'Sprig_incorrectContract'
    });
  const v1357 = ['Sprig_incorrectContract0_321', v1349];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1077, v1078, v1079, v1080, v1081, v1136, v1137, v1357],
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
      
      
      const {data: [v1421], secs: v1423, time: v1422, didSend: v832, from: v1420 } = txn1;
      
      switch (v1421[0]) {
        case 'Sprig_addParticipant0_321': {
          const v1424 = v1421[1];
          
          break;
          }
        case 'Sprig_announceWinner0_321': {
          const v1527 = v1421[1];
          
          break;
          }
        case 'Sprig_incorrectContract0_321': {
          const v1630 = v1421[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Sprig_incorrectContract"
            });
          ;
          null;
          sim_r.txns.push({
            kind: 'from',
            to: v1077,
            tok: undefined /* Nothing */
            });
          const v1726 = null;
          const v1727 = await txn1.getOutput('Sprig_incorrectContract', 'v1726', ctc3, v1726);
          
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
  const {data: [v1421], secs: v1423, time: v1422, didSend: v832, from: v1420 } = txn1;
  switch (v1421[0]) {
    case 'Sprig_addParticipant0_321': {
      const v1424 = v1421[1];
      return;
      break;
      }
    case 'Sprig_announceWinner0_321': {
      const v1527 = v1421[1];
      return;
      break;
      }
    case 'Sprig_incorrectContract0_321': {
      const v1630 = v1421[1];
      undefined /* setApiDetails */;
      const v1650 = stdlib.addressEq(v1420, v1078);
      stdlib.assert(v1650, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./challenge.rsh:62:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./challenge.rsh:61:39:application call to [unknown function] (defined at: ./challenge.rsh:61:39:function exp)', 'at ./challenge.rsh:53:19:application call to [unknown function] (defined at: ./challenge.rsh:61:39:function exp)', 'at ./challenge.rsh:53:19:application call to [unknown function] (defined at: ./challenge.rsh:53:19:function exp)'],
        msg: 'You are not Sprig',
        who: 'Sprig_incorrectContract'
        });
      const v1652 = stdlib.eq(v1136, stdlib.checkedBigNumberify('./challenge.rsh:63:35:decimal', stdlib.UInt_max, '0'));
      stdlib.assert(v1652, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./challenge.rsh:63:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./challenge.rsh:61:39:application call to [unknown function] (defined at: ./challenge.rsh:61:39:function exp)', 'at ./challenge.rsh:53:19:application call to [unknown function] (defined at: ./challenge.rsh:61:39:function exp)', 'at ./challenge.rsh:53:19:application call to [unknown function] (defined at: ./challenge.rsh:53:19:function exp)'],
        msg: 'Debate has already begun',
        who: 'Sprig_incorrectContract'
        });
      ;
      null;
      ;
      const v1726 = null;
      const v1727 = await txn1.getOutput('Sprig_incorrectContract', 'v1726', ctc3, v1726);
      if (v832) {
        stdlib.protect(ctc3, await interact.out(v1630, v1727), {
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
    pure: [`addressSprig()address`, `deadline()uint64`, `interaction()byte[300]`, `participants()(byte,byte[40])[10]`, `wagerDown()uint64`],
    sigs: [`Sprig_addParticipant(address,uint64)byte[0]`, `Sprig_announceWinner(byte,uint64)byte[0]`, `Sprig_incorrectContract()byte[0]`, `addressSprig()address`, `deadline()uint64`, `interaction()byte[300]`, `participants()(byte,byte[40])[10]`, `wagerDown()uint64`]
    },
  GlobalNumByteSlice: 8,
  GlobalNumUint: 0,
  LocalNumByteSlice: 0,
  LocalNumUint: 0,
  appApproval: `ByAWAAEDCAIprAJ/0fWn0Qfp4N/WDdLEtYEO+9L+jwrn8du3Arfn6MgHQPQC7YCPnwLsAoQDmgMg6AcmCAEBAQABAgEDAQQBBQEGACI1ADEYQQSwJwdkSSJbNQElWzUCNhoAF0lBAVYiNQQjNQZJIQgMQAB/SSEJDEAAM0khCgxAABQhChJENhoBNhoCUDX/KTT/UEIBPyEJEkQ2GgE2GgJQNf8oNP9QgR+vUEIBJ0khCwxAABMhCxJEJwc1/yo0/1CBKK9QQgENIQgSRDQBJBJEKWQoZFAqZFArZFAnBGRQJwVkUCcGZFBJNQNXICA1B0IECEkhDAxAAGBJIQ0MQAAtIQ0SRDQBJBJEKWQoZFAqZFArZFAnBGRQJwVkUCcGZFBJNQMhDiEGWDUHQgPNIQwSRDQBJBJEKWQoZFAqZFArZFAnBGRQJwVkUCcGZFBJNQMhDyVYNQdCA6FJIRAMQAAsIRASRDQBJBJEKWQoZFAqZFArZFAnBGRQJwVkUCcGZFBJNQMhESVYNQdCA26BocC/UBJENAEkEkQpZChkUCpkUCtkUCcEZFAnBWRQJwZkUEk1AyESIRNYNQdCAz42GgIXNQQ2GgM2GgEXSSEEDEABzyEEEkQkNAESRDQESSISTDQCEhFEKWQoZFAqZFArZFAnBGRQJwVkUCcGZFBJNQNJSkpJVwAgNf9XICA1/iEOIQZYNf0hEVs1/CEPWzX7gfwCWzX6IRIhE1g1+Uk1BTX4gAT8W2bHNPhQsDT4IlVJIwxAAPNJIQQMQABIIQQSRDEANP4SRDT6IhJEgASId8YgsLEisgE0/LIII7IQNP+yB7OACAAAAAAAAAa+sCcHNQc0/zT+NP00/DT7IyI0+TIGQgGjSDT4VwEJNfc091cAARc19jT3I1s19TEANP4SRDT2NPU0+gwRRDT2FDIGNPsPEUQ0/zEYFlBJNfQ0+SEFNPULIQVYSTXyVwEoNPIiVU009DT2TUk181cAIDXygAR8+X8ONPYWUQcIUDTyUDTzVyAIULCxIrIBNPyyCCOyEDTysgezgAgAAAAAAAAGRbAnBzUHNP80/jT9NPw0+yM0+jT5MgZCAP9INPhXASg19zEANP4SRDT6gQoMRDT3VwAgNfY09yEUWzX1MgY0+wxEgASGERlsNPZQNPUWULCACAAAAAAAAAW3sCcHNQc0/zT+NP00/DT7IjT6Iwg0+TT6IQULKDT2NPUWUFBdMgZCAJYiEkSBoI0GiAF2IjQBEkQ0BEkiEkw0AhIRREk1BUlKVwAgNf8hFCEGWDX+gcwCWzX9gdQCWzX8gAT3n05UNP9QNP5QNP0WUDT8FlCwNP0hFQiIASyxIrIBIRWyCCOyEDT/sgezIQWvNfsxADT/NP40/TT8IiI0+0lQNPtQNPtQNPtQNPtQNPtQNPtQNPtQNPtQMgZCAAA1/zX+Nf01/DX7Nfo1+TX4Nfc0/EEAA0IAYjT3NPhQNPlQNPoWUDT7FlA0/RZQNP5QKUsBVwB/ZyhLAVd/f2cqSwFX/n9nK0sBgf0CIQdYZycESwGB/AMhB1hnJwVLAYH7BCEHWGcnBksBgfoFgSRYZ0gkNQEyBjUCQgAcMRmBBRJEsSKyASKyCCOyEDIJsgkyCrIHs0IABTEZIhJEJwc0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSMIMgQSRDEWEkQjQzEZIhJEQv/fIjE0EkQlMTUSRCIxNhJEIjE3EkQiNQEiNQJC/640AElKIwg1ADgHMgoSRDgQIxJEOAgSRIk=`,
  appClear: `Bw==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 7,
  stateSize: 798,
  unsupported: [],
  version: 11,
  warnings: []
  };
const _ETH = {
  ABI: `[{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"address payable","name":"elem1","type":"address"},{"components":[{"internalType":"bytes32","name":"elem0","type":"bytes32"},{"internalType":"bytes32","name":"elem1","type":"bytes32"},{"internalType":"bytes32","name":"elem2","type":"bytes32"},{"internalType":"bytes32","name":"elem3","type":"bytes32"},{"internalType":"bytes32","name":"elem4","type":"bytes32"},{"internalType":"bytes32","name":"elem5","type":"bytes32"},{"internalType":"bytes32","name":"elem6","type":"bytes32"},{"internalType":"bytes32","name":"elem7","type":"bytes32"},{"internalType":"bytes32","name":"elem8","type":"bytes32"},{"internalType":"bytes12","name":"elem9","type":"bytes12"}],"internalType":"struct T0","name":"elem2","type":"tuple"},{"internalType":"uint256","name":"elem3","type":"uint256"},{"internalType":"uint256","name":"elem4","type":"uint256"}],"internalType":"struct T9","name":"v2275","type":"tuple"}],"stateMutability":"payable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"msg","type":"uint256"}],"name":"ReachError","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"address payable","name":"elem1","type":"address"},{"components":[{"internalType":"bytes32","name":"elem0","type":"bytes32"},{"internalType":"bytes32","name":"elem1","type":"bytes32"},{"internalType":"bytes32","name":"elem2","type":"bytes32"},{"internalType":"bytes32","name":"elem3","type":"bytes32"},{"internalType":"bytes32","name":"elem4","type":"bytes32"},{"internalType":"bytes32","name":"elem5","type":"bytes32"},{"internalType":"bytes32","name":"elem6","type":"bytes32"},{"internalType":"bytes32","name":"elem7","type":"bytes32"},{"internalType":"bytes32","name":"elem8","type":"bytes32"},{"internalType":"bytes12","name":"elem9","type":"bytes12"}],"internalType":"struct T0","name":"elem2","type":"tuple"},{"internalType":"uint256","name":"elem3","type":"uint256"},{"internalType":"uint256","name":"elem4","type":"uint256"}],"indexed":false,"internalType":"struct T9","name":"_a","type":"tuple"}],"name":"_reach_e0","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T6","name":"which","type":"uint8"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"},{"internalType":"address payable","name":"elem1","type":"address"}],"internalType":"struct T1","name":"_Sprig_addParticipant0_321","type":"tuple"},{"components":[{"internalType":"bool","name":"elem0","type":"bool"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T4","name":"_Sprig_announceWinner0_321","type":"tuple"},{"internalType":"bool","name":"_Sprig_incorrectContract0_321","type":"bool"}],"internalType":"struct T6","name":"elem1","type":"tuple"}],"indexed":false,"internalType":"struct T7","name":"_a","type":"tuple"}],"name":"_reach_e2","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v1463","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v1605","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v1726","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"},{"indexed":false,"internalType":"address payable","name":"v1","type":"address"},{"indexed":false,"internalType":"address payable","name":"v2","type":"address"}],"name":"announceWinner","type":"event"},{"anonymous":false,"inputs":[],"name":"incorrectContract","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address payable","name":"v0","type":"address"},{"indexed":false,"internalType":"address payable","name":"v1","type":"address"}],"name":"newParticipant","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[{"internalType":"address payable","name":"v2258","type":"address"},{"internalType":"address payable","name":"v2259","type":"address"}],"name":"Sprig_addParticipant","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"bool","name":"v2264","type":"bool"},{"internalType":"uint256","name":"v2265","type":"uint256"}],"name":"Sprig_announceWinner","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"Sprig_incorrectContract","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"_reachCreationTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentState","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T6","name":"which","type":"uint8"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"},{"internalType":"address payable","name":"elem1","type":"address"}],"internalType":"struct T1","name":"_Sprig_addParticipant0_321","type":"tuple"},{"components":[{"internalType":"bool","name":"elem0","type":"bool"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T4","name":"_Sprig_announceWinner0_321","type":"tuple"},{"internalType":"bool","name":"_Sprig_incorrectContract0_321","type":"bool"}],"internalType":"struct T6","name":"elem1","type":"tuple"}],"internalType":"struct T7","name":"v2281","type":"tuple"}],"name":"_reachp_2","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"addressSprig","outputs":[{"internalType":"address payable","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"deadline","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"interaction","outputs":[{"components":[{"internalType":"bytes32","name":"elem0","type":"bytes32"},{"internalType":"bytes32","name":"elem1","type":"bytes32"},{"internalType":"bytes32","name":"elem2","type":"bytes32"},{"internalType":"bytes32","name":"elem3","type":"bytes32"},{"internalType":"bytes32","name":"elem4","type":"bytes32"},{"internalType":"bytes32","name":"elem5","type":"bytes32"},{"internalType":"bytes32","name":"elem6","type":"bytes32"},{"internalType":"bytes32","name":"elem7","type":"bytes32"},{"internalType":"bytes32","name":"elem8","type":"bytes32"},{"internalType":"bytes12","name":"elem9","type":"bytes12"}],"internalType":"struct T0","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"participants","outputs":[{"components":[{"internalType":"enum _enum_T2","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"},{"internalType":"address payable","name":"elem1","type":"address"}],"internalType":"struct T1","name":"_Some","type":"tuple"}],"internalType":"struct T2[10]","name":"","type":"tuple[10]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"wagerDown","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"stateMutability":"payable","type":"receive"}]`,
  Bytecode: `0x60806200210038819003601f8101601f191683016001600160401b0381118482101762000651578392829160405283398101036101c08112620006f5576040519160a083016001600160401b0381118482101762000651576040528051835260208101516001600160a01b0381168103620006f55760208401526101408092603f190112620006f557604051918083016001600160401b03811184821017620006515760405260408201518352606082015160208401526080820151604084015260a0820151606084015260c0820151608084015260e082015160a084015261010082015160c084015261012082015160e08401528101516101008301526101608101519160018060a01b031983168303620006f5576101a09261012082015260408401526101808101516060840152015160808201526000805543600355600061010060405162000151816200074f565b8281528260208201528260408201528260608201528260808201528260a08201526200017c62000788565b60c08201526200018b6200082f565b60e0820152015260405190620001a1826200076c565b620001ab620007e6565b8252620001b76200082f565b602083015260ff6004541662000736577f89165a8b771a23d3f3b9c71dd0aea681c811dddc68fb1facde3e3acc475773876101e06040513381528351602082015260018060a01b0360208501511660408201526200021e6040850151606083019062000878565b60608401516101a082015260808401516101c0820152a18051801590811562000729575b5015620007105760608101516103e8810190818111620006fa578110620006f5573403620006dc5760008080806103e860018060a01b0360208701511682f115620006d0578151600090819052825160209081019190915282518184018051919091528351815183015283518151604090810191909152845182516060015284518251608001528451825160a001528451825160c001528451825160e00152845182516101000152845191516101200191909152519262000303846200074f565b600084526000828501526200031762000788565b60408501526000606085015260006080850152600060a0850152600060c0850152620003426200082f565b60e085015260806101008501936000855233865260018060a01b03848201511684870152604081015160408701526060810151606087015201516080850152600060a0850152600060c0850152015160e08301524390526040518060e081011060018060401b0360e08301111762000651578060e060c092016040526000815260006020820152620003d362000788565b60408201526000606082015260006080820152600060a0820152620003f76200082f565b8282015260e060018060a01b038451169384835260018060a01b0360208201511660208401526040810151604084015260608101516060840152608081015160808401528381015160a084015201518282015260036000554360015560405192602084015260018060a01b036020820151166040840152620004826040820151606085019062000878565b60608101516101a084015260808101516101c084015260a08101516101e08401520151600061020083015b600a821062000667576106e084528361070081016001600160401b03811182821017620006515760405280516001600160401b0381116200065157600254600181811c9116801562000646575b60208210146200063057601f8111620005c6575b50602091601f82116001146200055c5791819260009262000550575b50508160011b916000199060031b1c1916176002555b60405161181c9081620008e48239f35b0151905082806200052a565b601f19821692600260005260206000209160005b858110620005ad5750836001951062000593575b505050811b0160025562000540565b015160001960f88460031b161c1916905582808062000584565b9192602060018192868501518155019401920162000570565b60026000527f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace601f830160051c8101916020841062000625575b601f0160051c01905b8181106200061857506200050e565b6000815560010162000609565b909150819062000600565b634e487b7160e01b600052602260045260246000fd5b90607f1690620004fa565b634e487b7160e01b600052604160045260246000fd5b82518051906002821015620006ba5782604060809260209460019652848101511515858401520151848060a01b03815116604083015283858060a01b0391015116606082015201930191019091620004ad565b634e487b7160e01b600052602160045260246000fd5b6040513d6000823e3d90fd5b60405163100960cb60e01b8152600e6004820152602490fd5b600080fd5b634e487b7160e01b600052601160045260246000fd5b60405163100960cb60e01b8152600d6004820152602490fd5b9050600154143862000242565b60405163100960cb60e01b8152600c6004820152602490fd5b61012081019081106001600160401b038211176200065157604052565b604081019081106001600160401b038211176200065157604052565b6040519061014082016001600160401b038111838210176200065157604052816101206000918281528260208201528260408201528260608201528260808201528260a08201528260c08201528260e0820152826101008201520152565b60405190606082016001600160401b038111838210176200065157604052816000815260006020820152604080519162000820836200076c565b60008352600060208401520152565b604051906101408083016001600160401b0381118482101762000651576040528260005b8281106200086057505050565b6020906200086d620007e6565b818401520162000853565b805182526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e08301526101008082015190830152610120908160018060a01b03199101511691015256fe6080604081815260048036101561001e575b505050361561001c57005b005b600092833560e01c9081631e93b0f1146106395750806329dcb0cf146105eb57806352b3db8f146104ce5780636aef8ef11461048e5780636ba24022146104245780636c4470fb146103895780636c6973311461030f57806383230757146102f0578063ab53f2c614610284578063ae8647df146101e9578063aecca2e0146101745763d7032d06036100115781600319360112610170576001600160a01b03929035838116919082900361016d57602435918483168093036101695761015e906100e7610953565b9283918651906100f68261075f565b6020988997888401928452825288519161010f8361075f565b895161011a8161075f565b858152858a820152835281898401946101316109a6565b865251168351525116878251015282825152518682510152610151610a04565b9182525185820152610c81565b015115159051908152f35b5080fd5b80fd5b8280fd5b508290346101695781600319360112610169576003610191610953565b9254036101d2576020608084846101a66107c7565b80516001600160a01b039186916101c4919081018301908301610a3e565b015116928391015251908152f35b602490600784519163100960cb60e01b8352820152fd5b508160031936011261017057359182151580930361016d57819061015e61020e610953565b8092845161021b8161075f565b60209788820190825260243581528651906102358261075f565b87516102408161075f565b848152848b8201528252898201926102566109a6565b84525115158251525189825101526001825152518682510152610277610a04565b9182525187820152610c81565b50503461016957816003193601126101695781546102a06107c7565b91805193849283526020828185015284518093850152815b8381106102d957505060608094508284010152601f80199101168101030190f35b8086018201518782016060015286945081016102b8565b5050346101695781600319360112610169576020906001549051908152f35b5082903461016957816003193601126101695761032a61087c565b506003610335610953565b9254036103725761014060c06103708585816103616103526107c7565b60208082518301019101610a3e565b015193849101525180926106ba565bf35b602490600984519163100960cb60e01b8352820152fd5b508290346101695781600319360112610169576103a461090f565b506103ad610953565b90600383540361040d575060e0926103c36107c7565b9160c06103da602094858082518301019101610a3e565b01519401849052519291835b600a82106103f45761050085f35b826104026001928651610670565b9401910190926103e6565b602490600a85519163100960cb60e01b8352820152fd5b508290346101695781600319360112610169576003610441610953565b9254036104775760206101008484606061046a61045c6107c7565b868082518301019101610a3e565b0151928391015251908152f35b602490600b84519163100960cb60e01b8352820152fd5b50508160031936011261016957606060209261015e6104ab610953565b80926104b5610a04565b8781019060028251525115158682510152610277610a04565b50919060e0366003190112610169576104e5610953565b928151906104f28261075f565b8035825260c03660231901126105d05782519060808201906001600160401b038211838310176105d85750835260243560038110156105c8578152826043193601126105d05782516105438161075f565b6001600160a01b0360443581811681036105d457825260643590811681036105cc5760208201526020820152826083193601126105d05782516105858161075f565b60843580151581036105cc57815260a43560208201528382015260c43580151581036105c85791816105c293606060209894015286820152610c81565b51908152f35b8480fd5b8580fd5b8380fd5b8680fd5b634e487b7160e01b865260419052602485fd5b508290346101695781600319360112610169576003610608610953565b92540361062257602060a08484608061046a61045c6107c7565b602490600884519163100960cb60e01b8352820152fd5b8490346101695781600319360112610169576020906003548152f35b80516001600160a01b03908116835260209182015116910152565b9081519160028310156106a45760406106a091608094845260208101511515602085015201516040830190610655565b0190565b634e487b7160e01b600052602160045260246000fd5b805182526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e08301526101008082015190830152610120908160018060a01b031991015116910152565b90600182811c92168015610755575b602083101461073f57565b634e487b7160e01b600052602260045260246000fd5b91607f1691610734565b604081019081106001600160401b0382111761077a57604052565b634e487b7160e01b600052604160045260246000fd5b606081019081106001600160401b0382111761077a57604052565b61012081019081106001600160401b0382111761077a57604052565b6040519060006002546107d981610725565b80855260019180831690811561085d5750600114610817575b5050829003601f01601f191682016001600160401b0381118382101761077a57604052565b600260009081526020935091836000805160206117d08339815191525b838510610849575050505083010138806107f2565b805488860183015293019284908201610834565b919250506020925060ff191682850152151560051b83010138806107f2565b6040519061014082016001600160401b0381118382101761077a57604052816101206000918281528260208201528260408201528260608201528260808201528260a08201528260c08201528260e0820152826101008201520152565b604051906108e682610790565b81600081526000602082015260408051916109008361075f565b60008352600060208401520152565b604051906101408083016001600160401b0381118482101761077a576040528260005b82811061093e57505050565b6020906109496108d9565b8184015201610932565b60405190610960826107ab565b816101006000918281528260208201528260408201528260608201528260808201528260a082015261099061087c565b60c082015261099d61090f565b60e08201520152565b60405190608082016001600160401b0381118382101761077a576040528160606000918281526040516109d88161075f565b83815283602082015260208201526040516109f28161075f565b83815283602082015260408201520152565b60405190610a118261075f565b81600081526020610a206109a6565b910152565b51906001600160a01b0382168203610a3957565b600080fd5b6106e09181810391838312610a3957604080519490936001600160401b03919060e087018381118882101761077a578652610a7884610a25565b8752602092610a88848601610a25565b848901526101409687603f1980940112610a39578051968888018881108482111761077a57825281870151885260609283880151878a0152608098898901518482015260a08901518582015260c08901518a82015260e089015160a0820152610100808a015160c083015261012090818b015160e08401528c8b0151908301526101608a01519060018060a01b031982168203610a3957820152838c0152610180880151848c01526101a0880151898c01526101c088015160a08c0152816101ff89011215610a39578251998a019081118a82101761077a5782528894870196818811610a39576101e001945b878610610b8d5750505050505050505060c082015290565b858203898112610a3957835190610ba382610790565b87516002811015610a39578252888801518015158103610a3957828a015286018413610a3957899188918551610bd88161075f565b610be3878b01610a25565b8152610bf0888b01610a25565b8482015286820152815201950194610b75565b5160038110156106a45790565b60405190610c1d826107ab565b81610100600091828152826020820152610c3561087c565b60408201528260608201528260808201528260a08201528260c082015261099d61090f565b90600a811015610c6b5760051b0190565b634e487b7160e01b600052603260045260246000fd5b6040519160c083016001600160401b0381118482101761077a5780604052610ca88161075f565b60008152600060e08501528352604051610cc18161075f565b60008152600060208201526020840152610cd96108d9565b6040840152604051610cea8161075f565b60008152600060208201526060840152604051610d068161075f565b60008152600060208201526080840152604051610d228161075f565b600081526000602082015260a084015260ff6004541661179f5760405133815282516020820152602083015180519160038310156106a4576060610100927fe8aa810f1587470aec42d7e63c52ad8192b910f8e44127f952b8a086987e0f81946040840152610d98602082015183850190610655565b602060408201518051151560a0860152015160c08401520151151560e0820152a160036000540361178657610dce6103526107c7565b918051801590811561177a575b501561176157610dee6020820151610c03565b60038110156106a4576113275760209081015181015184528201516001600160a01b0316330361130e57600a60a083015110156112f557346112dc5760808201514310156112c357825151602084810180516001600160a01b03938416905285518201518151908416908301526040808701805160019052915191518101919091528551805190830151825191851682529093168383015260009391927fe83724cfd6213e1ca8e053f3ce1163bc5fea531b9b733cc0b8443d16084c4c0d9190a17ffc99d3804d4e404470bc79667817ac0434a12cb89b57c0bc9a11028d46c1176e82604051858152a10152610ee2610c10565b9160018060a01b03825116835260018060a01b036020830151166020840152604082015160408401526060820151606084015260808201516080840152600060a084015260a08201516001810181116112ad57806001810110610a395760010160c0840152604060a060c0840151930151910151610f5e61090f565b9260005b600a811061127b57505090610f8291610f7b8285610c5a565b5282610c5a565b5060e08201524361010082015260a08101511561101b5750600080556000600155610fae600254610725565b80610fb65750565b601f8111600114610fc957506000600255565b600260005261100e90601f0160051c6000805160206117d0833981519152017f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acf6117b8565b6000602081208160025555565b6040519091906001600160401b0360e082019081119082111761077a578060e060c09201604052600081526000602082015261105561087c565b60408201526000606082015260006080820152600060a082015261107761090f565b8282015260e060018060a01b038551169485835260018060a01b0360208201511660208401526040810151604084015260608101516060840152608081015160808401528381015160a084015201518282015260036000554360015560405193602085015260018060a01b036020820151166040850152611100604082015160608601906106ba565b60608101516101a085015260808101516101c085015260a08101516101e08501520151600061020084015b600a82106112615750506106e083525061070082016001600160401b0381118382101761077a5760405281516001600160401b03811161077a57611170600254610725565b601f8111611219575b50602092601f82116001146111b657928192936000926111ab575b50508160011b916000199060031b1c191617600255565b015190503880611194565b601f19821693600260005260206000209160005b86811061120157508360019596106111e8575b505050811b01600255565b015160001960f88460031b161c191690553880806111dd565b919260206001819286850151815501940192016111ca565b6002600052611251906000805160206117d0833981519152601f840160051c81019160208510611257575b601f0160051c01906117b8565b38611179565b9091508190611244565b60206112706001928551610670565b93019101909161112b565b6112858183610c5a565b516112908287610c5a565b5261129b8186610c5a565b5060001981146112ad57600101610f62565b634e487b7160e01b600052601160045260246000fd5b60405163100960cb60e01b815260156004820152602490fd5b60405163100960cb60e01b815260146004820152602490fd5b60405163100960cb60e01b815260136004820152602490fd5b60405163100960cb60e01b815260126004820152602490fd5b611338602082959394950151610c03565b60038110156106a4576001036115ea576020908101516040015160608301528301516001600160a01b031633036115d15760608101518051156115c2575060015b156115a9573461159057606081015151156115895760808301514310155b1561157057825160a0820180516001600160a01b03909216909152513060209091015260608101518051156114fe57506000805160206117f0833981519152606060a08301515b60808401819052818401515181516020928301516040805193151584526001600160a01b03928316948401949094521691810191909152a160800151516060830180519093916000918291829182916001600160a01b03168282156114f5575bf1156114e9576000604060c0937fa91eceffb338f57640e15538b3bc1d6adda9893dac3f0daf9d834427d325a17f60208351858152a1015261147e610c10565b9260018060a01b03825116845260018060a01b0360208301511660208501526040820151604085015251606084015260808101516080840152600160a084015260a081015182840152015160e082015261010043910152600080556000600155610fae600254610725565b6040513d6000823e3d90fd5b506108fc61143e565b61151290602060c086015191015190610c5a565b515160028110156106a457600103611555576000805160206117f08339815191526060604061154d60c0870151602084870151015190610c5a565b5101516113de565b6000805160206117f0833981519152606060a08301516113de565b60405163100960cb60e01b815260196004820152602490fd5b6001611397565b60405163100960cb60e01b815260186004820152602490fd5b60405163100960cb60e01b815260176004820152602490fd5b6020015160a084015111611379565b60405163100960cb60e01b815260166004820152602490fd5b6115f8915060200151610c03565b60038110156106a45760021461160c575050565b6020820180519092906001600160a01b0390811633036117485760a082015161172f5734611716577fee67b7f614b91ff061c6dc403b96e7722d7bc7d1c186466659dcabd318d8ad8e6000604051a180825116906000808080606087019586519082821561170d575bf1156114e9576000606060c0957fc791e887f438c04f79063b4b2e8fd1dd22752342e97aadfc4111d54ada59d2436020604051858152a101526116b6610c10565b94818451168652511660208501526040820151604085015251606084015260808101516080840152600160a0840152600082840152015160e082015261010043910152600080556000600155610fae600254610725565b506108fc611675565b60405163100960cb60e01b8152601c6004820152602490fd5b60405163100960cb60e01b8152601b6004820152602490fd5b60405163100960cb60e01b8152601a6004820152602490fd5b60405163100960cb60e01b815260116004820152602490fd5b90506001541438610ddb565b60405163100960cb60e01b815260106004820152602490fd5b60405163100960cb60e01b8152600f6004820152602490fd5b8181106117c3575050565b600081556001016117b856fe405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace5cb5dec175be8d27a73236ff5782772d4dc3b1358215e6f9e1f8343abe740d53a164736f6c6343000810000a`,
  BytecodeLen: 8448,
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
