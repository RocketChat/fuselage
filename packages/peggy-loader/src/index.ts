import { getOptions } from 'loader-utils';
import peggy, { BuildOptionsBase } from 'peggy';

type WebpackLoaderContext = Parameters<typeof getOptions>[0];

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
  this: WebpackLoaderContext,
  grammarContent: string
): string {
  const options: Options = {
    format: 'commonjs',
    ...getOptions(this),
  };

  return peggy.generate(grammarContent, {
    output: 'source',
    ...options,
  });
}

export default peggyLoader;
