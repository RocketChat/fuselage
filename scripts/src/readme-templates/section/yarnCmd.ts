import endent from 'endent';

export const yarnCmd = (name: string): string => endent`
  \`\`\`sh
  yarn ${name}
  \`\`\`
`;
