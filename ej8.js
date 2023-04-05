const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter character: ', (resp)=>{
    if (!(resp === 'S' || resp === 'N')){
        console.log('Ingresa otro caracter :p');
    }
    else console.log('ese si jala jiji');
    rl.close();
});