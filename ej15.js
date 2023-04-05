const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let sumO = 0;
let count = 0;
let bounds = new Array(2);

let lineCount = 0;
rl.on('Linea', (Linea) => {
    bounds[lineCount] = Number.parseInt(Linea);
    lineCount++;
    if (lineCount == 2) {

        if (bounds[0] > bounds[1]) {
            let aux = bounds[0];
            bounds[0] = bounds[1];
            bounds[1] = aux;
        }
      
        for (let i = bounds[0]; i <= bounds[1]; i++) {
            if (i % 2 == 0) count++;
            else sumO += i;
        }
        console.log("Total de numero: " + (bounds[1] - bounds[0]));
        console.log("Numeros pares: " + count);
        console.log("Suma de numeros impares: " + sumO);
        rl.close();
    }
});


console.log("Ingresa dos numeros");
rl.prompt();