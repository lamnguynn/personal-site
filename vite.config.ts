import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import banTagsPlugin from './vite-plugin-ban-tags';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  base: "/react-rep/",
  plugins: [react(), tailwindcss(), banTagsPlugin()],
  server: {
    port: 3001,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, 'src'),
    }
  }
})
