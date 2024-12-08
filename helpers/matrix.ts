/**
 * Rotates a 2D matrix 90 degrees clockwise.
 * @param matrix - The input 2D array.
 * @returns The rotated matrix.
 */
export const matrixRotate90 = <T>(matrix: Array<Array<T>>): Array<Array<T>> =>
  matrix[0].map((_, colIndex) => matrix.map((row) => row[colIndex]).reverse());

/**
 * Rotates a 2D matrix 45 degrees.
 * @param matrix - The input 2D array.
 * @param bottom - Whether to rotate from the bottom.
 * @returns The rotated matrix as an array of diagonal strings.
 */
export const matrixRotate45 = <T>(
  matrix: Array<Array<T>>,
  bottom: boolean = false
): Array<Array<T>> => {
  const length = { x: matrix[0].length, y: matrix.length }; // x for rows, y for columns
  const maxDimension = Math.max(length.x, length.y);

  const rotated: Array<Array<T>> = [];

  for (let k = 0; k <= 2 * (maxDimension - 1); k++) {
    const tempRow: Array<T> = [];

    for (let y = length.y - 1; y >= 0; y--) {
      const x = k - (bottom ? length.y - y : y);

      if (x >= 0 && x < length.x) {
        tempRow.push(matrix[y][x]);
      }
    }
    if (tempRow.length > 0) {
      rotated.push(tempRow);
    }
  }
  return rotated;
};
