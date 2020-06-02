const fs = require('fs');
const path = require('path');
const { Readable } = require('stream');

const { logStep } = require('./log');

const writeFile = async (distPath, filePath, getData) => {
  const step = logStep('Write', filePath);

  const destPath = path.join(distPath, filePath);

  await fs.promises.mkdir(path.dirname(destPath), { recursive: true });

  const data = await getData();
  await fs.promises.writeFile(destPath, data, {
    encoding: typeof data === 'string' ? 'utf8' : undefined,
  });

  step.resolve();

  return data;
};

const readFile = (path) => fs.promises.readFile(path, { encoding: 'utf8' });

const createReadableFromString = (content) => {
  const stream = new Readable();
  stream.push(content);
  stream.push(null);
  return stream;
};

module.exports.writeFile = writeFile;
module.exports.readFile = readFile;
module.exports.createReadableFromString = createReadableFromString;
