import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

import pkg from './package.json';

export default defineConfig({
  plugins: [
    dts({
      tsconfigPath: './tsconfig.build.json',
    }),
  ],
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
      name: 'RocketChatFuselage',
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
