import { defineConfig } from 'vitest/config';

export default defineConfig({
   resolve: {
      alias: {
         '@styles': '/src/styles', // Adjust to match your directory structure
         "@mocks": "/src/mocks",
         "@components": "/src/components",
      },
   },
   test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: './setup.js',
   },
});
