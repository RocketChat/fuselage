import path from 'path';

import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import nodeResolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';

import pkg from './package.json';

const globals = {
  '@emotion/hash': 'hash',
  '@rocket.chat/memo': 'memo',
  '@rocket.chat/css-supports': 'cssSupports',
};

const plugins = [
  terser({
    compress: true,
    mangle: true,
    module: true,
    output: {
      comments: false,
    },
  }),
  json(),
  nodeResolve(),
  commonjs(),
  typescript(),
];

export default [
  {
    external: Object.keys(globals),
    input: 'src/index.ts',
    output: [
      {
        dir: path.dirname(pkg.main),
        entryFileNames: path.basename(pkg.main),
        format: 'cjs',
        sourcemap: true,
      },
      {
        dir: path.dirname(pkg.module),
        entryFileNames: path.basename(pkg.module),
        format: 'es',
        sourcemap: true,
      },
      {
        dir: path.dirname(pkg.unpkg),
        entryFileNames: path.basename(pkg.unpkg),
        format: 'umd',
        name: 'cssInJs',
        sourcemap: true,
        globals,
      },
    ],
    plugins,
  },
  {
    external: Object.keys(globals),
    input: 'src/logicalProperties.ts',
    output: [
      {
        dir: path.dirname(pkg.main),
        entryFileNames: 'logicalProperties.js',
        format: 'cjs',
        sourcemap: true,
      },
      {
        dir: path.dirname(pkg.module),
        entryFileNames: 'logicalProperties.module.js',
        format: 'es',
        sourcemap: true,
      },
      {
        dir: path.dirname(pkg.unpkg),
        entryFileNames: 'logicalProperties.umd.js',
        format: 'umd',
        name: 'cssInJs',
        sourcemap: true,
        globals,
      },
    ],
    plugins,
  },
];
