import { WINDOWS_NEWLINE } from "../../../constants";
import { multiplyAllElementsArray, sumArray } from "../../../helpers/array";
import { readFile } from "../../../helpers/files";
import { Color, GameData, GameStats, Posibilities } from "./types";

const INPUT_FILE = __dirname + "/input.txt";

const lines = readFile(INPUT_FILE).split(WINDOWS_NEWLINE);

const GAME_LIMITS = {
  red: 12,
  green: 13,
  blue: 14,
};

export const transformGamesData = (games: Array<string>): GameData => {
  const result: GameData = {};

  games.forEach((game, index) => {
    const stats: GameStats = { blue: [], red: [], green: [] };
    const rounds = game.split(";");

    rounds.forEach((round) => {
      const colors = round.match(/\d+\s(blue|red|green)/g);
      if (colors) {
        colors.forEach((color) => {
          const [countStr, colorStr] = color.split(" ");
          const count = parseInt(countStr);

          if (["blue", "red", "green"].includes(colorStr)) {
            stats[colorStr as Color].push(count);
          }
        });
      }
    });

    result[index + 1] = stats;
  });

  return result;
};

export const checkGamePossibility = (games: GameData): Posibilities => {
  const impossibleGames: Array<number> = [];
  const possibleGames: Array<number> = [];

  for (const gameId in games) {
    if (Object.prototype.hasOwnProperty.call(games, gameId)) {
      const id = parseInt(gameId);
      const game = games[id];

      const isPossible = Object.entries(game).every(([color, counts]) =>
        counts.every((count: number) => count <= GAME_LIMITS[color as Color])
      );

      isPossible ? possibleGames.push(id) : impossibleGames.push(id);
    }
  }

  return { impossible: impossibleGames, possible: possibleGames };
};

export const sumPossibleGames = (posibilities: Posibilities) =>
  posibilities.possible.reduce((a, b) => a + b, 0);

export const getMinimumCubes = (game: GameStats): Array<number> =>
  Object.values(game).flatMap((counts: Array<number>) => Math.max(...counts));

export const findFewestCubes = (games: GameData): Array<Array<number>> =>
  Object.keys(games).map((gameId: string) => {
    const id = parseInt(gameId);
    const game = games[id];

    return getMinimumCubes(game);
  });

export const multiplyPowerGames = (games: Array<Array<number>>) =>
  sumArray(games.map((game) => multiplyAllElementsArray(game)));

const possibilities = checkGamePossibility(transformGamesData(lines));
console.log(sumPossibleGames(possibilities));

const fewestCubes = findFewestCubes(transformGamesData(lines));
console.log(multiplyPowerGames(fewestCubes));
