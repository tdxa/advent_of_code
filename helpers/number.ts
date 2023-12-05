export const parseToNumber = (value: string | number): number =>
  typeof value === "string" ? parseInt(value, 10) || 0 : (value as number);
