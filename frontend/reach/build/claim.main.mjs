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
    announceWinner: [ctc1, ctc2],
    correctContract: [],
    newParticipant: [ctc1, ctc2]
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Array(ctc0, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'));
  const ctc2 = stdlib.T_Null;
  const ctc3 = stdlib.T_Data({
    None: ctc2,
    Some: ctc0
    });
  const ctc4 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc5 = stdlib.T_UInt;
  const ctc6 = stdlib.T_Bool;
  const ctc7 = stdlib.T_Contract;
  const ctc8 = stdlib.T_Tuple([ctc0, ctc7]);
  const ctc9 = stdlib.T_Array(ctc6, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'));
  const ctc10 = stdlib.T_Data({
    None: ctc2,
    Some: ctc8
    });
  const ctc11 = stdlib.T_Array(ctc10, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '10'));
  const ctc12 = stdlib.T_Array(ctc5, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '10'));
  const ctc13 = stdlib.T_Data({
    None: ctc2,
    Some: ctc6
    });
  const ctc14 = stdlib.T_Array(ctc13, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'));
  
  const _addressSkeptic = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v2621, v2622, v2623, v2624, v2625, v2626, v2627, v2628, v2635, v2669, v2718, v2720, v2721, v2722, v2723, v2724] = svs;
      return (await ((async () => {
        
        
        return v2623;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _addressesOracles = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v2621, v2622, v2623, v2624, v2625, v2626, v2627, v2628, v2635, v2669, v2718, v2720, v2721, v2722, v2723, v2724] = svs;
      return (await ((async () => {
        
        
        return v2622;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _author = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v2621, v2622, v2623, v2624, v2625, v2626, v2627, v2628, v2635, v2669, v2718, v2720, v2721, v2722, v2723, v2724] = svs;
      return (await ((async () => {
        
        
        return v2621;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _deadline = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v2621, v2622, v2623, v2624, v2625, v2626, v2627, v2628, v2635, v2669, v2718, v2720, v2721, v2722, v2723, v2724] = svs;
      return (await ((async () => {
        
        
        return v2627;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _interaction = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v2621, v2622, v2623, v2624, v2625, v2626, v2627, v2628, v2635, v2669, v2718, v2720, v2721, v2722, v2723, v2724] = svs;
      return (await ((async () => {
        
        
        return v2624;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _isBottom = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v2621, v2622, v2623, v2624, v2625, v2626, v2627, v2628, v2635, v2669, v2718, v2720, v2721, v2722, v2723, v2724] = svs;
      return (await ((async () => {
        
        
        return v2628;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _participants = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v2621, v2622, v2623, v2624, v2625, v2626, v2627, v2628, v2635, v2669, v2718, v2720, v2721, v2722, v2723, v2724] = svs;
      return (await ((async () => {
        
        
        return v2722;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _wagerDown = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v2621, v2622, v2623, v2624, v2625, v2626, v2627, v2628, v2635, v2669, v2718, v2720, v2721, v2722, v2723, v2724] = svs;
      return (await ((async () => {
        
        
        return v2626;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _wagerUp = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v2621, v2622, v2623, v2624, v2625, v2626, v2627, v2628, v2635, v2669, v2718, v2720, v2721, v2722, v2723, v2724] = svs;
      return (await ((async () => {
        
        
        return v2625;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  return {
    infos: {
      addressSkeptic: {
        decode: _addressSkeptic,
        dom: [],
        rng: ctc3
        },
      addressesOracles: {
        decode: _addressesOracles,
        dom: [],
        rng: ctc1
        },
      author: {
        decode: _author,
        dom: [],
        rng: ctc0
        },
      deadline: {
        decode: _deadline,
        dom: [],
        rng: ctc5
        },
      interaction: {
        decode: _interaction,
        dom: [],
        rng: ctc4
        },
      isBottom: {
        decode: _isBottom,
        dom: [],
        rng: ctc6
        },
      participants: {
        decode: _participants,
        dom: [],
        rng: ctc11
        },
      wagerDown: {
        decode: _wagerDown,
        dom: [],
        rng: ctc5
        },
      wagerUp: {
        decode: _wagerUp,
        dom: [],
        rng: ctc5
        }
      },
    views: {
      3: [ctc0, ctc1, ctc3, ctc4, ctc5, ctc5, ctc5, ctc6, ctc6, ctc8, ctc9, ctc9, ctc5, ctc11, ctc12, ctc14]
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
  const ctc3 = stdlib.T_Array(ctc1, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'));
  const ctc4 = stdlib.T_UInt;
  const ctc5 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc6 = stdlib.T_Bool;
  const ctc7 = stdlib.T_Contract;
  const ctc8 = stdlib.T_Tuple([ctc1, ctc7]);
  const ctc9 = stdlib.T_Tuple([ctc6]);
  const ctc10 = stdlib.T_Tuple([ctc4]);
  const ctc11 = stdlib.T_Tuple([]);
  const ctc12 = stdlib.T_Data({
    Oracle_addParticipant0_738: ctc8,
    Oracle_announceVerification0_738: ctc9,
    Oracle_announceWinner0_738: ctc10,
    Oracle_correctContract0_738: ctc11
    });
  const ctc13 = stdlib.T_Data({
    None: ctc0,
    Some: ctc8
    });
  const ctc14 = stdlib.T_Data({
    None: ctc0,
    Some: ctc6
    });
  
  
  const v2601 = stdlib.protect(ctc2, interact.addressSkeptic, 'for Alice\'s interact field addressSkeptic');
  const v2604 = stdlib.protect(ctc3, interact.addressesOracles, 'for Alice\'s interact field addressesOracles');
  const v2610 = stdlib.protect(ctc4, interact.deadline, 'for Alice\'s interact field deadline');
  const v2611 = stdlib.protect(ctc5, interact.interaction, 'for Alice\'s interact field interaction');
  const v2612 = stdlib.protect(ctc6, interact.isBottom, 'for Alice\'s interact field isBottom');
  const v2613 = stdlib.protect(ctc4, interact.wagerDown, 'for Alice\'s interact field wagerDown');
  const v2614 = stdlib.protect(ctc4, interact.wagerUp, 'for Alice\'s interact field wagerUp');
  
  const v2617 = stdlib.eq(v2613, stdlib.checkedBigNumberify('./claim.rsh:57:43:decimal', stdlib.UInt_max, '0'));
  const v2619 = v2612 ? v2617 : true;
  stdlib.assert(v2619, {
    at: './claim.rsh:57:11:application',
    fs: ['at ./claim.rsh:49:9:application call to [unknown function] (defined at: ./claim.rsh:49:13:function exp)'],
    msg: null,
    who: 'Alice'
    });
  
  const v2620 = stdlib.safeAdd(v2614, v2613);
  
  const txn1 = await (ctc.sendrecv({
    args: [v2604, v2601, v2611, v2614, v2613, v2610, v2612],
    evt_cnt: 7,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./claim.rsh:60:5:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc3, ctc2, ctc5, ctc4, ctc4, ctc4, ctc6],
    pay: [v2620, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v2622, v2623, v2624, v2625, v2626, v2627, v2628], secs: v2630, time: v2629, didSend: v58, from: v2621 } = txn1;
      
      const v2631 = stdlib.safeAdd(v2625, v2626);
      sim_r.txns.push({
        amt: v2631,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v2635 = v2628 ? false : true;
      const v2645 = [false, false, false, false, false];
      const v2647 = ['None', null];
      const v2668 = await ctc.getContractInfo();
      const v2669 = [v2621, v2668];
      const v2670 = ['Some', v2669];
      const v2680 = [v2670, v2647, v2647, v2647, v2647, v2647, v2647, v2647, v2647, v2647];
      const v2682 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
      const v2686 = ['None', null];
      const v2696 = [v2686, v2686, v2686, v2686, v2686];
      const v2718 = v2645;
      const v2719 = false;
      const v2720 = v2645;
      const v2721 = stdlib.checkedBigNumberify('./claim.rsh:87:23:decimal', stdlib.UInt_max, '1');
      const v2722 = v2680;
      const v2723 = v2682;
      const v2724 = v2696;
      const v2725 = v2629;
      
      if (await (async () => {
        const v3147 = v2719 ? false : true;
        
        return v3147;})()) {
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
    tys: [ctc3, ctc2, ctc5, ctc4, ctc4, ctc4, ctc6],
    waitIfNotPresent: false
    }));
  const {data: [v2622, v2623, v2624, v2625, v2626, v2627, v2628], secs: v2630, time: v2629, didSend: v58, from: v2621 } = txn1;
  const v2631 = stdlib.safeAdd(v2625, v2626);
  ;
  const v2634 = stdlib.eq(v2626, stdlib.checkedBigNumberify('./claim.rsh:62:42:decimal', stdlib.UInt_max, '0'));
  const v2635 = v2628 ? false : true;
  const v2636 = v2628 ? v2634 : true;
  stdlib.assert(v2636, {
    at: './claim.rsh:62:10:application',
    fs: [],
    msg: null,
    who: 'Alice'
    });
  const v2645 = [false, false, false, false, false];
  const v2647 = ['None', null];
  const v2668 = await ctc.getContractInfo();
  const v2669 = [v2621, v2668];
  const v2670 = ['Some', v2669];
  const v2680 = [v2670, v2647, v2647, v2647, v2647, v2647, v2647, v2647, v2647, v2647];
  const v2682 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
  const v2686 = ['None', null];
  const v2696 = [v2686, v2686, v2686, v2686, v2686];
  let v2718 = v2645;
  let v2719 = false;
  let v2720 = v2645;
  let v2721 = stdlib.checkedBigNumberify('./claim.rsh:87:23:decimal', stdlib.UInt_max, '1');
  let v2722 = v2680;
  let v2723 = v2682;
  let v2724 = v2696;
  let v2725 = v2629;
  
  let txn2 = txn1;
  while (await (async () => {
    const v3147 = v2719 ? false : true;
    
    return v3147;})()) {
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 2,
      out_tys: [ctc12],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v3437], secs: v3439, time: v3438, didSend: v2103, from: v3436 } = txn3;
    switch (v3437[0]) {
      case 'Oracle_addParticipant0_738': {
        const v3440 = v3437[1];
        undefined /* setApiDetails */;
        const v3445 = v3440[stdlib.checkedBigNumberify('./claim.rsh:120:10:spread', stdlib.UInt_max, '0')];
        const v3446 = v3440[stdlib.checkedBigNumberify('./claim.rsh:120:10:spread', stdlib.UInt_max, '1')];
        const v3447 = ['None', null];
        const v3448 = await stdlib.Array_asyncReduce([v2622], v3447, async([v3450], v3449, v3451) => {
          const v3452 = {
            None: 0,
            Some: 1
            }[v3449[0]];
          const v3453 = stdlib.eq(v3452, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
          const v3454 = stdlib.addressEq(v3450, v3436);
          const v3455 = v3453 ? v3454 : false;
          const v3456 = ['Some', v3451];
          const v3457 = v3455 ? v3456 : v3449;
          
          return v3457;})
        const v3458 = {
          None: 0,
          Some: 1
          }[v3448[0]];
        const v3459 = stdlib.eq(v3458, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        stdlib.assert(v3459, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./claim.rsh:122:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./claim.rsh:120:54:application call to [unknown function] (defined at: ./claim.rsh:120:54:function exp)', 'at ./claim.rsh:85:19:application call to [unknown function] (defined at: ./claim.rsh:120:54:function exp)', 'at ./claim.rsh:85:19:application call to [unknown function] (defined at: ./claim.rsh:85:19:function exp)'],
          msg: 'You are not an oracle',
          who: 'Alice'
          });
        const v3461 = stdlib.lt(v2721, stdlib.checkedBigNumberify('./claim.rsh:3:25:decimal', stdlib.UInt_max, '10'));
        stdlib.assert(v3461, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./claim.rsh:123:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./claim.rsh:120:54:application call to [unknown function] (defined at: ./claim.rsh:120:54:function exp)', 'at ./claim.rsh:85:19:application call to [unknown function] (defined at: ./claim.rsh:120:54:function exp)', 'at ./claim.rsh:85:19:application call to [unknown function] (defined at: ./claim.rsh:85:19:function exp)'],
          msg: 'Too many participants',
          who: 'Alice'
          });
        stdlib.assert(v2635, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./claim.rsh:124:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./claim.rsh:120:54:application call to [unknown function] (defined at: ./claim.rsh:120:54:function exp)', 'at ./claim.rsh:85:19:application call to [unknown function] (defined at: ./claim.rsh:120:54:function exp)', 'at ./claim.rsh:85:19:application call to [unknown function] (defined at: ./claim.rsh:85:19:function exp)'],
          msg: 'Cannot challenge a bottom claim',
          who: 'Alice'
          });
        const v3465 = await stdlib.Array_asyncReduce([v2722], false, async([v3467], v3466, v3468) => {
          const v3469 = [v3445, v3446];
          const v3470 = ['Some', v3469];
          const v3473 = stdlib.digest([ctc13], [v3470]);
          const v3474 = stdlib.digest([ctc13], [v3467]);
          const v3475 = stdlib.digestEq(v3473, v3474);
          const v3477 = v3466 ? v3466 : v3475;
          
          return v3477;})
        const v3478 = v3465 ? false : true;
        stdlib.assert(v3478, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./claim.rsh:126:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./claim.rsh:120:54:application call to [unknown function] (defined at: ./claim.rsh:120:54:function exp)', 'at ./claim.rsh:85:19:application call to [unknown function] (defined at: ./claim.rsh:120:54:function exp)', 'at ./claim.rsh:85:19:application call to [unknown function] (defined at: ./claim.rsh:85:19:function exp)'],
          msg: 'It is already a participant',
          who: 'Alice'
          });
        ;
        const v3547 = await stdlib.Array_asyncReduce([v2622], v3447, async([v3549], v3548, v3550) => {
          const v3551 = {
            None: 0,
            Some: 1
            }[v3548[0]];
          const v3552 = stdlib.eq(v3551, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
          const v3553 = stdlib.addressEq(v3549, v3436);
          const v3554 = v3552 ? v3553 : false;
          const v3555 = ['Some', v3550];
          const v3556 = v3554 ? v3555 : v3548;
          
          return v3556;})
        const v3557 = {
          None: 0,
          Some: 1
          }[v3547[0]];
        const v3558 = stdlib.eq(v3557, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        stdlib.assert(v3558, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./claim.rsh:122:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./claim.rsh:127:25:application call to [unknown function] (defined at: ./claim.rsh:127:25:function exp)'],
          msg: 'You are not an oracle',
          who: 'Alice'
          });
        const v3564 = await stdlib.Array_asyncReduce([v2722], false, async([v3566], v3565, v3567) => {
          const v3568 = [v3445, v3446];
          const v3569 = ['Some', v3568];
          const v3572 = stdlib.digest([ctc13], [v3569]);
          const v3573 = stdlib.digest([ctc13], [v3566]);
          const v3574 = stdlib.digestEq(v3572, v3573);
          const v3576 = v3565 ? v3565 : v3574;
          
          return v3576;})
        const v3577 = v3564 ? false : true;
        stdlib.assert(v3577, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./claim.rsh:126:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./claim.rsh:127:25:application call to [unknown function] (defined at: ./claim.rsh:127:25:function exp)'],
          msg: 'It is already a participant',
          who: 'Alice'
          });
        const v3581 = [v3445, v3446];
        const v3582 = ['Some', v3581];
        const v3584 = stdlib.Array_set(v2722, v2721, v3582);
        null;
        const v3585 = null;
        await txn3.getOutput('Oracle_addParticipant', 'v3585', ctc0, v3585);
        const v3593 = stdlib.safeAdd(v2721, stdlib.checkedBigNumberify('./claim.rsh:131:57:decimal', stdlib.UInt_max, '1'));
        const cv2718 = v2718;
        const cv2719 = false;
        const cv2720 = v2720;
        const cv2721 = v3593;
        const cv2722 = v3584;
        const cv2723 = v2723;
        const cv2724 = v2724;
        const cv2725 = v3438;
        
        v2718 = cv2718;
        v2719 = cv2719;
        v2720 = cv2720;
        v2721 = cv2721;
        v2722 = cv2722;
        v2723 = cv2723;
        v2724 = cv2724;
        v2725 = cv2725;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'Oracle_announceVerification0_738': {
        const v3765 = v3437[1];
        undefined /* setApiDetails */;
        const v3807 = ['None', null];
        const v3808 = await stdlib.Array_asyncReduce([v2622], v3807, async([v3810], v3809, v3811) => {
          const v3812 = {
            None: 0,
            Some: 1
            }[v3809[0]];
          const v3813 = stdlib.eq(v3812, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
          const v3814 = stdlib.addressEq(v3810, v3436);
          const v3815 = v3813 ? v3814 : false;
          const v3816 = ['Some', v3811];
          const v3817 = v3815 ? v3816 : v3809;
          
          return v3817;})
        const v3818 = {
          None: 0,
          Some: 1
          }[v3808[0]];
        const v3819 = stdlib.eq(v3818, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        stdlib.assert(v3819, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./claim.rsh:159:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./claim.rsh:157:51:application call to [unknown function] (defined at: ./claim.rsh:157:51:function exp)', 'at ./claim.rsh:85:19:application call to [unknown function] (defined at: ./claim.rsh:157:51:function exp)', 'at ./claim.rsh:85:19:application call to [unknown function] (defined at: ./claim.rsh:85:19:function exp)'],
          msg: 'You are not an oracle',
          who: 'Alice'
          });
        stdlib.assert(v2628, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./claim.rsh:160:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./claim.rsh:157:51:application call to [unknown function] (defined at: ./claim.rsh:157:51:function exp)', 'at ./claim.rsh:85:19:application call to [unknown function] (defined at: ./claim.rsh:157:51:function exp)', 'at ./claim.rsh:85:19:application call to [unknown function] (defined at: ./claim.rsh:85:19:function exp)'],
          msg: 'Can only announce formal verification if it is bottom',
          who: 'Alice'
          });
        const v3822 = stdlib.fromSome(v3808, stdlib.checkedBigNumberify('./claim.rsh:161:41:decimal', stdlib.UInt_max, '0'));
        const v3824 = v2724[v3822];
        const v3825 = {
          None: 0,
          Some: 1
          }[v3824[0]];
        const v3826 = stdlib.eq(v3825, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
        stdlib.assert(v3826, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./claim.rsh:162:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./claim.rsh:157:51:application call to [unknown function] (defined at: ./claim.rsh:157:51:function exp)', 'at ./claim.rsh:85:19:application call to [unknown function] (defined at: ./claim.rsh:157:51:function exp)', 'at ./claim.rsh:85:19:application call to [unknown function] (defined at: ./claim.rsh:85:19:function exp)'],
          msg: 'You already announced a verification',
          who: 'Alice'
          });
        ;
        const v3921 = v3765[stdlib.checkedBigNumberify('./claim.rsh:157:10:spread', stdlib.UInt_max, '0')];
        const v3923 = await stdlib.Array_asyncReduce([v2622], v3807, async([v3925], v3924, v3926) => {
          const v3927 = {
            None: 0,
            Some: 1
            }[v3924[0]];
          const v3928 = stdlib.eq(v3927, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
          const v3929 = stdlib.addressEq(v3925, v3436);
          const v3930 = v3928 ? v3929 : false;
          const v3931 = ['Some', v3926];
          const v3932 = v3930 ? v3931 : v3924;
          
          return v3932;})
        const v3933 = {
          None: 0,
          Some: 1
          }[v3923[0]];
        const v3934 = stdlib.eq(v3933, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        stdlib.assert(v3934, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./claim.rsh:159:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./claim.rsh:163:25:application call to [unknown function] (defined at: ./claim.rsh:163:25:function exp)'],
          msg: 'You are not an oracle',
          who: 'Alice'
          });
        const v3937 = stdlib.fromSome(v3923, stdlib.checkedBigNumberify('./claim.rsh:161:41:decimal', stdlib.UInt_max, '0'));
        const v3939 = v2724[v3937];
        const v3940 = {
          None: 0,
          Some: 1
          }[v3939[0]];
        const v3941 = stdlib.eq(v3940, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
        stdlib.assert(v3941, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./claim.rsh:162:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./claim.rsh:163:25:application call to [unknown function] (defined at: ./claim.rsh:163:25:function exp)'],
          msg: 'You already announced a verification',
          who: 'Alice'
          });
        const v3944 = ['Some', v3921];
        const v3946 = stdlib.Array_set(v2724, v3937, v3944);
        const v3947 = await stdlib.Array_asyncReduce([v3946], stdlib.checkedBigNumberify('reach standard library:170:22:decimal', stdlib.UInt_max, '0'), async([v3949], v3948, v3950) => {
          const v3952 = stdlib.digest([ctc14], [v3949]);
          const v3954 = stdlib.digest([ctc14], [v3944]);
          const v3955 = stdlib.digestEq(v3952, v3954);
          let v3956;
          if (v3955) {
            const v3957 = stdlib.safeAdd(v3948, stdlib.checkedBigNumberify('reach standard library:171:18:decimal', stdlib.UInt_max, '1'));
            v3956 = v3957;
            }
          else {
            v3956 = v3948;
            }
          
          return v3956;})
        const v3958 = stdlib.eq(v3947, stdlib.checkedBigNumberify('./claim.rsh:7:38:application', stdlib.UInt_max, '3'));
        if (v3958) {
          null;
          const v3959 = stdlib.fromSome(v2623, v2621);
          const v3960 = v3921 ? v2621 : v3959;
          ;
          const v3965 = null;
          await txn3.getOutput('Oracle_announceVerification', 'v3965', ctc0, v3965);
          const cv2718 = v2718;
          const cv2719 = true;
          const cv2720 = v2720;
          const cv2721 = v2721;
          const cv2722 = v2722;
          const cv2723 = v2723;
          const cv2724 = v3946;
          const cv2725 = v3438;
          
          v2718 = cv2718;
          v2719 = cv2719;
          v2720 = cv2720;
          v2721 = cv2721;
          v2722 = cv2722;
          v2723 = cv2723;
          v2724 = cv2724;
          v2725 = cv2725;
          
          txn2 = txn3;
          continue;}
        else {
          const v3973 = null;
          await txn3.getOutput('Oracle_announceVerification', 'v3973', ctc0, v3973);
          const cv2718 = v2718;
          const cv2719 = false;
          const cv2720 = v2720;
          const cv2721 = v2721;
          const cv2722 = v2722;
          const cv2723 = v2723;
          const cv2724 = v3946;
          const cv2725 = v3438;
          
          v2718 = cv2718;
          v2719 = cv2719;
          v2720 = cv2720;
          v2721 = cv2721;
          v2722 = cv2722;
          v2723 = cv2723;
          v2724 = cv2724;
          v2725 = cv2725;
          
          txn2 = txn3;
          continue;}
        break;
        }
      case 'Oracle_announceWinner0_738': {
        const v4090 = v3437[1];
        undefined /* setApiDetails */;
        const v4154 = v4090[stdlib.checkedBigNumberify('./claim.rsh:135:10:spread', stdlib.UInt_max, '0')];
        const v4155 = ['None', null];
        const v4156 = await stdlib.Array_asyncReduce([v2622], v4155, async([v4158], v4157, v4159) => {
          const v4160 = {
            None: 0,
            Some: 1
            }[v4157[0]];
          const v4161 = stdlib.eq(v4160, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
          const v4162 = stdlib.addressEq(v4158, v3436);
          const v4163 = v4161 ? v4162 : false;
          const v4164 = ['Some', v4159];
          const v4165 = v4163 ? v4164 : v4157;
          
          return v4165;})
        const v4166 = {
          None: 0,
          Some: 1
          }[v4156[0]];
        const v4167 = stdlib.eq(v4166, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        stdlib.assert(v4167, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./claim.rsh:137:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./claim.rsh:135:48:application call to [unknown function] (defined at: ./claim.rsh:135:48:function exp)', 'at ./claim.rsh:85:19:application call to [unknown function] (defined at: ./claim.rsh:135:48:function exp)', 'at ./claim.rsh:85:19:application call to [unknown function] (defined at: ./claim.rsh:85:19:function exp)'],
          msg: 'You are not an oracle',
          who: 'Alice'
          });
        const v4169 = stdlib.fromSome(v4156, stdlib.checkedBigNumberify('./claim.rsh:138:49:decimal', stdlib.UInt_max, '0'));
        const v4171 = v2718[v4169];
        const v4172 = v4171 ? false : true;
        stdlib.assert(v4172, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./claim.rsh:138:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./claim.rsh:135:48:application call to [unknown function] (defined at: ./claim.rsh:135:48:function exp)', 'at ./claim.rsh:85:19:application call to [unknown function] (defined at: ./claim.rsh:135:48:function exp)', 'at ./claim.rsh:85:19:application call to [unknown function] (defined at: ./claim.rsh:85:19:function exp)'],
          msg: 'You already declared a winner',
          who: 'Alice'
          });
        const v4174 = stdlib.lt(v4154, v2721);
        stdlib.assert(v4174, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./claim.rsh:139:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./claim.rsh:135:48:application call to [unknown function] (defined at: ./claim.rsh:135:48:function exp)', 'at ./claim.rsh:85:19:application call to [unknown function] (defined at: ./claim.rsh:135:48:function exp)', 'at ./claim.rsh:85:19:application call to [unknown function] (defined at: ./claim.rsh:85:19:function exp)'],
          msg: 'This participant does not exist.',
          who: 'Alice'
          });
        stdlib.assert(v2635, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./claim.rsh:140:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./claim.rsh:135:48:application call to [unknown function] (defined at: ./claim.rsh:135:48:function exp)', 'at ./claim.rsh:85:19:application call to [unknown function] (defined at: ./claim.rsh:135:48:function exp)', 'at ./claim.rsh:85:19:application call to [unknown function] (defined at: ./claim.rsh:85:19:function exp)'],
          msg: 'Can only announce verification.',
          who: 'Alice'
          });
        ;
        const v4309 = await stdlib.Array_asyncReduce([v2622], v4155, async([v4311], v4310, v4312) => {
          const v4313 = {
            None: 0,
            Some: 1
            }[v4310[0]];
          const v4314 = stdlib.eq(v4313, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
          const v4315 = stdlib.addressEq(v4311, v3436);
          const v4316 = v4314 ? v4315 : false;
          const v4317 = ['Some', v4312];
          const v4318 = v4316 ? v4317 : v4310;
          
          return v4318;})
        const v4319 = {
          None: 0,
          Some: 1
          }[v4309[0]];
        const v4320 = stdlib.eq(v4319, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        stdlib.assert(v4320, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./claim.rsh:137:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./claim.rsh:141:25:application call to [unknown function] (defined at: ./claim.rsh:141:25:function exp)'],
          msg: 'You are not an oracle',
          who: 'Alice'
          });
        const v4322 = stdlib.fromSome(v4309, stdlib.checkedBigNumberify('./claim.rsh:138:49:decimal', stdlib.UInt_max, '0'));
        const v4324 = v2718[v4322];
        const v4325 = v4324 ? false : true;
        stdlib.assert(v4325, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./claim.rsh:138:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./claim.rsh:141:25:application call to [unknown function] (defined at: ./claim.rsh:141:25:function exp)'],
          msg: 'You already declared a winner',
          who: 'Alice'
          });
        const v4334 = stdlib.Array_set(v2718, v4322, true);
        const v4336 = v2723[v4154];
        const v4337 = stdlib.safeAdd(v4336, stdlib.checkedBigNumberify('./claim.rsh:143:48:decimal', stdlib.UInt_max, '1'));
        const v4339 = stdlib.Array_set(v2723, v4154, v4337);
        const v4340 = stdlib.eq(v4337, stdlib.checkedBigNumberify('./claim.rsh:7:38:application', stdlib.UInt_max, '3'));
        if (v4340) {
          const v4342 = v2722[v4154];
          const v4345 = stdlib.fromSome(v4342, v2669);
          const v4346 = v4345[stdlib.checkedBigNumberify('./claim.rsh:148:34:array ref', stdlib.UInt_max, '0')];
          const v4347 = v4345[stdlib.checkedBigNumberify('./claim.rsh:148:45:array ref', stdlib.UInt_max, '1')];
          null;
          ;
          const v4353 = stdlib.eq(v4154, stdlib.checkedBigNumberify('./claim.rsh:150:47:decimal', stdlib.UInt_max, '0'));
          const v4354 = stdlib.fromSome(v2623, v2621);
          const v4355 = v4353 ? v2621 : v4354;
          ;
          const v4360 = null;
          await txn3.getOutput('Oracle_announceWinner', 'v4360', ctc0, v4360);
          const cv2718 = v4334;
          const cv2719 = true;
          const cv2720 = v2720;
          const cv2721 = v2721;
          const cv2722 = v2722;
          const cv2723 = v4339;
          const cv2724 = v2724;
          const cv2725 = v3438;
          
          v2718 = cv2718;
          v2719 = cv2719;
          v2720 = cv2720;
          v2721 = cv2721;
          v2722 = cv2722;
          v2723 = cv2723;
          v2724 = cv2724;
          v2725 = cv2725;
          
          txn2 = txn3;
          continue;}
        else {
          const v4368 = null;
          await txn3.getOutput('Oracle_announceWinner', 'v4368', ctc0, v4368);
          const cv2718 = v4334;
          const cv2719 = false;
          const cv2720 = v2720;
          const cv2721 = v2721;
          const cv2722 = v2722;
          const cv2723 = v4339;
          const cv2724 = v2724;
          const cv2725 = v3438;
          
          v2718 = cv2718;
          v2719 = cv2719;
          v2720 = cv2720;
          v2721 = cv2721;
          v2722 = cv2722;
          v2723 = cv2723;
          v2724 = cv2724;
          v2725 = cv2725;
          
          txn2 = txn3;
          continue;}
        break;
        }
      case 'Oracle_correctContract0_738': {
        const v4415 = v3437[1];
        undefined /* setApiDetails */;
        const v4504 = ['None', null];
        const v4505 = await stdlib.Array_asyncReduce([v2622], v4504, async([v4507], v4506, v4508) => {
          const v4509 = {
            None: 0,
            Some: 1
            }[v4506[0]];
          const v4510 = stdlib.eq(v4509, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
          const v4511 = stdlib.addressEq(v4507, v3436);
          const v4512 = v4510 ? v4511 : false;
          const v4513 = ['Some', v4508];
          const v4514 = v4512 ? v4513 : v4506;
          
          return v4514;})
        const v4515 = {
          None: 0,
          Some: 1
          }[v4505[0]];
        const v4516 = stdlib.eq(v4515, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        stdlib.assert(v4516, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./claim.rsh:109:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./claim.rsh:107:38:application call to [unknown function] (defined at: ./claim.rsh:107:38:function exp)', 'at ./claim.rsh:85:19:application call to [unknown function] (defined at: ./claim.rsh:107:38:function exp)', 'at ./claim.rsh:85:19:application call to [unknown function] (defined at: ./claim.rsh:85:19:function exp)'],
          msg: 'You are not an oracle',
          who: 'Alice'
          });
        ;
        const v4703 = await stdlib.Array_asyncReduce([v2622], v4504, async([v4705], v4704, v4706) => {
          const v4707 = {
            None: 0,
            Some: 1
            }[v4704[0]];
          const v4708 = stdlib.eq(v4707, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
          const v4709 = stdlib.addressEq(v4705, v3436);
          const v4710 = v4708 ? v4709 : false;
          const v4711 = ['Some', v4706];
          const v4712 = v4710 ? v4711 : v4704;
          
          return v4712;})
        const v4713 = {
          None: 0,
          Some: 1
          }[v4703[0]];
        const v4714 = stdlib.eq(v4713, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        stdlib.assert(v4714, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./claim.rsh:109:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./claim.rsh:110:25:application call to [unknown function] (defined at: ./claim.rsh:110:25:function exp)'],
          msg: 'You are not an oracle',
          who: 'Alice'
          });
        const v4716 = stdlib.fromSome(v4703, stdlib.checkedBigNumberify('./claim.rsh:111:60:decimal', stdlib.UInt_max, '0'));
        const v4718 = stdlib.Array_set(v2720, v4716, true);
        const v4719 = await stdlib.Array_asyncReduce([v4718], stdlib.checkedBigNumberify('reach standard library:170:22:decimal', stdlib.UInt_max, '0'), async([v4721], v4720, v4722) => {
          let v4723;
          if (v4721) {
            const v4724 = stdlib.safeAdd(v4720, stdlib.checkedBigNumberify('reach standard library:171:18:decimal', stdlib.UInt_max, '1'));
            v4723 = v4724;
            }
          else {
            v4723 = v4720;
            }
          
          return v4723;})
        const v4725 = stdlib.eq(v4719, stdlib.checkedBigNumberify('./claim.rsh:7:38:application', stdlib.UInt_max, '3'));
        if (v4725) {
          null;
          const v4726 = null;
          await txn3.getOutput('Oracle_correctContract', 'v4726', ctc0, v4726);
          const cv2718 = v2718;
          const cv2719 = false;
          const cv2720 = v4718;
          const cv2721 = v2721;
          const cv2722 = v2722;
          const cv2723 = v2723;
          const cv2724 = v2724;
          const cv2725 = v3438;
          
          v2718 = cv2718;
          v2719 = cv2719;
          v2720 = cv2720;
          v2721 = cv2721;
          v2722 = cv2722;
          v2723 = cv2723;
          v2724 = cv2724;
          v2725 = cv2725;
          
          txn2 = txn3;
          continue;}
        else {
          const v4733 = null;
          await txn3.getOutput('Oracle_correctContract', 'v4733', ctc0, v4733);
          const cv2718 = v2718;
          const cv2719 = false;
          const cv2720 = v4718;
          const cv2721 = v2721;
          const cv2722 = v2722;
          const cv2723 = v2723;
          const cv2724 = v2724;
          const cv2725 = v3438;
          
          v2718 = cv2718;
          v2719 = cv2719;
          v2720 = cv2720;
          v2721 = cv2721;
          v2722 = cv2722;
          v2723 = cv2723;
          v2724 = cv2724;
          v2725 = cv2725;
          
          txn2 = txn3;
          continue;}
        break;
        }
      }
    
    }
  return;
  
  
  };
export async function _Oracle_addParticipant3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Oracle_addParticipant3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Oracle_addParticipant3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Array(ctc0, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'));
  const ctc2 = stdlib.T_Null;
  const ctc3 = stdlib.T_Data({
    None: ctc2,
    Some: ctc0
    });
  const ctc4 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc5 = stdlib.T_UInt;
  const ctc6 = stdlib.T_Bool;
  const ctc7 = stdlib.T_Contract;
  const ctc8 = stdlib.T_Tuple([ctc0, ctc7]);
  const ctc9 = stdlib.T_Array(ctc6, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'));
  const ctc10 = stdlib.T_Data({
    None: ctc2,
    Some: ctc8
    });
  const ctc11 = stdlib.T_Array(ctc10, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '10'));
  const ctc12 = stdlib.T_Array(ctc5, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '10'));
  const ctc13 = stdlib.T_Data({
    None: ctc2,
    Some: ctc6
    });
  const ctc14 = stdlib.T_Array(ctc13, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'));
  const ctc15 = stdlib.T_Tuple([ctc6]);
  const ctc16 = stdlib.T_Tuple([ctc5]);
  const ctc17 = stdlib.T_Tuple([]);
  const ctc18 = stdlib.T_Data({
    Oracle_addParticipant0_738: ctc8,
    Oracle_announceVerification0_738: ctc15,
    Oracle_announceWinner0_738: ctc16,
    Oracle_correctContract0_738: ctc17
    });
  
  
  const [v2621, v2622, v2623, v2624, v2625, v2626, v2627, v2628, v2635, v2669, v2718, v2720, v2721, v2722, v2723, v2724] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc0, ctc1, ctc3, ctc4, ctc5, ctc5, ctc5, ctc6, ctc6, ctc8, ctc9, ctc9, ctc5, ctc11, ctc12, ctc14]);
  const v3220 = ctc.selfAddress();
  const v3222 = stdlib.protect(ctc8, await interact.in(), {
    at: './claim.rsh:1:23:application',
    fs: ['at ./claim.rsh:120:54:application call to [unknown function] (defined at: ./claim.rsh:120:54:function exp)', 'at ./claim.rsh:85:19:application call to "runOracle_addParticipant0_738" (defined at: ./claim.rsh:120:10:function exp)', 'at ./claim.rsh:85:19:application call to [unknown function] (defined at: ./claim.rsh:85:19:function exp)'],
    msg: 'in',
    who: 'Oracle_addParticipant'
    });
  const v3223 = v3222[stdlib.checkedBigNumberify('./claim.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v3224 = v3222[stdlib.checkedBigNumberify('./claim.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v3227 = ['None', null];
  const v3228 = await stdlib.Array_asyncReduce([v2622], v3227, async([v3230], v3229, v3231) => {
    const v3232 = {
      None: 0,
      Some: 1
      }[v3229[0]];
    const v3233 = stdlib.eq(v3232, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
    const v3234 = stdlib.addressEq(v3230, v3220);
    const v3235 = v3233 ? v3234 : false;
    const v3236 = ['Some', v3231];
    const v3237 = v3235 ? v3236 : v3229;
    
    return v3237;})
  const v3238 = {
    None: 0,
    Some: 1
    }[v3228[0]];
  const v3239 = stdlib.eq(v3238, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v3239, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./claim.rsh:122:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./claim.rsh:120:54:application call to [unknown function] (defined at: ./claim.rsh:120:54:function exp)', 'at ./claim.rsh:85:19:application call to "runOracle_addParticipant0_738" (defined at: ./claim.rsh:120:10:function exp)', 'at ./claim.rsh:85:19:application call to [unknown function] (defined at: ./claim.rsh:85:19:function exp)'],
    msg: 'You are not an oracle',
    who: 'Oracle_addParticipant'
    });
  const v3241 = stdlib.lt(v2721, stdlib.checkedBigNumberify('./claim.rsh:3:25:decimal', stdlib.UInt_max, '10'));
  stdlib.assert(v3241, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./claim.rsh:123:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./claim.rsh:120:54:application call to [unknown function] (defined at: ./claim.rsh:120:54:function exp)', 'at ./claim.rsh:85:19:application call to "runOracle_addParticipant0_738" (defined at: ./claim.rsh:120:10:function exp)', 'at ./claim.rsh:85:19:application call to [unknown function] (defined at: ./claim.rsh:85:19:function exp)'],
    msg: 'Too many participants',
    who: 'Oracle_addParticipant'
    });
  stdlib.assert(v2635, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./claim.rsh:124:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./claim.rsh:120:54:application call to [unknown function] (defined at: ./claim.rsh:120:54:function exp)', 'at ./claim.rsh:85:19:application call to "runOracle_addParticipant0_738" (defined at: ./claim.rsh:120:10:function exp)', 'at ./claim.rsh:85:19:application call to [unknown function] (defined at: ./claim.rsh:85:19:function exp)'],
    msg: 'Cannot challenge a bottom claim',
    who: 'Oracle_addParticipant'
    });
  const v3245 = await stdlib.Array_asyncReduce([v2722], false, async([v3247], v3246, v3248) => {
    const v3249 = [v3223, v3224];
    const v3250 = ['Some', v3249];
    const v3253 = stdlib.digest([ctc10], [v3250]);
    const v3254 = stdlib.digest([ctc10], [v3247]);
    const v3255 = stdlib.digestEq(v3253, v3254);
    const v3257 = v3246 ? v3246 : v3255;
    
    return v3257;})
  const v3258 = v3245 ? false : true;
  stdlib.assert(v3258, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./claim.rsh:126:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./claim.rsh:120:54:application call to [unknown function] (defined at: ./claim.rsh:120:54:function exp)', 'at ./claim.rsh:85:19:application call to "runOracle_addParticipant0_738" (defined at: ./claim.rsh:120:10:function exp)', 'at ./claim.rsh:85:19:application call to [unknown function] (defined at: ./claim.rsh:85:19:function exp)'],
    msg: 'It is already a participant',
    who: 'Oracle_addParticipant'
    });
  const v3267 = ['Oracle_addParticipant0_738', v3222];
  
  const v3341 = await stdlib.Array_asyncReduce([v2622], v3227, async([v3343], v3342, v3344) => {
    const v3345 = {
      None: 0,
      Some: 1
      }[v3342[0]];
    const v3346 = stdlib.eq(v3345, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
    const v3347 = stdlib.addressEq(v3343, v3220);
    const v3348 = v3346 ? v3347 : false;
    const v3349 = ['Some', v3344];
    const v3350 = v3348 ? v3349 : v3342;
    
    return v3350;})
  const v3351 = {
    None: 0,
    Some: 1
    }[v3341[0]];
  const v3352 = stdlib.eq(v3351, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v3352, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./claim.rsh:122:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./claim.rsh:120:54:application call to [unknown function] (defined at: ./claim.rsh:120:54:function exp)', 'at ./claim.rsh:85:19:application call to [unknown function] (defined at: ./claim.rsh:120:54:function exp)', 'at ./claim.rsh:85:19:application call to [unknown function] (defined at: ./claim.rsh:85:19:function exp)'],
    msg: 'You are not an oracle',
    who: 'Oracle_addParticipant'
    });
  const v3358 = await stdlib.Array_asyncReduce([v2722], false, async([v3360], v3359, v3361) => {
    const v3362 = [v3223, v3224];
    const v3363 = ['Some', v3362];
    const v3366 = stdlib.digest([ctc10], [v3363]);
    const v3367 = stdlib.digest([ctc10], [v3360]);
    const v3368 = stdlib.digestEq(v3366, v3367);
    const v3370 = v3359 ? v3359 : v3368;
    
    return v3370;})
  const v3371 = v3358 ? false : true;
  stdlib.assert(v3371, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./claim.rsh:126:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./claim.rsh:120:54:application call to [unknown function] (defined at: ./claim.rsh:120:54:function exp)', 'at ./claim.rsh:85:19:application call to [unknown function] (defined at: ./claim.rsh:120:54:function exp)', 'at ./claim.rsh:85:19:application call to [unknown function] (defined at: ./claim.rsh:85:19:function exp)'],
    msg: 'It is already a participant',
    who: 'Oracle_addParticipant'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v2621, v2622, v2623, v2624, v2625, v2626, v2627, v2628, v2635, v2669, v2718, v2720, v2721, v2722, v2723, v2724, v3267],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc18],
    pay: [stdlib.checkedBigNumberify('./claim.rsh:127:16:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v3437], secs: v3439, time: v3438, didSend: v2103, from: v3436 } = txn1;
      
      switch (v3437[0]) {
        case 'Oracle_addParticipant0_738': {
          const v3440 = v3437[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Oracle_addParticipant"
            });
          const v3445 = v3440[stdlib.checkedBigNumberify('./claim.rsh:120:10:spread', stdlib.UInt_max, '0')];
          const v3446 = v3440[stdlib.checkedBigNumberify('./claim.rsh:120:10:spread', stdlib.UInt_max, '1')];
          ;
          const v3581 = [v3445, v3446];
          const v3582 = ['Some', v3581];
          const v3584 = stdlib.Array_set(v2722, v2721, v3582);
          null;
          const v3585 = null;
          const v3586 = await txn1.getOutput('Oracle_addParticipant', 'v3585', ctc2, v3585);
          
          const v3593 = stdlib.safeAdd(v2721, stdlib.checkedBigNumberify('./claim.rsh:131:57:decimal', stdlib.UInt_max, '1'));
          const v28743 = v2718;
          const v28745 = v2720;
          const v28746 = v3593;
          const v28747 = v3584;
          const v28748 = v2723;
          const v28749 = v2724;
          sim_r.isHalt = false;
          
          break;
          }
        case 'Oracle_announceVerification0_738': {
          const v3765 = v3437[1];
          
          break;
          }
        case 'Oracle_announceWinner0_738': {
          const v4090 = v3437[1];
          
          break;
          }
        case 'Oracle_correctContract0_738': {
          const v4415 = v3437[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc3, ctc4, ctc5, ctc5, ctc5, ctc6, ctc6, ctc8, ctc9, ctc9, ctc5, ctc11, ctc12, ctc14, ctc18],
    waitIfNotPresent: false
    }));
  const {data: [v3437], secs: v3439, time: v3438, didSend: v2103, from: v3436 } = txn1;
  switch (v3437[0]) {
    case 'Oracle_addParticipant0_738': {
      const v3440 = v3437[1];
      undefined /* setApiDetails */;
      const v3445 = v3440[stdlib.checkedBigNumberify('./claim.rsh:120:10:spread', stdlib.UInt_max, '0')];
      const v3446 = v3440[stdlib.checkedBigNumberify('./claim.rsh:120:10:spread', stdlib.UInt_max, '1')];
      const v3447 = ['None', null];
      const v3448 = await stdlib.Array_asyncReduce([v2622], v3447, async([v3450], v3449, v3451) => {
        const v3452 = {
          None: 0,
          Some: 1
          }[v3449[0]];
        const v3453 = stdlib.eq(v3452, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
        const v3454 = stdlib.addressEq(v3450, v3436);
        const v3455 = v3453 ? v3454 : false;
        const v3456 = ['Some', v3451];
        const v3457 = v3455 ? v3456 : v3449;
        
        return v3457;})
      const v3458 = {
        None: 0,
        Some: 1
        }[v3448[0]];
      const v3459 = stdlib.eq(v3458, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      stdlib.assert(v3459, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./claim.rsh:122:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./claim.rsh:120:54:application call to [unknown function] (defined at: ./claim.rsh:120:54:function exp)', 'at ./claim.rsh:85:19:application call to [unknown function] (defined at: ./claim.rsh:120:54:function exp)', 'at ./claim.rsh:85:19:application call to [unknown function] (defined at: ./claim.rsh:85:19:function exp)'],
        msg: 'You are not an oracle',
        who: 'Oracle_addParticipant'
        });
      const v3461 = stdlib.lt(v2721, stdlib.checkedBigNumberify('./claim.rsh:3:25:decimal', stdlib.UInt_max, '10'));
      stdlib.assert(v3461, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./claim.rsh:123:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./claim.rsh:120:54:application call to [unknown function] (defined at: ./claim.rsh:120:54:function exp)', 'at ./claim.rsh:85:19:application call to [unknown function] (defined at: ./claim.rsh:120:54:function exp)', 'at ./claim.rsh:85:19:application call to [unknown function] (defined at: ./claim.rsh:85:19:function exp)'],
        msg: 'Too many participants',
        who: 'Oracle_addParticipant'
        });
      stdlib.assert(v2635, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./claim.rsh:124:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./claim.rsh:120:54:application call to [unknown function] (defined at: ./claim.rsh:120:54:function exp)', 'at ./claim.rsh:85:19:application call to [unknown function] (defined at: ./claim.rsh:120:54:function exp)', 'at ./claim.rsh:85:19:application call to [unknown function] (defined at: ./claim.rsh:85:19:function exp)'],
        msg: 'Cannot challenge a bottom claim',
        who: 'Oracle_addParticipant'
        });
      const v3465 = await stdlib.Array_asyncReduce([v2722], false, async([v3467], v3466, v3468) => {
        const v3469 = [v3445, v3446];
        const v3470 = ['Some', v3469];
        const v3473 = stdlib.digest([ctc10], [v3470]);
        const v3474 = stdlib.digest([ctc10], [v3467]);
        const v3475 = stdlib.digestEq(v3473, v3474);
        const v3477 = v3466 ? v3466 : v3475;
        
        return v3477;})
      const v3478 = v3465 ? false : true;
      stdlib.assert(v3478, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./claim.rsh:126:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./claim.rsh:120:54:application call to [unknown function] (defined at: ./claim.rsh:120:54:function exp)', 'at ./claim.rsh:85:19:application call to [unknown function] (defined at: ./claim.rsh:120:54:function exp)', 'at ./claim.rsh:85:19:application call to [unknown function] (defined at: ./claim.rsh:85:19:function exp)'],
        msg: 'It is already a participant',
        who: 'Oracle_addParticipant'
        });
      ;
      const v3547 = await stdlib.Array_asyncReduce([v2622], v3447, async([v3549], v3548, v3550) => {
        const v3551 = {
          None: 0,
          Some: 1
          }[v3548[0]];
        const v3552 = stdlib.eq(v3551, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
        const v3553 = stdlib.addressEq(v3549, v3436);
        const v3554 = v3552 ? v3553 : false;
        const v3555 = ['Some', v3550];
        const v3556 = v3554 ? v3555 : v3548;
        
        return v3556;})
      const v3557 = {
        None: 0,
        Some: 1
        }[v3547[0]];
      const v3558 = stdlib.eq(v3557, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      stdlib.assert(v3558, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./claim.rsh:122:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./claim.rsh:127:25:application call to [unknown function] (defined at: ./claim.rsh:127:25:function exp)'],
        msg: 'You are not an oracle',
        who: 'Oracle_addParticipant'
        });
      const v3564 = await stdlib.Array_asyncReduce([v2722], false, async([v3566], v3565, v3567) => {
        const v3568 = [v3445, v3446];
        const v3569 = ['Some', v3568];
        const v3572 = stdlib.digest([ctc10], [v3569]);
        const v3573 = stdlib.digest([ctc10], [v3566]);
        const v3574 = stdlib.digestEq(v3572, v3573);
        const v3576 = v3565 ? v3565 : v3574;
        
        return v3576;})
      const v3577 = v3564 ? false : true;
      stdlib.assert(v3577, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./claim.rsh:126:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./claim.rsh:127:25:application call to [unknown function] (defined at: ./claim.rsh:127:25:function exp)'],
        msg: 'It is already a participant',
        who: 'Oracle_addParticipant'
        });
      const v3581 = [v3445, v3446];
      const v3582 = ['Some', v3581];
      const v3584 = stdlib.Array_set(v2722, v2721, v3582);
      null;
      const v3585 = null;
      const v3586 = await txn1.getOutput('Oracle_addParticipant', 'v3585', ctc2, v3585);
      if (v2103) {
        stdlib.protect(ctc2, await interact.out(v3440, v3586), {
          at: './claim.rsh:120:11:application',
          fs: ['at ./claim.rsh:120:11:application call to [unknown function] (defined at: ./claim.rsh:120:11:function exp)', 'at ./claim.rsh:130:12:application call to "ret" (defined at: ./claim.rsh:127:25:function exp)', 'at ./claim.rsh:127:25:application call to [unknown function] (defined at: ./claim.rsh:127:25:function exp)'],
          msg: 'out',
          who: 'Oracle_addParticipant'
          });
        }
      else {
        }
      
      const v3593 = stdlib.safeAdd(v2721, stdlib.checkedBigNumberify('./claim.rsh:131:57:decimal', stdlib.UInt_max, '1'));
      const v28743 = v2718;
      const v28745 = v2720;
      const v28746 = v3593;
      const v28747 = v3584;
      const v28748 = v2723;
      const v28749 = v2724;
      return;
      
      break;
      }
    case 'Oracle_announceVerification0_738': {
      const v3765 = v3437[1];
      return;
      break;
      }
    case 'Oracle_announceWinner0_738': {
      const v4090 = v3437[1];
      return;
      break;
      }
    case 'Oracle_correctContract0_738': {
      const v4415 = v3437[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Oracle_announceVerification3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Oracle_announceVerification3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Oracle_announceVerification3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Array(ctc0, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'));
  const ctc2 = stdlib.T_Null;
  const ctc3 = stdlib.T_Data({
    None: ctc2,
    Some: ctc0
    });
  const ctc4 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc5 = stdlib.T_UInt;
  const ctc6 = stdlib.T_Bool;
  const ctc7 = stdlib.T_Contract;
  const ctc8 = stdlib.T_Tuple([ctc0, ctc7]);
  const ctc9 = stdlib.T_Array(ctc6, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'));
  const ctc10 = stdlib.T_Data({
    None: ctc2,
    Some: ctc8
    });
  const ctc11 = stdlib.T_Array(ctc10, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '10'));
  const ctc12 = stdlib.T_Array(ctc5, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '10'));
  const ctc13 = stdlib.T_Data({
    None: ctc2,
    Some: ctc6
    });
  const ctc14 = stdlib.T_Array(ctc13, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'));
  const ctc15 = stdlib.T_Tuple([ctc6]);
  const ctc16 = stdlib.T_Tuple([ctc5]);
  const ctc17 = stdlib.T_Tuple([]);
  const ctc18 = stdlib.T_Data({
    Oracle_addParticipant0_738: ctc8,
    Oracle_announceVerification0_738: ctc15,
    Oracle_announceWinner0_738: ctc16,
    Oracle_correctContract0_738: ctc17
    });
  
  
  const [v2621, v2622, v2623, v2624, v2625, v2626, v2627, v2628, v2635, v2669, v2718, v2720, v2721, v2722, v2723, v2724] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc0, ctc1, ctc3, ctc4, ctc5, ctc5, ctc5, ctc6, ctc6, ctc8, ctc9, ctc9, ctc5, ctc11, ctc12, ctc14]);
  const v3304 = ctc.selfAddress();
  const v3306 = stdlib.protect(ctc15, await interact.in(), {
    at: './claim.rsh:1:23:application',
    fs: ['at ./claim.rsh:157:51:application call to [unknown function] (defined at: ./claim.rsh:157:51:function exp)', 'at ./claim.rsh:85:19:application call to "runOracle_announceVerification0_738" (defined at: ./claim.rsh:157:10:function exp)', 'at ./claim.rsh:85:19:application call to [unknown function] (defined at: ./claim.rsh:85:19:function exp)'],
    msg: 'in',
    who: 'Oracle_announceVerification'
    });
  const v3309 = ['None', null];
  const v3310 = await stdlib.Array_asyncReduce([v2622], v3309, async([v3312], v3311, v3313) => {
    const v3314 = {
      None: 0,
      Some: 1
      }[v3311[0]];
    const v3315 = stdlib.eq(v3314, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
    const v3316 = stdlib.addressEq(v3312, v3304);
    const v3317 = v3315 ? v3316 : false;
    const v3318 = ['Some', v3313];
    const v3319 = v3317 ? v3318 : v3311;
    
    return v3319;})
  const v3320 = {
    None: 0,
    Some: 1
    }[v3310[0]];
  const v3321 = stdlib.eq(v3320, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v3321, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./claim.rsh:159:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./claim.rsh:157:51:application call to [unknown function] (defined at: ./claim.rsh:157:51:function exp)', 'at ./claim.rsh:85:19:application call to "runOracle_announceVerification0_738" (defined at: ./claim.rsh:157:10:function exp)', 'at ./claim.rsh:85:19:application call to [unknown function] (defined at: ./claim.rsh:85:19:function exp)'],
    msg: 'You are not an oracle',
    who: 'Oracle_announceVerification'
    });
  stdlib.assert(v2628, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./claim.rsh:160:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./claim.rsh:157:51:application call to [unknown function] (defined at: ./claim.rsh:157:51:function exp)', 'at ./claim.rsh:85:19:application call to "runOracle_announceVerification0_738" (defined at: ./claim.rsh:157:10:function exp)', 'at ./claim.rsh:85:19:application call to [unknown function] (defined at: ./claim.rsh:85:19:function exp)'],
    msg: 'Can only announce formal verification if it is bottom',
    who: 'Oracle_announceVerification'
    });
  const v3324 = stdlib.fromSome(v3310, stdlib.checkedBigNumberify('./claim.rsh:161:41:decimal', stdlib.UInt_max, '0'));
  const v3326 = v2724[v3324];
  const v3327 = {
    None: 0,
    Some: 1
    }[v3326[0]];
  const v3328 = stdlib.eq(v3327, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
  stdlib.assert(v3328, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./claim.rsh:162:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./claim.rsh:157:51:application call to [unknown function] (defined at: ./claim.rsh:157:51:function exp)', 'at ./claim.rsh:85:19:application call to "runOracle_announceVerification0_738" (defined at: ./claim.rsh:157:10:function exp)', 'at ./claim.rsh:85:19:application call to [unknown function] (defined at: ./claim.rsh:85:19:function exp)'],
    msg: 'You already announced a verification',
    who: 'Oracle_announceVerification'
    });
  const v3335 = ['Oracle_announceVerification0_738', v3306];
  
  const v3376 = await stdlib.Array_asyncReduce([v2622], v3309, async([v3378], v3377, v3379) => {
    const v3380 = {
      None: 0,
      Some: 1
      }[v3377[0]];
    const v3381 = stdlib.eq(v3380, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
    const v3382 = stdlib.addressEq(v3378, v3304);
    const v3383 = v3381 ? v3382 : false;
    const v3384 = ['Some', v3379];
    const v3385 = v3383 ? v3384 : v3377;
    
    return v3385;})
  const v3386 = {
    None: 0,
    Some: 1
    }[v3376[0]];
  const v3387 = stdlib.eq(v3386, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v3387, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./claim.rsh:159:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./claim.rsh:157:51:application call to [unknown function] (defined at: ./claim.rsh:157:51:function exp)', 'at ./claim.rsh:85:19:application call to [unknown function] (defined at: ./claim.rsh:157:51:function exp)', 'at ./claim.rsh:85:19:application call to [unknown function] (defined at: ./claim.rsh:85:19:function exp)'],
    msg: 'You are not an oracle',
    who: 'Oracle_announceVerification'
    });
  const v3390 = stdlib.fromSome(v3376, stdlib.checkedBigNumberify('./claim.rsh:161:41:decimal', stdlib.UInt_max, '0'));
  const v3392 = v2724[v3390];
  const v3393 = {
    None: 0,
    Some: 1
    }[v3392[0]];
  const v3394 = stdlib.eq(v3393, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
  stdlib.assert(v3394, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./claim.rsh:162:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./claim.rsh:157:51:application call to [unknown function] (defined at: ./claim.rsh:157:51:function exp)', 'at ./claim.rsh:85:19:application call to [unknown function] (defined at: ./claim.rsh:157:51:function exp)', 'at ./claim.rsh:85:19:application call to [unknown function] (defined at: ./claim.rsh:85:19:function exp)'],
    msg: 'You already announced a verification',
    who: 'Oracle_announceVerification'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v2621, v2622, v2623, v2624, v2625, v2626, v2627, v2628, v2635, v2669, v2718, v2720, v2721, v2722, v2723, v2724, v3335],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc18],
    pay: [stdlib.checkedBigNumberify('./claim.rsh:163:16:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v3437], secs: v3439, time: v3438, didSend: v2103, from: v3436 } = txn1;
      
      switch (v3437[0]) {
        case 'Oracle_addParticipant0_738': {
          const v3440 = v3437[1];
          
          break;
          }
        case 'Oracle_announceVerification0_738': {
          const v3765 = v3437[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Oracle_announceVerification"
            });
          const v3807 = ['None', null];
          ;
          const v3921 = v3765[stdlib.checkedBigNumberify('./claim.rsh:157:10:spread', stdlib.UInt_max, '0')];
          const v3923 = await stdlib.Array_asyncReduce([v2622], v3807, async([v3925], v3924, v3926) => {
            const v3927 = {
              None: 0,
              Some: 1
              }[v3924[0]];
            const v3928 = stdlib.eq(v3927, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
            const v3929 = stdlib.addressEq(v3925, v3436);
            const v3930 = v3928 ? v3929 : false;
            const v3931 = ['Some', v3926];
            const v3932 = v3930 ? v3931 : v3924;
            
            return v3932;})
          const v3937 = stdlib.fromSome(v3923, stdlib.checkedBigNumberify('./claim.rsh:161:41:decimal', stdlib.UInt_max, '0'));
          const v3944 = ['Some', v3921];
          const v3946 = stdlib.Array_set(v2724, v3937, v3944);
          const v3947 = await stdlib.Array_asyncReduce([v3946], stdlib.checkedBigNumberify('reach standard library:170:22:decimal', stdlib.UInt_max, '0'), async([v3949], v3948, v3950) => {
            const v3952 = stdlib.digest([ctc13], [v3949]);
            const v3954 = stdlib.digest([ctc13], [v3944]);
            const v3955 = stdlib.digestEq(v3952, v3954);
            let v3956;
            if (v3955) {
              const v3957 = stdlib.safeAdd(v3948, stdlib.checkedBigNumberify('reach standard library:171:18:decimal', stdlib.UInt_max, '1'));
              v3956 = v3957;
              }
            else {
              v3956 = v3948;
              }
            
            return v3956;})
          const v3958 = stdlib.eq(v3947, stdlib.checkedBigNumberify('./claim.rsh:7:38:application', stdlib.UInt_max, '3'));
          if (v3958) {
            null;
            const v3959 = stdlib.fromSome(v2623, v2621);
            const v3960 = v3921 ? v2621 : v3959;
            sim_r.txns.push({
              kind: 'from',
              to: v3960,
              tok: undefined /* Nothing */
              });
            const v3965 = null;
            const v3966 = await txn1.getOutput('Oracle_announceVerification', 'v3965', ctc2, v3965);
            
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          else {
            const v3973 = null;
            const v3974 = await txn1.getOutput('Oracle_announceVerification', 'v3973', ctc2, v3973);
            
            const v28824 = v2718;
            const v28826 = v2720;
            const v28827 = v2721;
            const v28828 = v2722;
            const v28829 = v2723;
            const v28830 = v3946;
            sim_r.isHalt = false;
            }
          break;
          }
        case 'Oracle_announceWinner0_738': {
          const v4090 = v3437[1];
          
          break;
          }
        case 'Oracle_correctContract0_738': {
          const v4415 = v3437[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc3, ctc4, ctc5, ctc5, ctc5, ctc6, ctc6, ctc8, ctc9, ctc9, ctc5, ctc11, ctc12, ctc14, ctc18],
    waitIfNotPresent: false
    }));
  const {data: [v3437], secs: v3439, time: v3438, didSend: v2103, from: v3436 } = txn1;
  switch (v3437[0]) {
    case 'Oracle_addParticipant0_738': {
      const v3440 = v3437[1];
      return;
      break;
      }
    case 'Oracle_announceVerification0_738': {
      const v3765 = v3437[1];
      undefined /* setApiDetails */;
      const v3807 = ['None', null];
      const v3808 = await stdlib.Array_asyncReduce([v2622], v3807, async([v3810], v3809, v3811) => {
        const v3812 = {
          None: 0,
          Some: 1
          }[v3809[0]];
        const v3813 = stdlib.eq(v3812, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
        const v3814 = stdlib.addressEq(v3810, v3436);
        const v3815 = v3813 ? v3814 : false;
        const v3816 = ['Some', v3811];
        const v3817 = v3815 ? v3816 : v3809;
        
        return v3817;})
      const v3818 = {
        None: 0,
        Some: 1
        }[v3808[0]];
      const v3819 = stdlib.eq(v3818, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      stdlib.assert(v3819, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./claim.rsh:159:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./claim.rsh:157:51:application call to [unknown function] (defined at: ./claim.rsh:157:51:function exp)', 'at ./claim.rsh:85:19:application call to [unknown function] (defined at: ./claim.rsh:157:51:function exp)', 'at ./claim.rsh:85:19:application call to [unknown function] (defined at: ./claim.rsh:85:19:function exp)'],
        msg: 'You are not an oracle',
        who: 'Oracle_announceVerification'
        });
      stdlib.assert(v2628, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./claim.rsh:160:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./claim.rsh:157:51:application call to [unknown function] (defined at: ./claim.rsh:157:51:function exp)', 'at ./claim.rsh:85:19:application call to [unknown function] (defined at: ./claim.rsh:157:51:function exp)', 'at ./claim.rsh:85:19:application call to [unknown function] (defined at: ./claim.rsh:85:19:function exp)'],
        msg: 'Can only announce formal verification if it is bottom',
        who: 'Oracle_announceVerification'
        });
      const v3822 = stdlib.fromSome(v3808, stdlib.checkedBigNumberify('./claim.rsh:161:41:decimal', stdlib.UInt_max, '0'));
      const v3824 = v2724[v3822];
      const v3825 = {
        None: 0,
        Some: 1
        }[v3824[0]];
      const v3826 = stdlib.eq(v3825, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
      stdlib.assert(v3826, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./claim.rsh:162:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./claim.rsh:157:51:application call to [unknown function] (defined at: ./claim.rsh:157:51:function exp)', 'at ./claim.rsh:85:19:application call to [unknown function] (defined at: ./claim.rsh:157:51:function exp)', 'at ./claim.rsh:85:19:application call to [unknown function] (defined at: ./claim.rsh:85:19:function exp)'],
        msg: 'You already announced a verification',
        who: 'Oracle_announceVerification'
        });
      ;
      const v3921 = v3765[stdlib.checkedBigNumberify('./claim.rsh:157:10:spread', stdlib.UInt_max, '0')];
      const v3923 = await stdlib.Array_asyncReduce([v2622], v3807, async([v3925], v3924, v3926) => {
        const v3927 = {
          None: 0,
          Some: 1
          }[v3924[0]];
        const v3928 = stdlib.eq(v3927, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
        const v3929 = stdlib.addressEq(v3925, v3436);
        const v3930 = v3928 ? v3929 : false;
        const v3931 = ['Some', v3926];
        const v3932 = v3930 ? v3931 : v3924;
        
        return v3932;})
      const v3933 = {
        None: 0,
        Some: 1
        }[v3923[0]];
      const v3934 = stdlib.eq(v3933, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      stdlib.assert(v3934, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./claim.rsh:159:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./claim.rsh:163:25:application call to [unknown function] (defined at: ./claim.rsh:163:25:function exp)'],
        msg: 'You are not an oracle',
        who: 'Oracle_announceVerification'
        });
      const v3937 = stdlib.fromSome(v3923, stdlib.checkedBigNumberify('./claim.rsh:161:41:decimal', stdlib.UInt_max, '0'));
      const v3939 = v2724[v3937];
      const v3940 = {
        None: 0,
        Some: 1
        }[v3939[0]];
      const v3941 = stdlib.eq(v3940, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
      stdlib.assert(v3941, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./claim.rsh:162:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./claim.rsh:163:25:application call to [unknown function] (defined at: ./claim.rsh:163:25:function exp)'],
        msg: 'You already announced a verification',
        who: 'Oracle_announceVerification'
        });
      const v3944 = ['Some', v3921];
      const v3946 = stdlib.Array_set(v2724, v3937, v3944);
      const v3947 = await stdlib.Array_asyncReduce([v3946], stdlib.checkedBigNumberify('reach standard library:170:22:decimal', stdlib.UInt_max, '0'), async([v3949], v3948, v3950) => {
        const v3952 = stdlib.digest([ctc13], [v3949]);
        const v3954 = stdlib.digest([ctc13], [v3944]);
        const v3955 = stdlib.digestEq(v3952, v3954);
        let v3956;
        if (v3955) {
          const v3957 = stdlib.safeAdd(v3948, stdlib.checkedBigNumberify('reach standard library:171:18:decimal', stdlib.UInt_max, '1'));
          v3956 = v3957;
          }
        else {
          v3956 = v3948;
          }
        
        return v3956;})
      const v3958 = stdlib.eq(v3947, stdlib.checkedBigNumberify('./claim.rsh:7:38:application', stdlib.UInt_max, '3'));
      if (v3958) {
        null;
        const v3959 = stdlib.fromSome(v2623, v2621);
        const v3960 = v3921 ? v2621 : v3959;
        ;
        const v3965 = null;
        const v3966 = await txn1.getOutput('Oracle_announceVerification', 'v3965', ctc2, v3965);
        if (v2103) {
          stdlib.protect(ctc2, await interact.out(v3765, v3966), {
            at: './claim.rsh:157:11:application',
            fs: ['at ./claim.rsh:157:11:application call to [unknown function] (defined at: ./claim.rsh:157:11:function exp)', 'at ./claim.rsh:170:12:application call to "ret" (defined at: ./claim.rsh:163:25:function exp)', 'at ./claim.rsh:163:25:application call to [unknown function] (defined at: ./claim.rsh:163:25:function exp)'],
            msg: 'out',
            who: 'Oracle_announceVerification'
            });
          }
        else {
          }
        
        return;
        }
      else {
        const v3973 = null;
        const v3974 = await txn1.getOutput('Oracle_announceVerification', 'v3973', ctc2, v3973);
        if (v2103) {
          stdlib.protect(ctc2, await interact.out(v3765, v3974), {
            at: './claim.rsh:157:11:application',
            fs: ['at ./claim.rsh:157:11:application call to [unknown function] (defined at: ./claim.rsh:157:11:function exp)', 'at ./claim.rsh:170:12:application call to "ret" (defined at: ./claim.rsh:163:25:function exp)', 'at ./claim.rsh:163:25:application call to [unknown function] (defined at: ./claim.rsh:163:25:function exp)'],
            msg: 'out',
            who: 'Oracle_announceVerification'
            });
          }
        else {
          }
        
        const v28824 = v2718;
        const v28826 = v2720;
        const v28827 = v2721;
        const v28828 = v2722;
        const v28829 = v2723;
        const v28830 = v3946;
        return;
        }
      break;
      }
    case 'Oracle_announceWinner0_738': {
      const v4090 = v3437[1];
      return;
      break;
      }
    case 'Oracle_correctContract0_738': {
      const v4415 = v3437[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Oracle_announceWinner3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Oracle_announceWinner3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Oracle_announceWinner3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Array(ctc0, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'));
  const ctc2 = stdlib.T_Null;
  const ctc3 = stdlib.T_Data({
    None: ctc2,
    Some: ctc0
    });
  const ctc4 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc5 = stdlib.T_UInt;
  const ctc6 = stdlib.T_Bool;
  const ctc7 = stdlib.T_Contract;
  const ctc8 = stdlib.T_Tuple([ctc0, ctc7]);
  const ctc9 = stdlib.T_Array(ctc6, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'));
  const ctc10 = stdlib.T_Data({
    None: ctc2,
    Some: ctc8
    });
  const ctc11 = stdlib.T_Array(ctc10, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '10'));
  const ctc12 = stdlib.T_Array(ctc5, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '10'));
  const ctc13 = stdlib.T_Data({
    None: ctc2,
    Some: ctc6
    });
  const ctc14 = stdlib.T_Array(ctc13, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'));
  const ctc15 = stdlib.T_Tuple([ctc5]);
  const ctc16 = stdlib.T_Tuple([ctc6]);
  const ctc17 = stdlib.T_Tuple([]);
  const ctc18 = stdlib.T_Data({
    Oracle_addParticipant0_738: ctc8,
    Oracle_announceVerification0_738: ctc16,
    Oracle_announceWinner0_738: ctc15,
    Oracle_correctContract0_738: ctc17
    });
  
  
  const [v2621, v2622, v2623, v2624, v2625, v2626, v2627, v2628, v2635, v2669, v2718, v2720, v2721, v2722, v2723, v2724] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc0, ctc1, ctc3, ctc4, ctc5, ctc5, ctc5, ctc6, ctc6, ctc8, ctc9, ctc9, ctc5, ctc11, ctc12, ctc14]);
  const v3269 = ctc.selfAddress();
  const v3271 = stdlib.protect(ctc15, await interact.in(), {
    at: './claim.rsh:1:23:application',
    fs: ['at ./claim.rsh:135:48:application call to [unknown function] (defined at: ./claim.rsh:135:48:function exp)', 'at ./claim.rsh:85:19:application call to "runOracle_announceWinner0_738" (defined at: ./claim.rsh:135:10:function exp)', 'at ./claim.rsh:85:19:application call to [unknown function] (defined at: ./claim.rsh:85:19:function exp)'],
    msg: 'in',
    who: 'Oracle_announceWinner'
    });
  const v3272 = v3271[stdlib.checkedBigNumberify('./claim.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v3274 = ['None', null];
  const v3275 = await stdlib.Array_asyncReduce([v2622], v3274, async([v3277], v3276, v3278) => {
    const v3279 = {
      None: 0,
      Some: 1
      }[v3276[0]];
    const v3280 = stdlib.eq(v3279, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
    const v3281 = stdlib.addressEq(v3277, v3269);
    const v3282 = v3280 ? v3281 : false;
    const v3283 = ['Some', v3278];
    const v3284 = v3282 ? v3283 : v3276;
    
    return v3284;})
  const v3285 = {
    None: 0,
    Some: 1
    }[v3275[0]];
  const v3286 = stdlib.eq(v3285, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v3286, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./claim.rsh:137:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./claim.rsh:135:48:application call to [unknown function] (defined at: ./claim.rsh:135:48:function exp)', 'at ./claim.rsh:85:19:application call to "runOracle_announceWinner0_738" (defined at: ./claim.rsh:135:10:function exp)', 'at ./claim.rsh:85:19:application call to [unknown function] (defined at: ./claim.rsh:85:19:function exp)'],
    msg: 'You are not an oracle',
    who: 'Oracle_announceWinner'
    });
  const v3288 = stdlib.fromSome(v3275, stdlib.checkedBigNumberify('./claim.rsh:138:49:decimal', stdlib.UInt_max, '0'));
  const v3290 = v2718[v3288];
  const v3291 = v3290 ? false : true;
  stdlib.assert(v3291, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./claim.rsh:138:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./claim.rsh:135:48:application call to [unknown function] (defined at: ./claim.rsh:135:48:function exp)', 'at ./claim.rsh:85:19:application call to "runOracle_announceWinner0_738" (defined at: ./claim.rsh:135:10:function exp)', 'at ./claim.rsh:85:19:application call to [unknown function] (defined at: ./claim.rsh:85:19:function exp)'],
    msg: 'You already declared a winner',
    who: 'Oracle_announceWinner'
    });
  const v3293 = stdlib.lt(v3272, v2721);
  stdlib.assert(v3293, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./claim.rsh:139:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./claim.rsh:135:48:application call to [unknown function] (defined at: ./claim.rsh:135:48:function exp)', 'at ./claim.rsh:85:19:application call to "runOracle_announceWinner0_738" (defined at: ./claim.rsh:135:10:function exp)', 'at ./claim.rsh:85:19:application call to [unknown function] (defined at: ./claim.rsh:85:19:function exp)'],
    msg: 'This participant does not exist.',
    who: 'Oracle_announceWinner'
    });
  stdlib.assert(v2635, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./claim.rsh:140:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./claim.rsh:135:48:application call to [unknown function] (defined at: ./claim.rsh:135:48:function exp)', 'at ./claim.rsh:85:19:application call to "runOracle_announceWinner0_738" (defined at: ./claim.rsh:135:10:function exp)', 'at ./claim.rsh:85:19:application call to [unknown function] (defined at: ./claim.rsh:85:19:function exp)'],
    msg: 'Can only announce verification.',
    who: 'Oracle_announceWinner'
    });
  const v3302 = ['Oracle_announceWinner0_738', v3271];
  
  const v3399 = await stdlib.Array_asyncReduce([v2622], v3274, async([v3401], v3400, v3402) => {
    const v3403 = {
      None: 0,
      Some: 1
      }[v3400[0]];
    const v3404 = stdlib.eq(v3403, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
    const v3405 = stdlib.addressEq(v3401, v3269);
    const v3406 = v3404 ? v3405 : false;
    const v3407 = ['Some', v3402];
    const v3408 = v3406 ? v3407 : v3400;
    
    return v3408;})
  const v3409 = {
    None: 0,
    Some: 1
    }[v3399[0]];
  const v3410 = stdlib.eq(v3409, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v3410, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./claim.rsh:137:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./claim.rsh:135:48:application call to [unknown function] (defined at: ./claim.rsh:135:48:function exp)', 'at ./claim.rsh:85:19:application call to [unknown function] (defined at: ./claim.rsh:135:48:function exp)', 'at ./claim.rsh:85:19:application call to [unknown function] (defined at: ./claim.rsh:85:19:function exp)'],
    msg: 'You are not an oracle',
    who: 'Oracle_announceWinner'
    });
  const v3412 = stdlib.fromSome(v3399, stdlib.checkedBigNumberify('./claim.rsh:138:49:decimal', stdlib.UInt_max, '0'));
  const v3414 = v2718[v3412];
  const v3415 = v3414 ? false : true;
  stdlib.assert(v3415, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./claim.rsh:138:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./claim.rsh:135:48:application call to [unknown function] (defined at: ./claim.rsh:135:48:function exp)', 'at ./claim.rsh:85:19:application call to [unknown function] (defined at: ./claim.rsh:135:48:function exp)', 'at ./claim.rsh:85:19:application call to [unknown function] (defined at: ./claim.rsh:85:19:function exp)'],
    msg: 'You already declared a winner',
    who: 'Oracle_announceWinner'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v2621, v2622, v2623, v2624, v2625, v2626, v2627, v2628, v2635, v2669, v2718, v2720, v2721, v2722, v2723, v2724, v3302],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc18],
    pay: [stdlib.checkedBigNumberify('./claim.rsh:141:16:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v3437], secs: v3439, time: v3438, didSend: v2103, from: v3436 } = txn1;
      
      switch (v3437[0]) {
        case 'Oracle_addParticipant0_738': {
          const v3440 = v3437[1];
          
          break;
          }
        case 'Oracle_announceVerification0_738': {
          const v3765 = v3437[1];
          
          break;
          }
        case 'Oracle_announceWinner0_738': {
          const v4090 = v3437[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Oracle_announceWinner"
            });
          const v4154 = v4090[stdlib.checkedBigNumberify('./claim.rsh:135:10:spread', stdlib.UInt_max, '0')];
          const v4155 = ['None', null];
          ;
          const v4309 = await stdlib.Array_asyncReduce([v2622], v4155, async([v4311], v4310, v4312) => {
            const v4313 = {
              None: 0,
              Some: 1
              }[v4310[0]];
            const v4314 = stdlib.eq(v4313, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
            const v4315 = stdlib.addressEq(v4311, v3436);
            const v4316 = v4314 ? v4315 : false;
            const v4317 = ['Some', v4312];
            const v4318 = v4316 ? v4317 : v4310;
            
            return v4318;})
          const v4322 = stdlib.fromSome(v4309, stdlib.checkedBigNumberify('./claim.rsh:138:49:decimal', stdlib.UInt_max, '0'));
          const v4334 = stdlib.Array_set(v2718, v4322, true);
          const v4336 = v2723[v4154];
          const v4337 = stdlib.safeAdd(v4336, stdlib.checkedBigNumberify('./claim.rsh:143:48:decimal', stdlib.UInt_max, '1'));
          const v4339 = stdlib.Array_set(v2723, v4154, v4337);
          const v4340 = stdlib.eq(v4337, stdlib.checkedBigNumberify('./claim.rsh:7:38:application', stdlib.UInt_max, '3'));
          if (v4340) {
            const v4342 = v2722[v4154];
            const v4345 = stdlib.fromSome(v4342, v2669);
            const v4346 = v4345[stdlib.checkedBigNumberify('./claim.rsh:148:34:array ref', stdlib.UInt_max, '0')];
            const v4347 = v4345[stdlib.checkedBigNumberify('./claim.rsh:148:45:array ref', stdlib.UInt_max, '1')];
            null;
            sim_r.txns.push({
              kind: 'from',
              to: v4346,
              tok: undefined /* Nothing */
              });
            const v4353 = stdlib.eq(v4154, stdlib.checkedBigNumberify('./claim.rsh:150:47:decimal', stdlib.UInt_max, '0'));
            const v4354 = stdlib.fromSome(v2623, v2621);
            const v4355 = v4353 ? v2621 : v4354;
            sim_r.txns.push({
              kind: 'from',
              to: v4355,
              tok: undefined /* Nothing */
              });
            const v4360 = null;
            const v4361 = await txn1.getOutput('Oracle_announceWinner', 'v4360', ctc2, v4360);
            
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          else {
            const v4368 = null;
            const v4369 = await txn1.getOutput('Oracle_announceWinner', 'v4368', ctc2, v4368);
            
            const v28905 = v4334;
            const v28907 = v2720;
            const v28908 = v2721;
            const v28909 = v2722;
            const v28910 = v4339;
            const v28911 = v2724;
            sim_r.isHalt = false;
            }
          break;
          }
        case 'Oracle_correctContract0_738': {
          const v4415 = v3437[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc3, ctc4, ctc5, ctc5, ctc5, ctc6, ctc6, ctc8, ctc9, ctc9, ctc5, ctc11, ctc12, ctc14, ctc18],
    waitIfNotPresent: false
    }));
  const {data: [v3437], secs: v3439, time: v3438, didSend: v2103, from: v3436 } = txn1;
  switch (v3437[0]) {
    case 'Oracle_addParticipant0_738': {
      const v3440 = v3437[1];
      return;
      break;
      }
    case 'Oracle_announceVerification0_738': {
      const v3765 = v3437[1];
      return;
      break;
      }
    case 'Oracle_announceWinner0_738': {
      const v4090 = v3437[1];
      undefined /* setApiDetails */;
      const v4154 = v4090[stdlib.checkedBigNumberify('./claim.rsh:135:10:spread', stdlib.UInt_max, '0')];
      const v4155 = ['None', null];
      const v4156 = await stdlib.Array_asyncReduce([v2622], v4155, async([v4158], v4157, v4159) => {
        const v4160 = {
          None: 0,
          Some: 1
          }[v4157[0]];
        const v4161 = stdlib.eq(v4160, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
        const v4162 = stdlib.addressEq(v4158, v3436);
        const v4163 = v4161 ? v4162 : false;
        const v4164 = ['Some', v4159];
        const v4165 = v4163 ? v4164 : v4157;
        
        return v4165;})
      const v4166 = {
        None: 0,
        Some: 1
        }[v4156[0]];
      const v4167 = stdlib.eq(v4166, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      stdlib.assert(v4167, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./claim.rsh:137:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./claim.rsh:135:48:application call to [unknown function] (defined at: ./claim.rsh:135:48:function exp)', 'at ./claim.rsh:85:19:application call to [unknown function] (defined at: ./claim.rsh:135:48:function exp)', 'at ./claim.rsh:85:19:application call to [unknown function] (defined at: ./claim.rsh:85:19:function exp)'],
        msg: 'You are not an oracle',
        who: 'Oracle_announceWinner'
        });
      const v4169 = stdlib.fromSome(v4156, stdlib.checkedBigNumberify('./claim.rsh:138:49:decimal', stdlib.UInt_max, '0'));
      const v4171 = v2718[v4169];
      const v4172 = v4171 ? false : true;
      stdlib.assert(v4172, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./claim.rsh:138:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./claim.rsh:135:48:application call to [unknown function] (defined at: ./claim.rsh:135:48:function exp)', 'at ./claim.rsh:85:19:application call to [unknown function] (defined at: ./claim.rsh:135:48:function exp)', 'at ./claim.rsh:85:19:application call to [unknown function] (defined at: ./claim.rsh:85:19:function exp)'],
        msg: 'You already declared a winner',
        who: 'Oracle_announceWinner'
        });
      const v4174 = stdlib.lt(v4154, v2721);
      stdlib.assert(v4174, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./claim.rsh:139:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./claim.rsh:135:48:application call to [unknown function] (defined at: ./claim.rsh:135:48:function exp)', 'at ./claim.rsh:85:19:application call to [unknown function] (defined at: ./claim.rsh:135:48:function exp)', 'at ./claim.rsh:85:19:application call to [unknown function] (defined at: ./claim.rsh:85:19:function exp)'],
        msg: 'This participant does not exist.',
        who: 'Oracle_announceWinner'
        });
      stdlib.assert(v2635, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./claim.rsh:140:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./claim.rsh:135:48:application call to [unknown function] (defined at: ./claim.rsh:135:48:function exp)', 'at ./claim.rsh:85:19:application call to [unknown function] (defined at: ./claim.rsh:135:48:function exp)', 'at ./claim.rsh:85:19:application call to [unknown function] (defined at: ./claim.rsh:85:19:function exp)'],
        msg: 'Can only announce verification.',
        who: 'Oracle_announceWinner'
        });
      ;
      const v4309 = await stdlib.Array_asyncReduce([v2622], v4155, async([v4311], v4310, v4312) => {
        const v4313 = {
          None: 0,
          Some: 1
          }[v4310[0]];
        const v4314 = stdlib.eq(v4313, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
        const v4315 = stdlib.addressEq(v4311, v3436);
        const v4316 = v4314 ? v4315 : false;
        const v4317 = ['Some', v4312];
        const v4318 = v4316 ? v4317 : v4310;
        
        return v4318;})
      const v4319 = {
        None: 0,
        Some: 1
        }[v4309[0]];
      const v4320 = stdlib.eq(v4319, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      stdlib.assert(v4320, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./claim.rsh:137:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./claim.rsh:141:25:application call to [unknown function] (defined at: ./claim.rsh:141:25:function exp)'],
        msg: 'You are not an oracle',
        who: 'Oracle_announceWinner'
        });
      const v4322 = stdlib.fromSome(v4309, stdlib.checkedBigNumberify('./claim.rsh:138:49:decimal', stdlib.UInt_max, '0'));
      const v4324 = v2718[v4322];
      const v4325 = v4324 ? false : true;
      stdlib.assert(v4325, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./claim.rsh:138:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./claim.rsh:141:25:application call to [unknown function] (defined at: ./claim.rsh:141:25:function exp)'],
        msg: 'You already declared a winner',
        who: 'Oracle_announceWinner'
        });
      const v4334 = stdlib.Array_set(v2718, v4322, true);
      const v4336 = v2723[v4154];
      const v4337 = stdlib.safeAdd(v4336, stdlib.checkedBigNumberify('./claim.rsh:143:48:decimal', stdlib.UInt_max, '1'));
      const v4339 = stdlib.Array_set(v2723, v4154, v4337);
      const v4340 = stdlib.eq(v4337, stdlib.checkedBigNumberify('./claim.rsh:7:38:application', stdlib.UInt_max, '3'));
      if (v4340) {
        const v4342 = v2722[v4154];
        const v4345 = stdlib.fromSome(v4342, v2669);
        const v4346 = v4345[stdlib.checkedBigNumberify('./claim.rsh:148:34:array ref', stdlib.UInt_max, '0')];
        const v4347 = v4345[stdlib.checkedBigNumberify('./claim.rsh:148:45:array ref', stdlib.UInt_max, '1')];
        null;
        ;
        const v4353 = stdlib.eq(v4154, stdlib.checkedBigNumberify('./claim.rsh:150:47:decimal', stdlib.UInt_max, '0'));
        const v4354 = stdlib.fromSome(v2623, v2621);
        const v4355 = v4353 ? v2621 : v4354;
        ;
        const v4360 = null;
        const v4361 = await txn1.getOutput('Oracle_announceWinner', 'v4360', ctc2, v4360);
        if (v2103) {
          stdlib.protect(ctc2, await interact.out(v4090, v4361), {
            at: './claim.rsh:135:11:application',
            fs: ['at ./claim.rsh:135:11:application call to [unknown function] (defined at: ./claim.rsh:135:11:function exp)', 'at ./claim.rsh:152:12:application call to "ret" (defined at: ./claim.rsh:141:25:function exp)', 'at ./claim.rsh:141:25:application call to [unknown function] (defined at: ./claim.rsh:141:25:function exp)'],
            msg: 'out',
            who: 'Oracle_announceWinner'
            });
          }
        else {
          }
        
        return;
        }
      else {
        const v4368 = null;
        const v4369 = await txn1.getOutput('Oracle_announceWinner', 'v4368', ctc2, v4368);
        if (v2103) {
          stdlib.protect(ctc2, await interact.out(v4090, v4369), {
            at: './claim.rsh:135:11:application',
            fs: ['at ./claim.rsh:135:11:application call to [unknown function] (defined at: ./claim.rsh:135:11:function exp)', 'at ./claim.rsh:152:12:application call to "ret" (defined at: ./claim.rsh:141:25:function exp)', 'at ./claim.rsh:141:25:application call to [unknown function] (defined at: ./claim.rsh:141:25:function exp)'],
            msg: 'out',
            who: 'Oracle_announceWinner'
            });
          }
        else {
          }
        
        const v28905 = v4334;
        const v28907 = v2720;
        const v28908 = v2721;
        const v28909 = v2722;
        const v28910 = v4339;
        const v28911 = v2724;
        return;
        }
      break;
      }
    case 'Oracle_correctContract0_738': {
      const v4415 = v3437[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Oracle_correctContract3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Oracle_correctContract3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Oracle_correctContract3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Array(ctc0, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'));
  const ctc2 = stdlib.T_Null;
  const ctc3 = stdlib.T_Data({
    None: ctc2,
    Some: ctc0
    });
  const ctc4 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc5 = stdlib.T_UInt;
  const ctc6 = stdlib.T_Bool;
  const ctc7 = stdlib.T_Contract;
  const ctc8 = stdlib.T_Tuple([ctc0, ctc7]);
  const ctc9 = stdlib.T_Array(ctc6, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'));
  const ctc10 = stdlib.T_Data({
    None: ctc2,
    Some: ctc8
    });
  const ctc11 = stdlib.T_Array(ctc10, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '10'));
  const ctc12 = stdlib.T_Array(ctc5, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '10'));
  const ctc13 = stdlib.T_Data({
    None: ctc2,
    Some: ctc6
    });
  const ctc14 = stdlib.T_Array(ctc13, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'));
  const ctc15 = stdlib.T_Tuple([]);
  const ctc16 = stdlib.T_Tuple([ctc6]);
  const ctc17 = stdlib.T_Tuple([ctc5]);
  const ctc18 = stdlib.T_Data({
    Oracle_addParticipant0_738: ctc8,
    Oracle_announceVerification0_738: ctc16,
    Oracle_announceWinner0_738: ctc17,
    Oracle_correctContract0_738: ctc15
    });
  
  
  const [v2621, v2622, v2623, v2624, v2625, v2626, v2627, v2628, v2635, v2669, v2718, v2720, v2721, v2722, v2723, v2724] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc0, ctc1, ctc3, ctc4, ctc5, ctc5, ctc5, ctc6, ctc6, ctc8, ctc9, ctc9, ctc5, ctc11, ctc12, ctc14]);
  const v3198 = ctc.selfAddress();
  const v3200 = stdlib.protect(ctc15, await interact.in(), {
    at: './claim.rsh:1:23:application',
    fs: ['at ./claim.rsh:107:38:application call to [unknown function] (defined at: ./claim.rsh:107:38:function exp)', 'at ./claim.rsh:85:19:application call to "runOracle_correctContract0_738" (defined at: ./claim.rsh:107:10:function exp)', 'at ./claim.rsh:85:19:application call to [unknown function] (defined at: ./claim.rsh:85:19:function exp)'],
    msg: 'in',
    who: 'Oracle_correctContract'
    });
  const v3201 = ['None', null];
  const v3202 = await stdlib.Array_asyncReduce([v2622], v3201, async([v3204], v3203, v3205) => {
    const v3206 = {
      None: 0,
      Some: 1
      }[v3203[0]];
    const v3207 = stdlib.eq(v3206, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
    const v3208 = stdlib.addressEq(v3204, v3198);
    const v3209 = v3207 ? v3208 : false;
    const v3210 = ['Some', v3205];
    const v3211 = v3209 ? v3210 : v3203;
    
    return v3211;})
  const v3212 = {
    None: 0,
    Some: 1
    }[v3202[0]];
  const v3213 = stdlib.eq(v3212, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v3213, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./claim.rsh:109:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./claim.rsh:107:38:application call to [unknown function] (defined at: ./claim.rsh:107:38:function exp)', 'at ./claim.rsh:85:19:application call to "runOracle_correctContract0_738" (defined at: ./claim.rsh:107:10:function exp)', 'at ./claim.rsh:85:19:application call to [unknown function] (defined at: ./claim.rsh:85:19:function exp)'],
    msg: 'You are not an oracle',
    who: 'Oracle_correctContract'
    });
  const v3218 = ['Oracle_correctContract0_738', v3200];
  
  const v3423 = await stdlib.Array_asyncReduce([v2622], v3201, async([v3425], v3424, v3426) => {
    const v3427 = {
      None: 0,
      Some: 1
      }[v3424[0]];
    const v3428 = stdlib.eq(v3427, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
    const v3429 = stdlib.addressEq(v3425, v3198);
    const v3430 = v3428 ? v3429 : false;
    const v3431 = ['Some', v3426];
    const v3432 = v3430 ? v3431 : v3424;
    
    return v3432;})
  const v3433 = {
    None: 0,
    Some: 1
    }[v3423[0]];
  const v3434 = stdlib.eq(v3433, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v3434, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./claim.rsh:109:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./claim.rsh:107:38:application call to [unknown function] (defined at: ./claim.rsh:107:38:function exp)', 'at ./claim.rsh:85:19:application call to [unknown function] (defined at: ./claim.rsh:107:38:function exp)', 'at ./claim.rsh:85:19:application call to [unknown function] (defined at: ./claim.rsh:85:19:function exp)'],
    msg: 'You are not an oracle',
    who: 'Oracle_correctContract'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v2621, v2622, v2623, v2624, v2625, v2626, v2627, v2628, v2635, v2669, v2718, v2720, v2721, v2722, v2723, v2724, v3218],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc18],
    pay: [stdlib.checkedBigNumberify('./claim.rsh:110:16:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v3437], secs: v3439, time: v3438, didSend: v2103, from: v3436 } = txn1;
      
      switch (v3437[0]) {
        case 'Oracle_addParticipant0_738': {
          const v3440 = v3437[1];
          
          break;
          }
        case 'Oracle_announceVerification0_738': {
          const v3765 = v3437[1];
          
          break;
          }
        case 'Oracle_announceWinner0_738': {
          const v4090 = v3437[1];
          
          break;
          }
        case 'Oracle_correctContract0_738': {
          const v4415 = v3437[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Oracle_correctContract"
            });
          const v4504 = ['None', null];
          ;
          const v4703 = await stdlib.Array_asyncReduce([v2622], v4504, async([v4705], v4704, v4706) => {
            const v4707 = {
              None: 0,
              Some: 1
              }[v4704[0]];
            const v4708 = stdlib.eq(v4707, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
            const v4709 = stdlib.addressEq(v4705, v3436);
            const v4710 = v4708 ? v4709 : false;
            const v4711 = ['Some', v4706];
            const v4712 = v4710 ? v4711 : v4704;
            
            return v4712;})
          const v4716 = stdlib.fromSome(v4703, stdlib.checkedBigNumberify('./claim.rsh:111:60:decimal', stdlib.UInt_max, '0'));
          const v4718 = stdlib.Array_set(v2720, v4716, true);
          const v4719 = await stdlib.Array_asyncReduce([v4718], stdlib.checkedBigNumberify('reach standard library:170:22:decimal', stdlib.UInt_max, '0'), async([v4721], v4720, v4722) => {
            let v4723;
            if (v4721) {
              const v4724 = stdlib.safeAdd(v4720, stdlib.checkedBigNumberify('reach standard library:171:18:decimal', stdlib.UInt_max, '1'));
              v4723 = v4724;
              }
            else {
              v4723 = v4720;
              }
            
            return v4723;})
          const v4725 = stdlib.eq(v4719, stdlib.checkedBigNumberify('./claim.rsh:7:38:application', stdlib.UInt_max, '3'));
          if (v4725) {
            null;
            const v4726 = null;
            const v4727 = await txn1.getOutput('Oracle_correctContract', 'v4726', ctc2, v4726);
            
            const v28977 = v2718;
            const v28979 = v4718;
            const v28980 = v2721;
            const v28981 = v2722;
            const v28982 = v2723;
            const v28983 = v2724;
            sim_r.isHalt = false;
            }
          else {
            const v4733 = null;
            const v4734 = await txn1.getOutput('Oracle_correctContract', 'v4733', ctc2, v4733);
            
            const v28986 = v2718;
            const v28988 = v4718;
            const v28989 = v2721;
            const v28990 = v2722;
            const v28991 = v2723;
            const v28992 = v2724;
            sim_r.isHalt = false;
            }
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc3, ctc4, ctc5, ctc5, ctc5, ctc6, ctc6, ctc8, ctc9, ctc9, ctc5, ctc11, ctc12, ctc14, ctc18],
    waitIfNotPresent: false
    }));
  const {data: [v3437], secs: v3439, time: v3438, didSend: v2103, from: v3436 } = txn1;
  switch (v3437[0]) {
    case 'Oracle_addParticipant0_738': {
      const v3440 = v3437[1];
      return;
      break;
      }
    case 'Oracle_announceVerification0_738': {
      const v3765 = v3437[1];
      return;
      break;
      }
    case 'Oracle_announceWinner0_738': {
      const v4090 = v3437[1];
      return;
      break;
      }
    case 'Oracle_correctContract0_738': {
      const v4415 = v3437[1];
      undefined /* setApiDetails */;
      const v4504 = ['None', null];
      const v4505 = await stdlib.Array_asyncReduce([v2622], v4504, async([v4507], v4506, v4508) => {
        const v4509 = {
          None: 0,
          Some: 1
          }[v4506[0]];
        const v4510 = stdlib.eq(v4509, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
        const v4511 = stdlib.addressEq(v4507, v3436);
        const v4512 = v4510 ? v4511 : false;
        const v4513 = ['Some', v4508];
        const v4514 = v4512 ? v4513 : v4506;
        
        return v4514;})
      const v4515 = {
        None: 0,
        Some: 1
        }[v4505[0]];
      const v4516 = stdlib.eq(v4515, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      stdlib.assert(v4516, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./claim.rsh:109:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./claim.rsh:107:38:application call to [unknown function] (defined at: ./claim.rsh:107:38:function exp)', 'at ./claim.rsh:85:19:application call to [unknown function] (defined at: ./claim.rsh:107:38:function exp)', 'at ./claim.rsh:85:19:application call to [unknown function] (defined at: ./claim.rsh:85:19:function exp)'],
        msg: 'You are not an oracle',
        who: 'Oracle_correctContract'
        });
      ;
      const v4703 = await stdlib.Array_asyncReduce([v2622], v4504, async([v4705], v4704, v4706) => {
        const v4707 = {
          None: 0,
          Some: 1
          }[v4704[0]];
        const v4708 = stdlib.eq(v4707, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
        const v4709 = stdlib.addressEq(v4705, v3436);
        const v4710 = v4708 ? v4709 : false;
        const v4711 = ['Some', v4706];
        const v4712 = v4710 ? v4711 : v4704;
        
        return v4712;})
      const v4713 = {
        None: 0,
        Some: 1
        }[v4703[0]];
      const v4714 = stdlib.eq(v4713, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      stdlib.assert(v4714, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./claim.rsh:109:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./claim.rsh:110:25:application call to [unknown function] (defined at: ./claim.rsh:110:25:function exp)'],
        msg: 'You are not an oracle',
        who: 'Oracle_correctContract'
        });
      const v4716 = stdlib.fromSome(v4703, stdlib.checkedBigNumberify('./claim.rsh:111:60:decimal', stdlib.UInt_max, '0'));
      const v4718 = stdlib.Array_set(v2720, v4716, true);
      const v4719 = await stdlib.Array_asyncReduce([v4718], stdlib.checkedBigNumberify('reach standard library:170:22:decimal', stdlib.UInt_max, '0'), async([v4721], v4720, v4722) => {
        let v4723;
        if (v4721) {
          const v4724 = stdlib.safeAdd(v4720, stdlib.checkedBigNumberify('reach standard library:171:18:decimal', stdlib.UInt_max, '1'));
          v4723 = v4724;
          }
        else {
          v4723 = v4720;
          }
        
        return v4723;})
      const v4725 = stdlib.eq(v4719, stdlib.checkedBigNumberify('./claim.rsh:7:38:application', stdlib.UInt_max, '3'));
      if (v4725) {
        null;
        const v4726 = null;
        const v4727 = await txn1.getOutput('Oracle_correctContract', 'v4726', ctc2, v4726);
        if (v2103) {
          stdlib.protect(ctc2, await interact.out(v4415, v4727), {
            at: './claim.rsh:107:11:application',
            fs: ['at ./claim.rsh:107:11:application call to [unknown function] (defined at: ./claim.rsh:107:11:function exp)', 'at ./claim.rsh:115:12:application call to "ret" (defined at: ./claim.rsh:110:25:function exp)', 'at ./claim.rsh:110:25:application call to [unknown function] (defined at: ./claim.rsh:110:25:function exp)'],
            msg: 'out',
            who: 'Oracle_correctContract'
            });
          }
        else {
          }
        
        const v28977 = v2718;
        const v28979 = v4718;
        const v28980 = v2721;
        const v28981 = v2722;
        const v28982 = v2723;
        const v28983 = v2724;
        return;
        }
      else {
        const v4733 = null;
        const v4734 = await txn1.getOutput('Oracle_correctContract', 'v4733', ctc2, v4733);
        if (v2103) {
          stdlib.protect(ctc2, await interact.out(v4415, v4734), {
            at: './claim.rsh:107:11:application',
            fs: ['at ./claim.rsh:107:11:application call to [unknown function] (defined at: ./claim.rsh:107:11:function exp)', 'at ./claim.rsh:115:12:application call to "ret" (defined at: ./claim.rsh:110:25:function exp)', 'at ./claim.rsh:110:25:application call to [unknown function] (defined at: ./claim.rsh:110:25:function exp)'],
            msg: 'out',
            who: 'Oracle_correctContract'
            });
          }
        else {
          }
        
        const v28986 = v2718;
        const v28988 = v4718;
        const v28989 = v2721;
        const v28990 = v2722;
        const v28991 = v2723;
        const v28992 = v2724;
        return;
        }
      break;
      }
    }
  
  
  };
export async function Oracle_addParticipant(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Oracle_addParticipant expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Oracle_addParticipant expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _Oracle_addParticipant3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Oracle_announceVerification(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Oracle_announceVerification expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Oracle_announceVerification expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _Oracle_announceVerification3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Oracle_announceWinner(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Oracle_announceWinner expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Oracle_announceWinner expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _Oracle_announceWinner3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Oracle_correctContract(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Oracle_correctContract expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Oracle_correctContract expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _Oracle_correctContract3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
const _ALGO = {
  ABI: {
    impure: [`Oracle_addParticipant(address,uint64)byte[0]`, `Oracle_announceVerification(byte)byte[0]`, `Oracle_announceWinner(uint64)byte[0]`, `Oracle_correctContract()byte[0]`],
    pure: [`addressSkeptic()(byte,byte[32])`, `addressesOracles()address[5]`, `author()address`, `deadline()uint64`, `interaction()byte[32]`, `isBottom()byte`, `participants()(byte,byte[40])[10]`, `wagerDown()uint64`, `wagerUp()uint64`],
    sigs: [`Oracle_addParticipant(address,uint64)byte[0]`, `Oracle_announceVerification(byte)byte[0]`, `Oracle_announceWinner(uint64)byte[0]`, `Oracle_correctContract()byte[0]`, `addressSkeptic()(byte,byte[32])`, `addressesOracles()address[5]`, `author()address`, `deadline()uint64`, `interaction()byte[32]`, `isBottom()byte`, `participants()(byte,byte[40])[10]`, `wagerDown()uint64`, `wagerUp()uint64`]
    },
  GlobalNumByteSlice: 8,
  GlobalNumUint: 0,
  LocalNumByteSlice: 0,
  LocalNumUint: 0,
  appApproval: `ByAgAAEDIAUCCCkGCgl/tqvKzAad3N25C6SOiIYOpuTnjw+p3eC6Cyjq1cmiCK+bmv4JmQLtgI+fAufx27cCgdCl0QWRAokCocC/UN3Br5QCgQLVApoDUCYIAQEBAAECAQMBBAEFAQYAIjUAMRhBC3UnB2RJIls1AUkhBls1AoEQWzUINhoAF0lBAjciNQQjNQZJIQwMQAERSSENDEAAkkkhDgxAAF1JIQ8MQAArIQ8SRDQBJBJEKWQoZFAqZFArZFAnBGRQJwVkUCcGZFBJNQNXIKA1B0ILBSEOEkQ0ASQSRClkKGRQKmRQK2RQJwRkUCcFZFAnBmRQSTUDVwAgNQdCCtpJIRAMQAAUIRASRDYaATX/KDT/UIEnr1BCAbwhDRJEJwc1/ys0/1AhEa9QQgGpSSESDEAARkkhEwxAACwhExJENAEkEkQpZChkUCpkUCtkUCcEZFAnBWRQJwZkUEk1AyEUI1g1B0IKciESEkQ2GgE1/yo0/1AyA1BCAVwhDBJENAEkEkQpZChkUCpkUCtkUCcEZFAnBWRQJwZkUEk1A1fhIDUHQgo0SSEVDEAAfEkhFgxAAEhJIRcMQAAUIRcSRDYaATYaAlA1/yk0/1BCAQghFhJENAEkEkQpZChkUCpkUCtkUCcEZFAnBWRQJwZkUEk1AyEYIQZYNQdCCd4hFRJENAEkEkQpZChkUCpkUCtkUCcEZFAnBWRQJwZkUEk1AyEZIQZYNQdCCbFJIRoMQABhSSEbDEAALSEbEkQ0ASQSRClkKGRQKmRQK2RQJwRkUCcFZFAnBmRQSTUDIRwhBlg1B0IJdiEaEkQ0ASQSRClkKGRQKmRQK2RQJwRkUCcFZFAnBmRQSTUDIR0hHlg1B0IJSYGwrpgCEkQ0ASQSRClkKGRQKmRQK2RQJwRkUCcFZFAnBmRQSTUDV8AhNQdCCRs2GgIXNQQ2GgM2GgEXSSEFDEAG9iEFEkQkNAESRDQESSISTDQCEhFEKWQoZFAqZFArZFAnBGRQJwVkUCcGZFBJNQNJSkpKSkpKSlcAIDX/VyCgNf5XwCE1/VfhIDX8IRxbNfshGVs1+iEYWzX5IRQjWBc1+IGaAiNYFzX3gZsCIRFYNfaBwwIhBFg19YHIAiEEWDX0gc0CWzXzIR0hHlg18oHvBSEfWDXxgb8GIQlYNfBJNQU174AE/FtmxzTvULA07yJVSSEFDEADB0kkDEABRCQSRLEisgEhCLIQNAiyGLMhCq9JNew16yI16jT+JTTqCyVYNek06yg06hZQNOsiVSISNOkxABIQTTXrNOojCEk16iEEDED/0zTrIlUjEkQ07DXqIjXpNP4lNOkLJVg16DTqKDTpFlA06iJVIhI06DEAEhBNNeo06SMISTXpIQQMQP/TNOoiVSMSRDT0IjTqSTXoI1s06CJVTSNWNekiNegiNec06TTnVUk15kEACTToIwg15UIABDToNeU05TXoNOcjCEk15yEEDED/1zToJBJBADyABPG3oxywgAgAAAAAAAASdrAnBzUHNP80/jT9NPw0+zT6NPk0+DT3NPY09SI06TTzNPI08TTwMgZCBiuACAAAAAAAABJ9sCcHNQc0/zT+NP00/DT7NPo0+TT4NPc09jT1IjTpNPM08jTxNPAyBkIF9kg071cBCDXssSKyASEIshA0CLIYszTsFzXrIQqvSTXqNekiNeg0/iU06AslWDXnNOkoNOgWUDTpIlUiEjTnMQASEE016TToIwhJNeghBAxA/9M06SJVIxJENPUiNOlJNegjWzToIlVNVRRENOs08wxENPdENOo16CI15zT+JTTnCyVYNeY06Cg05xZQNOgiVSISNOYxABIQTTXoNOcjCEk15yEEDED/0zToIlUjEkQiNOhJNeYjWzTmIlVNNec09TTnVRRENPU05yNWNeY08SEGNOsLIQZYFyMINeU08TTrIQYLNOUWXTXkNOUkEkEAmDT2NPIhBzTrCyEHWEk14lcBKDTiIlVNSTXjVwAgNeKABDRpKDY04lA041cgCFCwsSKyATT6sggjshA04rIHs7EisgE0+7III7IQNP80/Uk14VcBIDThIlVNNP806yISTbIHs4AIAAAAAAAAEQiwJwc1BzT/NP40/TT8NPs0+jT5NPg09zT2NOYjNPQ08zTyNOQ08DIGQgRugAgAAAAAAAARELAnBzUHNP80/jT9NPw0+zT6NPk0+DT3NPY05iI09DTzNPI05DTwMgZCBDlJIwxAAb9INO9XAQE17LEisgEhCLIQNAiyGLMhCq9JNes16iI16TT+JTTpCyVYNeg06ig06RZQNOoiVSISNOgxABIQTTXqNOkjCEk16SEEDED/0zTqIlUjEkQ0+EQ08CEFIjTqSTXpI1s06SJVTQshBVgiVSISRDTsFzXpNOs16CI15zT+JTTnCyVYNeY06Cg05xZQNOgiVSISNOYxABIQTTXoNOcjCEk15yEEDED/0zToIlUjEkQiNOhJNeYjWzTmIlVNNec08CEFNOcLIQVYIlUiEkQoNOkWUQcIUDXmNPA05yEFCzTmXTXlIjXkIjXjNOUhBTTjCyEFWEk14gE05gESQQAJNOQjCDXhQgAENOQ14TThNeQ04yMISTXjIQQMQP/NNOQkEkEAZYAEaYFtyTTpFlEHCFCwsSKyATT7sggjshA0/zT9STXjVwEgNOMiVU00/zTpTbIHs4AIAAAAAAAAD32wJwc1BzT/NP40/TT8NPs0+jT5NPg09zT2NPUjNPQ08zTyNPE05TIGQgKpgAgAAAAAAAAPhbAnBzUHNP80/jT9NPw0+zT6NPk0+DT3NPY09SI09DTzNPI08TTlMgZCAnRINO9XASg17CI167EisgEhCLIQNAiyGLM06yMISTXrJAxA/+c07FcAIDXrNOwlWzXqIQqvSTXpNegiNec0/iU05wslWDXmNOgoNOcWUDToIlUiEjTmMQASEE016DTnIwhJNechBAxA/9M06CJVIxJENPMhCQxENPdEIjXnIjXmNPIhBzTmCyEHWDXlKDTrNOoWUFABNOUBEjTnSU015zTmIwhJNeYhCQxA/9Q05xRENOk15iI15TT+JTTlCyVYNeQ05ig05RZQNOYiVSISNOQxABIQTTXmNOUjCEk15SEEDED/0zTmIlUjEkQiNeUiNeQ08iEHNOQLIQdYNeMoNOs06hZQUAE04wESNOVJTTXlNOQjCEk15CEJDED/1DTlFESABIYRGWw061A06hZQsIAIAAAAAAAADgGwJwc1BzT/NP40/TT8NPs0+jT5NPg09zT2NPUiNPQ08yMINPI08yEHCyg06zTqFlBQXTTxNPAyBkIBASISRIHAmgyIAjCxIrIBIQiyECKyGIAGBzEAMgkSsh6AAQeyH7O0PTUIIjQBEkQ0BEkiEkw0AhIRREk1BUlKSklXAKA1/1egITX+V8EgNf2B4QFbNfyB6QFbNfuB8QFbNfpX+QEXNfmABLPZveY0/1A0/lA0/VA0/BZQNPsWUDT6FlA0+RZRBwhQsDT8NPsIiAGoNPkUNPsiEhFEIQSvNfghB6819zEAMRgWUDX2gAIAADX1MQA0/zT+NP00/DT7NPo0+UkUNPY0+CI0+CMoNPZQNPdQNPdQNPdQNPdQNPdQNPdQNPdQNPdQNPdQIR+vNPVJUDT1UDT1UDT1UDIGQgAANf81/jX9Nfw1+zX6Nfk1+DX3NfY19TX0NfM18jXxNfA17zXuNPlBAANCAIY07jTvUDTwUDTxUDTyFlA08xZQNPQWUDT1FlEHCFA09hZRBwhQNPdQNPhQNPpQNPsWUDT8UDT9UDT+UClLAVcAf2coSwFXf39nKksBV/5/ZytLAYH9AiELWGcnBEsBgfwDIQtYZycFSwGB+wQhC1hnJwZLAYH6BYFPWGdIJDUBMgY1AkIALTEZIQQSRLEisgEhCLIQNAiyGCEEshmzsSKyASKyCCOyEDIJsgkyCrIHs0IABTEZIhJEJwc0ARY0AhY0CBZQUGc0BkEACoAEFR98dTQHULA0AEkjCDIEEkQxFhJEI0MxGSISREL/3yIxNBJEIQYxNRJEIjE2EkQiMTcSRCI1ASI1AiI1CEL/pjQASUojCDUAOAcyChJEOBAjEkQ4CBJEiQ==`,
  appClear: `Bw==`,
  companionInfo: {
    api_Oracle_addParticipant: 3,
    api_Oracle_announceVerification: 1,
    api_Oracle_announceWinner: 1,
    api_Oracle_correctContract: 1
    },
  extraPages: 1,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 7,
  stateSize: 841,
  unsupported: [],
  version: 11,
  warnings: []
  };
const _ETH = {
  ABI: `[{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"address payable[5]","name":"elem1","type":"address[5]"},{"components":[{"internalType":"enum _enum_T0","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"internalType":"address payable","name":"_Some","type":"address"}],"internalType":"struct T0","name":"elem2","type":"tuple"},{"internalType":"bytes32","name":"elem3","type":"bytes32"},{"internalType":"uint256","name":"elem4","type":"uint256"},{"internalType":"uint256","name":"elem5","type":"uint256"},{"internalType":"uint256","name":"elem6","type":"uint256"},{"internalType":"bool","name":"elem7","type":"bool"}],"internalType":"struct T15","name":"v29034","type":"tuple"}],"stateMutability":"payable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"msg","type":"uint256"}],"name":"ReachError","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"address payable[5]","name":"elem1","type":"address[5]"},{"components":[{"internalType":"enum _enum_T0","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"internalType":"address payable","name":"_Some","type":"address"}],"internalType":"struct T0","name":"elem2","type":"tuple"},{"internalType":"bytes32","name":"elem3","type":"bytes32"},{"internalType":"uint256","name":"elem4","type":"uint256"},{"internalType":"uint256","name":"elem5","type":"uint256"},{"internalType":"uint256","name":"elem6","type":"uint256"},{"internalType":"bool","name":"elem7","type":"bool"}],"indexed":false,"internalType":"struct T15","name":"_a","type":"tuple"}],"name":"_reach_e0","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T8","name":"which","type":"uint8"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"},{"internalType":"address payable","name":"elem1","type":"address"}],"internalType":"struct T2","name":"_Oracle_addParticipant0_738","type":"tuple"},{"components":[{"internalType":"bool","name":"elem0","type":"bool"}],"internalType":"struct T6","name":"_Oracle_announceVerification0_738","type":"tuple"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T7","name":"_Oracle_announceWinner0_738","type":"tuple"},{"internalType":"bool","name":"_Oracle_correctContract0_738","type":"bool"}],"internalType":"struct T8","name":"elem1","type":"tuple"}],"indexed":false,"internalType":"struct T9","name":"_a","type":"tuple"}],"name":"_reach_e2","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v3585","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v3965","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v3973","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v4360","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v4368","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v4726","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v4733","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"announceVerification","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address payable","name":"v0","type":"address"},{"indexed":false,"internalType":"address payable","name":"v1","type":"address"}],"name":"announceWinner","type":"event"},{"anonymous":false,"inputs":[],"name":"correctContract","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address payable","name":"v0","type":"address"},{"indexed":false,"internalType":"address payable","name":"v1","type":"address"}],"name":"newParticipant","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[{"internalType":"address payable","name":"v29013","type":"address"},{"internalType":"address payable","name":"v29014","type":"address"}],"name":"Oracle_addParticipant","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"bool","name":"v29019","type":"bool"}],"name":"Oracle_announceVerification","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"v29024","type":"uint256"}],"name":"Oracle_announceWinner","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"Oracle_correctContract","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"_reachCreationTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentState","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T8","name":"which","type":"uint8"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"},{"internalType":"address payable","name":"elem1","type":"address"}],"internalType":"struct T2","name":"_Oracle_addParticipant0_738","type":"tuple"},{"components":[{"internalType":"bool","name":"elem0","type":"bool"}],"internalType":"struct T6","name":"_Oracle_announceVerification0_738","type":"tuple"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T7","name":"_Oracle_announceWinner0_738","type":"tuple"},{"internalType":"bool","name":"_Oracle_correctContract0_738","type":"bool"}],"internalType":"struct T8","name":"elem1","type":"tuple"}],"internalType":"struct T9","name":"v29044","type":"tuple"}],"name":"_reachp_2","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"addressSkeptic","outputs":[{"components":[{"internalType":"enum _enum_T0","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"internalType":"address payable","name":"_Some","type":"address"}],"internalType":"struct T0","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"addressesOracles","outputs":[{"internalType":"address payable[5]","name":"","type":"address[5]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"author","outputs":[{"internalType":"address payable","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"deadline","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"interaction","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"isBottom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"participants","outputs":[{"components":[{"internalType":"enum _enum_T3","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"},{"internalType":"address payable","name":"elem1","type":"address"}],"internalType":"struct T2","name":"_Some","type":"tuple"}],"internalType":"struct T3[10]","name":"","type":"tuple[10]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"wagerDown","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"wagerUp","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"stateMutability":"payable","type":"receive"}]`,
  Bytecode: `0x6200551e38819003906080601f8301601f1916810191906001600160401b0383119083101762000ac2578291604052608039608081016101c0821262000bad57604051906200004e8262000c22565b608051825260bf81131562000bad57604051926200006c8462000c5b565b610140918490831162000bad5760a0945b83861062000c0757506020840152606060bf199091011262000bad5760405190606082016001600160401b0381118382101762000ac25760405251600281101562000bad578152620000d161016062000ca9565b6020820152620000e361018062000c94565b6040828101919091528201526101a05160608201526101c05160808201526101e05160a08201526102005160c08201526200012061022062000ca9565b60e0820152436003556040516101c081016001600160401b0381118282101762000ac2576000916101a0916040528281528260208201528260408201528260608201528260808201526200017362000cb7565b60a0820152604051620001868162000c5b565b60a036823760c08201528260e0820152826101008201528261012082015282610140820152620001b562000d2e565b61016082015282610180820152015260405190620001d38262000c22565b604051620001e18162000c5b565b60a03682378252620001f262000d02565b60208301526200020162000cd8565b60408301526200021062000d02565b60608301526200021f62000d2e565b6080830152604051620002328162000c77565b61014036823760a08301526200024762000cb7565b60c08301526200025662000d67565b60e083015260ff6004541662000bee577fe4faab143ee4f6ab5848b33b1c39e101aec01e720e1384826aef1ca110c33a256101e060405133815283516020820152620002ab6020850151604083019062000d9f565b620002bf604085015160e083019062000df3565b6060840151610140820152608084015161016082015260a084015161018082015260c08401516101a082015260e084015115156101c0820152a18051801590811562000be1575b501562000bc857608081015160a082015181019081811162000bb257811062000bad57340362000b945760e08101511562000b8c5760a0810151155b1562000b73578151600090819052825160209081018290528351604090810183905284516060908101849052855160809081018590528387018051869052805185018690528388018051339052805130908701528389018051600190529051815186015251828901805191909152815181518701528151815186015281518151850152815181518401528151815160a0908101919091528251825160c0908101919091528351835160e09081019190915284518451610100908101919091529451935161012090810194909452828c0180518b905280518a018b9052805189018b9052805188018b9052805187018b905280519093018a9052825182018a9052825181018a90528251909401899052905190910187905288018051879052805186019690965285519088018051919091528551815190950194909452845184518401528451845190920191909152925191519092015251916001600160401b0361024084019081119084111762000ac25760e08092610240850160405260008552604051620004d18162000c5b565b60a03682376020860152620004e562000cb7565b60408601526000606086015260006080860152600060a0860152600060c086015260008286015260006101008601526200051e62000cd8565b610120860152604051620005328162000c5b565b60a03682376101408601526000610160860152604051620005538162000c5b565b60a036823761018086015260006101a08601526200057062000d2e565b6101c0860152604051620005848162000c77565b6101403682376101e08601526200059a62000d67565b61020086015260006102208601523385526020810151602086015260408101516040860152606081015160608601526080810151608086015260a081015160a086015260c081015160c0860152818101511515828601520151151560001462000b6b5760005b1515610100840152604081015161012084015280516101408401526000610160840152805161018084015260016101a084015260808101516101c084015260a08101516101e08401520151610200820152436102208201526040518061020081011060018060401b036102008301111762000ac2576102008101604052600081526040516200068f8162000c5b565b60a03682376020820152620006a362000cb7565b60408201526000606082015260006080820152600060a0820152600060c0820152600060e08201526000610100820152620006dd62000cd8565b610120820152604051620006f18162000c5b565b60a03682376101408201526040516200070a8162000c5b565b60a036823761016082015260006101808201526200072762000d2e565b6101a08201526040516200073b8162000c77565b6101403682376101c08201526200075162000d67565b6101e082015261020060018060a01b03835116928383526020810151602084015260408101516040840152606081015160608401526080810151608084015260a081015160a084015260c081015160c084015260e0810151151560e084015261010081015115156101008401526101208101516101208401526101408101516101408401526101808101516101608401526101a08101516101808401526101c08101516101a08401526101e08101516101c084015201516101e0820152600360005543600155604051916020830152620008346020820151604084019062000d9f565b62000848604082015160e084019062000df3565b6060810151610140830152608081015161016083015260a081015161018083015260c08101516101a083015260e081015115156101c083015261010081015115156101e0830152620008a561012082015161020084019062000e22565b620008bb61014082015161024084019062000e3d565b620008d16101608201516102e084019062000e3d565b6101808101516103808301526101a081015160006103a084015b600a821062000b29575050506101c081015160006108a084015b600a821062000b1257846101e08501516109e082016000905b6005821062000ad857610ba0845283610bc081016001600160401b0381118282101762000ac25760405280516001600160401b03811162000ac257600254600181811c9116801562000ab7575b602082101462000aa157601f811162000a37575b50602091601f8211600114620009cd57918192600092620009c1575b50508160011b916000199060031b1c1916176002555b6040516146b4908162000e6a8239f35b0151905082806200099b565b601f19821692600260005260206000209160005b85811062000a1e5750836001951062000a04575b505050811b01600255620009b1565b015160001960f88460031b161c19169055828080620009f5565b91926020600181928685015181550194019201620009e1565b60026000527f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace601f830160051c8101916020841062000a96575b601f0160051c01905b81811062000a8957506200097f565b6000815560010162000a7a565b909150819062000a71565b634e487b7160e01b600052602260045260246000fd5b90607f16906200096b565b634e487b7160e01b600052604160045260246000fd5b6020606060019260408651805162000af08162000dd2565b835284810151151585840152015115156040820152019301910190916200091e565b602080600192855181520193019101909162000905565b6020608060019262000b5e60408751805162000b458162000dd2565b8452858101511515868501520151604083019062000e22565b01930191019091620008eb565b600162000600565b60405163100960cb60e01b815260136004820152602490fd5b600162000342565b60405163100960cb60e01b815260126004820152602490fd5b600080fd5b634e487b7160e01b600052601160045260246000fd5b60405163100960cb60e01b815260116004820152602490fd5b9050600154148362000306565b60405163100960cb60e01b815260106004820152602490fd5b6020809162000c168862000c94565b8152019501946200007d565b61010081019081106001600160401b0382111762000ac257604052565b606081019081106001600160401b0382111762000ac257604052565b60a081019081106001600160401b0382111762000ac257604052565b61014081019081106001600160401b0382111762000ac257604052565b51906001600160a01b038216820362000bad57565b5190811515820362000bad57565b6040519062000cc68262000c3f565b60006040838281528260208201520152565b60408051919082016001600160401b0381118382101762000ac25760405260006020838281520152565b6040519062000d118262000c3f565b816000815260006020820152604062000d2962000cd8565b910152565b6040519062000d3d8262000c77565b8160005b610140811062000d4f575050565b60209062000d5c62000d02565b818401520162000d41565b6040519062000d768262000c5b565b8160005b60a0811062000d87575050565b60209062000d9462000cb7565b818401520162000d7a565b6000915b6005831062000db157505050565b81516001600160a01b03168152600192909201916020918201910162000da3565b6002111562000ddd57565b634e487b7160e01b600052602160045260246000fd5b604090805162000e038162000dd2565b83526020818101511515908401528101516001600160a01b0316910152565b80516001600160a01b03908116835260209182015116910152565b6000915b6005831062000e4f57505050565b600190825115158152602080910192019201919062000e4156fe60406080815260048036101561001c575b5050361561001a57005b005b600090813560e01c8063173b7d7e146107215780631e93b0f11461070257806329dcb0cf146106b557806361736071146106755780636ba24022146106285780636c4470fb146105895780636c6973311461053c578063832307571461051d5780638a830443146104b15780638b81030014610441578063a6c3e6b9146103d2578063aaed29ac1461035d578063ab53f2c6146102f1578063ca4ebc4214610297578063e32c7165146101cf578063f04f1a09146101515763f88ed95f146100e45750610010565b3461014d578160031936011261014d5760036100fe610b7d565b925403610136576020610140848460e0610127610119610a40565b868082518301019101610d83565b01511515928391015251908152f35b602490600c84519163100960cb60e01b8352820152fd5b5080fd5b503461014d578160031936011261014d5760a0835161016f816109d2565b369037600361017c610b7d565b9254036101b85760a060c06101b6858560206101a7610199610a40565b828082518301019101610d83565b015193849101525180926108e4565bf35b602490600884519163100960cb60e01b8352820152fd5b50829081600319360112610293576001600160a01b039290358381169190829003610290576024359184831680930361014d576102859061020e610b7d565b92839186519061021d8261094f565b602098899788840192845282528851916102368361094f565b89516102418161094f565b858152858a82015283528189840194610258610c14565b865251168351525116878251015282825152518682510152610278610c7c565b91825251858201526111fc565b015115159051908152f35b80fd5b8280fd5b503461014d578160031936011261014d5760036102b2610b7d565b9254036102da5760206101a0848460806102cd610119610a40565b0151928391015251908152f35b602490600f84519163100960cb60e01b8352820152fd5b82843461014d578160031936011261014d57815461030d610a40565b91805193849283526020828185015284518093850152815b83811061034657505060608094508284010152601f80199101168101030190f35b808601820151878201606001528694508101610325565b503461014d578160031936011261014d57610376610af5565b506003610381610b7d565b9254036103bb57606060a06101b68585816103ac61039d610a40565b60208082518301019101610d83565b015193849101525180926108b7565b602490600784519163100960cb60e01b8352820152fd5b503461014d578160031936011261014d5760036103ed610b7d565b92540361042a57602060e08484610402610a40565b80516001600160a01b039161041d9181018701908701610d83565b5116928391015251908152f35b602490600984519163100960cb60e01b8352820152fd5b508290602036600319011261029357602092610285606092610461610b7d565b928391865161046f8161094f565b875161047a81610980565b83815281528881019161048b610c14565b83523581515260028251525186825101526104a4610c7c565b91825251878201526111fc565b508290602036600319011261029357358015158091036102935760209261028583926104db610b7d565b92839185516104e98161094f565b86516104f481610980565b838152815288810191610505610c14565b835281515260018251525186825101526104a4610c7c565b82843461014d578160031936011261014d576020906001549051908152f35b503461014d578160031936011261014d576003610557610b7d565b925403610572576020610120848460606102cd610119610a40565b602490600b84519163100960cb60e01b8352820152fd5b503461014d578160031936011261014d576105a2610b4a565b506105ab610b7d565b9060038354036106115750610160926105c2610a40565b916101a06105da602094858082518301019101610d83565b01519401849052519291835b600a82106105f45761050085f35b82608082610605600194885161088a565b019401910190926105e6565b602490600d85519163100960cb60e01b8352820152fd5b503461014d578160031936011261014d576003610643610b7d565b92540361065e576020610180848460a06102cd610119610a40565b602490600e84519163100960cb60e01b8352820152fd5b82848160031936011261014d576080602092610285610692610b7d565b809261069c610c7c565b87810190600382515251151586825101526104a4610c7c565b503461014d578160031936011261014d5760036106d0610b7d565b9254036106eb576020610100848460c06102cd610119610a40565b602490600a84519163100960cb60e01b8352820152fd5b82843461014d578160031936011261014d576020906003549051908152f35b509160e036600319011261014d57610737610b7d565b81516107428161094f565b8435815260c03660231901126108385782519460a086016001600160401b0381118782101761083c5784526024359081101561083057855282604319360112610838578251946107918661094f565b6001600160a01b03956044358781168103610834578152606435968716870361082c576020968782015286820152856083193601126108305783516107d581610980565b6084358015158103610834578152848201528560a3193601126108305783516107fd81610980565b60a4358152606082015260c435801515810361082c5760808201528582015261082691906111fc565b51908152f35b8580fd5b8480fd5b8680fd5b8380fd5b634e487b7160e01b865260418252602486fd5b6002111561085957565b634e487b7160e01b600052602160045260246000fd5b80516001600160a01b03908116835260209182015116910152565b906040806108b593805161089d8161084f565b8452602081015115156020850152015191019061086f565b565b60409080516108c58161084f565b83526020818101511515908401528101516001600160a01b0316910152565b6000915b600583106108f557505050565b81516001600160a01b0316815260019290920191602091820191016108e8565b90600182811c92168015610945575b602083101461092f57565b634e487b7160e01b600052602260045260246000fd5b91607f1691610924565b604081019081106001600160401b0382111761096a57604052565b634e487b7160e01b600052604160045260246000fd5b602081019081106001600160401b0382111761096a57604052565b606081019081106001600160401b0382111761096a57604052565b61020081019081106001600160401b0382111761096a57604052565b60a081019081106001600160401b0382111761096a57604052565b61014081019081106001600160401b0382111761096a57604052565b610bc081019081106001600160401b0382111761096a57604052565b608081019081106001600160401b0382111761096a57604052565b604051906000600254610a5281610915565b808552600191808316908115610ad65750600114610a90575b5050829003601f01601f191682016001600160401b0381118382101761096a57604052565b600260009081526020935091836000805160206146688339815191525b838510610ac257505050508301013880610a6b565b805488860183015293019284908201610aad565b919250506020925060ff191682850152151560051b8301013880610a6b565b60405190610b028261099b565b60006040838281528260208201520152565b60405190610b218261099b565b8160008152600060208201526040805191610b3b8361094f565b60008352600060208401520152565b60405190610b57826109ed565b8160005b6101408110610b68575050565b602090610b73610b14565b8184015201610b5b565b604051906101c082016001600160401b0381118382101761096a57604052816101a0600091828152826020820152826040820152826060820152826080820152610bc5610af5565b60a0820152604051610bd6816109d2565b60a036823760c08201528260e0820152826101008201528261012082015282610140820152610c03610b4a565b610160820152826101808201520152565b60408051919060a083016001600160401b0381118482101761096a5781526080836000928382528051610c468161094f565b84815284602082015260208301528051610c5f81610980565b8481528183015251610c7081610980565b83815260608201520152565b60405190610c898261094f565b81600081526020610c98610c14565b910152565b60405190610caa826109d2565b8160005b60a08110610cba575050565b602090610cc5610af5565b8184015201610cae565b51906001600160a01b0382168203610ce357565b600080fd5b51908115158203610ce357565b9190826040910312610ce357604080519081016001600160401b0381118282101761096a576040526020610c98818395610d2e81610ccf565b855201610ccf565b9080601f83011215610ce35760405191610d4f836109d2565b829060a08101928311610ce357905b828210610d6b5750505090565b60208091610d7884610ce8565b815201910190610d5e565b90610ba090828103828112610ce35760408051949061020086016001600160401b0381118782101761096a578152610dba82610ccf565b865283603f83011215610ce357805191610dd3836109d2565b829160c0820193868511610ce35760209384808501915b878310611040575090508901526060809560bf190112610ce357805193610e108561099b565b519060029182811015610ce357855288948790610e2f60e08601610ce8565b8187015261010090610e42868301610ccf565b84820152838801526101208086015189890152610140808701516080809a01528c6101608089015160a083015261018092838a015160c08401526101a094858b01610e8c90610ce8565b60e08501526101c096610ea08c8901610ce8565b908501526101e09e8f8c0190610eb591610cf5565b90840152610ec7876102208c01610d36565b90830152610ed9866102c08b01610d36565b910152610360870151908d01528261039f87011215610ce357835190610efe826109ed565b61088087019882858b11610ce3576103808901905b8b8210610ff0575050508c01528161089f86011215610ce357825190610f38826109ed565b816109c0870198848a11610ce3578890915b8a8310610fe0575050508b0152806109df85011215610ce357815198610f6f8a6109d2565b89940195818711610ce357935b868510610f9157505050505050505082015290565b8785830312610ce357825190610fa68261099b565b85519085821015610ce3578288928b9452610fc2838901610ce8565b83820152610fd1868901610ce8565b86820152815201940193610f7c565b8251815291810191899101610f4a565b8282880312610ce3578751906110058261099b565b8251908a821015610ce357828d92869452611021838601610ce8565b838201526110318a8c8701610cf5565b8b820152815201910190610f13565b819061104b84610ccf565b8152019101908590610dea565b5160048110156108595790565b60001981146110745760010190565b634e487b7160e01b600052601160045260246000fd5b90600581101561109b5760051b0190565b634e487b7160e01b600052603260045260246000fd5b60408051919061024083016001600160401b0381118482101761096a5781526102208360009283825280516110e5816109d2565b60a036823760208301526110f7610af5565b818301528360608301528360808301528360a08301528360c08301528360e083015283610100830152805161112b8161094f565b848152846020820152610120830152805190611146826109d2565b60a03683376101409182840152846101608401528051611165816109d2565b60a0368237610180840152846101a084015261117f610b4a565b6101c08401525190611190826109ed565b3682376101e08201526111a1610c9d565b6102008201520152565b90600a81101561109b5760051b0190565b6001600160a01b0391821681529116602082015260400190565b6040809180516111e58161084f565b845260208101511515602085015201511515910152565b604051929161088084016001600160401b0381118582101761096a57806040526112258161094f565b6000815260006108a0860152845261123b610af5565b6020850152611248610af5565b6040850152611255610af5565b606085015260006080850152611269610af5565b60a0850152600060c0850152600060e0850152611284610b14565b6101008501526040516112968161094f565b60008152600060208201526101208501526112af610b14565b6101408501526112bd610af5565b6101608501526112cb610af5565b61018085015260006101a08501526112e1610af5565b6101c085015260006101e085015260006102008501526112ff610b14565b6102208501526040516113118161094f565b600081526000602082015261024085015261132a610b14565b61026085015260405161133c8161094f565b6000815260006020820152610280850152611355610b14565b6102a085015260405161136781610980565b600081526102c0850152611379610af5565b6102e0850152611387610af5565b610300850152611395610af5565b61032085015260006103408501526113ab610af5565b6103608501526113b9610af5565b6103808501526113c7610af5565b6103a085015260006103c08501526113dd610af5565b6103e085015260006104008501526113f3610af5565b610420850152611401610c9d565b6104408501526000610460850152600061048085015261141f610af5565b6104a085015260006104c085015260405161143981610980565b600081526104e085015261144b610af5565b610500850152611459610af5565b610520850152611467610af5565b610540850152600061056085015261147d610af5565b61058085015261148b610af5565b6105a0850152611499610af5565b6105c085015260006105e08501526114af610af5565b61060085015260006106208501526040516114c9816109d2565b60a036823761064085015260006106608501526040516114e8816109ed565b6101403682376106808501526040516115008161094f565b60008152600060208201526106a0850152611519610af5565b6106c0850152611527610af5565b6106e0850152611535610af5565b610700850152600061072085015261154b610af5565b610740850152611559610af5565b610760850152611567610af5565b61078085015260006107a085015261157d610af5565b6107c085015260405161158f816109d2565b60a03682376107e0850152600061080085015260006108208501526000610840850152600061086085015260ff600454166145a7576040513381528251602082015260208301518051916004831015610859576080610100927fb4e75f8a0fbdaa1b5cee88b488e77acbb14cc695c4de4297019764284fc076979460408401526116216020820151606085019061086f565b604081015151151560a084015260608101515160c08401520151151560e0820152a160036000540361458e5761165861039d610a40565b9180518015908115614582575b5015614569576116786020820151611058565b60048110156108595761219657602080910151015184526000602085015152600060208086015101526020840151606085015260005b60058110612112575060016060850151806040870152516116ce8161084f565b6116d78161084f565b036120f957600a61018083015110156120e057610100820151156120c757600060e085015260005b600a8110611ffa575060e084015115801560c0860152611ff35760005b15611fda5734611fc157602084015161018085015260005b60058110611f355750600161018085015180610160870152516117568161084f565b61175f8161084f565b03611f1c57600061020085015260005b600a8110611e4c57506102008401511580156101e0860152611e455760005b15611e2c57835151610280850180516001600160a01b03928316905285516020908101518251908416908201526102a087018051600190529151915160409081019290925286518051908201519251600095929492937fe83724cfd6213e1ca8e053f3ce1163bc5fea531b9b733cc0b8443d16084c4c0d93919283926118189281169116836111bc565b0390a17fb903de37e5a409a17049147c99be2c36ace2e7b5f030da6196b0a454f43b74a282604051858152a1015261184e6110b1565b9060018060a01b0381511682526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e0810151151560e0830152610100810151151561010083015261012081015161012083015261014081015161014083015260006101608301526101608101516101808301526118eb6101808201516145c0565b6101a08301526101a08101516102a061018083015195015161190b610b4a565b9160005b600a8110611dfd575050856119349161192d6101e0969798856111ab565b52826111ab565b506101c08401526101c08101518284015201516102008201524361022082015261016081015115156000146119e55750600080556000600155611978600254610915565b806119805750565b601f811160011461199357506000600255565b60026000526119d890601f0160051c600080516020614668833981519152017f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acf614650565b6000602081208160025555565b906040516119f2816109b6565b60008152604051611a02816109d2565b60a03682376020820152611a14610af5565b60408201526000606082015260006080820152600060a0820152600060c0820152600060e08201526000610100820152604051611a508161094f565b6000815260006020820152610120820152604051611a6d816109d2565b60a0368237610140820152604051611a84816109d2565b60a03682376101608201526000610180820152611a9f610b4a565b6101a0820152604051611ab1816109ed565b6101403682376101c0820152611ac5610c9d565b6101e082015261020060018060a01b03845116938483526020810151602084015260408101516040840152606081015160608401526080810151608084015260a081015160a084015260c081015160c084015260e0810151151560e084015261010081015115156101008401526101208101516101208401526101408101516101408401526101808101516101608401526101a08101516101808401526101c08101516101a08401526101e08101516101c084015201516101e0820152600360005543600155604051926020840152611ba6602082015160408501906108e4565b611bb8604082015160e08501906108b7565b6060810151610140840152608081015161016084015260a081015161018084015260c08101516101a084015260e081015115156101c084015261010081015115156101e0840152611c1361012082015161020085019061086f565b611c27610140820151610240850190614626565b611c3b6101608201516102e0850190614626565b6101808101516103808401526101a081015160006103a085015b600a8210611ddf575050506101c081015160006108a085015b600a8210611dc9575050506101e0015160006109e084015b60058210611dab57505050610ba08252611c9f82610a09565b81516001600160401b03811161096a57611cba600254610915565b601f8111611d63575b50602092601f8211600114611d005792819293600092611cf5575b50508160011b916000199060031b1c191617600255565b015190503880611cde565b601f19821693600260005260206000209160005b868110611d4b5750836001959610611d32575b505050811b01600255565b015160001960f88460031b161c19169055388080611d27565b91926020600181928685015181550194019201611d14565b6002600052611d9b90600080516020614668833981519152601f840160051c81019160208510611da1575b601f0160051c0190614650565b38611cc3565b9091508190611d8e565b6020606082611dbd60019487516111d6565b01930191019091611c86565b6020806001928551815201930191019091611c6e565b6020608082611df1600194875161088a565b01930191019091611c55565b80611e0b611e2792846111ab565b51611e1682876111ab565b52611e2181866111ab565b50611065565b61190f565b60405163100960cb60e01b8152601d6004820152602490fd5b600161178e565b80611e5f611ec3926101a08601516111ab565b51610220870152855151610240870180516001600160a01b0392831690528751602090810151825193169201919091526102608701805160019052905190516040015261020086015115611ec85761020086015115155b1515610200870152611065565b61176f565b610260860151604051611edf60208201809361088a565b60808152611eec816109d2565b519020610220870151604051611f0660208201809361088a565b60808152611f13816109d2565b51902014611eb6565b60405163100960cb60e01b8152601c6004820152602490fd5b611fa99060018060a01b0380611f4f83602088015161108a565b51166101a088015260016101c0880151528160406101c0890151015261018087015151611f7b8161084f565b611f848161084f565b611fb9576101a08701511633145b15611fae576101c08601515b610180870152611065565b611734565b610180860151611f9e565b506000611f92565b60405163100960cb60e01b8152601b6004820152602490fd5b60405163100960cb60e01b8152601a6004820152602490fd5b600161171c565b8061200d61206e926101a08601516111ab565b51610100870152855151610120870180516001600160a01b0392831690528751602090810151825193169201919091526101408701805160019052905190516040015260e0860151156120735760e086015115155b151560e0870152611065565b6116ff565b61014086015160405161208a60208201809361088a565b60808152612097816109d2565b5190206101008701516040516120b160208201809361088a565b608081526120be816109d2565b51902014612062565b60405163100960cb60e01b815260196004820152602490fd5b60405163100960cb60e01b815260186004820152602490fd5b60405163100960cb60e01b815260176004820152602490fd5b61217f9060018060a01b038061212c83602088015161108a565b51166080880152600160a08801515281604060a089015101526060870151516121548161084f565b61215d8161084f565b61218e5760808701511633145b156121845760a08601515b6060870152611065565b6116ae565b6060860151612175565b50600061216a565b6121a860208296939495960151611058565b600481101561085957600103612cf1576020604091015101516102c082015260006102e082015152600060206102e083015101526102e081015161032082015260005b60058110612c6557506001610320820151806103008401525161220d8161084f565b6122168161084f565b03612c4c5760e083015115612c335761225e6101e08401516001610300840151516122408161084f565b6122498161084f565b03612c2b57604061030084015101519061108a565b51516122698161084f565b6122728161084f565b612c125734612bf9576102e08101516103a082015260005b60058110612b6d575060016103a082015180610380840152516122ac8161084f565b6122b58161084f565b03612b54576001610380820151516122cc8161084f565b6122d58161084f565b03612b4a576122fa604061038083015101515b806104008401526101e085015161108a565b51516123058161084f565b61230e8161084f565b612b31576001610420820151526102c0810151511515604061042083015101526101e0830151610400820151610420830151612348610c9d565b9260005b60058110612b085750509061236c91612365828561108a565b528261108a565b50610440820152600061048082015260005b60058110612a64575060036104808201518061046084015214600014612581577f3d4eb33e4d2359cd4a519091b0a501d8c8ef06d94641274a49f4f59a9d75b2b860206102c0830151511515604051908152a16102c0810151511561253057600080808060018060a01b038751165b60808801519082908215612526575b6001600160a01b031690f11561251a5760006040610440937f51a39c773147da6820a371aed7ff1459cb9dd57a625b772aea8de3beafeea12b60208351858152a101526101c061244a6110b1565b9360018060a01b0381511685526020810151602086015260408101516040860152606081015160608601526080810151608086015260a081015160a086015260c081015160c086015260e0810151151560e0860152610100810151151561010086015261012081015161012086015261014081015161014086015260016101608601526101608101516101808601526101808101516101a08601526101a08101518286015201516101e0840152015161020082015261022043910152600080556000600155611978600254610915565b6040513d6000823e3d90fd5b6108fc91506123fc565b6040830160018151516125428161084f565b61254b8161084f565b0361256c5751604001516000908190819081906001600160a01b03166123ed565b50600080808060018060a01b038751166123ed565b60006040610440937f84190cd25493caea0495daab0f57b4666ecf963ffa87f0d7dc0a87ee36517e5960208398979851858152a101526101c06125c26110b1565b9460018060a01b0381511686526020810151602087015260408101516040870152606081015160608701526080810151608087015260a081015160a087015260c081015160c087015260e0810151151560e0870152610100810151151561010087015261012081015161012087015261014081015161014087015260006101608701526101608101516101808701526101808101516101a08701526101a08101518287015201516101e085015201516102008301524361022083015260405161268a816109b6565b6000815260405161269a816109d2565b60a036823760208201526126ac610af5565b60408201526000606082015260006080820152600060a0820152600060c0820152600060e082015260006101008201526040516126e88161094f565b6000815260006020820152610120820152604051612705816109d2565b60a036823761014082015260405161271c816109d2565b60a03682376101608201526000610180820152612737610b4a565b6101a0820152604051612749816109ed565b6101403682376101c082015261275d610c9d565b6101e082015261020060018060a01b03845116938483526020810151602084015260408101516040840152606081015160608401526080810151608084015260a081015160a084015260c081015160c084015260e0810151151560e084015261010081015115156101008401526101208101516101208401526101408101516101408401526101808101516101608401526101a08101516101808401526101c08101516101a08401526101e08101516101c084015201516101e082015260036000554360015560405192602084015261283e602082015160408501906108e4565b612850604082015160e08501906108b7565b6060810151610140840152608081015161016084015260a081015161018084015260c08101516101a084015260e081015115156101c084015261010081015115156101e08401526128ab61012082015161020085019061086f565b6128bf610140820151610240850190614626565b6128d36101608201516102e0850190614626565b6101808101516103808401526101a081015160006103a085015b600a8210612a46575050506101c081015160006108a085015b600a8210612a30575050506101e0015160006109e084015b60058210612a1257505050610ba0825261293782610a09565b81516001600160401b03811161096a57612952600254610915565b601f81116129d5575b50602092601f821160011461298c5792819293600092611cf55750508160011b916000199060031b1c191617600255565b601f19821693600260005260206000209160005b8681106129bd5750836001959610611d3257505050811b01600255565b919260206001819286850151815501940192016129a0565b6002600052612a0c90600080516020614668833981519152601f840160051c81019160208510611da157601f0160051c0190614650565b3861295b565b6020606082612a2460019487516111d6565b0193019101909161291e565b6020806001928551815201930191019091612906565b6020608082612a58600194875161088a565b019301910190916128ed565b80612a77612af29261044085015161108a565b51806104a0850152604051612a906020820180936111d6565b60608152612a9d81610a25565b519020610420840151604051612ab76020820180936111d6565b60608152612ac481610a25565b51902003612af757612ada6104808401516145c0565b6104c08401525b6104c0830151610480840152611065565b61237e565b6104808301516104c0840152612ae1565b80612b16612b2c928461108a565b51612b21828861108a565b52611e21818761108a565b61234c565b60405163100960cb60e01b815260236004820152602490fd5b6122fa60006122e8565b60405163100960cb60e01b815260226004820152602490fd5b612be19060018060a01b0380612b8783602089015161108a565b51166103c085015260016103e0850151528160406103e086015101526103a084015151612bb38161084f565b612bbc8161084f565b612bf1576103c08401511633145b15612be6576103e08301515b6103a0840152611065565b61228a565b6103a0830151612bd6565b506000612bca565b60405163100960cb60e01b815260216004820152602490fd5b60405163100960cb60e01b815260206004820152602490fd5b60009061108a565b60405163100960cb60e01b8152601f6004820152602490fd5b60405163100960cb60e01b8152601e6004820152602490fd5b612cd99060018060a01b0380612c7f83602089015161108a565b5116610340850152600161036085015152816040610360860151015261032084015151612cab8161084f565b612cb48161084f565b612ce9576103408401511633145b15612cde576103608301515b610320840152611065565b6121eb565b610320830151612cce565b506000612cc2565b612d016020829593950151611058565b600481101561085957600203613855576020606091015101516104e084015260006105008401515260006020610500850151015261050083015161054084015260005b600581106137c9575060016105408401518061052086015251612d668161084f565b612d6f8161084f565b036137b257612dad610140820151600161052086015151612d8f8161084f565b612d988161084f565b03612c2b57604061052086015101519061108a565b51156137ab5760005b15613792576104e083015151610180820151111561377957610100810151156137605734613747576105008301516105c084015260005b600581106136bb575060016105c0840151806105a086015251612e0f8161084f565b612e188161084f565b036136a25760016105a084015151612e2f8161084f565b612e388161084f565b0361369857612e5d60406105a085015101515b8061062086015261014083015161108a565b51156136915760005b1561367857612e80610140820151610620850151906145d5565b6106408401526101c08101612ea6612ea082516104e087015151906111ab565b516145c0565b908161066086015251906104e08501515160405192612ec4846109ed565b61014036853760005b600a8110613654575050612ee190836111ab565b52610680840152610660830151600303613170576001612f0d6101a08301516104e086015151906111ab565b5151612f188161084f565b612f218161084f565b03613156576000805160206146888339815191526040612f4d6101a08401516104e087015151906111ab565b5101515b6106a085018190528051602090910151604051918291612f7e916001600160a01b039182169116836111bc565b0390a1600080808060018060a01b036106a0880151511660a08601519082821561314d575bf11561251a576104e0830151516130fc57600080808060018060a01b038551165b608086015190829082156130f2575b6001600160a01b031690f11561251a57600060606101e0937fa0034c74ac54b1d7859a0c710dc02702f2a666714d6ebeddb6ad6a9c3e03c7246020604051858152a101526106806130226110b1565b9360018060a01b0383511685526020830151602086015260408301516040860152606083015160608601526080830151608086015260a083015160a086015260c083015160c086015260e0830151151560e0860152610100830151151561010086015261012083015161012086015261064081015161014086015260016101608601526101608301516101808601526101808301516101a08601526101a08301516101c0860152015182840152015161020082015261022043910152600080556000600155611978600254610915565b6108fc9150612fd3565b60408101600181515161310e8161084f565b6131178161084f565b036131385751604001516000908190819081906001600160a01b0316612fc4565b50600080808060018060a01b03855116612fc4565b506108fc612fa3565b600080516020614688833981519152610120820151612f51565b600060606101e0937fd555ea8a3b846562f326e06222d3443e3defd969734d0a05a310ab63ced735616020604098979851858152a101526106806131b26110b1565b9460018060a01b0383511686526020830151602087015260408301516040870152606083015160608701526080830151608087015260a083015160a087015260c083015160c087015260e0830151151560e0870152610100830151151561010087015261012083015161012087015261064081015161014087015260006101608701526101608301516101808701526101808301516101a08701526101a08301516101c087015201518285015201516102008301524361022083015260405161327a816109b6565b6000815260405161328a816109d2565b60a0368237602082015261329c610af5565b60408201526000606082015260006080820152600060a0820152600060c0820152600060e082015260006101008201526040516132d88161094f565b60008152600060208201526101208201526040516132f5816109d2565b60a036823761014082015260405161330c816109d2565b60a03682376101608201526000610180820152613327610b4a565b6101a0820152604051613339816109ed565b6101403682376101c082015261334d610c9d565b6101e082015261020060018060a01b03845116938483526020810151602084015260408101516040840152606081015160608401526080810151608084015260a081015160a084015260c081015160c084015260e0810151151560e084015261010081015115156101008401526101208101516101208401526101408101516101408401526101808101516101608401526101a08101516101808401526101c08101516101a08401526101e08101516101c084015201516101e082015260036000554360015560405192602084015261342e602082015160408501906108e4565b613440604082015160e08501906108b7565b6060810151610140840152608081015161016084015260a081015161018084015260c08101516101a084015260e081015115156101c084015261010081015115156101e084015261349b61012082015161020085019061086f565b6134af610140820151610240850190614626565b6134c36101608201516102e0850190614626565b6101808101516103808401526101a081015160006103a085015b600a8210613636575050506101c081015160006108a085015b600a8210613620575050506101e0015160006109e084015b6005821061360257505050610ba0825261352782610a09565b81516001600160401b03811161096a57613542600254610915565b601f81116135c5575b50602092601f821160011461357c5792819293600092611cf55750508160011b916000199060031b1c191617600255565b601f19821693600260005260206000209160005b8681106135ad5750836001959610611d3257505050811b01600255565b91926020600181928685015181550194019201613590565b60026000526135fc90600080516020614668833981519152601f840160051c81019160208510611da157601f0160051c0190614650565b3861354b565b602060608261361460019487516111d6565b0193019101909161350e565b60208060019285518152019301910190916134f6565b6020608082613648600194875161088a565b019301910190916134dd565b8061366261367392846111ab565b5161366d82886111ab565b52611065565b612ecd565b60405163100960cb60e01b8152602a6004820152602490fd5b6001612e66565b612e5d6000612e4b565b60405163100960cb60e01b815260296004820152602490fd5b61372f9060018060a01b03806136d583602087015161108a565b51166105e087015260016106008701515281604061060088015101526105c0860151516137018161084f565b61370a8161084f565b61373f576105e08601511633145b15613734576106008501515b6105c0860152611065565b612ded565b6105c0850151613724565b506000613718565b60405163100960cb60e01b815260286004820152602490fd5b60405163100960cb60e01b815260276004820152602490fd5b60405163100960cb60e01b815260266004820152602490fd5b60405163100960cb60e01b815260256004820152602490fd5b6001612db6565b602460405163100960cb60e01b8152816004820152fd5b61383d9060018060a01b03806137e383602087015161108a565b511661056087015260016105808701515281604061058088015101526105408601515161380f8161084f565b6138188161084f565b61384d576105608601511633145b15613842576105808501515b610540860152611065565b612d44565b610540850151613832565b506000613826565b6020613868919594959392930151611058565b60048110156108595760031461387f575b50509050565b60006106c085015152600060206106c086015101526106c084015161070085015260005b600581106144dd57506001610700850151806106e0870152516138c58161084f565b6138ce8161084f565b036144c457346144ab576106c084015161078085015260005b6005811061441f5750600161078085015180610760870152516139098161084f565b6139128161084f565b03614406576139506101608301516001610760870151516139328161084f565b61393b8161084f565b036143fe5760406107608701510151906145d5565b6107e0850152600061082085015260005b600581106143a1575090600060806101e0936003610820880151806108008a0152148314613eb6577f68e241776c9a07089df18d8439a2d609d2424890e27713d79ec5f0f15287003160206040517f8ffd2eb5debd6cf560d4ab7314b178f04489430b8da10536115d87c63836438c8682a1858152a101526107e06139e46110b1565b9460018060a01b0383511686526020830151602087015260408301516040870152606083015160608701526080830151608087015260a083015160a087015260c083015160c087015260e0830151151560e08701526101008301511515610100870152610120830151610120870152610140830151610140870152600061016087015201516101808501526101808101516101a08501526101a08101516101c08501526101c081015182850152015161020083015243610220830152604051613aac816109b6565b60008152604051613abc816109d2565b60a03682376020820152613ace610af5565b60408201526000606082015260006080820152600060a0820152600060c0820152600060e08201526000610100820152604051613b0a8161094f565b6000815260006020820152610120820152604051613b27816109d2565b60a0368237610140820152604051613b3e816109d2565b60a03682376101608201526000610180820152613b59610b4a565b6101a0820152604051613b6b816109ed565b6101403682376101c0820152613b7f610c9d565b6101e082015261020060018060a01b03845116938483526020810151602084015260408101516040840152606081015160608401526080810151608084015260a081015160a084015260c081015160c084015260e0810151151560e084015261010081015115156101008401526101208101516101208401526101408101516101408401526101808101516101608401526101a08101516101808401526101c08101516101a08401526101e08101516101c084015201516101e0820152600360005543600155604051926020840152613c60602082015160408501906108e4565b613c72604082015160e08501906108b7565b6060810151610140840152608081015161016084015260a081015161018084015260c08101516101a084015260e081015115156101c084015261010081015115156101e0840152613ccd61012082015161020085019061086f565b613ce1610140820151610240850190614626565b613cf56101608201516102e0850190614626565b6101808101516103808401526101a081015160006103a085015b600a8210613e98575050506101c081015160006108a085015b600a8210613e82575050506101e0015160006109e084015b60058210613e6457505050610ba08252613d5982610a09565b81516001600160401b03811161096a57613d74600254610915565b601f8111613e27575b50602092601f8211600114613dc15792819293600092613db6575b50508160011b916000199060031b1c1916176002555b803880613879565b015190503880613d98565b601f19821693600260005260206000209160005b868110613e0f5750836001959610613df6575b505050811b01600255613dae565b015160001960f88460031b161c19169055388080613de8565b91926020600181928685015181550194019201613dd5565b6002600052613e5e90600080516020614668833981519152601f840160051c81019160208510611da157601f0160051c0190614650565b38613d7d565b6020606082613e7660019487516111d6565b01930191019091613d40565b6020806001928551815201930191019091613d28565b6020608082613eaa600194875161088a565b01930191019091613d0f565b7ffc824fc58de908691a115e69e2fda38a9838aeb2ac61eee45b5cc8455389454f6020604051858152a101526107e0613eed6110b1565b9460018060a01b0383511686526020830151602087015260408301516040870152606083015160608701526080830151608087015260a083015160a087015260c083015160c087015260e0830151151560e08701526101008301511515610100870152610120830151610120870152610140830151610140870152600061016087015201516101808501526101808101516101a08501526101a08101516101c08501526101c081015182850152015161020083015243610220830152604051613fb5816109b6565b60008152604051613fc5816109d2565b60a03682376020820152613fd7610af5565b60408201526000606082015260006080820152600060a0820152600060c0820152600060e082015260006101008201526040516140138161094f565b6000815260006020820152610120820152604051614030816109d2565b60a0368237610140820152604051614047816109d2565b60a03682376101608201526000610180820152614062610b4a565b6101a0820152604051614074816109ed565b6101403682376101c0820152614088610c9d565b6101e082015261020060018060a01b03845116938483526020810151602084015260408101516040840152606081015160608401526080810151608084015260a081015160a084015260c081015160c084015260e0810151151560e084015261010081015115156101008401526101208101516101208401526101408101516101408401526101808101516101608401526101a08101516101808401526101c08101516101a08401526101e08101516101c084015201516101e0820152600360005543600155604051926020840152614169602082015160408501906108e4565b61417b604082015160e08501906108b7565b6060810151610140840152608081015161016084015260a081015161018084015260c08101516101a084015260e081015115156101c084015261010081015115156101e08401526141d661012082015161020085019061086f565b6141ea610140820151610240850190614626565b6141fe6101608201516102e0850190614626565b6101808101516103808401526101a081015160006103a085015b600a8210614383575050506101c081015160006108a085015b600a821061436d575050506101e0015160006109e084015b6005821061434f57505050610ba0825261426282610a09565b81516001600160401b03811161096a5761427d600254610915565b601f8111614312575b50602092601f82116001146142c657928192936000926142bb575b50508160011b916000199060031b1c191617600255613dae565b0151905038806142a1565b601f19821693600260005260206000209160005b8681106142fa5750836001959610613df657505050811b01600255613dae565b919260206001819286850151815501940192016142da565b600260005261434990600080516020614668833981519152601f840160051c81019160208510611da157601f0160051c0190614650565b38614286565b602060608261436160019487516111d6565b01930191019091614249565b6020806001928551815201930191019091614231565b6020608082614395600194875161088a565b01930191019091614218565b806143b46143e8926107e088015161108a565b511580156108408801526143ed576143d06108208701516145c0565b6108608701525b610860860151610820870152611065565b613961565b6108208601516108608701526143d7565b6000906145d5565b60405163100960cb60e01b8152602d6004820152602490fd5b6144939060018060a01b038061443983602088015161108a565b51166107a088015260016107c0880151528160406107c08901510152610780870151516144658161084f565b61446e8161084f565b6144a3576107a08701511633145b15614498576107c08601515b610780870152611065565b6138e7565b610780860151614488565b50600061447c565b60405163100960cb60e01b8152602c6004820152602490fd5b60405163100960cb60e01b8152602b6004820152602490fd5b6145519060018060a01b03806144f783602088015161108a565b51166107208801526001610740880151528160406107408901510152610700870151516145238161084f565b61452c8161084f565b614561576107208701511633145b15614556576107408601515b610700870152611065565b6138a3565b610700860151614546565b50600061453a565b60405163100960cb60e01b815260166004820152602490fd5b90506001541438611665565b60405163100960cb60e01b815260156004820152602490fd5b60405163100960cb60e01b815260146004820152602490fd5b906001820191828111611074578210610ce357565b91906040516145e3816109d2565b60a0368237809360005b600581106146065750506001916146039161108a565b52565b80614614614621928461108a565b51151561366d828661108a565b6145ed565b6000915b6005831061463757505050565b600190825115158152602080910192019201919061462a565b81811061465b575050565b6000815560010161465056fe405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acec3d6b5cd189c204b08dae639bc4a3071503a84ef5b28c1bc84fda381441a6ec2a164736f6c6343000810000a`,
  BytecodeLen: 21790,
  version: 9,
  views: {
    }
  };
export const _stateSourceMap = {
  2: {
    at: './claim.rsh:175:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './claim.rsh:85:19:after expr stmt semicolon',
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
  "Oracle_addParticipant": Oracle_addParticipant,
  "Oracle_announceVerification": Oracle_announceVerification,
  "Oracle_announceWinner": Oracle_announceWinner,
  "Oracle_correctContract": Oracle_correctContract
  };
export const _APIs = {
  Oracle: {
    addParticipant: Oracle_addParticipant,
    announceVerification: Oracle_announceVerification,
    announceWinner: Oracle_announceWinner,
    correctContract: Oracle_correctContract
    }
  };
