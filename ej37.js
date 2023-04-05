let materias = {
    ciencias: [
        { nombre: 'Edna', calificacion: 3 },
        { nombre: 'Patricia', calificacion: 7 },
        { nombre: 'Daniel', calificacion: 6 }
    ],
    matematicas: [
        { nombre: 'Abril', calificacion: 8 },
        { nombre: 'Roman', calificacion: 8 },
        { nombre: 'Regina', calificacion: 10 },
        { nombre: 'Julio', calificacion: 7 }
    ]
    ,
    lenguas:
        [{ nombre: 'Jose', calificacion: 9 }]
}

let ls = [];
for (materia in materias) {
    ls.push(materias[materia]);
}

ls.sort((a,b) => {
    if(a.length === b.length) return 0;
    return (a.length < b.length) ? -1 : 1;
});

ls.forEach((materia) => {
    materia.forEach((alumno) => {
        console.log(`Nombre: ${alumno.nombre}, calificiacion: ${alumno.calificacion}`);
    });
});