import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: "/personalWeb/",
  build: {
    outDir: 'build', // Specify the output directory for the build
    sourcemap: true, // Enable sourcemaps for debugging (optional)
  },
});
