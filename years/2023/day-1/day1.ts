import { sumStringArray } from "../../../helpers/array";
import { readFile } from "../../../helpers/files";
import { WINDOWS_NEWLINE } from "../../../constants/index";

const INPUT_FILE = __dirname + "/input.txt";

const lines = readFile(INPUT_FILE).split(WINDOWS_NEWLINE)

export const DIGIT_NAMES_MAP: Record<string, string> = {
  one: 'o1e',
  two: 't2o',
  three: 't3e',
  four: 'f4r',
  five: 'f5e',
  six: 's6x',
  seven: 's7n',
  eight: 'e8t',
  nine: 'n9e',
};

export const recoverCalibrationValues = (lines: Array<string>): Array<string> => {
    const linesDigits = lines.map(line => line.match(/\d/g)) as  Array<Array<string>>
    const calibrationValues = linesDigits.map(line => line[0] + line[line.length - 1])
    return calibrationValues
}

export const replacedWords: string[] = lines.map(word => {
  Object.entries(DIGIT_NAMES_MAP).forEach(([key, value]) => {
    const regex = new RegExp(key, 'g');
    word = word.replace(regex, value);
  });
  return word;
});


const calibrationSum = sumStringArray(recoverCalibrationValues(replacedWords))

console.log(calibrationSum)

