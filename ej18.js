const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let ch;
let count = 0;
rl.question("Ingresa el carcater que estas buscando: ", (answer)=>{
    ch = answer;
});
rl.on('line', (line) =>{ 
    for(let c of line){
        if (c === ch) count++;
    }
    let msg = `Numero de ${ch}´s en la frase es ${count}`
    console.log(msg);
    rl.close();
});
rl.prompt();