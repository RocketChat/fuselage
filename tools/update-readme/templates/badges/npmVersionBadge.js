export const npmVersionBadge = (pkg, tag) =>
  tag
    ? `[![npm@${tag}](https://img.shields.io/npm/v/${pkg.name}/${tag}?style=flat-square)](https://www.npmjs.com/package/${pkg.name}/v/${tag})`
    : `[![npm](https://img.shields.io/npm/v/${pkg.name}?style=flat-square)](https://www.npmjs.com/package/${pkg.name})`;
