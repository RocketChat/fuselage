import endent from 'endent';

import { Package } from '../types/Package';
import { depsBadge } from './badges/deps';
import { npmVersionBadge } from './badges/npmVersion';
import { rocketChatLogo } from './rocketChatLogo';

export const rootReadme = (packages: Package[]): string => endent`
  ${rocketChatLogo}

  <h1 align="center">Fuselage Monorepo</h1>

  [![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg?style=flat-square)](https://lerna.js.org/)
  ![LGTM Alerts](https://img.shields.io/lgtm/alerts/github/RocketChat/Rocket.Chat.Fuselage?style=flat-square)
  ![LGTM Grade](https://img.shields.io/lgtm/grade/javascript/github/RocketChat/Rocket.Chat.Fuselage?style=flat-square)

  ![Issues](https://img.shields.io/github/issues/RocketChat/Rocket.Chat.Fuselage?style=flat-square)
  ![Pull requests](https://img.shields.io/github/issues-pr/RocketChat/Rocket.Chat.Fuselage?style=flat-square)
  ![GitHub commit activity](https://img.shields.io/github/commit-activity/m/RocketChat/Rocket.Chat.Fuselage?style=flat-square)

  | Package | Description | Version | Dependencies |
  |---------|-------------|---------|--------------|
  ${packages
    .map(
      (pkg) =>
        `| ${[
          `\ud83d\udce6 [\`${pkg.name}\`](/packages/${pkg.name})`,
          pkg.description ?? '',
          npmVersionBadge(pkg),
          depsBadge(pkg),
        ].join(' | ')} |`
    )
    .join('\n')}

`;
