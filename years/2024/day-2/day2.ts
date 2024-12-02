import { WINDOWS_NEWLINE } from "../../../constants";
import { readFile } from "../../../helpers/files";

const INPUT_FILE = __dirname + "/input.txt";

const lines = readFile(INPUT_FILE).split(WINDOWS_NEWLINE);
const reports = lines.map((line) => line.split(" ").map(Number));

// PART ONE

export const checkReports = (array: Array<Array<number>>) =>
  array.map((report) => {
    let isValid = true;
    let isIncreasing: boolean | null = null;

    for (let i = 0; i < report.length - 1; i++) {
      const difference = Math.abs(report[i] - report[i + 1]);

      if (difference < 1 || difference > 3) {
        isValid = false;
        break;
      }

      // Determine direction if not already determined
      if (isIncreasing === null) {
        isIncreasing = report[i + 1] > report[i]; // true if increasing, false if decreasing
      } else if (
        (isIncreasing && report[i + 1] < report[i]) ||
        (!isIncreasing && report[i + 1] > report[i])
      ) {
        isValid = false;
        break; // Change of direction found
      }
    }

    return isValid;
  });

const safeReports = checkReports(reports).filter(Boolean).length;

console.log(safeReports);
