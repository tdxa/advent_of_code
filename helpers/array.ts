export const sumArray = (array: Array<string | number>): number =>
  array.reduce(
    (acc: number, curr: string | number) => acc + parseInt(String(curr), 10),
    0
  );

export const multiplyAllElementsArray = (array: Array<number>): number =>
  array.reduce((a, b) => a * b);
