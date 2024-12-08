import { WINDOWS_NEWLINE } from "../../../constants";
import { readFile } from "../../../helpers/files";
import { matrixRotate45, matrixRotate90 } from "../../../helpers/matrix";

const INPUT_FILE = __dirname + "/input.txt";

const lines = readFile(INPUT_FILE).split(WINDOWS_NEWLINE);

// PART ONE

const matrix = lines.map((row) => row.split(""));

const regex_xmas = /(?=(XMAS|SAMX))/g;

let words = 0;

const countMatches = (matrix: Array<Array<string>>) => {
  matrix.forEach((row) => {
    words += [...row.join("").matchAll(regex_xmas)].length;
  });
};

countMatches(matrix);
countMatches(matrixRotate90(matrix));
countMatches(matrixRotate45(matrix));
countMatches(matrixRotate45(matrix, true));

console.log("PART ONE:", words);

// PART TWO

/**
 * Checks if the 'A' character at (y, x) is surrounded by 'M' and 'S' in the specified pattern.
 * @param puzzle - The 2D array representing the puzzle.
 * @param y - The row index of the 'A' character.
 * @param x - The column index of the 'A' character.
 * @returns true if the 'A' is surrounded by the correct pattern of 'M' and 'S', false otherwise.
 */
const isValidA = (
  puzzle: Array<Array<string>>,
  y: number,
  x: number
): boolean => {
  const isTopLeftBottomRight =
    (puzzle[y - 1][x - 1] === "M" && puzzle[y + 1][x + 1] === "S") ||
    (puzzle[y - 1][x - 1] === "S" && puzzle[y + 1][x + 1] === "M");
  const isTopRightBottomLeft =
    (puzzle[y - 1][x + 1] === "S" && puzzle[y + 1][x - 1] === "M") ||
    (puzzle[y - 1][x + 1] === "M" && puzzle[y + 1][x - 1] === "S");

  return isTopLeftBottomRight && isTopRightBottomLeft;
};

const countXmasMatches = (matrix: Array<Array<string>>): number => {
  // Create a range from 1 to matrix.length - 1 to avoid checking borders
  const range = [...Array(matrix.length - 2).keys()].map((i) => i + 1);

  return range
    .flatMap((y) =>
      range.map((x) => (matrix[y][x] === "A" && isValidA(matrix, y, x) ? 1 : 0))
    )
    .reduce((acc: number, match: number) => acc + match, 0);
};

console.log("PART TWO:", countXmasMatches(matrix));
