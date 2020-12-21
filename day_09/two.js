const { searchInavlid, input } = require("./one");

// the result of the part one
const invalid = searchInavlid(input, 5);

// decrease the range to an invalid number
const numbers = input.slice(0, input.indexOf(invalid) + 1)

function searchContiguous(numbers, invalid) {
    let current_total = 0;
    let contiguous = [];
    for (let i = 0; i < numbers.length; i++) {
        const current = numbers[i];

        current_total += current;
        contiguous.push(current);
        for (let j = i + 1; j < numbers.length; j++) {
            const next = numbers[j];

            current_total += next;
            contiguous.push(next);

            if (current_total > invalid) {
                current_total = 0;
                contiguous = [];
                break;
            }

            if (current_total === invalid) {
                return Math.min(...contiguous) + Math.max(...contiguous)
            }
        }
    }
}

console.log(searchContiguous(numbers, invalid));
