import path from 'path';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'jsdom',
    globals: true,
    include: ['**/*.test.?(c|m)[t]s?(x)'],
    exclude: [
      '**/node_modules/**',
      '**/dist/**',
      '**/.{git}/**',
      '**/e2e-test/**',
    ],
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
