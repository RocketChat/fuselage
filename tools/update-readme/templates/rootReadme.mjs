import outdent from 'outdent';

import { depsBadge } from './badges/depsBadge.mjs';
import { npmVersionBadge } from './badges/npmVersionBadge.mjs';
import { rocketChatLogo } from './rocketChatLogo.mjs';

const pkgIcon = '\ud83d\udce6';

export const rootReadme = (pkgs) => outdent`
  ${rocketChatLogo}

  <h1 align="center">Fuselage Monorepo</h1>

  ![LGTM Alerts](https://img.shields.io/lgtm/alerts/github/RocketChat/fuselage?style=flat-square)
  ![LGTM Grade](https://img.shields.io/lgtm/grade/javascript/github/RocketChat/fuselage?style=flat-square)

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
        ].join(' | ')} |`
    )
    .join('\n')}

`;
