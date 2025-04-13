import { join } from 'path';

import { tamaguiExtractPlugin, tamaguiPlugin } from '@tamagui/vite-plugin';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [
    react(),
    tamaguiPlugin({
      config: './src/index.ts',
      components: ['tamagui'],
    }),
    tamaguiExtractPlugin({
      components: ['tamagui'],
    }),
  ],
  resolve: {
    alias: {
      'react-native': 'react-native-web',
    },
  },
  build: {
    lib: {
      entry: join(__dirname, 'src/index.ts'),
      name: '@rocket.chat/fuselage-tamagui-tokens',
      formats: ['es', 'umd'],
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'tamagui'],
      output: {
        globals: {
          'react': 'React',
          'react-dom': 'ReactDOM',
          'tamagui': 'Tamagui',
        },
      },
    },
  },
});
