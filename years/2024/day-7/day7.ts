import { WINDOWS_NEWLINE } from "../../../constants";
import { readFile } from "../../../helpers/files";

const INPUT_FILE = __dirname + "/input.txt";

const lines = readFile(INPUT_FILE).split(WINDOWS_NEWLINE);

// PART ONE

type Equation = {
  target: number;
  numbers: Array<number>;
};

const equations: Array<Equation> = lines.map((line) => {
  const [target, numbers] = line.split(": ");
  return {
    target: Number(target),
    numbers: numbers.split(" ").map(Number),
  };
});

const operators = ["+", "*"];

const generateCombinations = (length: number, values: string[]): string[] => {
  const totalCombinations = values.length ** length;

  return Array.from({ length: totalCombinations }, (_, index) => {
    let combination = "";
    let temp = index;

    for (let i = 0; i < length; i++) {
      combination = values[temp % values.length] + combination;
      temp = Math.floor(temp / values.length);
    }

    return combination;
  });
};

const isEquationValid = ({ target, numbers }: Equation): boolean => {
  const combinations = generateCombinations(numbers.length - 1, operators);

  return combinations.some((ops) => {
    let result = numbers[0];
    ops.split("").forEach((op, i) => {
      result = op === "+" ? result + numbers[i + 1] : result * numbers[i + 1];
    });
    return result === target;
  });
};

const totalCalibrationResult = equations
  .filter(isEquationValid)
  .reduce((sum, { target }) => sum + target, 0);

console.log("Total Calibration Result:", totalCalibrationResult);



