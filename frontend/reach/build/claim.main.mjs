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
      const [v2195, v2196, v2197, v2198, v2199, v2200, v2201, v2202, v2209, v2243, v2292, v2295, v2296, v2297, v2298] = svs;
      return (await ((async () => {
        
        
        return v2197;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _addressesOracles = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v2195, v2196, v2197, v2198, v2199, v2200, v2201, v2202, v2209, v2243, v2292, v2295, v2296, v2297, v2298] = svs;
      return (await ((async () => {
        
        
        return v2196;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _author = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v2195, v2196, v2197, v2198, v2199, v2200, v2201, v2202, v2209, v2243, v2292, v2295, v2296, v2297, v2298] = svs;
      return (await ((async () => {
        
        
        return v2195;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _deadline = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v2195, v2196, v2197, v2198, v2199, v2200, v2201, v2202, v2209, v2243, v2292, v2295, v2296, v2297, v2298] = svs;
      return (await ((async () => {
        
        
        return v2201;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _interaction = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v2195, v2196, v2197, v2198, v2199, v2200, v2201, v2202, v2209, v2243, v2292, v2295, v2296, v2297, v2298] = svs;
      return (await ((async () => {
        
        
        return v2198;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _isBottom = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v2195, v2196, v2197, v2198, v2199, v2200, v2201, v2202, v2209, v2243, v2292, v2295, v2296, v2297, v2298] = svs;
      return (await ((async () => {
        
        
        return v2202;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _participants = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v2195, v2196, v2197, v2198, v2199, v2200, v2201, v2202, v2209, v2243, v2292, v2295, v2296, v2297, v2298] = svs;
      return (await ((async () => {
        
        
        return v2296;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _wagerDown = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v2195, v2196, v2197, v2198, v2199, v2200, v2201, v2202, v2209, v2243, v2292, v2295, v2296, v2297, v2298] = svs;
      return (await ((async () => {
        
        
        return v2200;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _wagerUp = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v2195, v2196, v2197, v2198, v2199, v2200, v2201, v2202, v2209, v2243, v2292, v2295, v2296, v2297, v2298] = svs;
      return (await ((async () => {
        
        
        return v2199;}))(...args));
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
      3: [ctc0, ctc1, ctc3, ctc4, ctc5, ctc5, ctc5, ctc6, ctc6, ctc8, ctc9, ctc5, ctc11, ctc12, ctc14]
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
    Oracle_addParticipant0_428: ctc8,
    Oracle_announceVerification0_428: ctc9,
    Oracle_announceWinner0_428: ctc10,
    Oracle_correctContract0_428: ctc11
    });
  const ctc13 = stdlib.T_Data({
    None: ctc0,
    Some: ctc8
    });
  const ctc14 = stdlib.T_Data({
    None: ctc0,
    Some: ctc6
    });
  
  
  const v2175 = stdlib.protect(ctc2, interact.addressSkeptic, 'for Alice\'s interact field addressSkeptic');
  const v2178 = stdlib.protect(ctc3, interact.addressesOracles, 'for Alice\'s interact field addressesOracles');
  const v2184 = stdlib.protect(ctc4, interact.deadline, 'for Alice\'s interact field deadline');
  const v2185 = stdlib.protect(ctc5, interact.interaction, 'for Alice\'s interact field interaction');
  const v2186 = stdlib.protect(ctc6, interact.isBottom, 'for Alice\'s interact field isBottom');
  const v2187 = stdlib.protect(ctc4, interact.wagerDown, 'for Alice\'s interact field wagerDown');
  const v2188 = stdlib.protect(ctc4, interact.wagerUp, 'for Alice\'s interact field wagerUp');
  
  const v2191 = stdlib.eq(v2187, stdlib.checkedBigNumberify('./claim.rsh:58:43:decimal', stdlib.UInt_max, '0'));
  const v2193 = v2186 ? v2191 : true;
  stdlib.assert(v2193, {
    at: './claim.rsh:58:11:application',
    fs: ['at ./claim.rsh:50:9:application call to [unknown function] (defined at: ./claim.rsh:50:13:function exp)'],
    msg: null,
    who: 'Alice'
    });
  
  const v2194 = stdlib.safeAdd(v2188, v2187);
  
  const txn1 = await (ctc.sendrecv({
    args: [v2178, v2175, v2185, v2188, v2187, v2184, v2186],
    evt_cnt: 7,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./claim.rsh:61:5:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc3, ctc2, ctc5, ctc4, ctc4, ctc4, ctc6],
    pay: [v2194, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v2196, v2197, v2198, v2199, v2200, v2201, v2202], secs: v2204, time: v2203, didSend: v58, from: v2195 } = txn1;
      
      const v2205 = stdlib.safeAdd(v2199, v2200);
      sim_r.txns.push({
        amt: v2205,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v2209 = v2202 ? false : true;
      const v2219 = [false, false, false, false, false];
      const v2221 = ['None', null];
      const v2242 = await ctc.getContractInfo();
      const v2243 = [v2195, v2242];
      const v2244 = ['Some', v2243];
      const v2254 = [v2244, v2221, v2221, v2221, v2221, v2221, v2221, v2221, v2221, v2221];
      const v2256 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
      const v2260 = ['None', null];
      const v2270 = [v2260, v2260, v2260, v2260, v2260];
      const v2292 = v2219;
      const v2293 = false;
      const v2295 = stdlib.checkedBigNumberify('./claim.rsh:88:23:decimal', stdlib.UInt_max, '1');
      const v2296 = v2254;
      const v2297 = v2256;
      const v2298 = v2270;
      const v2299 = v2203;
      
      if (await (async () => {
        const v2458 = v2293 ? false : true;
        
        return v2458;})()) {
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
  const {data: [v2196, v2197, v2198, v2199, v2200, v2201, v2202], secs: v2204, time: v2203, didSend: v58, from: v2195 } = txn1;
  const v2205 = stdlib.safeAdd(v2199, v2200);
  ;
  const v2208 = stdlib.eq(v2200, stdlib.checkedBigNumberify('./claim.rsh:63:42:decimal', stdlib.UInt_max, '0'));
  const v2209 = v2202 ? false : true;
  const v2210 = v2202 ? v2208 : true;
  stdlib.assert(v2210, {
    at: './claim.rsh:63:10:application',
    fs: [],
    msg: null,
    who: 'Alice'
    });
  const v2219 = [false, false, false, false, false];
  const v2221 = ['None', null];
  const v2242 = await ctc.getContractInfo();
  const v2243 = [v2195, v2242];
  const v2244 = ['Some', v2243];
  const v2254 = [v2244, v2221, v2221, v2221, v2221, v2221, v2221, v2221, v2221, v2221];
  const v2256 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
  const v2260 = ['None', null];
  const v2270 = [v2260, v2260, v2260, v2260, v2260];
  let v2292 = v2219;
  let v2293 = false;
  let v2295 = stdlib.checkedBigNumberify('./claim.rsh:88:23:decimal', stdlib.UInt_max, '1');
  let v2296 = v2254;
  let v2297 = v2256;
  let v2298 = v2270;
  let v2299 = v2203;
  
  let txn2 = txn1;
  while (await (async () => {
    const v2458 = v2293 ? false : true;
    
    return v2458;})()) {
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 2,
      out_tys: [ctc12],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v2736], secs: v2738, time: v2737, didSend: v1709, from: v2735 } = txn3;
    switch (v2736[0]) {
      case 'Oracle_addParticipant0_428': {
        const v2739 = v2736[1];
        undefined /* setApiDetails */;
        const v2744 = v2739[stdlib.checkedBigNumberify('./claim.rsh:110:10:spread', stdlib.UInt_max, '0')];
        const v2745 = v2739[stdlib.checkedBigNumberify('./claim.rsh:110:10:spread', stdlib.UInt_max, '1')];
        const v2746 = ['None', null];
        const v2747 = await stdlib.Array_asyncReduce([v2196], v2746, async([v2749], v2748, v2750) => {
          const v2751 = {
            None: 0,
            Some: 1
            }[v2748[0]];
          const v2752 = stdlib.eq(v2751, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
          const v2753 = stdlib.addressEq(v2749, v2735);
          const v2754 = v2752 ? v2753 : false;
          const v2755 = ['Some', v2750];
          const v2756 = v2754 ? v2755 : v2748;
          
          return v2756;})
        const v2757 = {
          None: 0,
          Some: 1
          }[v2747[0]];
        const v2758 = stdlib.eq(v2757, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        stdlib.assert(v2758, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./claim.rsh:112:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./claim.rsh:110:54:application call to [unknown function] (defined at: ./claim.rsh:110:54:function exp)', 'at ./claim.rsh:86:19:application call to [unknown function] (defined at: ./claim.rsh:110:54:function exp)', 'at ./claim.rsh:86:19:application call to [unknown function] (defined at: ./claim.rsh:86:19:function exp)'],
          msg: 'You are not an oracle',
          who: 'Alice'
          });
        const v2760 = stdlib.lt(v2295, stdlib.checkedBigNumberify('./claim.rsh:3:25:decimal', stdlib.UInt_max, '10'));
        stdlib.assert(v2760, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./claim.rsh:113:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./claim.rsh:110:54:application call to [unknown function] (defined at: ./claim.rsh:110:54:function exp)', 'at ./claim.rsh:86:19:application call to [unknown function] (defined at: ./claim.rsh:110:54:function exp)', 'at ./claim.rsh:86:19:application call to [unknown function] (defined at: ./claim.rsh:86:19:function exp)'],
          msg: 'Too many participants',
          who: 'Alice'
          });
        stdlib.assert(v2209, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./claim.rsh:114:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./claim.rsh:110:54:application call to [unknown function] (defined at: ./claim.rsh:110:54:function exp)', 'at ./claim.rsh:86:19:application call to [unknown function] (defined at: ./claim.rsh:110:54:function exp)', 'at ./claim.rsh:86:19:application call to [unknown function] (defined at: ./claim.rsh:86:19:function exp)'],
          msg: 'Cannot challenge a bottom claim',
          who: 'Alice'
          });
        const v2764 = await stdlib.Array_asyncReduce([v2296], false, async([v2766], v2765, v2767) => {
          const v2768 = [v2744, v2745];
          const v2769 = ['Some', v2768];
          const v2772 = stdlib.digest([ctc13], [v2769]);
          const v2773 = stdlib.digest([ctc13], [v2766]);
          const v2774 = stdlib.digestEq(v2772, v2773);
          const v2776 = v2765 ? v2765 : v2774;
          
          return v2776;})
        const v2777 = v2764 ? false : true;
        stdlib.assert(v2777, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./claim.rsh:116:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./claim.rsh:110:54:application call to [unknown function] (defined at: ./claim.rsh:110:54:function exp)', 'at ./claim.rsh:86:19:application call to [unknown function] (defined at: ./claim.rsh:110:54:function exp)', 'at ./claim.rsh:86:19:application call to [unknown function] (defined at: ./claim.rsh:86:19:function exp)'],
          msg: 'It is already a participant',
          who: 'Alice'
          });
        ;
        const v2840 = await stdlib.Array_asyncReduce([v2196], v2746, async([v2842], v2841, v2843) => {
          const v2844 = {
            None: 0,
            Some: 1
            }[v2841[0]];
          const v2845 = stdlib.eq(v2844, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
          const v2846 = stdlib.addressEq(v2842, v2735);
          const v2847 = v2845 ? v2846 : false;
          const v2848 = ['Some', v2843];
          const v2849 = v2847 ? v2848 : v2841;
          
          return v2849;})
        const v2850 = {
          None: 0,
          Some: 1
          }[v2840[0]];
        const v2851 = stdlib.eq(v2850, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        stdlib.assert(v2851, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./claim.rsh:112:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./claim.rsh:117:25:application call to [unknown function] (defined at: ./claim.rsh:117:25:function exp)'],
          msg: 'You are not an oracle',
          who: 'Alice'
          });
        const v2857 = await stdlib.Array_asyncReduce([v2296], false, async([v2859], v2858, v2860) => {
          const v2861 = [v2744, v2745];
          const v2862 = ['Some', v2861];
          const v2865 = stdlib.digest([ctc13], [v2862]);
          const v2866 = stdlib.digest([ctc13], [v2859]);
          const v2867 = stdlib.digestEq(v2865, v2866);
          const v2869 = v2858 ? v2858 : v2867;
          
          return v2869;})
        const v2870 = v2857 ? false : true;
        stdlib.assert(v2870, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./claim.rsh:116:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./claim.rsh:117:25:application call to [unknown function] (defined at: ./claim.rsh:117:25:function exp)'],
          msg: 'It is already a participant',
          who: 'Alice'
          });
        const v2874 = [v2744, v2745];
        const v2875 = ['Some', v2874];
        const v2877 = stdlib.Array_set(v2296, v2295, v2875);
        null;
        const v2878 = null;
        await txn3.getOutput('Oracle_addParticipant', 'v2878', ctc0, v2878);
        const v2886 = stdlib.safeAdd(v2295, stdlib.checkedBigNumberify('./claim.rsh:121:57:decimal', stdlib.UInt_max, '1'));
        const cv2292 = v2292;
        const cv2293 = false;
        const cv2295 = v2886;
        const cv2296 = v2877;
        const cv2297 = v2297;
        const cv2298 = v2298;
        const cv2299 = v2737;
        
        v2292 = cv2292;
        v2293 = cv2293;
        v2295 = cv2295;
        v2296 = cv2296;
        v2297 = cv2297;
        v2298 = cv2298;
        v2299 = cv2299;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'Oracle_announceVerification0_428': {
        const v3039 = v2736[1];
        undefined /* setApiDetails */;
        const v3081 = ['None', null];
        const v3082 = await stdlib.Array_asyncReduce([v2196], v3081, async([v3084], v3083, v3085) => {
          const v3086 = {
            None: 0,
            Some: 1
            }[v3083[0]];
          const v3087 = stdlib.eq(v3086, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
          const v3088 = stdlib.addressEq(v3084, v2735);
          const v3089 = v3087 ? v3088 : false;
          const v3090 = ['Some', v3085];
          const v3091 = v3089 ? v3090 : v3083;
          
          return v3091;})
        const v3092 = {
          None: 0,
          Some: 1
          }[v3082[0]];
        const v3093 = stdlib.eq(v3092, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        stdlib.assert(v3093, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./claim.rsh:149:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./claim.rsh:147:51:application call to [unknown function] (defined at: ./claim.rsh:147:51:function exp)', 'at ./claim.rsh:86:19:application call to [unknown function] (defined at: ./claim.rsh:147:51:function exp)', 'at ./claim.rsh:86:19:application call to [unknown function] (defined at: ./claim.rsh:86:19:function exp)'],
          msg: 'You are not an oracle',
          who: 'Alice'
          });
        stdlib.assert(v2202, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./claim.rsh:150:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./claim.rsh:147:51:application call to [unknown function] (defined at: ./claim.rsh:147:51:function exp)', 'at ./claim.rsh:86:19:application call to [unknown function] (defined at: ./claim.rsh:147:51:function exp)', 'at ./claim.rsh:86:19:application call to [unknown function] (defined at: ./claim.rsh:86:19:function exp)'],
          msg: 'Can only announce formal verification if it is bottom.',
          who: 'Alice'
          });
        ;
        const v3189 = v3039[stdlib.checkedBigNumberify('./claim.rsh:147:10:spread', stdlib.UInt_max, '0')];
        const v3191 = await stdlib.Array_asyncReduce([v2196], v3081, async([v3193], v3192, v3194) => {
          const v3195 = {
            None: 0,
            Some: 1
            }[v3192[0]];
          const v3196 = stdlib.eq(v3195, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
          const v3197 = stdlib.addressEq(v3193, v2735);
          const v3198 = v3196 ? v3197 : false;
          const v3199 = ['Some', v3194];
          const v3200 = v3198 ? v3199 : v3192;
          
          return v3200;})
        const v3201 = {
          None: 0,
          Some: 1
          }[v3191[0]];
        const v3202 = stdlib.eq(v3201, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        stdlib.assert(v3202, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./claim.rsh:149:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./claim.rsh:151:25:application call to [unknown function] (defined at: ./claim.rsh:151:25:function exp)'],
          msg: 'You are not an oracle',
          who: 'Alice'
          });
        const v3206 = stdlib.fromSome(v3191, stdlib.checkedBigNumberify('./claim.rsh:152:67:decimal', stdlib.UInt_max, '0'));
        const v3207 = ['Some', v3189];
        const v3209 = stdlib.Array_set(v2298, v3206, v3207);
        const v3210 = await stdlib.Array_asyncReduce([v3209], stdlib.checkedBigNumberify('reach standard library:170:22:decimal', stdlib.UInt_max, '0'), async([v3212], v3211, v3213) => {
          const v3215 = stdlib.digest([ctc14], [v3212]);
          const v3217 = stdlib.digest([ctc14], [v3207]);
          const v3218 = stdlib.digestEq(v3215, v3217);
          let v3219;
          if (v3218) {
            const v3220 = stdlib.safeAdd(v3211, stdlib.checkedBigNumberify('reach standard library:171:18:decimal', stdlib.UInt_max, '1'));
            v3219 = v3220;
            }
          else {
            v3219 = v3211;
            }
          
          return v3219;})
        const v3221 = stdlib.eq(v3210, stdlib.checkedBigNumberify('./claim.rsh:7:38:application', stdlib.UInt_max, '3'));
        if (v3221) {
          null;
          const v3222 = stdlib.fromSome(v2197, v2195);
          const v3223 = v3189 ? v2195 : v3222;
          ;
          const v3228 = null;
          await txn3.getOutput('Oracle_announceVerification', 'v3228', ctc0, v3228);
          const cv2292 = v2292;
          const cv2293 = true;
          const cv2295 = v2295;
          const cv2296 = v2296;
          const cv2297 = v2297;
          const cv2298 = v3209;
          const cv2299 = v2737;
          
          v2292 = cv2292;
          v2293 = cv2293;
          v2295 = cv2295;
          v2296 = cv2296;
          v2297 = cv2297;
          v2298 = cv2298;
          v2299 = cv2299;
          
          txn2 = txn3;
          continue;}
        else {
          const v3236 = null;
          await txn3.getOutput('Oracle_announceVerification', 'v3236', ctc0, v3236);
          const cv2292 = v2292;
          const cv2293 = false;
          const cv2295 = v2295;
          const cv2296 = v2296;
          const cv2297 = v2297;
          const cv2298 = v3209;
          const cv2299 = v2737;
          
          v2292 = cv2292;
          v2293 = cv2293;
          v2295 = cv2295;
          v2296 = cv2296;
          v2297 = cv2297;
          v2298 = cv2298;
          v2299 = cv2299;
          
          txn2 = txn3;
          continue;}
        break;
        }
      case 'Oracle_announceWinner0_428': {
        const v3339 = v2736[1];
        undefined /* setApiDetails */;
        const v3397 = v3339[stdlib.checkedBigNumberify('./claim.rsh:125:10:spread', stdlib.UInt_max, '0')];
        const v3398 = ['None', null];
        const v3399 = await stdlib.Array_asyncReduce([v2196], v3398, async([v3401], v3400, v3402) => {
          const v3403 = {
            None: 0,
            Some: 1
            }[v3400[0]];
          const v3404 = stdlib.eq(v3403, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
          const v3405 = stdlib.addressEq(v3401, v2735);
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
          fs: ['at ./claim.rsh:127:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./claim.rsh:125:48:application call to [unknown function] (defined at: ./claim.rsh:125:48:function exp)', 'at ./claim.rsh:86:19:application call to [unknown function] (defined at: ./claim.rsh:125:48:function exp)', 'at ./claim.rsh:86:19:application call to [unknown function] (defined at: ./claim.rsh:86:19:function exp)'],
          msg: 'You are not an oracle',
          who: 'Alice'
          });
        const v3412 = stdlib.fromSome(v3399, stdlib.checkedBigNumberify('./claim.rsh:128:49:decimal', stdlib.UInt_max, '0'));
        const v3414 = v2292[v3412];
        const v3415 = v3414 ? false : true;
        stdlib.assert(v3415, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./claim.rsh:128:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./claim.rsh:125:48:application call to [unknown function] (defined at: ./claim.rsh:125:48:function exp)', 'at ./claim.rsh:86:19:application call to [unknown function] (defined at: ./claim.rsh:125:48:function exp)', 'at ./claim.rsh:86:19:application call to [unknown function] (defined at: ./claim.rsh:86:19:function exp)'],
          msg: 'You already declared a winner',
          who: 'Alice'
          });
        const v3417 = stdlib.lt(v3397, v2295);
        stdlib.assert(v3417, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./claim.rsh:129:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./claim.rsh:125:48:application call to [unknown function] (defined at: ./claim.rsh:125:48:function exp)', 'at ./claim.rsh:86:19:application call to [unknown function] (defined at: ./claim.rsh:125:48:function exp)', 'at ./claim.rsh:86:19:application call to [unknown function] (defined at: ./claim.rsh:86:19:function exp)'],
          msg: 'This participant does not exist.',
          who: 'Alice'
          });
        stdlib.assert(v2209, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./claim.rsh:130:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./claim.rsh:125:48:application call to [unknown function] (defined at: ./claim.rsh:125:48:function exp)', 'at ./claim.rsh:86:19:application call to [unknown function] (defined at: ./claim.rsh:125:48:function exp)', 'at ./claim.rsh:86:19:application call to [unknown function] (defined at: ./claim.rsh:86:19:function exp)'],
          msg: 'Can only announce verification.',
          who: 'Alice'
          });
        ;
        const v3547 = await stdlib.Array_asyncReduce([v2196], v3398, async([v3549], v3548, v3550) => {
          const v3551 = {
            None: 0,
            Some: 1
            }[v3548[0]];
          const v3552 = stdlib.eq(v3551, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
          const v3553 = stdlib.addressEq(v3549, v2735);
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
          fs: ['at ./claim.rsh:127:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./claim.rsh:131:25:application call to [unknown function] (defined at: ./claim.rsh:131:25:function exp)'],
          msg: 'You are not an oracle',
          who: 'Alice'
          });
        const v3560 = stdlib.fromSome(v3547, stdlib.checkedBigNumberify('./claim.rsh:128:49:decimal', stdlib.UInt_max, '0'));
        const v3562 = v2292[v3560];
        const v3563 = v3562 ? false : true;
        stdlib.assert(v3563, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./claim.rsh:128:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./claim.rsh:131:25:application call to [unknown function] (defined at: ./claim.rsh:131:25:function exp)'],
          msg: 'You already declared a winner',
          who: 'Alice'
          });
        const v3572 = stdlib.Array_set(v2292, v3560, true);
        const v3574 = v2297[v3397];
        const v3575 = stdlib.safeAdd(v3574, stdlib.checkedBigNumberify('./claim.rsh:133:48:decimal', stdlib.UInt_max, '1'));
        const v3577 = stdlib.Array_set(v2297, v3397, v3575);
        const v3578 = stdlib.eq(v3575, stdlib.checkedBigNumberify('./claim.rsh:7:38:application', stdlib.UInt_max, '3'));
        if (v3578) {
          const v3580 = v2296[v3397];
          const v3583 = stdlib.fromSome(v3580, v2243);
          const v3584 = v3583[stdlib.checkedBigNumberify('./claim.rsh:138:34:array ref', stdlib.UInt_max, '0')];
          const v3585 = v3583[stdlib.checkedBigNumberify('./claim.rsh:138:45:array ref', stdlib.UInt_max, '1')];
          null;
          ;
          const v3591 = stdlib.eq(v3397, stdlib.checkedBigNumberify('./claim.rsh:140:47:decimal', stdlib.UInt_max, '0'));
          const v3592 = stdlib.fromSome(v2197, v2195);
          const v3593 = v3591 ? v2195 : v3592;
          ;
          const v3598 = null;
          await txn3.getOutput('Oracle_announceWinner', 'v3598', ctc0, v3598);
          const cv2292 = v3572;
          const cv2293 = true;
          const cv2295 = v2295;
          const cv2296 = v2296;
          const cv2297 = v3577;
          const cv2298 = v2298;
          const cv2299 = v2737;
          
          v2292 = cv2292;
          v2293 = cv2293;
          v2295 = cv2295;
          v2296 = cv2296;
          v2297 = cv2297;
          v2298 = cv2298;
          v2299 = cv2299;
          
          txn2 = txn3;
          continue;}
        else {
          const v3606 = null;
          await txn3.getOutput('Oracle_announceWinner', 'v3606', ctc0, v3606);
          const cv2292 = v3572;
          const cv2293 = false;
          const cv2295 = v2295;
          const cv2296 = v2296;
          const cv2297 = v3577;
          const cv2298 = v2298;
          const cv2299 = v2737;
          
          v2292 = cv2292;
          v2293 = cv2293;
          v2295 = cv2295;
          v2296 = cv2296;
          v2297 = cv2297;
          v2298 = cv2298;
          v2299 = cv2299;
          
          txn2 = txn3;
          continue;}
        break;
        }
      case 'Oracle_correctContract0_428': {
        const v3639 = v2736[1];
        undefined /* setApiDetails */;
        const v3722 = ['None', null];
        const v3723 = await stdlib.Array_asyncReduce([v2196], v3722, async([v3725], v3724, v3726) => {
          const v3727 = {
            None: 0,
            Some: 1
            }[v3724[0]];
          const v3728 = stdlib.eq(v3727, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
          const v3729 = stdlib.addressEq(v3725, v2735);
          const v3730 = v3728 ? v3729 : false;
          const v3731 = ['Some', v3726];
          const v3732 = v3730 ? v3731 : v3724;
          
          return v3732;})
        const v3733 = {
          None: 0,
          Some: 1
          }[v3723[0]];
        const v3734 = stdlib.eq(v3733, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        stdlib.assert(v3734, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./claim.rsh:102:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./claim.rsh:100:38:application call to [unknown function] (defined at: ./claim.rsh:100:38:function exp)', 'at ./claim.rsh:86:19:application call to [unknown function] (defined at: ./claim.rsh:100:38:function exp)', 'at ./claim.rsh:86:19:application call to [unknown function] (defined at: ./claim.rsh:86:19:function exp)'],
          msg: 'You are not an oracle',
          who: 'Alice'
          });
        ;
        const v3916 = await stdlib.Array_asyncReduce([v2196], v3722, async([v3918], v3917, v3919) => {
          const v3920 = {
            None: 0,
            Some: 1
            }[v3917[0]];
          const v3921 = stdlib.eq(v3920, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
          const v3922 = stdlib.addressEq(v3918, v2735);
          const v3923 = v3921 ? v3922 : false;
          const v3924 = ['Some', v3919];
          const v3925 = v3923 ? v3924 : v3917;
          
          return v3925;})
        const v3926 = {
          None: 0,
          Some: 1
          }[v3916[0]];
        const v3927 = stdlib.eq(v3926, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
        stdlib.assert(v3927, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./claim.rsh:102:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./claim.rsh:103:25:application call to [unknown function] (defined at: ./claim.rsh:103:25:function exp)'],
          msg: 'You are not an oracle',
          who: 'Alice'
          });
        null;
        const v3929 = null;
        await txn3.getOutput('Oracle_correctContract', 'v3929', ctc0, v3929);
        const cv2292 = v2292;
        const cv2293 = false;
        const cv2295 = v2295;
        const cv2296 = v2296;
        const cv2297 = v2297;
        const cv2298 = v2298;
        const cv2299 = v2737;
        
        v2292 = cv2292;
        v2293 = cv2293;
        v2295 = cv2295;
        v2296 = cv2296;
        v2297 = cv2297;
        v2298 = cv2298;
        v2299 = cv2299;
        
        txn2 = txn3;
        continue;
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
    Oracle_addParticipant0_428: ctc8,
    Oracle_announceVerification0_428: ctc15,
    Oracle_announceWinner0_428: ctc16,
    Oracle_correctContract0_428: ctc17
    });
  
  
  const [v2195, v2196, v2197, v2198, v2199, v2200, v2201, v2202, v2209, v2243, v2292, v2295, v2296, v2297, v2298] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc0, ctc1, ctc3, ctc4, ctc5, ctc5, ctc5, ctc6, ctc6, ctc8, ctc9, ctc5, ctc11, ctc12, ctc14]);
  const v2531 = ctc.selfAddress();
  const v2533 = stdlib.protect(ctc8, await interact.in(), {
    at: './claim.rsh:1:23:application',
    fs: ['at ./claim.rsh:110:54:application call to [unknown function] (defined at: ./claim.rsh:110:54:function exp)', 'at ./claim.rsh:86:19:application call to "runOracle_addParticipant0_428" (defined at: ./claim.rsh:110:10:function exp)', 'at ./claim.rsh:86:19:application call to [unknown function] (defined at: ./claim.rsh:86:19:function exp)'],
    msg: 'in',
    who: 'Oracle_addParticipant'
    });
  const v2534 = v2533[stdlib.checkedBigNumberify('./claim.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v2535 = v2533[stdlib.checkedBigNumberify('./claim.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v2538 = ['None', null];
  const v2539 = await stdlib.Array_asyncReduce([v2196], v2538, async([v2541], v2540, v2542) => {
    const v2543 = {
      None: 0,
      Some: 1
      }[v2540[0]];
    const v2544 = stdlib.eq(v2543, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
    const v2545 = stdlib.addressEq(v2541, v2531);
    const v2546 = v2544 ? v2545 : false;
    const v2547 = ['Some', v2542];
    const v2548 = v2546 ? v2547 : v2540;
    
    return v2548;})
  const v2549 = {
    None: 0,
    Some: 1
    }[v2539[0]];
  const v2550 = stdlib.eq(v2549, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v2550, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./claim.rsh:112:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./claim.rsh:110:54:application call to [unknown function] (defined at: ./claim.rsh:110:54:function exp)', 'at ./claim.rsh:86:19:application call to "runOracle_addParticipant0_428" (defined at: ./claim.rsh:110:10:function exp)', 'at ./claim.rsh:86:19:application call to [unknown function] (defined at: ./claim.rsh:86:19:function exp)'],
    msg: 'You are not an oracle',
    who: 'Oracle_addParticipant'
    });
  const v2552 = stdlib.lt(v2295, stdlib.checkedBigNumberify('./claim.rsh:3:25:decimal', stdlib.UInt_max, '10'));
  stdlib.assert(v2552, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./claim.rsh:113:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./claim.rsh:110:54:application call to [unknown function] (defined at: ./claim.rsh:110:54:function exp)', 'at ./claim.rsh:86:19:application call to "runOracle_addParticipant0_428" (defined at: ./claim.rsh:110:10:function exp)', 'at ./claim.rsh:86:19:application call to [unknown function] (defined at: ./claim.rsh:86:19:function exp)'],
    msg: 'Too many participants',
    who: 'Oracle_addParticipant'
    });
  stdlib.assert(v2209, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./claim.rsh:114:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./claim.rsh:110:54:application call to [unknown function] (defined at: ./claim.rsh:110:54:function exp)', 'at ./claim.rsh:86:19:application call to "runOracle_addParticipant0_428" (defined at: ./claim.rsh:110:10:function exp)', 'at ./claim.rsh:86:19:application call to [unknown function] (defined at: ./claim.rsh:86:19:function exp)'],
    msg: 'Cannot challenge a bottom claim',
    who: 'Oracle_addParticipant'
    });
  const v2556 = await stdlib.Array_asyncReduce([v2296], false, async([v2558], v2557, v2559) => {
    const v2560 = [v2534, v2535];
    const v2561 = ['Some', v2560];
    const v2564 = stdlib.digest([ctc10], [v2561]);
    const v2565 = stdlib.digest([ctc10], [v2558]);
    const v2566 = stdlib.digestEq(v2564, v2565);
    const v2568 = v2557 ? v2557 : v2566;
    
    return v2568;})
  const v2569 = v2556 ? false : true;
  stdlib.assert(v2569, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./claim.rsh:116:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./claim.rsh:110:54:application call to [unknown function] (defined at: ./claim.rsh:110:54:function exp)', 'at ./claim.rsh:86:19:application call to "runOracle_addParticipant0_428" (defined at: ./claim.rsh:110:10:function exp)', 'at ./claim.rsh:86:19:application call to [unknown function] (defined at: ./claim.rsh:86:19:function exp)'],
    msg: 'It is already a participant',
    who: 'Oracle_addParticipant'
    });
  const v2578 = ['Oracle_addParticipant0_428', v2533];
  
  const v2646 = await stdlib.Array_asyncReduce([v2196], v2538, async([v2648], v2647, v2649) => {
    const v2650 = {
      None: 0,
      Some: 1
      }[v2647[0]];
    const v2651 = stdlib.eq(v2650, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
    const v2652 = stdlib.addressEq(v2648, v2531);
    const v2653 = v2651 ? v2652 : false;
    const v2654 = ['Some', v2649];
    const v2655 = v2653 ? v2654 : v2647;
    
    return v2655;})
  const v2656 = {
    None: 0,
    Some: 1
    }[v2646[0]];
  const v2657 = stdlib.eq(v2656, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v2657, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./claim.rsh:112:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./claim.rsh:110:54:application call to [unknown function] (defined at: ./claim.rsh:110:54:function exp)', 'at ./claim.rsh:86:19:application call to [unknown function] (defined at: ./claim.rsh:110:54:function exp)', 'at ./claim.rsh:86:19:application call to [unknown function] (defined at: ./claim.rsh:86:19:function exp)'],
    msg: 'You are not an oracle',
    who: 'Oracle_addParticipant'
    });
  const v2663 = await stdlib.Array_asyncReduce([v2296], false, async([v2665], v2664, v2666) => {
    const v2667 = [v2534, v2535];
    const v2668 = ['Some', v2667];
    const v2671 = stdlib.digest([ctc10], [v2668]);
    const v2672 = stdlib.digest([ctc10], [v2665]);
    const v2673 = stdlib.digestEq(v2671, v2672);
    const v2675 = v2664 ? v2664 : v2673;
    
    return v2675;})
  const v2676 = v2663 ? false : true;
  stdlib.assert(v2676, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./claim.rsh:116:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./claim.rsh:110:54:application call to [unknown function] (defined at: ./claim.rsh:110:54:function exp)', 'at ./claim.rsh:86:19:application call to [unknown function] (defined at: ./claim.rsh:110:54:function exp)', 'at ./claim.rsh:86:19:application call to [unknown function] (defined at: ./claim.rsh:86:19:function exp)'],
    msg: 'It is already a participant',
    who: 'Oracle_addParticipant'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v2195, v2196, v2197, v2198, v2199, v2200, v2201, v2202, v2209, v2243, v2292, v2295, v2296, v2297, v2298, v2578],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc18],
    pay: [stdlib.checkedBigNumberify('./claim.rsh:117:16:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v2736], secs: v2738, time: v2737, didSend: v1709, from: v2735 } = txn1;
      
      switch (v2736[0]) {
        case 'Oracle_addParticipant0_428': {
          const v2739 = v2736[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Oracle_addParticipant"
            });
          const v2744 = v2739[stdlib.checkedBigNumberify('./claim.rsh:110:10:spread', stdlib.UInt_max, '0')];
          const v2745 = v2739[stdlib.checkedBigNumberify('./claim.rsh:110:10:spread', stdlib.UInt_max, '1')];
          ;
          const v2874 = [v2744, v2745];
          const v2875 = ['Some', v2874];
          const v2877 = stdlib.Array_set(v2296, v2295, v2875);
          null;
          const v2878 = null;
          const v2879 = await txn1.getOutput('Oracle_addParticipant', 'v2878', ctc2, v2878);
          
          const v2886 = stdlib.safeAdd(v2295, stdlib.checkedBigNumberify('./claim.rsh:121:57:decimal', stdlib.UInt_max, '1'));
          const v6626 = v2292;
          const v6628 = v2886;
          const v6629 = v2877;
          const v6630 = v2297;
          const v6631 = v2298;
          sim_r.isHalt = false;
          
          break;
          }
        case 'Oracle_announceVerification0_428': {
          const v3039 = v2736[1];
          
          break;
          }
        case 'Oracle_announceWinner0_428': {
          const v3339 = v2736[1];
          
          break;
          }
        case 'Oracle_correctContract0_428': {
          const v3639 = v2736[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc3, ctc4, ctc5, ctc5, ctc5, ctc6, ctc6, ctc8, ctc9, ctc5, ctc11, ctc12, ctc14, ctc18],
    waitIfNotPresent: false
    }));
  const {data: [v2736], secs: v2738, time: v2737, didSend: v1709, from: v2735 } = txn1;
  switch (v2736[0]) {
    case 'Oracle_addParticipant0_428': {
      const v2739 = v2736[1];
      undefined /* setApiDetails */;
      const v2744 = v2739[stdlib.checkedBigNumberify('./claim.rsh:110:10:spread', stdlib.UInt_max, '0')];
      const v2745 = v2739[stdlib.checkedBigNumberify('./claim.rsh:110:10:spread', stdlib.UInt_max, '1')];
      const v2746 = ['None', null];
      const v2747 = await stdlib.Array_asyncReduce([v2196], v2746, async([v2749], v2748, v2750) => {
        const v2751 = {
          None: 0,
          Some: 1
          }[v2748[0]];
        const v2752 = stdlib.eq(v2751, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
        const v2753 = stdlib.addressEq(v2749, v2735);
        const v2754 = v2752 ? v2753 : false;
        const v2755 = ['Some', v2750];
        const v2756 = v2754 ? v2755 : v2748;
        
        return v2756;})
      const v2757 = {
        None: 0,
        Some: 1
        }[v2747[0]];
      const v2758 = stdlib.eq(v2757, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      stdlib.assert(v2758, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./claim.rsh:112:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./claim.rsh:110:54:application call to [unknown function] (defined at: ./claim.rsh:110:54:function exp)', 'at ./claim.rsh:86:19:application call to [unknown function] (defined at: ./claim.rsh:110:54:function exp)', 'at ./claim.rsh:86:19:application call to [unknown function] (defined at: ./claim.rsh:86:19:function exp)'],
        msg: 'You are not an oracle',
        who: 'Oracle_addParticipant'
        });
      const v2760 = stdlib.lt(v2295, stdlib.checkedBigNumberify('./claim.rsh:3:25:decimal', stdlib.UInt_max, '10'));
      stdlib.assert(v2760, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./claim.rsh:113:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./claim.rsh:110:54:application call to [unknown function] (defined at: ./claim.rsh:110:54:function exp)', 'at ./claim.rsh:86:19:application call to [unknown function] (defined at: ./claim.rsh:110:54:function exp)', 'at ./claim.rsh:86:19:application call to [unknown function] (defined at: ./claim.rsh:86:19:function exp)'],
        msg: 'Too many participants',
        who: 'Oracle_addParticipant'
        });
      stdlib.assert(v2209, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./claim.rsh:114:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./claim.rsh:110:54:application call to [unknown function] (defined at: ./claim.rsh:110:54:function exp)', 'at ./claim.rsh:86:19:application call to [unknown function] (defined at: ./claim.rsh:110:54:function exp)', 'at ./claim.rsh:86:19:application call to [unknown function] (defined at: ./claim.rsh:86:19:function exp)'],
        msg: 'Cannot challenge a bottom claim',
        who: 'Oracle_addParticipant'
        });
      const v2764 = await stdlib.Array_asyncReduce([v2296], false, async([v2766], v2765, v2767) => {
        const v2768 = [v2744, v2745];
        const v2769 = ['Some', v2768];
        const v2772 = stdlib.digest([ctc10], [v2769]);
        const v2773 = stdlib.digest([ctc10], [v2766]);
        const v2774 = stdlib.digestEq(v2772, v2773);
        const v2776 = v2765 ? v2765 : v2774;
        
        return v2776;})
      const v2777 = v2764 ? false : true;
      stdlib.assert(v2777, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./claim.rsh:116:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./claim.rsh:110:54:application call to [unknown function] (defined at: ./claim.rsh:110:54:function exp)', 'at ./claim.rsh:86:19:application call to [unknown function] (defined at: ./claim.rsh:110:54:function exp)', 'at ./claim.rsh:86:19:application call to [unknown function] (defined at: ./claim.rsh:86:19:function exp)'],
        msg: 'It is already a participant',
        who: 'Oracle_addParticipant'
        });
      ;
      const v2840 = await stdlib.Array_asyncReduce([v2196], v2746, async([v2842], v2841, v2843) => {
        const v2844 = {
          None: 0,
          Some: 1
          }[v2841[0]];
        const v2845 = stdlib.eq(v2844, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
        const v2846 = stdlib.addressEq(v2842, v2735);
        const v2847 = v2845 ? v2846 : false;
        const v2848 = ['Some', v2843];
        const v2849 = v2847 ? v2848 : v2841;
        
        return v2849;})
      const v2850 = {
        None: 0,
        Some: 1
        }[v2840[0]];
      const v2851 = stdlib.eq(v2850, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      stdlib.assert(v2851, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./claim.rsh:112:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./claim.rsh:117:25:application call to [unknown function] (defined at: ./claim.rsh:117:25:function exp)'],
        msg: 'You are not an oracle',
        who: 'Oracle_addParticipant'
        });
      const v2857 = await stdlib.Array_asyncReduce([v2296], false, async([v2859], v2858, v2860) => {
        const v2861 = [v2744, v2745];
        const v2862 = ['Some', v2861];
        const v2865 = stdlib.digest([ctc10], [v2862]);
        const v2866 = stdlib.digest([ctc10], [v2859]);
        const v2867 = stdlib.digestEq(v2865, v2866);
        const v2869 = v2858 ? v2858 : v2867;
        
        return v2869;})
      const v2870 = v2857 ? false : true;
      stdlib.assert(v2870, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./claim.rsh:116:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./claim.rsh:117:25:application call to [unknown function] (defined at: ./claim.rsh:117:25:function exp)'],
        msg: 'It is already a participant',
        who: 'Oracle_addParticipant'
        });
      const v2874 = [v2744, v2745];
      const v2875 = ['Some', v2874];
      const v2877 = stdlib.Array_set(v2296, v2295, v2875);
      null;
      const v2878 = null;
      const v2879 = await txn1.getOutput('Oracle_addParticipant', 'v2878', ctc2, v2878);
      if (v1709) {
        stdlib.protect(ctc2, await interact.out(v2739, v2879), {
          at: './claim.rsh:110:11:application',
          fs: ['at ./claim.rsh:110:11:application call to [unknown function] (defined at: ./claim.rsh:110:11:function exp)', 'at ./claim.rsh:120:12:application call to "ret" (defined at: ./claim.rsh:117:25:function exp)', 'at ./claim.rsh:117:25:application call to [unknown function] (defined at: ./claim.rsh:117:25:function exp)'],
          msg: 'out',
          who: 'Oracle_addParticipant'
          });
        }
      else {
        }
      
      const v2886 = stdlib.safeAdd(v2295, stdlib.checkedBigNumberify('./claim.rsh:121:57:decimal', stdlib.UInt_max, '1'));
      const v6626 = v2292;
      const v6628 = v2886;
      const v6629 = v2877;
      const v6630 = v2297;
      const v6631 = v2298;
      return;
      
      break;
      }
    case 'Oracle_announceVerification0_428': {
      const v3039 = v2736[1];
      return;
      break;
      }
    case 'Oracle_announceWinner0_428': {
      const v3339 = v2736[1];
      return;
      break;
      }
    case 'Oracle_correctContract0_428': {
      const v3639 = v2736[1];
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
    Oracle_addParticipant0_428: ctc8,
    Oracle_announceVerification0_428: ctc15,
    Oracle_announceWinner0_428: ctc16,
    Oracle_correctContract0_428: ctc17
    });
  
  
  const [v2195, v2196, v2197, v2198, v2199, v2200, v2201, v2202, v2209, v2243, v2292, v2295, v2296, v2297, v2298] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc0, ctc1, ctc3, ctc4, ctc5, ctc5, ctc5, ctc6, ctc6, ctc8, ctc9, ctc5, ctc11, ctc12, ctc14]);
  const v2615 = ctc.selfAddress();
  const v2617 = stdlib.protect(ctc15, await interact.in(), {
    at: './claim.rsh:1:23:application',
    fs: ['at ./claim.rsh:147:51:application call to [unknown function] (defined at: ./claim.rsh:147:51:function exp)', 'at ./claim.rsh:86:19:application call to "runOracle_announceVerification0_428" (defined at: ./claim.rsh:147:10:function exp)', 'at ./claim.rsh:86:19:application call to [unknown function] (defined at: ./claim.rsh:86:19:function exp)'],
    msg: 'in',
    who: 'Oracle_announceVerification'
    });
  const v2620 = ['None', null];
  const v2621 = await stdlib.Array_asyncReduce([v2196], v2620, async([v2623], v2622, v2624) => {
    const v2625 = {
      None: 0,
      Some: 1
      }[v2622[0]];
    const v2626 = stdlib.eq(v2625, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
    const v2627 = stdlib.addressEq(v2623, v2615);
    const v2628 = v2626 ? v2627 : false;
    const v2629 = ['Some', v2624];
    const v2630 = v2628 ? v2629 : v2622;
    
    return v2630;})
  const v2631 = {
    None: 0,
    Some: 1
    }[v2621[0]];
  const v2632 = stdlib.eq(v2631, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v2632, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./claim.rsh:149:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./claim.rsh:147:51:application call to [unknown function] (defined at: ./claim.rsh:147:51:function exp)', 'at ./claim.rsh:86:19:application call to "runOracle_announceVerification0_428" (defined at: ./claim.rsh:147:10:function exp)', 'at ./claim.rsh:86:19:application call to [unknown function] (defined at: ./claim.rsh:86:19:function exp)'],
    msg: 'You are not an oracle',
    who: 'Oracle_announceVerification'
    });
  stdlib.assert(v2202, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./claim.rsh:150:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./claim.rsh:147:51:application call to [unknown function] (defined at: ./claim.rsh:147:51:function exp)', 'at ./claim.rsh:86:19:application call to "runOracle_announceVerification0_428" (defined at: ./claim.rsh:147:10:function exp)', 'at ./claim.rsh:86:19:application call to [unknown function] (defined at: ./claim.rsh:86:19:function exp)'],
    msg: 'Can only announce formal verification if it is bottom.',
    who: 'Oracle_announceVerification'
    });
  const v2640 = ['Oracle_announceVerification0_428', v2617];
  
  const v2681 = await stdlib.Array_asyncReduce([v2196], v2620, async([v2683], v2682, v2684) => {
    const v2685 = {
      None: 0,
      Some: 1
      }[v2682[0]];
    const v2686 = stdlib.eq(v2685, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
    const v2687 = stdlib.addressEq(v2683, v2615);
    const v2688 = v2686 ? v2687 : false;
    const v2689 = ['Some', v2684];
    const v2690 = v2688 ? v2689 : v2682;
    
    return v2690;})
  const v2691 = {
    None: 0,
    Some: 1
    }[v2681[0]];
  const v2692 = stdlib.eq(v2691, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v2692, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./claim.rsh:149:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./claim.rsh:147:51:application call to [unknown function] (defined at: ./claim.rsh:147:51:function exp)', 'at ./claim.rsh:86:19:application call to [unknown function] (defined at: ./claim.rsh:147:51:function exp)', 'at ./claim.rsh:86:19:application call to [unknown function] (defined at: ./claim.rsh:86:19:function exp)'],
    msg: 'You are not an oracle',
    who: 'Oracle_announceVerification'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v2195, v2196, v2197, v2198, v2199, v2200, v2201, v2202, v2209, v2243, v2292, v2295, v2296, v2297, v2298, v2640],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc18],
    pay: [stdlib.checkedBigNumberify('./claim.rsh:151:16:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v2736], secs: v2738, time: v2737, didSend: v1709, from: v2735 } = txn1;
      
      switch (v2736[0]) {
        case 'Oracle_addParticipant0_428': {
          const v2739 = v2736[1];
          
          break;
          }
        case 'Oracle_announceVerification0_428': {
          const v3039 = v2736[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Oracle_announceVerification"
            });
          const v3081 = ['None', null];
          ;
          const v3189 = v3039[stdlib.checkedBigNumberify('./claim.rsh:147:10:spread', stdlib.UInt_max, '0')];
          const v3191 = await stdlib.Array_asyncReduce([v2196], v3081, async([v3193], v3192, v3194) => {
            const v3195 = {
              None: 0,
              Some: 1
              }[v3192[0]];
            const v3196 = stdlib.eq(v3195, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
            const v3197 = stdlib.addressEq(v3193, v2735);
            const v3198 = v3196 ? v3197 : false;
            const v3199 = ['Some', v3194];
            const v3200 = v3198 ? v3199 : v3192;
            
            return v3200;})
          const v3206 = stdlib.fromSome(v3191, stdlib.checkedBigNumberify('./claim.rsh:152:67:decimal', stdlib.UInt_max, '0'));
          const v3207 = ['Some', v3189];
          const v3209 = stdlib.Array_set(v2298, v3206, v3207);
          const v3210 = await stdlib.Array_asyncReduce([v3209], stdlib.checkedBigNumberify('reach standard library:170:22:decimal', stdlib.UInt_max, '0'), async([v3212], v3211, v3213) => {
            const v3215 = stdlib.digest([ctc13], [v3212]);
            const v3217 = stdlib.digest([ctc13], [v3207]);
            const v3218 = stdlib.digestEq(v3215, v3217);
            let v3219;
            if (v3218) {
              const v3220 = stdlib.safeAdd(v3211, stdlib.checkedBigNumberify('reach standard library:171:18:decimal', stdlib.UInt_max, '1'));
              v3219 = v3220;
              }
            else {
              v3219 = v3211;
              }
            
            return v3219;})
          const v3221 = stdlib.eq(v3210, stdlib.checkedBigNumberify('./claim.rsh:7:38:application', stdlib.UInt_max, '3'));
          if (v3221) {
            null;
            const v3222 = stdlib.fromSome(v2197, v2195);
            const v3223 = v3189 ? v2195 : v3222;
            sim_r.txns.push({
              kind: 'from',
              to: v3223,
              tok: undefined /* Nothing */
              });
            const v3228 = null;
            const v3229 = await txn1.getOutput('Oracle_announceVerification', 'v3228', ctc2, v3228);
            
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          else {
            const v3236 = null;
            const v3237 = await txn1.getOutput('Oracle_announceVerification', 'v3236', ctc2, v3236);
            
            const v6690 = v2292;
            const v6692 = v2295;
            const v6693 = v2296;
            const v6694 = v2297;
            const v6695 = v3209;
            sim_r.isHalt = false;
            }
          break;
          }
        case 'Oracle_announceWinner0_428': {
          const v3339 = v2736[1];
          
          break;
          }
        case 'Oracle_correctContract0_428': {
          const v3639 = v2736[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc3, ctc4, ctc5, ctc5, ctc5, ctc6, ctc6, ctc8, ctc9, ctc5, ctc11, ctc12, ctc14, ctc18],
    waitIfNotPresent: false
    }));
  const {data: [v2736], secs: v2738, time: v2737, didSend: v1709, from: v2735 } = txn1;
  switch (v2736[0]) {
    case 'Oracle_addParticipant0_428': {
      const v2739 = v2736[1];
      return;
      break;
      }
    case 'Oracle_announceVerification0_428': {
      const v3039 = v2736[1];
      undefined /* setApiDetails */;
      const v3081 = ['None', null];
      const v3082 = await stdlib.Array_asyncReduce([v2196], v3081, async([v3084], v3083, v3085) => {
        const v3086 = {
          None: 0,
          Some: 1
          }[v3083[0]];
        const v3087 = stdlib.eq(v3086, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
        const v3088 = stdlib.addressEq(v3084, v2735);
        const v3089 = v3087 ? v3088 : false;
        const v3090 = ['Some', v3085];
        const v3091 = v3089 ? v3090 : v3083;
        
        return v3091;})
      const v3092 = {
        None: 0,
        Some: 1
        }[v3082[0]];
      const v3093 = stdlib.eq(v3092, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      stdlib.assert(v3093, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./claim.rsh:149:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./claim.rsh:147:51:application call to [unknown function] (defined at: ./claim.rsh:147:51:function exp)', 'at ./claim.rsh:86:19:application call to [unknown function] (defined at: ./claim.rsh:147:51:function exp)', 'at ./claim.rsh:86:19:application call to [unknown function] (defined at: ./claim.rsh:86:19:function exp)'],
        msg: 'You are not an oracle',
        who: 'Oracle_announceVerification'
        });
      stdlib.assert(v2202, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./claim.rsh:150:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./claim.rsh:147:51:application call to [unknown function] (defined at: ./claim.rsh:147:51:function exp)', 'at ./claim.rsh:86:19:application call to [unknown function] (defined at: ./claim.rsh:147:51:function exp)', 'at ./claim.rsh:86:19:application call to [unknown function] (defined at: ./claim.rsh:86:19:function exp)'],
        msg: 'Can only announce formal verification if it is bottom.',
        who: 'Oracle_announceVerification'
        });
      ;
      const v3189 = v3039[stdlib.checkedBigNumberify('./claim.rsh:147:10:spread', stdlib.UInt_max, '0')];
      const v3191 = await stdlib.Array_asyncReduce([v2196], v3081, async([v3193], v3192, v3194) => {
        const v3195 = {
          None: 0,
          Some: 1
          }[v3192[0]];
        const v3196 = stdlib.eq(v3195, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
        const v3197 = stdlib.addressEq(v3193, v2735);
        const v3198 = v3196 ? v3197 : false;
        const v3199 = ['Some', v3194];
        const v3200 = v3198 ? v3199 : v3192;
        
        return v3200;})
      const v3201 = {
        None: 0,
        Some: 1
        }[v3191[0]];
      const v3202 = stdlib.eq(v3201, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      stdlib.assert(v3202, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./claim.rsh:149:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./claim.rsh:151:25:application call to [unknown function] (defined at: ./claim.rsh:151:25:function exp)'],
        msg: 'You are not an oracle',
        who: 'Oracle_announceVerification'
        });
      const v3206 = stdlib.fromSome(v3191, stdlib.checkedBigNumberify('./claim.rsh:152:67:decimal', stdlib.UInt_max, '0'));
      const v3207 = ['Some', v3189];
      const v3209 = stdlib.Array_set(v2298, v3206, v3207);
      const v3210 = await stdlib.Array_asyncReduce([v3209], stdlib.checkedBigNumberify('reach standard library:170:22:decimal', stdlib.UInt_max, '0'), async([v3212], v3211, v3213) => {
        const v3215 = stdlib.digest([ctc13], [v3212]);
        const v3217 = stdlib.digest([ctc13], [v3207]);
        const v3218 = stdlib.digestEq(v3215, v3217);
        let v3219;
        if (v3218) {
          const v3220 = stdlib.safeAdd(v3211, stdlib.checkedBigNumberify('reach standard library:171:18:decimal', stdlib.UInt_max, '1'));
          v3219 = v3220;
          }
        else {
          v3219 = v3211;
          }
        
        return v3219;})
      const v3221 = stdlib.eq(v3210, stdlib.checkedBigNumberify('./claim.rsh:7:38:application', stdlib.UInt_max, '3'));
      if (v3221) {
        null;
        const v3222 = stdlib.fromSome(v2197, v2195);
        const v3223 = v3189 ? v2195 : v3222;
        ;
        const v3228 = null;
        const v3229 = await txn1.getOutput('Oracle_announceVerification', 'v3228', ctc2, v3228);
        if (v1709) {
          stdlib.protect(ctc2, await interact.out(v3039, v3229), {
            at: './claim.rsh:147:11:application',
            fs: ['at ./claim.rsh:147:11:application call to [unknown function] (defined at: ./claim.rsh:147:11:function exp)', 'at ./claim.rsh:158:12:application call to "ret" (defined at: ./claim.rsh:151:25:function exp)', 'at ./claim.rsh:151:25:application call to [unknown function] (defined at: ./claim.rsh:151:25:function exp)'],
            msg: 'out',
            who: 'Oracle_announceVerification'
            });
          }
        else {
          }
        
        return;
        }
      else {
        const v3236 = null;
        const v3237 = await txn1.getOutput('Oracle_announceVerification', 'v3236', ctc2, v3236);
        if (v1709) {
          stdlib.protect(ctc2, await interact.out(v3039, v3237), {
            at: './claim.rsh:147:11:application',
            fs: ['at ./claim.rsh:147:11:application call to [unknown function] (defined at: ./claim.rsh:147:11:function exp)', 'at ./claim.rsh:158:12:application call to "ret" (defined at: ./claim.rsh:151:25:function exp)', 'at ./claim.rsh:151:25:application call to [unknown function] (defined at: ./claim.rsh:151:25:function exp)'],
            msg: 'out',
            who: 'Oracle_announceVerification'
            });
          }
        else {
          }
        
        const v6690 = v2292;
        const v6692 = v2295;
        const v6693 = v2296;
        const v6694 = v2297;
        const v6695 = v3209;
        return;
        }
      break;
      }
    case 'Oracle_announceWinner0_428': {
      const v3339 = v2736[1];
      return;
      break;
      }
    case 'Oracle_correctContract0_428': {
      const v3639 = v2736[1];
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
    Oracle_addParticipant0_428: ctc8,
    Oracle_announceVerification0_428: ctc16,
    Oracle_announceWinner0_428: ctc15,
    Oracle_correctContract0_428: ctc17
    });
  
  
  const [v2195, v2196, v2197, v2198, v2199, v2200, v2201, v2202, v2209, v2243, v2292, v2295, v2296, v2297, v2298] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc0, ctc1, ctc3, ctc4, ctc5, ctc5, ctc5, ctc6, ctc6, ctc8, ctc9, ctc5, ctc11, ctc12, ctc14]);
  const v2580 = ctc.selfAddress();
  const v2582 = stdlib.protect(ctc15, await interact.in(), {
    at: './claim.rsh:1:23:application',
    fs: ['at ./claim.rsh:125:48:application call to [unknown function] (defined at: ./claim.rsh:125:48:function exp)', 'at ./claim.rsh:86:19:application call to "runOracle_announceWinner0_428" (defined at: ./claim.rsh:125:10:function exp)', 'at ./claim.rsh:86:19:application call to [unknown function] (defined at: ./claim.rsh:86:19:function exp)'],
    msg: 'in',
    who: 'Oracle_announceWinner'
    });
  const v2583 = v2582[stdlib.checkedBigNumberify('./claim.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v2585 = ['None', null];
  const v2586 = await stdlib.Array_asyncReduce([v2196], v2585, async([v2588], v2587, v2589) => {
    const v2590 = {
      None: 0,
      Some: 1
      }[v2587[0]];
    const v2591 = stdlib.eq(v2590, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
    const v2592 = stdlib.addressEq(v2588, v2580);
    const v2593 = v2591 ? v2592 : false;
    const v2594 = ['Some', v2589];
    const v2595 = v2593 ? v2594 : v2587;
    
    return v2595;})
  const v2596 = {
    None: 0,
    Some: 1
    }[v2586[0]];
  const v2597 = stdlib.eq(v2596, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v2597, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./claim.rsh:127:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./claim.rsh:125:48:application call to [unknown function] (defined at: ./claim.rsh:125:48:function exp)', 'at ./claim.rsh:86:19:application call to "runOracle_announceWinner0_428" (defined at: ./claim.rsh:125:10:function exp)', 'at ./claim.rsh:86:19:application call to [unknown function] (defined at: ./claim.rsh:86:19:function exp)'],
    msg: 'You are not an oracle',
    who: 'Oracle_announceWinner'
    });
  const v2599 = stdlib.fromSome(v2586, stdlib.checkedBigNumberify('./claim.rsh:128:49:decimal', stdlib.UInt_max, '0'));
  const v2601 = v2292[v2599];
  const v2602 = v2601 ? false : true;
  stdlib.assert(v2602, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./claim.rsh:128:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./claim.rsh:125:48:application call to [unknown function] (defined at: ./claim.rsh:125:48:function exp)', 'at ./claim.rsh:86:19:application call to "runOracle_announceWinner0_428" (defined at: ./claim.rsh:125:10:function exp)', 'at ./claim.rsh:86:19:application call to [unknown function] (defined at: ./claim.rsh:86:19:function exp)'],
    msg: 'You already declared a winner',
    who: 'Oracle_announceWinner'
    });
  const v2604 = stdlib.lt(v2583, v2295);
  stdlib.assert(v2604, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./claim.rsh:129:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./claim.rsh:125:48:application call to [unknown function] (defined at: ./claim.rsh:125:48:function exp)', 'at ./claim.rsh:86:19:application call to "runOracle_announceWinner0_428" (defined at: ./claim.rsh:125:10:function exp)', 'at ./claim.rsh:86:19:application call to [unknown function] (defined at: ./claim.rsh:86:19:function exp)'],
    msg: 'This participant does not exist.',
    who: 'Oracle_announceWinner'
    });
  stdlib.assert(v2209, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./claim.rsh:130:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./claim.rsh:125:48:application call to [unknown function] (defined at: ./claim.rsh:125:48:function exp)', 'at ./claim.rsh:86:19:application call to "runOracle_announceWinner0_428" (defined at: ./claim.rsh:125:10:function exp)', 'at ./claim.rsh:86:19:application call to [unknown function] (defined at: ./claim.rsh:86:19:function exp)'],
    msg: 'Can only announce verification.',
    who: 'Oracle_announceWinner'
    });
  const v2613 = ['Oracle_announceWinner0_428', v2582];
  
  const v2698 = await stdlib.Array_asyncReduce([v2196], v2585, async([v2700], v2699, v2701) => {
    const v2702 = {
      None: 0,
      Some: 1
      }[v2699[0]];
    const v2703 = stdlib.eq(v2702, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
    const v2704 = stdlib.addressEq(v2700, v2580);
    const v2705 = v2703 ? v2704 : false;
    const v2706 = ['Some', v2701];
    const v2707 = v2705 ? v2706 : v2699;
    
    return v2707;})
  const v2708 = {
    None: 0,
    Some: 1
    }[v2698[0]];
  const v2709 = stdlib.eq(v2708, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v2709, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./claim.rsh:127:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./claim.rsh:125:48:application call to [unknown function] (defined at: ./claim.rsh:125:48:function exp)', 'at ./claim.rsh:86:19:application call to [unknown function] (defined at: ./claim.rsh:125:48:function exp)', 'at ./claim.rsh:86:19:application call to [unknown function] (defined at: ./claim.rsh:86:19:function exp)'],
    msg: 'You are not an oracle',
    who: 'Oracle_announceWinner'
    });
  const v2711 = stdlib.fromSome(v2698, stdlib.checkedBigNumberify('./claim.rsh:128:49:decimal', stdlib.UInt_max, '0'));
  const v2713 = v2292[v2711];
  const v2714 = v2713 ? false : true;
  stdlib.assert(v2714, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./claim.rsh:128:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./claim.rsh:125:48:application call to [unknown function] (defined at: ./claim.rsh:125:48:function exp)', 'at ./claim.rsh:86:19:application call to [unknown function] (defined at: ./claim.rsh:125:48:function exp)', 'at ./claim.rsh:86:19:application call to [unknown function] (defined at: ./claim.rsh:86:19:function exp)'],
    msg: 'You already declared a winner',
    who: 'Oracle_announceWinner'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v2195, v2196, v2197, v2198, v2199, v2200, v2201, v2202, v2209, v2243, v2292, v2295, v2296, v2297, v2298, v2613],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc18],
    pay: [stdlib.checkedBigNumberify('./claim.rsh:131:16:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v2736], secs: v2738, time: v2737, didSend: v1709, from: v2735 } = txn1;
      
      switch (v2736[0]) {
        case 'Oracle_addParticipant0_428': {
          const v2739 = v2736[1];
          
          break;
          }
        case 'Oracle_announceVerification0_428': {
          const v3039 = v2736[1];
          
          break;
          }
        case 'Oracle_announceWinner0_428': {
          const v3339 = v2736[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Oracle_announceWinner"
            });
          const v3397 = v3339[stdlib.checkedBigNumberify('./claim.rsh:125:10:spread', stdlib.UInt_max, '0')];
          const v3398 = ['None', null];
          ;
          const v3547 = await stdlib.Array_asyncReduce([v2196], v3398, async([v3549], v3548, v3550) => {
            const v3551 = {
              None: 0,
              Some: 1
              }[v3548[0]];
            const v3552 = stdlib.eq(v3551, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
            const v3553 = stdlib.addressEq(v3549, v2735);
            const v3554 = v3552 ? v3553 : false;
            const v3555 = ['Some', v3550];
            const v3556 = v3554 ? v3555 : v3548;
            
            return v3556;})
          const v3560 = stdlib.fromSome(v3547, stdlib.checkedBigNumberify('./claim.rsh:128:49:decimal', stdlib.UInt_max, '0'));
          const v3572 = stdlib.Array_set(v2292, v3560, true);
          const v3574 = v2297[v3397];
          const v3575 = stdlib.safeAdd(v3574, stdlib.checkedBigNumberify('./claim.rsh:133:48:decimal', stdlib.UInt_max, '1'));
          const v3577 = stdlib.Array_set(v2297, v3397, v3575);
          const v3578 = stdlib.eq(v3575, stdlib.checkedBigNumberify('./claim.rsh:7:38:application', stdlib.UInt_max, '3'));
          if (v3578) {
            const v3580 = v2296[v3397];
            const v3583 = stdlib.fromSome(v3580, v2243);
            const v3584 = v3583[stdlib.checkedBigNumberify('./claim.rsh:138:34:array ref', stdlib.UInt_max, '0')];
            const v3585 = v3583[stdlib.checkedBigNumberify('./claim.rsh:138:45:array ref', stdlib.UInt_max, '1')];
            null;
            sim_r.txns.push({
              kind: 'from',
              to: v3584,
              tok: undefined /* Nothing */
              });
            const v3591 = stdlib.eq(v3397, stdlib.checkedBigNumberify('./claim.rsh:140:47:decimal', stdlib.UInt_max, '0'));
            const v3592 = stdlib.fromSome(v2197, v2195);
            const v3593 = v3591 ? v2195 : v3592;
            sim_r.txns.push({
              kind: 'from',
              to: v3593,
              tok: undefined /* Nothing */
              });
            const v3598 = null;
            const v3599 = await txn1.getOutput('Oracle_announceWinner', 'v3598', ctc2, v3598);
            
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          else {
            const v3606 = null;
            const v3607 = await txn1.getOutput('Oracle_announceWinner', 'v3606', ctc2, v3606);
            
            const v6754 = v3572;
            const v6756 = v2295;
            const v6757 = v2296;
            const v6758 = v3577;
            const v6759 = v2298;
            sim_r.isHalt = false;
            }
          break;
          }
        case 'Oracle_correctContract0_428': {
          const v3639 = v2736[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc3, ctc4, ctc5, ctc5, ctc5, ctc6, ctc6, ctc8, ctc9, ctc5, ctc11, ctc12, ctc14, ctc18],
    waitIfNotPresent: false
    }));
  const {data: [v2736], secs: v2738, time: v2737, didSend: v1709, from: v2735 } = txn1;
  switch (v2736[0]) {
    case 'Oracle_addParticipant0_428': {
      const v2739 = v2736[1];
      return;
      break;
      }
    case 'Oracle_announceVerification0_428': {
      const v3039 = v2736[1];
      return;
      break;
      }
    case 'Oracle_announceWinner0_428': {
      const v3339 = v2736[1];
      undefined /* setApiDetails */;
      const v3397 = v3339[stdlib.checkedBigNumberify('./claim.rsh:125:10:spread', stdlib.UInt_max, '0')];
      const v3398 = ['None', null];
      const v3399 = await stdlib.Array_asyncReduce([v2196], v3398, async([v3401], v3400, v3402) => {
        const v3403 = {
          None: 0,
          Some: 1
          }[v3400[0]];
        const v3404 = stdlib.eq(v3403, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
        const v3405 = stdlib.addressEq(v3401, v2735);
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
        fs: ['at ./claim.rsh:127:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./claim.rsh:125:48:application call to [unknown function] (defined at: ./claim.rsh:125:48:function exp)', 'at ./claim.rsh:86:19:application call to [unknown function] (defined at: ./claim.rsh:125:48:function exp)', 'at ./claim.rsh:86:19:application call to [unknown function] (defined at: ./claim.rsh:86:19:function exp)'],
        msg: 'You are not an oracle',
        who: 'Oracle_announceWinner'
        });
      const v3412 = stdlib.fromSome(v3399, stdlib.checkedBigNumberify('./claim.rsh:128:49:decimal', stdlib.UInt_max, '0'));
      const v3414 = v2292[v3412];
      const v3415 = v3414 ? false : true;
      stdlib.assert(v3415, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./claim.rsh:128:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./claim.rsh:125:48:application call to [unknown function] (defined at: ./claim.rsh:125:48:function exp)', 'at ./claim.rsh:86:19:application call to [unknown function] (defined at: ./claim.rsh:125:48:function exp)', 'at ./claim.rsh:86:19:application call to [unknown function] (defined at: ./claim.rsh:86:19:function exp)'],
        msg: 'You already declared a winner',
        who: 'Oracle_announceWinner'
        });
      const v3417 = stdlib.lt(v3397, v2295);
      stdlib.assert(v3417, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./claim.rsh:129:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./claim.rsh:125:48:application call to [unknown function] (defined at: ./claim.rsh:125:48:function exp)', 'at ./claim.rsh:86:19:application call to [unknown function] (defined at: ./claim.rsh:125:48:function exp)', 'at ./claim.rsh:86:19:application call to [unknown function] (defined at: ./claim.rsh:86:19:function exp)'],
        msg: 'This participant does not exist.',
        who: 'Oracle_announceWinner'
        });
      stdlib.assert(v2209, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./claim.rsh:130:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./claim.rsh:125:48:application call to [unknown function] (defined at: ./claim.rsh:125:48:function exp)', 'at ./claim.rsh:86:19:application call to [unknown function] (defined at: ./claim.rsh:125:48:function exp)', 'at ./claim.rsh:86:19:application call to [unknown function] (defined at: ./claim.rsh:86:19:function exp)'],
        msg: 'Can only announce verification.',
        who: 'Oracle_announceWinner'
        });
      ;
      const v3547 = await stdlib.Array_asyncReduce([v2196], v3398, async([v3549], v3548, v3550) => {
        const v3551 = {
          None: 0,
          Some: 1
          }[v3548[0]];
        const v3552 = stdlib.eq(v3551, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
        const v3553 = stdlib.addressEq(v3549, v2735);
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
        fs: ['at ./claim.rsh:127:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./claim.rsh:131:25:application call to [unknown function] (defined at: ./claim.rsh:131:25:function exp)'],
        msg: 'You are not an oracle',
        who: 'Oracle_announceWinner'
        });
      const v3560 = stdlib.fromSome(v3547, stdlib.checkedBigNumberify('./claim.rsh:128:49:decimal', stdlib.UInt_max, '0'));
      const v3562 = v2292[v3560];
      const v3563 = v3562 ? false : true;
      stdlib.assert(v3563, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./claim.rsh:128:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./claim.rsh:131:25:application call to [unknown function] (defined at: ./claim.rsh:131:25:function exp)'],
        msg: 'You already declared a winner',
        who: 'Oracle_announceWinner'
        });
      const v3572 = stdlib.Array_set(v2292, v3560, true);
      const v3574 = v2297[v3397];
      const v3575 = stdlib.safeAdd(v3574, stdlib.checkedBigNumberify('./claim.rsh:133:48:decimal', stdlib.UInt_max, '1'));
      const v3577 = stdlib.Array_set(v2297, v3397, v3575);
      const v3578 = stdlib.eq(v3575, stdlib.checkedBigNumberify('./claim.rsh:7:38:application', stdlib.UInt_max, '3'));
      if (v3578) {
        const v3580 = v2296[v3397];
        const v3583 = stdlib.fromSome(v3580, v2243);
        const v3584 = v3583[stdlib.checkedBigNumberify('./claim.rsh:138:34:array ref', stdlib.UInt_max, '0')];
        const v3585 = v3583[stdlib.checkedBigNumberify('./claim.rsh:138:45:array ref', stdlib.UInt_max, '1')];
        null;
        ;
        const v3591 = stdlib.eq(v3397, stdlib.checkedBigNumberify('./claim.rsh:140:47:decimal', stdlib.UInt_max, '0'));
        const v3592 = stdlib.fromSome(v2197, v2195);
        const v3593 = v3591 ? v2195 : v3592;
        ;
        const v3598 = null;
        const v3599 = await txn1.getOutput('Oracle_announceWinner', 'v3598', ctc2, v3598);
        if (v1709) {
          stdlib.protect(ctc2, await interact.out(v3339, v3599), {
            at: './claim.rsh:125:11:application',
            fs: ['at ./claim.rsh:125:11:application call to [unknown function] (defined at: ./claim.rsh:125:11:function exp)', 'at ./claim.rsh:142:12:application call to "ret" (defined at: ./claim.rsh:131:25:function exp)', 'at ./claim.rsh:131:25:application call to [unknown function] (defined at: ./claim.rsh:131:25:function exp)'],
            msg: 'out',
            who: 'Oracle_announceWinner'
            });
          }
        else {
          }
        
        return;
        }
      else {
        const v3606 = null;
        const v3607 = await txn1.getOutput('Oracle_announceWinner', 'v3606', ctc2, v3606);
        if (v1709) {
          stdlib.protect(ctc2, await interact.out(v3339, v3607), {
            at: './claim.rsh:125:11:application',
            fs: ['at ./claim.rsh:125:11:application call to [unknown function] (defined at: ./claim.rsh:125:11:function exp)', 'at ./claim.rsh:142:12:application call to "ret" (defined at: ./claim.rsh:131:25:function exp)', 'at ./claim.rsh:131:25:application call to [unknown function] (defined at: ./claim.rsh:131:25:function exp)'],
            msg: 'out',
            who: 'Oracle_announceWinner'
            });
          }
        else {
          }
        
        const v6754 = v3572;
        const v6756 = v2295;
        const v6757 = v2296;
        const v6758 = v3577;
        const v6759 = v2298;
        return;
        }
      break;
      }
    case 'Oracle_correctContract0_428': {
      const v3639 = v2736[1];
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
    Oracle_addParticipant0_428: ctc8,
    Oracle_announceVerification0_428: ctc16,
    Oracle_announceWinner0_428: ctc17,
    Oracle_correctContract0_428: ctc15
    });
  
  
  const [v2195, v2196, v2197, v2198, v2199, v2200, v2201, v2202, v2209, v2243, v2292, v2295, v2296, v2297, v2298] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc0, ctc1, ctc3, ctc4, ctc5, ctc5, ctc5, ctc6, ctc6, ctc8, ctc9, ctc5, ctc11, ctc12, ctc14]);
  const v2509 = ctc.selfAddress();
  const v2511 = stdlib.protect(ctc15, await interact.in(), {
    at: './claim.rsh:1:23:application',
    fs: ['at ./claim.rsh:100:38:application call to [unknown function] (defined at: ./claim.rsh:100:38:function exp)', 'at ./claim.rsh:86:19:application call to "runOracle_correctContract0_428" (defined at: ./claim.rsh:100:10:function exp)', 'at ./claim.rsh:86:19:application call to [unknown function] (defined at: ./claim.rsh:86:19:function exp)'],
    msg: 'in',
    who: 'Oracle_correctContract'
    });
  const v2512 = ['None', null];
  const v2513 = await stdlib.Array_asyncReduce([v2196], v2512, async([v2515], v2514, v2516) => {
    const v2517 = {
      None: 0,
      Some: 1
      }[v2514[0]];
    const v2518 = stdlib.eq(v2517, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
    const v2519 = stdlib.addressEq(v2515, v2509);
    const v2520 = v2518 ? v2519 : false;
    const v2521 = ['Some', v2516];
    const v2522 = v2520 ? v2521 : v2514;
    
    return v2522;})
  const v2523 = {
    None: 0,
    Some: 1
    }[v2513[0]];
  const v2524 = stdlib.eq(v2523, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v2524, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./claim.rsh:102:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./claim.rsh:100:38:application call to [unknown function] (defined at: ./claim.rsh:100:38:function exp)', 'at ./claim.rsh:86:19:application call to "runOracle_correctContract0_428" (defined at: ./claim.rsh:100:10:function exp)', 'at ./claim.rsh:86:19:application call to [unknown function] (defined at: ./claim.rsh:86:19:function exp)'],
    msg: 'You are not an oracle',
    who: 'Oracle_correctContract'
    });
  const v2529 = ['Oracle_correctContract0_428', v2511];
  
  const v2722 = await stdlib.Array_asyncReduce([v2196], v2512, async([v2724], v2723, v2725) => {
    const v2726 = {
      None: 0,
      Some: 1
      }[v2723[0]];
    const v2727 = stdlib.eq(v2726, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
    const v2728 = stdlib.addressEq(v2724, v2509);
    const v2729 = v2727 ? v2728 : false;
    const v2730 = ['Some', v2725];
    const v2731 = v2729 ? v2730 : v2723;
    
    return v2731;})
  const v2732 = {
    None: 0,
    Some: 1
    }[v2722[0]];
  const v2733 = stdlib.eq(v2732, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
  stdlib.assert(v2733, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./claim.rsh:102:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./claim.rsh:100:38:application call to [unknown function] (defined at: ./claim.rsh:100:38:function exp)', 'at ./claim.rsh:86:19:application call to [unknown function] (defined at: ./claim.rsh:100:38:function exp)', 'at ./claim.rsh:86:19:application call to [unknown function] (defined at: ./claim.rsh:86:19:function exp)'],
    msg: 'You are not an oracle',
    who: 'Oracle_correctContract'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v2195, v2196, v2197, v2198, v2199, v2200, v2201, v2202, v2209, v2243, v2292, v2295, v2296, v2297, v2298, v2529],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc18],
    pay: [stdlib.checkedBigNumberify('./claim.rsh:103:16:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v2736], secs: v2738, time: v2737, didSend: v1709, from: v2735 } = txn1;
      
      switch (v2736[0]) {
        case 'Oracle_addParticipant0_428': {
          const v2739 = v2736[1];
          
          break;
          }
        case 'Oracle_announceVerification0_428': {
          const v3039 = v2736[1];
          
          break;
          }
        case 'Oracle_announceWinner0_428': {
          const v3339 = v2736[1];
          
          break;
          }
        case 'Oracle_correctContract0_428': {
          const v3639 = v2736[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Oracle_correctContract"
            });
          ;
          null;
          const v3929 = null;
          const v3930 = await txn1.getOutput('Oracle_correctContract', 'v3929', ctc2, v3929);
          
          const v6810 = v2292;
          const v6812 = v2295;
          const v6813 = v2296;
          const v6814 = v2297;
          const v6815 = v2298;
          sim_r.isHalt = false;
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc3, ctc4, ctc5, ctc5, ctc5, ctc6, ctc6, ctc8, ctc9, ctc5, ctc11, ctc12, ctc14, ctc18],
    waitIfNotPresent: false
    }));
  const {data: [v2736], secs: v2738, time: v2737, didSend: v1709, from: v2735 } = txn1;
  switch (v2736[0]) {
    case 'Oracle_addParticipant0_428': {
      const v2739 = v2736[1];
      return;
      break;
      }
    case 'Oracle_announceVerification0_428': {
      const v3039 = v2736[1];
      return;
      break;
      }
    case 'Oracle_announceWinner0_428': {
      const v3339 = v2736[1];
      return;
      break;
      }
    case 'Oracle_correctContract0_428': {
      const v3639 = v2736[1];
      undefined /* setApiDetails */;
      const v3722 = ['None', null];
      const v3723 = await stdlib.Array_asyncReduce([v2196], v3722, async([v3725], v3724, v3726) => {
        const v3727 = {
          None: 0,
          Some: 1
          }[v3724[0]];
        const v3728 = stdlib.eq(v3727, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
        const v3729 = stdlib.addressEq(v3725, v2735);
        const v3730 = v3728 ? v3729 : false;
        const v3731 = ['Some', v3726];
        const v3732 = v3730 ? v3731 : v3724;
        
        return v3732;})
      const v3733 = {
        None: 0,
        Some: 1
        }[v3723[0]];
      const v3734 = stdlib.eq(v3733, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      stdlib.assert(v3734, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./claim.rsh:102:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./claim.rsh:100:38:application call to [unknown function] (defined at: ./claim.rsh:100:38:function exp)', 'at ./claim.rsh:86:19:application call to [unknown function] (defined at: ./claim.rsh:100:38:function exp)', 'at ./claim.rsh:86:19:application call to [unknown function] (defined at: ./claim.rsh:86:19:function exp)'],
        msg: 'You are not an oracle',
        who: 'Oracle_correctContract'
        });
      ;
      const v3916 = await stdlib.Array_asyncReduce([v2196], v3722, async([v3918], v3917, v3919) => {
        const v3920 = {
          None: 0,
          Some: 1
          }[v3917[0]];
        const v3921 = stdlib.eq(v3920, stdlib.checkedBigNumberify('reach standard library:39:41:application', stdlib.UInt_max, '0'));
        const v3922 = stdlib.addressEq(v3918, v2735);
        const v3923 = v3921 ? v3922 : false;
        const v3924 = ['Some', v3919];
        const v3925 = v3923 ? v3924 : v3917;
        
        return v3925;})
      const v3926 = {
        None: 0,
        Some: 1
        }[v3916[0]];
      const v3927 = stdlib.eq(v3926, stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1'));
      stdlib.assert(v3927, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./claim.rsh:102:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./claim.rsh:103:25:application call to [unknown function] (defined at: ./claim.rsh:103:25:function exp)'],
        msg: 'You are not an oracle',
        who: 'Oracle_correctContract'
        });
      null;
      const v3929 = null;
      const v3930 = await txn1.getOutput('Oracle_correctContract', 'v3929', ctc2, v3929);
      if (v1709) {
        stdlib.protect(ctc2, await interact.out(v3639, v3930), {
          at: './claim.rsh:100:11:application',
          fs: ['at ./claim.rsh:100:11:application call to [unknown function] (defined at: ./claim.rsh:100:11:function exp)', 'at ./claim.rsh:105:12:application call to "ret" (defined at: ./claim.rsh:103:25:function exp)', 'at ./claim.rsh:103:25:application call to [unknown function] (defined at: ./claim.rsh:103:25:function exp)'],
          msg: 'out',
          who: 'Oracle_correctContract'
          });
        }
      else {
        }
      
      const v6810 = v2292;
      const v6812 = v2295;
      const v6813 = v2296;
      const v6814 = v2297;
      const v6815 = v2298;
      return;
      
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
  appApproval: `ByAgAAEgAwUIKQIGCgl/tqvKzAad3N25C6SOiIYOpuTnjw+p3eC6Cyjq1cmiCK+bmv4JmQLtgI+fAufx27cCgdCl0QWRAokCocC/UN3Br5QCgQLQApoDUCYIAQEBAAECAQMBBAEFAQYAIjUAMRhBCp4nB2RJIls1AUkhBVs1AoEQWzUINhoAF0lBAjciNQQjNQZJIQwMQAERSSENDEAAkkkhDgxAAF1JIQ8MQAArIQ8SRDQBJRJEKWQoZFAqZFArZFAnBGRQJwVkUCcGZFBJNQNXIKA1B0IKLiEOEkQ0ASUSRClkKGRQKmRQK2RQJwRkUCcFZFAnBmRQSTUDVwAgNQdCCgNJIRAMQAAUIRASRDYaATX/KDT/UIEnr1BCAbwhDRJEJwc1/ys0/1AhEa9QQgGpSSESDEAARkkhEwxAACwhExJENAElEkQpZChkUCpkUCtkUCcEZFAnBWRQJwZkUEk1AyEUI1g1B0IJmyESEkQ2GgE1/yo0/1AyA1BCAVwhDBJENAElEkQpZChkUCpkUCtkUCcEZFAnBWRQJwZkUEk1A1fhIDUHQgldSSEVDEAAfEkhFgxAAEhJIRcMQAAUIRcSRDYaATYaAlA1/yk0/1BCAQghFhJENAElEkQpZChkUCpkUCtkUCcEZFAnBWRQJwZkUEk1AyEYIQVYNQdCCQchFRJENAElEkQpZChkUCpkUCtkUCcEZFAnBWRQJwZkUEk1AyEZIQVYNQdCCNpJIRoMQABhSSEbDEAALSEbEkQ0ASUSRClkKGRQKmRQK2RQJwRkUCcFZFAnBmRQSTUDIRwhBVg1B0IInyEaEkQ0ASUSRClkKGRQKmRQK2RQJwRkUCcFZFAnBmRQSTUDIR0hHlg1B0IIcoGwrpgCEkQ0ASUSRClkKGRQKmRQK2RQJwRkUCcFZFAnBmRQSTUDV8AhNQdCCEQ2GgIXNQQ2GgM2GgEXSSEHDEAGKiEHEkQlNAESRDQESSISTDQCEhFEKWQoZFAqZFArZFAnBGRQJwVkUCcGZFBJNQNJSkpKSkpKSVcAIDX/VyCgNf5XwCE1/VfhIDX8IRxbNfshGVs1+iEYWzX5IRQjWBc1+IGaAiNYFzX3gZsCIRFYNfaBwwIhBFg19YHIAls19CEdIR5YNfOB6gUhH1g18oG6BiEJWDXxSTUFNfCABPxbZsc08FCwNPAiVUkhBwxAAnZJJQxAALclEkQhCq9JNe417SI17DT+JDTsCyRYNes07Sg07BZQNO0iVSISNOsxABIQTTXtNOwjCEk17CEEDED/0zTtIlUjEkQ07jXsIjXrNP4kNOsLJFg16jTsKDTrFlA07CJVIhI06jEAEhBNNew06yMISTXrIQQMQP/TNOwiVSMSRIAE8bejHLCACAAAAAAAAA9ZsCcHNQc0/zT+NP00/DT7NPo0+TT4NPc09jT1IjT0NPM08jTxMgZCBblINPBXAQg17rEisgEhCLIQNAiyGLM07hc17SEKr0k17DXrIjXqNP4kNOoLJFg16TTrKDTqFlA06yJVIhI06TEAEhBNNes06iMISTXqIQQMQP/TNOsiVSMSRDT1IjTrSTXqI1s06iJVTVUURDTtNPQMRDT3RDTsNeoiNek0/iQ06QskWDXoNOooNOkWUDTqIlUiEjToMQASEE016jTpIwhJNekhBAxA/9M06iJVIxJEIjTqSTXoI1s06CJVTTXpNPU06VUURDT1NOkjVjXoNPIhBTTtCyEFWBcjCDXnNPI07SEFCzTnFl015jTnJRJBAJY09jTzIQY07QshBlhJNeRXASg05CJVTUk15VcAIDXkgAQ0aSg2NORQNOVXIAhQsLEisgE0+rIII7IQNOSyB7OxIrIBNPuyCCOyEDT/NP1JNeNXASA04yJVTTT/NO0iEk2yB7OACAAAAAAAAA4OsCcHNQc0/zT+NP00/DT7NPo0+TT4NPc09jToIzT0NPM05jTxMgZCBDOACAAAAAAAAA4WsCcHNQc0/zT+NP00/DT7NPo0+TT4NPc09jToIjT0NPM05jTxMgZCBABJIwxAAY5INPBXAQE17rEisgEhCLIQNAiyGLMhCq9JNe017CI16zT+JDTrCyRYNeo07Cg06xZQNOwiVSISNOoxABIQTTXsNOsjCEk16yEEDED/0zTsIlUjEkQ0+EQ07hc16zTtNeoiNek0/iQ06QskWDXoNOooNOkWUDTqIlUiEjToMQASEE016jTpIwhJNekhBAxA/9M06iJVIxJEKDTrFlEHCFA16TTxIjTqSTXnI1s05yJVTSEHCzTpXTXoIjXnIjXmNOghBzTmCyEHWEk15QE06QESQQAJNOcjCDXkQgAENOc15DTkNec05iMISTXmIQQMQP/NNOclEkEAY4AEaYFtyTTrFlEHCFCwsSKyATT7sggjshA0/zT9STXmVwEgNOYiVU00/zTrTbIHs4AIAAAAAAAADJywJwc1BzT/NP40/TT8NPs0+jT5NPg09zT2NPUjNPQ08zTyNOgyBkICn4AIAAAAAAAADKSwJwc1BzT/NP40/TT8NPs0+jT5NPg09zT2NPUiNPQ08zTyNOgyBkICbEg08FcBKDXuIjXtsSKyASEIshA0CLIYszTtIwhJNe0lDED/5zTuVwAgNe007iRbNewhCq9JNes16iI16TT+JDTpCyRYNeg06ig06RZQNOoiVSISNOgxABIQTTXqNOkjCEk16SEEDED/0zTqIlUjEkQ09CEJDEQ090QiNekiNeg08yEGNOgLIQZYNecoNO007BZQUAE05wESNOlJTTXpNOgjCEk16CEJDED/1DTpFEQ06zXoIjXnNP4kNOcLJFg15jToKDTnFlA06CJVIhI05jEAEhBNNeg05yMISTXnIQQMQP/TNOgiVSMSRCI15yI15jTzIQY05gshBlg15Sg07TTsFlBQATTlARI050lNNec05iMISTXmIQkMQP/UNOcURIAEhhEZbDTtUDTsFlCwgAgAAAAAAAALPrAnBzUHNP80/jT9NPw0+zT6NPk0+DT3NPY09SI09CMINPM09CEGCyg07TTsFlBQXTTyNPEyBkIA+yISRIHAmgyIAiWxIrIBIQiyECKyGIAGBzEAMgkSsh6AAQeyH7O0PTUIIjQBEkQ0BEkiEkw0AhIRREk1BUlKSklXAKA1/1egITX+V8EgNf2B4QFbNfyB6QFbNfuB8QFbNfpX+QEXNfmABLPZveY0/1A0/lA0/VA0/BZQNPsWUDT6FlA0+RZRBwhQsDT8NPsIiAGdNPkUNPsiEhFEIQavNfgxADEYFlA194ACAAA19jEANP80/jT9NPw0+zT6NPlJFDT3IQSvIiMoNPdQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQNPhQIR+vNPZJUDT2UDT2UDT2UDIGQgAANf81/jX9Nfw1+zX6Nfk1+DX3NfY19TX0NfM18jXxNfA17zT6QQADQgCDNO808FA08VA08lA08xZQNPQWUDT1FlA09hZRBwhQNPcWUQcIUDT4UDT5UDT7FlA0/FA0/VA0/lApSwFXAH9nKEsBV39/ZypLAVf+f2crSwGB/QIhC1hnJwRLAYH8AyELWGcnBUsBgfsEIQtYZycGSwGB+gWBSlhnSCU1ATIGNQJCAC0xGSEEEkSxIrIBIQiyEDQIshghBLIZs7EisgEisggjshAyCbIJMgqyB7NCAAUxGSISRCcHNAEWNAIWNAgWUFBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkRC/98iMTQSRCEFMTUSRCIxNhJEIjE3EkQiNQEiNQIiNQhC/6Y0AElKIwg1ADgHMgoSRDgQIxJEOAgSRIk=`,
  appClear: `Bw==`,
  companionInfo: {
    api_Oracle_addParticipant: 3,
    api_Oracle_announceVerification: 1,
    api_Oracle_announceWinner: 1
    },
  extraPages: 1,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 7,
  stateSize: 836,
  unsupported: [],
  version: 11,
  warnings: []
  };
const _ETH = {
  ABI: `[{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"address payable[5]","name":"elem1","type":"address[5]"},{"components":[{"internalType":"enum _enum_T0","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"internalType":"address payable","name":"_Some","type":"address"}],"internalType":"struct T0","name":"elem2","type":"tuple"},{"internalType":"bytes32","name":"elem3","type":"bytes32"},{"internalType":"uint256","name":"elem4","type":"uint256"},{"internalType":"uint256","name":"elem5","type":"uint256"},{"internalType":"uint256","name":"elem6","type":"uint256"},{"internalType":"bool","name":"elem7","type":"bool"}],"internalType":"struct T15","name":"v6857","type":"tuple"}],"stateMutability":"payable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"msg","type":"uint256"}],"name":"ReachError","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"address payable[5]","name":"elem1","type":"address[5]"},{"components":[{"internalType":"enum _enum_T0","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"internalType":"address payable","name":"_Some","type":"address"}],"internalType":"struct T0","name":"elem2","type":"tuple"},{"internalType":"bytes32","name":"elem3","type":"bytes32"},{"internalType":"uint256","name":"elem4","type":"uint256"},{"internalType":"uint256","name":"elem5","type":"uint256"},{"internalType":"uint256","name":"elem6","type":"uint256"},{"internalType":"bool","name":"elem7","type":"bool"}],"indexed":false,"internalType":"struct T15","name":"_a","type":"tuple"}],"name":"_reach_e0","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T8","name":"which","type":"uint8"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"},{"internalType":"address payable","name":"elem1","type":"address"}],"internalType":"struct T2","name":"_Oracle_addParticipant0_428","type":"tuple"},{"components":[{"internalType":"bool","name":"elem0","type":"bool"}],"internalType":"struct T6","name":"_Oracle_announceVerification0_428","type":"tuple"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T7","name":"_Oracle_announceWinner0_428","type":"tuple"},{"internalType":"bool","name":"_Oracle_correctContract0_428","type":"bool"}],"internalType":"struct T8","name":"elem1","type":"tuple"}],"indexed":false,"internalType":"struct T9","name":"_a","type":"tuple"}],"name":"_reach_e2","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v2878","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v3228","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v3236","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v3598","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v3606","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v3929","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"announceVerification","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address payable","name":"v0","type":"address"},{"indexed":false,"internalType":"address payable","name":"v1","type":"address"}],"name":"announceWinner","type":"event"},{"anonymous":false,"inputs":[],"name":"correctContract","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address payable","name":"v0","type":"address"},{"indexed":false,"internalType":"address payable","name":"v1","type":"address"}],"name":"newParticipant","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[{"internalType":"address payable","name":"v6836","type":"address"},{"internalType":"address payable","name":"v6837","type":"address"}],"name":"Oracle_addParticipant","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"bool","name":"v6842","type":"bool"}],"name":"Oracle_announceVerification","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"v6847","type":"uint256"}],"name":"Oracle_announceWinner","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"Oracle_correctContract","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"_reachCreationTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentState","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T8","name":"which","type":"uint8"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"},{"internalType":"address payable","name":"elem1","type":"address"}],"internalType":"struct T2","name":"_Oracle_addParticipant0_428","type":"tuple"},{"components":[{"internalType":"bool","name":"elem0","type":"bool"}],"internalType":"struct T6","name":"_Oracle_announceVerification0_428","type":"tuple"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T7","name":"_Oracle_announceWinner0_428","type":"tuple"},{"internalType":"bool","name":"_Oracle_correctContract0_428","type":"bool"}],"internalType":"struct T8","name":"elem1","type":"tuple"}],"internalType":"struct T9","name":"v6866","type":"tuple"}],"name":"_reachp_2","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"addressSkeptic","outputs":[{"components":[{"internalType":"enum _enum_T0","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"internalType":"address payable","name":"_Some","type":"address"}],"internalType":"struct T0","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"addressesOracles","outputs":[{"internalType":"address payable[5]","name":"","type":"address[5]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"author","outputs":[{"internalType":"address payable","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"deadline","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"interaction","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"isBottom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"participants","outputs":[{"components":[{"internalType":"enum _enum_T3","name":"which","type":"uint8"},{"internalType":"bool","name":"_None","type":"bool"},{"components":[{"internalType":"address payable","name":"elem0","type":"address"},{"internalType":"address payable","name":"elem1","type":"address"}],"internalType":"struct T2","name":"_Some","type":"tuple"}],"internalType":"struct T3[10]","name":"","type":"tuple[10]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"wagerDown","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"wagerUp","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"stateMutability":"payable","type":"receive"}]`,
  Bytecode: `0x62004da538819003906080601f8301601f1916810191906001600160401b0383119083101762000a6a578291604052608039608081016101c0821262000b6e57604051906200004e8262000be3565b608051825260bf81131562000b6e57604051926200006c8462000c1c565b610140918490831162000b6e5760a0945b83861062000bc857506020840152606060bf199091011262000b6e5760405190606082016001600160401b0381118382101762000a6a5760405251600281101562000b6e578152620000d161016062000c6a565b6020820152620000e361018062000c55565b6040828101919091528201526101a05160608201526101c05160808201526101e05160a08201526102005160c08201526200012061022062000c6a565b60e0820152436003556040516101c081016001600160401b0381118282101762000a6a576000916101a0916040528281528260208201528260408201528260608201528260808201526200017362000c78565b60a0820152604051620001868162000c1c565b60a036823760c08201528260e0820152826101008201528261012082015282610140820152620001b562000cef565b61016082015282610180820152015260405190620001d38262000be3565b604051620001e18162000c1c565b60a03682378252620001f262000cc3565b60208301526200020162000c99565b60408301526200021062000cc3565b60608301526200021f62000cef565b6080830152604051620002328162000c38565b61014036823760a08301526200024762000c78565b60c08301526200025662000d28565b60e083015260ff6004541662000baf577fe4faab143ee4f6ab5848b33b1c39e101aec01e720e1384826aef1ca110c33a256101e060405133815283516020820152620002ab6020850151604083019062000d60565b620002bf604085015160e083019062000db4565b6060840151610140820152608084015161016082015260a084015161018082015260c08401516101a082015260e084015115156101c0820152a18051801590811562000ba2575b501562000b8957608081015160a082015181019081811162000b7357811062000b6e57340362000b555760e08101511562000b4d5760a0810151155b1562000b34578151600090819052825160209081018290528351604090810183905284516060908101849052855160809081018590528387018051869052805185018690528388018051339052805130908701528389018051600190529051815186015251828901805191909152815181518701528151815186015281518151850152815181518401528151815160a0908101919091528251825160c0908101919091528351835160e09081019190915284518451610100908101919091529451935161012090810194909452828c0180518b905280518a018b9052805189018b9052805188018b9052805187018b905280519093018a9052825182018a9052825181018a90528251909401899052905190910187905288018051879052805186019690965285519088018051919091528551815190950194909452845184518401528451845190920191909152925191519092015251916001600160401b0361022084019081119084111762000a6a5760e08092610220850160405260008552604051620004d18162000c1c565b60a03682376020860152620004e562000c78565b60408601526000606086015260006080860152600060a0860152600060c086015260008286015260006101008601526200051e62000c99565b610120860152604051620005328162000c1c565b60a0368237610140860152600061016086015260006101808601526200055762000cef565b6101a08601526040516200056b8162000c38565b6101403682376101c08601526200058162000d28565b6101e086015260006102008601523385526020810151602086015260408101516040860152606081015160608601526080810151608086015260a081015160a086015260c081015160c0860152818101511515828601520151151560001462000b2c5760005b1515610100840152604081015161012084015280516101408401526000610160840152600161018084015260808101516101a084015260a08101516101c084015201516101e082015243610200820152604051806101e081011060018060401b036101e08301111762000a6a576101e08101604052600081526040516200066e8162000c1c565b60a036823760208201526200068262000c78565b60408201526000606082015260006080820152600060a0820152600060c0820152600060e08201526000610100820152620006bc62000c99565b610120820152604051620006d08162000c1c565b60a03682376101408201526000610160820152620006ed62000cef565b610180820152604051620007018162000c38565b6101403682376101a08201526200071762000d28565b6101c08201526101e060018060a01b03835116928383526020810151602084015260408101516040840152606081015160608401526080810151608084015260a081015160a084015260c081015160c084015260e0810151151560e084015261010081015115156101008401526101208101516101208401526101408101516101408401526101808101516101608401526101a08101516101808401526101c08101516101a084015201516101c0820152600360005543600155604051916020830152620007ee6020820151604084019062000d60565b62000802604082015160e084019062000db4565b6060810151610140830152608081015161016083015260a081015161018083015260c08101516101a083015260e081015115156101c083015261010081015115156101e08301526200085f61012082015161020084019062000de3565b610140810151600061024084015b6005821062000b13575050506101608101516102e0830152610180810151600061030084015b600a821062000ad1575050506101a0810151600061080084015b600a821062000aba57846101c085015161094082016000905b6005821062000a8057610b00845283610b2081016001600160401b0381118282101762000a6a5760405280516001600160401b03811162000a6a57600254600181811c9116801562000a5f575b602082101462000a4957601f8111620009df575b50602091601f8211600114620009755791819260009262000969575b50508160011b916000199060031b1c1916176002555b604051613fa6908162000dff8239f35b01519050828062000943565b601f19821692600260005260206000209160005b858110620009c657508360019510620009ac575b505050811b0160025562000959565b015160001960f88460031b161c191690558280806200099d565b9192602060018192868501518155019401920162000989565b60026000527f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace601f830160051c8101916020841062000a3e575b601f0160051c01905b81811062000a31575062000927565b6000815560010162000a22565b909150819062000a19565b634e487b7160e01b600052602260045260246000fd5b90607f169062000913565b634e487b7160e01b600052604160045260246000fd5b6020606060019260408651805162000a988162000d93565b83528481015115158584015201511515604082015201930191019091620008c6565b6020806001928551815201930191019091620008ad565b6020608060019262000b0660408751805162000aed8162000d93565b8452858101511515868501520151604083019062000de3565b0193019101909162000893565b602080600192855115158152019301910190916200086d565b6001620005e7565b60405163100960cb60e01b815260136004820152602490fd5b600162000342565b60405163100960cb60e01b815260126004820152602490fd5b600080fd5b634e487b7160e01b600052601160045260246000fd5b60405163100960cb60e01b815260116004820152602490fd5b9050600154148362000306565b60405163100960cb60e01b815260106004820152602490fd5b6020809162000bd78862000c55565b8152019501946200007d565b61010081019081106001600160401b0382111762000a6a57604052565b606081019081106001600160401b0382111762000a6a57604052565b60a081019081106001600160401b0382111762000a6a57604052565b61014081019081106001600160401b0382111762000a6a57604052565b51906001600160a01b038216820362000b6e57565b5190811515820362000b6e57565b6040519062000c878262000c00565b60006040838281528260208201520152565b60408051919082016001600160401b0381118382101762000a6a5760405260006020838281520152565b6040519062000cd28262000c00565b816000815260006020820152604062000cea62000c99565b910152565b6040519062000cfe8262000c38565b8160005b610140811062000d10575050565b60209062000d1d62000cc3565b818401520162000d02565b6040519062000d378262000c1c565b8160005b60a0811062000d48575050565b60209062000d5562000c78565b818401520162000d3b565b6000915b6005831062000d7257505050565b81516001600160a01b03168152600192909201916020918201910162000d64565b6002111562000d9e57565b634e487b7160e01b600052602160045260246000fd5b604090805162000dc48162000d93565b83526020818101511515908401528101516001600160a01b0316910152565b80516001600160a01b0390811683526020918201511691015256fe60406080815260048036101561001c575b5050361561001a57005b005b600090813560e01c8063173b7d7e146107215780631e93b0f11461070257806329dcb0cf146106b557806361736071146106755780636ba24022146106285780636c4470fb146105895780636c6973311461053c578063832307571461051d5780638a830443146104b15780638b81030014610441578063a6c3e6b9146103d2578063aaed29ac1461035d578063ab53f2c6146102f1578063ca4ebc4214610297578063e32c7165146101cf578063f04f1a09146101515763f88ed95f146100e45750610010565b3461014d578160031936011261014d5760036100fe610b94565b925403610136576020610140848460e0610127610119610a63565b868082518301019101610d4d565b01511515928391015251908152f35b602490600c84519163100960cb60e01b8352820152fd5b5080fd5b503461014d578160031936011261014d5760a0835161016f816109d2565b369037600361017c610b94565b9254036101b85760a060c06101b6858560206101a7610199610a63565b828082518301019101610d4d565b015193849101525180926108e4565bf35b602490600884519163100960cb60e01b8352820152fd5b50829081600319360112610293576001600160a01b039290358381169190829003610290576024359184831680930361014d576102859061020e610b94565b92839186519061021d8261094f565b602098899788840192845282528851916102368361094f565b89516102418161094f565b858152858a82015283528189840194610258610c2b565b865251168351525116878251015282825152518682510152610278610c93565b91825251858201526111e5565b015115159051908152f35b80fd5b8280fd5b503461014d578160031936011261014d5760036102b2610b94565b9254036102da5760206101a0848460806102cd610119610a63565b0151928391015251908152f35b602490600f84519163100960cb60e01b8352820152fd5b82843461014d578160031936011261014d57815461030d610a63565b91805193849283526020828185015284518093850152815b83811061034657505060608094508284010152601f80199101168101030190f35b808601820151878201606001528694508101610325565b503461014d578160031936011261014d57610376610b0c565b506003610381610b94565b9254036103bb57606060a06101b68585816103ac61039d610a63565b60208082518301019101610d4d565b015193849101525180926108b7565b602490600784519163100960cb60e01b8352820152fd5b503461014d578160031936011261014d5760036103ed610b94565b92540361042a57602060e08484610402610a63565b80516001600160a01b039161041d9181018701908701610d4d565b5116928391015251908152f35b602490600984519163100960cb60e01b8352820152fd5b508290602036600319011261029357602092610285606092610461610b94565b928391865161046f8161094f565b875161047a81610980565b83815281528881019161048b610c2b565b83523581515260028251525186825101526104a4610c93565b91825251878201526111e5565b508290602036600319011261029357358015158091036102935760209261028583926104db610b94565b92839185516104e98161094f565b86516104f481610980565b838152815288810191610505610c2b565b835281515260018251525186825101526104a4610c93565b82843461014d578160031936011261014d576020906001549051908152f35b503461014d578160031936011261014d576003610557610b94565b925403610572576020610120848460606102cd610119610a63565b602490600b84519163100960cb60e01b8352820152fd5b503461014d578160031936011261014d576105a2610b61565b506105ab610b94565b9060038354036106115750610160926105c2610a63565b916101806105da602094858082518301019101610d4d565b01519401849052519291835b600a82106105f45761050085f35b82608082610605600194885161088a565b019401910190926105e6565b602490600d85519163100960cb60e01b8352820152fd5b503461014d578160031936011261014d576003610643610b94565b92540361065e576020610180848460a06102cd610119610a63565b602490600e84519163100960cb60e01b8352820152fd5b82848160031936011261014d576080602092610285610692610b94565b809261069c610c93565b87810190600382515251151586825101526104a4610c93565b503461014d578160031936011261014d5760036106d0610b94565b9254036106eb576020610100848460c06102cd610119610a63565b602490600a84519163100960cb60e01b8352820152fd5b82843461014d578160031936011261014d576020906003549051908152f35b509160e036600319011261014d57610737610b94565b81516107428161094f565b8435815260c03660231901126108385782519460a086016001600160401b0381118782101761083c5784526024359081101561083057855282604319360112610838578251946107918661094f565b6001600160a01b03956044358781168103610834578152606435968716870361082c576020968782015286820152856083193601126108305783516107d581610980565b6084358015158103610834578152848201528560a3193601126108305783516107fd81610980565b60a4358152606082015260c435801515810361082c5760808201528582015261082691906111e5565b51908152f35b8580fd5b8480fd5b8680fd5b8380fd5b634e487b7160e01b865260418252602486fd5b6002111561085957565b634e487b7160e01b600052602160045260246000fd5b80516001600160a01b03908116835260209182015116910152565b906040806108b593805161089d8161084f565b8452602081015115156020850152015191019061086f565b565b60409080516108c58161084f565b83526020818101511515908401528101516001600160a01b0316910152565b6000915b600583106108f557505050565b81516001600160a01b0316815260019290920191602091820191016108e8565b90600182811c92168015610945575b602083101461092f57565b634e487b7160e01b600052602260045260246000fd5b91607f1691610924565b604081019081106001600160401b0382111761096a57604052565b634e487b7160e01b600052604160045260246000fd5b602081019081106001600160401b0382111761096a57604052565b606081019081106001600160401b0382111761096a57604052565b6101e081019081106001600160401b0382111761096a57604052565b60a081019081106001600160401b0382111761096a57604052565b61014081019081106001600160401b0382111761096a57604052565b610b2081019081106001600160401b0382111761096a57604052565b608081019081106001600160401b0382111761096a57604052565b601f909101601f19168101906001600160401b0382119082101761096a57604052565b6040519060008260025491610a7783610915565b808352600193808516908115610aeb5750600114610a9d575b506108b592500383610a40565b60026000908152600080516020613f5a83398151915294602093509091905b818310610ad35750506108b5935082010138610a90565b85548884018501529485019487945091830191610abc565b90506108b594506020925060ff191682840152151560051b82010138610a90565b60405190610b198261099b565b60006040838281528260208201520152565b60405190610b388261099b565b8160008152600060208201526040805191610b528361094f565b60008352600060208401520152565b60405190610b6e826109ed565b8160005b6101408110610b7f575050565b602090610b8a610b2b565b8184015201610b72565b604051906101c082016001600160401b0381118382101761096a57604052816101a0600091828152826020820152826040820152826060820152826080820152610bdc610b0c565b60a0820152604051610bed816109d2565b60a036823760c08201528260e0820152826101008201528261012082015282610140820152610c1a610b61565b610160820152826101808201520152565b60408051919060a083016001600160401b0381118482101761096a5781526080836000928382528051610c5d8161094f565b84815284602082015260208301528051610c7681610980565b8481528183015251610c8781610980565b83815260608201520152565b60405190610ca08261094f565b81600081526020610caf610c2b565b910152565b60405190610cc1826109d2565b8160005b60a08110610cd1575050565b602090610cdc610b0c565b8184015201610cc5565b51906001600160a01b0382168203610cfa57565b600080fd5b51908115158203610cfa57565b9190826040910312610cfa57604080519081016001600160401b0381118282101761096a576040526020610caf818395610d4581610ce6565b855201610ce6565b9081810391610b008312610cfa57604051926101e084016001600160401b0381118582101761096a57604052610d8282610ce6565b845282603f83011215610cfa5760405190610d9c826109d2565b8160c0840192858411610cfa5760208501905b84821061103f5750506020860152606060bf1990910112610cfa5760405190610dd78261099b565b516002811015610cfa578152610def60e08301610cff565b6020820152610e016101008301610ce6565b604082015260408401526101208101516060840152610140810151608084015261016081015160a084015261018081015160c0840152610e446101a08201610cff565b60e0840152610e566101c08201610cff565b610100840152610e6a826101e08301610d0c565b6101208401528161023f82011215610cfa57604051610e88816109d2565b80836102c0840111610cfa576102208301905b6102c0840182106110275750506101408401526102c0810151610160840152816102ff82011215610cfa57604051610ed2816109ed565b806107e0830191848311610cfa576102e08401905b838210610fd0575050610180850152826107ff83011215610cfa57604051610f0e816109ed565b80610920840192858411610cfa57905b838210610fc05750506101a08501528261093f83011215610cfa5760405192610f46846109d2565b610b0084930191818311610cfa57925b828410610f6a57505050506101c082015290565b606084830312610cfa5760405190610f818261099b565b8451906002821015610cfa578260209260609452610fa0838801610cff565b83820152610fb060408801610cff565b6040820152815201930192610f56565b8151815260209182019101610f1e565b608082870312610cfa5760405190610fe78261099b565b8251906002821015610cfa578260209260809452611006838601610cff565b838201526110178960408701610d0c565b6040820152815201910190610ee7565b6020809161103484610cff565b815201910190610e9b565b6020809161104c84610ce6565b815201910190610daf565b5160048110156108595790565b60001981146110735760010190565b634e487b7160e01b600052601160045260246000fd5b90600581101561109a5760051b0190565b634e487b7160e01b600052603260045260246000fd5b60408051919061022083016001600160401b0381118482101761096a5781526102008360009283825280516110e4816109d2565b60a036823760208301526110f6610b0c565b818301528360608301528360808301528360a08301528360c08301528360e083015283610100830152805161112a8161094f565b848152846020820152610120830152805190611145826109d2565b60a036833761014091828401528461016084015284610180840152611168610b61565b6101a08401525190611179826109ed565b3682376101c082015261118a610cb4565b6101e08201520152565b90600a81101561109a5760051b0190565b6001600160a01b0391821681529116602082015260400190565b6040809180516111ce8161084f565b845260208101511515602085015201511515910152565b60405192916107c084016001600160401b0381118582101761096a578060405261120e8161094f565b6000815260006107e08601528452611224610b0c565b6020850152611231610b0c565b604085015261123e610b0c565b606085015260006080850152611252610b0c565b60a0850152600060c0850152600060e085015261126d610b2b565b61010085015260405161127f8161094f565b6000815260006020820152610120850152611298610b2b565b6101408501526112a6610b0c565b6101608501526112b4610b0c565b61018085015260006101a08501526112ca610b0c565b6101c085015260006101e085015260006102008501526112e8610b2b565b6102208501526040516112fa8161094f565b6000815260006020820152610240850152611313610b2b565b6102608501526040516113258161094f565b600081526000602082015261028085015261133e610b2b565b6102a085015260405161135081610980565b600081526102c0850152611362610b0c565b6102e0850152611370610b0c565b61030085015261137e610b0c565b6103208501526000610340850152611394610b0c565b6103608501526113a2610b0c565b6103808501526113b0610b0c565b6103a085015260006103c08501526113c6610b0c565b6103e08501526113d4610b0c565b6104008501526113e2610cb4565b61042085015260006104408501526000610460850152611400610b0c565b61048085015260006104a085015260405161141a81610980565b600081526104c085015261142c610b0c565b6104e085015261143a610b0c565b610500850152611448610b0c565b610520850152600061054085015261145e610b0c565b61056085015261146c610b0c565b61058085015261147a610b0c565b6105a085015260006105c0850152611490610b0c565b6105e085015260006106008501526040516114aa816109d2565b60a036823761062085015260006106408501526040516114c9816109ed565b6101403682376106608501526040516114e18161094f565b60008152600060208201526106808501526114fa610b0c565b6106a0850152611508610b0c565b6106c0850152611516610b0c565b6106e0850152600061070085015261152c610b0c565b61072085015261153a610b0c565b610740850152611548610b0c565b610760850152600061078085015261155e610b0c565b6107a085015260ff60045416613f14576040513381528251602082015260208301518051916004831015610859576080610100927fb4e75f8a0fbdaa1b5cee88b488e77acbb14cc695c4de4297019764284fc076979460408401526115cb6020820151606085019061086f565b604081015151151560a084015260608101515160c08401520151151560e0820152a1600360005403613efb576040516002549290600061160a85610915565b808352600186168015613ed957600114613e8c575b509061039d81611630930382610a40565b9281518015908115613e80575b5015613e67576116506020830151611057565b6004811015610859576121495750602080910151015184526000602085015152600060208086015101526020840151606085015260005b600581106120c5575060016060850151806040870152516116a78161084f565b6116b08161084f565b036120ac57600a6101608301511015612093576101008201511561207a57600060e085015260005b600a8110611fad575060e084015115801560c0860152611fa65760005b15611f8d5734611f7457602084015161018085015260005b60058110611ee857506001610180850151806101608701525161172f8161084f565b6117388161084f565b03611ecf57600061020085015260005b600a8110611dff57506102008401511580156101e0860152611df85760005b15611ddf57835151610280850180516001600160a01b03928316905285516020908101518251908416908201526102a087018051600190529151915160409081019290925286518051908201519251600095929492937fe83724cfd6213e1ca8e053f3ce1163bc5fea531b9b733cc0b8443d16084c4c0d93919283926117f19281169116836111a5565b0390a17fc8eed72dcfeaad9a792c30a995fdd494599c7beeb00f4d3dfe2208e723c5641f82604051858152a101526118276110b0565b9060018060a01b0381511682526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e0810151151560e0830152610100810151151561010083015261012081015161012083015261014081015161014083015260006101608301526118b8610160820151613f2d565b6101808301526101808101516102a06101608301519501516118d8610b61565b9160005b600a8110611db057505085611901916118fa6101c096979885611194565b5282611194565b506101a08401526101a08101518284015201516101e08201524361020082015261016081015115156000146119b25750600080556000600155611945600254610915565b8061194d5750565b601f811160011461196057506000600255565b60026000526119a590601f0160051c600080516020613f5a833981519152017f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acf613f42565b6000602081208160025555565b906040516119bf816109b6565b600081526040516119cf816109d2565b60a036823760208201526119e1610b0c565b60408201526000606082015260006080820152600060a0820152600060c0820152600060e08201526000610100820152604051611a1d8161094f565b6000815260006020820152610120820152604051611a3a816109d2565b60a03682376101408201526000610160820152611a55610b61565b610180820152604051611a67816109ed565b6101403682376101a0820152611a7b610cb4565b6101c08201526101e060018060a01b03845116938483526020810151602084015260408101516040840152606081015160608401526080810151608084015260a081015160a084015260c081015160c084015260e0810151151560e084015261010081015115156101008401526101208101516101208401526101408101516101408401526101808101516101608401526101a08101516101808401526101c08101516101a084015201516101c0820152600360005543600155604051926020840152611b50602082015160408501906108e4565b611b62604082015160e08501906108b7565b6060810151610140840152608081015161016084015260a081015161018084015260c08101516101a084015260e081015115156101c084015261010081015115156101e0840152611bbd61012082015161020085019061086f565b610140810151600061024085015b60058210611d98575050506101608101516102e0840152610180810151600061030085015b600a8210611d7a575050506101a0810151600061080085015b600a8210611d64575050506101c00151600061094084015b60058210611d4657505050610b008252611c3a82610a09565b81516001600160401b03811161096a57611c55600254610915565b601f8111611cfe575b50602092601f8211600114611c9b5792819293600092611c90575b50508160011b916000199060031b1c191617600255565b015190503880611c79565b601f19821693600260005260206000209160005b868110611ce65750836001959610611ccd575b505050811b01600255565b015160001960f88460031b161c19169055388080611cc2565b91926020600181928685015181550194019201611caf565b6002600052611d3690600080516020613f5a833981519152601f840160051c81019160208510611d3c575b601f0160051c0190613f42565b38611c5e565b9091508190611d29565b6020606082611d5860019487516111bf565b01930191019091611c21565b6020806001928551815201930191019091611c09565b6020608082611d8c600194875161088a565b01930191019091611bf0565b60208060019285511515815201930191019091611bcb565b80611dbe611dda9284611194565b51611dc98287611194565b52611dd48186611194565b50611064565b6118dc565b60405163100960cb60e01b8152601d6004820152602490fd5b6001611767565b80611e12611e7692610180860151611194565b51610220870152855151610240870180516001600160a01b0392831690528751602090810151825193169201919091526102608701805160019052905190516040015261020086015115611e7b5761020086015115155b1515610200870152611064565b611748565b610260860151604051611e9260208201809361088a565b60808152611e9f816109d2565b519020610220870151604051611eb960208201809361088a565b60808152611ec6816109d2565b51902014611e69565b60405163100960cb60e01b8152601c6004820152602490fd5b611f5c9060018060a01b0380611f02836020880151611089565b51166101a088015260016101c0880151528160406101c0890151015261018087015151611f2e8161084f565b611f378161084f565b611f6c576101a08701511633145b15611f61576101c08601515b610180870152611064565b61170d565b610180860151611f51565b506000611f45565b60405163100960cb60e01b8152601b6004820152602490fd5b60405163100960cb60e01b8152601a6004820152602490fd5b60016116f5565b80611fc061202192610180860151611194565b51610100870152855151610120870180516001600160a01b0392831690528751602090810151825193169201919091526101408701805160019052905190516040015260e0860151156120265760e086015115155b151560e0870152611064565b6116d8565b61014086015160405161203d60208201809361088a565b6080815261204a816109d2565b51902061010087015160405161206460208201809361088a565b60808152612071816109d2565b51902014612015565b60405163100960cb60e01b815260196004820152602490fd5b60405163100960cb60e01b815260186004820152602490fd5b60405163100960cb60e01b815260176004820152602490fd5b6121329060018060a01b03806120df836020880151611089565b51166080880152600160a08801515281604060a089015101526060870151516121078161084f565b6121108161084f565b6121415760808701511633145b156121375760a08601515b6060870152611064565b611687565b6060860151612128565b50600061211d565b61215b60208397949596970151611057565b600481101561085957600103612bb257506020604091015101516102c082015260006102e082015152600060206102e083015101526102e081015161032082015260005b60058110612b265750600161032082015180610300840152516121c18161084f565b6121ca8161084f565b03612b0d5760e083015115612af45734612adb576102e08101516103a082015260005b60058110612a4f575060016103a0820151806103808401525161220f8161084f565b6122188161084f565b03612a36576001610400820151526102c0810151511515604061040083015101526101c08301516001610380830151516122518161084f565b61225a8161084f565b03612a2f57604061038083015101515b610400830151612278610cb4565b9260005b60058110612a065750509061229c916122958285611089565b5282611089565b50610420820152600061046082015260005b600581106129625750600361046082015180610440840152146000146124a5577f3d4eb33e4d2359cd4a519091b0a501d8c8ef06d94641274a49f4f59a9d75b2b860206102c0830151511515604051908152a16102c0810151511561245457600080808060018060a01b038751165b6080880151908290821561244a575b6001600160a01b031690f11561243e5760006040610420937fc0826cc8a7cdb13a98cbbbd33a2747e670557a5a38a7cc1b34cd0c75c312881a60208351858152a101526101a061237a6110b0565b9360018060a01b0381511685526020810151602086015260408101516040860152606081015160608601526080810151608086015260a081015160a086015260c081015160c086015260e0810151151560e0860152610100810151151561010086015261012081015161012086015261014081015161014086015260016101608601526101608101516101808601526101808101518286015201516101c084015201516101e082015261020043910152600080556000600155611945600254610915565b6040513d6000823e3d90fd5b6108fc915061232c565b6040830160018151516124668161084f565b61246f8161084f565b036124905751604001516000908190819081906001600160a01b031661231d565b50600080808060018060a01b0387511661231d565b60006040610420937f4bcf7a59912fb7b771b4d767fcd38ce5b2c085963dcc2deb1e12f6da0656793c60208398979851858152a101526101a06124e66110b0565b9460018060a01b0381511686526020810151602087015260408101516040870152606081015160608701526080810151608087015260a081015160a087015260c081015160c087015260e0810151151560e0870152610100810151151561010087015261012081015161012087015261014081015161014087015260006101608701526101608101516101808701526101808101518287015201516101c085015201516101e0830152436102008301526040516125a2816109b6565b600081526040516125b2816109d2565b60a036823760208201526125c4610b0c565b60408201526000606082015260006080820152600060a0820152600060c0820152600060e082015260006101008201526040516126008161094f565b600081526000602082015261012082015260405161261d816109d2565b60a03682376101408201526000610160820152612638610b61565b61018082015260405161264a816109ed565b6101403682376101a082015261265e610cb4565b6101c08201526101e060018060a01b03845116938483526020810151602084015260408101516040840152606081015160608401526080810151608084015260a081015160a084015260c081015160c084015260e0810151151560e084015261010081015115156101008401526101208101516101208401526101408101516101408401526101808101516101608401526101a08101516101808401526101c08101516101a084015201516101c0820152600360005543600155604051926020840152612733602082015160408501906108e4565b612745604082015160e08501906108b7565b6060810151610140840152608081015161016084015260a081015161018084015260c08101516101a084015260e081015115156101c084015261010081015115156101e08401526127a061012082015161020085019061086f565b610140810151600061024085015b6005821061294a575050506101608101516102e0840152610180810151600061030085015b600a821061292c575050506101a0810151600061080085015b600a8210612916575050506101c00151600061094084015b600582106128f857505050610b00825261281d82610a09565b81516001600160401b03811161096a57612838600254610915565b601f81116128bb575b50602092601f82116001146128725792819293600092611c905750508160011b916000199060031b1c191617600255565b601f19821693600260005260206000209160005b8681106128a35750836001959610611ccd57505050811b01600255565b91926020600181928685015181550194019201612886565b60026000526128f290600080516020613f5a833981519152601f840160051c81019160208510611d3c57601f0160051c0190613f42565b38612841565b602060608261290a60019487516111bf565b01930191019091612804565b60208060019285518152019301910190916127ec565b602060808261293e600194875161088a565b019301910190916127d3565b602080600192855115158152019301910190916127ae565b806129756129f092610420850151611089565b518061048085015260405161298e6020820180936111bf565b6060815261299b81610a25565b5190206104008401516040516129b56020820180936111bf565b606081526129c281610a25565b519020036129f5576129d8610460840151613f2d565b6104a08401525b6104a0830151610460840152611064565b6122ae565b6104608301516104a08401526129df565b80612a14612a2a9284611089565b51612a1f8288611089565b52611dd48187611089565b61227c565b600061226a565b60405163100960cb60e01b815260216004820152602490fd5b612ac39060018060a01b0380612a69836020890151611089565b51166103c085015260016103e0850151528160406103e086015101526103a084015151612a958161084f565b612a9e8161084f565b612ad3576103c08401511633145b15612ac8576103e08301515b6103a0840152611064565b6121ed565b6103a0830151612ab8565b506000612aac565b60405163100960cb60e01b815260206004820152602490fd5b60405163100960cb60e01b8152601f6004820152602490fd5b60405163100960cb60e01b8152601e6004820152602490fd5b612b9a9060018060a01b0380612b40836020890151611089565b5116610340850152600161036085015152816040610360860151015261032084015151612b6c8161084f565b612b758161084f565b612baa576103408401511633145b15612b9f576103608301515b610320840152611064565b61219f565b610320830151612b8f565b506000612b83565b612bc26020839694960151611057565b60048110156108595760020361373057506020606091015101516104c084015260006104e084015152600060206104e085015101526104e083015161052084015260005b600581106136a4575060016105208401518061050086015251612c288161084f565b612c318161084f565b0361368b57612c6f610140820151600161050086015151612c518161084f565b612c5a8161084f565b03613683576040610500860151015190611089565b511561367c5760005b15613663576104c083015151610160820151111561364c5761010081015115613633573461361a576104e08301516105a084015260005b6005811061358e575060016105a08401518061058086015251612cd18161084f565b612cda8161084f565b0361357557600161058084015151612cf18161084f565b612cfa8161084f565b0361356b57612d1f604061058085015101515b80610600860152610140830151611089565b51156135645760005b1561354b5761014081015161060084015160405191612d46836109d2565b60a036843760005b6005811061352b575050612d6460019183611089565b526106208401526101a08101612d8b612d8582516104c08701515190611194565b51613f2d565b908161064086015251906104c08501515160405192612da9846109ed565b61014036853760005b600a8110613507575050612dc69083611194565b52610660840152610640830151600303613049576001612df26101808301516104c08601515190611194565b5151612dfd8161084f565b612e068161084f565b0361302f57600080516020613f7a8339815191526040612e326101808401516104c08701515190611194565b5101515b61068085018190528051602090910151604051918291612e63916001600160a01b039182169116836111a5565b0390a1600080808060018060a01b03610680880151511660a086015190828215613026575bf11561243e576104c083015151612fd557600080808060018060a01b038551165b60808601519082908215612fcb575b6001600160a01b031690f11561243e57600060606101c0937f02b964c10f2d014211e59c845a659dbd3a292ecfaf0a77b7bb7428b05d5b51aa6020604051858152a10152610660612f076110b0565b9360018060a01b0383511685526020830151602086015260408301516040860152606083015160608601526080830151608086015260a083015160a086015260c083015160c086015260e0830151151560e0860152610100830151151561010086015261012083015161012086015261062081015161014086015260016101608601526101608301516101808601526101808301516101a086015201518284015201516101e082015261020043910152600080556000600155611945600254610915565b6108fc9150612eb8565b604081016001815151612fe78161084f565b612ff08161084f565b036130115751604001516000908190819081906001600160a01b0316612ea9565b50600080808060018060a01b03855116612ea9565b506108fc612e88565b600080516020613f7a833981519152610120820151612e36565b600060606101c0937f57695a85a3704fb28f823d454540adf22def96166815403c2150d4bdf8f9b4206020604098979851858152a1015261066061308b6110b0565b9460018060a01b0383511686526020830151602087015260408301516040870152606083015160608701526080830151608087015260a083015160a087015260c083015160c087015260e0830151151560e0870152610100830151151561010087015261012083015161012087015261062081015161014087015260006101608701526101608301516101808701526101808301516101a087015201518285015201516101e083015243610200830152604051613147816109b6565b60008152604051613157816109d2565b60a03682376020820152613169610b0c565b60408201526000606082015260006080820152600060a0820152600060c0820152600060e082015260006101008201526040516131a58161094f565b60008152600060208201526101208201526040516131c2816109d2565b60a036823761014082015260006101608201526131dd610b61565b6101808201526040516131ef816109ed565b6101403682376101a0820152613203610cb4565b6101c08201526101e060018060a01b03845116938483526020810151602084015260408101516040840152606081015160608401526080810151608084015260a081015160a084015260c081015160c084015260e0810151151560e084015261010081015115156101008401526101208101516101208401526101408101516101408401526101808101516101608401526101a08101516101808401526101c08101516101a084015201516101c08201526003600055436001556040519260208401526132d8602082015160408501906108e4565b6132ea604082015160e08501906108b7565b6060810151610140840152608081015161016084015260a081015161018084015260c08101516101a084015260e081015115156101c084015261010081015115156101e084015261334561012082015161020085019061086f565b610140810151600061024085015b600582106134ef575050506101608101516102e0840152610180810151600061030085015b600a82106134d1575050506101a0810151600061080085015b600a82106134bb575050506101c00151600061094084015b6005821061349d57505050610b0082526133c282610a09565b81516001600160401b03811161096a576133dd600254610915565b601f8111613460575b50602092601f82116001146134175792819293600092611c905750508160011b916000199060031b1c191617600255565b601f19821693600260005260206000209160005b8681106134485750836001959610611ccd57505050811b01600255565b9192602060018192868501518155019401920161342b565b600260005261349790600080516020613f5a833981519152601f840160051c81019160208510611d3c57601f0160051c0190613f42565b386133e6565b60206060826134af60019487516111bf565b019301910190916133a9565b6020806001928551815201930191019091613391565b60206080826134e3600194875161088a565b01930191019091613378565b60208060019285511515815201930191019091613353565b806135156135269284611194565b516135208288611194565b52611064565b612db2565b806135396135469284611089565b5115156135208287611089565b612d4e565b60405163100960cb60e01b815260286004820152602490fd5b6001612d28565b612d1f6000612d0d565b60405163100960cb60e01b815260276004820152602490fd5b6136029060018060a01b03806135a8836020870151611089565b51166105c087015260016105e0870151528160406105e088015101526105a0860151516135d48161084f565b6135dd8161084f565b613612576105c08601511633145b15613607576105e08501515b6105a0860152611064565b612caf565b6105a08501516135f7565b5060006135eb565b60405163100960cb60e01b815260266004820152602490fd5b60405163100960cb60e01b815260256004820152602490fd5b602460405163100960cb60e01b8152816004820152fd5b60405163100960cb60e01b815260236004820152602490fd5b6001612c78565b600090611089565b60405163100960cb60e01b815260226004820152602490fd5b6137189060018060a01b03806136be836020870151611089565b51166105408701526001610560870151528160406105608801510152610520860151516136ea8161084f565b6136f38161084f565b613728576105408601511633145b1561371d576105608501515b610520860152611064565b612c06565b61052085015161370d565b506000613701565b92919493906020613742910151611057565b60048110156108595760031461375a575b5050509050565b60006106a082015152600060206106a083015101526106a08101516106e082015260005b60058110613ddb575060016106e0820151806106c0840152516137a08161084f565b6137a98161084f565b03613dc25734613da9576106a081015161076082015260005b60058110613d1d57506107408161076060019301519182910152516137e68161084f565b6137ef8161084f565b03613d045760806000917f66bde436efc17e0323e9feec3afb83d9a3ba1909a3322824689aff8ef5b563f460206040517f8ffd2eb5debd6cf560d4ab7314b178f04489430b8da10536115d87c63836438c8682a1858152a101526101c06138546110b0565b9360018060a01b0381511685526020810151602086015260408101516040860152606081015160608601526080810151608086015260a081015160a086015260c081015160c086015260e0810151151560e0860152610100810151151561010086015261012081015161012086015261014081015161014086015260006101608601526101608101516101808601526101808101516101a08601526101a08101518286015201516101e084015243610200840152604051613914816109b6565b60008152604051613924816109d2565b60a03682376020820152613936610b0c565b60408201526000606082015260006080820152600060a0820152600060c0820152600060e082015260006101008201526040516139728161094f565b600081526000602082015261012082015260405161398f816109d2565b60a036823761014082015260006101608201526139aa610b61565b6101808201526040516139bc816109ed565b6101403682376101a08201526139d0610cb4565b6101c08201526101e060018060a01b03855116948583526020810151602084015260408101516040840152606081015160608401526080810151608084015260a081015160a084015260c081015160c084015260e0810151151560e084015261010081015115156101008401526101208101516101208401526101408101516101408401526101808101516101608401526101a08101516101808401526101c08101516101a084015201516101c0820152600360005543600155604051936020850152613aa5602082015160408601906108e4565b613ab7604082015160e08601906108b7565b6060810151610140850152608081015161016085015260a081015161018085015260c08101516101a085015260e081015115156101c085015261010081015115156101e0850152613b1261012082015161020086019061086f565b610140810151600061024086015b60058210613cec575050506101608101516102e0850152610180810151600061030086015b600a8210613cce575050506101a0810151600061080086015b600a8210613cb8575050506101c00151600061094085015b60058210613c9a57505050610b008352613b8f83610a09565b8251906001600160401b03821161096a57613ba990610915565b601f8111613c5d575b50602092601f8211600114613bf75792819293600092613bec575b50508160011b916000199060031b1c1916176002555b80388080613753565b015190503880613bcd565b601f19821693600260005260206000209160005b868110613c455750836001959610613c2c575b505050811b01600255613be3565b015160001960f88460031b161c19169055388080613c1e565b91926020600181928685015181550194019201613c0b565b6002600052613c9490600080516020613f5a833981519152601f840160051c81019160208510611d3c57601f0160051c0190613f42565b38613bb2565b6020606082613cac60019487516111bf565b01930191019091613b76565b6020806001928551815201930191019091613b5e565b6020608082613ce0600194875161088a565b01930191019091613b45565b60208060019285511515815201930191019091613b20565b60405163100960cb60e01b8152602b6004820152602490fd5b613d919060018060a01b0380613d378360208b0151611089565b511661078085015260016107a0850151528160406107a0860151015261076084015151613d638161084f565b613d6c8161084f565b613da1576107808401511633145b15613d96576107a08301515b610760840152611064565b6137c2565b610760830151613d86565b506000613d7a565b60405163100960cb60e01b8152602a6004820152602490fd5b60405163100960cb60e01b815260296004820152602490fd5b613e4f9060018060a01b0380613df58360208b0151611089565b511661070085015260016107208501515281604061072086015101526106e084015151613e218161084f565b613e2a8161084f565b613e5f576107008401511633145b15613e54576107208301515b6106e0840152611064565b61377e565b6106e0830151613e44565b506000613e38565b60405163100960cb60e01b815260166004820152602490fd5b9050600154143861163d565b60026000908152600080516020613f5a833981519152939250905b808210613ebf5750909150810160200161039d61161f565b919260018160209254838588010152019101909291613ea7565b5060ff19861660208085019190915290151560051b830101905061039d61161f565b60405163100960cb60e01b815260156004820152602490fd5b60405163100960cb60e01b815260146004820152602490fd5b906001820191828111611073578210610cfa57565b818110613f4d575050565b60008155600101613f4256fe405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acec3d6b5cd189c204b08dae639bc4a3071503a84ef5b28c1bc84fda381441a6ec2a164736f6c6343000810000a`,
  BytecodeLen: 19877,
  version: 9,
  views: {
    }
  };
export const _stateSourceMap = {
  2: {
    at: './claim.rsh:163:11:after expr stmt semicolon',
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
