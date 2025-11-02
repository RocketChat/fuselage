import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import { defineConfig } from 'rollup';

import pkg from './package.json' with { type: 'json' };

export default defineConfig({
  input: 'src/index.ts',
  output: [
    {
      file: pkg.exports['.'].import,
      format: 'esm',
      sourcemap: true,
    },
  ],
  plugins: [
    typescript({
      tsconfig: 'tsconfig.build.json',
    }),
    resolve(),
    commonjs(),
  ],
});
