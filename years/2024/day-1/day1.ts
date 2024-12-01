import { WINDOWS_NEWLINE } from "../../../constants";
import { REGEX_SPACE_ONE_OR_MORE } from "../../../constants/regex";
import { getValueFrequency } from "../../../helpers/array";
import { readFile } from "../../../helpers/files";

const INPUT_FILE = __dirname + "/input.txt";

const lines = readFile(INPUT_FILE).split(WINDOWS_NEWLINE);

const leftColumn: Array<number> = [];
const rightColumn: Array<number> = [];

lines.forEach((line) => {
  const [left, right] = line.split(REGEX_SPACE_ONE_OR_MORE).map(Number);
  leftColumn.push(left);
  rightColumn.push(right);
});

// PART ONE

const sortedLeftColumn: Array<number> = leftColumn.sort();
const sortedRightColumn: Array<number> = rightColumn.sort();

const calculateDistance = (
  leftColumn: Array<number>,
  rightColumn: Array<number>
): number =>
  leftColumn.reduce(
    (sum, leftValue, i) => sum + Math.abs(leftValue - rightColumn[i]),
    0
  );

console.log(calculateDistance(sortedLeftColumn, sortedRightColumn));

// PART TWO

const calculateSimilarityScore = (
  leftColumn: Array<number>,
  rightColumn: Array<number>
) =>
  leftColumn.reduce(
    (sum, value) => sum + value * getValueFrequency(rightColumn, value),
    0
  );

console.log(calculateSimilarityScore(sortedLeftColumn, sortedRightColumn));
