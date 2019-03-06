const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

const key = ec.genKeyPair();
const publicKey = key.getPublic('hex');
const privateKey = key.getPrivate('hex');

console.log();
console.log('Private key: ', privateKey)
console.log('Public key: ', publicKey)
console.log();


//Private key:  fcb5f25d37d4d5b7a3fc4f4abc4fdea36ea4870e72496a0cb4254cb6a283b750
//Public key:  049a4dbccb5559a764bf305223b1470a09c42e3997c0f96a3815a0e99eb4ade624d9f4e8ecfeb753262559cbfc01e019f0170f6a7d1b5bfb84b2d15d892ca99dd0