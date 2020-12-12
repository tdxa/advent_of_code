const fs = require('fs');

const input = fs.readFileSync('./day_07/input.txt', { encoding: 'utf-8' }).split("\r\n").filter(x => x)
//console.log(input)

const map_bags = new Map();

for (const item of input) {
    const [bag, inner_bags] = item.split(' bags contain ');

    inner_bags.replace(/\./g, '').split(', ').map(text => {
        //console.log(text)
        const { groups } = /((?<quantity>\d+) )?(?<color>\D+)/.exec(text.replace(/ bags?/, ''))

        if (!map_bags.has(bag))
            map_bags.set(bag, [])

        if (groups.quantity === undefined || groups.color === 'no other') {
            groups.quantity = 0;
            groups.color = 'none'
        }

        map_bags.set(bag, [...map_bags.get(bag), groups])
    })
}

function total_inside(top) {
    if (top.quantity == 0)
        return 0

    const inner = map_bags.get(top.color);
    let sum = 1;

    for (const bag of inner) {
        sum += bag.quantity * total_inside(bag);
    }
    return sum;
}

console.log(total_inside({ quantity: 1, color: 'shiny gold' })-1);