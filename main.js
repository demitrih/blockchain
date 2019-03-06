const {Blockchain, Transaction} = require('./blockchain');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

const myKey = ec.keyFromPrivate('fcb5f25d37d4d5b7a3fc4f4abc4fdea36ea4870e72496a0cb4254cb6a283b750');
const myWalletAddress = myKey.getPublic('hex');


let mychain = new Blockchain();

const tx1 = new Transaction(myWalletAddress, 'insert public key', 0);
tx1.signTransaction(myKey);
mychain.addTransactioin(tx1);
console.log('\nStarting the miner.');
mychain.minePendingTransactions(myWalletAddress);
console.log('\nBalance of my address is ', mychain.getBalanceOfAddress(myWalletAddress));
console.log('Is chain valid', mychain.isChainValid());


const tx2 = new Transaction(myWalletAddress, 'insert public key', 10);
tx2.signTransaction(myKey);
mychain.addTransactioin(tx2);
console.log('\nStarting the miner.');
mychain.minePendingTransactions(myWalletAddress);
console.log('\nBalance of my address is ', mychain.getBalanceOfAddress(myWalletAddress));
console.log('Is chain valid', mychain.isChainValid());
