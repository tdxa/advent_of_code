const fs = require('fs');

const input = fs.readFileSync('./day_06/input.txt', { encoding: 'utf-8' }).split("\r\n")

let answers = [];
let total = 0;

let temp = []

for (let i = 0; i < input.length; i++) {
    if (input[i] !== '') {
        temp.push(input[i])
    }

    if (i == input.length - 1 || input[i] == '') {
        answers.push(temp)
        temp = []
    }

}

answers.forEach(answer => {
    const all_answer = answer.join('')

    const unique_answer = [... new Set(all_answer.split(''))]


    for(let i =0; i< unique_answer.length; i++){
        const current_answer = unique_answer[i];

        if(answer.every(x => x.includes(current_answer)))
            total++
    }

})

console.log(total)
