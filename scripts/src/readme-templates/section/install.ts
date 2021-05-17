import endent from 'endent';

import { Package } from '../../types/Package';
import { addDeps } from './addDeps';

export const install = (pkg: Package, type?: 'dev'): string =>
  endent`
  ${
    pkg.peerDependencies
      ? endent`
          Firstly, install the peer dependencies (prerequisites):

          ${addDeps(Object.keys(pkg.peerDependencies), type)}

        `
      : ''
  }
  Add \`${pkg.name}\` as a dependency:

  ${addDeps([pkg.name], type)}
`;
