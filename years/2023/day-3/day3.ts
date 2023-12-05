import { WINDOWS_NEWLINE } from "../../../constants";
import { readFile } from "../../../helpers/files";
import { NumberItem, ProcessedLines, SymbolItem } from "./types";

const INPUT_FILE = __dirname + "/input.txt";
const lines = readFile(INPUT_FILE).split(WINDOWS_NEWLINE);

export const processLinesToItems = (lines: Array<string>): ProcessedLines => {
  const numbers: Array<NumberItem> = [];
  const symbols: Array<SymbolItem> = [];
  const gears: Array<SymbolItem> = [];

  lines.forEach((line, index) => {
    const symbolRegex = /[^0-9|.]/g;
    Array.from(line.matchAll(symbolRegex)).forEach((match) =>
      symbols.push({
        line: index,
        index: match.index!,
      })
    );

    const numberRegex = /\d+/g;
    Array.from(line.matchAll(numberRegex)).forEach((match) => {
      const start = match.index!;
      const end = match.index! + match[0].length - 1;
      const value = parseInt(match[0], 10);

      numbers.push({
        line: index,
        start,
        end,
        value,
      });
    });

    const gearRegex = /\*/g;
    Array.from(line.matchAll(gearRegex)).forEach((match) =>
      gears.push({
        line: index,
        index: match.index!,
      })
    );
  });

  return { numbers, symbols, gears };
};

export const isNeighbor = (symbol: SymbolItem, number: NumberItem): boolean => {
  const { line: sx, index: sy } = symbol;
  // sx is the x-coordinate of the symbol, sy is the y-coordinate of the symbol
  const { line: nl, start: ns, end: ne } = number;
  // nl is the x-coordinate of the number, ns is its starting y-coordinate, and ne is its ending y-coordinate

  const areCoordinatesClose = (
    x1: number,
    y1: number,
    x2: number,
    y2: number
  ): boolean => Math.abs(x1 - x2) <= 1 && Math.abs(y1 - y2) <= 1;

  return (
    areCoordinatesClose(sx, sy, nl, ns) || areCoordinatesClose(sx, sy, nl, ne)
  );
};

export const filterNumbersByNeighbor = (
  numbers: Array<NumberItem>,
  symbols: Array<SymbolItem>
): Array<NumberItem> =>
  numbers.filter((number) =>
    symbols.some((symbol) => isNeighbor(symbol, number))
  );

export const sumPartNumber = (numbers: Array<NumberItem>) =>
  numbers.reduce((acc, num) => acc + num.value, 0);

export const validateGears = (
  gears: Array<SymbolItem>,
  numbers: Array<NumberItem>
): Array<number> =>
  gears
    .map((gear) => {
      const filteredNumbers = numbers.filter((number) =>
        isNeighbor(gear, number)
      );

      const gearValue =
        filteredNumbers.length === 2
          ? filteredNumbers.reduce(
              (acc, num) => (acc === 0 ? num.value : acc * num.value),
              0
            )
          : null;

      return gearValue;
    })
    .filter((gear): gear is number => gear !== null);

const { numbers, symbols, gears } = processLinesToItems(lines);

const filteredNumbers = filterNumbersByNeighbor(numbers, symbols);
console.log(sumPartNumber(filteredNumbers));

const filteredGears = validateGears(gears, numbers);
console.log(filteredGears.reduce((a, b) => a + b));
