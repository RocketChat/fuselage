import path from 'path';

import commonjs from '@rollup/plugin-commonjs';
import external from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';

import pkg from './package.json';

export default {
  input: 'src/index.ts',
  output: [
    {
      dir: path.dirname(pkg.main),
      entryFileNames: path.basename(pkg.main),
      format: 'cjs',
      exports: 'named',
      sourcemap: true,
    },
    {
      dir: path.dirname(pkg.module),
      entryFileNames: path.basename(pkg.module),
      format: 'esm',
      exports: 'named',
      sourcemap: true,
    },
  ],
  plugins: [
    external(),
    typescript(),
    resolve(),
    commonjs(),
  ],
};
