function genMatrix(m, n){
    let matriz =  [];
    for(let i = 0; i < m; i++){
        matriz.push([]);
        for(let j = 0; j < n; j++){
            matriz[i][j] = Math.random();
        }
    }
    return matriz;
}

console.log(genMatrix(99,1).sort((a,b) => {
    if(a[0] === b[0]) return 0;
    return (a[0] < b[0]) ? -1 : 1;
}));