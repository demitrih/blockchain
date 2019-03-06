# blockchain 
Blockchain example written in JavaScript that implements proof-of-work, encrypted transactions and miner rewards.

## details
* `node.js` used to run server side commands
* `crypto-js` used to calculate hashes
* `elliptic` to generate private and public keys

### sample input
```JavaScript
 const tx1 = new Transaction(myWalletAddress, 'public key', 'starting balance');
 tx1.signTransaction(myKey);
 mychain.addTransactioin(tx1);
 mychain.minePendingTransactions(myWalletAddress);
 ```

### sample output
```
Starting the miner...
Block mined: 00e72b3f91cda26f938ab364d1eb1d7e91cf3c8a5a9f48a38f8a50ff61bb3b95
Block successfully mined!
Your current balance: 100
```
