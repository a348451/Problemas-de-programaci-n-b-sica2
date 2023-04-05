const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Ingresa un numero: ', (num)=>{
    if (isNaN(num)){
        console.log("El dato ingresado no es un número")
    }else{
        for(var x = 3; x <= num; x = x+3){
            console.log(x)
        }
    }
    rl.close();
});