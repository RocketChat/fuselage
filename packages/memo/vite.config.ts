import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    include: ['src/**/*.spec.{ts,tsx}'],
    globals: true,
    environment: 'jsdom',
  },
});
