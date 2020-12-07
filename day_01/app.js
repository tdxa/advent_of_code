const fs = require('fs');

const input = fs.readFileSync('./day_01/input.txt', { encoding: 'utf-8' }).split("\n").filter(x => x).map(x => parseInt(x))

console.log(input)

for (let i = 0; i < input.length; i++) {
    let first_number = 2020 - input[i];
    let second_number = input.filter(x => x == first_number)

    if (input.filter(x => x == first_number).length == 1) {
        return console.log(input[i] * second_number);
    }
}