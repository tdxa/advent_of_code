import { readFileSync } from "fs";

export const readFile = (path: string) => readFileSync(path, "utf-8")

