import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    testNamePattern: /\.spec\.(ts|tsx)$/,
    environment: 'jsdom',
    setupFiles: ['jest-setup.ts'],
  },
});
