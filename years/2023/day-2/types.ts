export type Color = "blue" | "red" | "green";

export type GameStats = Record<Color, Array<number>>;

export type GameData = Record<number, GameStats>;

export interface Posibilities {
  impossible: Array<number>;
  possible: Array<number>;
}
