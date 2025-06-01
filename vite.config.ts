import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/BoltMAPS/', // 👈 This line tells Vite the correct base path
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  define: {
    global: 'window',
    'process.env': {},
  },
  resolve: {
    alias: {
      'buffer': 'buffer'
    }
  }
});