const { info } = require('console');
const fs = require('fs');

const input = fs.readFileSync('./day_03/input.txt', { encoding: 'utf-8' }).split("\r\n").filter(x => x).map(x=> x.split(''))
//console.log(input)

console.log(input.length)
let trees = 0;
let x = 0;
let y = 0;

while(y < input.length){
    const correct_x = x % input[0].length;
    const point_map = input[y][correct_x];
    //console.log(point_map)

    if(point_map === '#')
        trees++;
    
    x+=3;
    y++;
}

console.log("Number of trees: " + trees);

