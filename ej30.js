function operations(op, n1,n2){
    switch (op){
        case 'sum':
            return n1 + n2;
        case 'sub':
            return n1 - n2;
        case 'mul':
            return n1 * n2;
        case 'div':
            if (n2 != 0)
                return n1 / n2;
            else throw ('Error: Zero division');
    }
}

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let param = new Array();
rl.on('line',(line)=>{
    param = line.split(',');
    console.log(operations(param[0],Number.parseFloat(param[1]),Number.parseFloat(param[2])));
    rl.close();
});
console.log('Enter operation ("sum","sub","mul","div") and two numbers separated by comas');
rl.prompt();