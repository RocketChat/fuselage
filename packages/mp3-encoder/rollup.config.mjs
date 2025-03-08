import path from 'path';

import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';

import pkg from './package.json' with { type: 'json' };

/** @type {import('rollup').RollupOptions[]} */
export default [
  {
    input: 'src/index.ts',
    output: {
      dir: path.dirname(pkg.main),
      entryFileNames: path.basename(pkg.main),
      format: 'cjs',
      sourcemap: true,
      strict: false,
    },
    plugins: [
      typescript({
        tsconfig: 'tsconfig.build.json',
      }),
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
      typescript({
        tsconfig: 'tsconfig.build.json',
      }),
      resolve(),
      commonjs(),
    ],
  },
];
