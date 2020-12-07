const fs = require('fs');

const input = fs.readFileSync('./day_02/input.txt', { encoding: 'utf-8' }).split("\r\n").filter(x => x)
//console.log(input)

let validPasswords = 0;

input.forEach(password => {

    // \d - any digit character
    // \s - matches a single white space

    const pattern = /(\d?\d)-(\d?\d)\s(\w)\:\s(\w*)/;
    const groups = pattern.exec(password)
    //console.log(groups)

    const start = groups[1];
    const stop = groups[2];
    const find = groups[3];
    const pass = groups[4].split("")

    const matches = pass.filter(x => x == find).length
    //console.log(matches)

    if(matches >= start && matches <= stop)
        validPasswords++;
});

console.log(`The number of valid passwords is ${validPasswords}`)