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
  const ctc1 = stdlib.T_Array(ctc0, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'));
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
  const ctc9 = stdlib.T_Array(ctc6, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'));
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
  const ctc14 = stdlib.T_Array(ctc13, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'));
  
  const _addressSkeptic = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v2630, v2631, v2632, v2633, v2634, v2635, v2636, v2637, v2644, v2676, v2719, v2721, v2722, v2723, v2724, v2725] = svs;
      return (await ((async () => {
        
        
        return v2632;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _addressesOracles = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v2630, v2631, v2632, v2633, v2634, v2635, v2636, v2637, v2644, v2676, v2719, v2721, v2722, v2723, v2724, v2725] = svs;
      return (await ((async () => {
        
        
        return v2631;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _author = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v2630, v2631, v2632, v2633, v2634, v2635, v2636, v2637, v2644, v2676, v2719, v2721, v2722, v2723, v2724, v2725] = svs;
      return (await ((async () => {
        
        
        return v2630;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _deadline = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v2630, v2631, v2632, v2633, v2634, v2635, v2636, v2637, v2644, v2676, v2719, v2721, v2722, v2723, v2724, v2725] = svs;
      return (await ((async () => {
        
        
        return v2636;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _interaction = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v2630, v2631, v2632, v2633, v2634, v2635, v2636, v2637, v2644, v2676, v2719, v2721, v2722, v2723, v2724, v2725] = svs;
      return (await ((async () => {
        
        
        return v2633;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _isBottom = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v2630, v2631, v2632, v2633, v2634, v2635, v2636, v2637, v2644, v2676, v2719, v2721, v2722, v2723, v2724, v2725] = svs;
      return (await ((async () => {
        
        
        return v2637;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _isCorrect = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v2630, v2631, v2632, v2633, v2634, v2635, v2636, v2637, v2644, v2676, v2719, v2721, v2722, v2723, v2724, v2725] = svs;
      return (await ((async () => {
        
        
        return v2721;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _participants = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v2630, v2631, v2632, v2633, v2634, v2635, v2636, v2637, v2644, v2676, v2719, v2721, v2722, v2723, v2724, v2725] = svs;
      return (await ((async () => {
        
        
        return v2723;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _wagerDown = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v2630, v2631, v2632, v2633, v2634, v2635, v2636, v2637, v2644, v2676, v2719, v2721, v2722, v2723, v2724, v2725] = svs;
      return (await ((async () => {
        
        
        return v2635;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _wagerUp = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v2630, v2631, v2632, v2633, v2634, v2635, v2636, v2637, v2644, v2676, v2719, v2721, v2722, v2723, v2724, v2725] = svs;
      return (await ((async () => {
        
        
        return v2634;}))(...args));
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
      isCorrect: {
        decode: _isCorrect,
        dom: [],
        rng: ctc9
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
  const ctc3 = stdlib.T_Array(ctc1, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'));
  const ctc4 = stdlib.T_UInt;
  const ctc5 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc6 = stdlib.T_Bool;
  const ctc7 = stdlib.T_Contract;
  const ctc8 = stdlib.T_Tuple([ctc1, ctc7]);
  const ctc9 = stdlib.T_Tuple([ctc6]);
  const ctc10 = stdlib.T_Tuple([ctc4]);
  const ctc11 = stdlib.T_Tuple([]);
  const ctc12 = stdlib.T_Data({
    Oracle_addParticipant0_746: ctc8,
    Oracle_announceVerification0_746: ctc9,
    Oracle_announceWinner0_746: ctc10,
    Oracle_correctContract0_746: ctc11
    });
  const ctc13 = stdlib.T_Data({
    None: ctc0,
    Some: ctc8
    });
  const ctc14 = stdlib.T_Data({
    None: ctc0,
    Some: ctc6
    });
  
  
  const v2612 = stdlib.protect(ctc2, interact.addressSkeptic, 'for Alice\'s interact field addressSkeptic');
  const v2615 = stdlib.protect(ctc3, interact.addressesOracles, 'for Alice\'s interact field addressesOracles');
  const v2619 = stdlib.protect(ctc4, interact.deadline, 'for Alice\'s interact field deadline');
  const v2620 = stdlib.protect(ctc5, interact.interaction, 'for Alice\'s interact field interaction');
  const v2621 = stdlib.protect(ctc6, interact.isBottom, 'for Alice\'s interact field isBottom');
  const v2622 = stdlib.protect(ctc4, interact.wagerDown, 'for Alice\'s interact field wagerDown');
  const v2623 = stdlib.protect(ctc4, interact.wagerUp, 'for Alice\'s interact field wagerUp');
  
  const v2626 = stdlib.eq(v2622, stdlib.checkedBigNumberify('./claim.rsh:58:43:decimal', stdlib.UInt_max, '0'));
  const v2628 = v2621 ? v2626 : true;
  stdlib.assert(v2628, {
    at: './claim.rsh:58:11:application',
    fs: ['at ./claim.rsh:50:9:application call to [unknown function] (defined at: ./claim.rsh:50:13:function exp)'],
    msg: null,
    who: 'Alice'
    });
  
  const v2629 = stdlib.safeAdd(v2623, v2622);
  
  const txn1 = await (ctc.sendrecv({
    args: [v2615, v2612, v2620, v2623, v2622, v2619, v2621],
    evt_cnt: 7,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./claim.rsh:61:5:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc3, ctc2, ctc5, ctc4, ctc4, ctc4, ctc6],
    pay: [v2629, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v2631, v2632, v2633, v2634, v2635, v2636, v2637], secs: v2639, time: v2638, didSend: v56, from: v2630 } = txn1;
      
      const v2640 = stdlib.safeAdd(v2634, v2635);
      sim_r.txns.push({
        amt: v2640,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v2644 = v2637 ? false : true;
      const v2652 = [false, false, false];
      const v2654 = ['None', null];
      const v2675 = await ctc.getContractInfo();
      const v2676 = [v2630, v2675];
      const v2677 = ['Some', v2676];
      const v2687 = [v2677, v2654, v2654, v2654, v2654, v2654, v2654, v2654, v2654, v2654];
      const v2689 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
      const v2693 = ['None', null];
      const v2699 = [v2693, v2693, v2693];
      const v2719 = v2652;
      const v2720 = false;
      const v2721 = v2652;
      const v2722 = stdlib.checkedBigNumberify('./claim.rsh:88:23:decimal', stdlib.UInt_max, '1');
      const v2723 = v2687;
      const v2724 = v2689;
      const v2725 = v2699;
      const v2726 = v2638;
      
      if (await (async () => {
        const v3169 = v2720 ? false : true;
        
        return v3169;})()) {
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
  const {data: [v2631, v2632, v2633, v2634, v2635, v2636, v2637], secs: v2639, time: v2638, didSend: v56, from: v2630 } = txn1;
  const v2640 = stdlib.safeAdd(v2634, v2635);
  ;
  const v2643 = stdlib.eq(v2635, stdlib.checkedBigNumberify('./claim.rsh:63:42:decimal', stdlib.UInt_max, '0'));
  const v2644 = v2637 ? false : true;
  const v2645 = v2637 ? v2643 : true;
  stdlib.assert(v2645, {
    at: './claim.rsh:63:10:application',
    fs: [],
    msg: null,
    who: 'Alice'
    });
  const v2652 = [false, false, false];
  const v2654 = ['None', null];
  const v2675 = await ctc.getContractInfo();
  const v2676 = [v2630, v2675];
  const v2677 = ['Some', v2676];
  const v2687 = [v2677, v2654, v2654, v2654, v2654, v2654, v2654, v2654, v2654, v2654];
  const v2689 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
  const v2693 = ['None', null];
  const v2699 = [v2693, v2693, v2693];
  let v2719 = v2652;
  let v2720 = false;
  let v2721 = v2652;
  let v2722 = stdlib.checkedBigNumberify('./claim.rsh:88:23:decimal', stdlib.UInt_max, '1');
  let v2723 = v2687;
  let v2724 = v2689;
  let v2725 = v2699;
  let v2726 = v2638;
  
  let txn2 = txn1;
  while (await (async () => {
    const v3169 = v2720 ? false : true;
    
    return v3169;})()) {
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 2,
      out_tys: [ctc12],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v3462], secs: v3464, time: v3463, didSend: v2111, from: v3461 } = txn3;
    switch (v3462[0]) {
      case 'Oracle_addParticipant0_746': {
        const v3465 = v3462[1];
        undefined /* setApiDetails */;
        const v3470 = v3465[stdlib.checkedBigNumberify('./claim.rsh:122:10:spread', stdlib.UInt_max, '0')];
        const v3471 = v3465[stdlib.checkedBigNumberify('./claim.rsh:122:10:spread', stdlib.UInt_max, '1')];
        const v3472 = ['None', null];
        const v3473 = await stdlib.Array_asyncReduce([v2631], v3472, async([v3475], v3474, v3476) => {
          const v3477 = {
            None: 0,
            Some: 1
            }[v3474[0]];
          const v3478 = stdlib.eq(v3477, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
          const v3479 = stdlib.addressEq(v3475, v3461);
          const v3480 = v3478 ? v3479 : false;
          const v3481 = ['Some', v3476];
          const v3482 = v3480 ? v3481 : v3474;
          
          return v3482;})
        const v3483 = {
          None: 0,
          Some: 1
          }[v3473[0]];
        const v3484 = stdlib.eq(v3483, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        stdlib.assert(v3484, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./claim.rsh:124:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./claim.rsh:122:54:application call to [unknown function] (defined at: ./claim.rsh:122:54:function exp)', 'at ./claim.rsh:86:19:application call to [unknown function] (defined at: ./claim.rsh:122:54:function exp)', 'at ./claim.rsh:86:19:application call to [unknown function] (defined at: ./claim.rsh:86:19:function exp)'],
          msg: 'You are not an oracle',
          who: 'Alice'
          });
        const v3486 = stdlib.lt(v2722, stdlib.checkedBigNumberify('./claim.rsh:3:25:decimal', stdlib.UInt_max, '10'));
        stdlib.assert(v3486, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./claim.rsh:125:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./claim.rsh:122:54:application call to [unknown function] (defined at: ./claim.rsh:122:54:function exp)', 'at ./claim.rsh:86:19:application call to [unknown function] (defined at: ./claim.rsh:122:54:function exp)', 'at ./claim.rsh:86:19:application call to [unknown function] (defined at: ./claim.rsh:86:19:function exp)'],
          msg: 'Too many participants',
          who: 'Alice'
          });
        stdlib.assert(v2644, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./claim.rsh:126:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./claim.rsh:122:54:application call to [unknown function] (defined at: ./claim.rsh:122:54:function exp)', 'at ./claim.rsh:86:19:application call to [unknown function] (defined at: ./claim.rsh:122:54:function exp)', 'at ./claim.rsh:86:19:application call to [unknown function] (defined at: ./claim.rsh:86:19:function exp)'],
          msg: 'Cannot challenge a bottom claim',
          who: 'Alice'
          });
        const v3490 = await stdlib.Array_asyncReduce([v2723], false, async([v3492], v3491, v3493) => {
          const v3494 = [v3470, v3471];
          const v3495 = ['Some', v3494];
          const v3498 = stdlib.digest([ctc13], [v3495]);
          const v3499 = stdlib.digest([ctc13], [v3492]);
          const v3500 = stdlib.digestEq(v3498, v3499);
          const v3502 = v3491 ? v3491 : v3500;
          
          return v3502;})
        const v3503 = v3490 ? false : true;
        stdlib.assert(v3503, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./claim.rsh:128:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./claim.rsh:122:54:application call to [unknown function] (defined at: ./claim.rsh:122:54:function exp)', 'at ./claim.rsh:86:19:application call to [unknown function] (defined at: ./claim.rsh:122:54:function exp)', 'at ./claim.rsh:86:19:application call to [unknown function] (defined at: ./claim.rsh:86:19:function exp)'],
          msg: 'It is already a participant',
          who: 'Alice'
          });
        ;
        const v3572 = await stdlib.Array_asyncReduce([v2631], v3472, async([v3574], v3573, v3575) => {
          const v3576 = {
            None: 0,
            Some: 1
            }[v3573[0]];
          const v3577 = stdlib.eq(v3576, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
          const v3578 = stdlib.addressEq(v3574, v3461);
          const v3579 = v3577 ? v3578 : false;
          const v3580 = ['Some', v3575];
          const v3581 = v3579 ? v3580 : v3573;
          
          return v3581;})
        const v3582 = {
          None: 0,
          Some: 1
          }[v3572[0]];
        const v3583 = stdlib.eq(v3582, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        stdlib.assert(v3583, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./claim.rsh:124:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./claim.rsh:129:25:application call to [unknown function] (defined at: ./claim.rsh:129:25:function exp)'],
          msg: 'You are not an oracle',
          who: 'Alice'
          });
        const v3589 = await stdlib.Array_asyncReduce([v2723], false, async([v3591], v3590, v3592) => {
          const v3593 = [v3470, v3471];
          const v3594 = ['Some', v3593];
          const v3597 = stdlib.digest([ctc13], [v3594]);
          const v3598 = stdlib.digest([ctc13], [v3591]);
          const v3599 = stdlib.digestEq(v3597, v3598);
          const v3601 = v3590 ? v3590 : v3599;
          
          return v3601;})
        const v3602 = v3589 ? false : true;
        stdlib.assert(v3602, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./claim.rsh:128:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./claim.rsh:129:25:application call to [unknown function] (defined at: ./claim.rsh:129:25:function exp)'],
          msg: 'It is already a participant',
          who: 'Alice'
          });
        const v3606 = [v3470, v3471];
        const v3607 = ['Some', v3606];
        const v3609 = stdlib.Array_set(v2723, v2722, v3607);
        null;
        const v3610 = null;
        await txn3.getOutput('Oracle_addParticipant', 'v3610', ctc0, v3610);
        const v3618 = stdlib.safeAdd(v2722, stdlib.checkedBigNumberify('./claim.rsh:133:57:decimal', stdlib.UInt_max, '1'));
        const cv2719 = v2719;
        const cv2720 = false;
        const cv2721 = v2721;
        const cv2722 = v3618;
        const cv2723 = v3609;
        const cv2724 = v2724;
        const cv2725 = v2725;
        const cv2726 = v3463;
        
        v2719 = cv2719;
        v2720 = cv2720;
        v2721 = cv2721;
        v2722 = cv2722;
        v2723 = cv2723;
        v2724 = cv2724;
        v2725 = cv2725;
        v2726 = cv2726;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'Oracle_announceVerification0_746': {
        const v3790 = v3462[1];
        undefined /* setApiDetails */;
        const v3832 = ['None', null];
        const v3833 = await stdlib.Array_asyncReduce([v2631], v3832, async([v3835], v3834, v3836) => {
          const v3837 = {
            None: 0,
            Some: 1
            }[v3834[0]];
          const v3838 = stdlib.eq(v3837, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
          const v3839 = stdlib.addressEq(v3835, v3461);
          const v3840 = v3838 ? v3839 : false;
          const v3841 = ['Some', v3836];
          const v3842 = v3840 ? v3841 : v3834;
          
          return v3842;})
        const v3843 = {
          None: 0,
          Some: 1
          }[v3833[0]];
        const v3844 = stdlib.eq(v3843, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        stdlib.assert(v3844, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./claim.rsh:161:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./claim.rsh:159:51:application call to [unknown function] (defined at: ./claim.rsh:159:51:function exp)', 'at ./claim.rsh:86:19:application call to [unknown function] (defined at: ./claim.rsh:159:51:function exp)', 'at ./claim.rsh:86:19:application call to [unknown function] (defined at: ./claim.rsh:86:19:function exp)'],
          msg: 'You are not an oracle',
          who: 'Alice'
          });
        stdlib.assert(v2637, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./claim.rsh:162:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./claim.rsh:159:51:application call to [unknown function] (defined at: ./claim.rsh:159:51:function exp)', 'at ./claim.rsh:86:19:application call to [unknown function] (defined at: ./claim.rsh:159:51:function exp)', 'at ./claim.rsh:86:19:application call to [unknown function] (defined at: ./claim.rsh:86:19:function exp)'],
          msg: 'Can only announce formal verification if it is bottom',
          who: 'Alice'
          });
        const v3847 = stdlib.fromSome(v3833, stdlib.checkedBigNumberify('./claim.rsh:163:41:decimal', stdlib.UInt_max, '0'));
        const v3849 = v2725[v3847];
        const v3850 = {
          None: 0,
          Some: 1
          }[v3849[0]];
        const v3851 = stdlib.eq(v3850, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
        stdlib.assert(v3851, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./claim.rsh:164:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./claim.rsh:159:51:application call to [unknown function] (defined at: ./claim.rsh:159:51:function exp)', 'at ./claim.rsh:86:19:application call to [unknown function] (defined at: ./claim.rsh:159:51:function exp)', 'at ./claim.rsh:86:19:application call to [unknown function] (defined at: ./claim.rsh:86:19:function exp)'],
          msg: 'You already announced a verification',
          who: 'Alice'
          });
        ;
        const v3946 = v3790[stdlib.checkedBigNumberify('./claim.rsh:159:10:spread', stdlib.UInt_max, '0')];
        const v3948 = await stdlib.Array_asyncReduce([v2631], v3832, async([v3950], v3949, v3951) => {
          const v3952 = {
            None: 0,
            Some: 1
            }[v3949[0]];
          const v3953 = stdlib.eq(v3952, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
          const v3954 = stdlib.addressEq(v3950, v3461);
          const v3955 = v3953 ? v3954 : false;
          const v3956 = ['Some', v3951];
          const v3957 = v3955 ? v3956 : v3949;
          
          return v3957;})
        const v3958 = {
          None: 0,
          Some: 1
          }[v3948[0]];
        const v3959 = stdlib.eq(v3958, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        stdlib.assert(v3959, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./claim.rsh:161:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./claim.rsh:165:25:application call to [unknown function] (defined at: ./claim.rsh:165:25:function exp)'],
          msg: 'You are not an oracle',
          who: 'Alice'
          });
        const v3962 = stdlib.fromSome(v3948, stdlib.checkedBigNumberify('./claim.rsh:163:41:decimal', stdlib.UInt_max, '0'));
        const v3964 = v2725[v3962];
        const v3965 = {
          None: 0,
          Some: 1
          }[v3964[0]];
        const v3966 = stdlib.eq(v3965, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
        stdlib.assert(v3966, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./claim.rsh:164:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./claim.rsh:165:25:application call to [unknown function] (defined at: ./claim.rsh:165:25:function exp)'],
          msg: 'You already announced a verification',
          who: 'Alice'
          });
        const v3969 = ['Some', v3946];
        const v3971 = stdlib.Array_set(v2725, v3962, v3969);
        const v3972 = await stdlib.Array_asyncReduce([v3971], stdlib.checkedBigNumberify('reach standard library:170:22:decimal', stdlib.UInt_max, '0'), async([v3974], v3973, v3975) => {
          const v3977 = stdlib.digest([ctc14], [v3974]);
          const v3979 = stdlib.digest([ctc14], [v3969]);
          const v3980 = stdlib.digestEq(v3977, v3979);
          let v3981;
          if (v3980) {
            const v3982 = stdlib.safeAdd(v3973, stdlib.checkedBigNumberify('reach standard library:171:18:decimal', stdlib.UInt_max, '1'));
            v3981 = v3982;
            }
          else {
            v3981 = v3973;
            }
          
          return v3981;})
        const v3983 = stdlib.eq(v3972, stdlib.checkedBigNumberify('./claim.rsh:7:38:application', stdlib.UInt_max, '2'));
        if (v3983) {
          null;
          const v3984 = stdlib.fromSome(v2632, v2630);
          const v3985 = v3946 ? v2630 : v3984;
          ;
          const v3990 = null;
          await txn3.getOutput('Oracle_announceVerification', 'v3990', ctc0, v3990);
          const cv2719 = v2719;
          const cv2720 = true;
          const cv2721 = v2721;
          const cv2722 = v2722;
          const cv2723 = v2723;
          const cv2724 = v2724;
          const cv2725 = v3971;
          const cv2726 = v3463;
          
          v2719 = cv2719;
          v2720 = cv2720;
          v2721 = cv2721;
          v2722 = cv2722;
          v2723 = cv2723;
          v2724 = cv2724;
          v2725 = cv2725;
          v2726 = cv2726;
          
          txn2 = txn3;
          continue;}
        else {
          const v3998 = null;
          await txn3.getOutput('Oracle_announceVerification', 'v3998', ctc0, v3998);
          const cv2719 = v2719;
          const cv2720 = false;
          const cv2721 = v2721;
          const cv2722 = v2722;
          const cv2723 = v2723;
          const cv2724 = v2724;
          const cv2725 = v3971;
          const cv2726 = v3463;
          
          v2719 = cv2719;
          v2720 = cv2720;
          v2721 = cv2721;
          v2722 = cv2722;
          v2723 = cv2723;
          v2724 = cv2724;
          v2725 = cv2725;
          v2726 = cv2726;
          
          txn2 = txn3;
          continue;}
        break;
        }
      case 'Oracle_announceWinner0_746': {
        const v4115 = v3462[1];
        undefined /* setApiDetails */;
        const v4179 = v4115[stdlib.checkedBigNumberify('./claim.rsh:137:10:spread', stdlib.UInt_max, '0')];
        const v4180 = ['None', null];
        const v4181 = await stdlib.Array_asyncReduce([v2631], v4180, async([v4183], v4182, v4184) => {
          const v4185 = {
            None: 0,
            Some: 1
            }[v4182[0]];
          const v4186 = stdlib.eq(v4185, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
          const v4187 = stdlib.addressEq(v4183, v3461);
          const v4188 = v4186 ? v4187 : false;
          const v4189 = ['Some', v4184];
          const v4190 = v4188 ? v4189 : v4182;
          
          return v4190;})
        const v4191 = {
          None: 0,
          Some: 1
          }[v4181[0]];
        const v4192 = stdlib.eq(v4191, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        stdlib.assert(v4192, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./claim.rsh:139:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./claim.rsh:137:48:application call to [unknown function] (defined at: ./claim.rsh:137:48:function exp)', 'at ./claim.rsh:86:19:application call to [unknown function] (defined at: ./claim.rsh:137:48:function exp)', 'at ./claim.rsh:86:19:application call to [unknown function] (defined at: ./claim.rsh:86:19:function exp)'],
          msg: 'You are not an oracle',
          who: 'Alice'
          });
        const v4194 = stdlib.fromSome(v4181, stdlib.checkedBigNumberify('./claim.rsh:140:49:decimal', stdlib.UInt_max, '0'));
        const v4196 = v2719[v4194];
        const v4197 = v4196 ? false : true;
        stdlib.assert(v4197, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./claim.rsh:140:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./claim.rsh:137:48:application call to [unknown function] (defined at: ./claim.rsh:137:48:function exp)', 'at ./claim.rsh:86:19:application call to [unknown function] (defined at: ./claim.rsh:137:48:function exp)', 'at ./claim.rsh:86:19:application call to [unknown function] (defined at: ./claim.rsh:86:19:function exp)'],
          msg: 'You already declared a winner',
          who: 'Alice'
          });
        const v4199 = stdlib.lt(v4179, v2722);
        stdlib.assert(v4199, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./claim.rsh:141:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./claim.rsh:137:48:application call to [unknown function] (defined at: ./claim.rsh:137:48:function exp)', 'at ./claim.rsh:86:19:application call to [unknown function] (defined at: ./claim.rsh:137:48:function exp)', 'at ./claim.rsh:86:19:application call to [unknown function] (defined at: ./claim.rsh:86:19:function exp)'],
          msg: 'This participant does not exist.',
          who: 'Alice'
          });
        stdlib.assert(v2644, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./claim.rsh:142:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./claim.rsh:137:48:application call to [unknown function] (defined at: ./claim.rsh:137:48:function exp)', 'at ./claim.rsh:86:19:application call to [unknown function] (defined at: ./claim.rsh:137:48:function exp)', 'at ./claim.rsh:86:19:application call to [unknown function] (defined at: ./claim.rsh:86:19:function exp)'],
          msg: 'Can only announce verification.',
          who: 'Alice'
          });
        ;
        const v4334 = await stdlib.Array_asyncReduce([v2631], v4180, async([v4336], v4335, v4337) => {
          const v4338 = {
            None: 0,
            Some: 1
            }[v4335[0]];
          const v4339 = stdlib.eq(v4338, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
          const v4340 = stdlib.addressEq(v4336, v3461);
          const v4341 = v4339 ? v4340 : false;
          const v4342 = ['Some', v4337];
          const v4343 = v4341 ? v4342 : v4335;
          
          return v4343;})
        const v4344 = {
          None: 0,
          Some: 1
          }[v4334[0]];
        const v4345 = stdlib.eq(v4344, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        stdlib.assert(v4345, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./claim.rsh:139:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./claim.rsh:143:25:application call to [unknown function] (defined at: ./claim.rsh:143:25:function exp)'],
          msg: 'You are not an oracle',
          who: 'Alice'
          });
        const v4347 = stdlib.fromSome(v4334, stdlib.checkedBigNumberify('./claim.rsh:140:49:decimal', stdlib.UInt_max, '0'));
        const v4349 = v2719[v4347];
        const v4350 = v4349 ? false : true;
        stdlib.assert(v4350, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./claim.rsh:140:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./claim.rsh:143:25:application call to [unknown function] (defined at: ./claim.rsh:143:25:function exp)'],
          msg: 'You already declared a winner',
          who: 'Alice'
          });
        const v4359 = stdlib.Array_set(v2719, v4347, true);
        const v4361 = v2724[v4179];
        const v4362 = stdlib.safeAdd(v4361, stdlib.checkedBigNumberify('./claim.rsh:145:48:decimal', stdlib.UInt_max, '1'));
        const v4364 = stdlib.Array_set(v2724, v4179, v4362);
        const v4365 = stdlib.eq(v4362, stdlib.checkedBigNumberify('./claim.rsh:7:38:application', stdlib.UInt_max, '2'));
        if (v4365) {
          const v4367 = v2723[v4179];
          const v4370 = stdlib.fromSome(v4367, v2676);
          const v4371 = v4370[stdlib.checkedBigNumberify('./claim.rsh:150:34:array ref', stdlib.UInt_max, '0')];
          const v4372 = v4370[stdlib.checkedBigNumberify('./claim.rsh:150:45:array ref', stdlib.UInt_max, '1')];
          null;
          ;
          const v4378 = stdlib.eq(v4179, stdlib.checkedBigNumberify('./claim.rsh:152:47:decimal', stdlib.UInt_max, '0'));
          const v4379 = stdlib.fromSome(v2632, v2630);
          const v4380 = v4378 ? v2630 : v4379;
          ;
          const v4385 = null;
          await txn3.getOutput('Oracle_announceWinner', 'v4385', ctc0, v4385);
          const cv2719 = v4359;
          const cv2720 = true;
          const cv2721 = v2721;
          const cv2722 = v2722;
          const cv2723 = v2723;
          const cv2724 = v4364;
          const cv2725 = v2725;
          const cv2726 = v3463;
          
          v2719 = cv2719;
          v2720 = cv2720;
          v2721 = cv2721;
          v2722 = cv2722;
          v2723 = cv2723;
          v2724 = cv2724;
          v2725 = cv2725;
          v2726 = cv2726;
          
          txn2 = txn3;
          continue;}
        else {
          const v4393 = null;
          await txn3.getOutput('Oracle_announceWinner', 'v4393', ctc0, v4393);
          const cv2719 = v4359;
          const cv2720 = false;
          const cv2721 = v2721;
          const cv2722 = v2722;
          const cv2723 = v2723;
          const cv2724 = v4364;
          const cv2725 = v2725;
          const cv2726 = v3463;
          
          v2719 = cv2719;
          v2720 = cv2720;
          v2721 = cv2721;
          v2722 = cv2722;
          v2723 = cv2723;
          v2724 = cv2724;
          v2725 = cv2725;
          v2726 = cv2726;
          
          txn2 = txn3;
          continue;}
        break;
        }
      case 'Oracle_correctContract0_746': {
        const v4440 = v3462[1];
        undefined /* setApiDetails */;
        const v4529 = ['None', null];
        const v4530 = await stdlib.Array_asyncReduce([v2631], v4529, async([v4532], v4531, v4533) => {
          const v4534 = {
            None: 0,
            Some: 1
            }[v4531[0]];
          const v4535 = stdlib.eq(v4534, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
          const v4536 = stdlib.addressEq(v4532, v3461);
          const v4537 = v4535 ? v4536 : false;
          const v4538 = ['Some', v4533];
          const v4539 = v4537 ? v4538 : v4531;
          
          return v4539;})
        const v4540 = {
          None: 0,
          Some: 1
          }[v4530[0]];
        const v4541 = stdlib.eq(v4540, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        stdlib.assert(v4541, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./claim.rsh:111:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./claim.rsh:109:38:application call to [unknown function] (defined at: ./claim.rsh:109:38:function exp)', 'at ./claim.rsh:86:19:application call to [unknown function] (defined at: ./claim.rsh:109:38:function exp)', 'at ./claim.rsh:86:19:application call to [unknown function] (defined at: ./claim.rsh:86:19:function exp)'],
          msg: 'You are not an oracle',
          who: 'Alice'
          });
        ;
        const v4728 = await stdlib.Array_asyncReduce([v2631], v4529, async([v4730], v4729, v4731) => {
          const v4732 = {
            None: 0,
            Some: 1
            }[v4729[0]];
          const v4733 = stdlib.eq(v4732, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
          const v4734 = stdlib.addressEq(v4730, v3461);
          const v4735 = v4733 ? v4734 : false;
          const v4736 = ['Some', v4731];
          const v4737 = v4735 ? v4736 : v4729;
          
          return v4737;})
        const v4738 = {
          None: 0,
          Some: 1
          }[v4728[0]];
        const v4739 = stdlib.eq(v4738, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        stdlib.assert(v4739, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./claim.rsh:111:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./claim.rsh:112:25:application call to [unknown function] (defined at: ./claim.rsh:112:25:function exp)'],
          msg: 'You are not an oracle',
          who: 'Alice'
          });
        const v4741 = stdlib.fromSome(v4728, stdlib.checkedBigNumberify('./claim.rsh:113:60:decimal', stdlib.UInt_max, '0'));
        const v4743 = stdlib.Array_set(v2721, v4741, true);
        const v4744 = await stdlib.Array_asyncReduce([v4743], stdlib.checkedBigNumberify('reach standard library:170:22:decimal', stdlib.UInt_max, '0'), async([v4746], v4745, v4747) => {
          let v4748;
          if (v4746) {
            const v4749 = stdlib.safeAdd(v4745, stdlib.checkedBigNumberify('reach standard library:171:18:decimal', stdlib.UInt_max, '1'));
            v4748 = v4749;
            }
          else {
            v4748 = v4745;
            }
          
          return v4748;})
        const v4750 = stdlib.eq(v4744, stdlib.checkedBigNumberify('./claim.rsh:7:38:application', stdlib.UInt_max, '2'));
        if (v4750) {
          null;
          const v4751 = null;
          await txn3.getOutput('Oracle_correctContract', 'v4751', ctc0, v4751);
          const cv2719 = v2719;
          const cv2720 = false;
          const cv2721 = v4743;
          const cv2722 = v2722;
          const cv2723 = v2723;
          const cv2724 = v2724;
          const cv2725 = v2725;
          const cv2726 = v3463;
          
          v2719 = cv2719;
          v2720 = cv2720;
          v2721 = cv2721;
          v2722 = cv2722;
          v2723 = cv2723;
          v2724 = cv2724;
          v2725 = cv2725;
          v2726 = cv2726;
          
          txn2 = txn3;
          continue;}
        else {
          const v4758 = null;
          await txn3.getOutput('Oracle_correctContract', 'v4758', ctc0, v4758);
          const cv2719 = v2719;
          const cv2720 = false;
          const cv2721 = v4743;
          const cv2722 = v2722;
          const cv2723 = v2723;
          const cv2724 = v2724;
          const cv2725 = v2725;
          const cv2726 = v3463;
          
          v2719 = cv2719;
          v2720 = cv2720;
          v2721 = cv2721;
          v2722 = cv2722;
          v2723 = cv2723;
          v2724 = cv2724;
          v2725 = cv2725;
          v2726 = cv2726;
          
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
  const ctc1 = stdlib.T_Array(ctc0, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'));
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
  const ctc9 = stdlib.T_Array(ctc6, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'));
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
  const ctc14 = stdlib.T_Array(ctc13, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'));
  const ctc15 = stdlib.T_Tuple([ctc6]);
  const ctc16 = stdlib.T_Tuple([ctc5]);
  const ctc17 = stdlib.T_Tuple([]);
  const ctc18 = stdlib.T_Data({
    Oracle_addParticipant0_746: ctc8,
    Oracle_announceVerification0_746: ctc15,
    Oracle_announceWinner0_746: ctc16,
    Oracle_correctContract0_746: ctc17
    });
  
  
  const [v2630, v2631, v2632, v2633, v2634, v2635, v2636, v2637, v2644, v2676, v2719, v2721, v2722, v2723, v2724, v2725] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc0, ctc1, ctc3, ctc4, ctc5, ctc5, ctc5, ctc6, ctc6, ctc8, ctc9, ctc9, ctc5, ctc11, ctc12, ctc14]);
  const v3245 = ctc.selfAddress();
  const v3247 = stdlib.protect(ctc8, await interact.in(), {
    at: './claim.rsh:1:23:application',
    fs: ['at ./claim.rsh:122:54:application call to [unknown function] (defined at: ./claim.rsh:122:54:function exp)', 'at ./claim.rsh:86:19:application call to "runOracle_addParticipant0_746" (defined at: ./claim.rsh:122:10:function exp)', 'at ./claim.rsh:86:19:application call to [unknown function] (defined at: ./claim.rsh:86:19:function exp)'],
    msg: 'in',
    who: 'Oracle_addParticipant'
    });
  const v3248 = v3247[stdlib.checkedBigNumberify('./claim.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v3249 = v3247[stdlib.checkedBigNumberify('./claim.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v3252 = ['None', null];
  const v3253 = await stdlib.Array_asyncReduce([v2631], v3252, async([v3255], v3254, v3256) => {
    const v3257 = {
      None: 0,
      Some: 1
      }[v3254[0]];
    const v3258 = stdlib.eq(v3257, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
    const v3259 = stdlib.addressEq(v3255, v3245);
    const v3260 = v3258 ? v3259 : false;
    const v3261 = ['Some', v3256];
    const v3262 = v3260 ? v3261 : v3254;
    
    return v3262;})
  const v3263 = {
    None: 0,
    Some: 1
    }[v3253[0]];
  const v3264 = stdlib.eq(v3263, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v3264, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./claim.rsh:124:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./claim.rsh:122:54:application call to [unknown function] (defined at: ./claim.rsh:122:54:function exp)', 'at ./claim.rsh:86:19:application call to "runOracle_addParticipant0_746" (defined at: ./claim.rsh:122:10:function exp)', 'at ./claim.rsh:86:19:application call to [unknown function] (defined at: ./claim.rsh:86:19:function exp)'],
    msg: 'You are not an oracle',
    who: 'Oracle_addParticipant'
    });
  const v3266 = stdlib.lt(v2722, stdlib.checkedBigNumberify('./claim.rsh:3:25:decimal', stdlib.UInt_max, '10'));
  stdlib.assert(v3266, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./claim.rsh:125:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./claim.rsh:122:54:application call to [unknown function] (defined at: ./claim.rsh:122:54:function exp)', 'at ./claim.rsh:86:19:application call to "runOracle_addParticipant0_746" (defined at: ./claim.rsh:122:10:function exp)', 'at ./claim.rsh:86:19:application call to [unknown function] (defined at: ./claim.rsh:86:19:function exp)'],
    msg: 'Too many participants',
    who: 'Oracle_addParticipant'
    });
  stdlib.assert(v2644, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./claim.rsh:126:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./claim.rsh:122:54:application call to [unknown function] (defined at: ./claim.rsh:122:54:function exp)', 'at ./claim.rsh:86:19:application call to "runOracle_addParticipant0_746" (defined at: ./claim.rsh:122:10:function exp)', 'at ./claim.rsh:86:19:application call to [unknown function] (defined at: ./claim.rsh:86:19:function exp)'],
    msg: 'Cannot challenge a bottom claim',
    who: 'Oracle_addParticipant'
    });
  const v3270 = await stdlib.Array_asyncReduce([v2723], false, async([v3272], v3271, v3273) => {
    const v3274 = [v3248, v3249];
    const v3275 = ['Some', v3274];
    const v3278 = stdlib.digest([ctc10], [v3275]);
    const v3279 = stdlib.digest([ctc10], [v3272]);
    const v3280 = stdlib.digestEq(v3278, v3279);
    const v3282 = v3271 ? v3271 : v3280;
    
    return v3282;})
  const v3283 = v3270 ? false : true;
  stdlib.assert(v3283, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./claim.rsh:128:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./claim.rsh:122:54:application call to [unknown function] (defined at: ./claim.rsh:122:54:function exp)', 'at ./claim.rsh:86:19:application call to "runOracle_addParticipant0_746" (defined at: ./claim.rsh:122:10:function exp)', 'at ./claim.rsh:86:19:application call to [unknown function] (defined at: ./claim.rsh:86:19:function exp)'],
    msg: 'It is already a participant',
    who: 'Oracle_addParticipant'
    });
  const v3292 = ['Oracle_addParticipant0_746', v3247];
  
  const v3366 = await stdlib.Array_asyncReduce([v2631], v3252, async([v3368], v3367, v3369) => {
    const v3370 = {
      None: 0,
      Some: 1
      }[v3367[0]];
    const v3371 = stdlib.eq(v3370, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
    const v3372 = stdlib.addressEq(v3368, v3245);
    const v3373 = v3371 ? v3372 : false;
    const v3374 = ['Some', v3369];
    const v3375 = v3373 ? v3374 : v3367;
    
    return v3375;})
  const v3376 = {
    None: 0,
    Some: 1
    }[v3366[0]];
  const v3377 = stdlib.eq(v3376, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v3377, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./claim.rsh:124:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./claim.rsh:122:54:application call to [unknown function] (defined at: ./claim.rsh:122:54:function exp)', 'at ./claim.rsh:86:19:application call to [unknown function] (defined at: ./claim.rsh:122:54:function exp)', 'at ./claim.rsh:86:19:application call to [unknown function] (defined at: ./claim.rsh:86:19:function exp)'],
    msg: 'You are not an oracle',
    who: 'Oracle_addParticipant'
    });
  const v3383 = await stdlib.Array_asyncReduce([v2723], false, async([v3385], v3384, v3386) => {
    const v3387 = [v3248, v3249];
    const v3388 = ['Some', v3387];
    const v3391 = stdlib.digest([ctc10], [v3388]);
    const v3392 = stdlib.digest([ctc10], [v3385]);
    const v3393 = stdlib.digestEq(v3391, v3392);
    const v3395 = v3384 ? v3384 : v3393;
    
    return v3395;})
  const v3396 = v3383 ? false : true;
  stdlib.assert(v3396, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./claim.rsh:128:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./claim.rsh:122:54:application call to [unknown function] (defined at: ./claim.rsh:122:54:function exp)', 'at ./claim.rsh:86:19:application call to [unknown function] (defined at: ./claim.rsh:122:54:function exp)', 'at ./claim.rsh:86:19:application call to [unknown function] (defined at: ./claim.rsh:86:19:function exp)'],
    msg: 'It is already a participant',
    who: 'Oracle_addParticipant'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v2630, v2631, v2632, v2633, v2634, v2635, v2636, v2637, v2644, v2676, v2719, v2721, v2722, v2723, v2724, v2725, v3292],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc18],
    pay: [stdlib.checkedBigNumberify('./claim.rsh:129:16:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v3462], secs: v3464, time: v3463, didSend: v2111, from: v3461 } = txn1;
      
      switch (v3462[0]) {
        case 'Oracle_addParticipant0_746': {
          const v3465 = v3462[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Oracle_addParticipant"
            });
          const v3470 = v3465[stdlib.checkedBigNumberify('./claim.rsh:122:10:spread', stdlib.UInt_max, '0')];
          const v3471 = v3465[stdlib.checkedBigNumberify('./claim.rsh:122:10:spread', stdlib.UInt_max, '1')];
          ;
          const v3606 = [v3470, v3471];
          const v3607 = ['Some', v3606];
          const v3609 = stdlib.Array_set(v2723, v2722, v3607);
          null;
          const v3610 = null;
          const v3611 = await txn1.getOutput('Oracle_addParticipant', 'v3610', ctc2, v3610);
          
          const v3618 = stdlib.safeAdd(v2722, stdlib.checkedBigNumberify('./claim.rsh:133:57:decimal', stdlib.UInt_max, '1'));
          const v25477 = v2719;
          const v25479 = v2721;
          const v25480 = v3618;
          const v25481 = v3609;
          const v25482 = v2724;
          const v25483 = v2725;
          sim_r.isHalt = false;
          
          break;
          }
        case 'Oracle_announceVerification0_746': {
          const v3790 = v3462[1];
          
          break;
          }
        case 'Oracle_announceWinner0_746': {
          const v4115 = v3462[1];
          
          break;
          }
        case 'Oracle_correctContract0_746': {
          const v4440 = v3462[1];
          
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
  const {data: [v3462], secs: v3464, time: v3463, didSend: v2111, from: v3461 } = txn1;
  switch (v3462[0]) {
    case 'Oracle_addParticipant0_746': {
      const v3465 = v3462[1];
      undefined /* setApiDetails */;
      const v3470 = v3465[stdlib.checkedBigNumberify('./claim.rsh:122:10:spread', stdlib.UInt_max, '0')];
      const v3471 = v3465[stdlib.checkedBigNumberify('./claim.rsh:122:10:spread', stdlib.UInt_max, '1')];
      const v3472 = ['None', null];
      const v3473 = await stdlib.Array_asyncReduce([v2631], v3472, async([v3475], v3474, v3476) => {
        const v3477 = {
          None: 0,
          Some: 1
          }[v3474[0]];
        const v3478 = stdlib.eq(v3477, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
        const v3479 = stdlib.addressEq(v3475, v3461);
        const v3480 = v3478 ? v3479 : false;
        const v3481 = ['Some', v3476];
        const v3482 = v3480 ? v3481 : v3474;
        
        return v3482;})
      const v3483 = {
        None: 0,
        Some: 1
        }[v3473[0]];
      const v3484 = stdlib.eq(v3483, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      stdlib.assert(v3484, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./claim.rsh:124:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./claim.rsh:122:54:application call to [unknown function] (defined at: ./claim.rsh:122:54:function exp)', 'at ./claim.rsh:86:19:application call to [unknown function] (defined at: ./claim.rsh:122:54:function exp)', 'at ./claim.rsh:86:19:application call to [unknown function] (defined at: ./claim.rsh:86:19:function exp)'],
        msg: 'You are not an oracle',
        who: 'Oracle_addParticipant'
        });
      const v3486 = stdlib.lt(v2722, stdlib.checkedBigNumberify('./claim.rsh:3:25:decimal', stdlib.UInt_max, '10'));
      stdlib.assert(v3486, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./claim.rsh:125:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./claim.rsh:122:54:application call to [unknown function] (defined at: ./claim.rsh:122:54:function exp)', 'at ./claim.rsh:86:19:application call to [unknown function] (defined at: ./claim.rsh:122:54:function exp)', 'at ./claim.rsh:86:19:application call to [unknown function] (defined at: ./claim.rsh:86:19:function exp)'],
        msg: 'Too many participants',
        who: 'Oracle_addParticipant'
        });
      stdlib.assert(v2644, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./claim.rsh:126:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./claim.rsh:122:54:application call to [unknown function] (defined at: ./claim.rsh:122:54:function exp)', 'at ./claim.rsh:86:19:application call to [unknown function] (defined at: ./claim.rsh:122:54:function exp)', 'at ./claim.rsh:86:19:application call to [unknown function] (defined at: ./claim.rsh:86:19:function exp)'],
        msg: 'Cannot challenge a bottom claim',
        who: 'Oracle_addParticipant'
        });
      const v3490 = await stdlib.Array_asyncReduce([v2723], false, async([v3492], v3491, v3493) => {
        const v3494 = [v3470, v3471];
        const v3495 = ['Some', v3494];
        const v3498 = stdlib.digest([ctc10], [v3495]);
        const v3499 = stdlib.digest([ctc10], [v3492]);
        const v3500 = stdlib.digestEq(v3498, v3499);
        const v3502 = v3491 ? v3491 : v3500;
        
        return v3502;})
      const v3503 = v3490 ? false : true;
      stdlib.assert(v3503, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./claim.rsh:128:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./claim.rsh:122:54:application call to [unknown function] (defined at: ./claim.rsh:122:54:function exp)', 'at ./claim.rsh:86:19:application call to [unknown function] (defined at: ./claim.rsh:122:54:function exp)', 'at ./claim.rsh:86:19:application call to [unknown function] (defined at: ./claim.rsh:86:19:function exp)'],
        msg: 'It is already a participant',
        who: 'Oracle_addParticipant'
        });
      ;
      const v3572 = await stdlib.Array_asyncReduce([v2631], v3472, async([v3574], v3573, v3575) => {
        const v3576 = {
          None: 0,
          Some: 1
          }[v3573[0]];
        const v3577 = stdlib.eq(v3576, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
        const v3578 = stdlib.addressEq(v3574, v3461);
        const v3579 = v3577 ? v3578 : false;
        const v3580 = ['Some', v3575];
        const v3581 = v3579 ? v3580 : v3573;
        
        return v3581;})
      const v3582 = {
        None: 0,
        Some: 1
        }[v3572[0]];
      const v3583 = stdlib.eq(v3582, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      stdlib.assert(v3583, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./claim.rsh:124:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./claim.rsh:129:25:application call to [unknown function] (defined at: ./claim.rsh:129:25:function exp)'],
        msg: 'You are not an oracle',
        who: 'Oracle_addParticipant'
        });
      const v3589 = await stdlib.Array_asyncReduce([v2723], false, async([v3591], v3590, v3592) => {
        const v3593 = [v3470, v3471];
        const v3594 = ['Some', v3593];
        const v3597 = stdlib.digest([ctc10], [v3594]);
        const v3598 = stdlib.digest([ctc10], [v3591]);
        const v3599 = stdlib.digestEq(v3597, v3598);
        const v3601 = v3590 ? v3590 : v3599;
        
        return v3601;})
      const v3602 = v3589 ? false : true;
      stdlib.assert(v3602, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./claim.rsh:128:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./claim.rsh:129:25:application call to [unknown function] (defined at: ./claim.rsh:129:25:function exp)'],
        msg: 'It is already a participant',
        who: 'Oracle_addParticipant'
        });
      const v3606 = [v3470, v3471];
      const v3607 = ['Some', v3606];
      const v3609 = stdlib.Array_set(v2723, v2722, v3607);
      null;
      const v3610 = null;
      const v3611 = await txn1.getOutput('Oracle_addParticipant', 'v3610', ctc2, v3610);
      if (v2111) {
        stdlib.protect(ctc2, await interact.out(v3465, v3611), {
          at: './claim.rsh:122:11:application',
          fs: ['at ./claim.rsh:122:11:application call to [unknown function] (defined at: ./claim.rsh:122:11:function exp)', 'at ./claim.rsh:132:12:application call to "ret" (defined at: ./claim.rsh:129:25:function exp)', 'at ./claim.rsh:129:25:application call to [unknown function] (defined at: ./claim.rsh:129:25:function exp)'],
          msg: 'out',
          who: 'Oracle_addParticipant'
          });
        }
      else {
        }
      
      const v3618 = stdlib.safeAdd(v2722, stdlib.checkedBigNumberify('./claim.rsh:133:57:decimal', stdlib.UInt_max, '1'));
      const v25477 = v2719;
      const v25479 = v2721;
      const v25480 = v3618;
      const v25481 = v3609;
      const v25482 = v2724;
      const v25483 = v2725;
      return;
      
      break;
      }
    case 'Oracle_announceVerification0_746': {
      const v3790 = v3462[1];
      return;
      break;
      }
    case 'Oracle_announceWinner0_746': {
      const v4115 = v3462[1];
      return;
      break;
      }
    case 'Oracle_correctContract0_746': {
      const v4440 = v3462[1];
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
  const ctc1 = stdlib.T_Array(ctc0, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'));
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
  const ctc9 = stdlib.T_Array(ctc6, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'));
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
  const ctc14 = stdlib.T_Array(ctc13, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'));
  const ctc15 = stdlib.T_Tuple([ctc6]);
  const ctc16 = stdlib.T_Tuple([ctc5]);
  const ctc17 = stdlib.T_Tuple([]);
  const ctc18 = stdlib.T_Data({
    Oracle_addParticipant0_746: ctc8,
    Oracle_announceVerification0_746: ctc15,
    Oracle_announceWinner0_746: ctc16,
    Oracle_correctContract0_746: ctc17
    });
  
  
  const [v2630, v2631, v2632, v2633, v2634, v2635, v2636, v2637, v2644, v2676, v2719, v2721, v2722, v2723, v2724, v2725] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc0, ctc1, ctc3, ctc4, ctc5, ctc5, ctc5, ctc6, ctc6, ctc8, ctc9, ctc9, ctc5, ctc11, ctc12, ctc14]);
  const v3329 = ctc.selfAddress();
  const v3331 = stdlib.protect(ctc15, await interact.in(), {
    at: './claim.rsh:1:23:application',
    fs: ['at ./claim.rsh:159:51:application call to [unknown function] (defined at: ./claim.rsh:159:51:function exp)', 'at ./claim.rsh:86:19:application call to "runOracle_announceVerification0_746" (defined at: ./claim.rsh:159:10:function exp)', 'at ./claim.rsh:86:19:application call to [unknown function] (defined at: ./claim.rsh:86:19:function exp)'],
    msg: 'in',
    who: 'Oracle_announceVerification'
    });
  const v3334 = ['None', null];
  const v3335 = await stdlib.Array_asyncReduce([v2631], v3334, async([v3337], v3336, v3338) => {
    const v3339 = {
      None: 0,
      Some: 1
      }[v3336[0]];
    const v3340 = stdlib.eq(v3339, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
    const v3341 = stdlib.addressEq(v3337, v3329);
    const v3342 = v3340 ? v3341 : false;
    const v3343 = ['Some', v3338];
    const v3344 = v3342 ? v3343 : v3336;
    
    return v3344;})
  const v3345 = {
    None: 0,
    Some: 1
    }[v3335[0]];
  const v3346 = stdlib.eq(v3345, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v3346, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./claim.rsh:161:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./claim.rsh:159:51:application call to [unknown function] (defined at: ./claim.rsh:159:51:function exp)', 'at ./claim.rsh:86:19:application call to "runOracle_announceVerification0_746" (defined at: ./claim.rsh:159:10:function exp)', 'at ./claim.rsh:86:19:application call to [unknown function] (defined at: ./claim.rsh:86:19:function exp)'],
    msg: 'You are not an oracle',
    who: 'Oracle_announceVerification'
    });
  stdlib.assert(v2637, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./claim.rsh:162:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./claim.rsh:159:51:application call to [unknown function] (defined at: ./claim.rsh:159:51:function exp)', 'at ./claim.rsh:86:19:application call to "runOracle_announceVerification0_746" (defined at: ./claim.rsh:159:10:function exp)', 'at ./claim.rsh:86:19:application call to [unknown function] (defined at: ./claim.rsh:86:19:function exp)'],
    msg: 'Can only announce formal verification if it is bottom',
    who: 'Oracle_announceVerification'
    });
  const v3349 = stdlib.fromSome(v3335, stdlib.checkedBigNumberify('./claim.rsh:163:41:decimal', stdlib.UInt_max, '0'));
  const v3351 = v2725[v3349];
  const v3352 = {
    None: 0,
    Some: 1
    }[v3351[0]];
  const v3353 = stdlib.eq(v3352, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
  stdlib.assert(v3353, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./claim.rsh:164:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./claim.rsh:159:51:application call to [unknown function] (defined at: ./claim.rsh:159:51:function exp)', 'at ./claim.rsh:86:19:application call to "runOracle_announceVerification0_746" (defined at: ./claim.rsh:159:10:function exp)', 'at ./claim.rsh:86:19:application call to [unknown function] (defined at: ./claim.rsh:86:19:function exp)'],
    msg: 'You already announced a verification',
    who: 'Oracle_announceVerification'
    });
  const v3360 = ['Oracle_announceVerification0_746', v3331];
  
  const v3401 = await stdlib.Array_asyncReduce([v2631], v3334, async([v3403], v3402, v3404) => {
    const v3405 = {
      None: 0,
      Some: 1
      }[v3402[0]];
    const v3406 = stdlib.eq(v3405, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
    const v3407 = stdlib.addressEq(v3403, v3329);
    const v3408 = v3406 ? v3407 : false;
    const v3409 = ['Some', v3404];
    const v3410 = v3408 ? v3409 : v3402;
    
    return v3410;})
  const v3411 = {
    None: 0,
    Some: 1
    }[v3401[0]];
  const v3412 = stdlib.eq(v3411, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v3412, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./claim.rsh:161:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./claim.rsh:159:51:application call to [unknown function] (defined at: ./claim.rsh:159:51:function exp)', 'at ./claim.rsh:86:19:application call to [unknown function] (defined at: ./claim.rsh:159:51:function exp)', 'at ./claim.rsh:86:19:application call to [unknown function] (defined at: ./claim.rsh:86:19:function exp)'],
    msg: 'You are not an oracle',
    who: 'Oracle_announceVerification'
    });
  const v3415 = stdlib.fromSome(v3401, stdlib.checkedBigNumberify('./claim.rsh:163:41:decimal', stdlib.UInt_max, '0'));
  const v3417 = v2725[v3415];
  const v3418 = {
    None: 0,
    Some: 1
    }[v3417[0]];
  const v3419 = stdlib.eq(v3418, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
  stdlib.assert(v3419, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./claim.rsh:164:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./claim.rsh:159:51:application call to [unknown function] (defined at: ./claim.rsh:159:51:function exp)', 'at ./claim.rsh:86:19:application call to [unknown function] (defined at: ./claim.rsh:159:51:function exp)', 'at ./claim.rsh:86:19:application call to [unknown function] (defined at: ./claim.rsh:86:19:function exp)'],
    msg: 'You already announced a verification',
    who: 'Oracle_announceVerification'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v2630, v2631, v2632, v2633, v2634, v2635, v2636, v2637, v2644, v2676, v2719, v2721, v2722, v2723, v2724, v2725, v3360],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc18],
    pay: [stdlib.checkedBigNumberify('./claim.rsh:165:16:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v3462], secs: v3464, time: v3463, didSend: v2111, from: v3461 } = txn1;
      
      switch (v3462[0]) {
        case 'Oracle_addParticipant0_746': {
          const v3465 = v3462[1];
          
          break;
          }
        case 'Oracle_announceVerification0_746': {
          const v3790 = v3462[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Oracle_announceVerification"
            });
          const v3832 = ['None', null];
          ;
          const v3946 = v3790[stdlib.checkedBigNumberify('./claim.rsh:159:10:spread', stdlib.UInt_max, '0')];
          const v3948 = await stdlib.Array_asyncReduce([v2631], v3832, async([v3950], v3949, v3951) => {
            const v3952 = {
              None: 0,
              Some: 1
              }[v3949[0]];
            const v3953 = stdlib.eq(v3952, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
            const v3954 = stdlib.addressEq(v3950, v3461);
            const v3955 = v3953 ? v3954 : false;
            const v3956 = ['Some', v3951];
            const v3957 = v3955 ? v3956 : v3949;
            
            return v3957;})
          const v3962 = stdlib.fromSome(v3948, stdlib.checkedBigNumberify('./claim.rsh:163:41:decimal', stdlib.UInt_max, '0'));
          const v3969 = ['Some', v3946];
          const v3971 = stdlib.Array_set(v2725, v3962, v3969);
          const v3972 = await stdlib.Array_asyncReduce([v3971], stdlib.checkedBigNumberify('reach standard library:170:22:decimal', stdlib.UInt_max, '0'), async([v3974], v3973, v3975) => {
            const v3977 = stdlib.digest([ctc13], [v3974]);
            const v3979 = stdlib.digest([ctc13], [v3969]);
            const v3980 = stdlib.digestEq(v3977, v3979);
            let v3981;
            if (v3980) {
              const v3982 = stdlib.safeAdd(v3973, stdlib.checkedBigNumberify('reach standard library:171:18:decimal', stdlib.UInt_max, '1'));
              v3981 = v3982;
              }
            else {
              v3981 = v3973;
              }
            
            return v3981;})
          const v3983 = stdlib.eq(v3972, stdlib.checkedBigNumberify('./claim.rsh:7:38:application', stdlib.UInt_max, '2'));
          if (v3983) {
            null;
            const v3984 = stdlib.fromSome(v2632, v2630);
            const v3985 = v3946 ? v2630 : v3984;
            sim_r.txns.push({
              kind: 'from',
              to: v3985,
              tok: undefined /* Nothing */
              });
            const v3990 = null;
            const v3991 = await txn1.getOutput('Oracle_announceVerification', 'v3990', ctc2, v3990);
            
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          else {
            const v3998 = null;
            const v3999 = await txn1.getOutput('Oracle_announceVerification', 'v3998', ctc2, v3998);
            
            const v25558 = v2719;
            const v25560 = v2721;
            const v25561 = v2722;
            const v25562 = v2723;
            const v25563 = v2724;
            const v25564 = v3971;
            sim_r.isHalt = false;
            }
          break;
          }
        case 'Oracle_announceWinner0_746': {
          const v4115 = v3462[1];
          
          break;
          }
        case 'Oracle_correctContract0_746': {
          const v4440 = v3462[1];
          
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
  const {data: [v3462], secs: v3464, time: v3463, didSend: v2111, from: v3461 } = txn1;
  switch (v3462[0]) {
    case 'Oracle_addParticipant0_746': {
      const v3465 = v3462[1];
      return;
      break;
      }
    case 'Oracle_announceVerification0_746': {
      const v3790 = v3462[1];
      undefined /* setApiDetails */;
      const v3832 = ['None', null];
      const v3833 = await stdlib.Array_asyncReduce([v2631], v3832, async([v3835], v3834, v3836) => {
        const v3837 = {
          None: 0,
          Some: 1
          }[v3834[0]];
        const v3838 = stdlib.eq(v3837, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
        const v3839 = stdlib.addressEq(v3835, v3461);
        const v3840 = v3838 ? v3839 : false;
        const v3841 = ['Some', v3836];
        const v3842 = v3840 ? v3841 : v3834;
        
        return v3842;})
      const v3843 = {
        None: 0,
        Some: 1
        }[v3833[0]];
      const v3844 = stdlib.eq(v3843, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      stdlib.assert(v3844, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./claim.rsh:161:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./claim.rsh:159:51:application call to [unknown function] (defined at: ./claim.rsh:159:51:function exp)', 'at ./claim.rsh:86:19:application call to [unknown function] (defined at: ./claim.rsh:159:51:function exp)', 'at ./claim.rsh:86:19:application call to [unknown function] (defined at: ./claim.rsh:86:19:function exp)'],
        msg: 'You are not an oracle',
        who: 'Oracle_announceVerification'
        });
      stdlib.assert(v2637, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./claim.rsh:162:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./claim.rsh:159:51:application call to [unknown function] (defined at: ./claim.rsh:159:51:function exp)', 'at ./claim.rsh:86:19:application call to [unknown function] (defined at: ./claim.rsh:159:51:function exp)', 'at ./claim.rsh:86:19:application call to [unknown function] (defined at: ./claim.rsh:86:19:function exp)'],
        msg: 'Can only announce formal verification if it is bottom',
        who: 'Oracle_announceVerification'
        });
      const v3847 = stdlib.fromSome(v3833, stdlib.checkedBigNumberify('./claim.rsh:163:41:decimal', stdlib.UInt_max, '0'));
      const v3849 = v2725[v3847];
      const v3850 = {
        None: 0,
        Some: 1
        }[v3849[0]];
      const v3851 = stdlib.eq(v3850, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
      stdlib.assert(v3851, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./claim.rsh:164:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./claim.rsh:159:51:application call to [unknown function] (defined at: ./claim.rsh:159:51:function exp)', 'at ./claim.rsh:86:19:application call to [unknown function] (defined at: ./claim.rsh:159:51:function exp)', 'at ./claim.rsh:86:19:application call to [unknown function] (defined at: ./claim.rsh:86:19:function exp)'],
        msg: 'You already announced a verification',
        who: 'Oracle_announceVerification'
        });
      ;
      const v3946 = v3790[stdlib.checkedBigNumberify('./claim.rsh:159:10:spread', stdlib.UInt_max, '0')];
      const v3948 = await stdlib.Array_asyncReduce([v2631], v3832, async([v3950], v3949, v3951) => {
        const v3952 = {
          None: 0,
          Some: 1
          }[v3949[0]];
        const v3953 = stdlib.eq(v3952, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
        const v3954 = stdlib.addressEq(v3950, v3461);
        const v3955 = v3953 ? v3954 : false;
        const v3956 = ['Some', v3951];
        const v3957 = v3955 ? v3956 : v3949;
        
        return v3957;})
      const v3958 = {
        None: 0,
        Some: 1
        }[v3948[0]];
      const v3959 = stdlib.eq(v3958, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      stdlib.assert(v3959, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./claim.rsh:161:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./claim.rsh:165:25:application call to [unknown function] (defined at: ./claim.rsh:165:25:function exp)'],
        msg: 'You are not an oracle',
        who: 'Oracle_announceVerification'
        });
      const v3962 = stdlib.fromSome(v3948, stdlib.checkedBigNumberify('./claim.rsh:163:41:decimal', stdlib.UInt_max, '0'));
      const v3964 = v2725[v3962];
      const v3965 = {
        None: 0,
        Some: 1
        }[v3964[0]];
      const v3966 = stdlib.eq(v3965, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
      stdlib.assert(v3966, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./claim.rsh:164:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./claim.rsh:165:25:application call to [unknown function] (defined at: ./claim.rsh:165:25:function exp)'],
        msg: 'You already announced a verification',
        who: 'Oracle_announceVerification'
        });
      const v3969 = ['Some', v3946];
      const v3971 = stdlib.Array_set(v2725, v3962, v3969);
      const v3972 = await stdlib.Array_asyncReduce([v3971], stdlib.checkedBigNumberify('reach standard library:170:22:decimal', stdlib.UInt_max, '0'), async([v3974], v3973, v3975) => {
        const v3977 = stdlib.digest([ctc13], [v3974]);
        const v3979 = stdlib.digest([ctc13], [v3969]);
        const v3980 = stdlib.digestEq(v3977, v3979);
        let v3981;
        if (v3980) {
          const v3982 = stdlib.safeAdd(v3973, stdlib.checkedBigNumberify('reach standard library:171:18:decimal', stdlib.UInt_max, '1'));
          v3981 = v3982;
          }
        else {
          v3981 = v3973;
          }
        
        return v3981;})
      const v3983 = stdlib.eq(v3972, stdlib.checkedBigNumberify('./claim.rsh:7:38:application', stdlib.UInt_max, '2'));
      if (v3983) {
        null;
        const v3984 = stdlib.fromSome(v2632, v2630);
        const v3985 = v3946 ? v2630 : v3984;
        ;
        const v3990 = null;
        const v3991 = await txn1.getOutput('Oracle_announceVerification', 'v3990', ctc2, v3990);
        if (v2111) {
          stdlib.protect(ctc2, await interact.out(v3790, v3991), {
            at: './claim.rsh:159:11:application',
            fs: ['at ./claim.rsh:159:11:application call to [unknown function] (defined at: ./claim.rsh:159:11:function exp)', 'at ./claim.rsh:172:12:application call to "ret" (defined at: ./claim.rsh:165:25:function exp)', 'at ./claim.rsh:165:25:application call to [unknown function] (defined at: ./claim.rsh:165:25:function exp)'],
            msg: 'out',
            who: 'Oracle_announceVerification'
            });
          }
        else {
          }
        
        return;
        }
      else {
        const v3998 = null;
        const v3999 = await txn1.getOutput('Oracle_announceVerification', 'v3998', ctc2, v3998);
        if (v2111) {
          stdlib.protect(ctc2, await interact.out(v3790, v3999), {
            at: './claim.rsh:159:11:application',
            fs: ['at ./claim.rsh:159:11:application call to [unknown function] (defined at: ./claim.rsh:159:11:function exp)', 'at ./claim.rsh:172:12:application call to "ret" (defined at: ./claim.rsh:165:25:function exp)', 'at ./claim.rsh:165:25:application call to [unknown function] (defined at: ./claim.rsh:165:25:function exp)'],
            msg: 'out',
            who: 'Oracle_announceVerification'
            });
          }
        else {
          }
        
        const v25558 = v2719;
        const v25560 = v2721;
        const v25561 = v2722;
        const v25562 = v2723;
        const v25563 = v2724;
        const v25564 = v3971;
        return;
        }
      break;
      }
    case 'Oracle_announceWinner0_746': {
      const v4115 = v3462[1];
      return;
      break;
      }
    case 'Oracle_correctContract0_746': {
      const v4440 = v3462[1];
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
  const ctc1 = stdlib.T_Array(ctc0, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'));
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
  const ctc9 = stdlib.T_Array(ctc6, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'));
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
  const ctc14 = stdlib.T_Array(ctc13, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'));
  const ctc15 = stdlib.T_Tuple([ctc5]);
  const ctc16 = stdlib.T_Tuple([ctc6]);
  const ctc17 = stdlib.T_Tuple([]);
  const ctc18 = stdlib.T_Data({
    Oracle_addParticipant0_746: ctc8,
    Oracle_announceVerification0_746: ctc16,
    Oracle_announceWinner0_746: ctc15,
    Oracle_correctContract0_746: ctc17
    });
  
  
  const [v2630, v2631, v2632, v2633, v2634, v2635, v2636, v2637, v2644, v2676, v2719, v2721, v2722, v2723, v2724, v2725] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc0, ctc1, ctc3, ctc4, ctc5, ctc5, ctc5, ctc6, ctc6, ctc8, ctc9, ctc9, ctc5, ctc11, ctc12, ctc14]);
  const v3294 = ctc.selfAddress();
  const v3296 = stdlib.protect(ctc15, await interact.in(), {
    at: './claim.rsh:1:23:application',
    fs: ['at ./claim.rsh:137:48:application call to [unknown function] (defined at: ./claim.rsh:137:48:function exp)', 'at ./claim.rsh:86:19:application call to "runOracle_announceWinner0_746" (defined at: ./claim.rsh:137:10:function exp)', 'at ./claim.rsh:86:19:application call to [unknown function] (defined at: ./claim.rsh:86:19:function exp)'],
    msg: 'in',
    who: 'Oracle_announceWinner'
    });
  const v3297 = v3296[stdlib.checkedBigNumberify('./claim.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v3299 = ['None', null];
  const v3300 = await stdlib.Array_asyncReduce([v2631], v3299, async([v3302], v3301, v3303) => {
    const v3304 = {
      None: 0,
      Some: 1
      }[v3301[0]];
    const v3305 = stdlib.eq(v3304, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
    const v3306 = stdlib.addressEq(v3302, v3294);
    const v3307 = v3305 ? v3306 : false;
    const v3308 = ['Some', v3303];
    const v3309 = v3307 ? v3308 : v3301;
    
    return v3309;})
  const v3310 = {
    None: 0,
    Some: 1
    }[v3300[0]];
  const v3311 = stdlib.eq(v3310, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v3311, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./claim.rsh:139:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./claim.rsh:137:48:application call to [unknown function] (defined at: ./claim.rsh:137:48:function exp)', 'at ./claim.rsh:86:19:application call to "runOracle_announceWinner0_746" (defined at: ./claim.rsh:137:10:function exp)', 'at ./claim.rsh:86:19:application call to [unknown function] (defined at: ./claim.rsh:86:19:function exp)'],
    msg: 'You are not an oracle',
    who: 'Oracle_announceWinner'
    });
  const v3313 = stdlib.fromSome(v3300, stdlib.checkedBigNumberify('./claim.rsh:140:49:decimal', stdlib.UInt_max, '0'));
  const v3315 = v2719[v3313];
  const v3316 = v3315 ? false : true;
  stdlib.assert(v3316, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./claim.rsh:140:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./claim.rsh:137:48:application call to [unknown function] (defined at: ./claim.rsh:137:48:function exp)', 'at ./claim.rsh:86:19:application call to "runOracle_announceWinner0_746" (defined at: ./claim.rsh:137:10:function exp)', 'at ./claim.rsh:86:19:application call to [unknown function] (defined at: ./claim.rsh:86:19:function exp)'],
    msg: 'You already declared a winner',
    who: 'Oracle_announceWinner'
    });
  const v3318 = stdlib.lt(v3297, v2722);
  stdlib.assert(v3318, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./claim.rsh:141:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./claim.rsh:137:48:application call to [unknown function] (defined at: ./claim.rsh:137:48:function exp)', 'at ./claim.rsh:86:19:application call to "runOracle_announceWinner0_746" (defined at: ./claim.rsh:137:10:function exp)', 'at ./claim.rsh:86:19:application call to [unknown function] (defined at: ./claim.rsh:86:19:function exp)'],
    msg: 'This participant does not exist.',
    who: 'Oracle_announceWinner'
    });
  stdlib.assert(v2644, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./claim.rsh:142:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./claim.rsh:137:48:application call to [unknown function] (defined at: ./claim.rsh:137:48:function exp)', 'at ./claim.rsh:86:19:application call to "runOracle_announceWinner0_746" (defined at: ./claim.rsh:137:10:function exp)', 'at ./claim.rsh:86:19:application call to [unknown function] (defined at: ./claim.rsh:86:19:function exp)'],
    msg: 'Can only announce verification.',
    who: 'Oracle_announceWinner'
    });
  const v3327 = ['Oracle_announceWinner0_746', v3296];
  
  const v3424 = await stdlib.Array_asyncReduce([v2631], v3299, async([v3426], v3425, v3427) => {
    const v3428 = {
      None: 0,
      Some: 1
      }[v3425[0]];
    const v3429 = stdlib.eq(v3428, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
    const v3430 = stdlib.addressEq(v3426, v3294);
    const v3431 = v3429 ? v3430 : false;
    const v3432 = ['Some', v3427];
    const v3433 = v3431 ? v3432 : v3425;
    
    return v3433;})
  const v3434 = {
    None: 0,
    Some: 1
    }[v3424[0]];
  const v3435 = stdlib.eq(v3434, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v3435, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./claim.rsh:139:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./claim.rsh:137:48:application call to [unknown function] (defined at: ./claim.rsh:137:48:function exp)', 'at ./claim.rsh:86:19:application call to [unknown function] (defined at: ./claim.rsh:137:48:function exp)', 'at ./claim.rsh:86:19:application call to [unknown function] (defined at: ./claim.rsh:86:19:function exp)'],
    msg: 'You are not an oracle',
    who: 'Oracle_announceWinner'
    });
  const v3437 = stdlib.fromSome(v3424, stdlib.checkedBigNumberify('./claim.rsh:140:49:decimal', stdlib.UInt_max, '0'));
  const v3439 = v2719[v3437];
  const v3440 = v3439 ? false : true;
  stdlib.assert(v3440, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./claim.rsh:140:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./claim.rsh:137:48:application call to [unknown function] (defined at: ./claim.rsh:137:48:function exp)', 'at ./claim.rsh:86:19:application call to [unknown function] (defined at: ./claim.rsh:137:48:function exp)', 'at ./claim.rsh:86:19:application call to [unknown function] (defined at: ./claim.rsh:86:19:function exp)'],
    msg: 'You already declared a winner',
    who: 'Oracle_announceWinner'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v2630, v2631, v2632, v2633, v2634, v2635, v2636, v2637, v2644, v2676, v2719, v2721, v2722, v2723, v2724, v2725, v3327],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc18],
    pay: [stdlib.checkedBigNumberify('./claim.rsh:143:16:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v3462], secs: v3464, time: v3463, didSend: v2111, from: v3461 } = txn1;
      
      switch (v3462[0]) {
        case 'Oracle_addParticipant0_746': {
          const v3465 = v3462[1];
          
          break;
          }
        case 'Oracle_announceVerification0_746': {
          const v3790 = v3462[1];
          
          break;
          }
        case 'Oracle_announceWinner0_746': {
          const v4115 = v3462[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Oracle_announceWinner"
            });
          const v4179 = v4115[stdlib.checkedBigNumberify('./claim.rsh:137:10:spread', stdlib.UInt_max, '0')];
          const v4180 = ['None', null];
          ;
          const v4334 = await stdlib.Array_asyncReduce([v2631], v4180, async([v4336], v4335, v4337) => {
            const v4338 = {
              None: 0,
              Some: 1
              }[v4335[0]];
            const v4339 = stdlib.eq(v4338, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
            const v4340 = stdlib.addressEq(v4336, v3461);
            const v4341 = v4339 ? v4340 : false;
            const v4342 = ['Some', v4337];
            const v4343 = v4341 ? v4342 : v4335;
            
            return v4343;})
          const v4347 = stdlib.fromSome(v4334, stdlib.checkedBigNumberify('./claim.rsh:140:49:decimal', stdlib.UInt_max, '0'));
          const v4359 = stdlib.Array_set(v2719, v4347, true);
          const v4361 = v2724[v4179];
          const v4362 = stdlib.safeAdd(v4361, stdlib.checkedBigNumberify('./claim.rsh:145:48:decimal', stdlib.UInt_max, '1'));
          const v4364 = stdlib.Array_set(v2724, v4179, v4362);
          const v4365 = stdlib.eq(v4362, stdlib.checkedBigNumberify('./claim.rsh:7:38:application', stdlib.UInt_max, '2'));
          if (v4365) {
            const v4367 = v2723[v4179];
            const v4370 = stdlib.fromSome(v4367, v2676);
            const v4371 = v4370[stdlib.checkedBigNumberify('./claim.rsh:150:34:array ref', stdlib.UInt_max, '0')];
            const v4372 = v4370[stdlib.checkedBigNumberify('./claim.rsh:150:45:array ref', stdlib.UInt_max, '1')];
            null;
            sim_r.txns.push({
              kind: 'from',
              to: v4371,
              tok: undefined /* Nothing */
              });
            const v4378 = stdlib.eq(v4179, stdlib.checkedBigNumberify('./claim.rsh:152:47:decimal', stdlib.UInt_max, '0'));
            const v4379 = stdlib.fromSome(v2632, v2630);
            const v4380 = v4378 ? v2630 : v4379;
            sim_r.txns.push({
              kind: 'from',
              to: v4380,
              tok: undefined /* Nothing */
              });
            const v4385 = null;
            const v4386 = await txn1.getOutput('Oracle_announceWinner', 'v4385', ctc2, v4385);
            
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          else {
            const v4393 = null;
            const v4394 = await txn1.getOutput('Oracle_announceWinner', 'v4393', ctc2, v4393);
            
            const v25639 = v4359;
            const v25641 = v2721;
            const v25642 = v2722;
            const v25643 = v2723;
            const v25644 = v4364;
            const v25645 = v2725;
            sim_r.isHalt = false;
            }
          break;
          }
        case 'Oracle_correctContract0_746': {
          const v4440 = v3462[1];
          
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
  const {data: [v3462], secs: v3464, time: v3463, didSend: v2111, from: v3461 } = txn1;
  switch (v3462[0]) {
    case 'Oracle_addParticipant0_746': {
      const v3465 = v3462[1];
      return;
      break;
      }
    case 'Oracle_announceVerification0_746': {
      const v3790 = v3462[1];
      return;
      break;
      }
    case 'Oracle_announceWinner0_746': {
      const v4115 = v3462[1];
      undefined /* setApiDetails */;
      const v4179 = v4115[stdlib.checkedBigNumberify('./claim.rsh:137:10:spread', stdlib.UInt_max, '0')];
      const v4180 = ['None', null];
      const v4181 = await stdlib.Array_asyncReduce([v2631], v4180, async([v4183], v4182, v4184) => {
        const v4185 = {
          None: 0,
          Some: 1
          }[v4182[0]];
        const v4186 = stdlib.eq(v4185, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
        const v4187 = stdlib.addressEq(v4183, v3461);
        const v4188 = v4186 ? v4187 : false;
        const v4189 = ['Some', v4184];
        const v4190 = v4188 ? v4189 : v4182;
        
        return v4190;})
      const v4191 = {
        None: 0,
        Some: 1
        }[v4181[0]];
      const v4192 = stdlib.eq(v4191, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      stdlib.assert(v4192, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./claim.rsh:139:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./claim.rsh:137:48:application call to [unknown function] (defined at: ./claim.rsh:137:48:function exp)', 'at ./claim.rsh:86:19:application call to [unknown function] (defined at: ./claim.rsh:137:48:function exp)', 'at ./claim.rsh:86:19:application call to [unknown function] (defined at: ./claim.rsh:86:19:function exp)'],
        msg: 'You are not an oracle',
        who: 'Oracle_announceWinner'
        });
      const v4194 = stdlib.fromSome(v4181, stdlib.checkedBigNumberify('./claim.rsh:140:49:decimal', stdlib.UInt_max, '0'));
      const v4196 = v2719[v4194];
      const v4197 = v4196 ? false : true;
      stdlib.assert(v4197, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./claim.rsh:140:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./claim.rsh:137:48:application call to [unknown function] (defined at: ./claim.rsh:137:48:function exp)', 'at ./claim.rsh:86:19:application call to [unknown function] (defined at: ./claim.rsh:137:48:function exp)', 'at ./claim.rsh:86:19:application call to [unknown function] (defined at: ./claim.rsh:86:19:function exp)'],
        msg: 'You already declared a winner',
        who: 'Oracle_announceWinner'
        });
      const v4199 = stdlib.lt(v4179, v2722);
      stdlib.assert(v4199, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./claim.rsh:141:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./claim.rsh:137:48:application call to [unknown function] (defined at: ./claim.rsh:137:48:function exp)', 'at ./claim.rsh:86:19:application call to [unknown function] (defined at: ./claim.rsh:137:48:function exp)', 'at ./claim.rsh:86:19:application call to [unknown function] (defined at: ./claim.rsh:86:19:function exp)'],
        msg: 'This participant does not exist.',
        who: 'Oracle_announceWinner'
        });
      stdlib.assert(v2644, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./claim.rsh:142:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./claim.rsh:137:48:application call to [unknown function] (defined at: ./claim.rsh:137:48:function exp)', 'at ./claim.rsh:86:19:application call to [unknown function] (defined at: ./claim.rsh:137:48:function exp)', 'at ./claim.rsh:86:19:application call to [unknown function] (defined at: ./claim.rsh:86:19:function exp)'],
        msg: 'Can only announce verification.',
        who: 'Oracle_announceWinner'
        });
      ;
      const v4334 = await stdlib.Array_asyncReduce([v2631], v4180, async([v4336], v4335, v4337) => {
        const v4338 = {
          None: 0,
          Some: 1
          }[v4335[0]];
        const v4339 = stdlib.eq(v4338, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
        const v4340 = stdlib.addressEq(v4336, v3461);
        const v4341 = v4339 ? v4340 : false;
        const v4342 = ['Some', v4337];
        const v4343 = v4341 ? v4342 : v4335;
        
        return v4343;})
      const v4344 = {
        None: 0,
        Some: 1
        }[v4334[0]];
      const v4345 = stdlib.eq(v4344, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      stdlib.assert(v4345, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./claim.rsh:139:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./claim.rsh:143:25:application call to [unknown function] (defined at: ./claim.rsh:143:25:function exp)'],
        msg: 'You are not an oracle',
        who: 'Oracle_announceWinner'
        });
      const v4347 = stdlib.fromSome(v4334, stdlib.checkedBigNumberify('./claim.rsh:140:49:decimal', stdlib.UInt_max, '0'));
      const v4349 = v2719[v4347];
      const v4350 = v4349 ? false : true;
      stdlib.assert(v4350, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./claim.rsh:140:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./claim.rsh:143:25:application call to [unknown function] (defined at: ./claim.rsh:143:25:function exp)'],
        msg: 'You already declared a winner',
        who: 'Oracle_announceWinner'
        });
      const v4359 = stdlib.Array_set(v2719, v4347, true);
      const v4361 = v2724[v4179];
      const v4362 = stdlib.safeAdd(v4361, stdlib.checkedBigNumberify('./claim.rsh:145:48:decimal', stdlib.UInt_max, '1'));
      const v4364 = stdlib.Array_set(v2724, v4179, v4362);
      const v4365 = stdlib.eq(v4362, stdlib.checkedBigNumberify('./claim.rsh:7:38:application', stdlib.UInt_max, '2'));
      if (v4365) {
        const v4367 = v2723[v4179];
        const v4370 = stdlib.fromSome(v4367, v2676);
        const v4371 = v4370[stdlib.checkedBigNumberify('./claim.rsh:150:34:array ref', stdlib.UInt_max, '0')];
        const v4372 = v4370[stdlib.checkedBigNumberify('./claim.rsh:150:45:array ref', stdlib.UInt_max, '1')];
        null;
        ;
        const v4378 = stdlib.eq(v4179, stdlib.checkedBigNumberify('./claim.rsh:152:47:decimal', stdlib.UInt_max, '0'));
        const v4379 = stdlib.fromSome(v2632, v2630);
        const v4380 = v4378 ? v2630 : v4379;
        ;
        const v4385 = null;
        const v4386 = await txn1.getOutput('Oracle_announceWinner', 'v4385', ctc2, v4385);
        if (v2111) {
          stdlib.protect(ctc2, await interact.out(v4115, v4386), {
            at: './claim.rsh:137:11:application',
            fs: ['at ./claim.rsh:137:11:application call to [unknown function] (defined at: ./claim.rsh:137:11:function exp)', 'at ./claim.rsh:154:12:application call to "ret" (defined at: ./claim.rsh:143:25:function exp)', 'at ./claim.rsh:143:25:application call to [unknown function] (defined at: ./claim.rsh:143:25:function exp)'],
            msg: 'out',
            who: 'Oracle_announceWinner'
            });
          }
        else {
          }
        
        return;
        }
      else {
        const v4393 = null;
        const v4394 = await txn1.getOutput('Oracle_announceWinner', 'v4393', ctc2, v4393);
        if (v2111) {
          stdlib.protect(ctc2, await interact.out(v4115, v4394), {
            at: './claim.rsh:137:11:application',
            fs: ['at ./claim.rsh:137:11:application call to [unknown function] (defined at: ./claim.rsh:137:11:function exp)', 'at ./claim.rsh:154:12:application call to "ret" (defined at: ./claim.rsh:143:25:function exp)', 'at ./claim.rsh:143:25:application call to [unknown function] (defined at: ./claim.rsh:143:25:function exp)'],
            msg: 'out',
            who: 'Oracle_announceWinner'
            });
          }
        else {
          }
        
        const v25639 = v4359;
        const v25641 = v2721;
        const v25642 = v2722;
        const v25643 = v2723;
        const v25644 = v4364;
        const v25645 = v2725;
        return;
        }
      break;
      }
    case 'Oracle_correctContract0_746': {
      const v4440 = v3462[1];
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
  const ctc1 = stdlib.T_Array(ctc0, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'));
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
  const ctc9 = stdlib.T_Array(ctc6, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'));
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
  const ctc14 = stdlib.T_Array(ctc13, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'));
  const ctc15 = stdlib.T_Tuple([]);
  const ctc16 = stdlib.T_Tuple([ctc6]);
  const ctc17 = stdlib.T_Tuple([ctc5]);
  const ctc18 = stdlib.T_Data({
    Oracle_addParticipant0_746: ctc8,
    Oracle_announceVerification0_746: ctc16,
    Oracle_announceWinner0_746: ctc17,
    Oracle_correctContract0_746: ctc15
    });
  
  
  const [v2630, v2631, v2632, v2633, v2634, v2635, v2636, v2637, v2644, v2676, v2719, v2721, v2722, v2723, v2724, v2725] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc0, ctc1, ctc3, ctc4, ctc5, ctc5, ctc5, ctc6, ctc6, ctc8, ctc9, ctc9, ctc5, ctc11, ctc12, ctc14]);
  const v3223 = ctc.selfAddress();
  const v3225 = stdlib.protect(ctc15, await interact.in(), {
    at: './claim.rsh:1:23:application',
    fs: ['at ./claim.rsh:109:38:application call to [unknown function] (defined at: ./claim.rsh:109:38:function exp)', 'at ./claim.rsh:86:19:application call to "runOracle_correctContract0_746" (defined at: ./claim.rsh:109:10:function exp)', 'at ./claim.rsh:86:19:application call to [unknown function] (defined at: ./claim.rsh:86:19:function exp)'],
    msg: 'in',
    who: 'Oracle_correctContract'
    });
  const v3226 = ['None', null];
  const v3227 = await stdlib.Array_asyncReduce([v2631], v3226, async([v3229], v3228, v3230) => {
    const v3231 = {
      None: 0,
      Some: 1
      }[v3228[0]];
    const v3232 = stdlib.eq(v3231, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
    const v3233 = stdlib.addressEq(v3229, v3223);
    const v3234 = v3232 ? v3233 : false;
    const v3235 = ['Some', v3230];
    const v3236 = v3234 ? v3235 : v3228;
    
    return v3236;})
  const v3237 = {
    None: 0,
    Some: 1
    }[v3227[0]];
  const v3238 = stdlib.eq(v3237, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v3238, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./claim.rsh:111:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./claim.rsh:109:38:application call to [unknown function] (defined at: ./claim.rsh:109:38:function exp)', 'at ./claim.rsh:86:19:application call to "runOracle_correctContract0_746" (defined at: ./claim.rsh:109:10:function exp)', 'at ./claim.rsh:86:19:application call to [unknown function] (defined at: ./claim.rsh:86:19:function exp)'],
    msg: 'You are not an oracle',
    who: 'Oracle_correctContract'
    });
  const v3243 = ['Oracle_correctContract0_746', v3225];
  
  const v3448 = await stdlib.Array_asyncReduce([v2631], v3226, async([v3450], v3449, v3451) => {
    const v3452 = {
      None: 0,
      Some: 1
      }[v3449[0]];
    const v3453 = stdlib.eq(v3452, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
    const v3454 = stdlib.addressEq(v3450, v3223);
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
    fs: ['at ./claim.rsh:111:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./claim.rsh:109:38:application call to [unknown function] (defined at: ./claim.rsh:109:38:function exp)', 'at ./claim.rsh:86:19:application call to [unknown function] (defined at: ./claim.rsh:109:38:function exp)', 'at ./claim.rsh:86:19:application call to [unknown function] (defined at: ./claim.rsh:86:19:function exp)'],
    msg: 'You are not an oracle',
    who: 'Oracle_correctContract'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v2630, v2631, v2632, v2633, v2634, v2635, v2636, v2637, v2644, v2676, v2719, v2721, v2722, v2723, v2724, v2725, v3243],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc18],
    pay: [stdlib.checkedBigNumberify('./claim.rsh:112:16:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v3462], secs: v3464, time: v3463, didSend: v2111, from: v3461 } = txn1;
      
      switch (v3462[0]) {
        case 'Oracle_addParticipant0_746': {
          const v3465 = v3462[1];
          
          break;
          }
        case 'Oracle_announceVerification0_746': {
          const v3790 = v3462[1];
          
          break;
          }
        case 'Oracle_announceWinner0_746': {
          const v4115 = v3462[1];
          
          break;
          }
        case 'Oracle_correctContract0_746': {
          const v4440 = v3462[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Oracle_correctContract"
            });
          const v4529 = ['None', null];
          ;
          const v4728 = await stdlib.Array_asyncReduce([v2631], v4529, async([v4730], v4729, v4731) => {
            const v4732 = {
              None: 0,
              Some: 1
              }[v4729[0]];
            const v4733 = stdlib.eq(v4732, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
            const v4734 = stdlib.addressEq(v4730, v3461);
            const v4735 = v4733 ? v4734 : false;
            const v4736 = ['Some', v4731];
            const v4737 = v4735 ? v4736 : v4729;
            
            return v4737;})
          const v4741 = stdlib.fromSome(v4728, stdlib.checkedBigNumberify('./claim.rsh:113:60:decimal', stdlib.UInt_max, '0'));
          const v4743 = stdlib.Array_set(v2721, v4741, true);
          const v4744 = await stdlib.Array_asyncReduce([v4743], stdlib.checkedBigNumberify('reach standard library:170:22:decimal', stdlib.UInt_max, '0'), async([v4746], v4745, v4747) => {
            let v4748;
            if (v4746) {
              const v4749 = stdlib.safeAdd(v4745, stdlib.checkedBigNumberify('reach standard library:171:18:decimal', stdlib.UInt_max, '1'));
              v4748 = v4749;
              }
            else {
              v4748 = v4745;
              }
            
            return v4748;})
          const v4750 = stdlib.eq(v4744, stdlib.checkedBigNumberify('./claim.rsh:7:38:application', stdlib.UInt_max, '2'));
          if (v4750) {
            null;
            const v4751 = null;
            const v4752 = await txn1.getOutput('Oracle_correctContract', 'v4751', ctc2, v4751);
            
            const v25711 = v2719;
            const v25713 = v4743;
            const v25714 = v2722;
            const v25715 = v2723;
            const v25716 = v2724;
            const v25717 = v2725;
            sim_r.isHalt = false;
            }
          else {
            const v4758 = null;
            const v4759 = await txn1.getOutput('Oracle_correctContract', 'v4758', ctc2, v4758);
            
            const v25720 = v2719;
            const v25722 = v4743;
            const v25723 = v2722;
            const v25724 = v2723;
            const v25725 = v2724;
            const v25726 = v2725;
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
  const {data: [v3462], secs: v3464, time: v3463, didSend: v2111, from: v3461 } = txn1;
  switch (v3462[0]) {
    case 'Oracle_addParticipant0_746': {
      const v3465 = v3462[1];
      return;
      break;
      }
    case 'Oracle_announceVerification0_746': {
      const v3790 = v3462[1];
      return;
      break;
      }
    case 'Oracle_announceWinner0_746': {
      const v4115 = v3462[1];
      return;
      break;
      }
    case 'Oracle_correctContract0_746': {
      const v4440 = v3462[1];
      undefined /* setApiDetails */;
      const v4529 = ['None', null];
      const v4530 = await stdlib.Array_asyncReduce([v2631], v4529, async([v4532], v4531, v4533) => {
        const v4534 = {
          None: 0,
          Some: 1
          }[v4531[0]];
        const v4535 = stdlib.eq(v4534, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
        const v4536 = stdlib.addressEq(v4532, v3461);
        const v4537 = v4535 ? v4536 : false;
        const v4538 = ['Some', v4533];
        const v4539 = v4537 ? v4538 : v4531;
        
        return v4539;})
      const v4540 = {
        None: 0,
        Some: 1
        }[v4530[0]];
      const v4541 = stdlib.eq(v4540, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      stdlib.assert(v4541, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./claim.rsh:111:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./claim.rsh:109:38:application call to [unknown function] (defined at: ./claim.rsh:109:38:function exp)', 'at ./claim.rsh:86:19:application call to [unknown function] (defined at: ./claim.rsh:109:38:function exp)', 'at ./claim.rsh:86:19:application call to [unknown function] (defined at: ./claim.rsh:86:19:function exp)'],
        msg: 'You are not an oracle',
        who: 'Oracle_correctContract'
        });
      ;
      const v4728 = await stdlib.Array_asyncReduce([v2631], v4529, async([v4730], v4729, v4731) => {
        const v4732 = {
          None: 0,
          Some: 1
          }[v4729[0]];
        const v4733 = stdlib.eq(v4732, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
        const v4734 = stdlib.addressEq(v4730, v3461);
        const v4735 = v4733 ? v4734 : false;
        const v4736 = ['Some', v4731];
        const v4737 = v4735 ? v4736 : v4729;
        
        return v4737;})
      const v4738 = {
        None: 0,
        Some: 1
        }[v4728[0]];
      const v4739 = stdlib.eq(v4738, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      stdlib.assert(v4739, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./claim.rsh:111:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./claim.rsh:112:25:application call to [unknown function] (defined at: ./claim.rsh:112:25:function exp)'],
        msg: 'You are not an oracle',
        who: 'Oracle_correctContract'
        });
      const v4741 = stdlib.fromSome(v4728, stdlib.checkedBigNumberify('./claim.rsh:113:60:decimal', stdlib.UInt_max, '0'));
      const v4743 = stdlib.Array_set(v2721, v4741, true);
      const v4744 = await stdlib.Array_asyncReduce([v4743], stdlib.checkedBigNumberify('reach standard library:170:22:decimal', stdlib.UInt_max, '0'), async([v4746], v4745, v4747) => {
        let v4748;
        if (v4746) {
          const v4749 = stdlib.safeAdd(v4745, stdlib.checkedBigNumberify('reach standard library:171:18:decimal', stdlib.UInt_max, '1'));
          v4748 = v4749;
          }
        else {
          v4748 = v4745;
          }
        
        return v4748;})
      const v4750 = stdlib.eq(v4744, stdlib.checkedBigNumberify('./claim.rsh:7:38:application', stdlib.UInt_max, '2'));
      if (v4750) {
        null;
        const v4751 = null;
        const v4752 = await txn1.getOutput('Oracle_correctContract', 'v4751', ctc2, v4751);
        if (v2111) {
          stdlib.protect(ctc2, await interact.out(v4440, v4752), {
            at: './claim.rsh:109:11:application',
            fs: ['at ./claim.rsh:109:11:application call to [unknown function] (defined at: ./claim.rsh:109:11:function exp)', 'at ./claim.rsh:117:12:application call to "ret" (defined at: ./claim.rsh:112:25:function exp)', 'at ./claim.rsh:112:25:application call to [unknown function] (defined at: ./claim.rsh:112:25:function exp)'],
            msg: 'out',
            who: 'Oracle_correctContract'
            });
          }
        else {
          }
        
        const v25711 = v2719;
        const v25713 = v4743;
        const v25714 = v2722;
        const v25715 = v2723;
        const v25716 = v2724;
        const v25717 = v2725;
        return;
        }
      else {
        const v4758 = null;
        const v4759 = await txn1.getOutput('Oracle_correctContract', 'v4758', ctc2, v4758);
        if (v2111) {
          stdlib.protect(ctc2, await interact.out(v4440, v4759), {
            at: './claim.rsh:109:11:application',
            fs: ['at ./claim.rsh:109:11:application call to [unknown function] (defined at: ./claim.rsh:109:11:function exp)', 'at ./claim.rsh:117:12:application call to "ret" (defined at: ./claim.rsh:112:25:function exp)', 'at ./claim.rsh:112:25:application call to [unknown function] (defined at: ./claim.rsh:112:25:function exp)'],
            msg: 'out',
            who: 'Oracle_correctContract'
            });
          }
        else {
          }
        
        const v25720 = v2719;
        const v25722 = v4743;
        const v25723 = v2722;
        const v25724 = v2723;
        const v25725 = v2724;
        const v25726 = v2725;
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
    pure: [`addressSkeptic()(byte,byte[32])`, `addressesOracles()address[3]`, `author()address`, `deadline()uint64`, `interaction()byte[32]`, `isBottom()byte`, `isCorrect()byte[3]`, `participants()(byte,byte[40])[10]`, `wagerDown()uint64`, `wagerUp()uint64`],
    sigs: [`Oracle_addParticipant(address,uint64)byte[0]`, `Oracle_announceVerification(byte)byte[0]`, `Oracle_announceWinner(uint64)byte[0]`, `Oracle_correctContract()byte[0]`, `addressSkeptic()(byte,byte[32])`, `addressesOracles()address[3]`, `author()address`, `deadline()uint64`, `interaction()byte[32]`, `isBottom()byte`, `isCorrect()byte[3]`, `participants()(byte,byte[40])[10]`, `wagerDown()uint64`, `wagerUp()uint64`]
    },
  GlobalNumByteSlice: 8,
  GlobalNumUint: 0,
  LocalNumByteSlice: 0,
  LocalNumUint: 0,
  appApproval: `ByAdAAEDIAIpCAYJCn+2q8rMBp3c3bkL9tfZuQ2kjoiGDqnd4LoL6tXJogivm5r+Cd3Br5QC5/HbtwKB0KXRBe2Aj58C0+6RK6HAv1CRApoDhgJQBSYIAQEBAAECAQMBBAEFAQYAIjUAMRhBC3MnB2RJIls1AUkhBls1AoEQWzUINhoAF0lBAmMiNQQjNQZJIQsMQAEQSSEMDEAAkkkhDQxAAF1JIQ4MQAArIQ4SRDQBJBJEKWQoZFAqZFArZFAnBGRQJwVkUCcGZFBJNQNXACA1B0ILAyENEkQ0ASQSRClkKGRQKmRQK2RQJwRkUCcFZFAnBmRQSTUDVyBgNQdCCthJIQ8MQAAUIQ8SRDYaATX/KDT/UIEnr1BCAeghDBJEJwc1/ys0/1CBKK9QQgHVSSEQDEAARUkhEQxAACshERJENAEkEkQpZChkUCpkUCtkUCcEZFAnBWRQJwZkUEk1A1fZATUHQgpxIRASRDYaATX/KjT/UDIDUEIBiSELEkQ0ASQSRClkKGRQKmRQK2RQJwRkUCcFZFAnBmRQSTUDV6EgNQdCCjNJIRIMQACqSSETDEAARkkhFAxAABQhFBJENhoBNhoCUDX/KTT/UEIBNSETEkQ0ASQSRClkKGRQKmRQK2RQJwRkUCcFZFAnBmRQSTUDV9EINQdCCd9JIRUMQAArIRUSRDQBJBJEKWQoZFAqZFArZFAnBGRQJwVkUCcGZFBJNQNXyQg1B0IJrSESEkQ0ASQSRClkKGRQKmRQK2RQJwRkUCcFZFAnBmRQSTUDV8EINQdCCYJJIRYMQABgSSEXDEAALSEXEkQ0ASQSRClkKGRQKmRQK2RQJwRkUCcFZFAnBmRQSTUDIRghGVg1B0IJRyEWEkQ0ASQSRClkKGRQKmRQK2RQJwRkUCcFZFAnBmRQSTUDIRokWDUHQgkbgbCumAISRDQBJBJEKWQoZFAqZFArZFAnBGRQJwVkUCcGZFBJNQNXgCE1B0II7TYaAhc1BDYaAzYaARdJIQQMQAbPIQQSRCQ0ARJENARJIhJMNAISEUQpZChkUCpkUCtkUCcEZFAnBWRQJwZkUEk1A0lKSkpKSkpKVwAgNf9XIGA1/leAITX9V6EgNfyBwQFbNfuByQFbNfqB0QFbNflX2QEXNfhX2gEXNfdX2yg19oGDAiRYNfUhGiRYNfSBiQJbNfMhGCEZWDXygasFIRtYNfGB+wUhB1g18Ek1BTXvgAT8W2bHNO9QsDTvIlVJIQQMQALqSSQMQAE1JBJEIQivSTXsNesiNeo0/iU06gslWDXpNOsoNOoWUDTrIlUiEjTpMQASEE016zTqIwhJNeokDED/1DTrIlUjEkQ07DXqIjXpNP4lNOkLJVg16DTqKDTpFlA06iJVIhI06DEAEhBNNeo06SMISTXpJAxA/9Q06iJVIxJENPQiNOpJNegjWzToIlVNI1Y16SI16CI15zTpNOdVSTXmQQAJNOgjCDXlQgAENOg15TTlNeg05yMISTXnJAxA/9g06CEEEkEAPIAE8bejHLCACAAAAAAAABKPsCcHNQc0/zT+NP00/DT7NPo0+TT4NPc09jT1IjTpNPM08jTxNPAyBkIGEoAIAAAAAAAAEpawJwc1BzT/NP40/TT8NPs0+jT5NPg09zT2NPUiNOk08zTyNPE08DIGQgXdSDTvVwEINew07Bc16yEIr0k16jXpIjXoNP4lNOgLJVg15zTpKDToFlA06SJVIhI05zEAEhBNNek06CMISTXoJAxA/9Q06SJVIxJENPUiNOlJNegjWzToIlVNVRRENOs08wxENPdENOo16CI15zT+JTTnCyVYNeY06Cg05xZQNOgiVSISNOYxABIQTTXoNOcjCEk15yQMQP/UNOgiVSMSRCI06Ek15iNbNOYiVU015zT1NOdVFEQ09TTnI1Y15jTxIQY06wshBlgXIwg15TTxNOshBgs05RZdNeQ05SEEEkEAmDT2NPIhBTTrCyEFWEk14lcBKDTiIlVNSTXjVwAgNeKABDRpKDY04lA041cgCFCwsSKyATT6sggjshA04rIHs7EisgE0+7III7IQNP80/Uk14VcBIDThIlVNNP806yISTbIHs4AIAAAAAAAAESGwJwc1BzT/NP40/TT8NPs0+jT5NPg09zT2NOYjNPQ08zTyNOQ08DIGQgRjgAgAAAAAAAARKbAnBzUHNP80/jT9NPw0+zT6NPk0+DT3NPY05iI09DTzNPI05DTwMgZCBC5JIwxAAb1INO9XAQE17LEisgEhB7IQNAiyGLMhCK9JNes16iI16TT+JTTpCyVYNeg06ig06RZQNOoiVSISNOgxABIQTTXqNOkjCEk16SQMQP/UNOoiVSMSRDT4RDTwIQQiNOpJNekjWzTpIlVNCyEEWCJVIhJENOwXNek06zXoIjXnNP4lNOcLJVg15jToKDTnFlA06CJVIhI05jEAEhBNNeg05yMISTXnJAxA/9Q06CJVIxJEIjToSTXmI1s05iJVTTXnNPAhBDTnCyEEWCJVIhJEKDTpFlEHCFA15jTwNOchBAs05l015SI15CI14zTlIQQ04wshBFhJNeIBNOYBEkEACTTkIwg14UIABDTkNeE04TXkNOMjCEk14yQMQP/ONOQhBBJBAGWABGmBbck06RZRBwhQsLEisgE0+7III7IQNP80/Uk141cBIDTjIlVNNP806U2yB7OACAAAAAAAAA+WsCcHNQc0/zT+NP00/DT7NPo0+TT4NPc09jT1IzT0NPM08jTxNOUyBkICoIAIAAAAAAAAD56wJwc1BzT/NP40/TT8NPs0+jT5NPg09zT2NPUiNPQ08zTyNPE05TIGQgJrSDTvVwEoNewiNeuxIrIBIQeyEDQIshizNOsjCEk16yQMQP/nNOxXACA16zTsJVs16iEIr0k16TXoIjXnNP4lNOcLJVg15jToKDTnFlA06CJVIhI05jEAEhBNNeg05yMISTXnJAxA/9Q06CJVIxJENPMhCQxENPdEIjXnIjXmNPIhBTTmCyEFWDXlKDTrNOoWUFABNOUBEjTnSU015zTmIwhJNeYhCQxA/9Q05xRENOk15iI15TT+JTTlCyVYNeQ05ig05RZQNOYiVSISNOQxABIQTTXmNOUjCEk15SQMQP/UNOYiVSMSRCI15SI15DTyIQU05AshBVg14yg06zTqFlBQATTjARI05UlNNeU05CMISTXkIQkMQP/UNOUURIAEhhEZbDTrUDTqFlCwgAgAAAAAAAAOGrAnBzUHNP80/jT9NPw0+zT6NPk0+DT3NPY09SI09DTzIwg08jTzIQULKDTrNOoWUFBdNPE08DIGQgD6IhJEgcCaDIgCKbEisgEhB7IQIrIYgAYHMQAyCRKyHoABB7Ifs7Q9NQgiNAESRDQESSISTDQCEhFESTUFSUpKSVcAYDX/V2AhNf5XgSA1/YGhAVs1/IGpAVs1+4GxAVs1+le5ARc1+YAE6x6CWDT/UDT+UDT9UDT8FlA0+xZQNPoWUDT5FlEHCFCwNPw0+wiIAaE0+RQ0+yISEUQkrzX4IQWvNfcxADEYFlA19oACAAA19TEANP80/jT9NPw0+zT6NPlJFDT2NPgiNPgjKDT2UDT3UDT3UDT3UDT3UDT3UDT3UDT3UDT3UDT3UCEbrzT1SVA09VAyBkIAADX/Nf41/TX8Nfs1+jX5Nfg19zX2NfU19DXzNfI18TXwNe817jT5QQADQgCGNO4071A08FA08VA08hZQNPMWUDT0FlA09RZRBwhQNPYWUQcIUDT3UDT4UDT6UDT7FlA0/FA0/VA0/lApSwFXAH9nKEsBV39/ZypLAVf+f2crSwGB/QIhClhnJwRLAYH8AyEKWGcnBUsBgfsEIQpYZycGSwGB+gWBB1hnSCQ1ATIGNQJCAC0xGSEcEkSxIrIBIQeyEDQIshghHLIZs7EisgEisggjshAyCbIJMgqyB7NCAAUxGSISRCcHNAEWNAIWNAgWUFBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkRC/98iMTQSRCEGMTUSRCIxNhJEIjE3EkQiNQEiNQIiNQhC/6Y0AElKIwg1ADgHMgoSRDgQIxJEOAgSRIk=`,
  appClear: `Bw==`,
  companionInfo: {
    api_Oracle_addParticipant: 3,
    api_Oracle_announceVerification: 1
    },
  extraPages: 1,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 7,
  stateSize: 769,
  unsupported: [],
  version: 11,
  warnings: []
  };
const _ETH = {
  ABI: `[{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"address payable[3]","name":"elem1","type":"address[3]"},{"components":[{"internalType":"enum _enum_T0","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"internalType":"address payable","name":"_Some","type":"address"}],"internalType":"struct T0","name":"elem2","type":"tuple"},{"internalType":"bytes32","name":"elem3","type":"bytes32"},{"internalType":"uint256","name":"elem4","type":"uint256"},{"internalType":"uint256","name":"elem5","type":"uint256"},{"internalType":"uint256","name":"elem6","type":"uint256"},{"internalType":"bool","name":"elem7","type":"bool"}],"internalType":"struct T15","name":"v25770","type":"tuple"}],"stateMutability":"payable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"msg","type":"uint256"}],"name":"ReachError","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"address payable[3]","name":"elem1","type":"address[3]"},{"components":[{"internalType":"enum _enum_T0","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"internalType":"address payable","name":"_Some","type":"address"}],"internalType":"struct T0","name":"elem2","type":"tuple"},{"internalType":"bytes32","name":"elem3","type":"bytes32"},{"internalType":"uint256","name":"elem4","type":"uint256"},{"internalType":"uint256","name":"elem5","type":"uint256"},{"internalType":"uint256","name":"elem6","type":"uint256"},{"internalType":"bool","name":"elem7","type":"bool"}],"indexed":false,"internalType":"struct T15","name":"_a","type":"tuple"}],"name":"_reach_e0","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T9","name":"which","type":"uint8"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"},{"internalType":"address payable","name":"elem1","type":"address"}],"internalType":"struct T3","name":"_Oracle_addParticipant0_746","type":"tuple"},{"components":[{"internalType":"bool","name":"elem0","type":"bool"}],"internalType":"struct T7","name":"_Oracle_announceVerification0_746","type":"tuple"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T8","name":"_Oracle_announceWinner0_746","type":"tuple"},{"internalType":"bool","name":"_Oracle_correctContract0_746","type":"bool"}],"internalType":"struct T9","name":"elem1","type":"tuple"}],"indexed":false,"internalType":"struct T10","name":"_a","type":"tuple"}],"name":"_reach_e2","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v3610","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v3990","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v3998","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v4385","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v4393","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v4751","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v4758","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"announceVerification","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address payable","name":"v0","type":"address"},{"indexed":false,"internalType":"address payable","name":"v1","type":"address"}],"name":"announceWinner","type":"event"},{"anonymous":false,"inputs":[],"name":"correctContract","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address payable","name":"v0","type":"address"},{"indexed":false,"internalType":"address payable","name":"v1","type":"address"}],"name":"newParticipant","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[{"internalType":"address payable","name":"v25749","type":"address"},{"internalType":"address payable","name":"v25750","type":"address"}],"name":"Oracle_addParticipant","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"bool","name":"v25755","type":"bool"}],"name":"Oracle_announceVerification","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"v25760","type":"uint256"}],"name":"Oracle_announceWinner","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"Oracle_correctContract","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"_reachCreationTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentState","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T9","name":"which","type":"uint8"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"},{"internalType":"address payable","name":"elem1","type":"address"}],"internalType":"struct T3","name":"_Oracle_addParticipant0_746","type":"tuple"},{"components":[{"internalType":"bool","name":"elem0","type":"bool"}],"internalType":"struct T7","name":"_Oracle_announceVerification0_746","type":"tuple"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T8","name":"_Oracle_announceWinner0_746","type":"tuple"},{"internalType":"bool","name":"_Oracle_correctContract0_746","type":"bool"}],"internalType":"struct T9","name":"elem1","type":"tuple"}],"internalType":"struct T10","name":"v25780","type":"tuple"}],"name":"_reachp_2","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"addressSkeptic","outputs":[{"components":[{"internalType":"enum _enum_T0","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"internalType":"address payable","name":"_Some","type":"address"}],"internalType":"struct T0","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"addressesOracles","outputs":[{"internalType":"address payable[3]","name":"","type":"address[3]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"author","outputs":[{"internalType":"address payable","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"deadline","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"interaction","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"isBottom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"isCorrect","outputs":[{"internalType":"bool[3]","name":"","type":"bool[3]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"participants","outputs":[{"components":[{"internalType":"enum _enum_T4","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"},{"internalType":"address payable","name":"elem1","type":"address"}],"internalType":"struct T3","name":"_Some","type":"tuple"}],"internalType":"struct T4[10]","name":"","type":"tuple[10]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"wagerDown","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"wagerUp","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"stateMutability":"payable","type":"receive"}]`,
  Bytecode: `0x620055c638819003906080601f8301601f1916810191906001600160401b0383119083101762000aba57829160405260803960808101610180821262000ba557604051906200004e8262000c1a565b608051825260bf81131562000ba557604051926200006c8462000c37565b610100918490831162000ba55760a0945b83861062000bff575060208401526060607f199091011262000ba55760405190606082016001600160401b0381118382101762000aba5760405251600281101562000ba5578152620000d161012062000c85565b6020820152620000e361014062000c70565b6040828101919091528201526101605160608201526101805160808201526101a05160a08201526101c05160c0820152620001206101e062000c85565b60e0820152436003556040516101e081016001600160401b0381118282101762000aba576000916101c0916040528281528260208201528260408201528260608201528260808201526200017362000c93565b60a0820152604051620001868162000c37565b606036823760c08201528260e0820152826101008201528261012082015282610140820152604051620001b98162000c37565b6060368237610160820152620001ce62000d0a565b610180820152826101a0820152015260405190620001ec8262000c1a565b604051620001fa8162000c37565b606036823782526200020b62000cde565b60208301526200021a62000cb4565b60408301526200022962000cde565b60608301526200023862000d0a565b60808301526040516200024b8162000c53565b61014036823760a08301526200026062000c93565b60c08301526200026f62000d43565b60e083015260ff6004541662000be6577fb11556234d7df1ec758dc87f7ded7f8831f16482225718fee2599d74fb5f5d496101a060405133815283516020820152620002c46020850151604083019062000d7b565b620002d8604085015160a083019062000dcf565b6060840151610100820152608084015161012082015260a084015161014082015260c084015161016082015260e08401511515610180820152a18051801590811562000bd9575b501562000bc057608081015160a082015181019081811162000baa57811062000ba557340362000b8c5760e08101511562000b845760a0810151155b1562000b6b578151600090819052825160209081018290528351604090810183905281850180518490528051830184905281860180513390528051309085015260608088018051600190529151825185015290516080808901805192909252835182518701528351825186015283518251840152835182518201528351825160a0908101919091528451835160c0908101919091528551845160e09081019190915286518551610100908101919091529651945161012090810195909552828c0180518b905280518a018b9052805189018b905280519096018a9052855190930189905284519091018890528351810188905283518201889052835190940187905291510185905290860180518590528051840194909452835190860180519190915283518151909301929092529151905182015251916001600160401b0361024084019081119084111762000aba5760e08092610240850160405260008552604051620004c98162000c37565b60603682376020860152620004dd62000c93565b60408601526000606086015260006080860152600060a0860152600060c086015260008286015260006101008601526200051662000cb4565b6101208601526040516200052a8162000c37565b606036823761014086015260006101608601526040516200054b8162000c37565b606036823761018086015260006101a08601526200056862000d0a565b6101c08601526040516200057c8162000c53565b6101403682376101e08601526200059262000d43565b61020086015260006102208601523385526020810151602086015260408101516040860152606081015160608601526080810151608086015260a081015160a086015260c081015160c0860152818101511515828601520151151560001462000b635760005b1515610100840152604081015161012084015280516101408401526000610160840152805161018084015260016101a084015260808101516101c084015260a08101516101e08401520151610200820152436102208201526040518061020081011060018060401b036102008301111762000aba57610200810160405260008152604051620006878162000c37565b606036823760208201526200069b62000c93565b60408201526000606082015260006080820152600060a0820152600060c0820152600060e08201526000610100820152620006d562000cb4565b610120820152604051620006e98162000c37565b6060368237610140820152604051620007028162000c37565b606036823761016082015260006101808201526200071f62000d0a565b6101a0820152604051620007338162000c53565b6101403682376101c08201526200074962000d43565b6101e082015261020060018060a01b03835116928383526020810151602084015260408101516040840152606081015160608401526080810151608084015260a081015160a084015260c081015160c084015260e0810151151560e084015261010081015115156101008401526101208101516101208401526101408101516101408401526101808101516101608401526101a08101516101808401526101c08101516101a08401526101e08101516101c084015201516101e08201526003600055436001556040519160208301526200082c6020820151604084019062000d7b565b62000840604082015160a084019062000dcf565b6060810151610100830152608081015161012083015260a081015161014083015260c081015161016083015260e0810151151561018083015261010081015115156101a08301526200089d6101208201516101c084019062000dfe565b620008b361014082015161020084019062000e19565b620008c961016082015161026084019062000e19565b6101808101516102c08301526101a081015160006102e084015b600a821062000b21575050506101c081015160006107e084015b600a821062000b0a57846101e085015161092082016000905b6003821062000ad057610a20845283610a4081016001600160401b0381118282101762000aba5760405280516001600160401b03811162000aba57600254600181811c9116801562000aaf575b602082101462000a9957601f811162000a2f575b50602091601f8211600114620009c557918192600092620009b9575b50508160011b916000199060031b1c1916176002555b604051614780908162000e468239f35b01519050828062000993565b601f19821692600260005260206000209160005b85811062000a1657508360019510620009fc575b505050811b01600255620009a9565b015160001960f88460031b161c19169055828080620009ed565b91926020600181928685015181550194019201620009d9565b60026000527f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace601f830160051c8101916020841062000a8e575b601f0160051c01905b81811062000a81575062000977565b6000815560010162000a72565b909150819062000a69565b634e487b7160e01b600052602260045260246000fd5b90607f169062000963565b634e487b7160e01b600052604160045260246000fd5b6020606060019260408651805162000ae88162000dae565b8352848101511515858401520151151560408201520193019101909162000916565b6020806001928551815201930191019091620008fd565b6020608060019262000b5660408751805162000b3d8162000dae565b8452858101511515868501520151604083019062000dfe565b01930191019091620008e3565b6001620005f8565b60405163100960cb60e01b815260146004820152602490fd5b60016200035b565b60405163100960cb60e01b815260136004820152602490fd5b600080fd5b634e487b7160e01b600052601160045260246000fd5b60405163100960cb60e01b815260126004820152602490fd5b905060015414836200031f565b60405163100960cb60e01b815260116004820152602490fd5b6020809162000c0e8862000c70565b8152019501946200007d565b61010081019081106001600160401b0382111762000aba57604052565b606081019081106001600160401b0382111762000aba57604052565b61014081019081106001600160401b0382111762000aba57604052565b51906001600160a01b038216820362000ba557565b5190811515820362000ba557565b6040519062000ca28262000c37565b60006040838281528260208201520152565b60408051919082016001600160401b0381118382101762000aba5760405260006020838281520152565b6040519062000ced8262000c37565b816000815260006020820152604062000d0562000cb4565b910152565b6040519062000d198262000c53565b8160005b610140811062000d2b575050565b60209062000d3862000cde565b818401520162000d1d565b6040519062000d528262000c37565b8160005b6060811062000d63575050565b60209062000d7062000c93565b818401520162000d56565b6000915b6003831062000d8d57505050565b81516001600160a01b03168152600192909201916020918201910162000d7f565b6002111562000db957565b634e487b7160e01b600052602160045260246000fd5b604090805162000ddf8162000dae565b83526020818101511515908401528101516001600160a01b0316910152565b80516001600160a01b03908116835260209182015116910152565b6000915b6003831062000e2b57505050565b600190825115158152602080910192019201919062000e1d56fe60406080815260048036101561001c575b5050361561001a57005b005b600090813560e01c8063173b7d7e146107cc5780631e93b0f1146107ad57806329dcb0cf1461076057806334ba416f146106c057806361736071146106805780636ba24022146106335780636c4470fb146105945780636c6973311461054757806383230757146105285780638a830443146104bc5780638b8103001461044c578063a6c3e6b9146103dd578063aaed29ac14610368578063ab53f2c6146102fc578063ca4ebc42146102a2578063e32c7165146101da578063f04f1a091461015c5763f88ed95f146100ef5750610010565b346101585781600319360112610158576003610109610c28565b925403610141576020610140848460e0610132610124610aeb565b868082518301019101610e45565b01511515928391015251908152f35b602490600c84519163100960cb60e01b8352820152fd5b5080fd5b50346101585781600319360112610158576060835161017a81610a46565b3690376003610187610c28565b9254036101c357606060c06101c1858560206101b26101a4610aeb565b828082518301019101610e45565b0151938491015251809261098f565bf35b602490600884519163100960cb60e01b8352820152fd5b5082908160031936011261029e576001600160a01b03929035838116919082900361029b57602435918483168093036101585761029090610219610c28565b928391865190610228826109fa565b60209889978884019284528252885191610241836109fa565b895161024c816109fa565b858152858a82015283528189840194610263610cd6565b865251168351525116878251015282825152518682510152610283610d3e565b91825251858201526112b6565b015115159051908152f35b80fd5b8280fd5b503461015857816003193601126101585760036102bd610c28565b9254036102e55760206101c0848460806102d8610124610aeb565b0151928391015251908152f35b602490601084519163100960cb60e01b8352820152fd5b8284346101585781600319360112610158578154610318610aeb565b91805193849283526020828185015284518093850152815b83811061035157505060608094508284010152601f80199101168101030190f35b808601820151878201606001528694508101610330565b5034610158578160031936011261015857610381610ba0565b50600361038c610c28565b9254036103c657606060a06101c18585816103b76103a8610aeb565b60208082518301019101610e45565b01519384910152518092610962565b602490600784519163100960cb60e01b8352820152fd5b503461015857816003193601126101585760036103f8610c28565b92540361043557602060e0848461040d610aeb565b80516001600160a01b03916104289181018701908701610e45565b5116928391015251908152f35b602490600984519163100960cb60e01b8352820152fd5b508290602036600319011261029e5760209261029060609261046c610c28565b928391865161047a816109fa565b875161048581610a2b565b838152815288810191610496610cd6565b83523581515260028251525186825101526104af610d3e565b91825251878201526112b6565b508290602036600319011261029e573580151580910361029e5760209261029083926104e6610c28565b92839185516104f4816109fa565b86516104ff81610a2b565b838152815288810191610510610cd6565b835281515260018251525186825101526104af610d3e565b8284346101585781600319360112610158576020906001549051908152f35b50346101585781600319360112610158576003610562610c28565b92540361057d576020610120848460606102d8610124610aeb565b602490600b84519163100960cb60e01b8352820152fd5b50346101585781600319360112610158576105ad610bf5565b506105b6610c28565b90600383540361061c5750610180926105cd610aeb565b916101a06105e5602094858082518301019101610e45565b01519401849052519291835b600a82106105ff5761050085f35b826080826106106001948851610935565b019401910190926105f1565b602490600e85519163100960cb60e01b8352820152fd5b5034610158578160031936011261015857600361064e610c28565b9254036106695760206101a0848460a06102d8610124610aeb565b602490600f84519163100960cb60e01b8352820152fd5b82848160031936011261015857608060209261029061069d610c28565b80926106a7610d3e565b87810190600382515251151586825101526104af610d3e565b50823461029e578260031936011261029e57606081516106df81610a46565b3690376106ea610c28565b9260039283825403610749575092610700610aeb565b91610160918261071a602095868082518301019101610e45565b01519201829052519390845b84831061073257606086f35b838060019284511515815201920192019190610726565b602490600d84519163100960cb60e01b8352820152fd5b5034610158578160031936011261015857600361077b610c28565b925403610796576020610100848460c06102d8610124610aeb565b602490600a84519163100960cb60e01b8352820152fd5b8284346101585781600319360112610158576020906003549051908152f35b509160e0366003190112610158576107e2610c28565b81516107ed816109fa565b8435815260c03660231901126108e35782519460a086016001600160401b038111878210176108e7578452602435908110156108db578552826043193601126108e35782519461083c866109fa565b6001600160a01b039560443587811681036108df57815260643596871687036108d7576020968782015286820152856083193601126108db57835161088081610a2b565b60843580151581036108df578152848201528560a3193601126108db5783516108a881610a2b565b60a4358152606082015260c43580151581036108d7576080820152858201526108d191906112b6565b51908152f35b8580fd5b8480fd5b8680fd5b8380fd5b634e487b7160e01b865260418252602486fd5b6002111561090457565b634e487b7160e01b600052602160045260246000fd5b80516001600160a01b03908116835260209182015116910152565b90604080610960938051610948816108fa565b8452602081015115156020850152015191019061091a565b565b6040908051610970816108fa565b83526020818101511515908401528101516001600160a01b0316910152565b6000915b600383106109a057505050565b81516001600160a01b031681526001929092019160209182019101610993565b90600182811c921680156109f0575b60208310146109da57565b634e487b7160e01b600052602260045260246000fd5b91607f16916109cf565b604081019081106001600160401b03821117610a1557604052565b634e487b7160e01b600052604160045260246000fd5b602081019081106001600160401b03821117610a1557604052565b606081019081106001600160401b03821117610a1557604052565b61020081019081106001600160401b03821117610a1557604052565b61014081019081106001600160401b03821117610a1557604052565b610a4081019081106001600160401b03821117610a1557604052565b608081019081106001600160401b03821117610a1557604052565b60a081019081106001600160401b03821117610a1557604052565b604051906000600254610afd816109c0565b808552600191808316908115610b815750600114610b3b575b5050829003601f01601f191682016001600160401b03811183821017610a1557604052565b600260009081526020935091836000805160206147348339815191525b838510610b6d57505050508301013880610b16565b805488860183015293019284908201610b58565b919250506020925060ff191682850152151560051b8301013880610b16565b60405190610bad82610a46565b60006040838281528260208201520152565b60405190610bcc82610a46565b8160008152600060208201526040805191610be6836109fa565b60008352600060208401520152565b60405190610c0282610a7d565b8160005b6101408110610c13575050565b602090610c1e610bbf565b8184015201610c06565b604051906101e082016001600160401b03811183821017610a1557604052816101c0600091828152826020820152826040820152826060820152826080820152610c70610ba0565b60a0820152604051610c8181610a46565b606036823760c08201528260e0820152826101008201528261012082015282610140820152604051610cb281610a46565b6060368237610160820152610cc5610bf5565b610180820152826101a08201520152565b60408051919060a083016001600160401b03811184821017610a155781526080836000928382528051610d08816109fa565b84815284602082015260208301528051610d2181610a2b565b8481528183015251610d3281610a2b565b83815260608201520152565b60405190610d4b826109fa565b81600081526020610d5a610cd6565b910152565b60405190610d6c82610a46565b8160005b60608110610d7c575050565b602090610d87610ba0565b8184015201610d70565b51906001600160a01b0382168203610da557565b600080fd5b51908115158203610da557565b9190826040910312610da557604080519081016001600160401b03811182821017610a15576040526020610d5a818395610df081610d91565b855201610d91565b9080601f83011215610da55760405191610e1183610a46565b829060608101928311610da557905b828210610e2d5750505090565b60208091610e3a84610daa565b815201910190610e20565b90610a2090828103828112610da557604080519461020086016001600160401b03811187821017610a15578252610e7b81610d91565b865283603f82011215610da557815190610e9482610a46565b8160809384830191878311610da55760209485808601915b8583106110fa575090508a015260608096607f190112610da557805191610ed283610a46565b519160029283811015610da5578152610eed60a08501610daa565b85820152610efd60c08501610d91565b82820152818a015260e0830151868a01528661010080850151878c0152610120908186015160a08d01526101408c60c0828901519101528c61016091610f44838a01610daa565b60e083015261018093610f58858b01610daa565b908301526101a094610f6c87878c01610db7565b90830152610f7f6101e09d8e8b01610df8565b910152610f90846102408901610df8565b908d01526102a0860151908c0152816102df86011215610da557825190610fb682610a7d565b6107c086019782848a11610da5576102c08801905b8a82106110aa575050508b0152806107df85011215610da5578151610fef81610a7d565b80610900860197838911610da5578790915b89831061109a575050506101c08b01528061091f85011215610da5578151986110298a610a46565b89940195818711610da557935b86851061104b57505050505050505082015290565b8785830312610da55782519061106082610a46565b85519085821015610da5578288928b945261107c838901610daa565b8382015261108b868901610daa565b86820152815201940193611036565b8251815291810191889101611001565b8282870312610da5578651906110bf82610a46565b82519089821015610da557828c928694526110db838601610daa565b838201526110eb898b8701610db7565b8a820152815201910190610fcb565b819061110584610d91565b8152019101908690610eac565b5160048110156109045790565b600019811461112e5760010190565b634e487b7160e01b600052601160045260246000fd5b9060038110156111555760051b0190565b634e487b7160e01b600052603260045260246000fd5b60408051919061024083016001600160401b03811184821017610a1557815261022083600092838252805161119f81610a46565b606036823760208301526111b1610ba0565b818301528360608301528360808301528360a08301528360c08301528360e08301528361010083015280516111e5816109fa565b84815284602082015261012083015280519061120082610a46565b6060368337610140918284015284610160840152805161121f81610a46565b6060368237610180840152846101a0840152611239610bf5565b6101c0840152519061124a82610a7d565b3682376101e082015261125b610d5f565b6102008201520152565b90600a8110156111555760051b0190565b6001600160a01b0391821681529116602082015260400190565b60408091805161129f816108fa565b845260208101511515602085015201511515910152565b60405192916001600160401b03610880850190811190851117610a155761088084016040526112e861088085016109fa565b600061088085015260006108a085015261088084018452611307610ba0565b6020850152611314610ba0565b6040850152611321610ba0565b606085015260006080850152611335610ba0565b60a0850152600060c0850152600060e0850152611350610bbf565b610100850152604051611362816109fa565b600081526000602082015261012085015261137b610bbf565b610140850152611389610ba0565b610160850152611397610ba0565b61018085015260006101a08501526113ad610ba0565b6101c085015260006101e085015260006102008501526113cb610bbf565b6102208501526040516113dd816109fa565b60008152600060208201526102408501526113f6610bbf565b610260850152604051611408816109fa565b6000815260006020820152610280850152611421610bbf565b6102a085015260405161143381610a2b565b600081526102c0850152611445610ba0565b6102e0850152611453610ba0565b610300850152611461610ba0565b6103208501526000610340850152611477610ba0565b610360850152611485610ba0565b610380850152611493610ba0565b6103a085015260006103c08501526114a9610ba0565b6103e085015260006104008501526114bf610ba0565b6104208501526114cd610d5f565b610440850152600061046085015260006104808501526114eb610ba0565b6104a085015260006104c085015260405161150581610a2b565b600081526104e0850152611517610ba0565b610500850152611525610ba0565b610520850152611533610ba0565b6105408501526000610560850152611549610ba0565b610580850152611557610ba0565b6105a0850152611565610ba0565b6105c085015260006105e085015261157b610ba0565b610600850152600061062085015260405161159581610a46565b606036823761064085015260006106608501526040516115b481610a7d565b6101403682376106808501526040516115cc816109fa565b60008152600060208201526106a08501526115e5610ba0565b6106c08501526115f3610ba0565b6106e0850152611601610ba0565b6107008501526000610720850152611617610ba0565b610740850152611625610ba0565b610760850152611633610ba0565b61078085015260006107a0850152611649610ba0565b6107c085015260405161165b81610a46565b60603682376107e0850152600061080085015260006108208501526000610840850152600061086085015260ff60045416614673576040513381528251602082015260208301518051916004831015610904576080610100927fb4e75f8a0fbdaa1b5cee88b488e77acbb14cc695c4de4297019764284fc076979460408401526116ed6020820151606085019061091a565b604081015151151560a084015260608101515160c08401520151151560e0820152a160036000540361465a576117246103a8610aeb565b918051801590811561464e575b5015614635576117446020820151611112565b60048110156109045761226257602080910151015184526000602085015152600060208086015101526020840151606085015260005b600381106121de5750600160608501518060408701525161179a816108fa565b6117a3816108fa565b036121c557600a61018083015110156121ac576101008201511561219357600060e085015260005b600a81106120c6575060e084015115801560c08601526120bf5760005b156120a6573461208d57602084015161018085015260005b60038110612001575060016101808501518061016087015251611822816108fa565b61182b816108fa565b03611fe857600061020085015260005b600a8110611f1857506102008401511580156101e0860152611f115760005b15611ef857835151610280850180516001600160a01b03928316905285516020908101518251908416908201526102a087018051600190529151915160409081019290925286518051908201519251600095929492937fe83724cfd6213e1ca8e053f3ce1163bc5fea531b9b733cc0b8443d16084c4c0d93919283926118e4928116911683611276565b0390a17f44eb96a4e662f262a8e5c21c79375f0e08d3fa1f72d31ef37521626a8cf423e582604051858152a1015261191a61116b565b9060018060a01b0381511682526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e0810151151560e0830152610100810151151561010083015261012081015161012083015261014081015161014083015260006101608301526101608101516101808301526119b761018082015161468c565b6101a08301526101a08101516102a06101808301519501516119d7610bf5565b9160005b600a8110611ec957505085611a00916119f96101e096979885611265565b5282611265565b506101c08401526101c0810151828401520151610200820152436102208201526101608101511515600014611ab15750600080556000600155611a446002546109c0565b80611a4c5750565b601f8111600114611a5f57506000600255565b6002600052611aa490601f0160051c600080516020614734833981519152017f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acf61471c565b6000602081208160025555565b90604051611abe81610a61565b60008152604051611ace81610a46565b60603682376020820152611ae0610ba0565b60408201526000606082015260006080820152600060a0820152600060c0820152600060e08201526000610100820152604051611b1c816109fa565b6000815260006020820152610120820152604051611b3981610a46565b6060368237610140820152604051611b5081610a46565b60603682376101608201526000610180820152611b6b610bf5565b6101a0820152604051611b7d81610a7d565b6101403682376101c0820152611b91610d5f565b6101e082015261020060018060a01b03845116938483526020810151602084015260408101516040840152606081015160608401526080810151608084015260a081015160a084015260c081015160c084015260e0810151151560e084015261010081015115156101008401526101208101516101208401526101408101516101408401526101808101516101608401526101a08101516101808401526101c08101516101a08401526101e08101516101c084015201516101e0820152600360005543600155604051926020840152611c726020820151604085019061098f565b611c84604082015160a0850190610962565b6060810151610100840152608081015161012084015260a081015161014084015260c081015161016084015260e0810151151561018084015261010081015115156101a0840152611cdf6101208201516101c085019061091a565b611cf36101408201516102008501906146f2565b611d076101608201516102608501906146f2565b6101808101516102c08401526101a081015160006102e085015b600a8210611eab575050506101c081015160006107e085015b600a8210611e95575050506101e00151600061092084015b60038210611e7757505050610a208252611d6b82610a99565b81516001600160401b038111610a1557611d866002546109c0565b601f8111611e2f575b50602092601f8211600114611dcc5792819293600092611dc1575b50508160011b916000199060031b1c191617600255565b015190503880611daa565b601f19821693600260005260206000209160005b868110611e175750836001959610611dfe575b505050811b01600255565b015160001960f88460031b161c19169055388080611df3565b91926020600181928685015181550194019201611de0565b6002600052611e6790600080516020614734833981519152601f840160051c81019160208510611e6d575b601f0160051c019061471c565b38611d8f565b9091508190611e5a565b6020606082611e896001948751611290565b01930191019091611d52565b6020806001928551815201930191019091611d3a565b6020608082611ebd6001948751610935565b01930191019091611d21565b80611ed7611ef39284611265565b51611ee28287611265565b52611eed8186611265565b5061111f565b6119db565b60405163100960cb60e01b8152601e6004820152602490fd5b600161185a565b80611f2b611f8f926101a0860151611265565b51610220870152855151610240870180516001600160a01b0392831690528751602090810151825193169201919091526102608701805160019052905190516040015261020086015115611f945761020086015115155b151561020087015261111f565b61183b565b610260860151604051611fab602082018093610935565b60808152611fb881610ad0565b519020610220870151604051611fd2602082018093610935565b60808152611fdf81610ad0565b51902014611f82565b60405163100960cb60e01b8152601d6004820152602490fd5b6120759060018060a01b038061201b836020880151611144565b51166101a088015260016101c0880151528160406101c0890151015261018087015151612047816108fa565b612050816108fa565b612085576101a08701511633145b1561207a576101c08601515b61018087015261111f565b611800565b61018086015161206a565b50600061205e565b60405163100960cb60e01b8152601c6004820152602490fd5b60405163100960cb60e01b8152601b6004820152602490fd5b60016117e8565b806120d961213a926101a0860151611265565b51610100870152855151610120870180516001600160a01b0392831690528751602090810151825193169201919091526101408701805160019052905190516040015260e08601511561213f5760e086015115155b151560e087015261111f565b6117cb565b610140860151604051612156602082018093610935565b6080815261216381610ad0565b51902061010087015160405161217d602082018093610935565b6080815261218a81610ad0565b5190201461212e565b60405163100960cb60e01b8152601a6004820152602490fd5b60405163100960cb60e01b815260196004820152602490fd5b60405163100960cb60e01b815260186004820152602490fd5b61224b9060018060a01b03806121f8836020880151611144565b51166080880152600160a08801515281604060a08901510152606087015151612220816108fa565b612229816108fa565b61225a5760808701511633145b156122505760a08601515b606087015261111f565b61177a565b6060860151612241565b506000612236565b61227460208296939495960151611112565b600481101561090457600103612dbb576020604091015101516102c082015260006102e082015152600060206102e083015101526102e081015161032082015260005b60038110612d2f5750600161032082015180610300840152516122d9816108fa565b6122e2816108fa565b03612d165760e083015115612cfd5761232a6101e084015160016103008401515161230c816108fa565b612315816108fa565b03612cf5576040610300840151015190611144565b5151612335816108fa565b61233e816108fa565b612cdc5734612cc3576102e08101516103a082015260005b60038110612c37575060016103a08201518061038084015251612378816108fa565b612381816108fa565b03612c1e57600161038082015151612398816108fa565b6123a1816108fa565b03612c14576123c6604061038083015101515b806104008401526101e0850151611144565b51516123d1816108fa565b6123da816108fa565b612bfd576001610420820151526102c0810151511515604061042083015101526101e0830151610400820151610420830151612414610d5f565b9260005b60038110612bd457505090612438916124318285611144565b5282611144565b50610440820152600061048082015260005b60038110612b3057506002610480820151806104608401521460001461264d577f3d4eb33e4d2359cd4a519091b0a501d8c8ef06d94641274a49f4f59a9d75b2b860206102c0830151511515604051908152a16102c081015151156125fc57600080808060018060a01b038751165b608088015190829082156125f2575b6001600160a01b031690f1156125e65760006040610440937f1d53f948d18014b01caa04e8dd57adb1e4c048a3fab9ace3eccb44508f0966bc60208351858152a101526101c061251661116b565b9360018060a01b0381511685526020810151602086015260408101516040860152606081015160608601526080810151608086015260a081015160a086015260c081015160c086015260e0810151151560e0860152610100810151151561010086015261012081015161012086015261014081015161014086015260016101608601526101608101516101808601526101808101516101a08601526101a08101518286015201516101e0840152015161020082015261022043910152600080556000600155611a446002546109c0565b6040513d6000823e3d90fd5b6108fc91506124c8565b60408301600181515161260e816108fa565b612617816108fa565b036126385751604001516000908190819081906001600160a01b03166124b9565b50600080808060018060a01b038751166124b9565b60006040610440937fd4e279045dc98d9d5f444034e0a6a9ffc628ef4eb32e30d21f29afd5a37b28e660208398979851858152a101526101c061268e61116b565b9460018060a01b0381511686526020810151602087015260408101516040870152606081015160608701526080810151608087015260a081015160a087015260c081015160c087015260e0810151151560e0870152610100810151151561010087015261012081015161012087015261014081015161014087015260006101608701526101608101516101808701526101808101516101a08701526101a08101518287015201516101e085015201516102008301524361022083015260405161275681610a61565b6000815260405161276681610a46565b60603682376020820152612778610ba0565b60408201526000606082015260006080820152600060a0820152600060c0820152600060e082015260006101008201526040516127b4816109fa565b60008152600060208201526101208201526040516127d181610a46565b60603682376101408201526040516127e881610a46565b60603682376101608201526000610180820152612803610bf5565b6101a082015260405161281581610a7d565b6101403682376101c0820152612829610d5f565b6101e082015261020060018060a01b03845116938483526020810151602084015260408101516040840152606081015160608401526080810151608084015260a081015160a084015260c081015160c084015260e0810151151560e084015261010081015115156101008401526101208101516101208401526101408101516101408401526101808101516101608401526101a08101516101808401526101c08101516101a08401526101e08101516101c084015201516101e082015260036000554360015560405192602084015261290a6020820151604085019061098f565b61291c604082015160a0850190610962565b6060810151610100840152608081015161012084015260a081015161014084015260c081015161016084015260e0810151151561018084015261010081015115156101a08401526129776101208201516101c085019061091a565b61298b6101408201516102008501906146f2565b61299f6101608201516102608501906146f2565b6101808101516102c08401526101a081015160006102e085015b600a8210612b12575050506101c081015160006107e085015b600a8210612afc575050506101e00151600061092084015b60038210612ade57505050610a208252612a0382610a99565b81516001600160401b038111610a1557612a1e6002546109c0565b601f8111612aa1575b50602092601f8211600114612a585792819293600092611dc15750508160011b916000199060031b1c191617600255565b601f19821693600260005260206000209160005b868110612a895750836001959610611dfe57505050811b01600255565b91926020600181928685015181550194019201612a6c565b6002600052612ad890600080516020614734833981519152601f840160051c81019160208510611e6d57601f0160051c019061471c565b38612a27565b6020606082612af06001948751611290565b019301910190916129ea565b60208060019285518152019301910190916129d2565b6020608082612b246001948751610935565b019301910190916129b9565b80612b43612bbe92610440850151611144565b51806104a0850152604051612b5c602082018093611290565b60608152612b6981610ab5565b519020610420840151604051612b83602082018093611290565b60608152612b9081610ab5565b51902003612bc357612ba661048084015161468c565b6104c08401525b6104c083015161048084015261111f565b61244a565b6104808301516104c0840152612bad565b80612be2612bf89284611144565b51612bed8288611144565b52611eed8187611144565b612418565b602460405163100960cb60e01b8152816004820152fd5b6123c660006123b4565b60405163100960cb60e01b815260236004820152602490fd5b612cab9060018060a01b0380612c51836020890151611144565b51166103c085015260016103e0850151528160406103e086015101526103a084015151612c7d816108fa565b612c86816108fa565b612cbb576103c08401511633145b15612cb0576103e08301515b6103a084015261111f565b612356565b6103a0830151612ca0565b506000612c94565b60405163100960cb60e01b815260226004820152602490fd5b60405163100960cb60e01b815260216004820152602490fd5b600090611144565b60405163100960cb60e01b815260206004820152602490fd5b60405163100960cb60e01b8152601f6004820152602490fd5b612da39060018060a01b0380612d49836020890151611144565b5116610340850152600161036085015152816040610360860151015261032084015151612d75816108fa565b612d7e816108fa565b612db3576103408401511633145b15612da8576103608301515b61032084015261111f565b6122b7565b610320830151612d98565b506000612d8c565b612dcb6020829593950151611112565b600481101561090457600203613921576020606091015101516104e084015260006105008401515260006020610500850151015261050083015161054084015260005b60038110613895575060016105408401518061052086015251612e30816108fa565b612e39816108fa565b0361387c57612e77610140820151600161052086015151612e59816108fa565b612e62816108fa565b03612cf5576040610520860151015190611144565b51156138755760005b1561385c576104e0830151516101808201511115613843576101008101511561382a5734613811576105008301516105c084015260005b60038110613785575060016105c0840151806105a086015251612ed9816108fa565b612ee2816108fa565b0361376c5760016105a084015151612ef9816108fa565b612f02816108fa565b0361376257612f2760406105a085015101515b80610620860152610140830151611144565b511561375b5760005b1561374257612f4a610140820151610620850151906146a1565b6106408401526101c08101612f70612f6a82516104e08701515190611265565b5161468c565b908161066086015251906104e08501515160405192612f8e84610a7d565b61014036853760005b600a811061371e575050612fab9083611265565b5261068084015261066083015160020361323a576001612fd76101a08301516104e08601515190611265565b5151612fe2816108fa565b612feb816108fa565b036132205760008051602061475483398151915260406130176101a08401516104e08701515190611265565b5101515b6106a085018190528051602090910151604051918291613048916001600160a01b03918216911683611276565b0390a1600080808060018060a01b036106a0880151511660a086015190828215613217575bf1156125e6576104e0830151516131c657600080808060018060a01b038551165b608086015190829082156131bc575b6001600160a01b031690f1156125e657600060606101e0937fec111112ba0e92c523519f8f5309c989b016b0e1f902afc8296093f33910aa646020604051858152a101526106806130ec61116b565b9360018060a01b0383511685526020830151602086015260408301516040860152606083015160608601526080830151608086015260a083015160a086015260c083015160c086015260e0830151151560e0860152610100830151151561010086015261012083015161012086015261064081015161014086015260016101608601526101608301516101808601526101808301516101a08601526101a08301516101c0860152015182840152015161020082015261022043910152600080556000600155611a446002546109c0565b6108fc915061309d565b6040810160018151516131d8816108fa565b6131e1816108fa565b036132025751604001516000908190819081906001600160a01b031661308e565b50600080808060018060a01b0385511661308e565b506108fc61306d565b60008051602061475483398151915261012082015161301b565b600060606101e0937f0a8f6db41d97e91fe7939cd1ae2abc5523506970fd499416e1488c097156301d6020604098979851858152a1015261068061327c61116b565b9460018060a01b0383511686526020830151602087015260408301516040870152606083015160608701526080830151608087015260a083015160a087015260c083015160c087015260e0830151151560e0870152610100830151151561010087015261012083015161012087015261064081015161014087015260006101608701526101608301516101808701526101808301516101a08701526101a08301516101c087015201518285015201516102008301524361022083015260405161334481610a61565b6000815260405161335481610a46565b60603682376020820152613366610ba0565b60408201526000606082015260006080820152600060a0820152600060c0820152600060e082015260006101008201526040516133a2816109fa565b60008152600060208201526101208201526040516133bf81610a46565b60603682376101408201526040516133d681610a46565b606036823761016082015260006101808201526133f1610bf5565b6101a082015260405161340381610a7d565b6101403682376101c0820152613417610d5f565b6101e082015261020060018060a01b03845116938483526020810151602084015260408101516040840152606081015160608401526080810151608084015260a081015160a084015260c081015160c084015260e0810151151560e084015261010081015115156101008401526101208101516101208401526101408101516101408401526101808101516101608401526101a08101516101808401526101c08101516101a08401526101e08101516101c084015201516101e08201526003600055436001556040519260208401526134f86020820151604085019061098f565b61350a604082015160a0850190610962565b6060810151610100840152608081015161012084015260a081015161014084015260c081015161016084015260e0810151151561018084015261010081015115156101a08401526135656101208201516101c085019061091a565b6135796101408201516102008501906146f2565b61358d6101608201516102608501906146f2565b6101808101516102c08401526101a081015160006102e085015b600a8210613700575050506101c081015160006107e085015b600a82106136ea575050506101e00151600061092084015b600382106136cc57505050610a2082526135f182610a99565b81516001600160401b038111610a155761360c6002546109c0565b601f811161368f575b50602092601f82116001146136465792819293600092611dc15750508160011b916000199060031b1c191617600255565b601f19821693600260005260206000209160005b8681106136775750836001959610611dfe57505050811b01600255565b9192602060018192868501518155019401920161365a565b60026000526136c690600080516020614734833981519152601f840160051c81019160208510611e6d57601f0160051c019061471c565b38613615565b60206060826136de6001948751611290565b019301910190916135d8565b60208060019285518152019301910190916135c0565b60206080826137126001948751610935565b019301910190916135a7565b8061372c61373d9284611265565b516137378288611265565b5261111f565b612f97565b60405163100960cb60e01b8152602b6004820152602490fd5b6001612f30565b612f276000612f15565b60405163100960cb60e01b8152602a6004820152602490fd5b6137f99060018060a01b038061379f836020870151611144565b51166105e087015260016106008701515281604061060088015101526105c0860151516137cb816108fa565b6137d4816108fa565b613809576105e08601511633145b156137fe576106008501515b6105c086015261111f565b612eb7565b6105c08501516137ee565b5060006137e2565b60405163100960cb60e01b815260296004820152602490fd5b60405163100960cb60e01b815260286004820152602490fd5b60405163100960cb60e01b815260276004820152602490fd5b60405163100960cb60e01b815260266004820152602490fd5b6001612e80565b60405163100960cb60e01b815260256004820152602490fd5b6139099060018060a01b03806138af836020870151611144565b51166105608701526001610580870151528160406105808801510152610540860151516138db816108fa565b6138e4816108fa565b613919576105608601511633145b1561390e576105808501515b61054086015261111f565b612e0e565b6105408501516138fe565b5060006138f2565b6020613934919594959392930151611112565b60048110156109045760031461394b575b50509050565b60006106c085015152600060206106c086015101526106c084015161070085015260005b600381106145a957506001610700850151806106e087015251613991816108fa565b61399a816108fa565b036145905734614577576106c084015161078085015260005b600381106144eb5750600161078085015180610760870152516139d5816108fa565b6139de816108fa565b036144d257613a1c6101608301516001610760870151516139fe816108fa565b613a07816108fa565b036144ca5760406107608701510151906146a1565b6107e0850152600061082085015260005b6003811061446d575090600060806101e0936002610820880151806108008a0152148314613f82577fe1aef5c2b5c8ea72f2532656111d5822b8ebcb29e7b9ece9133f0e056049f02d60206040517f8ffd2eb5debd6cf560d4ab7314b178f04489430b8da10536115d87c63836438c8682a1858152a101526107e0613ab061116b565b9460018060a01b0383511686526020830151602087015260408301516040870152606083015160608701526080830151608087015260a083015160a087015260c083015160c087015260e0830151151560e08701526101008301511515610100870152610120830151610120870152610140830151610140870152600061016087015201516101808501526101808101516101a08501526101a08101516101c08501526101c081015182850152015161020083015243610220830152604051613b7881610a61565b60008152604051613b8881610a46565b60603682376020820152613b9a610ba0565b60408201526000606082015260006080820152600060a0820152600060c0820152600060e08201526000610100820152604051613bd6816109fa565b6000815260006020820152610120820152604051613bf381610a46565b6060368237610140820152604051613c0a81610a46565b60603682376101608201526000610180820152613c25610bf5565b6101a0820152604051613c3781610a7d565b6101403682376101c0820152613c4b610d5f565b6101e082015261020060018060a01b03845116938483526020810151602084015260408101516040840152606081015160608401526080810151608084015260a081015160a084015260c081015160c084015260e0810151151560e084015261010081015115156101008401526101208101516101208401526101408101516101408401526101808101516101608401526101a08101516101808401526101c08101516101a08401526101e08101516101c084015201516101e0820152600360005543600155604051926020840152613d2c6020820151604085019061098f565b613d3e604082015160a0850190610962565b6060810151610100840152608081015161012084015260a081015161014084015260c081015161016084015260e0810151151561018084015261010081015115156101a0840152613d996101208201516101c085019061091a565b613dad6101408201516102008501906146f2565b613dc16101608201516102608501906146f2565b6101808101516102c08401526101a081015160006102e085015b600a8210613f64575050506101c081015160006107e085015b600a8210613f4e575050506101e00151600061092084015b60038210613f3057505050610a208252613e2582610a99565b81516001600160401b038111610a1557613e406002546109c0565b601f8111613ef3575b50602092601f8211600114613e8d5792819293600092613e82575b50508160011b916000199060031b1c1916176002555b803880613945565b015190503880613e64565b601f19821693600260005260206000209160005b868110613edb5750836001959610613ec2575b505050811b01600255613e7a565b015160001960f88460031b161c19169055388080613eb4565b91926020600181928685015181550194019201613ea1565b6002600052613f2a90600080516020614734833981519152601f840160051c81019160208510611e6d57601f0160051c019061471c565b38613e49565b6020606082613f426001948751611290565b01930191019091613e0c565b6020806001928551815201930191019091613df4565b6020608082613f766001948751610935565b01930191019091613ddb565b7f456f53cac77dd73fe597f261d6bb9fed8b5799ab4f9fe43b8b61de814b0ef6676020604051858152a101526107e0613fb961116b565b9460018060a01b0383511686526020830151602087015260408301516040870152606083015160608701526080830151608087015260a083015160a087015260c083015160c087015260e0830151151560e08701526101008301511515610100870152610120830151610120870152610140830151610140870152600061016087015201516101808501526101808101516101a08501526101a08101516101c08501526101c08101518285015201516102008301524361022083015260405161408181610a61565b6000815260405161409181610a46565b606036823760208201526140a3610ba0565b60408201526000606082015260006080820152600060a0820152600060c0820152600060e082015260006101008201526040516140df816109fa565b60008152600060208201526101208201526040516140fc81610a46565b606036823761014082015260405161411381610a46565b6060368237610160820152600061018082015261412e610bf5565b6101a082015260405161414081610a7d565b6101403682376101c0820152614154610d5f565b6101e082015261020060018060a01b03845116938483526020810151602084015260408101516040840152606081015160608401526080810151608084015260a081015160a084015260c081015160c084015260e0810151151560e084015261010081015115156101008401526101208101516101208401526101408101516101408401526101808101516101608401526101a08101516101808401526101c08101516101a08401526101e08101516101c084015201516101e08201526003600055436001556040519260208401526142356020820151604085019061098f565b614247604082015160a0850190610962565b6060810151610100840152608081015161012084015260a081015161014084015260c081015161016084015260e0810151151561018084015261010081015115156101a08401526142a26101208201516101c085019061091a565b6142b66101408201516102008501906146f2565b6142ca6101608201516102608501906146f2565b6101808101516102c08401526101a081015160006102e085015b600a821061444f575050506101c081015160006107e085015b600a8210614439575050506101e00151600061092084015b6003821061441b57505050610a20825261432e82610a99565b81516001600160401b038111610a15576143496002546109c0565b601f81116143de575b50602092601f82116001146143925792819293600092614387575b50508160011b916000199060031b1c191617600255613e7a565b01519050388061436d565b601f19821693600260005260206000209160005b8681106143c65750836001959610613ec257505050811b01600255613e7a565b919260206001819286850151815501940192016143a6565b600260005261441590600080516020614734833981519152601f840160051c81019160208510611e6d57601f0160051c019061471c565b38614352565b602060608261442d6001948751611290565b01930191019091614315565b60208060019285518152019301910190916142fd565b60206080826144616001948751610935565b019301910190916142e4565b806144806144b4926107e0880151611144565b511580156108408801526144b95761449c61082087015161468c565b6108608701525b61086086015161082087015261111f565b613a2d565b6108208601516108608701526144a3565b6000906146a1565b60405163100960cb60e01b8152602e6004820152602490fd5b61455f9060018060a01b0380614505836020880151611144565b51166107a088015260016107c0880151528160406107c0890151015261078087015151614531816108fa565b61453a816108fa565b61456f576107a08701511633145b15614564576107c08601515b61078087015261111f565b6139b3565b610780860151614554565b506000614548565b60405163100960cb60e01b8152602d6004820152602490fd5b60405163100960cb60e01b8152602c6004820152602490fd5b61461d9060018060a01b03806145c3836020880151611144565b51166107208801526001610740880151528160406107408901510152610700870151516145ef816108fa565b6145f8816108fa565b61462d576107208701511633145b15614622576107408601515b61070087015261111f565b61396f565b610700860151614612565b506000614606565b60405163100960cb60e01b815260176004820152602490fd5b90506001541438611731565b60405163100960cb60e01b815260166004820152602490fd5b60405163100960cb60e01b815260156004820152602490fd5b90600182019182811161112e578210610da557565b91906040516146af81610a46565b6060368237809360005b600381106146d25750506001916146cf91611144565b52565b806146e06146ed9284611144565b5115156137378286611144565b6146b9565b6000915b6003831061470357505050565b60019082511515815260208091019201920191906146f6565b818110614727575050565b6000815560010161471c56fe405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acec3d6b5cd189c204b08dae639bc4a3071503a84ef5b28c1bc84fda381441a6ec2a164736f6c6343000810000a`,
  BytecodeLen: 21958,
  version: 9,
  views: {
    }
  };
export const _stateSourceMap = {
  2: {
    at: './claim.rsh:177:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './claim.rsh:86:19:after expr stmt semicolon',
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
