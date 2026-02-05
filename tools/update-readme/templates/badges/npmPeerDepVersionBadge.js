export const npmPeerDepVersionBadge = (pkg, peerDep) =>
  `![${peerDep} version](https://img.shields.io/npm/dependency-version/${pkg.name}/peer/${peerDep}?style=flat-square)`;
