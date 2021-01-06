const fs = require('fs');

const input = fs.readFileSync('./day_10/input.txt', { encoding: 'utf-8' }).split("\r\n").map(Number);

input.sort((a, b) => a - b)

let oneJolt = 1;
let threeJolt = 1;

console.log(input)

for(let i=0;i<input.length-1; i++){
    const diffrence = Math.abs(input[i] - input[i+1]);
    if(diffrence === 1)
        oneJolt++;
    if(diffrence === 3)
        threeJolt++;
}

console.log(oneJolt* threeJolt)