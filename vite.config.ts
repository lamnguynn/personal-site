import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import banTagsPlugin from './vite-plugin-ban-tags';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), banTagsPlugin()],
  server: {
    port: 3001,
  }
})
