const isValidIdentifier = require('is-valid-identifier');

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

module.exports.toCamelCase = toCamelCase;
module.exports.toIdentifier = toIdentifier;
module.exports.createIconList = createIconList;
module.exports.createIconListModule = createIconListModule;
