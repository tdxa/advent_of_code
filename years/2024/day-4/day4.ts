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

console.log(words);
