import { basename, dirname } from 'node:path';

import json from '@rollup/plugin-json';
import terser from '@rollup/plugin-terser';
import typescript from '@rollup/plugin-typescript';
import { defineConfig } from 'rollup';

import pkg from './package.json' with { type: 'json' };

const globals = {
  '@emotion/hash': 'hash',
  '@rocket.chat/memo': 'memo',
  '@rocket.chat/css-supports': 'cssSupports',
  '@rocket.chat/stylis-logical-props-middleware':
    'stylisLogicalPropsMiddleware',
};

export default defineConfig({
  external: Object.keys(globals),
  input: 'src/index.ts',
  output: [
    {
      dir: dirname(pkg.module),
      entryFileNames: basename(pkg.module),
      format: 'es',
      sourcemap: true,
    },
  ],
  plugins: [
    terser({
      compress: true,
      mangle: true,
      module: true,
      output: {
        comments: false,
      },
    }),
    json(),
    typescript({
      tsconfig: './tsconfig.build.json',
    }),
  ],
});
