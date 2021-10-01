import endent from 'endent';

export const addDeps = (deps: string[], type?: 'dev'): string =>
  endent`
    \`\`\`sh
    npm ${type === 'dev' ? 'i -D' : 'i'} ${deps.join(' ')}

    # or, if you are using yarn:

    yarn ${type === 'dev' ? 'add -D' : 'add'} ${deps.join(' ')}
    \`\`\`
  `;
