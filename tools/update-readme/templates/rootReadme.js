import outdent from 'outdent';

import { depsBadge } from './badges/depsBadge.js';
import { npmVersionBadge } from './badges/npmVersionBadge.js';
import { rocketChatLogo } from './rocketChatLogo.js';

const pkgIcon = '\ud83d\udce6';

export const rootReadme = (pkgs) => outdent`
  ${rocketChatLogo}

  <h1 align="center">Fuselage Monorepo</h1>

  ![Issues](https://img.shields.io/github/issues/RocketChat/fuselage?style=flat-square)
  ![Pull requests](https://img.shields.io/github/issues-pr/RocketChat/fuselage?style=flat-square)
  ![GitHub commit activity](https://img.shields.io/github/commit-activity/m/RocketChat/fuselage?style=flat-square)

  | Package | Description | Version | Dependencies |
  |---------|-------------|---------|--------------|
  ${pkgs
    .map(
      (pkg) =>
        `| ${[
          `${pkgIcon} [\`${pkg.name}\`](/packages/${pkg.dirname})`,
          pkg.description ?? '',
          npmVersionBadge(pkg),
          depsBadge(pkg),
        ].join(' | ')} |`,
    )
    .join('\n')}

  ## Contributing

  This project uses **Yarn 4 (Berry)** and relies on Corepack for Yarn version management.
  Do not use npm or Yarn 1.x.

  ### Setup

  Install Yarn via Corepack (included with Node.js 16.10+):

  \`\`\`sh
  corepack enable
  \`\`\`

  Then install dependencies:

  \`\`\`sh
  yarn install
  \`\`\`

  Peer dependency warnings during install are expected in this monorepo and can be ignored.

  ### Windows Setup

  On Windows, enable long paths before cloning to avoid build errors:

  \`\`\`powershell
  git config --global core.longpaths true
  \`\`\`

`;
