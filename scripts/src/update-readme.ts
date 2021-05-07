// eslint-disable-next-line import/no-unresolved
import { readdir, readFile, writeFile } from 'fs/promises';
import { join } from 'path';

type PackageManifest = {
  packageDirname: string;
  name: string;
  description?: string;
};

const rootDir = join(__dirname, '../..');

const getRepoBadges = () => [
  `[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/)`,
  `![LGTM Alerts](https://img.shields.io/lgtm/alerts/github/RocketChat/Rocket.Chat.Fuselage)`,
  `![LGTM Grade](https://img.shields.io/lgtm/grade/javascript/github/RocketChat/Rocket.Chat.Fuselage)`,
];

const getPackageManifests = async () => {
  const packagesDir = join(rootDir, 'packages');
  return Promise.all(
    (await readdir(packagesDir)).map(async (packageDirname) => {
      const manifestPath = join(packagesDir, packageDirname, 'package.json');
      return {
        packageDirname,
        ...JSON.parse(await readFile(manifestPath, { encoding: 'utf-8' })),
      } as PackageManifest;
    })
  );
};

const getPackagesTable = async () => {
  const packageManifests = await getPackageManifests();

  const columnNames = [
    'Package',
    'Description',
    'Version',
    'Peer Dependencies',
    'Dev Dependencies',
    'Dependencies',
  ];

  const packageRows = packageManifests.map((packageManifest) => [
    `[\`${packageManifest.name}\`](/packages/${packageManifest.name})`,
    packageManifest.description ?? '',
    `[![npm](https://img.shields.io/npm/v/${packageManifest.name}.svg)](https://www.npmjs.com/package/${packageManifest.name})`,
    `[![David Peer](https://img.shields.io/david/peer/RocketChat/Rocket.Chat.Fuselage.svg?path=packages/${packageManifest.packageDirname})](https://david-dm.org/RocketChat/Rocket.Chat.Fuselage?path=packages/${packageManifest.packageDirname}&type=peer)`,
    `[![David Dev](https://img.shields.io/david/dev/RocketChat/Rocket.Chat.Fuselage.svg?path=packages/${packageManifest.packageDirname})](https://david-dm.org/RocketChat/Rocket.Chat.Fuselage?path=packages/${packageManifest.packageDirname}&type=dev)`,
    `[![David](https://img.shields.io/david/RocketChat/Rocket.Chat.Fuselage.svg?path=packages/${packageManifest.packageDirname})](https://david-dm.org/RocketChat/Rocket.Chat.Fuselage?path=packages/${packageManifest.packageDirname})`,
  ]);

  const columnWidths = columnNames.map((columnName, i) =>
    Math.max(
      columnName.length,
      ...packageRows.map((row) => row[i]?.length ?? 0)
    )
  );

  const padRow = (row: string[]) =>
    row.map((column, i) => column.padEnd(columnWidths[i], ' ')).join(' | ');

  const rows = [
    padRow(columnNames),
    columnWidths.map((columnWidth) => '-'.repeat(columnWidth)).join(' | '),
    ...packageRows.map(padRow),
  ];

  return rows.join('\n');
};

const start = async () => {
  const readmeBlocks: string[] = [
    getRepoBadges().join(' '),
    await getPackagesTable(),
  ];

  const readmeText = readmeBlocks.join('\n\n');
  const readmePath = join(rootDir, 'README.md');
  await writeFile(readmePath, readmeText, { encoding: 'utf-8' });
};

start();
