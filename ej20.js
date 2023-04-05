let sumaImpares = 0;
let sumaPares = 0;
for (let i = 1; i<= 1000; i++){
    if(i % 2 == 0) sumaPares += i;
    else sumaImpares += i;
}
console.log("Sum of odd numbers: "+sumaImpares);
console.log("Sum of even numbers: " +sumaPares);