import path from 'path';

import commonjs from '@rollup/plugin-commonjs';
import external from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';

import pkg from './package.json';

export default [
  {
    input: 'src/index.ts',
    output: {
      dir: path.dirname(pkg.main),
      entryFileNames: path.basename(pkg.main),
      format: 'cjs',
      sourcemap: true,
    },
    plugins: [
      external(),
      typescript({ declaration: true, declarationDir: 'dist/' }),
      resolve(),
      commonjs(),
    ],
  },
  {
    input: 'src/index.ts',
    output: {
      file: pkg.module,
      format: 'esm',
      sourcemap: true,
    },
    plugins: [
      external(),
      typescript(),
      resolve(),
      commonjs(),
    ],
  },
];
