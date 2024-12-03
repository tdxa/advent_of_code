import { computeMulInstructions } from "./day3";

describe("computeMulInstructions", () => {
  test("should return the correct sum for valid mul instructions", () => {
    const lines = [
      "mul(1,2)mul(3,4)mul(5,6)",
      "mul(7,8)mul(9,10)",
      "mul(11,12)",
    ];

    const result = computeMulInstructions(lines);

    expect(result).toBe(44 + 146 + 132);
  });

  test("should ignore invalid mul instructions and sum valid ones", () => {
    const lines = [
      "mul(1,2)mul(4*",
      "mul(7,8)?(12,34)",
      "mul(11,12)?(12,34)?(12,34)",
    ];

    const result = computeMulInstructions(lines);

    expect(result).toBe(2 + 56 + 132);
  });

  test("should return 0 if no valid mul instructions exist", () => {
    const lines = ["invalid text", "mul( , )", "mul(1,,2) mul( ,4)"];

    const result = computeMulInstructions(lines);

    expect(result).toBe(0); // No valid instructions, so the sum is 0
  });
});
