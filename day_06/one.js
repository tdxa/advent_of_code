const fs = require('fs');

const input = fs.readFileSync('./day_06/input.txt', { encoding: 'utf-8' }).split("\r\n")

let answers = new Set();
let total = 0;

for(let i = 0; i < input.length; i++){
    if(input[i]!==''){
        input[i].split('').forEach(element =>answers.add(element))
    }

    if(i == input.length-1 || input[i]== ''){
        const groups = answers.size;
        answers.clear()
        total+= groups;
    }
    
}

console.log(total)
