import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import globals from "globals";

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,

  {
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },

  {
    rules: {
      "no-unused-vars": "warn",
      "no-undef": "warn",
      "prefer-const": "error",
      "no-console": "warn",
    },
  }
);
