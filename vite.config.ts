import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: true,
  },
  server: {
    host: true,
    port: 3000,
    open: true,
    strictPort: true,
  },
  preview: {
    host: true,
    port: 4173,
    strictPort: true,
    open: true,
  }
});