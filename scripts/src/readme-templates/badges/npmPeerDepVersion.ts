import { Package } from '../../types/Package';

export const npmPeerDepVersionBadge = (pkg: Package, peerDep: string): string =>
  `![${peerDep} version](https://img.shields.io/npm/dependency-version/${pkg.name}/peer/${peerDep}?style=flat-square)`;
