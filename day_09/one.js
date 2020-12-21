const fs = require('fs');

const input = fs.readFileSync('./day_09/input.txt', { encoding: 'utf-8' }).split("\r\n").map(Number)
//console.log(input)

// SET PREAMBLE!!
const preamble = 5;
let final = 0;

for (let i = 0; i < input.length; i++) {
    let current = input.slice(i, preamble + i + 1)
    const currentSet = new Set(input.slice(i, preamble + i))

    if (i < input.length - preamble - 1) {
        // number to check
        final = current.pop()

        for (let j = 0; j < currentSet.size; j++) {
            const number_to_add = final - current[j];

            if (currentSet.has(number_to_add))
                break;

            if (j === current.length - 1)
                console.log(final)
        }
    }
    else
        break;
}
