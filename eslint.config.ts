import globals from 'globals';
import tseslint from 'typescript-eslint';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  {
    files: ['**/*.{ts,tsx}'],
    ignores: ['src/assets/', 'dist/', 'node_modules/'],
    languageOptions: { globals: globals.browser },
    rules: {
      'no-unused-vars': 'error',
    },
  },
  tseslint.configs.recommended,
]);
