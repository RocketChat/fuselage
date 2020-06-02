const fs = require('fs');
const path = require('path');
const { Readable } = require('stream');

const { logStep } = require('./log');

const encodeEscapedJson = (data) => JSON.stringify(data, null, 2)
  .replace(/[\u007f-\uffff]/g, (c) => `\\u${ `0000${ c.charCodeAt(0).toString(16) }`.slice(-4) }`);

const writeFile = async (distPath, filePath, getData) => {
  const step = logStep('Write', filePath);

  const destPath = path.join(distPath, filePath);

  await fs.promises.mkdir(path.dirname(destPath), { recursive: true });

  const data = await getData();

  if (Object(data) === data && Object.getPrototypeOf(data) === Object.prototype) {
    await fs.promises.writeFile(destPath, encodeEscapedJson(data), { encoding: 'utf8' });
  } else if (typeof data === 'string') {
    await fs.promises.writeFile(destPath, data, { encoding: 'utf8' });
  } else {
    await fs.promises.writeFile(destPath, data);
  }

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

module.exports.encodeEscapedJson = encodeEscapedJson;
module.exports.writeFile = writeFile;
module.exports.readFile = readFile;
module.exports.createReadableFromString = createReadableFromString;
