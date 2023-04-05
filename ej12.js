var sumaPares = 0;
var sumaImpares = 0;

for (var x = 1; x<=100; x++){
    console.log(x)
    if(x%2 == 0) sumaPares += x;
    else sumaImpares += x;
}

console.log("La suma de numeros pares es: " + sumaPares);
console.log("La suma de numeros impares es: " + sumaImpares);