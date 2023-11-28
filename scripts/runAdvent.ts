const child_process = require('child_process');
const fs = require('fs');

const [, , year, day] = process.argv;

const isValidInput = (year:string, day:string) => {
  const isValidYear = /^\d{4}$/.test(year);
  const isValidDay = /^\d{1,2}$/.test(day);
  return isValidYear && isValidDay;
};

const getScriptPath = (year:string, day:string) => {
  if (isValidInput(year, day)) {
    return `./years/${year}/day-${day}/day${day}.ts`;
  } else {
    throw new Error('Invalid year or day format. Please provide a valid year (e.g., 2023) and day (e.g., 1).');
  }
};

try {
  if (!year || !day) {
    console.error('Usage: npm run advent -- <year> <day>');
    process.exit(1);
  }

  const scriptPath = getScriptPath(year, day);

  if (!fs.existsSync(scriptPath)) {
    throw new Error(`File '${scriptPath}' does not exist.`);
  }

  const result = child_process.execSync(`ts-node ${scriptPath}`, { stdio: 'inherit' });
} catch (error) {
  console.error((error as Error).message);
  process.exit(1);
}
