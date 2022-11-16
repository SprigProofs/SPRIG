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
    announceVerification: [ctc0],
    announceWinner: [ctc0, ctc1, ctc2],
    incorrectContract: [],
    newParticipant: [ctc1, ctc2]
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Data({
    None: ctc1,
    Some: ctc0
    });
  const ctc3 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '300'));
  const ctc4 = stdlib.T_UInt;
  const ctc5 = stdlib.T_Bool;
  const ctc6 = stdlib.T_Contract;
  const ctc7 = stdlib.T_Tuple([ctc0, ctc6]);
  const ctc8 = stdlib.T_Data({
    None: ctc1,
    Some: ctc7
    });
  const ctc9 = stdlib.T_Array(ctc8, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '10'));
  
  const _addressSkeptic = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v1499, v1500, v1501, v1502, v1503, v1504, v1505, v1506, v1509, v1514, v1567, v1568] = svs;
      return (await ((async () => {
        
        
        return v1501;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _addressSprig = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v1499, v1500, v1501, v1502, v1503, v1504, v1505, v1506, v1509, v1514, v1567, v1568] = svs;
      return (await ((async () => {
        
        
        return v1500;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _deadline = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v1499, v1500, v1501, v1502, v1503, v1504, v1505, v1506, v1509, v1514, v1567, v1568] = svs;
      return (await ((async () => {
        
        
        return v1505;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _interaction = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v1499, v1500, v1501, v1502, v1503, v1504, v1505, v1506, v1509, v1514, v1567, v1568] = svs;
      return (await ((async () => {
        
        
        return v1502;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _isBottom = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v1499, v1500, v1501, v1502, v1503, v1504, v1505, v1506, v1509, v1514, v1567, v1568] = svs;
      return (await ((async () => {
        
        
        return v1506;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _participants = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v1499, v1500, v1501, v1502, v1503, v1504, v1505, v1506, v1509, v1514, v1567, v1568] = svs;
      return (await ((async () => {
        
        
        return v1568;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _wagerDown = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v1499, v1500, v1501, v1502, v1503, v1504, v1505, v1506, v1509, v1514, v1567, v1568] = svs;
      return (await ((async () => {
        
        
        return v1504;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _wagerUp = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v1499, v1500, v1501, v1502, v1503, v1504, v1505, v1506, v1509, v1514, v1567, v1568] = svs;
      return (await ((async () => {
        
        
        return v1503;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  return {
    infos: {
      addressSkeptic: {
        decode: _addressSkeptic,
        dom: [],
        rng: ctc2
        },
      addressSprig: {
        decode: _addressSprig,
        dom: [],
        rng: ctc0
        },
      deadline: {
        decode: _deadline,
        dom: [],
        rng: ctc4
        },
      interaction: {
        decode: _interaction,
        dom: [],
        rng: ctc3
        },
      isBottom: {
        decode: _isBottom,
        dom: [],
        rng: ctc5
        },
      participants: {
        decode: _participants,
        dom: [],
        rng: ctc9
        },
      wagerDown: {
        decode: _wagerDown,
        dom: [],
        rng: ctc4
        },
      wagerUp: {
        decode: _wagerUp,
        dom: [],
        rng: ctc4
        }
      },
    views: {
      3: [ctc0, ctc0, ctc2, ctc3, ctc4, ctc4, ctc4, ctc5, ctc4, ctc5, ctc4, ctc9]
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
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Address;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '300'));
  const ctc5 = stdlib.T_Bool;
  const ctc6 = stdlib.T_Contract;
  const ctc7 = stdlib.T_Tuple([ctc1, ctc6]);
  const ctc8 = stdlib.T_Tuple([ctc5]);
  const ctc9 = stdlib.T_Tuple([ctc5, ctc3]);
  const ctc10 = stdlib.T_Tuple([]);
  const ctc11 = stdlib.T_Data({
    Sprig_addParticipant0_347: ctc7,
    Sprig_announceVerification0_347: ctc8,
    Sprig_announceWinner0_347: ctc9,
    Sprig_incorrectContract0_347: ctc10
    });
  
  
  const v1483 = stdlib.protect(ctc2, interact.addressSkeptic, 'for Alice\'s interact field addressSkeptic');
  const v1486 = stdlib.protect(ctc1, interact.addressSprig, 'for Alice\'s interact field addressSprig');
  const v1487 = stdlib.protect(ctc3, interact.deadline, 'for Alice\'s interact field deadline');
  const v1488 = stdlib.protect(ctc4, interact.interaction, 'for Alice\'s interact field interaction');
  const v1489 = stdlib.protect(ctc5, interact.isBottom, 'for Alice\'s interact field isBottom');
  const v1490 = stdlib.protect(ctc3, interact.wagerDown, 'for Alice\'s interact field wagerDown');
  const v1491 = stdlib.protect(ctc3, interact.wagerUp, 'for Alice\'s interact field wagerUp');
  
  const v1494 = stdlib.eq(v1490, stdlib.checkedBigNumberify('./claim.rsh:52:43:decimal', stdlib.UInt_max, '0'));
  const v1496 = v1489 ? v1494 : true;
  stdlib.assert(v1496, {
    at: './claim.rsh:52:11:application',
    fs: ['at ./claim.rsh:44:9:application call to [unknown function] (defined at: ./claim.rsh:44:13:function exp)'],
    msg: null,
    who: 'Alice'
    });
  
  const v1497 = stdlib.safeAdd(v1491, v1490);
  const v1498 = stdlib.safeAdd(v1497, stdlib.checkedBigNumberify('./claim.rsh:3:13:decimal', stdlib.UInt_max, '1000'));
  
  const txn1 = await (ctc.sendrecv({
    args: [v1486, v1483, v1488, v1491, v1490, v1487, v1489],
    evt_cnt: 7,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./claim.rsh:55:5:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc1, ctc2, ctc4, ctc3, ctc3, ctc3, ctc5],
    pay: [v1498, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v1500, v1501, v1502, v1503, v1504, v1505, v1506], secs: v1508, time: v1507, didSend: v55, from: v1499 } = txn1;
      
      const v1509 = stdlib.safeAdd(v1503, v1504);
      const v1510 = stdlib.safeAdd(v1509, stdlib.checkedBigNumberify('./claim.rsh:3:13:decimal', stdlib.UInt_max, '1000'));
      sim_r.txns.push({
        amt: v1510,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v1514 = v1506 ? false : true;
      sim_r.txns.push({
        kind: 'from',
        to: v1500,
        tok: undefined /* Nothing */
        });
      const v1523 = ['None', null];
      const v1543 = [v1523, v1523, v1523, v1523, v1523, v1523, v1523, v1523, v1523, v1523];
      const v1566 = false;
      const v1567 = stdlib.checkedBigNumberify('./claim.rsh:70:29:decimal', stdlib.UInt_max, '0');
      const v1568 = v1543;
      const v1569 = v1507;
      
      if (await (async () => {
        const v1728 = v1566 ? false : true;
        
        return v1728;})()) {
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
    tys: [ctc1, ctc2, ctc4, ctc3, ctc3, ctc3, ctc5],
    waitIfNotPresent: false
    }));
  const {data: [v1500, v1501, v1502, v1503, v1504, v1505, v1506], secs: v1508, time: v1507, didSend: v55, from: v1499 } = txn1;
  const v1509 = stdlib.safeAdd(v1503, v1504);
  const v1510 = stdlib.safeAdd(v1509, stdlib.checkedBigNumberify('./claim.rsh:3:13:decimal', stdlib.UInt_max, '1000'));
  ;
  const v1513 = stdlib.eq(v1504, stdlib.checkedBigNumberify('./claim.rsh:57:42:decimal', stdlib.UInt_max, '0'));
  const v1514 = v1506 ? false : true;
  const v1515 = v1506 ? v1513 : true;
  stdlib.assert(v1515, {
    at: './claim.rsh:57:10:application',
    fs: [],
    msg: null,
    who: 'Alice'
    });
  ;
  const v1523 = ['None', null];
  const v1543 = [v1523, v1523, v1523, v1523, v1523, v1523, v1523, v1523, v1523, v1523];
  let v1566 = false;
  let v1567 = stdlib.checkedBigNumberify('./claim.rsh:70:29:decimal', stdlib.UInt_max, '0');
  let v1568 = v1543;
  let v1569 = v1507;
  
  let txn2 = txn1;
  while (await (async () => {
    const v1728 = v1566 ? false : true;
    
    return v1728;})()) {
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 2,
      out_tys: [ctc11],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v1881], secs: v1883, time: v1882, didSend: v1153, from: v1880 } = txn3;
    switch (v1881[0]) {
      case 'Sprig_addParticipant0_347': {
        const v1884 = v1881[1];
        undefined /* setApiDetails */;
        const v1891 = stdlib.addressEq(v1880, v1500);
        stdlib.assert(v1891, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./claim.rsh:90:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./claim.rsh:89:53:application call to [unknown function] (defined at: ./claim.rsh:89:53:function exp)', 'at ./claim.rsh:70:19:application call to [unknown function] (defined at: ./claim.rsh:89:53:function exp)', 'at ./claim.rsh:70:19:application call to [unknown function] (defined at: ./claim.rsh:70:19:function exp)'],
          msg: 'You are not Sprig',
          who: 'Alice'
          });
        const v1893 = stdlib.lt(v1567, stdlib.checkedBigNumberify('./claim.rsh:4:25:decimal', stdlib.UInt_max, '10'));
        stdlib.assert(v1893, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./claim.rsh:91:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./claim.rsh:89:53:application call to [unknown function] (defined at: ./claim.rsh:89:53:function exp)', 'at ./claim.rsh:70:19:application call to [unknown function] (defined at: ./claim.rsh:89:53:function exp)', 'at ./claim.rsh:70:19:application call to [unknown function] (defined at: ./claim.rsh:70:19:function exp)'],
          msg: 'Too many participants',
          who: 'Alice'
          });
        stdlib.assert(v1514, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./claim.rsh:92:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./claim.rsh:89:53:application call to [unknown function] (defined at: ./claim.rsh:89:53:function exp)', 'at ./claim.rsh:70:19:application call to [unknown function] (defined at: ./claim.rsh:89:53:function exp)', 'at ./claim.rsh:70:19:application call to [unknown function] (defined at: ./claim.rsh:70:19:function exp)'],
          msg: 'Cannot challenge a bottom claim',
          who: 'Alice'
          });
        ;
        const v1918 = v1884[stdlib.checkedBigNumberify('./claim.rsh:89:10:spread', stdlib.UInt_max, '0')];
        const v1919 = v1884[stdlib.checkedBigNumberify('./claim.rsh:89:10:spread', stdlib.UInt_max, '1')];
        const v1929 = stdlib.lt(v1882, v1505);
        stdlib.assert(v1929, {
          at: './claim.rsh:94:16:application',
          fs: ['at ./claim.rsh:93:25:application call to [unknown function] (defined at: ./claim.rsh:93:25:function exp)'],
          msg: 'too late to add new participants',
          who: 'Alice'
          });
        const v1930 = [v1918, v1919];
        const v1931 = ['Some', v1930];
        const v1933 = stdlib.Array_set(v1568, v1567, v1931);
        null;
        const v1934 = null;
        await txn3.getOutput('Sprig_addParticipant', 'v1934', ctc0, v1934);
        const v1942 = stdlib.safeAdd(v1567, stdlib.checkedBigNumberify('./claim.rsh:98:46:decimal', stdlib.UInt_max, '1'));
        const cv1566 = false;
        const cv1567 = v1942;
        const cv1568 = v1933;
        const cv1569 = v1882;
        
        v1566 = cv1566;
        v1567 = cv1567;
        v1568 = cv1568;
        v1569 = cv1569;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'Sprig_announceVerification0_347': {
        const v2028 = v1881[1];
        undefined /* setApiDetails */;
        const v2043 = stdlib.addressEq(v1880, v1500);
        stdlib.assert(v2043, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./claim.rsh:118:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./claim.rsh:117:50:application call to [unknown function] (defined at: ./claim.rsh:117:50:function exp)', 'at ./claim.rsh:70:19:application call to [unknown function] (defined at: ./claim.rsh:117:50:function exp)', 'at ./claim.rsh:70:19:application call to [unknown function] (defined at: ./claim.rsh:70:19:function exp)'],
          msg: 'You are not Sprig',
          who: 'Alice'
          });
        stdlib.assert(v1506, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./claim.rsh:119:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./claim.rsh:117:50:application call to [unknown function] (defined at: ./claim.rsh:117:50:function exp)', 'at ./claim.rsh:70:19:application call to [unknown function] (defined at: ./claim.rsh:117:50:function exp)', 'at ./claim.rsh:70:19:application call to [unknown function] (defined at: ./claim.rsh:70:19:function exp)'],
          msg: 'Can only announce formal verification if it is bottom.',
          who: 'Alice'
          });
        ;
        const v2089 = v2028[stdlib.checkedBigNumberify('./claim.rsh:117:10:spread', stdlib.UInt_max, '0')];
        null;
        const v2094 = stdlib.fromSome(v1501, v1499);
        const v2095 = v2089 ? v1499 : v2094;
        ;
        const v2100 = null;
        await txn3.getOutput('Sprig_announceVerification', 'v2100', ctc0, v2100);
        const cv1566 = true;
        const cv1567 = stdlib.checkedBigNumberify('./claim.rsh:124:24:decimal', stdlib.UInt_max, '0');
        const cv1568 = v1568;
        const cv1569 = v1882;
        
        v1566 = cv1566;
        v1567 = cv1567;
        v1568 = cv1568;
        v1569 = cv1569;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'Sprig_announceWinner0_347': {
        const v2172 = v1881[1];
        undefined /* setApiDetails */;
        const v2191 = v2172[stdlib.checkedBigNumberify('./claim.rsh:102:10:spread', stdlib.UInt_max, '0')];
        const v2192 = v2172[stdlib.checkedBigNumberify('./claim.rsh:102:10:spread', stdlib.UInt_max, '1')];
        const v2193 = stdlib.addressEq(v1880, v1500);
        stdlib.assert(v2193, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./claim.rsh:103:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./claim.rsh:102:58:application call to [unknown function] (defined at: ./claim.rsh:102:58:function exp)', 'at ./claim.rsh:70:19:application call to [unknown function] (defined at: ./claim.rsh:102:58:function exp)', 'at ./claim.rsh:70:19:application call to [unknown function] (defined at: ./claim.rsh:70:19:function exp)'],
          msg: 'You are not Sprig',
          who: 'Alice'
          });
        const v2195 = stdlib.lt(v2192, v1567);
        const v2196 = v2191 ? true : v2195;
        stdlib.assert(v2196, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./claim.rsh:104:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./claim.rsh:102:58:application call to [unknown function] (defined at: ./claim.rsh:102:58:function exp)', 'at ./claim.rsh:70:19:application call to [unknown function] (defined at: ./claim.rsh:102:58:function exp)', 'at ./claim.rsh:70:19:application call to [unknown function] (defined at: ./claim.rsh:70:19:function exp)'],
          msg: 'This participant does not exist.',
          who: 'Alice'
          });
        stdlib.assert(v1514, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./claim.rsh:105:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./claim.rsh:102:58:application call to [unknown function] (defined at: ./claim.rsh:102:58:function exp)', 'at ./claim.rsh:70:19:application call to [unknown function] (defined at: ./claim.rsh:102:58:function exp)', 'at ./claim.rsh:70:19:application call to [unknown function] (defined at: ./claim.rsh:70:19:function exp)'],
          msg: 'Can only announce verification.',
          who: 'Alice'
          });
        ;
        const v2265 = stdlib.ge(v1882, v1505);
        const v2267 = v2191 ? v2265 : true;
        stdlib.assert(v2267, {
          at: './claim.rsh:107:16:application',
          fs: ['at ./claim.rsh:106:25:application call to [unknown function] (defined at: ./claim.rsh:106:25:function exp)'],
          msg: 'cannot announce A was right before the end',
          who: 'Alice'
          });
        const v2269 = await ctc.getContractInfo();
        const v2270 = [v1499, v2269];
        const v2272 = v1568[v2192];
        const v2275 = stdlib.fromSome(v2272, v2270);
        const v2268 = v2191 ? v2270 : v2275;
        const v2276 = v2268[stdlib.checkedBigNumberify('./claim.rsh:109:43:array ref', stdlib.UInt_max, '0')];
        const v2277 = v2268[stdlib.checkedBigNumberify('./claim.rsh:109:54:array ref', stdlib.UInt_max, '1')];
        null;
        const v2279 = v2191 ? v1499 : v2276;
        ;
        const v2284 = stdlib.fromSome(v1501, v1499);
        const v2285 = v2191 ? v1499 : v2284;
        ;
        const v2290 = null;
        await txn3.getOutput('Sprig_announceWinner', 'v2290', ctc0, v2290);
        const cv1566 = true;
        const cv1567 = v1567;
        const cv1568 = v1568;
        const cv1569 = v1882;
        
        v1566 = cv1566;
        v1567 = cv1567;
        v1568 = cv1568;
        v1569 = cv1569;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'Sprig_incorrectContract0_347': {
        const v2316 = v1881[1];
        undefined /* setApiDetails */;
        const v2345 = stdlib.addressEq(v1880, v1500);
        stdlib.assert(v2345, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./claim.rsh:79:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./claim.rsh:78:39:application call to [unknown function] (defined at: ./claim.rsh:78:39:function exp)', 'at ./claim.rsh:70:19:application call to [unknown function] (defined at: ./claim.rsh:78:39:function exp)', 'at ./claim.rsh:70:19:application call to [unknown function] (defined at: ./claim.rsh:70:19:function exp)'],
          msg: 'You are not Sprig',
          who: 'Alice'
          });
        const v2347 = stdlib.eq(v1567, stdlib.checkedBigNumberify('./claim.rsh:80:35:decimal', stdlib.UInt_max, '0'));
        stdlib.assert(v2347, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./claim.rsh:80:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./claim.rsh:78:39:application call to [unknown function] (defined at: ./claim.rsh:78:39:function exp)', 'at ./claim.rsh:70:19:application call to [unknown function] (defined at: ./claim.rsh:78:39:function exp)', 'at ./claim.rsh:70:19:application call to [unknown function] (defined at: ./claim.rsh:70:19:function exp)'],
          msg: 'Debate has already begun',
          who: 'Alice'
          });
        ;
        null;
        ;
        const v2453 = null;
        await txn3.getOutput('Sprig_incorrectContract', 'v2453', ctc0, v2453);
        const cv1566 = true;
        const cv1567 = stdlib.checkedBigNumberify('./claim.rsh:85:24:decimal', stdlib.UInt_max, '0');
        const cv1568 = v1568;
        const cv1569 = v1882;
        
        v1566 = cv1566;
        v1567 = cv1567;
        v1568 = cv1568;
        v1569 = cv1569;
        
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
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Data({
    None: ctc1,
    Some: ctc0
    });
  const ctc3 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '300'));
  const ctc4 = stdlib.T_UInt;
  const ctc5 = stdlib.T_Bool;
  const ctc6 = stdlib.T_Contract;
  const ctc7 = stdlib.T_Tuple([ctc0, ctc6]);
  const ctc8 = stdlib.T_Data({
    None: ctc1,
    Some: ctc7
    });
  const ctc9 = stdlib.T_Array(ctc8, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '10'));
  const ctc10 = stdlib.T_Tuple([ctc5]);
  const ctc11 = stdlib.T_Tuple([ctc5, ctc4]);
  const ctc12 = stdlib.T_Tuple([]);
  const ctc13 = stdlib.T_Data({
    Sprig_addParticipant0_347: ctc7,
    Sprig_announceVerification0_347: ctc10,
    Sprig_announceWinner0_347: ctc11,
    Sprig_incorrectContract0_347: ctc12
    });
  
  
  const [v1499, v1500, v1501, v1502, v1503, v1504, v1505, v1506, v1509, v1514, v1567, v1568] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc0, ctc0, ctc2, ctc3, ctc4, ctc4, ctc4, ctc5, ctc4, ctc5, ctc4, ctc9]);
  const v1791 = ctc.selfAddress();
  const v1793 = stdlib.protect(ctc7, await interact.in(), {
    at: './claim.rsh:1:23:application',
    fs: ['at ./claim.rsh:89:53:application call to [unknown function] (defined at: ./claim.rsh:89:53:function exp)', 'at ./claim.rsh:70:19:application call to "runSprig_addParticipant0_347" (defined at: ./claim.rsh:89:10:function exp)', 'at ./claim.rsh:70:19:application call to [unknown function] (defined at: ./claim.rsh:70:19:function exp)'],
    msg: 'in',
    who: 'Sprig_addParticipant'
    });
  const v1798 = stdlib.addressEq(v1791, v1500);
  stdlib.assert(v1798, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./claim.rsh:90:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./claim.rsh:89:53:application call to [unknown function] (defined at: ./claim.rsh:89:53:function exp)', 'at ./claim.rsh:70:19:application call to "runSprig_addParticipant0_347" (defined at: ./claim.rsh:89:10:function exp)', 'at ./claim.rsh:70:19:application call to [unknown function] (defined at: ./claim.rsh:70:19:function exp)'],
    msg: 'You are not Sprig',
    who: 'Sprig_addParticipant'
    });
  const v1800 = stdlib.lt(v1567, stdlib.checkedBigNumberify('./claim.rsh:4:25:decimal', stdlib.UInt_max, '10'));
  stdlib.assert(v1800, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./claim.rsh:91:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./claim.rsh:89:53:application call to [unknown function] (defined at: ./claim.rsh:89:53:function exp)', 'at ./claim.rsh:70:19:application call to "runSprig_addParticipant0_347" (defined at: ./claim.rsh:89:10:function exp)', 'at ./claim.rsh:70:19:application call to [unknown function] (defined at: ./claim.rsh:70:19:function exp)'],
    msg: 'Too many participants',
    who: 'Sprig_addParticipant'
    });
  stdlib.assert(v1514, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./claim.rsh:92:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./claim.rsh:89:53:application call to [unknown function] (defined at: ./claim.rsh:89:53:function exp)', 'at ./claim.rsh:70:19:application call to "runSprig_addParticipant0_347" (defined at: ./claim.rsh:89:10:function exp)', 'at ./claim.rsh:70:19:application call to [unknown function] (defined at: ./claim.rsh:70:19:function exp)'],
    msg: 'Cannot challenge a bottom claim',
    who: 'Sprig_addParticipant'
    });
  const v1811 = ['Sprig_addParticipant0_347', v1793];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1499, v1500, v1501, v1502, v1503, v1504, v1505, v1506, v1509, v1514, v1567, v1568, v1811],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc13],
    pay: [stdlib.checkedBigNumberify('./claim.rsh:93:16:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v1881], secs: v1883, time: v1882, didSend: v1153, from: v1880 } = txn1;
      
      switch (v1881[0]) {
        case 'Sprig_addParticipant0_347': {
          const v1884 = v1881[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Sprig_addParticipant"
            });
          ;
          const v1918 = v1884[stdlib.checkedBigNumberify('./claim.rsh:89:10:spread', stdlib.UInt_max, '0')];
          const v1919 = v1884[stdlib.checkedBigNumberify('./claim.rsh:89:10:spread', stdlib.UInt_max, '1')];
          const v1930 = [v1918, v1919];
          const v1931 = ['Some', v1930];
          const v1933 = stdlib.Array_set(v1568, v1567, v1931);
          null;
          const v1934 = null;
          const v1935 = await txn1.getOutput('Sprig_addParticipant', 'v1934', ctc1, v1934);
          
          const v1942 = stdlib.safeAdd(v1567, stdlib.checkedBigNumberify('./claim.rsh:98:46:decimal', stdlib.UInt_max, '1'));
          const v3237 = v1942;
          const v3238 = v1933;
          sim_r.isHalt = false;
          
          break;
          }
        case 'Sprig_announceVerification0_347': {
          const v2028 = v1881[1];
          
          break;
          }
        case 'Sprig_announceWinner0_347': {
          const v2172 = v1881[1];
          
          break;
          }
        case 'Sprig_incorrectContract0_347': {
          const v2316 = v1881[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc0, ctc2, ctc3, ctc4, ctc4, ctc4, ctc5, ctc4, ctc5, ctc4, ctc9, ctc13],
    waitIfNotPresent: false
    }));
  const {data: [v1881], secs: v1883, time: v1882, didSend: v1153, from: v1880 } = txn1;
  switch (v1881[0]) {
    case 'Sprig_addParticipant0_347': {
      const v1884 = v1881[1];
      undefined /* setApiDetails */;
      const v1891 = stdlib.addressEq(v1880, v1500);
      stdlib.assert(v1891, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./claim.rsh:90:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./claim.rsh:89:53:application call to [unknown function] (defined at: ./claim.rsh:89:53:function exp)', 'at ./claim.rsh:70:19:application call to [unknown function] (defined at: ./claim.rsh:89:53:function exp)', 'at ./claim.rsh:70:19:application call to [unknown function] (defined at: ./claim.rsh:70:19:function exp)'],
        msg: 'You are not Sprig',
        who: 'Sprig_addParticipant'
        });
      const v1893 = stdlib.lt(v1567, stdlib.checkedBigNumberify('./claim.rsh:4:25:decimal', stdlib.UInt_max, '10'));
      stdlib.assert(v1893, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./claim.rsh:91:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./claim.rsh:89:53:application call to [unknown function] (defined at: ./claim.rsh:89:53:function exp)', 'at ./claim.rsh:70:19:application call to [unknown function] (defined at: ./claim.rsh:89:53:function exp)', 'at ./claim.rsh:70:19:application call to [unknown function] (defined at: ./claim.rsh:70:19:function exp)'],
        msg: 'Too many participants',
        who: 'Sprig_addParticipant'
        });
      stdlib.assert(v1514, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./claim.rsh:92:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./claim.rsh:89:53:application call to [unknown function] (defined at: ./claim.rsh:89:53:function exp)', 'at ./claim.rsh:70:19:application call to [unknown function] (defined at: ./claim.rsh:89:53:function exp)', 'at ./claim.rsh:70:19:application call to [unknown function] (defined at: ./claim.rsh:70:19:function exp)'],
        msg: 'Cannot challenge a bottom claim',
        who: 'Sprig_addParticipant'
        });
      ;
      const v1918 = v1884[stdlib.checkedBigNumberify('./claim.rsh:89:10:spread', stdlib.UInt_max, '0')];
      const v1919 = v1884[stdlib.checkedBigNumberify('./claim.rsh:89:10:spread', stdlib.UInt_max, '1')];
      const v1929 = stdlib.lt(v1882, v1505);
      stdlib.assert(v1929, {
        at: './claim.rsh:94:16:application',
        fs: ['at ./claim.rsh:93:25:application call to [unknown function] (defined at: ./claim.rsh:93:25:function exp)'],
        msg: 'too late to add new participants',
        who: 'Sprig_addParticipant'
        });
      const v1930 = [v1918, v1919];
      const v1931 = ['Some', v1930];
      const v1933 = stdlib.Array_set(v1568, v1567, v1931);
      null;
      const v1934 = null;
      const v1935 = await txn1.getOutput('Sprig_addParticipant', 'v1934', ctc1, v1934);
      if (v1153) {
        stdlib.protect(ctc1, await interact.out(v1884, v1935), {
          at: './claim.rsh:89:11:application',
          fs: ['at ./claim.rsh:89:11:application call to [unknown function] (defined at: ./claim.rsh:89:11:function exp)', 'at ./claim.rsh:97:12:application call to "ret" (defined at: ./claim.rsh:93:25:function exp)', 'at ./claim.rsh:93:25:application call to [unknown function] (defined at: ./claim.rsh:93:25:function exp)'],
          msg: 'out',
          who: 'Sprig_addParticipant'
          });
        }
      else {
        }
      
      const v1942 = stdlib.safeAdd(v1567, stdlib.checkedBigNumberify('./claim.rsh:98:46:decimal', stdlib.UInt_max, '1'));
      const v3237 = v1942;
      const v3238 = v1933;
      return;
      
      break;
      }
    case 'Sprig_announceVerification0_347': {
      const v2028 = v1881[1];
      return;
      break;
      }
    case 'Sprig_announceWinner0_347': {
      const v2172 = v1881[1];
      return;
      break;
      }
    case 'Sprig_incorrectContract0_347': {
      const v2316 = v1881[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Sprig_announceVerification3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Sprig_announceVerification3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Sprig_announceVerification3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Data({
    None: ctc1,
    Some: ctc0
    });
  const ctc3 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '300'));
  const ctc4 = stdlib.T_UInt;
  const ctc5 = stdlib.T_Bool;
  const ctc6 = stdlib.T_Contract;
  const ctc7 = stdlib.T_Tuple([ctc0, ctc6]);
  const ctc8 = stdlib.T_Data({
    None: ctc1,
    Some: ctc7
    });
  const ctc9 = stdlib.T_Array(ctc8, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '10'));
  const ctc10 = stdlib.T_Tuple([ctc5]);
  const ctc11 = stdlib.T_Tuple([ctc5, ctc4]);
  const ctc12 = stdlib.T_Tuple([]);
  const ctc13 = stdlib.T_Data({
    Sprig_addParticipant0_347: ctc7,
    Sprig_announceVerification0_347: ctc10,
    Sprig_announceWinner0_347: ctc11,
    Sprig_incorrectContract0_347: ctc12
    });
  
  
  const [v1499, v1500, v1501, v1502, v1503, v1504, v1505, v1506, v1509, v1514, v1567, v1568] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc0, ctc0, ctc2, ctc3, ctc4, ctc4, ctc4, ctc5, ctc4, ctc5, ctc4, ctc9]);
  const v1836 = ctc.selfAddress();
  const v1838 = stdlib.protect(ctc10, await interact.in(), {
    at: './claim.rsh:1:23:application',
    fs: ['at ./claim.rsh:117:50:application call to [unknown function] (defined at: ./claim.rsh:117:50:function exp)', 'at ./claim.rsh:70:19:application call to "runSprig_announceVerification0_347" (defined at: ./claim.rsh:117:10:function exp)', 'at ./claim.rsh:70:19:application call to [unknown function] (defined at: ./claim.rsh:70:19:function exp)'],
    msg: 'in',
    who: 'Sprig_announceVerification'
    });
  const v1841 = stdlib.addressEq(v1836, v1500);
  stdlib.assert(v1841, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./claim.rsh:118:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./claim.rsh:117:50:application call to [unknown function] (defined at: ./claim.rsh:117:50:function exp)', 'at ./claim.rsh:70:19:application call to "runSprig_announceVerification0_347" (defined at: ./claim.rsh:117:10:function exp)', 'at ./claim.rsh:70:19:application call to [unknown function] (defined at: ./claim.rsh:70:19:function exp)'],
    msg: 'You are not Sprig',
    who: 'Sprig_announceVerification'
    });
  stdlib.assert(v1506, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./claim.rsh:119:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./claim.rsh:117:50:application call to [unknown function] (defined at: ./claim.rsh:117:50:function exp)', 'at ./claim.rsh:70:19:application call to "runSprig_announceVerification0_347" (defined at: ./claim.rsh:117:10:function exp)', 'at ./claim.rsh:70:19:application call to [unknown function] (defined at: ./claim.rsh:70:19:function exp)'],
    msg: 'Can only announce formal verification if it is bottom.',
    who: 'Sprig_announceVerification'
    });
  const v1849 = ['Sprig_announceVerification0_347', v1838];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1499, v1500, v1501, v1502, v1503, v1504, v1505, v1506, v1509, v1514, v1567, v1568, v1849],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc13],
    pay: [stdlib.checkedBigNumberify('./claim.rsh:120:16:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v1881], secs: v1883, time: v1882, didSend: v1153, from: v1880 } = txn1;
      
      switch (v1881[0]) {
        case 'Sprig_addParticipant0_347': {
          const v1884 = v1881[1];
          
          break;
          }
        case 'Sprig_announceVerification0_347': {
          const v2028 = v1881[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Sprig_announceVerification"
            });
          ;
          const v2089 = v2028[stdlib.checkedBigNumberify('./claim.rsh:117:10:spread', stdlib.UInt_max, '0')];
          null;
          const v2094 = stdlib.fromSome(v1501, v1499);
          const v2095 = v2089 ? v1499 : v2094;
          sim_r.txns.push({
            kind: 'from',
            to: v2095,
            tok: undefined /* Nothing */
            });
          const v2100 = null;
          const v2101 = await txn1.getOutput('Sprig_announceVerification', 'v2100', ctc1, v2100);
          
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          
          break;
          }
        case 'Sprig_announceWinner0_347': {
          const v2172 = v1881[1];
          
          break;
          }
        case 'Sprig_incorrectContract0_347': {
          const v2316 = v1881[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc0, ctc2, ctc3, ctc4, ctc4, ctc4, ctc5, ctc4, ctc5, ctc4, ctc9, ctc13],
    waitIfNotPresent: false
    }));
  const {data: [v1881], secs: v1883, time: v1882, didSend: v1153, from: v1880 } = txn1;
  switch (v1881[0]) {
    case 'Sprig_addParticipant0_347': {
      const v1884 = v1881[1];
      return;
      break;
      }
    case 'Sprig_announceVerification0_347': {
      const v2028 = v1881[1];
      undefined /* setApiDetails */;
      const v2043 = stdlib.addressEq(v1880, v1500);
      stdlib.assert(v2043, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./claim.rsh:118:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./claim.rsh:117:50:application call to [unknown function] (defined at: ./claim.rsh:117:50:function exp)', 'at ./claim.rsh:70:19:application call to [unknown function] (defined at: ./claim.rsh:117:50:function exp)', 'at ./claim.rsh:70:19:application call to [unknown function] (defined at: ./claim.rsh:70:19:function exp)'],
        msg: 'You are not Sprig',
        who: 'Sprig_announceVerification'
        });
      stdlib.assert(v1506, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./claim.rsh:119:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./claim.rsh:117:50:application call to [unknown function] (defined at: ./claim.rsh:117:50:function exp)', 'at ./claim.rsh:70:19:application call to [unknown function] (defined at: ./claim.rsh:117:50:function exp)', 'at ./claim.rsh:70:19:application call to [unknown function] (defined at: ./claim.rsh:70:19:function exp)'],
        msg: 'Can only announce formal verification if it is bottom.',
        who: 'Sprig_announceVerification'
        });
      ;
      const v2089 = v2028[stdlib.checkedBigNumberify('./claim.rsh:117:10:spread', stdlib.UInt_max, '0')];
      null;
      const v2094 = stdlib.fromSome(v1501, v1499);
      const v2095 = v2089 ? v1499 : v2094;
      ;
      const v2100 = null;
      const v2101 = await txn1.getOutput('Sprig_announceVerification', 'v2100', ctc1, v2100);
      if (v1153) {
        stdlib.protect(ctc1, await interact.out(v2028, v2101), {
          at: './claim.rsh:117:11:application',
          fs: ['at ./claim.rsh:117:11:application call to [unknown function] (defined at: ./claim.rsh:117:11:function exp)', 'at ./claim.rsh:123:12:application call to "ret" (defined at: ./claim.rsh:120:25:function exp)', 'at ./claim.rsh:120:25:application call to [unknown function] (defined at: ./claim.rsh:120:25:function exp)'],
          msg: 'out',
          who: 'Sprig_announceVerification'
          });
        }
      else {
        }
      
      return;
      
      break;
      }
    case 'Sprig_announceWinner0_347': {
      const v2172 = v1881[1];
      return;
      break;
      }
    case 'Sprig_incorrectContract0_347': {
      const v2316 = v1881[1];
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
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Data({
    None: ctc1,
    Some: ctc0
    });
  const ctc3 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '300'));
  const ctc4 = stdlib.T_UInt;
  const ctc5 = stdlib.T_Bool;
  const ctc6 = stdlib.T_Contract;
  const ctc7 = stdlib.T_Tuple([ctc0, ctc6]);
  const ctc8 = stdlib.T_Data({
    None: ctc1,
    Some: ctc7
    });
  const ctc9 = stdlib.T_Array(ctc8, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '10'));
  const ctc10 = stdlib.T_Tuple([ctc5, ctc4]);
  const ctc11 = stdlib.T_Tuple([ctc5]);
  const ctc12 = stdlib.T_Tuple([]);
  const ctc13 = stdlib.T_Data({
    Sprig_addParticipant0_347: ctc7,
    Sprig_announceVerification0_347: ctc11,
    Sprig_announceWinner0_347: ctc10,
    Sprig_incorrectContract0_347: ctc12
    });
  
  
  const [v1499, v1500, v1501, v1502, v1503, v1504, v1505, v1506, v1509, v1514, v1567, v1568] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc0, ctc0, ctc2, ctc3, ctc4, ctc4, ctc4, ctc5, ctc4, ctc5, ctc4, ctc9]);
  const v1813 = ctc.selfAddress();
  const v1815 = stdlib.protect(ctc10, await interact.in(), {
    at: './claim.rsh:1:23:application',
    fs: ['at ./claim.rsh:102:58:application call to [unknown function] (defined at: ./claim.rsh:102:58:function exp)', 'at ./claim.rsh:70:19:application call to "runSprig_announceWinner0_347" (defined at: ./claim.rsh:102:10:function exp)', 'at ./claim.rsh:70:19:application call to [unknown function] (defined at: ./claim.rsh:70:19:function exp)'],
    msg: 'in',
    who: 'Sprig_announceWinner'
    });
  const v1816 = v1815[stdlib.checkedBigNumberify('./claim.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v1817 = v1815[stdlib.checkedBigNumberify('./claim.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v1820 = stdlib.addressEq(v1813, v1500);
  stdlib.assert(v1820, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./claim.rsh:103:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./claim.rsh:102:58:application call to [unknown function] (defined at: ./claim.rsh:102:58:function exp)', 'at ./claim.rsh:70:19:application call to "runSprig_announceWinner0_347" (defined at: ./claim.rsh:102:10:function exp)', 'at ./claim.rsh:70:19:application call to [unknown function] (defined at: ./claim.rsh:70:19:function exp)'],
    msg: 'You are not Sprig',
    who: 'Sprig_announceWinner'
    });
  const v1822 = stdlib.lt(v1817, v1567);
  const v1823 = v1816 ? true : v1822;
  stdlib.assert(v1823, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./claim.rsh:104:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./claim.rsh:102:58:application call to [unknown function] (defined at: ./claim.rsh:102:58:function exp)', 'at ./claim.rsh:70:19:application call to "runSprig_announceWinner0_347" (defined at: ./claim.rsh:102:10:function exp)', 'at ./claim.rsh:70:19:application call to [unknown function] (defined at: ./claim.rsh:70:19:function exp)'],
    msg: 'This participant does not exist.',
    who: 'Sprig_announceWinner'
    });
  stdlib.assert(v1514, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./claim.rsh:105:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./claim.rsh:102:58:application call to [unknown function] (defined at: ./claim.rsh:102:58:function exp)', 'at ./claim.rsh:70:19:application call to "runSprig_announceWinner0_347" (defined at: ./claim.rsh:102:10:function exp)', 'at ./claim.rsh:70:19:application call to [unknown function] (defined at: ./claim.rsh:70:19:function exp)'],
    msg: 'Can only announce verification.',
    who: 'Sprig_announceWinner'
    });
  const v1834 = ['Sprig_announceWinner0_347', v1815];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1499, v1500, v1501, v1502, v1503, v1504, v1505, v1506, v1509, v1514, v1567, v1568, v1834],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc13],
    pay: [stdlib.checkedBigNumberify('./claim.rsh:106:16:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v1881], secs: v1883, time: v1882, didSend: v1153, from: v1880 } = txn1;
      
      switch (v1881[0]) {
        case 'Sprig_addParticipant0_347': {
          const v1884 = v1881[1];
          
          break;
          }
        case 'Sprig_announceVerification0_347': {
          const v2028 = v1881[1];
          
          break;
          }
        case 'Sprig_announceWinner0_347': {
          const v2172 = v1881[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Sprig_announceWinner"
            });
          const v2191 = v2172[stdlib.checkedBigNumberify('./claim.rsh:102:10:spread', stdlib.UInt_max, '0')];
          const v2192 = v2172[stdlib.checkedBigNumberify('./claim.rsh:102:10:spread', stdlib.UInt_max, '1')];
          ;
          const v2269 = await ctc.getContractInfo();
          const v2270 = [v1499, v2269];
          const v2272 = v1568[v2192];
          const v2275 = stdlib.fromSome(v2272, v2270);
          const v2268 = v2191 ? v2270 : v2275;
          const v2276 = v2268[stdlib.checkedBigNumberify('./claim.rsh:109:43:array ref', stdlib.UInt_max, '0')];
          const v2277 = v2268[stdlib.checkedBigNumberify('./claim.rsh:109:54:array ref', stdlib.UInt_max, '1')];
          null;
          const v2279 = v2191 ? v1499 : v2276;
          sim_r.txns.push({
            kind: 'from',
            to: v2279,
            tok: undefined /* Nothing */
            });
          const v2284 = stdlib.fromSome(v1501, v1499);
          const v2285 = v2191 ? v1499 : v2284;
          sim_r.txns.push({
            kind: 'from',
            to: v2285,
            tok: undefined /* Nothing */
            });
          const v2290 = null;
          const v2291 = await txn1.getOutput('Sprig_announceWinner', 'v2290', ctc1, v2290);
          
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          
          break;
          }
        case 'Sprig_incorrectContract0_347': {
          const v2316 = v1881[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc0, ctc2, ctc3, ctc4, ctc4, ctc4, ctc5, ctc4, ctc5, ctc4, ctc9, ctc13],
    waitIfNotPresent: false
    }));
  const {data: [v1881], secs: v1883, time: v1882, didSend: v1153, from: v1880 } = txn1;
  switch (v1881[0]) {
    case 'Sprig_addParticipant0_347': {
      const v1884 = v1881[1];
      return;
      break;
      }
    case 'Sprig_announceVerification0_347': {
      const v2028 = v1881[1];
      return;
      break;
      }
    case 'Sprig_announceWinner0_347': {
      const v2172 = v1881[1];
      undefined /* setApiDetails */;
      const v2191 = v2172[stdlib.checkedBigNumberify('./claim.rsh:102:10:spread', stdlib.UInt_max, '0')];
      const v2192 = v2172[stdlib.checkedBigNumberify('./claim.rsh:102:10:spread', stdlib.UInt_max, '1')];
      const v2193 = stdlib.addressEq(v1880, v1500);
      stdlib.assert(v2193, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./claim.rsh:103:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./claim.rsh:102:58:application call to [unknown function] (defined at: ./claim.rsh:102:58:function exp)', 'at ./claim.rsh:70:19:application call to [unknown function] (defined at: ./claim.rsh:102:58:function exp)', 'at ./claim.rsh:70:19:application call to [unknown function] (defined at: ./claim.rsh:70:19:function exp)'],
        msg: 'You are not Sprig',
        who: 'Sprig_announceWinner'
        });
      const v2195 = stdlib.lt(v2192, v1567);
      const v2196 = v2191 ? true : v2195;
      stdlib.assert(v2196, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./claim.rsh:104:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./claim.rsh:102:58:application call to [unknown function] (defined at: ./claim.rsh:102:58:function exp)', 'at ./claim.rsh:70:19:application call to [unknown function] (defined at: ./claim.rsh:102:58:function exp)', 'at ./claim.rsh:70:19:application call to [unknown function] (defined at: ./claim.rsh:70:19:function exp)'],
        msg: 'This participant does not exist.',
        who: 'Sprig_announceWinner'
        });
      stdlib.assert(v1514, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./claim.rsh:105:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./claim.rsh:102:58:application call to [unknown function] (defined at: ./claim.rsh:102:58:function exp)', 'at ./claim.rsh:70:19:application call to [unknown function] (defined at: ./claim.rsh:102:58:function exp)', 'at ./claim.rsh:70:19:application call to [unknown function] (defined at: ./claim.rsh:70:19:function exp)'],
        msg: 'Can only announce verification.',
        who: 'Sprig_announceWinner'
        });
      ;
      const v2265 = stdlib.ge(v1882, v1505);
      const v2267 = v2191 ? v2265 : true;
      stdlib.assert(v2267, {
        at: './claim.rsh:107:16:application',
        fs: ['at ./claim.rsh:106:25:application call to [unknown function] (defined at: ./claim.rsh:106:25:function exp)'],
        msg: 'cannot announce A was right before the end',
        who: 'Sprig_announceWinner'
        });
      const v2269 = await ctc.getContractInfo();
      const v2270 = [v1499, v2269];
      const v2272 = v1568[v2192];
      const v2275 = stdlib.fromSome(v2272, v2270);
      const v2268 = v2191 ? v2270 : v2275;
      const v2276 = v2268[stdlib.checkedBigNumberify('./claim.rsh:109:43:array ref', stdlib.UInt_max, '0')];
      const v2277 = v2268[stdlib.checkedBigNumberify('./claim.rsh:109:54:array ref', stdlib.UInt_max, '1')];
      null;
      const v2279 = v2191 ? v1499 : v2276;
      ;
      const v2284 = stdlib.fromSome(v1501, v1499);
      const v2285 = v2191 ? v1499 : v2284;
      ;
      const v2290 = null;
      const v2291 = await txn1.getOutput('Sprig_announceWinner', 'v2290', ctc1, v2290);
      if (v1153) {
        stdlib.protect(ctc1, await interact.out(v2172, v2291), {
          at: './claim.rsh:102:11:application',
          fs: ['at ./claim.rsh:102:11:application call to [unknown function] (defined at: ./claim.rsh:102:11:function exp)', 'at ./claim.rsh:112:12:application call to "ret" (defined at: ./claim.rsh:106:25:function exp)', 'at ./claim.rsh:106:25:application call to [unknown function] (defined at: ./claim.rsh:106:25:function exp)'],
          msg: 'out',
          who: 'Sprig_announceWinner'
          });
        }
      else {
        }
      
      return;
      
      break;
      }
    case 'Sprig_incorrectContract0_347': {
      const v2316 = v1881[1];
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
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Data({
    None: ctc1,
    Some: ctc0
    });
  const ctc3 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '300'));
  const ctc4 = stdlib.T_UInt;
  const ctc5 = stdlib.T_Bool;
  const ctc6 = stdlib.T_Contract;
  const ctc7 = stdlib.T_Tuple([ctc0, ctc6]);
  const ctc8 = stdlib.T_Data({
    None: ctc1,
    Some: ctc7
    });
  const ctc9 = stdlib.T_Array(ctc8, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '10'));
  const ctc10 = stdlib.T_Tuple([]);
  const ctc11 = stdlib.T_Tuple([ctc5]);
  const ctc12 = stdlib.T_Tuple([ctc5, ctc4]);
  const ctc13 = stdlib.T_Data({
    Sprig_addParticipant0_347: ctc7,
    Sprig_announceVerification0_347: ctc11,
    Sprig_announceWinner0_347: ctc12,
    Sprig_incorrectContract0_347: ctc10
    });
  
  
  const [v1499, v1500, v1501, v1502, v1503, v1504, v1505, v1506, v1509, v1514, v1567, v1568] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc0, ctc0, ctc2, ctc3, ctc4, ctc4, ctc4, ctc5, ctc4, ctc5, ctc4, ctc9]);
  const v1779 = ctc.selfAddress();
  const v1781 = stdlib.protect(ctc10, await interact.in(), {
    at: './claim.rsh:1:23:application',
    fs: ['at ./claim.rsh:78:39:application call to [unknown function] (defined at: ./claim.rsh:78:39:function exp)', 'at ./claim.rsh:70:19:application call to "runSprig_incorrectContract0_347" (defined at: ./claim.rsh:78:10:function exp)', 'at ./claim.rsh:70:19:application call to [unknown function] (defined at: ./claim.rsh:70:19:function exp)'],
    msg: 'in',
    who: 'Sprig_incorrectContract'
    });
  const v1782 = stdlib.addressEq(v1779, v1500);
  stdlib.assert(v1782, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./claim.rsh:79:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./claim.rsh:78:39:application call to [unknown function] (defined at: ./claim.rsh:78:39:function exp)', 'at ./claim.rsh:70:19:application call to "runSprig_incorrectContract0_347" (defined at: ./claim.rsh:78:10:function exp)', 'at ./claim.rsh:70:19:application call to [unknown function] (defined at: ./claim.rsh:70:19:function exp)'],
    msg: 'You are not Sprig',
    who: 'Sprig_incorrectContract'
    });
  const v1784 = stdlib.eq(v1567, stdlib.checkedBigNumberify('./claim.rsh:80:35:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v1784, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./claim.rsh:80:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./claim.rsh:78:39:application call to [unknown function] (defined at: ./claim.rsh:78:39:function exp)', 'at ./claim.rsh:70:19:application call to "runSprig_incorrectContract0_347" (defined at: ./claim.rsh:78:10:function exp)', 'at ./claim.rsh:70:19:application call to [unknown function] (defined at: ./claim.rsh:70:19:function exp)'],
    msg: 'Debate has already begun',
    who: 'Sprig_incorrectContract'
    });
  const v1789 = ['Sprig_incorrectContract0_347', v1781];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1499, v1500, v1501, v1502, v1503, v1504, v1505, v1506, v1509, v1514, v1567, v1568, v1789],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc13],
    pay: [stdlib.checkedBigNumberify('./claim.rsh:81:16:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v1881], secs: v1883, time: v1882, didSend: v1153, from: v1880 } = txn1;
      
      switch (v1881[0]) {
        case 'Sprig_addParticipant0_347': {
          const v1884 = v1881[1];
          
          break;
          }
        case 'Sprig_announceVerification0_347': {
          const v2028 = v1881[1];
          
          break;
          }
        case 'Sprig_announceWinner0_347': {
          const v2172 = v1881[1];
          
          break;
          }
        case 'Sprig_incorrectContract0_347': {
          const v2316 = v1881[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Sprig_incorrectContract"
            });
          ;
          null;
          sim_r.txns.push({
            kind: 'from',
            to: v1499,
            tok: undefined /* Nothing */
            });
          const v2453 = null;
          const v2454 = await txn1.getOutput('Sprig_incorrectContract', 'v2453', ctc1, v2453);
          
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
    tys: [ctc0, ctc0, ctc2, ctc3, ctc4, ctc4, ctc4, ctc5, ctc4, ctc5, ctc4, ctc9, ctc13],
    waitIfNotPresent: false
    }));
  const {data: [v1881], secs: v1883, time: v1882, didSend: v1153, from: v1880 } = txn1;
  switch (v1881[0]) {
    case 'Sprig_addParticipant0_347': {
      const v1884 = v1881[1];
      return;
      break;
      }
    case 'Sprig_announceVerification0_347': {
      const v2028 = v1881[1];
      return;
      break;
      }
    case 'Sprig_announceWinner0_347': {
      const v2172 = v1881[1];
      return;
      break;
      }
    case 'Sprig_incorrectContract0_347': {
      const v2316 = v1881[1];
      undefined /* setApiDetails */;
      const v2345 = stdlib.addressEq(v1880, v1500);
      stdlib.assert(v2345, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./claim.rsh:79:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./claim.rsh:78:39:application call to [unknown function] (defined at: ./claim.rsh:78:39:function exp)', 'at ./claim.rsh:70:19:application call to [unknown function] (defined at: ./claim.rsh:78:39:function exp)', 'at ./claim.rsh:70:19:application call to [unknown function] (defined at: ./claim.rsh:70:19:function exp)'],
        msg: 'You are not Sprig',
        who: 'Sprig_incorrectContract'
        });
      const v2347 = stdlib.eq(v1567, stdlib.checkedBigNumberify('./claim.rsh:80:35:decimal', stdlib.UInt_max, '0'));
      stdlib.assert(v2347, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./claim.rsh:80:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./claim.rsh:78:39:application call to [unknown function] (defined at: ./claim.rsh:78:39:function exp)', 'at ./claim.rsh:70:19:application call to [unknown function] (defined at: ./claim.rsh:78:39:function exp)', 'at ./claim.rsh:70:19:application call to [unknown function] (defined at: ./claim.rsh:70:19:function exp)'],
        msg: 'Debate has already begun',
        who: 'Sprig_incorrectContract'
        });
      ;
      null;
      ;
      const v2453 = null;
      const v2454 = await txn1.getOutput('Sprig_incorrectContract', 'v2453', ctc1, v2453);
      if (v1153) {
        stdlib.protect(ctc1, await interact.out(v2316, v2454), {
          at: './claim.rsh:78:11:application',
          fs: ['at ./claim.rsh:78:11:application call to [unknown function] (defined at: ./claim.rsh:78:11:function exp)', 'at ./claim.rsh:84:12:application call to "ret" (defined at: ./claim.rsh:81:25:function exp)', 'at ./claim.rsh:81:25:application call to [unknown function] (defined at: ./claim.rsh:81:25:function exp)'],
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
export async function Sprig_announceVerification(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Sprig_announceVerification expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Sprig_announceVerification expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _Sprig_announceVerification3(ctcTop, interact);}
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
    impure: [`Sprig_addParticipant(address,uint64)byte[0]`, `Sprig_announceVerification(byte)byte[0]`, `Sprig_announceWinner(byte,uint64)byte[0]`, `Sprig_incorrectContract()byte[0]`],
    pure: [`addressSkeptic()(byte,byte[32])`, `addressSprig()address`, `deadline()uint64`, `interaction()byte[300]`, `isBottom()byte`, `participants()(byte,byte[40])[10]`, `wagerDown()uint64`, `wagerUp()uint64`],
    sigs: [`Sprig_addParticipant(address,uint64)byte[0]`, `Sprig_announceVerification(byte)byte[0]`, `Sprig_announceWinner(byte,uint64)byte[0]`, `Sprig_incorrectContract()byte[0]`, `addressSkeptic()(byte,byte[32])`, `addressSprig()address`, `deadline()uint64`, `interaction()byte[300]`, `isBottom()byte`, `participants()(byte,byte[40])[10]`, `wagerDown()uint64`, `wagerUp()uint64`]
    },
  GlobalNumByteSlice: 8,
  GlobalNumUint: 0,
  LocalNumByteSlice: 0,
  LocalNumUint: 0,
  appApproval: `ByAcAAEDCCmsAgJ/t+foyAf70v6PCung39YN0sS1gQ7R9afRB6+bmv4JpQNh7YCPnwLn8du3Asvh+60DnQOVA6HAv1Ddwa+UAo0DtwOaA/0C6AcmCAEBAQABAgEDAQQBBQEGACI1ADEYQQalJwdkSSJbNQElWzUCNhoAF0lBAgkiNQQjNQZJIQgMQADmSSEJDEAATUkhCgxAADNJIQsMQAAUIQsSRDYaATYaAlA1/yk0/1BCAeshChJENhoBNhoCUDX/KjT/UIEfr1BCAdMhCRJEJwc1/ys0/1CBKK9QQgHASSEMDEAAXkkhDQxAACwhDRJENAEkEkQpZChkUCpkUCtkUCcEZFAnBWRQJwZkUEk1AyEOI1g1B0IF7iEMEkQ0ASQSRClkKGRQKmRQK2RQJwRkUCcFZFAnBmRQSTUDVyAgNQdCBcMhCBJENAEkEkQpZChkUCpkUCtkUCcEZFAnBWRQJwZkUEk1AyEPIQVYNQdCBZZJIRAMQAB6SSERDEAAR0khEgxAABQhEhJENhoBNf8oNP9QgSevUEIBBSEREkQ0ASQSRClkKGRQKmRQK2RQJwRkUCcFZFAnBmRQSTUDIRMlWDUHQgVBIRASRDQBJBJEKWQoZFAqZFArZFAnBGRQJwVkUCcGZFBJNQMhFCVYNQdCBRVJIRUMQABgSSEWDEAALCEWEkQ0ASQSRClkKGRQKmRQK2RQJwRkUCcFZFAnBmRQSTUDIRclWDUHQgTbIRUSRDQBJBJEKWQoZFAqZFArZFAnBGRQJwVkUCcGZFBJNQMhGCEZWDUHQgSugbCumAISRDQBJBJEKWQoZFAqZFArZFAnBGRQJwVkUCcGZFBJNQNXQCE1B0IEgDYaAhc1BDYaAzYaARdJIQYMQAKyIQYSRCQ0ARJENARJIhJMNAISEUQpZChkUCpkUCtkUCcEZFAnBWRQJwZkUEk1A0lKSkpKSlcAIDX/VyAgNf5XQCE1/SEPIQVYNfwhF1s1+yEUWzX6IRNbNfkhDiNYFzX4gaYDWzX3ga4DI1gXNfaBrwNbNfUhGCEZWDX0STUFNfOABPxbZsc081CwNPMiVUkhBgxAAS9JJAxAAFEkEkQxADT+EkQ09SISRIAEiHfGILCxIrIBNPeyCCOyEDT/sgezgAgAAAAAAAAJlbAnBzUHNP80/jT9NPw0+zT6NPk0+DT3NPYjIjT0MgZCAplINPNXAQk18jTyVwABFzXxNPIjWzXwMQA0/hJENPE08DT1DBFENPZENPEUMgY0+Q8RRDT/MRgWUEk17zT0IQQ08AshBFhJNe1XASg07SJVTTTvNPFNSTXuVwAgNe2ABHz5fw408RZRBwhQNO1QNO5XIAhQsLEisgE0+rIII7IQNO00/zTxTbIHs7EisgE0+7III7IQNP80/Uk17FcBIDTsIlVNNP808U2yB7OACAAAAAAAAAjysCcHNQc0/zT+NP00/DT7NPo0+TT4NPc09iM09TT0MgZCAcFJIwxAAHJINPNXAQE18jEANP4SRDT4RDTyFzXxgARpgW3JNPEWUQcIULCxIrIBNPuyCCOyEDT/NP1JNfBXASA08CJVTTT/NPFNsgezgAgAAAAAAAAINLAnBzUHNP80/jT9NPw0+zT6NPk0+DT3NPYjIjT0MgZCAUlINPNXASg18jEANP4SRDT1gQoMRDT2RDTyVwAgNfE08oEgWzXwMgY0+QxEgASGERlsNPFQNPAWULCACAAAAAAAAAeOsCcHNQc0/zT+NP00/DT7NPo0+TT4NPc09iI09SMINPQ09SEECyg08TTwFlBQXTIGQgDTIhJEgaCNBogB1SI0ARJENARJIhJMNAISEURJNQVJSkpJVwAgNf9XICE1/oFBIQVYNf2B7QJbNfyB9QJbNfshGls1+oGFAyNYFzX5gARd1UwENP9QNP5QNP1QNPwWUDT7FlA0+hZQNPkWUQcIULA0/DT7CDX4NPghGwiIAWI0+RQ0+yISEUSxIrIBIRuyCCOyEDT/sgezIQSvNfcxADT/NP40/TT8NPs0+jT5NPg0+RQiIjT3SVA091A091A091A091A091A091A091A091AyBkIAADX/Nf41/TX8Nfs1+jX5Nfg19zX2NfU19DXzNfI0/EEAA0IAejTyNPNQNPRQNPVQNPYWUDT3FlA0+BZQNPkWUQcIUDT6FlA0+xZRBwhQNP0WUDT+UClLAVcAf2coSwFXf39nKksBV/5/ZytLASEaIQdYZycESwGB/AMhB1hnJwVLAYH7BCEHWGcnBksBgfoFgVdYZ0gkNQEyBjUCQgAcMRmBBRJEsSKyASKyCCOyEDIJsgkyCrIHs0IABTEZIhJEJwc0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSMIMgQSRDEWEkQjQzEZIhJEQv/fIjE0EkQlMTUSRCIxNhJEIjE3EkQiNQEiNQJC/640AElKIwg1ADgHMgoSRDgQIxJEOAgSRIk=`,
  appClear: `Bw==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 7,
  stateSize: 849,
  unsupported: [],
  version: 11,
  warnings: []
  };
const _ETH = {
  ABI: `[{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"address payable","name":"elem1","type":"address"},{"components":[{"internalType":"enum _enum_T0","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"internalType":"address payable","name":"_Some","type":"address"}],"internalType":"struct T0","name":"elem2","type":"tuple"},{"components":[{"internalType":"bytes32","name":"elem0","type":"bytes32"},{"internalType":"bytes32","name":"elem1","type":"bytes32"},{"internalType":"bytes32","name":"elem2","type":"bytes32"},{"internalType":"bytes32","name":"elem3","type":"bytes32"},{"internalType":"bytes32","name":"elem4","type":"bytes32"},{"internalType":"bytes32","name":"elem5","type":"bytes32"},{"internalType":"bytes32","name":"elem6","type":"bytes32"},{"internalType":"bytes32","name":"elem7","type":"bytes32"},{"internalType":"bytes32","name":"elem8","type":"bytes32"},{"internalType":"bytes12","name":"elem9","type":"bytes12"}],"internalType":"struct T1","name":"elem3","type":"tuple"},{"internalType":"uint256","name":"elem4","type":"uint256"},{"internalType":"uint256","name":"elem5","type":"uint256"},{"internalType":"uint256","name":"elem6","type":"uint256"},{"internalType":"bool","name":"elem7","type":"bool"}],"internalType":"struct T11","name":"v3354","type":"tuple"}],"stateMutability":"payable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"msg","type":"uint256"}],"name":"ReachError","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"address payable","name":"elem1","type":"address"},{"components":[{"internalType":"enum _enum_T0","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"internalType":"address payable","name":"_Some","type":"address"}],"internalType":"struct T0","name":"elem2","type":"tuple"},{"components":[{"internalType":"bytes32","name":"elem0","type":"bytes32"},{"internalType":"bytes32","name":"elem1","type":"bytes32"},{"internalType":"bytes32","name":"elem2","type":"bytes32"},{"internalType":"bytes32","name":"elem3","type":"bytes32"},{"internalType":"bytes32","name":"elem4","type":"bytes32"},{"internalType":"bytes32","name":"elem5","type":"bytes32"},{"internalType":"bytes32","name":"elem6","type":"bytes32"},{"internalType":"bytes32","name":"elem7","type":"bytes32"},{"internalType":"bytes32","name":"elem8","type":"bytes32"},{"internalType":"bytes12","name":"elem9","type":"bytes12"}],"internalType":"struct T1","name":"elem3","type":"tuple"},{"internalType":"uint256","name":"elem4","type":"uint256"},{"internalType":"uint256","name":"elem5","type":"uint256"},{"internalType":"uint256","name":"elem6","type":"uint256"},{"internalType":"bool","name":"elem7","type":"bool"}],"indexed":false,"internalType":"struct T11","name":"_a","type":"tuple"}],"name":"_reach_e0","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T8","name":"which","type":"uint8"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"},{"internalType":"address payable","name":"elem1","type":"address"}],"internalType":"struct T2","name":"_Sprig_addParticipant0_347","type":"tuple"},{"components":[{"internalType":"bool","name":"elem0","type":"bool"}],"internalType":"struct T7","name":"_Sprig_announceVerification0_347","type":"tuple"},{"components":[{"internalType":"bool","name":"elem0","type":"bool"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T5","name":"_Sprig_announceWinner0_347","type":"tuple"},{"internalType":"bool","name":"_Sprig_incorrectContract0_347","type":"bool"}],"internalType":"struct T8","name":"elem1","type":"tuple"}],"indexed":false,"internalType":"struct T9","name":"_a","type":"tuple"}],"name":"_reach_e2","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v1934","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v2100","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v2290","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v2453","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"announceVerification","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"},{"indexed":false,"internalType":"address payable","name":"v1","type":"address"},{"indexed":false,"internalType":"address payable","name":"v2","type":"address"}],"name":"announceWinner","type":"event"},{"anonymous":false,"inputs":[],"name":"incorrectContract","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address payable","name":"v0","type":"address"},{"indexed":false,"internalType":"address payable","name":"v1","type":"address"}],"name":"newParticipant","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[{"internalType":"address payable","name":"v3332","type":"address"},{"internalType":"address payable","name":"v3333","type":"address"}],"name":"Sprig_addParticipant","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"bool","name":"v3338","type":"bool"}],"name":"Sprig_announceVerification","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"bool","name":"v3343","type":"bool"},{"internalType":"uint256","name":"v3344","type":"uint256"}],"name":"Sprig_announceWinner","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"Sprig_incorrectContract","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"_reachCreationTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentState","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T8","name":"which","type":"uint8"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"},{"internalType":"address payable","name":"elem1","type":"address"}],"internalType":"struct T2","name":"_Sprig_addParticipant0_347","type":"tuple"},{"components":[{"internalType":"bool","name":"elem0","type":"bool"}],"internalType":"struct T7","name":"_Sprig_announceVerification0_347","type":"tuple"},{"components":[{"internalType":"bool","name":"elem0","type":"bool"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T5","name":"_Sprig_announceWinner0_347","type":"tuple"},{"internalType":"bool","name":"_Sprig_incorrectContract0_347","type":"bool"}],"internalType":"struct T8","name":"elem1","type":"tuple"}],"internalType":"struct T9","name":"v3360","type":"tuple"}],"name":"_reachp_2","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"addressSkeptic","outputs":[{"components":[{"internalType":"enum _enum_T0","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"internalType":"address payable","name":"_Some","type":"address"}],"internalType":"struct T0","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"addressSprig","outputs":[{"internalType":"address payable","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"deadline","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"interaction","outputs":[{"components":[{"internalType":"bytes32","name":"elem0","type":"bytes32"},{"internalType":"bytes32","name":"elem1","type":"bytes32"},{"internalType":"bytes32","name":"elem2","type":"bytes32"},{"internalType":"bytes32","name":"elem3","type":"bytes32"},{"internalType":"bytes32","name":"elem4","type":"bytes32"},{"internalType":"bytes32","name":"elem5","type":"bytes32"},{"internalType":"bytes32","name":"elem6","type":"bytes32"},{"internalType":"bytes32","name":"elem7","type":"bytes32"},{"internalType":"bytes32","name":"elem8","type":"bytes32"},{"internalType":"bytes12","name":"elem9","type":"bytes12"}],"internalType":"struct T1","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"isBottom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"participants","outputs":[{"components":[{"internalType":"enum _enum_T3","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"},{"internalType":"address payable","name":"elem1","type":"address"}],"internalType":"struct T2","name":"_Some","type":"tuple"}],"internalType":"struct T3[10]","name":"","type":"tuple[10]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"wagerDown","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"wagerUp","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"stateMutability":"payable","type":"receive"}]`,
  Bytecode: `0x62002b6638819003906080601f8301601f1916810191906001600160401b038311908310176200088857829160405260803961026081126200093d576040519061010082016001600160401b03811183821017620008885760405260805182526200006b60a0620009b3565b60208301526060603f198201126200093d57604051906200008c8262000997565b60c0519160028310156200093d5791825261014091620000ad60e0620009c8565b6020820152620000bf610100620009b3565b60408201526040840152609f1901126200093d5760405161014081016001600160401b038111828210176200088857604090815261012051825261014051602083015261016051908201526101805160608201526101a05160808201526101c05160a08201526101e05160c08201526102005160e082015261022051610100820152610240516001600160a01b0319811681036200093d5761012082015260608201526102605160808201526102805160a08201526102a05160c08201526200018a6102c0620009c8565b60e082015260008055436003556040516001600160401b036101a08201908111908211176200088857610180816101a060009301604052828152826020820152826040820152826060820152826080820152620001e6620009d6565b60a08201528260c08201528260e082015262000201620009f7565b610100820152826101208201526200021862000ab3565b61014082015282610160820152015260405190620002368262000997565b600082526200024462000a55565b60208301526200025362000ab3565b604083015260ff600454166200097e577f9a303432f3a937b45f67c892d450cff4f62176d1591d927becefe6e29ef1b1f16102806040513381528351602082015260018060a01b036020850151166040820152620002ba6040850151606083019062000b1d565b620002ce606085015160c083019062000b4c565b608084015161020082015260a084015161022082015260c084015161024082015260e08401511515610260820152a18051801590811562000971575b50156200095857608081015160a0820151810190818111620009425781106200093d578083526103e8810190818111620009425781106200093d573403620009245760e0810151156200091c5760a0810151155b15620009035760008080806103e860018060a01b0360208701511682f115620008f75760208281018051600090819052815183015280516040808601805192909252825182519094019390935281518151840152815181516060015281518151608001528151815160a001528151815160c001528151815160e0015281518151610100015290519051610120015251916001600160401b036101c0840190811190841117620008885760e06040926101c085018452600085526000602086015262000428620009d6565b8486015262000436620009f7565b606086015260006080860152600060a0860152600060c086015260008286015260006101008601526000610120860152600061014086015260006101608601526200048062000ab3565b61018086015260006101a086015233855260018060a01b0360208201511660208601528381015184860152606081015160608601526080810151608086015260a081015160a086015260c081015160c086015281810151151582860152825161010086015201511515600014620008ef5760005b1515610120840152600061014084015260006101608401520151610180820152436101a08201526040518061018081011060018060401b03610180830111176200088857806101806101609201604052600081526000602082015262000559620009d6565b604082015262000568620009f7565b606082015260006080820152600060a0820152600060c0820152600060e0820152600061010082015260006101208201526000610140820152620005ab62000ab3565b8282015261018060018060a01b038451169384835260018060a01b03602082015116602084015260408101516040840152606081015160608401526080810151608084015260a081015160a084015260c081015160c084015260e0810151151560e084015261010081015161010084015261012081015115156101208401528381015161014084015201518282015260036000554360015560405192602084015260018060a01b036020820151166040840152620006726040820151606085019062000b1d565b62000686606082015160c085019062000b4c565b608081015161020084015260a081015161022084015260c081015161024084015260e0810151151561026084015261010081015161028084015261012081015115156102a08401526101408101516102c0840152015160006102e083015b600a82106200089e576107c08452836107e081016001600160401b03811182821017620008885760405280516001600160401b0381116200088857600254600181811c911680156200087d575b60208210146200086757601f8111620007fd575b50602091601f8211600114620007935791819260009262000787575b50508160011b916000199060031b1c1916176002555b604051611fae908162000bb88239f35b01519050828062000761565b601f19821692600260005260206000209160005b858110620007e457508360019510620007ca575b505050811b0160025562000777565b015160001960f88460031b161c19169055828080620007bb565b91926020600181928685015181550194019201620007a7565b60026000527f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace601f830160051c810191602084106200085c575b601f0160051c01905b8181106200084f575062000745565b6000815560010162000840565b909150819062000837565b634e487b7160e01b600052602260045260246000fd5b90607f169062000731565b634e487b7160e01b600052604160045260246000fd5b60206080600192604086518051620008b68162000afc565b8352848101511515858401520151848060a01b03815116604083015283858060a01b0391015116606082015201930191019091620006e4565b6001620004f4565b6040513d6000823e3d90fd5b60405163100960cb60e01b815260126004820152602490fd5b60016200035e565b60405163100960cb60e01b815260116004820152602490fd5b600080fd5b634e487b7160e01b600052601160045260246000fd5b60405163100960cb60e01b815260106004820152602490fd5b905060015414386200030a565b60405163100960cb60e01b8152600f6004820152602490fd5b606081019081106001600160401b038211176200088857604052565b51906001600160a01b03821682036200093d57565b519081151582036200093d57565b60405190620009e58262000997565b60006040838281528260208201520152565b6040519061014082016001600160401b038111838210176200088857604052816101206000918281528260208201528260408201528260608201528260808201528260a08201528260c08201528260e0820152826101008201520152565b6040519062000a648262000997565b6000808352602083018190526040805191849183016001600160401b0381118482101762000a9f579060409291835280845260208401520152565b634e487b7160e01b82526041600452602482fd5b604051906101408083016001600160401b0381118482101762000888576040528260005b82811062000ae457505050565b60209062000af162000a55565b818401520162000ad7565b6002111562000b0757565b634e487b7160e01b600052602160045260246000fd5b604090805162000b2d8162000afc565b83526020818101511515908401528101516001600160a01b0316910152565b805182526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e08301526101008082015190830152610120908160018060a01b03199101511691015256fe608060409080825260048036101561001f575b505050361561001d57005b005b600091823560e01c9081631e93b0f1146107fe5750806329dcb0cf146107b25780636aef8ef1146107725780636ba24022146107255780636c4470fb1461068a5780636c697331146106215780638323075714610602578063a64cbdde14610597578063aaed29ac14610520578063ab53f2c6146104b4578063ae8647df14610419578063aecca2e0146103a6578063ca4ebc421461034c578063d7032d0614610284578063e1e686f2146101455763f88ed95f03610012573461014157816003193601126101415760036100f2610b7f565b92540361012a576020610120848460e061011b61010d6109d4565b868082518301019101610cb6565b01511515928391015251908152f35b602490600b84519163100960cb60e01b8352820152fd5b5080fd5b50916101003660031901126101415761015c610b7f565b81516101678161096d565b8435815260e036602319011261026d5782519460a086016001600160401b03811187821017610271578452602435908110156102695785528260431936011261026d578251946101b68661096d565b6001600160a01b039560443587811681036102655781526064359687168703610261576020968782015286820152856083193601126102695783516101fa8161099e565b6084358015158103610265578152848201528360a3193601126102695783516102228161096d565b60a435801515810361026557815260c43587820152606082015260e43580151581036102615760808201528582015261025b9190610fc6565b51908152f35b8580fd5b8680fd5b8480fd5b8380fd5b634e487b7160e01b865260418252602486fd5b50829081600319360112610348576001600160a01b03929035838116919082900361034557602435918483168093036101415761033a906102c3610b7f565b9283918651906102d28261096d565b602098899788840192845282528851916102eb8361096d565b89516102f68161096d565b858152858a8201528352818984019461030d610c06565b86525116835152511687825101528282515251868251015261032d610c74565b9182525185820152610fc6565b015115159051908152f35b80fd5b8280fd5b50346101415781600319360112610141576003610367610b7f565b92540361038f5760206101808484608061038261010d6109d4565b0151928391015251908152f35b602490600e84519163100960cb60e01b8352820152fd5b503461014157816003193601126101415760036103c1610b7f565b92540361040257602060c084846103d66109d4565b80516001600160a01b039186916103f4919081018301908301610cb6565b015116928391015251908152f35b602490600884519163100960cb60e01b8352820152fd5b8284806003193601126101415760606104306108f2565b9261033a61043c610b7f565b809285516104498161096d565b602097888201901515825260243581528751906104658261096d565b88516104708161096d565b848152848b820152825289820192610486610c06565b845251151582515251898251015260028251525186825101526104a7610c74565b9182525187820152610fc6565b82843461014157816003193601126101415781546104d06109d4565b91805193849283526020828185015284518093850152815b83811061050957505060608094508284010152601f80199101168101030190f35b8086018201518782016060015286945081016104e8565b5034610141578160031936011261014157610539610a89565b506003610544610b7f565b92540361058057606060a061057e85858161056f6105606109d4565b60208082518301019101610cb6565b01519384910152518092610906565bf35b602490600784519163100960cb60e01b8352820152fd5b82846020366003190112610141578060209261033a6105b46108f2565b6105bc610b7f565b92839185516105ca8161096d565b86516105d58161099e565b8381528152888101916105e6610c06565b83528151901515905260018251525186825101526104a7610c74565b8284346101415781600319360112610141576020906001549051908152f35b503461014157816003193601126101415761063a610aa8565b506003610645610b7f565b9254036106735761014061010061057e858560606106646105606109d4565b01519384910152518092610887565b602490600a84519163100960cb60e01b8352820152fd5b50346101415781600319360112610141576106a3610b3b565b506106ac610b7f565b90600383540361070e5750610140926106c36109d4565b916101606106db602094858082518301019101610cb6565b01519401849052519291835b600a82106106f55761050085f35b826107036001928651610855565b9401910190926106e7565b602490600c85519163100960cb60e01b8352820152fd5b50346101415781600319360112610141576003610740610b7f565b92540361075b576020610160848460a061038261010d6109d4565b602490600d84519163100960cb60e01b8352820152fd5b82848160031936011261014157608060209261033a61078f610b7f565b8092610799610c74565b87810190600382515251151586825101526104a7610c74565b503461014157816003193601126101415760036107cd610b7f565b9254036107e757602060e0848460c061038261010d6109d4565b602490600984519163100960cb60e01b8352820152fd5b8390346101415781600319360112610141576020906003548152f35b6002111561082457565b634e487b7160e01b600052602160045260246000fd5b80516001600160a01b03908116835260209182015116910152565b90610883604060809380516108698161081a565b84526020810151151560208501520151604083019061083a565b0190565b805182526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e08301526101008082015190830152610120908160018060a01b031991015116910152565b60043590811515820361090157565b600080fd5b60409080516109148161081a565b83526020818101511515908401528101516001600160a01b0316910152565b90600182811c92168015610963575b602083101461094d57565b634e487b7160e01b600052602260045260246000fd5b91607f1691610942565b604081019081106001600160401b0382111761098857604052565b634e487b7160e01b600052604160045260246000fd5b602081019081106001600160401b0382111761098857604052565b606081019081106001600160401b0382111761098857604052565b6040519060006002546109e681610933565b808552600191808316908115610a6a5750600114610a24575b5050829003601f01601f191682016001600160401b0381118382101761098857604052565b60026000908152602093509183600080516020611f628339815191525b838510610a56575050505083010138806109ff565b805488860183015293019284908201610a41565b919250506020925060ff191682850152151560051b83010138806109ff565b60405190610a96826109b9565b60006040838281528260208201520152565b6040519061014082016001600160401b0381118382101761098857604052816101206000918281528260208201528260408201528260608201528260808201528260a08201528260c08201528260e0820152826101008201520152565b60405190610b12826109b9565b8160008152600060208201526040805191610b2c8361096d565b60008352600060208401520152565b604051906101408083016001600160401b03811184821017610988576040528260005b828110610b6a57505050565b602090610b75610b05565b8184015201610b5e565b604051906101a082016001600160401b038111838210176109885760405281610180600091828152826020820152826040820152826060820152826080820152610bc7610a89565b60a08201528260c08201528260e0820152610be0610aa8565b61010082015282610120820152610bf5610b3b565b610140820152826101608201520152565b60408051919060a083016001600160401b038111848210176109885781526080836000928382528051610c388161096d565b84815284602082015260208301528051610c518161099e565b8481528183015251610c628161096d565b83815283602082015260608201520152565b60405190610c818261096d565b81600081526020610c90610c06565b910152565b51906001600160a01b038216820361090157565b5190811515820361090157565b90818103906107c090818312610901576040805194610180936001600160401b039391929185880185811189821017610988578352610cf484610c95565b8852602092610d04848601610c95565b848a0152606090603f199282848b011261090157815197610d24896109b9565b828801516002811015610901578952610d3e848901610ca9565b878a0152608098610d508a8a01610c95565b84820152838d0152610140809b609f1901126109015782518b81018181108382111761098857845260a0890151815260c08901518882015260e08901518482015261010090818a01518682015261012091828b01518c8301528d8b015160a08301526101609c8d8c015160c08401528b015160e08301526101a08b0151818301526101c08b01519160018060a01b031983168303610901578f9284820152878301526101e08b01518c8301526102008b015160a08301526102208b015160c0830152610e1f6102408c01610ca9565b60e08301526102608b0151910152610e3a6102808a01610ca9565b908d01526102a08801518b8d0152816102df890112156109015782519a8b019081118b8210176109885782528994870196818811610901576102c001945b878610610e8e5750505050505050505082015290565b85820389811261090157835190610ea4826109b9565b8751600281101561090157859188918452610ec08b8b01610ca9565b8b850152011261090157899188918551610ed98161096d565b610ee4878b01610c95565b8152610ef1888b01610c95565b8482015286820152815201950194610e78565b5160048110156108245790565b604051906101c082016001600160401b0381118382101761098857604052816101a0600091828152826020820152610f47610a89565b6040820152610f54610aa8565b60608201528260808201528260a08201528260c08201528260e082015282610100820152826101208201528261014082015282610160820152610f95610b3b565b6101808201520152565b90600a811015610fb05760051b0190565b634e487b7160e01b600052603260045260246000fd5b6040519160e083016001600160401b038111848210176109885780604052610fed8161096d565b60008152600061010085015283526040516110078161096d565b6000815260006020820152602084015261101f610b05565b60408401526040516110308161099e565b6000815260608401526040516110458161096d565b600081526000602082015260808401526040516110618161096d565b600081526000602082015260a084015260405161107d8161096d565b600081526000602082015260c084015260ff60045416611f31576040513381528251602082015260208301518051916004831015610824576080610120927fc620943c1452fca140c55e18039786e13089a0ad956d116a43ec7053fd0e74889460408401526110f46020820151606085019061083a565b604081015151151560a0840152602060608201518051151560c0860152015160e084015201511515610100820152a1600360005403611f18576111386105606109d4565b9180518015908115611f0c575b5015611ef3576111586020820151610f04565b6004811015610824576117a75760209081015181015184528201516001600160a01b0316330361178e57600a6101408301511015611775576101208201511561175c57346117435760c082015143101561172a57825151602084810180516001600160a01b03938416905285518201518151908416908301526040808701805160019052915191518101919091528551805190830151825191851682529093168383015260009391927fe83724cfd6213e1ca8e053f3ce1163bc5fea531b9b733cc0b8443d16084c4c0d9190a17f426555cc88aa66832f81b1fa34f4832421dd634aa5a9b7ed4729fc0566bb1bce82604051858152a10152611258610f11565b9160018060a01b03825116835260018060a01b03602083015116602084015260408201516040840152606082015160608401526080820151608084015260a082015160a084015260c082015160c084015260e0820151151560e08401526101008201516101008401526101208201511515610120840152600061014084015261014082015160018101811161171457806001810110610901576001016101608401526040610140610160840151930151910151611313610b3b565b9260005b600a81106116e257505090611337916113308285610f9f565b5282610f9f565b50610180820152436101a0820152610140810151156113d25750600080556000600155611365600254610933565b8061136d5750565b601f811160011461138057506000600255565b60026000526113c590601f0160051c600080516020611f62833981519152017f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acf611f4a565b6000602081208160025555565b6040519091906001600160401b0361018082019081119082111761098857806101806101609201604052600081526000602082015261140f610a89565b604082015261141c610aa8565b606082015260006080820152600060a0820152600060c0820152600060e082015260006101008201526000610120820152600061014082015261145d610b3b565b8282015261018060018060a01b038551169485835260018060a01b03602082015116602084015260408101516040840152606081015160608401526080810151608084015260a081015160a084015260c081015160c084015260e0810151151560e084015261010081015161010084015261012081015115156101208401528381015161014084015201518282015260036000554360015560405193602085015260018060a01b03602082015116604085015261152260408201516060860190610906565b611534606082015160c0860190610887565b608081015161020085015260a081015161022085015260c081015161024085015260e0810151151561026085015261010081015161028085015261012081015115156102a08501526101408101516102c0850152015160006102e084015b600a82106116c85750506107c08352506107e082016001600160401b038111838210176109885760405281516001600160401b038111610988576115d7600254610933565b601f8111611680575b50602092601f821160011461161d5792819293600092611612575b50508160011b916000199060031b1c191617600255565b0151905038806115fb565b601f19821693600260005260206000209160005b868110611668575083600195961061164f575b505050811b01600255565b015160001960f88460031b161c19169055388080611644565b91926020600181928685015181550194019201611631565b60026000526116b890600080516020611f62833981519152601f840160051c810191602085106116be575b601f0160051c0190611f4a565b386115e0565b90915081906116ab565b60206116d76001928551610855565b930191019091611592565b6116ec8183610f9f565b516116f78287610f9f565b526117028186610f9f565b50600019811461171457600101611317565b634e487b7160e01b600052601160045260246000fd5b60405163100960cb60e01b8152601a6004820152602490fd5b60405163100960cb60e01b815260196004820152602490fd5b60405163100960cb60e01b815260186004820152602490fd5b60405163100960cb60e01b815260176004820152602490fd5b60405163100960cb60e01b815260166004820152602490fd5b6117b8602082959394950151610f04565b6004811015610824576001036119f9576020908101516040015160608301528301516001600160a01b031633036119e05760e0830151156119c757346119ae57807f3d4eb33e4d2359cd4a519091b0a501d8c8ef06d94641274a49f4f59a9d75b2b86020606080940151511515604051908152a10151511561195d57600080808060018060a01b038651165b60808701519082908215611953575b6001600160a01b031690f1156119475760406000917f978ba7abae59ebbdb0a965a9ecc99eae8b4d36d23fb867d56f0aeb411150a44d60208351858152a1015261189b610f11565b9060018060a01b03815116825260018060a01b03602082015116602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e0810151151560e0830152610100810151610100830152610120810151151561012083015260016101408301526101609060008284015201516101808201526101a043910152600080556000600155611365600254610933565b6040513d6000823e3d90fd5b6108fc9150611853565b60408201600181515161196f8161081a565b6119788161081a565b036119995751604001516000908190819081906001600160a01b0316611844565b50600080808060018060a01b03865116611844565b60405163100960cb60e01b8152601d6004820152602490fd5b60405163100960cb60e01b8152601c6004820152602490fd5b60405163100960cb60e01b8152601b6004820152602490fd5b611a066020820151610f04565b600481101561082457600203611dd8576020908101516060015160808301528301516001600160a01b03163303611dbf576080810151805115611daf575060015b15611d965761012083015115611d7d5734611d645760808101515115611d5d5760c08301514310155b15611d4457825160c0820180516001600160a01b0390921690915251306020909101526080810151805115611cc85750600080516020611f82833981519152606060c08301515b60a0840181905260808401515181516020928301516040805193151584526001600160a01b03928316948401949094521691810191909152a160808101515115611cb057600080808060018060a01b038751165b60a08801519082908215611ca6575b6001600160a01b031690f11561194757608001515115611c5557600080808060018060a01b038651165b60808701519082908215611c4b575b6001600160a01b031690f1156119475760606000917ff385e265334744fb93dacd1baad1a176c6581d4f8a6b10b2ab98137f2f19b66d6020604051858152a10152611b9c610f11565b9060018060a01b03815116825260018060a01b03602082015116602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e0810151151560e0830152610100810151610100830152610120810151151561012083015261014060018184015281015190610160918284015201516101808201526101a043910152600080556000600155611365600254610933565b6108fc9150611b53565b604082016001815151611c678161081a565b611c708161081a565b03611c915751604001516000908190819081906001600160a01b0316611b44565b50600080808060018060a01b03865116611b44565b6108fc9150611b1a565b600080808060018060a01b0360a08601515116611b0b565b6001611ce06101608601926020845191015190610f9f565b5151611ceb8161081a565b611cf48161081a565b03611d285760606040611d20600080516020611f82833981519152935160206080870151015190610f9f565b510151611ab7565b50600080516020611f82833981519152606060c0830151611ab7565b60405163100960cb60e01b815260226004820152602490fd5b6001611a70565b60405163100960cb60e01b815260216004820152602490fd5b60405163100960cb60e01b815260206004820152602490fd5b60405163100960cb60e01b8152601f6004820152602490fd5b6020015161014084015111611a47565b60405163100960cb60e01b8152601e6004820152602490fd5b611de6915060200151610f04565b600481101561082457600314611dfa575050565b60208201516001600160a01b03163303611eda57610140820151611ec35734611eaa577fee67b7f614b91ff061c6dc403b96e7722d7bc7d1c186466659dcabd318d8ad8e6000604051a1600080808060018060a01b0386511661010087015190828215611ea1575bf1156119475760806000917ff4b028585d6d004cef84c96f23a7d14c1d99d3efae4465e5e32c6fe197e700ba6020604051858152a1015261189b610f11565b506108fc611e62565b60405163100960cb60e01b815260256004820152602490fd5b602460405163100960cb60e01b8152816004820152fd5b60405163100960cb60e01b815260236004820152602490fd5b60405163100960cb60e01b815260156004820152602490fd5b90506001541438611145565b60405163100960cb60e01b815260146004820152602490fd5b60405163100960cb60e01b815260136004820152602490fd5b818110611f55575050565b60008155600101611f4a56fe405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace5cb5dec175be8d27a73236ff5782772d4dc3b1358215e6f9e1f8343abe740d53a164736f6c6343000810000a`,
  BytecodeLen: 11110,
  version: 9,
  views: {
    }
  };
export const _stateSourceMap = {
  2: {
    at: './claim.rsh:128:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './claim.rsh:70:19:after expr stmt semicolon',
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
  "Sprig_announceVerification": Sprig_announceVerification,
  "Sprig_announceWinner": Sprig_announceWinner,
  "Sprig_incorrectContract": Sprig_incorrectContract
  };
export const _APIs = {
  Sprig: {
    addParticipant: Sprig_addParticipant,
    announceVerification: Sprig_announceVerification,
    announceWinner: Sprig_announceWinner,
    incorrectContract: Sprig_incorrectContract
    }
  };
