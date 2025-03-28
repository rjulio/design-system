import { defineConfig } from 'vitest/config';

export default defineConfig({
   resolve: {
      alias: {
         '@styles': '/src/styles', // Adjust to match your directory structure
      },
   },
   test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: './setup.js',
   },
});
