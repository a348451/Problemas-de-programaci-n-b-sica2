var contador = 0;

for(var x = 1; x<=100; x++){
    if (x % 2 == 0 || x % 3 == 0){
        contador++;
        console.log(x);
    }
}

console.log("Numeros: " + contador);