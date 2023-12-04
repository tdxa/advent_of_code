import {
  transformGamesData,
  checkGamePossibility,
  sumPossibleGames,
} from "./day2";
import { GameData, Posibilities } from "./types";

describe("Transform Games Data", () => {
  const sampleGames: string[] = [
    "Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green",
    "Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue",
    "Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red",
    "Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red",
    "Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green",
  ];

  it("should transform games data into GameData format", () => {
    const result: GameData = transformGamesData(sampleGames);

    expect(typeof result).toBe("object");

    expect(result["1"]).toEqual({ blue: [3, 6], red: [4, 1], green: [2, 2] });
    expect(result["2"]).toEqual({
      blue: [1, 4, 1],
      red: [1],
      green: [2, 3, 1],
    });
    expect(result["3"]).toEqual({
      blue: [6, 5],
      red: [20, 4, 1],
      green: [8, 13, 5],
    });
    expect(result["4"]).toEqual({
      blue: [6, 15],
      red: [3, 6, 14],
      green: [1, 3, 3],
    });
    expect(result["5"]).toEqual({ blue: [1, 2], red: [6, 1], green: [3, 2] });
  });
});

describe("Check Game Possibility", () => {
  const sampleGameData: GameData = {
    "1": { blue: [3, 6], red: [4, 1], green: [2, 2] },
    "2": { blue: [1, 4, 1], red: [1], green: [2, 3, 1] },
    "3": { blue: [6, 5], red: [20, 4, 1], green: [8, 13, 5] },
    "4": { blue: [6, 15], red: [3, 6, 14], green: [1, 3, 3] },
    "5": { blue: [1, 2], red: [6, 1], green: [3, 2] },
  };

  it("should correctly determine possibilities", () => {
    const result: Posibilities = checkGamePossibility(sampleGameData);

    expect(typeof result).toBe("object");
    expect(result.impossible).toEqual([3, 4]);
    expect(result.possible).toEqual([1, 2, 5]);
  });
  it("should correctly sum up possible games", () => {
    const posibilities = checkGamePossibility(sampleGameData);
    const sum = sumPossibleGames(posibilities);

    expect(sum).toEqual(8);
  });
});
