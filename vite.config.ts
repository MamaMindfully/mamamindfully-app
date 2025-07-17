/**
 * Mama Mindfully - Vite Configuration
 * Author: Alexandria Pace
 * Purpose: Build and serve configuration for fast modern development
 */

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  root: '.',
  base: '/',
  plugins: [react()],
  server: {
    port: 5173,
    strictPort: true // Ensures consistent dev experience
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src') // Simplifies import paths
    }
  },
  build: {
    target: 'esnext',
    outDir: 'dist',
    sourcemap: false
  }
});

