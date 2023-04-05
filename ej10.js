const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Ingresa un numero: ', (num)=>{
    if (isNaN(num)){
        console.log("El sato ingresado no es un número")
    }else{
        ((num % 2)== 0) ? console.log("El numero es par"):
        console.log("El numero es impar")
    }
    rl.close();
});