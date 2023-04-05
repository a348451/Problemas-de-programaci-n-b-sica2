const Student = require('./Student');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let lineCount = 0;
let student = new Student();
rl.question("Input student name and then enter the student's notes in the following format {asignature,note} \nStudent name: ",(answer)=>{
    student.name = answer;
});

rl.on('line',(line)=>{
    student.notes.set(line.split(',')[0],Number.parseFloat(line.split(',')[1]));
    lineCount++;
    if(lineCount === 10){
        
        console.log(`The mean of ${student.studentName} notes is ${student.calculateMean()}`);
        rl.close();
    }
});