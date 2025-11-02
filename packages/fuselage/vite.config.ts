import { defineConfig } from 'vitest/config';

import pkg from './package.json' with { type: 'json' };

export default defineConfig({
  test: {
    environment: 'jsdom',
    setupFiles: ['./vitest.setup.ts'],
    globals: true,
  },
  css: {
    preprocessorOptions: {
      scss: {
        verbose: false,
        // additionalData: `@import "./src/styles/primitives/link.scss";`,
      },
    },
  },
  build: {
    lib: {
      entry: ['src/index.ts'],
      formats: ['es'],
    },
    rollupOptions: {
      external: [
        ...Object.keys(pkg.dependencies ?? {}).map(
          (dep) => new RegExp(`^${dep}(/.+)?$`),
        ),
        ...Object.keys(pkg.peerDependencies ?? {}).map(
          (dep) => new RegExp(`^${dep}(/.+)?$`),
        ),
      ],
    },
  },
});
