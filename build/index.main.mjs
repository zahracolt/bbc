// Automatically generated with Reach 0.1.11 (578589af)
/* eslint-disable */
export const _version = '0.1.11';
export const _versionHash = '0.1.11 (578589af)';
export const _backendVersion = 17;

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
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Null;
  const ctc5 = stdlib.T_Data({
    None: ctc4,
    Some: ctc4
    });
  const map0_ctc = ctc5;
  
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1, ctc2, ctc2],
      2: [ctc0, ctc1, ctc2, ctc2, ctc0, ctc3],
      3: [ctc0, ctc1, ctc2, ctc0, ctc0, ctc3, ctc2],
      5: [ctc0, ctc1, ctc2, ctc0, ctc0]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_Tuple([ctc1]);
  return {
    mapDataTy: ctc2
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
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_Token;
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Tuple([ctc2, ctc3, ctc3]);
  const ctc5 = stdlib.T_Bool;
  const ctc6 = stdlib.T_Address;
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false,
    ty: map0_ctc
    });
  
  
  const v264 = stdlib.protect(ctc4, await interact.tokenDetails(), {
    at: './index.rsh:30:66:application',
    fs: ['at ./index.rsh:29:13:application call to [unknown function] (defined at: ./index.rsh:29:17:function exp)'],
    msg: 'tokenDetails',
    who: 'Alice'
    });
  const v265 = v264[stdlib.checkedBigNumberify('./index.rsh:30:66:application', stdlib.UInt_max, '0')];
  const v266 = v264[stdlib.checkedBigNumberify('./index.rsh:30:66:application', stdlib.UInt_max, '1')];
  const v267 = v264[stdlib.checkedBigNumberify('./index.rsh:30:66:application', stdlib.UInt_max, '2')];
  
  const txn1 = await (ctc.sendrecv({
    args: [v265, v266, v267],
    evt_cnt: 3,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:35:9:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc2, ctc3, ctc3],
    pay: [stdlib.checkedBigNumberify('./index.rsh:35:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v273, v274, v275], secs: v277, time: v276, didSend: v51, from: v272 } = txn1;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v273
        });
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc3, ctc3],
    waitIfNotPresent: false
    }));
  const {data: [v273, v274, v275], secs: v277, time: v276, didSend: v51, from: v272 } = txn1;
  ;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 1,
    out_tys: [ctc5],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v289], secs: v291, time: v290, didSend: v60, from: v288 } = txn2;
  ;
  const txn3 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 2,
    out_tys: [ctc5],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v296], secs: v298, time: v297, didSend: v69, from: v295 } = txn3;
  ;
  await stdlib.mapSet(map0, v295, null);
  const v300 = v289 ? v296 : false;
  const v307 = stdlib.add(v297, v275);
  if (v300) {
    stdlib.protect(ctc0, await interact.seeNotification(v289), {
      at: './index.rsh:55:64:application',
      fs: ['at ./index.rsh:55:9:application call to [unknown function] (defined at: ./index.rsh:55:37:function exp)'],
      msg: 'seeNotification',
      who: 'Alice'
      });
    
    }
  else {
    }
  const txn4 = await (ctc.sendrecv({
    args: [v272, v273, v274, v288, v295, v300, v307],
    evt_cnt: 0,
    funcNum: 3,
    lct: v297,
    onlyIf: v289,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:57:9:dot', stdlib.UInt_max, '0'), [[v274, v273]]],
    sim_p: (async (txn4) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [], secs: v314, time: v313, didSend: v88, from: v312 } = txn4;
      
      ;
      sim_r.txns.push({
        amt: v274,
        kind: 'to',
        tok: v273
        });
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: ['time', v307],
    tys: [ctc6, ctc2, ctc3, ctc6, ctc6, ctc5, ctc3],
    waitIfNotPresent: false
    }));
  if (txn4.didTimeout) {
    const txn5 = await (ctc.sendrecv({
      args: [v272, v273, v274, v288, v295, v300, v307],
      evt_cnt: 0,
      funcNum: 4,
      lct: v297,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('./index.rsh:60:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn5) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        stdlib.simMapDupe(sim_r, 0, map0);
        
        const {data: [], secs: v420, time: v419, didSend: v207, from: v418 } = txn5;
        
        ;
        sim_r.txns.push({
          kind: 'halt',
          tok: v273
          })
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: undefined /* mto */,
      tys: [ctc6, ctc2, ctc3, ctc6, ctc6, ctc5, ctc3],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v420, time: v419, didSend: v207, from: v418 } = txn5;
    ;
    const v421 = stdlib.addressEq(v272, v418);
    stdlib.assert(v421, {
      at: './index.rsh:60:11:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Alice'
      });
    return;
    
    }
  else {
    const {data: [], secs: v314, time: v313, didSend: v88, from: v312 } = txn4;
    ;
    ;
    const v324 = stdlib.addressEq(v272, v312);
    stdlib.assert(v324, {
      at: './index.rsh:57:9:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Alice'
      });
    const v327 = stdlib.protect(ctc6, await interact.aliceAdd(), {
      at: './index.rsh:70:54:application',
      fs: ['at ./index.rsh:69:13:application call to [unknown function] (defined at: ./index.rsh:69:17:function exp)'],
      msg: 'aliceAdd',
      who: 'Alice'
      });
    const v328 = stdlib.protect(ctc6, await interact.aliceAdd2(), {
      at: './index.rsh:71:58:application',
      fs: ['at ./index.rsh:69:13:application call to [unknown function] (defined at: ./index.rsh:69:17:function exp)'],
      msg: 'aliceAdd2',
      who: 'Alice'
      });
    
    const txn5 = await (ctc.sendrecv({
      args: [v272, v273, v274, v288, v295, v327, v328],
      evt_cnt: 2,
      funcNum: 5,
      lct: v313,
      onlyIf: true,
      out_tys: [ctc6, ctc6],
      pay: [stdlib.checkedBigNumberify('./index.rsh:74:9:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn5) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        stdlib.simMapDupe(sim_r, 0, map0);
        
        const {data: [v330, v331], secs: v333, time: v332, didSend: v100, from: v329 } = txn5;
        
        ;
        const v335 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v330), null);
        let v336;
        switch (v335[0]) {
          case 'None': {
            const v337 = v335[1];
            v336 = false;
            
            break;
            }
          case 'Some': {
            const v338 = v335[1];
            v336 = true;
            
            break;
            }
          }
        const v339 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v331), null);
        let v340;
        switch (v339[0]) {
          case 'None': {
            const v341 = v339[1];
            v340 = false;
            
            break;
            }
          case 'Some': {
            const v342 = v339[1];
            v340 = true;
            
            break;
            }
          }
        const v343 = v340 ? false : true;
        const v344 = v336 ? v343 : false;
        if (v344) {
          
          
          sim_r.txns.push({
            kind: 'from',
            to: v288,
            tok: v273
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: v273
            })
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          }
        else {
          let v367;
          switch (v335[0]) {
            case 'None': {
              const v368 = v335[1];
              v367 = false;
              
              break;
              }
            case 'Some': {
              const v369 = v335[1];
              v367 = true;
              
              break;
              }
            }
          let v372;
          switch (v339[0]) {
            case 'None': {
              const v373 = v339[1];
              v372 = false;
              
              break;
              }
            case 'Some': {
              const v374 = v339[1];
              v372 = true;
              
              break;
              }
            }
          const v375 = v367 ? false : v372;
          if (v375) {
            
            
            sim_r.txns.push({
              kind: 'from',
              to: v295,
              tok: v273
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v273
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          else {
            
            
            sim_r.txns.push({
              kind: 'from',
              to: v272,
              tok: v273
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v273
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }}
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: undefined /* mto */,
      tys: [ctc6, ctc2, ctc3, ctc6, ctc6, ctc6, ctc6],
      waitIfNotPresent: false
      }));
    const {data: [v330, v331], secs: v333, time: v332, didSend: v100, from: v329 } = txn5;
    ;
    const v334 = stdlib.addressEq(v272, v329);
    stdlib.assert(v334, {
      at: './index.rsh:74:9:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Alice'
      });
    const v335 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v330), null);
    let v336;
    switch (v335[0]) {
      case 'None': {
        const v337 = v335[1];
        v336 = false;
        
        break;
        }
      case 'Some': {
        const v338 = v335[1];
        v336 = true;
        
        break;
        }
      }
    const v339 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v331), null);
    let v340;
    switch (v339[0]) {
      case 'None': {
        const v341 = v339[1];
        v340 = false;
        
        break;
        }
      case 'Some': {
        const v342 = v339[1];
        v340 = true;
        
        break;
        }
      }
    const v343 = v340 ? false : true;
    const v344 = v336 ? v343 : false;
    if (v344) {
      stdlib.protect(ctc0, await interact.attacherMatched(true), {
        at: './index.rsh:77:54:application',
        fs: ['at ./index.rsh:77:9:application call to [unknown function] (defined at: ./index.rsh:77:27:function exp)'],
        msg: 'attacherMatched',
        who: 'Alice'
        });
      
      stdlib.protect(ctc0, await interact.attacherMatched1(false), {
        at: './index.rsh:78:60:application',
        fs: ['at ./index.rsh:78:9:application call to [unknown function] (defined at: ./index.rsh:78:32:function exp)'],
        msg: 'attacherMatched1',
        who: 'Alice'
        });
      
      ;
      return;
      }
    else {
      let v367;
      switch (v335[0]) {
        case 'None': {
          const v368 = v335[1];
          v367 = false;
          
          break;
          }
        case 'Some': {
          const v369 = v335[1];
          v367 = true;
          
          break;
          }
        }
      let v372;
      switch (v339[0]) {
        case 'None': {
          const v373 = v339[1];
          v372 = false;
          
          break;
          }
        case 'Some': {
          const v374 = v339[1];
          v372 = true;
          
          break;
          }
        }
      const v375 = v367 ? false : v372;
      if (v375) {
        stdlib.protect(ctc0, await interact.attacherMatched1(true), {
          at: './index.rsh:82:60:application',
          fs: ['at ./index.rsh:82:9:application call to [unknown function] (defined at: ./index.rsh:82:32:function exp)'],
          msg: 'attacherMatched1',
          who: 'Alice'
          });
        
        stdlib.protect(ctc0, await interact.attacherMatched(false), {
          at: './index.rsh:83:54:application',
          fs: ['at ./index.rsh:83:9:application call to [unknown function] (defined at: ./index.rsh:83:27:function exp)'],
          msg: 'attacherMatched',
          who: 'Alice'
          });
        
        ;
        return;
        }
      else {
        stdlib.protect(ctc0, await interact.attacherMatched1(false), {
          at: './index.rsh:88:60:application',
          fs: ['at ./index.rsh:88:9:application call to [unknown function] (defined at: ./index.rsh:88:32:function exp)'],
          msg: 'attacherMatched1',
          who: 'Alice'
          });
        
        stdlib.protect(ctc0, await interact.attacherMatched(false), {
          at: './index.rsh:89:54:application',
          fs: ['at ./index.rsh:89:9:application call to [unknown function] (defined at: ./index.rsh:89:27:function exp)'],
          msg: 'attacherMatched',
          who: 'Alice'
          });
        
        ;
        return;
        }}
    
    }
  
  
  
  
  
  
  
  };
export async function Bob(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bob expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bob expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_Token;
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Bool;
  const ctc5 = stdlib.T_Address;
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false,
    ty: map0_ctc
    });
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 3,
    funcNum: 0,
    out_tys: [ctc2, ctc3, ctc3],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v273, v274, v275], secs: v277, time: v276, didSend: v51, from: v272 } = txn1;
  ;
  ;
  const v287 = stdlib.protect(ctc4, await interact.ready(v273, v274), {
    at: './index.rsh:40:44:application',
    fs: ['at ./index.rsh:39:11:application call to [unknown function] (defined at: ./index.rsh:39:15:function exp)'],
    msg: 'ready',
    who: 'Bob'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v272, v273, v274, v275, v287],
    evt_cnt: 1,
    funcNum: 1,
    lct: v276,
    onlyIf: true,
    out_tys: [ctc4],
    pay: [stdlib.checkedBigNumberify('./index.rsh:42:7:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v289], secs: v291, time: v290, didSend: v60, from: v288 } = txn2;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc5, ctc2, ctc3, ctc3, ctc4],
    waitIfNotPresent: false
    }));
  const {data: [v289], secs: v291, time: v290, didSend: v60, from: v288 } = txn2;
  ;
  const txn3 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 2,
    out_tys: [ctc4],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v296], secs: v298, time: v297, didSend: v69, from: v295 } = txn3;
  ;
  await stdlib.mapSet(map0, v295, null);
  const v300 = v289 ? v296 : false;
  const v307 = stdlib.add(v297, v275);
  if (v300) {
    stdlib.protect(ctc0, await interact.seeNotification(v289), {
      at: './index.rsh:55:64:application',
      fs: ['at ./index.rsh:55:9:application call to [unknown function] (defined at: ./index.rsh:55:37:function exp)'],
      msg: 'seeNotification',
      who: 'Bob'
      });
    
    }
  else {
    }
  const txn4 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 3,
    out_tys: [],
    timeoutAt: ['time', v307],
    waitIfNotPresent: false
    }));
  if (txn4.didTimeout) {
    const txn5 = await (ctc.recv({
      didSend: false,
      evt_cnt: 0,
      funcNum: 4,
      out_tys: [],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [], secs: v420, time: v419, didSend: v207, from: v418 } = txn5;
    ;
    const v421 = stdlib.addressEq(v272, v418);
    stdlib.assert(v421, {
      at: './index.rsh:60:11:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Bob'
      });
    return;
    
    }
  else {
    const {data: [], secs: v314, time: v313, didSend: v88, from: v312 } = txn4;
    ;
    ;
    const v324 = stdlib.addressEq(v272, v312);
    stdlib.assert(v324, {
      at: './index.rsh:57:9:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Bob'
      });
    const txn5 = await (ctc.recv({
      didSend: false,
      evt_cnt: 2,
      funcNum: 5,
      out_tys: [ctc5, ctc5],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v330, v331], secs: v333, time: v332, didSend: v100, from: v329 } = txn5;
    ;
    const v334 = stdlib.addressEq(v272, v329);
    stdlib.assert(v334, {
      at: './index.rsh:74:9:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Bob'
      });
    const v335 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v330), null);
    let v336;
    switch (v335[0]) {
      case 'None': {
        const v337 = v335[1];
        v336 = false;
        
        break;
        }
      case 'Some': {
        const v338 = v335[1];
        v336 = true;
        
        break;
        }
      }
    const v339 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v331), null);
    let v340;
    switch (v339[0]) {
      case 'None': {
        const v341 = v339[1];
        v340 = false;
        
        break;
        }
      case 'Some': {
        const v342 = v339[1];
        v340 = true;
        
        break;
        }
      }
    const v343 = v340 ? false : true;
    const v344 = v336 ? v343 : false;
    if (v344) {
      stdlib.protect(ctc0, await interact.attacherMatched(true), {
        at: './index.rsh:77:54:application',
        fs: ['at ./index.rsh:77:9:application call to [unknown function] (defined at: ./index.rsh:77:27:function exp)'],
        msg: 'attacherMatched',
        who: 'Bob'
        });
      
      ;
      return;
      }
    else {
      let v367;
      switch (v335[0]) {
        case 'None': {
          const v368 = v335[1];
          v367 = false;
          
          break;
          }
        case 'Some': {
          const v369 = v335[1];
          v367 = true;
          
          break;
          }
        }
      let v372;
      switch (v339[0]) {
        case 'None': {
          const v373 = v339[1];
          v372 = false;
          
          break;
          }
        case 'Some': {
          const v374 = v339[1];
          v372 = true;
          
          break;
          }
        }
      const v375 = v367 ? false : v372;
      if (v375) {
        stdlib.protect(ctc0, await interact.attacherMatched(false), {
          at: './index.rsh:83:54:application',
          fs: ['at ./index.rsh:83:9:application call to [unknown function] (defined at: ./index.rsh:83:27:function exp)'],
          msg: 'attacherMatched',
          who: 'Bob'
          });
        
        ;
        return;
        }
      else {
        stdlib.protect(ctc0, await interact.attacherMatched(false), {
          at: './index.rsh:89:54:application',
          fs: ['at ./index.rsh:89:9:application call to [unknown function] (defined at: ./index.rsh:89:27:function exp)'],
          msg: 'attacherMatched',
          who: 'Bob'
          });
        
        ;
        return;
        }}
    
    }
  
  
  
  
  
  
  
  };
export async function Mcintyre(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Mcintyre expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Mcintyre expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc2 = stdlib.T_Token;
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Bool;
  const ctc5 = stdlib.T_Address;
  
  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false,
    ty: map0_ctc
    });
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 3,
    funcNum: 0,
    out_tys: [ctc2, ctc3, ctc3],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v273, v274, v275], secs: v277, time: v276, didSend: v51, from: v272 } = txn1;
  ;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 1,
    out_tys: [ctc4],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v289], secs: v291, time: v290, didSend: v60, from: v288 } = txn2;
  ;
  const v294 = stdlib.protect(ctc4, await interact.ready1(v273, v274), {
    at: './index.rsh:46:46:application',
    fs: ['at ./index.rsh:45:16:application call to [unknown function] (defined at: ./index.rsh:45:20:function exp)'],
    msg: 'ready1',
    who: 'Mcintyre'
    });
  
  const txn3 = await (ctc.sendrecv({
    args: [v272, v273, v274, v275, v288, v289, v294],
    evt_cnt: 1,
    funcNum: 2,
    lct: v290,
    onlyIf: true,
    out_tys: [ctc4],
    pay: [stdlib.checkedBigNumberify('./index.rsh:48:12:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v296], secs: v298, time: v297, didSend: v69, from: v295 } = txn3;
      
      ;
      await stdlib.simMapSet(sim_r, 0, v295, null);
      const v300 = v289 ? v296 : false;
      const v307 = stdlib.add(v297, v275);
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc5, ctc2, ctc3, ctc3, ctc5, ctc4, ctc4],
    waitIfNotPresent: false
    }));
  const {data: [v296], secs: v298, time: v297, didSend: v69, from: v295 } = txn3;
  ;
  await stdlib.mapSet(map0, v295, null);
  const v300 = v289 ? v296 : false;
  const v307 = stdlib.add(v297, v275);
  if (v300) {
    stdlib.protect(ctc0, await interact.seeNotification(v289), {
      at: './index.rsh:55:64:application',
      fs: ['at ./index.rsh:55:9:application call to [unknown function] (defined at: ./index.rsh:55:37:function exp)'],
      msg: 'seeNotification',
      who: 'Mcintyre'
      });
    
    }
  else {
    }
  const txn4 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 3,
    out_tys: [],
    timeoutAt: ['time', v307],
    waitIfNotPresent: false
    }));
  if (txn4.didTimeout) {
    const txn5 = await (ctc.recv({
      didSend: false,
      evt_cnt: 0,
      funcNum: 4,
      out_tys: [],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [], secs: v420, time: v419, didSend: v207, from: v418 } = txn5;
    ;
    const v421 = stdlib.addressEq(v272, v418);
    stdlib.assert(v421, {
      at: './index.rsh:60:11:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Mcintyre'
      });
    return;
    
    }
  else {
    const {data: [], secs: v314, time: v313, didSend: v88, from: v312 } = txn4;
    ;
    ;
    const v324 = stdlib.addressEq(v272, v312);
    stdlib.assert(v324, {
      at: './index.rsh:57:9:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Mcintyre'
      });
    const txn5 = await (ctc.recv({
      didSend: false,
      evt_cnt: 2,
      funcNum: 5,
      out_tys: [ctc5, ctc5],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v330, v331], secs: v333, time: v332, didSend: v100, from: v329 } = txn5;
    ;
    const v334 = stdlib.addressEq(v272, v329);
    stdlib.assert(v334, {
      at: './index.rsh:74:9:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Mcintyre'
      });
    const v335 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v330), null);
    let v336;
    switch (v335[0]) {
      case 'None': {
        const v337 = v335[1];
        v336 = false;
        
        break;
        }
      case 'Some': {
        const v338 = v335[1];
        v336 = true;
        
        break;
        }
      }
    const v339 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v331), null);
    let v340;
    switch (v339[0]) {
      case 'None': {
        const v341 = v339[1];
        v340 = false;
        
        break;
        }
      case 'Some': {
        const v342 = v339[1];
        v340 = true;
        
        break;
        }
      }
    const v343 = v340 ? false : true;
    const v344 = v336 ? v343 : false;
    if (v344) {
      stdlib.protect(ctc0, await interact.attacherMatched1(false), {
        at: './index.rsh:78:60:application',
        fs: ['at ./index.rsh:78:9:application call to [unknown function] (defined at: ./index.rsh:78:32:function exp)'],
        msg: 'attacherMatched1',
        who: 'Mcintyre'
        });
      
      ;
      return;
      }
    else {
      let v367;
      switch (v335[0]) {
        case 'None': {
          const v368 = v335[1];
          v367 = false;
          
          break;
          }
        case 'Some': {
          const v369 = v335[1];
          v367 = true;
          
          break;
          }
        }
      let v372;
      switch (v339[0]) {
        case 'None': {
          const v373 = v339[1];
          v372 = false;
          
          break;
          }
        case 'Some': {
          const v374 = v339[1];
          v372 = true;
          
          break;
          }
        }
      const v375 = v367 ? false : v372;
      if (v375) {
        stdlib.protect(ctc0, await interact.attacherMatched1(true), {
          at: './index.rsh:82:60:application',
          fs: ['at ./index.rsh:82:9:application call to [unknown function] (defined at: ./index.rsh:82:32:function exp)'],
          msg: 'attacherMatched1',
          who: 'Mcintyre'
          });
        
        ;
        return;
        }
      else {
        stdlib.protect(ctc0, await interact.attacherMatched1(false), {
          at: './index.rsh:88:60:application',
          fs: ['at ./index.rsh:88:9:application call to [unknown function] (defined at: ./index.rsh:88:32:function exp)'],
          msg: 'attacherMatched1',
          who: 'Mcintyre'
          });
        
        ;
        return;
        }}
    
    }
  
  
  
  
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `BiAMAAEEBSADKAIIcTCgjQYmAgEAACI1ADEYQQQSKWRJIls1ASEIWzUCMRkjEkEACDEAKChmQgPgNhoAF0lBAAciNQQjNQYANhoCFzUENhoDNhoBF0khBQxAAg5JJAxAAZZJJQxAAUQlEkQlNAESRDQESSISTDQCEhFEKGRJNQNJSVcAIDX/IQRbNf4hBls1/Uk1BUlXACA1/FcgIDX7gARIKonDNPxQNPtQsDT/MQASRDT8iAOXSTX6IlVAAAYiNflCAAYjNflCAAA0+4gDfkk1+CJVQAAGIjX3QgAGIzX3QgAANPk09xQQQQAxsSKyATT9shIkshA0A1cwILIUNP6yEbOxIrIBIrISJLIQMgmyFTIKshQ0/rIRs0ICwzT6IlVAAAYiNfZCAAYjNfZCAAA0+CJVQAAGIjX1QgAGIzX1QgAANPYUNPUQQQAxsSKyATT9shIkshA0A1dQILIUNP6yEbOxIrIBIrISJLIQMgmyFTIKshQ0/rIRs0ICY7EisgE0/bISJLIQNP+yFDT+shGzsSKyASKyEiSyEDIJshUyCrIUNP6yEbNCAjVIIQU0ARJENARJIhJMNAISEUQoZDUDgASRJzTzsDIGNAMhCVsPRDQDVwAgMQASRLEisgEishIkshAyCbIVMgqyFDQDIQRbshGzQgHpSCEFNAESRDQESSISTDQCEhFEKGRJNQNJSklXACA1/yEEWzX+IQZbNf1XMCA1/FdQIDX7gASnZcS0sDIGNAMhCVsMRDT9NP6IAjE0/zEAEkQ0/zT+FlA0/RZQNPxQNPtQKEsBVwBwZ0glNQEyBjUCQgGSSSMMQAD9SSEHDEAAi0ghBzQBEkQ0BEkiEkw0AhIRRChkSTUDSUpXACA1/yEEWzX+IQZbNf1XOCA1/Ek1BRc1+4AEahE6CDT7FlEHCFCwMQAogAEBZjQDV1gBFzT7EDX6MgY0AyEKWwg1+TT/NP4WUDT9FlA0/FAxAFA0+hZRBwhQNPkWUChLAVcAeWdIIQU1ATIGNQJCAPpIIzQBEkQ0BEkiEkw0AhIRRChkSTUDSUpXACA1/yEEWzX+IQZbNf0hCls1/Ek1BRc1+4AED7/GNDT7FlEHCFCwNP80/hZQNP0WUDT8FlAxAFA0+xZRBwhQKEsBVwBZZ0ghBzUBMgY1AkIAj0ghC4gA6CI0ARJENARJIhJMNAISEURJNQVJSSJbNf8hCFs1/oEQWzX9gAT3cRNNNP8WUDT+FlA0/RZQsCELiACtsSKyASKyEiSyEDIKshQ0/7IRszEANP8WUDT+FlA0/RZQKEsBVwA4Z0gjNQEyBjUCQgAbMRklEkSxIrIBIrIII7IQMgmyCTIKsgezQgAFMRkiEkQpNAEWNAIWUGc0BkEACoAEFR98dTQHULA0AEkjCDIEEkQxFhJEI0MxGSISREL/3yIxNBJEIQcxNRJEIjE2EkQjMTcSRCI1ASI1AkL/rkkxGGFAAANIKIkoYok0AElKIwg1ADgHMgoSRDgQIxJEOAgSRIk0AElKSSMINQA4FDIKEkQ4ECQSRDgRTwISRDgSEkSJ`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 1,
  mapDataSize: 1,
  stateKeys: 1,
  stateSize: 121,
  unsupported: [],
  version: 10,
  warnings: [`This program was compiled with trustworthy maps, but maps are not trustworthy on Algorand, because they are represented with local state. A user can delete their local state at any time, by sending a ClearState transaction. The only way to use local state properly on Algorand is to ensure that a user doing this can only 'hurt' themselves and not the entire system.`]
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v273",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v274",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v275",
                "type": "uint256"
              }
            ],
            "internalType": "struct T2",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T3",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v273",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v274",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v275",
                "type": "uint256"
              }
            ],
            "internalType": "struct T2",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T3",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v289",
                "type": "bool"
              }
            ],
            "internalType": "struct T5",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T6",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v296",
                "type": "bool"
              }
            ],
            "internalType": "struct T8",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T9",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e2",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T12",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e3",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T12",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e4",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v330",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v331",
                "type": "address"
              }
            ],
            "internalType": "struct T13",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T14",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e5",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "addr",
        "type": "address"
      }
    ],
    "name": "_reachMap0Ref",
    "outputs": [
      {
        "components": [
          {
            "internalType": "enum _enum_T0",
            "name": "which",
            "type": "uint8"
          },
          {
            "internalType": "bool",
            "name": "_None",
            "type": "bool"
          },
          {
            "internalType": "bool",
            "name": "_Some",
            "type": "bool"
          }
        ],
        "internalType": "struct T0",
        "name": "res",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v289",
                "type": "bool"
              }
            ],
            "internalType": "struct T5",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T6",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v296",
                "type": "bool"
              }
            ],
            "internalType": "struct T8",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T9",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T12",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m3",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T12",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m4",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v330",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v331",
                "type": "address"
              }
            ],
            "internalType": "struct T13",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T14",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m5",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405162001a7638038062001a76833981016040819052620000269162000246565b60008055436003556040805133815282516020808301919091528084015180516001600160a01b031683850152908101516060830152820151608082015290517fb77e0b7275941fdbf00765e1e98b79777de983c0eaec6159504ea2e32b7160649181900360a00190a16200009e341560076200013f565b6040805160808082018352600060208084018281528486018381526060808701858152338089528a86018051516001600160a01b0390811687528151880151865290518b01518352600197889055439097558951808701919091529351909516838901529051908201529151828401528451808303909301835260a09091019093528051919262000136926002929091019062000169565b5050506200032f565b81620001655760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b8280546200017790620002f2565b90600052602060002090601f0160209004810192826200019b5760008555620001e6565b82601f10620001b657805160ff1916838001178555620001e6565b82800160010185558215620001e6579182015b82811115620001e6578251825591602001919060010190620001c9565b50620001f4929150620001f8565b5090565b5b80821115620001f45760008155600101620001f9565b604051606081016001600160401b03811182821017156200024057634e487b7160e01b600052604160045260246000fd5b60405290565b600081830360808112156200025a57600080fd5b604080519081016001600160401b03811182821017156200028b57634e487b7160e01b600052604160045260246000fd5b604052835181526060601f1983011215620002a557600080fd5b620002af6200020f565b60208501519092506001600160a01b0381168114620002cd57600080fd5b8252604084810151602080850191909152606090950151908301529283015250919050565b600181811c908216806200030757607f821691505b602082108114156200032957634e487b7160e01b600052602260045260246000fd5b50919050565b611737806200033f6000396000f3fe6080604052600436106100845760003560e01c8063832307571161005657806383230757146101045780639a3e391214610119578063a7661d541461012c578063ab53f2c61461013f578063c85d4a701461016257005b80631e93b0f11461008d5780633bc5b7bf146100b15780633e59bac4146100de57806373b4522c146100f157005b3661008b57005b005b34801561009957600080fd5b506003545b6040519081526020015b60405180910390f35b3480156100bd57600080fd5b506100d16100cc3660046111c7565b610175565b6040516100a891906111fa565b61008b6100ec366004611259565b6101a1565b61008b6100ff366004611259565b61042d565b34801561011057600080fd5b5060015461009e565b61008b610127366004611259565b610646565b61008b61013a366004611259565b610833565b34801561014b57600080fd5b5061015461098b565b6040516100a89291906112a1565b61008b6101703660046112db565b610a28565b604080516060810182526000808252602082018190529181019190915261019b82610dcb565b92915050565b6101b1600260005414600c610ea4565b6101cb813515806101c457506001548235145b600d610ea4565b6000808055600280546101dd906112ed565b80601f0160208091040260200160405190810160405280929190818152602001828054610209906112ed565b80156102565780601f1061022b57610100808354040283529160200191610256565b820191906000526020600020905b81548152906001019060200180831161023957829003601f168201915b505050505080602001905181019061026e919061133b565b60408051808201909152600080825260208201529091507fea301fa16f4bb7851ebe70b97d841398dfcfaffcc5b90514d4df21d88b62c5bd33846040516102b6929190611403565b60405180910390a16102ca3415600b610ea4565b336000908152600460205260409020805462ff00ff1916600117905560a08201516102f6576000610306565b6103066040840160208501611420565b151581526060820151610319904361143d565b6020808301919091526040805160e0810182526000808252928101839052908101829052606081018290526080810182905260a0810182905260c081019190915282516001600160a01b0390811680835260208086015183168185019081526040808801518187019081526080808a015187166060808a0191825233838b019081528b51151560a0808d019182528d8a015160c0808f0191825260036000554360015589519b8c019c909c5298518c16978a0197909752945191880191909152905188169186019190915251909516908301529251151591810191909152905160e082015261010001604051602081830303815290604052600290805190602001906104269291906110dc565b5050505050565b61043d6003600054146011610ea4565b6104578135158061045057506001548235145b6012610ea4565b600080805560028054610469906112ed565b80601f0160208091040260200160405190810160405280929190818152602001828054610495906112ed565b80156104e25780601f106104b7576101008083540402835291602001916104e2565b820191906000526020600020905b8154815290600101906020018083116104c557829003601f168201915b50505050508060200190518101906104fa9190611463565b905061050d8160c0015143106013610ea4565b7f9e33038d0c0154a5ab4cf9e5859ab906867e950883262ffe58911dc6195288c6338360405161053e92919061151e565b60405180910390a16105523415600e610ea4565b61056f6105683383602001518460400151610eca565b600f610ea4565b8051610587906001600160a01b031633146010610ea4565b6040805160a0808201835260008083526020808401828152848601838152606080870185815260808089018781528b516001600160a01b03908116808c528d890151821688528d8d015187528d860151821685528d840151821683526005909955436001558b5197880198909852945187169986019990995291519084015251831695820195909552935116908301529060c0015b604051602081830303815290604052600290805190602001906106409291906110dc565b50505050565b6106566001600054146009610ea4565b6106708135158061066957506001548235145b600a610ea4565b600080805560028054610682906112ed565b80601f01602080910402602001604051908101604052809291908181526020018280546106ae906112ed565b80156106fb5780601f106106d0576101008083540402835291602001916106fb565b820191906000526020600020905b8154815290600101906020018083116106de57829003601f168201915b50505050508060200190518101906107139190611556565b90507fb6eea004ef7895e3731d4318847f013244765590bcd89a0cdcf6f1db231f49153383604051610746929190611403565b60405180910390a161075a34156008610ea4565b6040805160c0810182526000808252602080830182815283850183815260608086018581526080870186815260a088019690965288516001600160a01b03908116885289860151169093528787015190915286015190523390915290916107c691908501908501611420565b151560a082015260026000554360015560405161061c90829060200181516001600160a01b03908116825260208084015182169083015260408084015190830152606080840151908301526080808401519091169082015260a09182015115159181019190915260c00190565b6108436003600054146016610ea4565b61085d8135158061085657506001548235145b6017610ea4565b60008080556002805461086f906112ed565b80601f016020809104026020016040519081016040528092919081815260200182805461089b906112ed565b80156108e85780601f106108bd576101008083540402835291602001916108e8565b820191906000526020600020905b8154815290600101906020018083116108cb57829003601f168201915b50505050508060200190518101906109009190611463565b90506109148160c001514310156018610ea4565b7faa99e317c364fb804a6b7e67b51beee98735c62eb3df9d8182015e63bb190722338360405161094592919061151e565b60405180910390a161095934156014610ea4565b8051610971906001600160a01b031633146015610ea4565b6000808055600181905561098790600290611160565b5050565b6000606060005460028080546109a0906112ed565b80601f01602080910402602001604051908101604052809291908181526020018280546109cc906112ed565b8015610a195780601f106109ee57610100808354040283529160200191610a19565b820191906000526020600020905b8154815290600101906020018083116109fc57829003601f168201915b50505050509050915091509091565b610a38600560005414601b610ea4565b610a5281351580610a4b57506001548235145b601c610ea4565b600080805560028054610a64906112ed565b80601f0160208091040260200160405190810160405280929190818152602001828054610a90906112ed565b8015610add5780601f10610ab257610100808354040283529160200191610add565b820191906000526020600020905b815481529060010190602001808311610ac057829003601f168201915b5050505050806020019051810190610af591906115d9565b9050610b5f6040805161012081018252600060c0820181815260e08301829052610100830182905282526020808301829052835160608101855282815290810182905280840191909152909182019081526000602082018190526040820181905260609091015290565b7f04ee83c774d4bf18968ee8b821ad8efcd66b89c9dadec050bf903bf52bf251c33384604051610b90929190611676565b60405180910390a1610ba434156019610ea4565b8151610bbc906001600160a01b03163314601a610ea4565b610bd4610bcf60408501602086016111c7565b610dcb565b815260008151516001811115610bec57610bec6111e4565b1415610bfe5760006020820152610c22565b60018151516001811115610c1457610c146111e4565b1415610c2257600160208201525b610c35610bcf60608501604086016111c7565b60408201819052516000906001811115610c5157610c516111e4565b1415610c635760006060820152610c8a565b60016040820151516001811115610c7c57610c7c6111e4565b1415610c8a57600160608201525b8060200151610c9a576000610cad565b8060600151610caa576001610cad565b60005b15610ce457610cc9826020015183606001518460400151610ee2565b60008080556001819055610cdf90600290611160565b505050565b60008151516001811115610cfa57610cfa6111e4565b1415610d0c5760006080820152610d30565b60018151516001811115610d2257610d226111e4565b1415610d3057600160808201525b60006040820151516001811115610d4957610d496111e4565b1415610d5b57600060a0820152610d82565b60016040820151516001811115610d7457610d746111e4565b1415610d8257600160a08201525b8060800151610d95578060a00151610d98565b60005b15610db457610cc9826020015183608001518460400151610ee2565b610cc9826020015183600001518460400151610ee2565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526004602052604090205460ff166001811115610e1757610e176111e4565b1415610e94576001600160a01b038216600090815260046020526040908190208151606081019092528054829060ff166001811115610e5857610e586111e4565b6001811115610e6957610e696111e4565b8152905460ff6101008204811615156020840152620100009091041615156040909101529050919050565b600080825260208201525b919050565b816109875760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b6000610ed883853085610ef6565b90505b9392505050565b610eed838383610fd0565b610cdf57600080fd5b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b179052915160009283928392918916918391610f5d916116c8565b60006040518083038185875af1925050503d8060008114610f9a576040519150601f19603f3d011682016040523d82523d6000602084013e610f9f565b606091505b5091509150610fb0828260016110a1565b5080806020019051810190610fc591906116e4565b979650505050505050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b17905291516000928392839291881691839161102f916116c8565b60006040518083038185875af1925050503d806000811461106c576040519150601f19603f3d011682016040523d82523d6000602084013e611071565b606091505b5091509150611082828260026110a1565b508080602001905181019061109791906116e4565b9695505050505050565b606083156110b0575081610edb565b8251156110c05782518084602001fd5b60405163100960cb60e01b815260048101839052602401610ec1565b8280546110e8906112ed565b90600052602060002090601f01602090048101928261110a5760008555611150565b82601f1061112357805160ff1916838001178555611150565b82800160010185558215611150579182015b82811115611150578251825591602001919060010190611135565b5061115c92915061119d565b5090565b50805461116c906112ed565b6000825580601f1061117c575050565b601f01602090049060005260206000209081019061119a919061119d565b50565b5b8082111561115c576000815560010161119e565b6001600160a01b038116811461119a57600080fd5b6000602082840312156111d957600080fd5b8135610edb816111b2565b634e487b7160e01b600052602160045260246000fd5b815160608201906002811061121f57634e487b7160e01b600052602160045260246000fd5b8083525060208301511515602083015260408301511515604083015292915050565b60006040828403121561125357600080fd5b50919050565b60006040828403121561126b57600080fd5b610edb8383611241565b60005b83811015611290578181015183820152602001611278565b838111156106405750506000910152565b82815260406020820152600082518060408401526112c6816060850160208701611275565b601f01601f1916919091016060019392505050565b60006060828403121561125357600080fd5b600181811c9082168061130157607f821691505b6020821081141561125357634e487b7160e01b600052602260045260246000fd5b801515811461119a57600080fd5b8051610e9f81611322565b600060c0828403121561134d57600080fd5b60405160c0810181811067ffffffffffffffff8211171561137e57634e487b7160e01b600052604160045260246000fd5b604052825161138c816111b2565b8152602083015161139c816111b2565b80602083015250604083015160408201526060830151606082015260808301516113c5816111b2565b608082015260a08301516113d881611322565b60a08201529392505050565b8035825260208101356113f681611322565b8015156020840152505050565b6001600160a01b038316815260608101610edb60208301846113e4565b60006020828403121561143257600080fd5b8135610edb81611322565b6000821982111561145e57634e487b7160e01b600052601160045260246000fd5b500190565b600060e0828403121561147557600080fd5b60405160e0810181811067ffffffffffffffff821117156114a657634e487b7160e01b600052604160045260246000fd5b60405282516114b4816111b2565b815260208301516114c4816111b2565b60208201526040838101519082015260608301516114e1816111b2565b606082015260808301516114f4816111b2565b608082015261150560a08401611330565b60a082015260c083015160c08201528091505092915050565b6001600160a01b03831681528135602080830191909152606082019083013561154681611322565b8015156040840152509392505050565b60006080828403121561156857600080fd5b6040516080810181811067ffffffffffffffff8211171561159957634e487b7160e01b600052604160045260246000fd5b60405282516115a7816111b2565b815260208301516115b7816111b2565b6020820152604083810151908201526060928301519281019290925250919050565b600060a082840312156115eb57600080fd5b60405160a0810181811067ffffffffffffffff8211171561161c57634e487b7160e01b600052604160045260246000fd5b604052825161162a816111b2565b8152602083015161163a816111b2565b6020820152604083810151908201526060830151611657816111b2565b6060820152608083015161166a816111b2565b60808201529392505050565b6001600160a01b03838116825282356020808401919091526080830191908401356116a0816111b2565b81811660408501525060408401356116b7816111b2565b818116606085015250509392505050565b600082516116da818460208701611275565b9190910192915050565b6000602082840312156116f657600080fd5b8151610edb8161132256fea2646970667358221220561b9f4f2486a0c59c614d4d92a5419927b979928e94ee797861ce9e0ca1520a64736f6c634300080c0033`,
  BytecodeLen: 6774,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:37:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: './index.rsh:43:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:52:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:63:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:67:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: './index.rsh:93:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  7: {
    at: './index.rsh:93:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  8: {
    at: './index.rsh:93:11:after expr stmt semicolon',
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
  "Bob": Bob,
  "Mcintyre": Mcintyre
  };
export const _APIs = {
  };
