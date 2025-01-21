import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/sorting-algo-visualizer/', // Your GitHub repository name
  plugins: [react()],
  build: {
    rollupOptions: {
      input: 'src/index.html', // Use the moved index.html as the entry point
    },
  },
});
