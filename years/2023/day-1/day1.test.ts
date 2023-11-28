import { sayMerryChristmas } from "./day1";

describe("Day 1 - Merry Christmas", () => {
  it("should print Merry Christmas", () => {
    const consoleSpy = jest.spyOn(console, "log");
    sayMerryChristmas();
    expect(consoleSpy).toHaveBeenCalledWith("Merry Christmas!");
    consoleSpy.mockRestore();
  });
});
