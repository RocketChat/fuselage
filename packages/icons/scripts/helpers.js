const fs = require('fs');
const path = require('path');
const { promisify } = require('util');

const chalk = require('chalk');
const isValidIdentifier = require('is-valid-identifier');

const { log } = console;

const toCamelCase = (string) =>
  string.replace(/([-_][a-z])/ig, (match) => match.toUpperCase().replace('-', '').replace('_', ''));

const toIdentifier = (string) => (isValidIdentifier(string) ? string : `_${ string }`);

const createIconList = (icons) => icons
  .filter(({ mirror }) => !mirror)
  .map(({ name }) => `exports.${ toIdentifier(toCamelCase(name)) } = ${ JSON.stringify(name) };`)
  .join('\n');

const createIconListModule = (icons) => icons
  .filter(({ mirror }) => !mirror)
  .map(({ name }) => `export const ${ toIdentifier(toCamelCase(name)) } = ${ JSON.stringify(name) };`)
  .join('\n');

const writeFile = async (distPath, filePath, getData) => {
  const destPath = path.join(distPath, filePath);
  process.stdout.write(chalk.gray(filePath));
  const data = await getData();
  await promisify(fs.writeFile)(destPath, data, typeof data === 'string' ? { charset: 'utf8' } : undefined);
  log(chalk.green(' ✔️'));
  return data;
};

module.exports.toCamelCase = toCamelCase;
module.exports.toIdentifier = toIdentifier;
module.exports.createIconList = createIconList;
module.exports.createIconListModule = createIconListModule;
module.exports.writeFile = writeFile;
