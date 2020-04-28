'use strict';

//Steg 2 med inspiration från Copyright(c) 2020 Alligator.io

function scaryClown() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('Boh');
        }, 2000);
    });
}

async function msg() {
    //let msg_1 = await scaryClown();
    //let msg_2 = await scaryClown();
    //console.log('Message:', msg_1, msg_2);
    const [a,b] = await Promise.all([scaryClown(), scaryClown()]);
    console.log(`${a} ${b}`);
}

console.log('Startar...');
msg();
console.log('fortsätter...');
