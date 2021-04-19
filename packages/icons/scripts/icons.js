const { basename, dirname, join } = require('path');
const { relative } = require('path');
const { inspect, promisify } = require('util');

const glob = require('glob');

const { fixBrokenSymlink } = require('./files');

const getIconDescriptors = async (srcPath) => {
  const rootPath = join(__dirname, '..');
  console.log(
    'read',
    inspect(relative(rootPath, join(srcPath, '**/*.svg')), { colors: true })
  );

  const paths = await promisify(glob)(join(srcPath, '**/*.svg'));

  const descriptors = (
    await Promise.all(
      paths.map(async (_path) => {
        const [, name, , type] = /^(.*?)(\.([a-z]+))?$/.exec(
          basename(_path, '.svg')
        );
        _path = await fixBrokenSymlink(_path, srcPath);

        return {
          name,
          type,
          path: _path,
        };
      })
    )
  ).sort(
    (a, b) =>
      dirname(a.path).localeCompare(dirname(b.path)) ||
      a.name.localeCompare(b.name)
  );

  return descriptors;
};

module.exports.getIconDescriptors = getIconDescriptors;
