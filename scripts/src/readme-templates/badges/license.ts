import { Package } from '../../types/Package';

export const licenseBadge = (pkg: Package): string =>
  `![License: ${pkg.license}](https://img.shields.io/npm/l/${pkg.name}?style=flat-square)`;
