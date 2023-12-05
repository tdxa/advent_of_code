import { parseToNumber } from "./number";

export const sumArray = (array: Array<string | number>): number =>
  array.reduce((acc: number, curr) => acc + parseToNumber(curr), 0);

export const multiplyAllElementsArray = (array: Array<number>): number =>
  array.reduce((a, b) => a * b);
