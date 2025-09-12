import { generateMnemonic,mnemonicToSeedSync } from "bip39";
import nacl from "tweetnacl"
import { derivePath } from "ed25519-hd-key";
import { Keypair } from "@solana/web3.js";

// const mnemonic= generateMnemonic(128); 
// console.log(mnemonic);
// const seed  = mnemonicToSeedSync(mnemonic) //root seed
// console.log(seed);



//seed to Derivation wallet

// m/purpose/coin_type/account_no/change(0/1)

// m/44/0/0 - wallet on bitcoin
// m/44/1/0 - 2nd wallet on bitcoin
// m/44/501/0 - wallet on solana
// m/44/60/0 - wallet on eth

//derivation of wallet from seed

// const mnemonic= generateMnemonic(128);     //generate the seed
const mnemonic= "magnet drink attitude together torch jump keep derive drop march path robust"; //same seed generate derive same address
console.log(mnemonic);
const seed  = mnemonicToSeedSync(mnemonic)

for(let i=0;i<4;i++){
    const path = `m/44'/501'/${i}'/0'`; //this is the derivation path
    const derivedSeed= derivePath(path,seed.toString("hex")).key;
    const secret= nacl.sign.keyPair.fromSeed(derivedSeed).secretKey;
    console.log(Keypair.fromSecretKey(secret).publicKey.toBase58());
    
}