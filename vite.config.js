import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: "/substance-vs-style.github.io/", // Replace with your actual repo name
  plugins: [react()],
});