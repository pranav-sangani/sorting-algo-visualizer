import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/sorting-algo-visualizer/", // Your GitHub Pages repository name
  plugins: [react()],
  resolve: {
    extensions: [".js", ".jsx"], // Ensure .jsx files are resolved properly
  },
  build: {
    rollupOptions: {
      input: "index.html", // The correct path for your root `index.html`
    },
    outDir: "dist", // The output folder for the production build
  },
  server: {
    open: true, // Automatically open the browser during development
  },
});
