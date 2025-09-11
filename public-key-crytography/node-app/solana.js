import * as solanaWeb3 from '@solana/web3.js';

const keypair= solanaWeb3.Keypair.generate();

const publicKey=keypair.publicKey.toBase58();
console.log(publicKey);
