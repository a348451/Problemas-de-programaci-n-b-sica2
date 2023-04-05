var mat = new Array(4);
var matT = new Array(5);

for (var i = 0; i< mat.length; i++){
    mat[i] = new Array(5);
}

for (var i = 0; i< matT.length; i++){
    matT[i] = new Array(4);
}

for(var i = 0; i < mat.length; i++){
    for(var j = 0; j < mat[0].length; j++){
        var rand = Math.floor(Math.random() * 100) + 1;
        mat[i][j] = rand;
        matT[j][i] = rand;
   }
}

console.log("Matriz normal:");
console.log(mat)
console.log("Transp:"); 
console.log(matT);
