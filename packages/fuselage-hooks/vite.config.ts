import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    projects: [
      {
        test: {
          include: ['src/**/*.spec.{ts,tsx}'],
          exclude: ['src/**/*.server.spec.{ts,tsx}'],
          name: 'csr',
          environment: 'jsdom',
          setupFiles: ['./vitest.setup.ts'],
        },
      },
      {
        test: {
          include: ['src/**/*.server.spec.{ts,tsx}'],
          name: 'ssr',
          environment: 'node',
        },
      },
    ],
  },
});
