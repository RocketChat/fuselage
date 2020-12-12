import path from 'path';

import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import nodeResolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';

import pkg from './package.json';

export default {
  external: [
    'react',
  ],
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
      name: 'Emitter',
      sourcemap: true,
      globals: {
        react: 'React',
      },
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
    typescript(),
  ],
};
