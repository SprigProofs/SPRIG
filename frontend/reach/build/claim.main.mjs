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
  const ctc3 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
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
      const [v1483, v1484, v1485, v1486, v1487, v1488, v1489, v1490, v1493, v1497, v1546, v1547] = svs;
      return (await ((async () => {
        
        
        return v1485;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _addressSprig = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v1483, v1484, v1485, v1486, v1487, v1488, v1489, v1490, v1493, v1497, v1546, v1547] = svs;
      return (await ((async () => {
        
        
        return v1484;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _author = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v1483, v1484, v1485, v1486, v1487, v1488, v1489, v1490, v1493, v1497, v1546, v1547] = svs;
      return (await ((async () => {
        
        
        return v1483;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _deadline = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v1483, v1484, v1485, v1486, v1487, v1488, v1489, v1490, v1493, v1497, v1546, v1547] = svs;
      return (await ((async () => {
        
        
        return v1489;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _interaction = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v1483, v1484, v1485, v1486, v1487, v1488, v1489, v1490, v1493, v1497, v1546, v1547] = svs;
      return (await ((async () => {
        
        
        return v1486;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _isBottom = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v1483, v1484, v1485, v1486, v1487, v1488, v1489, v1490, v1493, v1497, v1546, v1547] = svs;
      return (await ((async () => {
        
        
        return v1490;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _participants = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v1483, v1484, v1485, v1486, v1487, v1488, v1489, v1490, v1493, v1497, v1546, v1547] = svs;
      return (await ((async () => {
        
        
        return v1547;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _wagerDown = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v1483, v1484, v1485, v1486, v1487, v1488, v1489, v1490, v1493, v1497, v1546, v1547] = svs;
      return (await ((async () => {
        
        
        return v1488;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _wagerUp = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v1483, v1484, v1485, v1486, v1487, v1488, v1489, v1490, v1493, v1497, v1546, v1547] = svs;
      return (await ((async () => {
        
        
        return v1487;}))(...args));
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
      author: {
        decode: _author,
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
  const ctc4 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc5 = stdlib.T_Bool;
  const ctc6 = stdlib.T_Contract;
  const ctc7 = stdlib.T_Tuple([ctc1, ctc6]);
  const ctc8 = stdlib.T_Tuple([ctc5]);
  const ctc9 = stdlib.T_Tuple([ctc5, ctc3]);
  const ctc10 = stdlib.T_Tuple([]);
  const ctc11 = stdlib.T_Data({
    Sprig_addParticipant0_341: ctc7,
    Sprig_announceVerification0_341: ctc8,
    Sprig_announceWinner0_341: ctc9,
    Sprig_incorrectContract0_341: ctc10
    });
  
  
  const v1468 = stdlib.protect(ctc2, interact.addressSkeptic, 'for Alice\'s interact field addressSkeptic');
  const v1471 = stdlib.protect(ctc1, interact.addressSprig, 'for Alice\'s interact field addressSprig');
  const v1472 = stdlib.protect(ctc3, interact.deadline, 'for Alice\'s interact field deadline');
  const v1473 = stdlib.protect(ctc4, interact.interaction, 'for Alice\'s interact field interaction');
  const v1474 = stdlib.protect(ctc5, interact.isBottom, 'for Alice\'s interact field isBottom');
  const v1475 = stdlib.protect(ctc3, interact.wagerDown, 'for Alice\'s interact field wagerDown');
  const v1476 = stdlib.protect(ctc3, interact.wagerUp, 'for Alice\'s interact field wagerUp');
  
  const v1479 = stdlib.eq(v1475, stdlib.checkedBigNumberify('./claim.rsh:52:43:decimal', stdlib.UInt_max, '0'));
  const v1481 = v1474 ? v1479 : true;
  stdlib.assert(v1481, {
    at: './claim.rsh:52:11:application',
    fs: ['at ./claim.rsh:44:9:application call to [unknown function] (defined at: ./claim.rsh:44:13:function exp)'],
    msg: null,
    who: 'Alice'
    });
  
  const v1482 = stdlib.safeAdd(v1476, v1475);
  
  const txn1 = await (ctc.sendrecv({
    args: [v1471, v1468, v1473, v1476, v1475, v1472, v1474],
    evt_cnt: 7,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./claim.rsh:55:5:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc1, ctc2, ctc4, ctc3, ctc3, ctc3, ctc5],
    pay: [v1482, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v1484, v1485, v1486, v1487, v1488, v1489, v1490], secs: v1492, time: v1491, didSend: v53, from: v1483 } = txn1;
      
      const v1493 = stdlib.safeAdd(v1487, v1488);
      sim_r.txns.push({
        amt: v1493,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v1497 = v1490 ? false : true;
      const v1502 = ['None', null];
      const v1522 = [v1502, v1502, v1502, v1502, v1502, v1502, v1502, v1502, v1502, v1502];
      const v1545 = false;
      const v1546 = stdlib.checkedBigNumberify('./claim.rsh:70:29:decimal', stdlib.UInt_max, '0');
      const v1547 = v1522;
      const v1548 = v1491;
      
      if (await (async () => {
        const v1707 = v1545 ? false : true;
        
        return v1707;})()) {
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
  const {data: [v1484, v1485, v1486, v1487, v1488, v1489, v1490], secs: v1492, time: v1491, didSend: v53, from: v1483 } = txn1;
  const v1493 = stdlib.safeAdd(v1487, v1488);
  ;
  const v1496 = stdlib.eq(v1488, stdlib.checkedBigNumberify('./claim.rsh:57:42:decimal', stdlib.UInt_max, '0'));
  const v1497 = v1490 ? false : true;
  const v1498 = v1490 ? v1496 : true;
  stdlib.assert(v1498, {
    at: './claim.rsh:57:10:application',
    fs: [],
    msg: null,
    who: 'Alice'
    });
  const v1502 = ['None', null];
  const v1522 = [v1502, v1502, v1502, v1502, v1502, v1502, v1502, v1502, v1502, v1502];
  let v1545 = false;
  let v1546 = stdlib.checkedBigNumberify('./claim.rsh:70:29:decimal', stdlib.UInt_max, '0');
  let v1547 = v1522;
  let v1548 = v1491;
  
  let txn2 = txn1;
  while (await (async () => {
    const v1707 = v1545 ? false : true;
    
    return v1707;})()) {
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 2,
      out_tys: [ctc11],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v1860], secs: v1862, time: v1861, didSend: v1147, from: v1859 } = txn3;
    switch (v1860[0]) {
      case 'Sprig_addParticipant0_341': {
        const v1863 = v1860[1];
        undefined /* setApiDetails */;
        const v1870 = stdlib.addressEq(v1859, v1484);
        stdlib.assert(v1870, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./claim.rsh:90:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./claim.rsh:89:53:application call to [unknown function] (defined at: ./claim.rsh:89:53:function exp)', 'at ./claim.rsh:70:19:application call to [unknown function] (defined at: ./claim.rsh:89:53:function exp)', 'at ./claim.rsh:70:19:application call to [unknown function] (defined at: ./claim.rsh:70:19:function exp)'],
          msg: 'You are not Sprig',
          who: 'Alice'
          });
        const v1872 = stdlib.lt(v1546, stdlib.checkedBigNumberify('./claim.rsh:3:25:decimal', stdlib.UInt_max, '10'));
        stdlib.assert(v1872, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./claim.rsh:91:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./claim.rsh:89:53:application call to [unknown function] (defined at: ./claim.rsh:89:53:function exp)', 'at ./claim.rsh:70:19:application call to [unknown function] (defined at: ./claim.rsh:89:53:function exp)', 'at ./claim.rsh:70:19:application call to [unknown function] (defined at: ./claim.rsh:70:19:function exp)'],
          msg: 'Too many participants',
          who: 'Alice'
          });
        stdlib.assert(v1497, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./claim.rsh:92:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./claim.rsh:89:53:application call to [unknown function] (defined at: ./claim.rsh:89:53:function exp)', 'at ./claim.rsh:70:19:application call to [unknown function] (defined at: ./claim.rsh:89:53:function exp)', 'at ./claim.rsh:70:19:application call to [unknown function] (defined at: ./claim.rsh:70:19:function exp)'],
          msg: 'Cannot challenge a bottom claim',
          who: 'Alice'
          });
        ;
        const v1897 = v1863[stdlib.checkedBigNumberify('./claim.rsh:89:10:spread', stdlib.UInt_max, '0')];
        const v1898 = v1863[stdlib.checkedBigNumberify('./claim.rsh:89:10:spread', stdlib.UInt_max, '1')];
        const v1907 = [v1897, v1898];
        const v1908 = ['Some', v1907];
        const v1910 = stdlib.Array_set(v1547, v1546, v1908);
        null;
        const v1911 = null;
        await txn3.getOutput('Sprig_addParticipant', 'v1911', ctc0, v1911);
        const v1919 = stdlib.safeAdd(v1546, stdlib.checkedBigNumberify('./claim.rsh:97:46:decimal', stdlib.UInt_max, '1'));
        const cv1545 = false;
        const cv1546 = v1919;
        const cv1547 = v1910;
        const cv1548 = v1861;
        
        v1545 = cv1545;
        v1546 = cv1546;
        v1547 = cv1547;
        v1548 = cv1548;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'Sprig_announceVerification0_341': {
        const v2000 = v1860[1];
        undefined /* setApiDetails */;
        const v2015 = stdlib.addressEq(v1859, v1484);
        stdlib.assert(v2015, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./claim.rsh:116:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./claim.rsh:115:50:application call to [unknown function] (defined at: ./claim.rsh:115:50:function exp)', 'at ./claim.rsh:70:19:application call to [unknown function] (defined at: ./claim.rsh:115:50:function exp)', 'at ./claim.rsh:70:19:application call to [unknown function] (defined at: ./claim.rsh:70:19:function exp)'],
          msg: 'You are not Sprig',
          who: 'Alice'
          });
        stdlib.assert(v1490, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./claim.rsh:117:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./claim.rsh:115:50:application call to [unknown function] (defined at: ./claim.rsh:115:50:function exp)', 'at ./claim.rsh:70:19:application call to [unknown function] (defined at: ./claim.rsh:115:50:function exp)', 'at ./claim.rsh:70:19:application call to [unknown function] (defined at: ./claim.rsh:70:19:function exp)'],
          msg: 'Can only announce formal verification if it is bottom.',
          who: 'Alice'
          });
        ;
        const v2059 = v2000[stdlib.checkedBigNumberify('./claim.rsh:115:10:spread', stdlib.UInt_max, '0')];
        null;
        const v2064 = stdlib.fromSome(v1485, v1483);
        const v2065 = v2059 ? v1483 : v2064;
        ;
        const v2070 = null;
        await txn3.getOutput('Sprig_announceVerification', 'v2070', ctc0, v2070);
        const cv1545 = true;
        const cv1546 = stdlib.checkedBigNumberify('./claim.rsh:122:24:decimal', stdlib.UInt_max, '0');
        const cv1547 = v1547;
        const cv1548 = v1861;
        
        v1545 = cv1545;
        v1546 = cv1546;
        v1547 = cv1547;
        v1548 = cv1548;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'Sprig_announceWinner0_341': {
        const v2137 = v1860[1];
        undefined /* setApiDetails */;
        const v2156 = v2137[stdlib.checkedBigNumberify('./claim.rsh:101:10:spread', stdlib.UInt_max, '0')];
        const v2157 = v2137[stdlib.checkedBigNumberify('./claim.rsh:101:10:spread', stdlib.UInt_max, '1')];
        const v2158 = stdlib.addressEq(v1859, v1484);
        stdlib.assert(v2158, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./claim.rsh:102:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./claim.rsh:101:58:application call to [unknown function] (defined at: ./claim.rsh:101:58:function exp)', 'at ./claim.rsh:70:19:application call to [unknown function] (defined at: ./claim.rsh:101:58:function exp)', 'at ./claim.rsh:70:19:application call to [unknown function] (defined at: ./claim.rsh:70:19:function exp)'],
          msg: 'You are not Sprig',
          who: 'Alice'
          });
        const v2160 = stdlib.lt(v2157, v1546);
        const v2161 = v2156 ? true : v2160;
        stdlib.assert(v2161, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./claim.rsh:103:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./claim.rsh:101:58:application call to [unknown function] (defined at: ./claim.rsh:101:58:function exp)', 'at ./claim.rsh:70:19:application call to [unknown function] (defined at: ./claim.rsh:101:58:function exp)', 'at ./claim.rsh:70:19:application call to [unknown function] (defined at: ./claim.rsh:70:19:function exp)'],
          msg: 'This participant does not exist.',
          who: 'Alice'
          });
        stdlib.assert(v1497, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./claim.rsh:104:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./claim.rsh:101:58:application call to [unknown function] (defined at: ./claim.rsh:101:58:function exp)', 'at ./claim.rsh:70:19:application call to [unknown function] (defined at: ./claim.rsh:101:58:function exp)', 'at ./claim.rsh:70:19:application call to [unknown function] (defined at: ./claim.rsh:70:19:function exp)'],
          msg: 'Can only announce verification.',
          who: 'Alice'
          });
        ;
        const v2228 = await ctc.getContractInfo();
        const v2229 = [v1483, v2228];
        const v2231 = v1547[v2157];
        const v2234 = stdlib.fromSome(v2231, v2229);
        const v2227 = v2156 ? v2229 : v2234;
        const v2235 = v2227[stdlib.checkedBigNumberify('./claim.rsh:107:43:array ref', stdlib.UInt_max, '0')];
        const v2236 = v2227[stdlib.checkedBigNumberify('./claim.rsh:107:54:array ref', stdlib.UInt_max, '1')];
        null;
        ;
        const v2242 = stdlib.fromSome(v1485, v1483);
        const v2243 = v2156 ? v1483 : v2242;
        ;
        const v2248 = null;
        await txn3.getOutput('Sprig_announceWinner', 'v2248', ctc0, v2248);
        const cv1545 = true;
        const cv1546 = v1546;
        const cv1547 = v1547;
        const cv1548 = v1861;
        
        v1545 = cv1545;
        v1546 = cv1546;
        v1547 = cv1547;
        v1548 = cv1548;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'Sprig_incorrectContract0_341': {
        const v2274 = v1860[1];
        undefined /* setApiDetails */;
        const v2303 = stdlib.addressEq(v1859, v1484);
        stdlib.assert(v2303, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./claim.rsh:79:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./claim.rsh:78:39:application call to [unknown function] (defined at: ./claim.rsh:78:39:function exp)', 'at ./claim.rsh:70:19:application call to [unknown function] (defined at: ./claim.rsh:78:39:function exp)', 'at ./claim.rsh:70:19:application call to [unknown function] (defined at: ./claim.rsh:70:19:function exp)'],
          msg: 'You are not Sprig',
          who: 'Alice'
          });
        const v2305 = stdlib.eq(v1546, stdlib.checkedBigNumberify('./claim.rsh:80:35:decimal', stdlib.UInt_max, '0'));
        stdlib.assert(v2305, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./claim.rsh:80:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./claim.rsh:78:39:application call to [unknown function] (defined at: ./claim.rsh:78:39:function exp)', 'at ./claim.rsh:70:19:application call to [unknown function] (defined at: ./claim.rsh:78:39:function exp)', 'at ./claim.rsh:70:19:application call to [unknown function] (defined at: ./claim.rsh:70:19:function exp)'],
          msg: 'Debate has already begun',
          who: 'Alice'
          });
        ;
        null;
        ;
        const v2404 = null;
        await txn3.getOutput('Sprig_incorrectContract', 'v2404', ctc0, v2404);
        const cv1545 = true;
        const cv1546 = stdlib.checkedBigNumberify('./claim.rsh:85:24:decimal', stdlib.UInt_max, '0');
        const cv1547 = v1547;
        const cv1548 = v1861;
        
        v1545 = cv1545;
        v1546 = cv1546;
        v1547 = cv1547;
        v1548 = cv1548;
        
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
  const ctc3 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
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
    Sprig_addParticipant0_341: ctc7,
    Sprig_announceVerification0_341: ctc10,
    Sprig_announceWinner0_341: ctc11,
    Sprig_incorrectContract0_341: ctc12
    });
  
  
  const [v1483, v1484, v1485, v1486, v1487, v1488, v1489, v1490, v1493, v1497, v1546, v1547] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc0, ctc0, ctc2, ctc3, ctc4, ctc4, ctc4, ctc5, ctc4, ctc5, ctc4, ctc9]);
  const v1770 = ctc.selfAddress();
  const v1772 = stdlib.protect(ctc7, await interact.in(), {
    at: './claim.rsh:1:23:application',
    fs: ['at ./claim.rsh:89:53:application call to [unknown function] (defined at: ./claim.rsh:89:53:function exp)', 'at ./claim.rsh:70:19:application call to "runSprig_addParticipant0_341" (defined at: ./claim.rsh:89:10:function exp)', 'at ./claim.rsh:70:19:application call to [unknown function] (defined at: ./claim.rsh:70:19:function exp)'],
    msg: 'in',
    who: 'Sprig_addParticipant'
    });
  const v1777 = stdlib.addressEq(v1770, v1484);
  stdlib.assert(v1777, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./claim.rsh:90:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./claim.rsh:89:53:application call to [unknown function] (defined at: ./claim.rsh:89:53:function exp)', 'at ./claim.rsh:70:19:application call to "runSprig_addParticipant0_341" (defined at: ./claim.rsh:89:10:function exp)', 'at ./claim.rsh:70:19:application call to [unknown function] (defined at: ./claim.rsh:70:19:function exp)'],
    msg: 'You are not Sprig',
    who: 'Sprig_addParticipant'
    });
  const v1779 = stdlib.lt(v1546, stdlib.checkedBigNumberify('./claim.rsh:3:25:decimal', stdlib.UInt_max, '10'));
  stdlib.assert(v1779, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./claim.rsh:91:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./claim.rsh:89:53:application call to [unknown function] (defined at: ./claim.rsh:89:53:function exp)', 'at ./claim.rsh:70:19:application call to "runSprig_addParticipant0_341" (defined at: ./claim.rsh:89:10:function exp)', 'at ./claim.rsh:70:19:application call to [unknown function] (defined at: ./claim.rsh:70:19:function exp)'],
    msg: 'Too many participants',
    who: 'Sprig_addParticipant'
    });
  stdlib.assert(v1497, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./claim.rsh:92:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./claim.rsh:89:53:application call to [unknown function] (defined at: ./claim.rsh:89:53:function exp)', 'at ./claim.rsh:70:19:application call to "runSprig_addParticipant0_341" (defined at: ./claim.rsh:89:10:function exp)', 'at ./claim.rsh:70:19:application call to [unknown function] (defined at: ./claim.rsh:70:19:function exp)'],
    msg: 'Cannot challenge a bottom claim',
    who: 'Sprig_addParticipant'
    });
  const v1790 = ['Sprig_addParticipant0_341', v1772];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1483, v1484, v1485, v1486, v1487, v1488, v1489, v1490, v1493, v1497, v1546, v1547, v1790],
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
      
      
      const {data: [v1860], secs: v1862, time: v1861, didSend: v1147, from: v1859 } = txn1;
      
      switch (v1860[0]) {
        case 'Sprig_addParticipant0_341': {
          const v1863 = v1860[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Sprig_addParticipant"
            });
          ;
          const v1897 = v1863[stdlib.checkedBigNumberify('./claim.rsh:89:10:spread', stdlib.UInt_max, '0')];
          const v1898 = v1863[stdlib.checkedBigNumberify('./claim.rsh:89:10:spread', stdlib.UInt_max, '1')];
          const v1907 = [v1897, v1898];
          const v1908 = ['Some', v1907];
          const v1910 = stdlib.Array_set(v1547, v1546, v1908);
          null;
          const v1911 = null;
          const v1912 = await txn1.getOutput('Sprig_addParticipant', 'v1911', ctc1, v1911);
          
          const v1919 = stdlib.safeAdd(v1546, stdlib.checkedBigNumberify('./claim.rsh:97:46:decimal', stdlib.UInt_max, '1'));
          const v3198 = v1919;
          const v3199 = v1910;
          sim_r.isHalt = false;
          
          break;
          }
        case 'Sprig_announceVerification0_341': {
          const v2000 = v1860[1];
          
          break;
          }
        case 'Sprig_announceWinner0_341': {
          const v2137 = v1860[1];
          
          break;
          }
        case 'Sprig_incorrectContract0_341': {
          const v2274 = v1860[1];
          
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
  const {data: [v1860], secs: v1862, time: v1861, didSend: v1147, from: v1859 } = txn1;
  switch (v1860[0]) {
    case 'Sprig_addParticipant0_341': {
      const v1863 = v1860[1];
      undefined /* setApiDetails */;
      const v1870 = stdlib.addressEq(v1859, v1484);
      stdlib.assert(v1870, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./claim.rsh:90:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./claim.rsh:89:53:application call to [unknown function] (defined at: ./claim.rsh:89:53:function exp)', 'at ./claim.rsh:70:19:application call to [unknown function] (defined at: ./claim.rsh:89:53:function exp)', 'at ./claim.rsh:70:19:application call to [unknown function] (defined at: ./claim.rsh:70:19:function exp)'],
        msg: 'You are not Sprig',
        who: 'Sprig_addParticipant'
        });
      const v1872 = stdlib.lt(v1546, stdlib.checkedBigNumberify('./claim.rsh:3:25:decimal', stdlib.UInt_max, '10'));
      stdlib.assert(v1872, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./claim.rsh:91:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./claim.rsh:89:53:application call to [unknown function] (defined at: ./claim.rsh:89:53:function exp)', 'at ./claim.rsh:70:19:application call to [unknown function] (defined at: ./claim.rsh:89:53:function exp)', 'at ./claim.rsh:70:19:application call to [unknown function] (defined at: ./claim.rsh:70:19:function exp)'],
        msg: 'Too many participants',
        who: 'Sprig_addParticipant'
        });
      stdlib.assert(v1497, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./claim.rsh:92:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./claim.rsh:89:53:application call to [unknown function] (defined at: ./claim.rsh:89:53:function exp)', 'at ./claim.rsh:70:19:application call to [unknown function] (defined at: ./claim.rsh:89:53:function exp)', 'at ./claim.rsh:70:19:application call to [unknown function] (defined at: ./claim.rsh:70:19:function exp)'],
        msg: 'Cannot challenge a bottom claim',
        who: 'Sprig_addParticipant'
        });
      ;
      const v1897 = v1863[stdlib.checkedBigNumberify('./claim.rsh:89:10:spread', stdlib.UInt_max, '0')];
      const v1898 = v1863[stdlib.checkedBigNumberify('./claim.rsh:89:10:spread', stdlib.UInt_max, '1')];
      const v1907 = [v1897, v1898];
      const v1908 = ['Some', v1907];
      const v1910 = stdlib.Array_set(v1547, v1546, v1908);
      null;
      const v1911 = null;
      const v1912 = await txn1.getOutput('Sprig_addParticipant', 'v1911', ctc1, v1911);
      if (v1147) {
        stdlib.protect(ctc1, await interact.out(v1863, v1912), {
          at: './claim.rsh:89:11:application',
          fs: ['at ./claim.rsh:89:11:application call to [unknown function] (defined at: ./claim.rsh:89:11:function exp)', 'at ./claim.rsh:96:12:application call to "ret" (defined at: ./claim.rsh:93:25:function exp)', 'at ./claim.rsh:93:25:application call to [unknown function] (defined at: ./claim.rsh:93:25:function exp)'],
          msg: 'out',
          who: 'Sprig_addParticipant'
          });
        }
      else {
        }
      
      const v1919 = stdlib.safeAdd(v1546, stdlib.checkedBigNumberify('./claim.rsh:97:46:decimal', stdlib.UInt_max, '1'));
      const v3198 = v1919;
      const v3199 = v1910;
      return;
      
      break;
      }
    case 'Sprig_announceVerification0_341': {
      const v2000 = v1860[1];
      return;
      break;
      }
    case 'Sprig_announceWinner0_341': {
      const v2137 = v1860[1];
      return;
      break;
      }
    case 'Sprig_incorrectContract0_341': {
      const v2274 = v1860[1];
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
  const ctc3 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
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
    Sprig_addParticipant0_341: ctc7,
    Sprig_announceVerification0_341: ctc10,
    Sprig_announceWinner0_341: ctc11,
    Sprig_incorrectContract0_341: ctc12
    });
  
  
  const [v1483, v1484, v1485, v1486, v1487, v1488, v1489, v1490, v1493, v1497, v1546, v1547] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc0, ctc0, ctc2, ctc3, ctc4, ctc4, ctc4, ctc5, ctc4, ctc5, ctc4, ctc9]);
  const v1815 = ctc.selfAddress();
  const v1817 = stdlib.protect(ctc10, await interact.in(), {
    at: './claim.rsh:1:23:application',
    fs: ['at ./claim.rsh:115:50:application call to [unknown function] (defined at: ./claim.rsh:115:50:function exp)', 'at ./claim.rsh:70:19:application call to "runSprig_announceVerification0_341" (defined at: ./claim.rsh:115:10:function exp)', 'at ./claim.rsh:70:19:application call to [unknown function] (defined at: ./claim.rsh:70:19:function exp)'],
    msg: 'in',
    who: 'Sprig_announceVerification'
    });
  const v1820 = stdlib.addressEq(v1815, v1484);
  stdlib.assert(v1820, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./claim.rsh:116:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./claim.rsh:115:50:application call to [unknown function] (defined at: ./claim.rsh:115:50:function exp)', 'at ./claim.rsh:70:19:application call to "runSprig_announceVerification0_341" (defined at: ./claim.rsh:115:10:function exp)', 'at ./claim.rsh:70:19:application call to [unknown function] (defined at: ./claim.rsh:70:19:function exp)'],
    msg: 'You are not Sprig',
    who: 'Sprig_announceVerification'
    });
  stdlib.assert(v1490, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./claim.rsh:117:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./claim.rsh:115:50:application call to [unknown function] (defined at: ./claim.rsh:115:50:function exp)', 'at ./claim.rsh:70:19:application call to "runSprig_announceVerification0_341" (defined at: ./claim.rsh:115:10:function exp)', 'at ./claim.rsh:70:19:application call to [unknown function] (defined at: ./claim.rsh:70:19:function exp)'],
    msg: 'Can only announce formal verification if it is bottom.',
    who: 'Sprig_announceVerification'
    });
  const v1828 = ['Sprig_announceVerification0_341', v1817];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1483, v1484, v1485, v1486, v1487, v1488, v1489, v1490, v1493, v1497, v1546, v1547, v1828],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc13],
    pay: [stdlib.checkedBigNumberify('./claim.rsh:118:16:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v1860], secs: v1862, time: v1861, didSend: v1147, from: v1859 } = txn1;
      
      switch (v1860[0]) {
        case 'Sprig_addParticipant0_341': {
          const v1863 = v1860[1];
          
          break;
          }
        case 'Sprig_announceVerification0_341': {
          const v2000 = v1860[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Sprig_announceVerification"
            });
          ;
          const v2059 = v2000[stdlib.checkedBigNumberify('./claim.rsh:115:10:spread', stdlib.UInt_max, '0')];
          null;
          const v2064 = stdlib.fromSome(v1485, v1483);
          const v2065 = v2059 ? v1483 : v2064;
          sim_r.txns.push({
            kind: 'from',
            to: v2065,
            tok: undefined /* Nothing */
            });
          const v2070 = null;
          const v2071 = await txn1.getOutput('Sprig_announceVerification', 'v2070', ctc1, v2070);
          
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          
          break;
          }
        case 'Sprig_announceWinner0_341': {
          const v2137 = v1860[1];
          
          break;
          }
        case 'Sprig_incorrectContract0_341': {
          const v2274 = v1860[1];
          
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
  const {data: [v1860], secs: v1862, time: v1861, didSend: v1147, from: v1859 } = txn1;
  switch (v1860[0]) {
    case 'Sprig_addParticipant0_341': {
      const v1863 = v1860[1];
      return;
      break;
      }
    case 'Sprig_announceVerification0_341': {
      const v2000 = v1860[1];
      undefined /* setApiDetails */;
      const v2015 = stdlib.addressEq(v1859, v1484);
      stdlib.assert(v2015, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./claim.rsh:116:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./claim.rsh:115:50:application call to [unknown function] (defined at: ./claim.rsh:115:50:function exp)', 'at ./claim.rsh:70:19:application call to [unknown function] (defined at: ./claim.rsh:115:50:function exp)', 'at ./claim.rsh:70:19:application call to [unknown function] (defined at: ./claim.rsh:70:19:function exp)'],
        msg: 'You are not Sprig',
        who: 'Sprig_announceVerification'
        });
      stdlib.assert(v1490, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./claim.rsh:117:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./claim.rsh:115:50:application call to [unknown function] (defined at: ./claim.rsh:115:50:function exp)', 'at ./claim.rsh:70:19:application call to [unknown function] (defined at: ./claim.rsh:115:50:function exp)', 'at ./claim.rsh:70:19:application call to [unknown function] (defined at: ./claim.rsh:70:19:function exp)'],
        msg: 'Can only announce formal verification if it is bottom.',
        who: 'Sprig_announceVerification'
        });
      ;
      const v2059 = v2000[stdlib.checkedBigNumberify('./claim.rsh:115:10:spread', stdlib.UInt_max, '0')];
      null;
      const v2064 = stdlib.fromSome(v1485, v1483);
      const v2065 = v2059 ? v1483 : v2064;
      ;
      const v2070 = null;
      const v2071 = await txn1.getOutput('Sprig_announceVerification', 'v2070', ctc1, v2070);
      if (v1147) {
        stdlib.protect(ctc1, await interact.out(v2000, v2071), {
          at: './claim.rsh:115:11:application',
          fs: ['at ./claim.rsh:115:11:application call to [unknown function] (defined at: ./claim.rsh:115:11:function exp)', 'at ./claim.rsh:121:12:application call to "ret" (defined at: ./claim.rsh:118:25:function exp)', 'at ./claim.rsh:118:25:application call to [unknown function] (defined at: ./claim.rsh:118:25:function exp)'],
          msg: 'out',
          who: 'Sprig_announceVerification'
          });
        }
      else {
        }
      
      return;
      
      break;
      }
    case 'Sprig_announceWinner0_341': {
      const v2137 = v1860[1];
      return;
      break;
      }
    case 'Sprig_incorrectContract0_341': {
      const v2274 = v1860[1];
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
  const ctc3 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
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
    Sprig_addParticipant0_341: ctc7,
    Sprig_announceVerification0_341: ctc11,
    Sprig_announceWinner0_341: ctc10,
    Sprig_incorrectContract0_341: ctc12
    });
  
  
  const [v1483, v1484, v1485, v1486, v1487, v1488, v1489, v1490, v1493, v1497, v1546, v1547] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc0, ctc0, ctc2, ctc3, ctc4, ctc4, ctc4, ctc5, ctc4, ctc5, ctc4, ctc9]);
  const v1792 = ctc.selfAddress();
  const v1794 = stdlib.protect(ctc10, await interact.in(), {
    at: './claim.rsh:1:23:application',
    fs: ['at ./claim.rsh:101:58:application call to [unknown function] (defined at: ./claim.rsh:101:58:function exp)', 'at ./claim.rsh:70:19:application call to "runSprig_announceWinner0_341" (defined at: ./claim.rsh:101:10:function exp)', 'at ./claim.rsh:70:19:application call to [unknown function] (defined at: ./claim.rsh:70:19:function exp)'],
    msg: 'in',
    who: 'Sprig_announceWinner'
    });
  const v1795 = v1794[stdlib.checkedBigNumberify('./claim.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v1796 = v1794[stdlib.checkedBigNumberify('./claim.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v1799 = stdlib.addressEq(v1792, v1484);
  stdlib.assert(v1799, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./claim.rsh:102:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./claim.rsh:101:58:application call to [unknown function] (defined at: ./claim.rsh:101:58:function exp)', 'at ./claim.rsh:70:19:application call to "runSprig_announceWinner0_341" (defined at: ./claim.rsh:101:10:function exp)', 'at ./claim.rsh:70:19:application call to [unknown function] (defined at: ./claim.rsh:70:19:function exp)'],
    msg: 'You are not Sprig',
    who: 'Sprig_announceWinner'
    });
  const v1801 = stdlib.lt(v1796, v1546);
  const v1802 = v1795 ? true : v1801;
  stdlib.assert(v1802, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./claim.rsh:103:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./claim.rsh:101:58:application call to [unknown function] (defined at: ./claim.rsh:101:58:function exp)', 'at ./claim.rsh:70:19:application call to "runSprig_announceWinner0_341" (defined at: ./claim.rsh:101:10:function exp)', 'at ./claim.rsh:70:19:application call to [unknown function] (defined at: ./claim.rsh:70:19:function exp)'],
    msg: 'This participant does not exist.',
    who: 'Sprig_announceWinner'
    });
  stdlib.assert(v1497, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./claim.rsh:104:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./claim.rsh:101:58:application call to [unknown function] (defined at: ./claim.rsh:101:58:function exp)', 'at ./claim.rsh:70:19:application call to "runSprig_announceWinner0_341" (defined at: ./claim.rsh:101:10:function exp)', 'at ./claim.rsh:70:19:application call to [unknown function] (defined at: ./claim.rsh:70:19:function exp)'],
    msg: 'Can only announce verification.',
    who: 'Sprig_announceWinner'
    });
  const v1813 = ['Sprig_announceWinner0_341', v1794];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1483, v1484, v1485, v1486, v1487, v1488, v1489, v1490, v1493, v1497, v1546, v1547, v1813],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc13],
    pay: [stdlib.checkedBigNumberify('./claim.rsh:105:16:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v1860], secs: v1862, time: v1861, didSend: v1147, from: v1859 } = txn1;
      
      switch (v1860[0]) {
        case 'Sprig_addParticipant0_341': {
          const v1863 = v1860[1];
          
          break;
          }
        case 'Sprig_announceVerification0_341': {
          const v2000 = v1860[1];
          
          break;
          }
        case 'Sprig_announceWinner0_341': {
          const v2137 = v1860[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Sprig_announceWinner"
            });
          const v2156 = v2137[stdlib.checkedBigNumberify('./claim.rsh:101:10:spread', stdlib.UInt_max, '0')];
          const v2157 = v2137[stdlib.checkedBigNumberify('./claim.rsh:101:10:spread', stdlib.UInt_max, '1')];
          ;
          const v2228 = await ctc.getContractInfo();
          const v2229 = [v1483, v2228];
          const v2231 = v1547[v2157];
          const v2234 = stdlib.fromSome(v2231, v2229);
          const v2227 = v2156 ? v2229 : v2234;
          const v2235 = v2227[stdlib.checkedBigNumberify('./claim.rsh:107:43:array ref', stdlib.UInt_max, '0')];
          const v2236 = v2227[stdlib.checkedBigNumberify('./claim.rsh:107:54:array ref', stdlib.UInt_max, '1')];
          null;
          sim_r.txns.push({
            kind: 'from',
            to: v2235,
            tok: undefined /* Nothing */
            });
          const v2242 = stdlib.fromSome(v1485, v1483);
          const v2243 = v2156 ? v1483 : v2242;
          sim_r.txns.push({
            kind: 'from',
            to: v2243,
            tok: undefined /* Nothing */
            });
          const v2248 = null;
          const v2249 = await txn1.getOutput('Sprig_announceWinner', 'v2248', ctc1, v2248);
          
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          
          break;
          }
        case 'Sprig_incorrectContract0_341': {
          const v2274 = v1860[1];
          
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
  const {data: [v1860], secs: v1862, time: v1861, didSend: v1147, from: v1859 } = txn1;
  switch (v1860[0]) {
    case 'Sprig_addParticipant0_341': {
      const v1863 = v1860[1];
      return;
      break;
      }
    case 'Sprig_announceVerification0_341': {
      const v2000 = v1860[1];
      return;
      break;
      }
    case 'Sprig_announceWinner0_341': {
      const v2137 = v1860[1];
      undefined /* setApiDetails */;
      const v2156 = v2137[stdlib.checkedBigNumberify('./claim.rsh:101:10:spread', stdlib.UInt_max, '0')];
      const v2157 = v2137[stdlib.checkedBigNumberify('./claim.rsh:101:10:spread', stdlib.UInt_max, '1')];
      const v2158 = stdlib.addressEq(v1859, v1484);
      stdlib.assert(v2158, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./claim.rsh:102:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./claim.rsh:101:58:application call to [unknown function] (defined at: ./claim.rsh:101:58:function exp)', 'at ./claim.rsh:70:19:application call to [unknown function] (defined at: ./claim.rsh:101:58:function exp)', 'at ./claim.rsh:70:19:application call to [unknown function] (defined at: ./claim.rsh:70:19:function exp)'],
        msg: 'You are not Sprig',
        who: 'Sprig_announceWinner'
        });
      const v2160 = stdlib.lt(v2157, v1546);
      const v2161 = v2156 ? true : v2160;
      stdlib.assert(v2161, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./claim.rsh:103:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./claim.rsh:101:58:application call to [unknown function] (defined at: ./claim.rsh:101:58:function exp)', 'at ./claim.rsh:70:19:application call to [unknown function] (defined at: ./claim.rsh:101:58:function exp)', 'at ./claim.rsh:70:19:application call to [unknown function] (defined at: ./claim.rsh:70:19:function exp)'],
        msg: 'This participant does not exist.',
        who: 'Sprig_announceWinner'
        });
      stdlib.assert(v1497, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./claim.rsh:104:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./claim.rsh:101:58:application call to [unknown function] (defined at: ./claim.rsh:101:58:function exp)', 'at ./claim.rsh:70:19:application call to [unknown function] (defined at: ./claim.rsh:101:58:function exp)', 'at ./claim.rsh:70:19:application call to [unknown function] (defined at: ./claim.rsh:70:19:function exp)'],
        msg: 'Can only announce verification.',
        who: 'Sprig_announceWinner'
        });
      ;
      const v2228 = await ctc.getContractInfo();
      const v2229 = [v1483, v2228];
      const v2231 = v1547[v2157];
      const v2234 = stdlib.fromSome(v2231, v2229);
      const v2227 = v2156 ? v2229 : v2234;
      const v2235 = v2227[stdlib.checkedBigNumberify('./claim.rsh:107:43:array ref', stdlib.UInt_max, '0')];
      const v2236 = v2227[stdlib.checkedBigNumberify('./claim.rsh:107:54:array ref', stdlib.UInt_max, '1')];
      null;
      ;
      const v2242 = stdlib.fromSome(v1485, v1483);
      const v2243 = v2156 ? v1483 : v2242;
      ;
      const v2248 = null;
      const v2249 = await txn1.getOutput('Sprig_announceWinner', 'v2248', ctc1, v2248);
      if (v1147) {
        stdlib.protect(ctc1, await interact.out(v2137, v2249), {
          at: './claim.rsh:101:11:application',
          fs: ['at ./claim.rsh:101:11:application call to [unknown function] (defined at: ./claim.rsh:101:11:function exp)', 'at ./claim.rsh:110:12:application call to "ret" (defined at: ./claim.rsh:105:25:function exp)', 'at ./claim.rsh:105:25:application call to [unknown function] (defined at: ./claim.rsh:105:25:function exp)'],
          msg: 'out',
          who: 'Sprig_announceWinner'
          });
        }
      else {
        }
      
      return;
      
      break;
      }
    case 'Sprig_incorrectContract0_341': {
      const v2274 = v1860[1];
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
  const ctc3 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
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
    Sprig_addParticipant0_341: ctc7,
    Sprig_announceVerification0_341: ctc11,
    Sprig_announceWinner0_341: ctc12,
    Sprig_incorrectContract0_341: ctc10
    });
  
  
  const [v1483, v1484, v1485, v1486, v1487, v1488, v1489, v1490, v1493, v1497, v1546, v1547] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc0, ctc0, ctc2, ctc3, ctc4, ctc4, ctc4, ctc5, ctc4, ctc5, ctc4, ctc9]);
  const v1758 = ctc.selfAddress();
  const v1760 = stdlib.protect(ctc10, await interact.in(), {
    at: './claim.rsh:1:23:application',
    fs: ['at ./claim.rsh:78:39:application call to [unknown function] (defined at: ./claim.rsh:78:39:function exp)', 'at ./claim.rsh:70:19:application call to "runSprig_incorrectContract0_341" (defined at: ./claim.rsh:78:10:function exp)', 'at ./claim.rsh:70:19:application call to [unknown function] (defined at: ./claim.rsh:70:19:function exp)'],
    msg: 'in',
    who: 'Sprig_incorrectContract'
    });
  const v1761 = stdlib.addressEq(v1758, v1484);
  stdlib.assert(v1761, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./claim.rsh:79:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./claim.rsh:78:39:application call to [unknown function] (defined at: ./claim.rsh:78:39:function exp)', 'at ./claim.rsh:70:19:application call to "runSprig_incorrectContract0_341" (defined at: ./claim.rsh:78:10:function exp)', 'at ./claim.rsh:70:19:application call to [unknown function] (defined at: ./claim.rsh:70:19:function exp)'],
    msg: 'You are not Sprig',
    who: 'Sprig_incorrectContract'
    });
  const v1763 = stdlib.eq(v1546, stdlib.checkedBigNumberify('./claim.rsh:80:35:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v1763, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./claim.rsh:80:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./claim.rsh:78:39:application call to [unknown function] (defined at: ./claim.rsh:78:39:function exp)', 'at ./claim.rsh:70:19:application call to "runSprig_incorrectContract0_341" (defined at: ./claim.rsh:78:10:function exp)', 'at ./claim.rsh:70:19:application call to [unknown function] (defined at: ./claim.rsh:70:19:function exp)'],
    msg: 'Debate has already begun',
    who: 'Sprig_incorrectContract'
    });
  const v1768 = ['Sprig_incorrectContract0_341', v1760];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1483, v1484, v1485, v1486, v1487, v1488, v1489, v1490, v1493, v1497, v1546, v1547, v1768],
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
      
      
      const {data: [v1860], secs: v1862, time: v1861, didSend: v1147, from: v1859 } = txn1;
      
      switch (v1860[0]) {
        case 'Sprig_addParticipant0_341': {
          const v1863 = v1860[1];
          
          break;
          }
        case 'Sprig_announceVerification0_341': {
          const v2000 = v1860[1];
          
          break;
          }
        case 'Sprig_announceWinner0_341': {
          const v2137 = v1860[1];
          
          break;
          }
        case 'Sprig_incorrectContract0_341': {
          const v2274 = v1860[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Sprig_incorrectContract"
            });
          ;
          null;
          sim_r.txns.push({
            kind: 'from',
            to: v1483,
            tok: undefined /* Nothing */
            });
          const v2404 = null;
          const v2405 = await txn1.getOutput('Sprig_incorrectContract', 'v2404', ctc1, v2404);
          
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
  const {data: [v1860], secs: v1862, time: v1861, didSend: v1147, from: v1859 } = txn1;
  switch (v1860[0]) {
    case 'Sprig_addParticipant0_341': {
      const v1863 = v1860[1];
      return;
      break;
      }
    case 'Sprig_announceVerification0_341': {
      const v2000 = v1860[1];
      return;
      break;
      }
    case 'Sprig_announceWinner0_341': {
      const v2137 = v1860[1];
      return;
      break;
      }
    case 'Sprig_incorrectContract0_341': {
      const v2274 = v1860[1];
      undefined /* setApiDetails */;
      const v2303 = stdlib.addressEq(v1859, v1484);
      stdlib.assert(v2303, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./claim.rsh:79:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./claim.rsh:78:39:application call to [unknown function] (defined at: ./claim.rsh:78:39:function exp)', 'at ./claim.rsh:70:19:application call to [unknown function] (defined at: ./claim.rsh:78:39:function exp)', 'at ./claim.rsh:70:19:application call to [unknown function] (defined at: ./claim.rsh:70:19:function exp)'],
        msg: 'You are not Sprig',
        who: 'Sprig_incorrectContract'
        });
      const v2305 = stdlib.eq(v1546, stdlib.checkedBigNumberify('./claim.rsh:80:35:decimal', stdlib.UInt_max, '0'));
      stdlib.assert(v2305, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./claim.rsh:80:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./claim.rsh:78:39:application call to [unknown function] (defined at: ./claim.rsh:78:39:function exp)', 'at ./claim.rsh:70:19:application call to [unknown function] (defined at: ./claim.rsh:78:39:function exp)', 'at ./claim.rsh:70:19:application call to [unknown function] (defined at: ./claim.rsh:70:19:function exp)'],
        msg: 'Debate has already begun',
        who: 'Sprig_incorrectContract'
        });
      ;
      null;
      ;
      const v2404 = null;
      const v2405 = await txn1.getOutput('Sprig_incorrectContract', 'v2404', ctc1, v2404);
      if (v1147) {
        stdlib.protect(ctc1, await interact.out(v2274, v2405), {
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
    pure: [`addressSkeptic()(byte,byte[32])`, `addressSprig()address`, `author()address`, `deadline()uint64`, `interaction()byte[32]`, `isBottom()byte`, `participants()(byte,byte[40])[10]`, `wagerDown()uint64`, `wagerUp()uint64`],
    sigs: [`Sprig_addParticipant(address,uint64)byte[0]`, `Sprig_announceVerification(byte)byte[0]`, `Sprig_announceWinner(byte,uint64)byte[0]`, `Sprig_incorrectContract()byte[0]`, `addressSkeptic()(byte,byte[32])`, `addressSprig()address`, `author()address`, `deadline()uint64`, `interaction()byte[32]`, `isBottom()byte`, `participants()(byte,byte[40])[10]`, `wagerDown()uint64`, `wagerUp()uint64`]
    },
  GlobalNumByteSlice: 6,
  GlobalNumUint: 0,
  LocalNumByteSlice: 0,
  LocalNumUint: 0,
  appApproval: `ByATAAEDKQK2q8rMBvvS/o8K0sS1gQ6kjoiGDung39YN0fWn0Qevm5r+Ce2Aj58C5/HbtwLL4futA6HAv1Ddwa+UAqsBmgMmBgEBAQABAgEDAQQAIjUAMRhBBjknBWRJIls1AYEIWzUCNhoAF0lBAe0iNQQjNQZJIQUMQAD1SSEGDEAAd0khBwxAAD5JIQgMQAAjIQgSRDQBJBJEKWQoZFAqZFArZFAnBGRQSTUDVwAgNQdCBdchBxJENhoBNhoCUDX/KTT/UEIBrEkhCQxAABghCRJENhoBNhoCUDX/KjT/UIEfr1BCAY0hBhJEJwU1/ys0/1CBKK9QQgF6SSEKDEAATUkhCwxAACMhCxJENAEkEkQpZChkUCpkUCtkUCcEZFBJNQNXmQE1B0IFYCEKEkQ0ASQSRClkKGRQKmRQK2RQJwRkUEk1A1cgIDUHQgU9IQUSRDQBJBJEKWQoZFAqZFArZFAnBGRQSTUDV2EgNQdCBRpJIQwMQABoSSENDEAAPkkhDgxAABQhDhJENhoBNf8oNP9QgSevUEIA2iENEkQ0ASQSRClkKGRQKmRQK2RQJwRkUEk1A1eRCDUHQgTOIQwSRDQBJBJEKWQoZFAqZFArZFAnBGRQSTUDV4kINQdCBKtJIQ8MQABPSSEQDEAAIyEQEkQ0ASQSRClkKGRQKmRQK2RQJwRkUEk1A1eBCDUHQgR6IQ8SRDQBJBJEKWQoZFAqZFArZFAnBGRQSTUDIREhElg1B0IEVYGwrpgCEkQ0ASQSRClkKGRQKmRQK2RQJwRkUEk1A1dAITUHQgQvNhoCFzUENhoDNhoBF0khBAxAApAhBBJEJDQBEkQ0BEkiEkw0AhIRRClkKGRQKmRQK2RQJwRkUEk1A0lKSkpKSlcAIDX/VyAgNf5XQCE1/VdhIDX8gYEBWzX7gYkBWzX6gZEBWzX5V5kBFzX4gZoBWzX3V6IBFzX2gaMBWzX1IREhElg19Ek1BTXzgAT8W2bHNPNQsDTzIlVJIQQMQAEeSSQMQABRJBJEMQA0/hJENPUiEkSABIh3xiCwsSKyATT3sggjshA0/7IHs4AIAAAAAAAACWSwJwU1BzT/NP40/TT8NPs0+jT5NPg09zT2IyI09DIGQgJnSDTzVwEJNfI08lcAARc18TTyI1s18DEANP4SRDTxNPA09QwRRDT2RDT/MRgWUEk17zT0JTTwCyVYSTXtVwEoNO0iVU007zTxTUk17lcAIDXtgAR8+X8ONPEWUQcIUDTtUDTuVyAIULCxIrIBNPqyCCOyEDTtsgezsSKyATT7sggjshA0/zT9STXsVwEgNOwiVU00/zTxTbIHs4AIAAAAAAAACMiwJwU1BzT/NP40/TT8NPs0+jT5NPg09zT2IzT1NPQyBkIBoEkjDEAAckg081cBATXyMQA0/hJENPhENPIXNfGABGmBbck08RZRBwhQsLEisgE0+7III7IQNP80/Uk18FcBIDTwIlVNNP808U2yB7OACAAAAAAAAAgWsCcFNQc0/zT+NP00/DT7NPo0+TT4NPc09iMiNPQyBkIBKEg081cBKDXyMQA0/hJENPWBCgxENPZENPJXACA18TTygSBbNfCABIYRGWw08VA08BZQsIAIAAAAAAAAB3ewJwU1BzT/NP40/TT8NPs0+jT5NPg09zT2IjT1Iwg09DT1JQsoNPE08BZQUF0yBkIAuSISRIGgjQaIAaciNAESRDQESSISTDQCEhFESTUFSUpKSVcAIDX/VyAhNf5XQSA1/YFhWzX8gWlbNfuBcVs1+ld5ARc1+YAEGa5sQTT/UDT+UDT9UDT8FlA0+xZQNPoWUDT5FlEHCFCwNPw0+wg1+DT4iAE9NPkUNPsiEhFEJa819zEANP80/jT9NPw0+zT6NPk0+DT5FCIiNPdJUDT3UDT3UDT3UDT3UDT3UDT3UDT3UDT3UDIGQgAANf81/jX9Nfw1+zX6Nfk1+DX3NfY19TX0NfM18jT8QQADQgBlNPI081A09FA09VA09hZQNPcWUDT4FlA0+RZRBwhQNPoWUDT7FlEHCFA0/RZQNP5QKUsBVwB/ZyhLAVd/f2cqSwFX/n9nK0sBgf0CgX9YZycESwGB/AOBSVhnSCQ1ATIGNQJCABwxGYEFEkSxIrIBIrIII7IQMgmyCTIKsgezQgAFMRkiEkQnBTQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkRC/98iMTQSRIEGMTUSRCIxNhJEIjE3EkQiNQEiNQJC/600AElKIwg1ADgHMgoSRDgQIxJEOAgSRIk=`,
  appClear: `Bw==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 5,
  stateSize: 581,
  unsupported: [],
  version: 11,
  warnings: []
  };
const _ETH = {
  ABI: `[{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"address payable","name":"elem1","type":"address"},{"components":[{"internalType":"enum _enum_T0","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"internalType":"address payable","name":"_Some","type":"address"}],"internalType":"struct T0","name":"elem2","type":"tuple"},{"internalType":"bytes32","name":"elem3","type":"bytes32"},{"internalType":"uint256","name":"elem4","type":"uint256"},{"internalType":"uint256","name":"elem5","type":"uint256"},{"internalType":"uint256","name":"elem6","type":"uint256"},{"internalType":"bool","name":"elem7","type":"bool"}],"internalType":"struct T10","name":"v3317","type":"tuple"}],"stateMutability":"payable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"msg","type":"uint256"}],"name":"ReachError","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"address payable","name":"elem1","type":"address"},{"components":[{"internalType":"enum _enum_T0","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"internalType":"address payable","name":"_Some","type":"address"}],"internalType":"struct T0","name":"elem2","type":"tuple"},{"internalType":"bytes32","name":"elem3","type":"bytes32"},{"internalType":"uint256","name":"elem4","type":"uint256"},{"internalType":"uint256","name":"elem5","type":"uint256"},{"internalType":"uint256","name":"elem6","type":"uint256"},{"internalType":"bool","name":"elem7","type":"bool"}],"indexed":false,"internalType":"struct T10","name":"_a","type":"tuple"}],"name":"_reach_e0","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T7","name":"which","type":"uint8"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"},{"internalType":"address payable","name":"elem1","type":"address"}],"internalType":"struct T1","name":"_Sprig_addParticipant0_341","type":"tuple"},{"components":[{"internalType":"bool","name":"elem0","type":"bool"}],"internalType":"struct T6","name":"_Sprig_announceVerification0_341","type":"tuple"},{"components":[{"internalType":"bool","name":"elem0","type":"bool"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T4","name":"_Sprig_announceWinner0_341","type":"tuple"},{"internalType":"bool","name":"_Sprig_incorrectContract0_341","type":"bool"}],"internalType":"struct T7","name":"elem1","type":"tuple"}],"indexed":false,"internalType":"struct T8","name":"_a","type":"tuple"}],"name":"_reach_e2","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v1911","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v2070","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v2248","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v2404","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"announceVerification","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"},{"indexed":false,"internalType":"address payable","name":"v1","type":"address"},{"indexed":false,"internalType":"address payable","name":"v2","type":"address"}],"name":"announceWinner","type":"event"},{"anonymous":false,"inputs":[],"name":"incorrectContract","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address payable","name":"v0","type":"address"},{"indexed":false,"internalType":"address payable","name":"v1","type":"address"}],"name":"newParticipant","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[{"internalType":"address payable","name":"v3295","type":"address"},{"internalType":"address payable","name":"v3296","type":"address"}],"name":"Sprig_addParticipant","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"bool","name":"v3301","type":"bool"}],"name":"Sprig_announceVerification","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"bool","name":"v3306","type":"bool"},{"internalType":"uint256","name":"v3307","type":"uint256"}],"name":"Sprig_announceWinner","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"Sprig_incorrectContract","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"_reachCreationTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentState","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T7","name":"which","type":"uint8"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"},{"internalType":"address payable","name":"elem1","type":"address"}],"internalType":"struct T1","name":"_Sprig_addParticipant0_341","type":"tuple"},{"components":[{"internalType":"bool","name":"elem0","type":"bool"}],"internalType":"struct T6","name":"_Sprig_announceVerification0_341","type":"tuple"},{"components":[{"internalType":"bool","name":"elem0","type":"bool"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T4","name":"_Sprig_announceWinner0_341","type":"tuple"},{"internalType":"bool","name":"_Sprig_incorrectContract0_341","type":"bool"}],"internalType":"struct T7","name":"elem1","type":"tuple"}],"internalType":"struct T8","name":"v3323","type":"tuple"}],"name":"_reachp_2","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"addressSkeptic","outputs":[{"components":[{"internalType":"enum _enum_T0","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"internalType":"address payable","name":"_Some","type":"address"}],"internalType":"struct T0","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"addressSprig","outputs":[{"internalType":"address payable","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"author","outputs":[{"internalType":"address payable","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"deadline","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"interaction","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"isBottom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"participants","outputs":[{"components":[{"internalType":"enum _enum_T2","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"},{"internalType":"address payable","name":"elem1","type":"address"}],"internalType":"struct T1","name":"_Some","type":"tuple"}],"internalType":"struct T2[10]","name":"","type":"tuple[10]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"wagerDown","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"wagerUp","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"stateMutability":"payable","type":"receive"}]`,
  Bytecode: `0x620027fb38819003906080601f8301601f1916810191906001600160401b038311908310176200076f57829160405260803961014081126200081857604051906101008201906001600160401b038211838310176200076f576060916040526080518352620000726020608001620008ab565b6020840152603f19011262000818576040516200008f8162000872565b60c051600281101562000818578152620000aa60e0620008c0565b6020820152620000bc610100620008ab565b6040828101919091528201526101205160608201526101405160808201526101605160a08201526101805160c0820152620000f96101a0620008c0565b60e08201524360035560006101a060405162000115816200088e565b8281528260208201528260408201528260608201528260808201526200013a620008ce565b60a08201528260c08201528260e08201528261010082015282610120820152826101408201526200016a6200094d565b610160820152826101808201520152604051620001878162000872565b6000815262000195620008ef565b6020820152620001a46200094d565b604082015260ff6004541662000859577f7754ed6a5464331cba7dc833de716dfdc9d4ea7815221ae1fa062bccba7f2deb6101606040513381528451602082015260018060a01b0360208601511660408201526200020b60408601516060830190620009b7565b606085015160c0820152608085015160e082015260a085015161010082015260c085015161012082015260e08501511515610140820152a1815180159081156200084c575b50156200083357608082015160a08301518101908181116200081d57811062000818578082523403620007ff5760e082015115620007f75760a0820151155b15620007de5760208082018051600090819052815183015280516040808501805192909252825182519094019390935281518151840152815181516060015281518151608001528151815160a001528151815160c001528151815160e09081019190915282518251610100015291519051610120015281519391929162000316856200088e565b60008552600060208601526200032b620008ce565b848601526000606086015260006080860152600060a0860152600060c086015260008286015260006101008601526000610120860152600061014086015260006101608601526200037b6200094d565b61018086015260006101a086015233855260018060a01b0360208201511660208601528381015184860152606081015160608601526080810151608086015260a081015160a086015260c081015160c086015281810151151582860152825161010086015201511515600014620007d65760005b1515610120840152600061014084015260006101608401520151610180820152436101a08201526040518061018081011060018060401b03610180830111176200076f57806101806101609201604052600081526000602082015262000454620008ce565b60408201526000606082015260006080820152600060a0820152600060c0820152600060e08201526000610100820152600061012082015260006101408201526200049e6200094d565b8282015261018060018060a01b038451169384835260018060a01b03602082015116602084015260408101516040840152606081015160608401526080810151608084015260a081015160a084015260c081015160c084015260e0810151151560e084015261010081015161010084015261012081015115156101208401528381015161014084015201518282015260036000554360015560405192602084015260018060a01b0360208201511660408401526200056560408201516060850190620009b7565b606081015160c0840152608081015160e084015260a081015161010084015260c081015161012084015260e081015115156101408401526101008101518284015261012081015115156101808401526101408101516101a084015201516101c082016000905b600a821062000785576106a08452836106c081016001600160401b038111828210176200076f5760405280516001600160401b0381116200076f57600254600181811c9116801562000764575b60208210146200074e57601f8111620006e4575b50602091601f82116001146200067a579181926000926200066e575b50508160011b916000199060031b1c1916176002555b604051611e149081620009e78239f35b01519050828062000648565b601f19821692600260005260206000209160005b858110620006cb57508360019510620006b1575b505050811b016002556200065e565b015160001960f88460031b161c19169055828080620006a2565b919260206001819286850151815501940192016200068e565b60026000527f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace601f830160051c8101916020841062000743575b601f0160051c01905b8181106200073657506200062c565b6000815560010162000727565b90915081906200071e565b634e487b7160e01b600052602260045260246000fd5b90607f169062000618565b634e487b7160e01b600052604160045260246000fd5b602060806001926040865180516200079d8162000996565b8352848101511515858401520151848060a01b03815116604083015283858060a01b0391015116606082015201930191019091620005cb565b6001620003ef565b60405163100960cb60e01b815260136004820152602490fd5b60016200028f565b60405163100960cb60e01b815260126004820152602490fd5b600080fd5b634e487b7160e01b600052601160045260246000fd5b60405163100960cb60e01b815260116004820152602490fd5b9050600154143862000250565b60405163100960cb60e01b815260106004820152602490fd5b606081019081106001600160401b038211176200076f57604052565b6101c081019081106001600160401b038211176200076f57604052565b51906001600160a01b03821682036200081857565b519081151582036200081857565b60405190620008dd8262000872565b60006040838281528260208201520152565b60405190620008fe8262000872565b6000808352602083018190526040805191849183016001600160401b0381118482101762000939579060409291835280845260208401520152565b634e487b7160e01b82526041600452602482fd5b604051906101408083016001600160401b038111848210176200076f576040528260005b8281106200097e57505050565b6020906200098b620008ef565b818401520162000971565b60021115620009a157565b634e487b7160e01b600052602160045260246000fd5b6040908051620009c78162000996565b83526020818101511515908401528101516001600160a01b031691015256fe608060409080825260048036101561001f575b505050361561001d57005b005b600091823560e01c9081631e93b0f11461085d5750806329dcb0cf146108105780636aef8ef1146107d05780636ba24022146107835780636c4470fb146106e85780636c6973311461069b578063832307571461067c578063a64cbdde14610611578063a6c3e6b9146105a2578063aaed29ac1461052b578063ab53f2c6146104bf578063ae8647df14610424578063aecca2e0146103b1578063ca4ebc4214610357578063d7032d061461028f578063e1e686f2146101505763f88ed95f03610012573461014c578160031936011261014c5760036100fd610b3d565b925403610135576020610140848460e0610126610118610a00565b868082518301019101610c63565b01511515928391015251908152f35b602490600c84519163100960cb60e01b8352820152fd5b5080fd5b509161010036600319011261014c57610167610b3d565b815161017281610961565b8435815260e03660231901126102785782519460a086016001600160401b0381118782101761027c5784526024359081101561027457855282604319360112610278578251946101c186610961565b6001600160a01b03956044358781168103610270578152606435968716870361026c5760209687820152868201528560831936011261027457835161020581610992565b6084358015158103610270578152848201528360a31936011261027457835161022d81610961565b60a435801515810361027057815260c43587820152606082015260e435801515810361026c576080820152858201526102669190610ec6565b51908152f35b8580fd5b8680fd5b8480fd5b8380fd5b634e487b7160e01b865260418252602486fd5b50829081600319360112610353576001600160a01b039290358381169190829003610350576024359184831680930361014c57610345906102ce610b3d565b9283918651906102dd82610961565b602098899788840192845282528851916102f683610961565b895161030181610961565b858152858a82015283528189840194610318610bb3565b865251168351525116878251015282825152518682510152610338610c21565b9182525185820152610ec6565b015115159051908152f35b80fd5b8280fd5b503461014c578160031936011261014c576003610372610b3d565b92540361039a5760206101a08484608061038d610118610a00565b0151928391015251908152f35b602490600f84519163100960cb60e01b8352820152fd5b503461014c578160031936011261014c5760036103cc610b3d565b92540361040d57602060c084846103e1610a00565b80516001600160a01b039186916103ff919081018301908301610c63565b015116928391015251908152f35b602490600884519163100960cb60e01b8352820152fd5b82848060031936011261014c57606061043b6108e6565b92610345610447610b3d565b8092855161045481610961565b6020978882019015158252602435815287519061047082610961565b885161047b81610961565b848152848b820152825289820192610491610bb3565b845251151582515251898251015260028251525186825101526104b2610c21565b9182525187820152610ec6565b82843461014c578160031936011261014c5781546104db610a00565b91805193849283526020828185015284518093850152815b83811061051457505060608094508284010152601f80199101168101030190f35b8086018201518782016060015286945081016104f3565b503461014c578160031936011261014c57610544610ab5565b50600361054f610b3d565b92540361058b57606060a061058985858161057a61056b610a00565b60208082518301019101610c63565b015193849101525180926108fa565bf35b602490600784519163100960cb60e01b8352820152fd5b503461014c578160031936011261014c5760036105bd610b3d565b9254036105fa57602060e084846105d2610a00565b80516001600160a01b03916105ed9181018701908701610c63565b5116928391015251908152f35b602490600984519163100960cb60e01b8352820152fd5b8284602036600319011261014c578060209261034561062e6108e6565b610636610b3d565b928391855161064481610961565b865161064f81610992565b838152815288810191610660610bb3565b83528151901515905260018251525186825101526104b2610c21565b82843461014c578160031936011261014c576020906001549051908152f35b503461014c578160031936011261014c5760036106b6610b3d565b9254036106d15760206101208484606061038d610118610a00565b602490600b84519163100960cb60e01b8352820152fd5b508234610353578260031936011261035357610702610b0a565b5061070b610b3d565b91600384540361076d57508290610720610a00565b90610160938461073a602094858082518301019101610c63565b01519401849052519291835b600a82106107545761050085f35b8261076260019286516108b4565b940191019092610746565b600d602492519163100960cb60e01b8352820152fd5b503461014c578160031936011261014c57600361079e610b3d565b9254036107b9576020610180848460a061038d610118610a00565b602490600e84519163100960cb60e01b8352820152fd5b82848160031936011261014c5760806020926103456107ed610b3d565b80926107f7610c21565b87810190600382515251151586825101526104b2610c21565b503461014c578160031936011261014c57600361082b610b3d565b925403610846576020610100848460c061038d610118610a00565b602490600a84519163100960cb60e01b8352820152fd5b83903461014c578160031936011261014c576020906003548152f35b6002111561088357565b634e487b7160e01b600052602160045260246000fd5b80516001600160a01b03908116835260209182015116910152565b906108e2604060809380516108c881610879565b845260208101511515602085015201516040830190610899565b0190565b6004359081151582036108f557565b600080fd5b604090805161090881610879565b83526020818101511515908401528101516001600160a01b0316910152565b90600182811c92168015610957575b602083101461094157565b634e487b7160e01b600052602260045260246000fd5b91607f1691610936565b604081019081106001600160401b0382111761097c57604052565b634e487b7160e01b600052604160045260246000fd5b602081019081106001600160401b0382111761097c57604052565b606081019081106001600160401b0382111761097c57604052565b6101c081019081106001600160401b0382111761097c57604052565b61014081019081106001600160401b0382111761097c57604052565b604051906000600254610a1281610927565b808552600191808316908115610a965750600114610a50575b5050829003601f01601f191682016001600160401b0381118382101761097c57604052565b60026000908152602093509183600080516020611dc88339815191525b838510610a8257505050508301013880610a2b565b805488860183015293019284908201610a6d565b919250506020925060ff191682850152151560051b8301013880610a2b565b60405190610ac2826109ad565b60006040838281528260208201520152565b60405190610ae1826109ad565b8160008152600060208201526040805191610afb83610961565b60008352600060208401520152565b60405190610b17826109e4565b8160005b6101408110610b28575050565b602090610b33610ad4565b8184015201610b1b565b60405190610b4a826109c8565b816101a0600091828152826020820152826040820152826060820152826080820152610b74610ab5565b60a08201528260c08201528260e0820152826101008201528261012082015282610140820152610ba2610b0a565b610160820152826101808201520152565b60408051919060a083016001600160401b0381118482101761097c5781526080836000928382528051610be581610961565b84815284602082015260208301528051610bfe81610992565b8481528183015251610c0f81610961565b83815283602082015260608201520152565b60405190610c2e82610961565b81600081526020610c3d610bb3565b910152565b51906001600160a01b03821682036108f557565b519081151582036108f557565b90818103916106a0908184126108f5576040805194610180939192918487016001600160401b0381118882101761097c578452610c9f83610c42565b8752602091610caf838501610c42565b83890152606080603f19809301126108f557855195610ccd876109ad565b80860151600290818110156108f5578852610ce9838801610c56565b86890152608097610cfb898901610c42565b83820152828c015260a0870151838c015260c0870151888c015260e087015160a08c01526101008088015160c08d0152610120998c60e0610d3d8d8c01610c56565b9101528c61014092838b01519101528c6101609b610d5c8d8c01610c56565b910152880151908c0152896101bf880112156108f557815199610d7e8b6109e4565b8a958801978189116108f5576101a001955b888710610da7575050505050505050505082015290565b8682038a81126108f557845190610dbd826109ad565b8851858110156108f557869189918452610dd88c8c01610c56565b8c85015201126108f5578a9189918651610df181610961565b610dfc888c01610c42565b8152610e09898c01610c42565b8482015287820152815201960195610d90565b5160048110156108835790565b60405190610e36826109c8565b816101a0600091828152826020820152610e4e610ab5565b60408201528260608201528260808201528260a08201528260c08201528260e082015282610100820152826101208201528261014082015282610160820152610e95610b0a565b6101808201520152565b90600a811015610eb05760051b0190565b634e487b7160e01b600052603260045260246000fd5b6040519160e083016001600160401b0381118482101761097c5780604052610eed81610961565b6000815260006101008501528352604051610f0781610961565b60008152600060208201526020840152610f1f610ad4565b6040840152604051610f3081610992565b600081526060840152604051610f4581610961565b60008152600060208201526080840152604051610f6181610961565b600081526000602082015260a0840152604051610f7d81610961565b600081526000602082015260c084015260ff60045416611d97576040513381528251602082015260208301518051916004831015610883576080610120927fc620943c1452fca140c55e18039786e13089a0ad956d116a43ec7053fd0e7488946040840152610ff460208201516060850190610899565b604081015151151560a0840152602060608201518051151560c0860152015160e084015201511515610100820152a1600360005403611d7e5761103861056b610a00565b9180518015908115611d72575b5015611d59576110586020820151610e1c565b6004811015610883576116725760209081015181015184528201516001600160a01b0316330361165957600a61014083015110156116405761012082015115611627573461160e57825151602084810180516001600160a01b03938416905285518201518151908416908301526040808701805160019052915191518101919091528551805190830151825191851682529093168383015260009391927fe83724cfd6213e1ca8e053f3ce1163bc5fea531b9b733cc0b8443d16084c4c0d9190a17f49bc23cd8ae3ecb895d9ee734172c0b7454bb3793cd359ec93ebbdde6c4e4e4482604051858152a1015261114c610e29565b9160018060a01b03825116835260018060a01b03602083015116602084015260408201516040840152606082015160608401526080820151608084015260a082015160a084015260c082015160c084015260e0820151151560e0840152610100820151610100840152610120820151151561012084015260006101408401526101408201516001810181116115f8578060018101106108f5576001016101608401526040610140610160840151930151910151611207610b0a565b9260005b600a81106115c65750509061122b916112248285610e9f565b5282610e9f565b50610180820152436101a0820152610140810151156112c65750600080556000600155611259600254610927565b806112615750565b601f811160011461127457506000600255565b60026000526112b990601f0160051c600080516020611dc8833981519152017f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acf611db0565b6000602081208160025555565b6040519091906001600160401b0361018082019081119082111761097c578061018061016092016040526000815260006020820152611303610ab5565b60408201526000606082015260006080820152600060a0820152600060c0820152600060e082015260006101008201526000610120820152600061014082015261134b610b0a565b8282015261018060018060a01b038551169485835260018060a01b03602082015116602084015260408101516040840152606081015160608401526080810151608084015260a081015160a084015260c081015160c084015260e0810151151560e084015261010081015161010084015261012081015115156101208401528381015161014084015201518282015260036000554360015560405193602085015260018060a01b036020820151166040850152611410604082015160608601906108fa565b606081015160c0850152608081015160e085015260a081015161010085015260c081015161012085015260e081015115156101408501526101008101518285015261012081015115156101808501526101408101516101a085015201516101c083016000905b600a82106115ac5750506106a08352506106c082016001600160401b0381118382101761097c5760405281516001600160401b03811161097c576114bb600254610927565b601f8111611564575b50602092601f821160011461150157928192936000926114f6575b50508160011b916000199060031b1c191617600255565b0151905038806114df565b601f19821693600260005260206000209160005b86811061154c5750836001959610611533575b505050811b01600255565b015160001960f88460031b161c19169055388080611528565b91926020600181928685015181550194019201611515565b600260005261159c90600080516020611dc8833981519152601f840160051c810191602085106115a2575b601f0160051c0190611db0565b386114c4565b909150819061158f565b60206115bb60019285516108b4565b930191019091611476565b6115d08183610e9f565b516115db8287610e9f565b526115e68186610e9f565b5060001981146115f85760010161120b565b634e487b7160e01b600052601160045260246000fd5b60405163100960cb60e01b8152601a6004820152602490fd5b60405163100960cb60e01b815260196004820152602490fd5b60405163100960cb60e01b815260186004820152602490fd5b60405163100960cb60e01b815260176004820152602490fd5b611683602082959394950151610e1c565b6004811015610883576001036118c4576020908101516040015160608301528301516001600160a01b031633036118ab5760e083015115611892573461187957807f3d4eb33e4d2359cd4a519091b0a501d8c8ef06d94641274a49f4f59a9d75b2b86020606080940151511515604051908152a10151511561182857600080808060018060a01b038651165b6080870151908290821561181e575b6001600160a01b031690f1156118125760406000917f259606fd9d65ecaee81fe7641438ac172be1aa1e613de029732fdfc9cd3bda9560208351858152a10152611766610e29565b9060018060a01b03815116825260018060a01b03602082015116602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e0810151151560e0830152610100810151610100830152610120810151151561012083015260016101408301526101609060008284015201516101808201526101a043910152600080556000600155611259600254610927565b6040513d6000823e3d90fd5b6108fc915061171e565b60408201600181515161183a81610879565b61184381610879565b036118645751604001516000908190819081906001600160a01b031661170f565b50600080808060018060a01b0386511661170f565b60405163100960cb60e01b8152601d6004820152602490fd5b60405163100960cb60e01b8152601c6004820152602490fd5b60405163100960cb60e01b8152601b6004820152602490fd5b6118d16020820151610e1c565b600481101561088357600203611c3e576020908101516060015160808301528301516001600160a01b03163303611c25576080810151805115611c15575060015b15611bfc5761012083015115611be35734611bca57825160c0820180516001600160a01b0390921690915251306020909101526080810151805115611b4e5750600080516020611de8833981519152606060c08301515b60a0840181905260808401515181516020928301516040805193151584526001600160a01b03928316948401949094521691810191909152a1600080808060018060a01b0360a0860151511660a088015190828215611b45575bf11561181257608001515115611af457600080808060018060a01b038651165b60808701519082908215611aea575b6001600160a01b031690f1156118125760606000917fa3c96e8bd6c72edfd832e55564fe6d30a494455074d364338aeca1b1ed0a8bb66020604051858152a10152611a3b610e29565b9060018060a01b03815116825260018060a01b03602082015116602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e0810151151560e0830152610100810151610100830152610120810151151561012083015261014060018184015281015190610160918284015201516101808201526101a043910152600080556000600155611259600254610927565b6108fc91506119f2565b604082016001815151611b0681610879565b611b0f81610879565b03611b305751604001516000908190819081906001600160a01b03166119e3565b50600080808060018060a01b038651166119e3565b506108fc6119c3565b6001611b666101608601926020845191015190610e9f565b5151611b7181610879565b611b7a81610879565b03611bae5760606040611ba6600080516020611de8833981519152935160206080870151015190610e9f565b510151611969565b50600080516020611de8833981519152606060c0830151611969565b60405163100960cb60e01b815260216004820152602490fd5b60405163100960cb60e01b815260206004820152602490fd5b60405163100960cb60e01b8152601f6004820152602490fd5b6020015161014084015111611912565b60405163100960cb60e01b8152601e6004820152602490fd5b611c4c915060200151610e1c565b600481101561088357600314611c60575050565b60208201516001600160a01b03163303611d4057610140820151611d275734611d10577fee67b7f614b91ff061c6dc403b96e7722d7bc7d1c186466659dcabd318d8ad8e6000604051a1600080808060018060a01b0386511661010087015190828215611d07575bf1156118125760806000917fa378ddbc662824552cfd766860a1946a93f40f7ca2e487a134b1c0c1f2cb94586020604051858152a10152611766610e29565b506108fc611cc8565b602460405163100960cb60e01b8152816004820152fd5b60405163100960cb60e01b815260236004820152602490fd5b60405163100960cb60e01b815260226004820152602490fd5b60405163100960cb60e01b815260166004820152602490fd5b90506001541438611045565b60405163100960cb60e01b815260156004820152602490fd5b60405163100960cb60e01b815260146004820152602490fd5b818110611dbb575050565b60008155600101611db056fe405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace5cb5dec175be8d27a73236ff5782772d4dc3b1358215e6f9e1f8343abe740d53a164736f6c6343000810000a`,
  BytecodeLen: 10235,
  version: 9,
  views: {
    }
  };
export const _stateSourceMap = {
  2: {
    at: './claim.rsh:126:11:after expr stmt semicolon',
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
