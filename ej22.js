const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.on('linea',(linea)=>{
    rl.close();
    for (let i = 0; i < 5; i++){
        console.log(linea);
        linea = '    ' + linea;
    }
});

console.log("Ingresa una frase");
rl.prompt();