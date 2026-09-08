// `wrapper-webpack-plugin` ships no types and has no `@types` package.
// Mirrors the JSDoc on its constructor (wrapper-webpack-plugin.js:9-13).
declare module 'wrapper-webpack-plugin' {
  import type { Compiler, WebpackPluginInstance } from 'webpack';

  /** Called with the output file name and chunk hash when a function. */
  type Wrapper = string | ((fileName: string, chunkHash: string) => string);

  export interface WrapperPluginOptions {
    /** Prepended to a matching output file. */
    header?: Wrapper;
    /** Appended to a matching output file. */
    footer?: Wrapper;
    /** Tested against output file names to decide which ones get wrapped. */
    test?: string | RegExp;
    /** Wrap after optimizations rather than before. Defaults to `false`. */
    afterOptimizations?: boolean;
  }

  export default class WrapperPlugin implements WebpackPluginInstance {
    constructor(options?: WrapperPluginOptions);

    apply(compiler: Compiler): void;
  }
}
