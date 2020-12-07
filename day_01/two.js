const fs = require('fs');

const input = fs.readFileSync('./day_01/input.txt', { encoding: 'utf-8' }).split("\n").filter(x => x).map(x => parseInt(x))

//console.log(input)

for (let i = 0; i < input.length; i++) {
    let first_number = input[i];

    for (let j = 0; j < input.length; j++) {
        let second_number = input[j];

        for (let k = 0; k < input.length; k++) {
            let third_number = input[k];

            if ((first_number + second_number + third_number) === 2020)
                return console.log(first_number * second_number * third_number);
        }
    }
}