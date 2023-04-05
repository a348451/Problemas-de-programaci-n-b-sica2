const Student = require('./Student');

let notesMap = new Map();
notesMap.set('Nombre random 1',10);
notesMap.set('Nombre random 2',8);
notesMap.set('Nombre random 3',7);
notesMap.set('Nombre random 4',6);
notesMap.set('Nombre random 5',7.5);
notesMap.set('Nombre random 6',8);
notesMap.set('Nombre random 7',10);
notesMap.set('Nombre random 8',2);
notesMap.set('Nombre random 9',1);
notesMap.set('Nombre random 10',10);

let student = new Student();
student.random = 'Nombre estudiante random';
student.notes = notesMap;
console.log(student.find('Nombre random 4'));