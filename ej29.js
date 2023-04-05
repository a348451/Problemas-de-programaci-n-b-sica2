var count = 0;
for(var i = 0; i < 100;i++){
    var d1 = 1 + Math.round(Math.random()*5);
    var d2 = 1 + Math.round(Math.random()*5);
    if (d1 + d2 == 10) count++;

}
console.log(`Total: ${count}`);