const toCamelCase = (string) =>
  string.replace(/([-_][a-z])/ig, (match) => match.toUpperCase().replace('-', '').replace('_', ''));

const createIconList = (icons) =>
  `module.exports = ${ JSON.stringify(
    icons.reduce((obj, { name }) => ({ ...obj, [toCamelCase(name)]: name }), {}), null, 2) };
`;

const createIconListModule = (icons) =>
  icons.map(({ name }) => `export const ${ toCamelCase(name) } = ${ JSON.stringify(name) };`).join('\n');

module.exports.createIconList = createIconList;
module.exports.createIconListModule = createIconListModule;
