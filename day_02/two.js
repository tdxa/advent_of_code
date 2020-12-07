const fs = require('fs');

const input = fs.readFileSync('./day_02/input.txt', { encoding: 'utf-8' }).split("\r\n").filter(x => x)

let validPasswords = 0;

input.forEach(password => {

    // \d - any digit character
    // \s - matches a single white space

    const pattern = /(\d?\d)-(\d?\d)\s(\w)\:\s(\w*)/;
    const groups = pattern.exec(password)

    const posOne = groups[1];
    const posTwo = groups[2];
    const find = groups[3];
    const pass = groups[4];

    const isOne = pass[posOne-1] === find ? 1 : 0;
    const isTwo = pass[posTwo-1] === find ? 1 : 0;
    
    if((isOne+isTwo) === 1)
        validPasswords++;
});

console.log(`The number of valid passwords is ${validPasswords}`)