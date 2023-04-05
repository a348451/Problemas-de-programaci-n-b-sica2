const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.on('linea',(linea)=>{
    for(let i = 1; i <= 10; i++){
        console.log(`${linea} X ${i} = ${Number.parseInt(linea)*i}`);
    }
    rl.close();
});
rl.prompt();