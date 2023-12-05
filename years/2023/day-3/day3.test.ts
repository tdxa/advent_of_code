import {
  filterNumbersByNeighbor,
  isNeighbor,
  processLinesToItems,
  sumPartNumber,
} from "./day3";

describe("Read the engine schematic - part 1", () => {
  const lines = [
    "467..114..",
    "...*......",
    "..35..633.",
    "......#...",
    "617*......",
    ".....+.58.",
    "..592.....",
    "......755.",
    "...$.*....",
    ".664.598..",
  ];

  const expectedSymbols = [
    { line: 1, index: 3 },
    { line: 3, index: 6 },
    { line: 4, index: 3 },
    { line: 5, index: 5 },
    { line: 8, index: 3 },
    { line: 8, index: 5 },
  ];
  const expectedNumbers = [
    { line: 0, start: 0, end: 2, value: 467 },
    { line: 0, start: 5, end: 7, value: 114 },
    { line: 2, start: 2, end: 3, value: 35 },
    { line: 2, start: 6, end: 8, value: 633 },
    { line: 4, start: 0, end: 2, value: 617 },
    { line: 5, start: 7, end: 8, value: 58 },
    { line: 6, start: 2, end: 4, value: 592 },
    { line: 7, start: 6, end: 8, value: 755 },
    { line: 9, start: 1, end: 3, value: 664 },
    { line: 9, start: 5, end: 7, value: 598 },
  ];

  const expectedFilteredNumbers = [
    { line: 0, start: 0, end: 2, value: 467 },
    { line: 2, start: 2, end: 3, value: 35 },
    { line: 2, start: 6, end: 8, value: 633 },
    { line: 4, start: 0, end: 2, value: 617 },
    { line: 6, start: 2, end: 4, value: 592 },
    { line: 7, start: 6, end: 8, value: 755 },
    { line: 9, start: 1, end: 3, value: 664 },
    { line: 9, start: 5, end: 7, value: 598 },
  ];

  it("should correctly process lines into numbers and symbols", () => {
    const { numbers, symbols } = processLinesToItems(lines);

    expect(numbers).toHaveLength(10);
    expect(numbers).toEqual(expectedNumbers);

    expect(symbols).toHaveLength(6);
    expect(symbols).toEqual(expectedSymbols);
  });

  it("should correctly handle lines without numbers or symbols", () => {
    const linesWithoutNumbers = ["....", "....", "...."];
    const { numbers, symbols } = processLinesToItems(linesWithoutNumbers);

    expect(numbers).toHaveLength(0);
    expect(symbols).toHaveLength(0);
  });

  it("should correctly handle a single line with numbers and symbols", () => {
    const singleLine = ["123*..."];
    const { numbers, symbols } = processLinesToItems(singleLine);

    expect(numbers).toHaveLength(1);
    expect(symbols).toHaveLength(1);
  });

  it("should correctly determine if symbol is a neighbor of number", () => {
    const symbol = { line: 1, index: 3 };
    const number = { line: 0, start: 0, end: 2, value: 467 };

    const result = isNeighbor(symbol, number);
    expect(result).toBe(true);
  });

  it("should correctly determine if number doesn't have a symbol neighbour", () => {
    const number = { line: 0, start: 5, end: 7, value: 114 };

    const result = expectedSymbols
      .map((symbol) => isNeighbor(symbol, number))
      .every(Boolean);
    expect(result).toBe(false);
  });

  it("should correctly filter numbers based on symbols", () => {
    const result = filterNumbersByNeighbor(expectedNumbers, expectedSymbols);
    expect(result).toHaveLength(8);
    expect(result).toEqual([
      { line: 0, start: 0, end: 2, value: 467 },
      { line: 2, start: 2, end: 3, value: 35 },
      { line: 2, start: 6, end: 8, value: 633 },
      { line: 4, start: 0, end: 2, value: 617 },
      { line: 6, start: 2, end: 4, value: 592 },
      { line: 7, start: 6, end: 8, value: 755 },
      { line: 9, start: 1, end: 3, value: 664 },
      { line: 9, start: 5, end: 7, value: 598 },
    ]);
  });

  it("should correctly sum the values of numbers", () => {
    const result = sumPartNumber(expectedFilteredNumbers);
    expect(result).toBe(4361);
  });
});
