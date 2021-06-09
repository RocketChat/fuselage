import { Package } from '../../types/Package';

export const npmDownloadsBadge = (pkg: Package): string =>
  `![npm downloads](https://img.shields.io/npm/dw/${pkg.name}?style=flat-square)`;
