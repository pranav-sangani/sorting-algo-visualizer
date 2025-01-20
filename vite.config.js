import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/sorting-algo-visualizer/', // Replace with your repository name
  plugins: [react()],
});
