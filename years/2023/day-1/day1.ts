import { sumStringArray } from "../../../helpers/array";
import { readFile } from "../../../helpers/files";
import {WINDOWS_NEWLINE} from "../../../constants/index";

const INPUT_FILE = __dirname + "/input.txt";

const lines = readFile(INPUT_FILE).split(WINDOWS_NEWLINE)

export const recoverCalibrationValues = (lines: Array<string>): Array<string> => {
    const linesDigits = lines.map(line => line.match(/\d/g)) as  Array<Array<string>>
    const calibrationValues = linesDigits.map(line => line[0] + line[line.length - 1])
    return calibrationValues
}


const calibrationSum = sumStringArray(recoverCalibrationValues(lines))


console.log(calibrationSum)

