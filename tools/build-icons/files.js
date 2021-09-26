const fs = require('fs');
const { basename, dirname, join, relative } = require('path');
const { Readable } = require('stream');
const { inspect, promisify } = require('util');

const glob = require('glob');

const encodeEscapedJson = (data) =>
  JSON.stringify(data, null, 2).replace(
    /[\u007f-\uffff]/g,
    (c) => `\\u${`0000${c.charCodeAt(0).toString(16)}`.slice(-4)}`
  );

const writeFile = async (distPath, filePath, getData) => {
  const rootPath = process.cwd();
  const destPath = join(distPath, filePath);

  console.log('write', inspect(relative(rootPath, destPath), { colors: true }));

  await fs.promises.mkdir(dirname(destPath), { recursive: true });

  const data = await getData();

  if (
    Object(data) === data &&
    Object.getPrototypeOf(data) === Object.prototype
  ) {
    await fs.promises.writeFile(destPath, encodeEscapedJson(data), {
      encoding: 'utf8',
    });
  } else if (typeof data === 'string') {
    await fs.promises.writeFile(destPath, data, { encoding: 'utf8' });
  } else {
    await fs.promises.writeFile(destPath, data);
  }

  return data;
};

const fixBrokenSymlink = async (_path, rootPath) => {
  const fs = require('fs');
  const stat = await fs.promises.lstat(_path);
  if (!stat.isSymbolicLink()) {
    return _path;
  }

  const target = await fs.promises.readlink(_path);
  const targetBasename = basename(target);
  const newTargetPath = (
    await promisify(glob)(join(rootPath, '**', targetBasename))
  )[0];

  if (!newTargetPath) {
    throw Error(`Broken symlink: ${_path} -> ${target}`);
  }

  const relativeTargetPath = relative(dirname(_path), newTargetPath);
  await fs.promises.unlink(_path);
  await fs.promises.symlink(relativeTargetPath, _path);

  return _path;
};

const readFile = (path) => fs.promises.readFile(path, { encoding: 'utf8' });

const createReadableFromString = (content) => {
  const stream = new Readable();
  stream.push(content);
  stream.push(null);
  return stream;
};

module.exports.encodeEscapedJson = encodeEscapedJson;
module.exports.fixBrokenSymlink = fixBrokenSymlink;
module.exports.writeFile = writeFile;
module.exports.readFile = readFile;
module.exports.createReadableFromString = createReadableFromString;
