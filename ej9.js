const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Ingresa un número: ',(numero)=>{
    if(isNaN(numero)){ console.log("El dato ingresado no es numero") 
    }else{(numero < 0) ? console.log("El numero es negativo") : console.log("El numero es positivo");
    }
    rl.close();
});