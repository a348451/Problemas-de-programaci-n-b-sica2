var mat = new Array(4);
for (var i = 0; i< mat.length; i++){
    mat[i] = new Array(5);
}

for(var i = 0; i < mat.length; i++){
    for(var j = 0; j < mat[0].length; j++){
        var rand = Math.floor(Math.random() * 100) + 1;
        mat[i][j] = rand;
   }
}
console.log(mat);