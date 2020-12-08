const fs = require('fs');

const input = fs.readFileSync('./day_03/input.txt', { encoding: 'utf-8' }).split("\r\n").filter(x => x).map(x => x.split(''))
//console.log(input)

const part_one = (input, x_slope, y_slope) => {
    let trees = 0;
    let x = 0;
    let y = 0;

    while (y < input.length) {
        const correct_x = x % input[0].length;
        const point_map = input[y][correct_x];
        //console.log(point_map)

        if (point_map === '#')
            trees++;

        x += x_slope;
        y += y_slope;
    }
    return trees;
}

//console.log("Number of trees: " + part_one(input, 3, 1));

module.exports = part_one;