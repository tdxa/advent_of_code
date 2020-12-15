const { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } = require('constants');
const fs = require('fs');

const input = fs.readFileSync('./day_08/input.txt', { encoding: 'utf-8' }).split("\r\n")
console.log(input)

let accumulator = 0;
let index = 0;
let visted = [];

while (!visted.includes(index)) {
    visted.push(index);
    const [line, command, number] = /(acc|jmp|nop)\s((\+|\-)\d*)/.exec(input[index])
    // console.log(line + " " + command + " " + number)

    switch (command) {
        case 'acc':
            accumulator += parseInt(number);
            index++;
            break;

        case 'jmp':
            index += parseInt(number);
            break;

        // nop
        default:
            index++;
            break;
    }
}

console.log(accumulator)