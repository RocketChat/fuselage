const path = require('path');
const { promisify } = require('util');

const glob = require('glob');

const { logStep } = require('./log');
const { fixBrokenSymlink } = require('./files');

const getIconDescriptors = async (srcPath) => {
  const step = logStep('Read icons');

  const paths = await promisify(glob)(path.join(srcPath, '**/*.svg'));

  const descriptors = (
    await Promise.all(
      paths.map(async (_path) => {
        const [, name, , type] = /^(.*?)(\.([a-z]+))?$/.exec(
          path.basename(_path, '.svg')
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
      path.dirname(a.path).localeCompare(path.dirname(b.path)) ||
      a.name.localeCompare(b.name)
  );

  step.resolve();

  return descriptors;
};

module.exports.getIconDescriptors = getIconDescriptors;
