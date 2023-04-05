let count = 0;
let str = ""
for(let pagina = 0; pagina < 3; pagina++){
    
    str += `Tabla #${pagina+1}\n`;
    for(let fila = 0; fila < 4; fila++){
        for(let columna = 0; columna < 5; columna++){
            str += `${++count}\t`;
        }
        str += '\n';
    }
}

console.log(str);