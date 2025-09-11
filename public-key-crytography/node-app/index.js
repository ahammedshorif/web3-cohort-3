import * as ed from "@noble/ed25519"

async function fun(){
    const privateKey= ed.utils.randomSecretKey();
    console.log(privateKey);
    const publicKey = await ed.getPublicKeyAsync(privateKey);
    console.log(publicKey);
    
    const message = new TextEncoder().encode('shorif');
    const signature = await ed.signAsync(message,privateKey);
    const isValid = await ed.verifyAsync(signature,message,publicKey)

    console.log(isValid);
    
}

fun()
