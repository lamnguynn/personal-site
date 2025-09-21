import { defineConfig } from 'eslint/config';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default defineConfig([
  {
    files: ['**/*.{ts,tsx}'],
    ignores: ['src/assets/', 'dist/', 'node_modules/'],
    languageOptions: { globals: globals.browser },
    plugins: {
      'simple-import-sort': simpleImportSort,
    },
    rules: {
      // Syntax rules
      'no-unused-vars': 'error',

      // Import rules
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
    },
  },
  tseslint.configs.recommended,
]);
