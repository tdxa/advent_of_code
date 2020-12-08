const fs = require('fs');

const part_one = require('./one');

const input = fs.readFileSync('./day_03/input.txt', { encoding: 'utf-8' }).split("\r\n").filter(x => x).map(x=> x.split(''))
//console.log(input)

const search_trees = (input, x_slopes, y_slopes) =>{
    let result = 1;

    for(let i =0; i < x_slopes.length; i++){
        let trees = part_one(input, x_slopes[i], y_slopes[i]);
        result*=trees;
    }
    return result;
};

console.log(search_trees(input, [1,3,5,7,1], [1,1,1,1,2]))

