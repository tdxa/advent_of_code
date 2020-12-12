const fs = require('fs');

const input = fs.readFileSync('./day_07/input.txt', { encoding: 'utf-8' }).split("\r\n").filter(x => x)
//console.log(input)

const map_bags = new Map();

function hasShindGold(color_bag) {
    if(color_bag === 'shiny gold')
        return true;
    if(!map_bags.has(color_bag)) 
        return false;

    const inner = map_bags.get(color_bag);

    for (const {color: bag} of inner) { 
        if(hasShindGold(bag))
            return true;
    }
    return false;

}

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

const colors = map_bags.keys()
let sum = 0;

for (const color of colors) {
    if(hasShindGold(color) && color != 'shiny gold')
        sum++
}

console.log(sum)