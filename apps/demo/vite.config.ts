import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@rocket.chat/fuselage': path.resolve(__dirname, '../../packages/fuselage/src/index.ts'),
      '@rocket.chat/fuselage-ui': path.resolve(__dirname, '../../packages/fuselage-ui/src/index.ts'),
      '@rocket.chat/fuselage-admin': path.resolve(__dirname, '../../packages/fuselage-admin/src/index.ts'),
      '@rocket.chat/fuselage-tokens': path.resolve(__dirname, '../../packages/fuselage-tokens'),
      '@rocket.chat/icons': path.resolve(__dirname, '../../packages/icons/src/index.ts'),
      '@rocket.chat/fuselage-box': path.resolve(__dirname, '../../packages/fuselage-box/src/index.ts'),
      '@rocket.chat/css-in-js': path.resolve(__dirname, '../../packages/css-in-js/src/index.ts'),
      '@rocket.chat/memo': path.resolve(__dirname, '../../packages/memo/src/index.ts'),
      '@rocket.chat/styled': path.resolve(__dirname, '../../packages/styled/src/index.ts'),
      '@rocket.chat/css-supports': path.resolve(__dirname, '../../packages/css-supports/src/index.ts'),
      '@rocket.chat/fuselage-hooks': path.resolve(__dirname, '../../packages/fuselage-hooks/src/index.ts'),
    },
  },
  define: {
    'process.env': {},
  },
});
