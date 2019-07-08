const isValidIdentifier = require('is-valid-identifier');

const toCamelCase = (string) =>
  string.replace(/([-_][a-z])/ig, (match) => match.toUpperCase().replace('-', '').replace('_', ''));

const toIdentifier = (string) => (isValidIdentifier(string) ? string : `_${ string }`);

const getIconNames = (icons) => Array.from(icons.reduce((set, { name }) => set.add(name), new Set()));

const createIconList = (icons) => getIconNames(icons)
  .map((name) => `exports.${ toIdentifier(toCamelCase(name)) } = ${ JSON.stringify(name) };`)
  .join('\n');

const createIconListModule = (icons) => getIconNames(icons)
  .map((name) => `export const ${ toIdentifier(toCamelCase(name)) } = ${ JSON.stringify(name) };`)
  .join('\n');

module.exports.createIconList = createIconList;
module.exports.createIconListModule = createIconListModule;
