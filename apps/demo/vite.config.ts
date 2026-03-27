import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { tamaguiPlugin } from '@tamagui/vite-plugin';
import path from 'path';

export default defineConfig({
  plugins: [
    react(),
    tamaguiPlugin({
      config: '../../packages/fuselage/src/tamagui.config.ts',
      components: ['tamagui'],
      // TODO: Add '@rocket.chat/fuselage' when module:jsx field is configured
      // and fuselage-box dependency is resolvable by the Tamagui bundler
    }),
  ],
  resolve: {
    alias: {
      // Main packages — point to source for Tamagui styled() extraction
      '@rocket.chat/fuselage': path.resolve(__dirname, '../../packages/fuselage/src/index.tamagui.ts'),
      '@rocket.chat/fuselage-ui': path.resolve(__dirname, '../../packages/fuselage-ui/src/index.ts'),
      '@rocket.chat/fuselage-admin': path.resolve(__dirname, '../../packages/fuselage-admin/src/index.ts'),
      // Tokens — no source, just JSON
      '@rocket.chat/fuselage-tokens': path.resolve(__dirname, '../../packages/fuselage-tokens'),
      // Icons — ESM build
      '@rocket.chat/icons': path.resolve(__dirname, '../../packages/icons/dist/index.mjs'),
      // Internal packages — point to source (dist may be outdated)
      '@rocket.chat/fuselage-box': path.resolve(__dirname, '../../packages/fuselage-box/src/index.ts'),
      '@rocket.chat/css-in-js': path.resolve(__dirname, '../../packages/css-in-js/src/index.ts'),
      '@rocket.chat/memo': path.resolve(__dirname, '../../packages/memo/src/index.ts'),
      '@rocket.chat/styled': path.resolve(__dirname, '../../packages/styled/src/index.ts'),
      '@rocket.chat/css-supports': path.resolve(__dirname, '../../packages/css-supports/src/index.ts'),
      '@rocket.chat/fuselage-hooks': path.resolve(__dirname, '../../packages/fuselage-hooks/src/index.ts'),
      '@rocket.chat/stylis-logical-props-middleware': path.resolve(__dirname, '../../packages/stylis-logical-props-middleware/src/index.ts'),
    },
  },
  define: {
    'process.env': {},
  },
});
