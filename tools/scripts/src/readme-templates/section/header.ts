import endent from 'endent';

import { Package } from '../../types/Package';
import { badges } from '../badges';
import { bundleSizeBadge } from '../badges/bundleSize';
import { depsBadge } from '../badges/deps';
import { licenseBadge } from '../badges/license';
import { npmDownloadsBadge } from '../badges/npmDownloads';
import { npmPeerDepVersionBadge } from '../badges/npmPeerDepVersion';
import { npmVersionBadge } from '../badges/npmVersion';
import { storybookBadge } from '../badges/storybook';
import { rocketChatLogo } from '../rocketChatLogo';

export const header = (pkg: Package): string =>
  endent`
    ${rocketChatLogo}

    # \`${pkg.name}\`

    ${pkg.description ? `> ${pkg.description}` : ''}

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
`;
