import outdent from 'outdent';

export const yarnCmd = (name) => outdent`
  \`\`\`sh
  yarn ${name}
  \`\`\`
`;
