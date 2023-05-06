const path = require('path');

const commonjs = require('@rollup/plugin-commonjs');
const resolve = require('@rollup/plugin-node-resolve');
const typescript = require('@rollup/plugin-typescript').default;

const pkg = require('./package.json');

/** @type {import('rollup').RollupOptions[]} */
module.exports = [
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
