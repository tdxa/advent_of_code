const child_process = require("child_process");
const fs = require("fs");

const [, , year, day] = process.argv;

const isValidInput = (year, day) => {
  const isValidYear = /^\d{4}$/.test(year);
  const isValidDay = /^\d{1,2}$/.test(day);
  return isValidYear && isValidDay;
};

const getTestPath = (year, day) => {
  if (isValidInput(year, day)) {
    return `./years/${year}/day-${day}/day${day}.test.ts`;
  } else {
    throw new Error(
      "Invalid year or day format. Please provide a valid year (e.g., 2023) and day (e.g., 1)."
    );
  }
};

try {
  if (!year || !day) {
    console.error("Usage: npm run advent-test -- <year> <day>");
    process.exit(1);
  }

  const testPath = getTestPath(year, day);

  if (!fs.existsSync(testPath)) {
    throw new Error(`File '${testPath}' does not exist.`);
  }

  const result = child_process.execSync(`jest ${testPath}`, {
    stdio: "inherit",
  });
} catch (error) {
  console.error((error as Error).message);
  process.exit(1);
}
