import outdent from 'outdent';

import { badges } from '../badges.mjs';
import { bundleSizeBadge } from '../badges/bundleSizeBadge.mjs';
import { depsBadge } from '../badges/depsBadge.mjs';
import { licenseBadge } from '../badges/licenseBadge.mjs';
import { npmDownloadsBadge } from '../badges/npmDownloadsBadge.mjs';
import { npmPeerDepVersionBadge } from '../badges/npmPeerDepVersionBadge.mjs';
import { npmVersionBadge } from '../badges/npmVersionBadge.mjs';
import { storybookBadge } from '../badges/storybookBadge.mjs';
import { rocketChatLogo } from '../rocketChatLogo.mjs';

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
      pkg.devDependencies?.['@storybook/react'] && storybookBadge(pkg),
      npmDownloadsBadge(pkg),
      licenseBadge(pkg)
    )}

    ${badges(
      depsBadge(pkg),
      depsBadge(pkg, 'peer'),
      depsBadge(pkg, 'dev'),
      bundleSizeBadge(pkg)
    )}
  `,
  ]
    .filter(Boolean)
    .join('\n\n');
