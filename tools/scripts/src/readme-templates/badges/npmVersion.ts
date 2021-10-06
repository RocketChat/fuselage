import { Package } from '../../types/Package';

export const npmVersionBadge = (
  pkg: Package,
  tag?: 'latest' | 'next'
): string =>
  tag
    ? `![npm@${tag}](https://img.shields.io/npm/v/${pkg.name}/${tag}?style=flat-square)`
    : `![npm](https://img.shields.io/npm/v/${pkg.name}?style=flat-square)`;
