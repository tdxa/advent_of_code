import { checkReports } from "./day2";

describe("checkReports", () => {
  test("should return true for a strictly increasing array with differences within the range 1-3", () => {
    const input = [
      [1, 2, 3, 4, 5],
      [2, 4, 5, 7],
      [10, 12, 14, 17],
    ];
    const result = checkReports(input);
    expect(result).toEqual([true, true, true]);
  });

  test("should return true for a strictly decreasing array with differences within the range 1-3", () => {
    const input = [
      [5, 4, 3, 2, 1],
      [7, 6, 5],
      [17, 15, 12, 9],
    ];
    const result = checkReports(input);
    expect(result).toEqual([true, true, true]);
  });

  test("should return false if there is an increasing followed by decreasing", () => {
    const input = [
      [1, 3, 2, 4, 5], // increases, then decreases (invalid)
      [1, 2, 5, 3], // increases, then decreases (invalid)
    ];
    const result = checkReports(input);
    expect(result).toEqual([false, false]);
  });
});
