import { WINDOWS_NEWLINE } from "../../../constants";
import { readFile } from "../../../helpers/files";

const INPUT_FILE = __dirname + "/input.txt";

const lines = readFile(INPUT_FILE).split(WINDOWS_NEWLINE);
const reports = lines.map((line) => line.split(" ").map(Number));

// PART ONE

const checkValid = (arr: Array<number>) => {
  let isIncreasing: boolean | null = null;

  for (let i = 0; i < arr.length - 1; i++) {
    const difference = Math.abs(arr[i] - arr[i + 1]);

    if (difference < 1 || difference > 3) return false;

    if (isIncreasing === null) {
      isIncreasing = arr[i + 1] > arr[i];
    } else if (
      //check if the current value breaks the pattern
      (isIncreasing && arr[i + 1] < arr[i]) ||
      (!isIncreasing && arr[i + 1] > arr[i])
    ) {
      return false;
    }
  }
  return true;
};

export const checkReports = (array: Array<Array<number>>) =>
  array.map((report) => {
    if (checkValid(report)) return true;

    // Check if removing a single element makes it valid
    for (let i = 0; i < report.length; i++) {
      const newReport = [...report.slice(0, i), ...report.slice(i + 1)];
      if (checkValid(newReport)) return true;
    }

    // If not valid by itself or by removing one element, return false
    return false;
  });

const safeReports = checkReports(reports).filter(Boolean).length;

console.log(safeReports);
