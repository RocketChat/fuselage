const { version } = require('../package.json');
const { writeFileSync } = require('fs');
const { join } = require('path');

writeFileSync(
  join(__dirname, '../src/version.ts'),
  `export default '${version}';\n`
);
