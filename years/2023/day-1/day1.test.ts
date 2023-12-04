import { sumArray } from "../../../helpers/array";
import { DIGIT_NAMES_MAP, recoverCalibrationValues } from "./day1";

describe("Recover Calibration Values - part 1", () => {
  it("should return expected calibration values", () => {
    const lines = ["1abc2", "pqr3stu8vwx", "a1b2c3d4e5f", "treb7uchet"];
    const expectedCalibrationValues = ["12", "38", "15", "77"];

    const calibrationValues = recoverCalibrationValues(lines);

    expect(calibrationValues).toEqual(expectedCalibrationValues);
  });

  it("should return expected calibration sum", () => {
    const calibrationValues = ["12", "38", "15", "77"];
    const expectedCalibrationSum = 142;

    const calibrationSum = sumArray(calibrationValues);

    expect(calibrationSum).toEqual(expectedCalibrationSum);
  });
});

describe("Recover Calibration Values - part 2", () => {
  it("Replaces overlapping combinations correctly", () => {
    const testCases: Array<Array<string>> = [
      ["xtwonex", "xt2o1ex"],
      ["threeightoep", "t3e8toep"],
    ];

    testCases.forEach(([input, expectedOutput]) => {
      const replaced = Object.entries(DIGIT_NAMES_MAP).reduce(
        (acc, [key, value]) => acc.replace(new RegExp(key, "g"), value),
        input
      );
      expect(replaced).toEqual(expectedOutput);
    });
  });
});
