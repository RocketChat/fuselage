import peggy from 'peggy';

function peggyLoader(content: string): string {
  return peggy.generate(content, {
    output: 'source',
    format: 'commonjs',
  });
}

export default peggyLoader;
