"use strict";

module.exports = {
  printWidth: 80,
  trailingComma: "es2016",
  tabWidth: 2,
  useTabs: false,
  semi: true,
  quoteProps: "consistent",
  arrowParens: "always",
  bracketSpacing: true,
  embeddedLanguageFormatting: "auto",
  endOfLine: "lf",
  jsxBracketSameLine: false,
  jsxSingleQuote: true,
  singleQuote: true,
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      options: {
        parser: "typescript",
      },
    },
  ],
};