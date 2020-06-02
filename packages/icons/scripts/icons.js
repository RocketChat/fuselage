const path = require('path');
const { promisify } = require('util');

const glob = promisify(require('glob'));

const { logStep } = require('./log');

const getIconDescriptors = async (srcPath) => {
  const step = logStep('Read icons');

  const paths = await glob(path.join(srcPath, '**/*.svg'));

  const descriptors = paths
    .map((_path) => {
      const [, name,, type] = /^(.*?)(\.([a-z]+))?$/.exec(path.basename(_path, '.svg'));
      return {
        name,
        type,
        path: _path,
      };
    })
    .sort((a, b) =>
      path.dirname(a.path).localeCompare(path.dirname(b.path))
      || a.name.localeCompare(b.name),
    );

  step.resolve();

  return descriptors;
};

module.exports.getIconDescriptors = getIconDescriptors;
