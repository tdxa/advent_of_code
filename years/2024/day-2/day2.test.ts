import { checkReports } from "./day2";

describe("checkReports", () => {
  test("should return true for a strictly increasing array with differences within the range 1-3", () => {
    const input = [
      [1, 2, 3, 4, 5], // Strictly increasing (valid)
      [2, 4, 5, 7], // Strictly increasing (valid)
      [10, 12, 14, 17], // Strictly increasing (valid)
    ];
    const result = checkReports(input);
    expect(result).toEqual([true, true, true]);
  });

  test("should return true for a strictly decreasing array with differences within the range 1-3", () => {
    const input = [
      [5, 4, 3, 2, 1], // Strictly decreasing (valid)
      [7, 6, 5], // Strictly decreasing (valid)
      [17, 15, 12, 9], // Strictly decreasing (valid)
    ];
    const result = checkReports(input);
    expect(result).toEqual([true, true, true]);
  });

  test("should return true if removing a single element makes the sequence valid", () => {
    const input = [
      [1, 3, 2, 4, 5], // Removing 3 makes it valid (increasing)
      [1, 2, 5, 3], // Removing 5 makes it valid (increasing)
      [7, 5, 3, 4], // Removing 5 makes it valid (decreasing)
    ];
    const result = checkReports(input);
    expect(result).toEqual([true, true, true]);
  });

  test("should return false if there is a change in direction that cannot be fixed by removing a single element", () => {
    const input = [
      [1, 3, 5, 2, 4], // Increase, then decrease, then increase (invalid)
      [10, 7, 5, 6, 8], // Decrease, then increase, then decrease (invalid)
    ];
    const result = checkReports(input);
    expect(result).toEqual([false, false]);
  });
});
