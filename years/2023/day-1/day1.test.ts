import { sumStringArray } from "../../../helpers/array";
import { recoverCalibrationValues } from "./day1";

describe('Recover Calibration Values', () => {
  it('should return expected calibration values', () => {
    const lines = ['1abc2', 'pqr3stu8vwx', 'a1b2c3d4e5f', 'treb7uchet'];
    const expectedCalibrationValues = ['12', '38', '15', '77'];

    const calibrationValues = recoverCalibrationValues(lines);

    expect(calibrationValues).toEqual(expectedCalibrationValues);
  });
  
  it('should return expected calibration sum', () => {
    const calibrationValues = ['12', '38', '15', '77'];
    const expectedCalibrationSum = 142;

    const calibrationSum = sumStringArray(calibrationValues);

    expect(calibrationSum).toEqual(expectedCalibrationSum);
  });
});