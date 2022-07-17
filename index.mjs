import {loadStdlib} from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';
const stdlib = loadStdlib(process.env);


const commonFunctions = {
  seeNotification : (ready) => {
    if(ready)
      console.log('Bob accepted the whitelist');
    else
      console.log('Bob rejected the whitelist')
  },
  attacherMatched : (ready) => {
    if(ready)
      console.log(stdlib.formatAddress(accBob), ' Found in the whitelist');
    else
      console.log(stdlib.formatAddress(accBob), ' was not found in the whitelist')
  },
  
};

const startingBalance = stdlib.parseCurrency(100);
const time = stdlib.connector === 'CFX' ? 50 : 10;

const [ accAlice, accBob, accMcintyre ] =
  await stdlib.newTestAccounts(3, startingBalance);
  const fmt = (x) => stdlib.formatCurrency(x, 4);
  

const zahra = await stdlib.launchToken(accAlice, "ZAHRA COIN", "ZEE");


if ( stdlib.connector === 'ETH' || stdlib.connector === 'CFX' ) {
  const gasLimit = 5000000;
  accAlice.setGasLimit(gasLimit);
  accBob.setGasLimit(gasLimit);
  accMcintyre.setGasLimit(gasLimit);
} else if ( stdlib.connector == 'ALGO' ) {
  console.log(`Demonstrating need to opt-in on ALGO`);
 
  console.log(`Opt-ing in on ALGO`);
  await accAlice.tokenAccept(zahra.id);
  await accBob.tokenAccept(zahra.id);
  await accMcintyre.tokenAccept(zahra.id);
}

await zahra.mint(accAlice, 15000);

console.log('Launching...');
const ctcAlice = accAlice.contract(backend);
const ctcBob = accBob.contract(backend, ctcAlice.getInfo());
const ctcMcintyre = accMcintyre.contract(backend, ctcAlice.getInfo());

console.log('Starting backends...');

await Promise.all([
  backend.Alice(ctcAlice, {
    ...commonFunctions,
    tokenDetails : () => {
        //console.log(token.name.toString())
        return [zahra.id, 15000, time];
    },
    aliceAdd : () => {
      console.log('Providing Bob\'s Address which is', stdlib.formatAddress(accBob));
      return accBob.getAddress();
    },
    aliceAdd2 : () => {
      console.log('Providing Mcintyre\'s Address which is', stdlib.formatAddress(accMcintyre));
      return accMcintyre.getAddress();
    },
    attacherMatched1 : (ready) => {
      if(ready)
        console.log(stdlib.formatAddress(accMcintyre), ' Found in the whitelist');
      else
        console.log(stdlib.formatAddress(accMcintyre), ' was not found in the whitelist')
    }
  }),

  backend.Bob(ctcBob, {
    ...commonFunctions,
    ready : (...v) => {
      console.log(`Bob optin Token: `, zahra.name);
      return true;
    }
  }),
  backend.Mcintyre(ctcMcintyre, {
    ...commonFunctions,
    ready1 : (...v) => {
      console.log(`Mcintyre optin Token: `, zahra.name);
      return false;
    },
    attacherMatched1 : (ready1) => {
      if(ready1)
        console.log(stdlib.formatAddress(accMcintyre), ' Found in the whitelist');
      else
        console.log(stdlib.formatAddress(accMcintyre), ' was not found in the whitelist')
    }
  }),
]);

const mdA = await accAlice.tokenMetadata(zahra.id);
console.log('Token Name: ',mdA.name.toString())
console.log('Token Symbol: ',mdA.symbol.toString())
console.log('Supply: ',mdA.supply.toString())
console.log('Decimals: ',mdA.decimals.toString())

console.log('Congratulations! Whitelisted Address Approved!');

console.log('Distribution Completed!!');

console.log('Tokens Successfully Delivered!!!');

const aliceAfter = await accAlice.balancesOf([zahra.id]);
const bobAfter = await accBob.balancesOf([zahra.id]);
const mcintyreAfter = await accMcintyre.balancesOf([zahra.id]);


console.log('Alice Balance after the distribution is ',aliceAfter.toString(), zahra.sym);
console.log('Bob Balance after the distribution is ',bobAfter.toString(), zahra.sym);
console.log('Mcintyre Balance after the distribution is ',mcintyreAfter.toString(), zahra.sym);


console.log('Goodbye!');

