import { parseToNumber } from "./number";

export const sumArray = (array: Array<string | number>): number =>
  array.reduce((acc: number, curr) => acc + parseToNumber(curr), 0);

export const multiplyAllElementsArray = (array: Array<number>): number =>
  array.reduce((a, b) => a * b);

/**
 * Counts the occurrences of a specified value in an array.
 *
 * @param {Array<number>} arr - The array of numbers to search.
 * @param {number} value - The value to count occurrences of.
 * @returns {number} The number of times `value` appears in `arr`.
 *
 * @example
 * const arr = [1, 2, 3, 2, 4, 2];
 * const value = 2;
 *
 * const occurrences = count(arr, value);
 * Output: 3
 */
export const getValueFrequency = (arr: Array<number>, value: number) =>
  arr.filter((val) => val === value).length;
