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
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_UInt;
  
  return {
    infos: {
      },
    views: {
      3: [ctc0, ctc0]
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
export async function Admin(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Admin expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Admin expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Tuple([]);
  
  
  const v90 = stdlib.protect(ctc0, interact.secret, 'for Admin\'s interact field secret');
  
  const txn1 = await (ctc.sendrecv({
    args: [v90],
    evt_cnt: 1,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:17:9:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:17:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v94], secs: v96, time: v95, didSend: v27, from: v93 } = txn1;
      
      ;
      const v97 = stdlib.checkedBigNumberify('./index.rsh:20:22:decimal', stdlib.UInt_max, '0');
      const v98 = v95;
      
      if (await (async () => {
        
        return true;})()) {
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
    tys: [ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v94], secs: v96, time: v95, didSend: v27, from: v93 } = txn1;
  ;
  let v97 = stdlib.checkedBigNumberify('./index.rsh:20:22:decimal', stdlib.UInt_max, '0');
  let v98 = v95;
  
  let txn2 = txn1;
  while (await (async () => {
    
    return true;})()) {
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 2,
      out_tys: [ctc1],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v112], secs: v114, time: v113, didSend: v65, from: v111 } = txn3;
    undefined /* setApiDetails */;
    ;
    await txn3.getOutput('Client_read_secret', 'v94', ctc0, v94);
    const v123 = stdlib.safeAdd(v97, stdlib.checkedBigNumberify('./index.rsh:27:28:decimal', stdlib.UInt_max, '1'));
    const cv97 = v123;
    const cv98 = v113;
    
    v97 = cv97;
    v98 = cv98;
    
    txn2 = txn3;
    continue;
    
    }
  return;
  
  
  };
export async function _Client_read_secret3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Client_read_secret3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Client_read_secret3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Tuple([]);
  const ctc2 = stdlib.T_Null;
  
  
  const [v94, v97] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc0, ctc0]);
  const v108 = stdlib.protect(ctc1, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:24:34:application call to [unknown function] (defined at: ./index.rsh:24:34:function exp)', 'at ./index.rsh:24:34:application call to [unknown function] (defined at: ./index.rsh:24:34:function exp)'],
    msg: 'in',
    who: 'Client_read_secret'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v94, v97, v108],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc1],
    pay: [stdlib.checkedBigNumberify('./index.rsh:3:19:decimal', stdlib.UInt_max, '1000'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v112], secs: v114, time: v113, didSend: v65, from: v111 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Client_read_secret"
        });
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:3:19:decimal', stdlib.UInt_max, '1000'),
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v118 = await txn1.getOutput('Client_read_secret', 'v94', ctc0, v94);
      
      const v123 = stdlib.safeAdd(v97, stdlib.checkedBigNumberify('./index.rsh:27:28:decimal', stdlib.UInt_max, '1'));
      const v177 = v123;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc0, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [v112], secs: v114, time: v113, didSend: v65, from: v111 } = txn1;
  undefined /* setApiDetails */;
  ;
  const v118 = await txn1.getOutput('Client_read_secret', 'v94', ctc0, v94);
  if (v65) {
    stdlib.protect(ctc2, await interact.out(v112, v118), {
      at: './index.rsh:24:11:application',
      fs: ['at ./index.rsh:24:11:application call to [unknown function] (defined at: ./index.rsh:24:11:function exp)', 'at ./index.rsh:26:12:application call to "ret" (defined at: ./index.rsh:25:33:function exp)', 'at ./index.rsh:25:33:application call to [unknown function] (defined at: ./index.rsh:25:33:function exp)'],
      msg: 'out',
      who: 'Client_read_secret'
      });
    }
  else {
    }
  
  const v123 = stdlib.safeAdd(v97, stdlib.checkedBigNumberify('./index.rsh:27:28:decimal', stdlib.UInt_max, '1'));
  const v177 = v123;
  return;
  
  
  
  };
export async function Client_read_secret(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Client_read_secret expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Client_read_secret expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _Client_read_secret3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
const _ALGO = {
  ABI: {
    impure: [`Client_read_secret()uint64`],
    pure: [],
    sigs: [`Client_read_secret()uint64`]
    },
  GlobalNumByteSlice: 2,
  GlobalNumUint: 0,
  LocalNumByteSlice: 0,
  LocalNumUint: 0,
  appApproval: `ByAFAAECCAMmAgABACI1ADEYQQEtKGRJIls1ASVbNQI2GgAXSUEAEiI1BCM1BoGw7uDLBxJEKEIAFjYaAhc1BDYaAzYaARdJJAxAAFMkEkQhBDQBEkQ0BEkiEkw0AhIRRClkSTUDIls1/0k1BTX+gAQlPLfXNP5QsIHoB4gA4IAIAAAAAAAAAF40/xZQsDT/FjUHNP80AyVbIwgyBkIAMyISRIGgjQaIALUiNAESRDQESSISTDQCEhFESTUFFzX/gASCxGH+NP8WULA0/yIyBkIAADX/Nf5JNf0WNP4WUClLAVcAEGdIIQQ1ATIGNQJCABwxGYEFEkSxIrIBIrIII7IQMgmyCTIKsgezQgAFMRkiEkQoNAEWNAIWUGc0BkEACoAEFR98dTQHULA0AEkjCDIEEkQxFhJEI0MxGSISREL/3yIxNBJEJDE1EkQiMTYSRCIxNxJEIjUBIjUCQv+vNABJSiMINQA4BzIKEkQ4ECMSRDgIEkSJ`,
  appClear: `Bw==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 1,
  stateSize: 16,
  unsupported: [],
  version: 11,
  warnings: []
  };
const _ETH = {
  ABI: `[{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T2","name":"v183","type":"tuple"}],"stateMutability":"payable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"msg","type":"uint256"}],"name":"ReachError","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"indexed":false,"internalType":"struct T2","name":"_a","type":"tuple"}],"name":"_reach_e0","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"bool","name":"elem1","type":"bool"}],"indexed":false,"internalType":"struct T1","name":"_a","type":"tuple"}],"name":"_reach_e2","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"v0","type":"uint256"}],"name":"_reach_oe_v94","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[],"name":"Client_read_secret","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"_reachCreationTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentState","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"bool","name":"elem1","type":"bool"}],"internalType":"struct T1","name":"v187","type":"tuple"}],"name":"_reachp_2","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"stateMutability":"payable","type":"receive"}]`,
  Bytecode: `0x61096260806001600160401b03601f1938849003601f81018216840190848210848311176102f157808591604097889485528339810103126102ec5783519261004784610307565b80518452602080910151908085019182524360035580865161006881610307565b6000928184809352015260049560ff8754166102d5577f6de3f97962105ba8e929dd0da178e54f00336c9ea6154699025bad3d4f17547f6060895133815283518582015286518b820152a15180159081156102c9575b50156102b2573461029b578651956060870187811087821117610288578852828752818701938385528888019084825251885243905287519361010085610307565b8385528285019784895251809552518752600383556001964388558851948386015251888501528784526060840184811087821117610288578852835195861161027557600254908782811c9216801561026b575b838310146102585750601f8111610211575b508093601f86116001146101ae575050918394918493946101a3575b50501b916000199060031b1c1916176002555b5161063f90816103238239f35b015192503880610183565b600283528183209493928692918316915b888383106101f757505050106101de575b505050811b01600255610196565b015160001960f88460031b161c191690553880806101d0565b8587015188559096019594850194879350908101906101bf565b60028352818320601f870160051c81019183881061024e575b601f0160051c019087905b828110610243575050610167565b848155018790610235565b909150819061022a565b634e487b7160e01b845260229052602483fd5b91607f1691610155565b634e487b7160e01b835260419052602482fd5b634e487b7160e01b845260418252602484fd5b865163100960cb60e01b8152600981880152602490fd5b865163100960cb60e01b8152600881880152602490fd5b905060015414386100be565b875163100960cb60e01b8152600781890152602490fd5b600080fd5b634e487b7160e01b600052604160045260246000fd5b604081019081106001600160401b038211176102f15760405256fe60806040818152600436101561001c575b5050361561001a57005b005b600091823560e01c9081631e93b0f1146101c657508063450bacff1461016a578063832307571461014c578063ab53f2c6146100e15763ff5e0c630361001057816003193601126100dd5780516100728161021c565b8281526020808201848152835190929181016001600160401b038111828210176100c957845284815283516020956100c193926100ae8361021c565b8783019180835283525115159052610314565b519051908152f35b634e487b7160e01b86526041600452602486fd5b5080fd5b50346100dd57816003193601126100dd5781546100fc61024d565b91805193849283526020828185015284518093850152815b83811061013557505060608094508284010152601f80199101168101030190f35b808601820151878201606001528694508101610114565b50346100dd57816003193601126100dd576020906001549051908152f35b5090816003193601126101c3578151916101838361021c565b81835281602084015280516101978161021c565b600435815260243580151581036101bf579381602095866101b9940152610314565b51908152f35b8380fd5b80fd5b8390346100dd57816003193601126100dd576020906003548152f35b90600182811c92168015610212575b60208310146101fc57565b634e487b7160e01b600052602260045260246000fd5b91607f16916101f1565b604081019081106001600160401b0382111761023757604052565b634e487b7160e01b600052604160045260246000fd5b60405190600060025461025f816101e2565b8085526001918083169081156102f5575060011461029d575b5050829003601f01601f191682016001600160401b0381118382101761023757604052565b600260009081526020935091837f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace5b8385106102e157505050508301013880610278565b8054888601830152930192849082016102cc565b919250506020925060ff191682850152151560051b8301013880610278565b9060049060ff82541661061a576040918251933385527f919263be6d51bec670ce110fb6a7df03fe323e3de4dade5355bccc6a4b06d95060608251966020978882015287840151151587820152a160009160038354036106035761037661024d565b9385858051810103126101bf57858051956103908761021c565b8881015187520151928786019384525180159081156105f7575b50156105e0576103e834036105c9577f652e9d60a9005a7b0df5d7ee63b8e8413010489cee7c60068260b81bdc16c7bc8786518851908152a184519087015284516001600160401b03959060608101878111828210176105b657825284815287810193858552828201968688525182525195600196878101908181116105a357811061059f5785524390528151936104418561021c565b85855288850191868352518095525181526003855543865581519388850152518184015280835260608301908382108783111761058c57528151948511610579575061048e6002546101e2565b601f8111610532575b508491601f85116001146104d15793945084929190836104c6575b50501b916000199060031b1c191617600255565b0151925038806104b2565b6002815285812093958591601f198316915b8883831061051857505050106104ff575b505050811b01600255565b015160001960f88460031b161c191690553880806104f4565b8587015188559096019594850194879350908101906104e3565b60028352858320601f860160051c81019187871061056f575b601f0160051c019084905b828110610564575050610497565b848155018490610556565b909150819061054b565b634e487b7160e01b835260419052602482fd5b634e487b7160e01b855260418352602485fd5b8680fd5b634e487b7160e01b885260118652602488fd5b634e487b7160e01b865260418452602486fd5b855163100960cb60e01b8152600d81840152602490fd5b855163100960cb60e01b8152600c81840152602490fd5b905060015414386103aa565b602490600b86519163100960cb60e01b8352820152fd5b60405163100960cb60e01b8152600a81840152602490fdfea164736f6c6343000810000a`,
  BytecodeLen: 2402,
  version: 9,
  views: {
    }
  };
export const _stateSourceMap = {
  2: {
    at: './index.rsh:31:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:20:19:after expr stmt semicolon',
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
  "Admin": Admin,
  "Client_read_secret": Client_read_secret
  };
export const _APIs = {
  Client: {
    read_secret: Client_read_secret
    }
  };
