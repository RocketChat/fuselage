import peggy, { BuildOptionsBase } from 'peggy';
import { LoaderContext } from 'webpack';

type Options = BuildOptionsBase &
  (
    | {
        format: 'es';
        dependencies?: any;
      }
    | {
        format: 'amd' | 'commonjs';
        dependencies?: any;
      }
    | {
        format: 'umd';
        dependencies?: any;
        exportVar?: any;
      }
    | {
        format: 'globals';
        exportVar?: any;
      }
    | {
        format?: 'bare';
      }
  );

function peggyLoader(
  this: LoaderContext<Options>,
  grammarContent: string
): string {
  const options: Options = {
    format: 'commonjs',
    ...this.getOptions(),
  };

  return peggy.generate(grammarContent, {
    output: 'source',
    ...options,
  });
}

export default peggyLoader;
