import { Package } from '../../types/Package';

export const bundleSizeBadge = (pkg: Package): string =>
  `![npm bundle size](https://img.shields.io/bundlephobia/min/${pkg.name}?style=flat-square)`;
