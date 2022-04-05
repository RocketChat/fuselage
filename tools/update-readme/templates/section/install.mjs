import outdent from 'outdent';

import { addDeps } from './addDeps.mjs';

const peerDeps = (pkg, type) =>
  pkg.peerDependencies
    ? outdent`
        Firstly, install the peer dependencies (prerequisites):

        ${addDeps(Object.keys(pkg.peerDependencies), type)}
    `
    : undefined;

const deps = (pkg, type) =>
  outdent`
    Add \`${pkg.name}\` as a dependency:

    ${addDeps([pkg.name], type)}
  `;

export const install = (pkg, type) =>
  [peerDeps(pkg, type), deps(pkg, type)].filter(Boolean).join('\n\n');
