import outdent from 'outdent';

export const addDeps = (deps, type) =>
  outdent`
    \`\`\`sh
    npm ${type === 'dev' ? 'i -D' : 'i'} ${deps.join(' ')}

    # or, if you are using yarn:

    yarn ${type === 'dev' ? 'add -D' : 'add'} ${deps.join(' ')}
    \`\`\`
  `;
