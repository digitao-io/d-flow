import eslintJsRules from "@eslint/js";
import typescriptEslintParser from "@typescript-eslint/parser";
import typescriptEslintPlugin from "@typescript-eslint/eslint-plugin";
import stylisticEslintPlugin from "@stylistic/eslint-plugin";
import eslintPluginVue from "eslint-plugin-vue";

export default [
  ...eslintPluginVue.configs["flat/recommended"],

  {
    files: [
      "src/**/*.vue",
    ],

    languageOptions: {
      parserOptions: {
        parser: typescriptEslintParser,
        extraFileExtensions: [".vue"],
        sourceType: "module",
      },
    },
  },

  {
    files: [
      "*.mjs",
      "*.ts",
      "src/**/*.ts",
    ],

    languageOptions: {
      parser: typescriptEslintParser,
      parserOptions: {
        sourceType: "module",
      },
    },
  },

  {
    files: [
      "*.mjs",
      "*.ts",
      "src/**/*.ts",
      "src/**/*.vue",
    ],

    plugins: {
      "@stylistic": stylisticEslintPlugin,
      "@typescript-eslint": typescriptEslintPlugin,
    },

    rules: {
      ...eslintJsRules.recommended,
      ...typescriptEslintPlugin.configs["eslint-recommended"].overrides[0].rules,
      ...typescriptEslintPlugin.configs["recommended"].rules,
      ...typescriptEslintPlugin.configs["strict"].rules,
      ...stylisticEslintPlugin.configs["recommended-flat"].rules,

      "@typescript-eslint/no-non-null-assertion": ["off"],
      "@stylistic/arrow-parens": ["error", "always"],
      "@stylistic/member-delimiter-style": ["error", {
        "multiline": { "delimiter": "semi", "requireLast": true },
        "singleline": { "delimiter": "semi", "requireLast": false },
        "multilineDetection": "brackets",
      }],
      "@stylistic/quote-props": ["error", "consistent"],
      "@stylistic/quotes": ["error", "double"],
      "@stylistic/semi": ["error", "always", { omitLastInOneLineBlock: true }],
    },
  },
];
