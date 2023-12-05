export type NumberItem = {
  line: number;
  start: number;
  end: number;
  value: number;
};

export type SymbolItem = {
  line: number;
  index: number;
};

export interface ProcessedLines {
  numbers: Array<NumberItem>;
  symbols: Array<SymbolItem>;
  gears: Array<SymbolItem>;
}
