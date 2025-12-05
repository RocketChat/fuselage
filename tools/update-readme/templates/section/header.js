import outdent from 'outdent';

import { bundleSizeBadge } from '../badges/bundleSizeBadge.js';
import { depsBadge } from '../badges/depsBadge.js';
import { licenseBadge } from '../badges/licenseBadge.js';
import { npmDownloadsBadge } from '../badges/npmDownloadsBadge.js';
import { npmPeerDepVersionBadge } from '../badges/npmPeerDepVersionBadge.js';
import { npmVersionBadge } from '../badges/npmVersionBadge.js';
import { storybookBadge } from '../badges/storybookBadge.js';
import { badges } from '../badges.js';
import { rocketChatLogo } from '../rocketChatLogo.js';

export const header = (pkg) =>
  [
    outdent`
    ${rocketChatLogo}

    # \`${pkg.name}\`
  `,
    pkg.description ? `> ${pkg.description}` : undefined,
    outdent`
    ---

    ${badges(
      npmVersionBadge(pkg, 'latest'),
      npmVersionBadge(pkg, 'next'),
      pkg.peerDependencies?.react && npmPeerDepVersionBadge(pkg, 'react'),
      pkg.devDependencies?.['@storybook/react-webpack5'] && storybookBadge(pkg),
      npmDownloadsBadge(pkg),
      licenseBadge(pkg),
    )}

    ${badges(depsBadge(pkg), bundleSizeBadge(pkg))}
  `,
  ]
    .filter(Boolean)
    .join('\n\n');
