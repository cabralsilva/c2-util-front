import globals from "globals";
import tsEslint from "typescript-eslint";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";

export default [
  ...tsEslint.configs.recommended,
  {
    languageOptions: {
      globals: globals.node,
      parser: tsParser,
    },
    plugins: { "@typescript-eslint": tsPlugin },
    rules: {
      // "no-unused-vars": "error",
      "no-undef": "error",
      quotes: ["error", "double"],
      "comma-dangle": ["error", "never"],
      "no-console": "off",
      "@typescript-eslint/no-explicit-any": "off", //ignorar tipagem any
      "@typescript-eslint/no-var-requires": "off"
    },
    files: ["**/*.ts"],
  },
];
