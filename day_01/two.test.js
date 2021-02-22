const { test } = require('@jest/globals');
const part_two = require('./two');

test('part two should return 241861950', () => {
    expect(part_two('input.txt')).toBe(241861950);
})