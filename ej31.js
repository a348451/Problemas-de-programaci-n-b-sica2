function isPrime(n){
    if (n % 2 == 0 || n % 3 == 0) return false;
    let i = 5;
    while(i*i <= n){
        if (n % i == 0 || n % (i + 2) == 0 ){
            return false;
        }
        i += 6;
    }
    return true;
}

function printTable(numero){
    for(let i = 1; i <= 10; i++){
        console.log(`${numero} X ${i} = ${numero*i}`);
    }
}
function factorial(numero) {
    if (numero <= 0) return 1;
    else return (numero * factorial(numero - 1));
}

function operations(op, n){
    switch (op){
        case 'primo':
            return isPrime(n);
        case 'factorial':
            return factorial(n);
        case 'tabla':
            return printTable(n);
    }
}
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let param = new Array();
rl.on('line',(line)=>{
    param = line.split(',');
    console.log(operations(param[0],Number.parseFloat(param[1])));
    rl.close();
});
console.log('Ingresa la operación ("primo","factorial","tabla") y un numero separado por una coma');
rl.prompt();