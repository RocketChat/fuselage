import { basename, dirname } from 'node:path';

import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import nodeResolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import typescript from '@rollup/plugin-typescript';
import { defineConfig } from 'rollup';

import pkg from './package.json' with { type: 'json' };

const globals = {
  react: 'React',
};

export default defineConfig({
  external: Object.keys(globals),
  input: 'src/index.ts',
  output: [
    {
      dir: dirname(pkg.exports['.'].import),
      entryFileNames: basename(pkg.exports['.'].import),
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
    nodeResolve(),
    commonjs(),
    typescript({
      tsconfig: 'tsconfig.build.json',
    }),
  ],
});
