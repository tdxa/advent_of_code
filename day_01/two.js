const part_two = (file) => {
    const fs = require('fs');
    const input = fs.readFileSync('./day_01/' + file, { encoding: 'utf-8' }).split("\n").filter(x => x).map(x => parseInt(x))

    for (let i = 0; i < input.length; i++) {
        let first_number = input[i];

        for (let j = 0; j < input.length; j++) {
            let second_number = input[j];

            for (let k = 0; k < input.length; k++) {
                let third_number = input[k];

                if ((first_number + second_number + third_number) === 2020)
                    return first_number * second_number * third_number;
            }
        }
    }
}

module.exports = part_two;