import type { BuildOptionsBase, OutputFormatAmdCommonjsEs } from 'peggy';
import peggy from 'peggy';
import type { LoaderContext } from 'webpack';

type Options = Partial<BuildOptionsBase & OutputFormatAmdCommonjsEs<'source'>>;

function peggyLoader(
  this: LoaderContext<Options>,
  grammarContent: string
): string {
  const dependenciesKeyValue = this.resourceQuery
    ? [...new URLSearchParams(this.resourceQuery).entries()]
    : [];

  const fromEntries = (entries: (readonly [string, string])[]) => {
    const obj: Record<string, string> = {};
    for (const [key, value] of entries) {
      obj[key] = value;
    }
    return obj;
  };

  const { dependencies } = this.getOptions();
  const options: Options = {
    format: 'commonjs',
    ...this.getOptions(),
    ...(dependenciesKeyValue.length && {
      dependencies: { ...fromEntries(dependenciesKeyValue), ...dependencies },
    }),
  };

  return peggy.generate(grammarContent, {
    output: 'source',
    ...options,
  });
}

export default peggyLoader;
