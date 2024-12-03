import { WINDOWS_NEWLINE } from "../../../constants";
import { readFile } from "../../../helpers/files";

const INPUT_FILE = __dirname + "/input.txt";

const lines = readFile(INPUT_FILE).split(WINDOWS_NEWLINE);

// PART ONE

const regex_mul: RegExp = /mul\((-?\d+),(-?\d+)\)/g; // `mul(X,Y)` pattern

export const computeMulInstructions = (instructions: Array<string>): number =>
  instructions
    .map(
      (instruction) =>
        [...instruction.matchAll(regex_mul)] // Extract valid "mul" instructions
          .reduce((acc, match) => acc + Number(match[1]) * Number(match[2]), 0) // Sum the results of valid "mul" expressions
    )
    .reduce((acc, lineSum) => acc + lineSum, 0); // Sum all line sums

console.log(computeMulInstructions(lines));
