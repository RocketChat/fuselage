const { promises: fs } = require('fs');
const path = require('path');

const fromCamelToKebab = (camelCaseText) =>
  camelCaseText.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase();

const toScss = (value, indent = '') => {
  if (value === null) {
    return 'null';
  }

  if (typeof value === 'boolean') {
    return String(value);
  }

  if (typeof value === 'number') {
    return String(value);
  }

  if (typeof value === 'string') {
    if (/^#[A-Fa-f0-9]+/.test(value)) {
      return value;
    }

    if (value.includes(' ')) {
      return JSON.stringify(value).replace(/"/g, '\'');
    }

    return value;
  }

  if (Array.isArray(value)) {
    const mapLine = (value) => (
      indent +
      '  ' +
      toScss(value, indent + '  ') +
      ',\n'
    );
    return '(\n' + value.map(mapLine).join('') + indent + ')';
  }

  if (typeof value === 'object') {
    const mapLine = ([key, value]) => (
      indent +
      '  ' +
      JSON.stringify(fromCamelToKebab(key)).replace(/"/g, '\'') +
      ': ' +
      toScss(value, indent + '  ') +
      ',\n'
    );
    return '(\n' + Object.entries(value).map(mapLine).join('') + indent + ')';
  }
};

const toScssModule = (value) => {
  return Object.entries(value)
    .map(([key, value]) => `\$${fromCamelToKebab(key)}: ${toScss(value)};`)
    .join('\n');
};

const buildBreakpoints = async () => {
  const breakpoints = require('../breakpoints');

  await Promise.all([
    fs.writeFile(path.join(__dirname, '../breakpoints.json'), JSON.stringify(breakpoints, null, 2) + '\n', { encoding: 'utf8' }),
    fs.writeFile(path.join(__dirname, '../breakpoints.scss'), toScssModule({ breakpoints }) + '\n', { encoding: 'utf8' }),
  ]);
};

const buildColors = async () => {
  const colors = require('../colors');

  await Promise.all([
    fs.writeFile(path.join(__dirname, '../colors.json'), JSON.stringify(colors, null, 2) + '\n', { encoding: 'utf8' }),
    fs.writeFile(path.join(__dirname, '../colors.scss'), toScssModule(colors) + '\n', { encoding: 'utf8' }),
  ]);
};

const buildTypography = async () => {
  const typography = require('../typography');

  await Promise.all([
    fs.writeFile(path.join(__dirname, '../typography.json'), JSON.stringify(typography, null, 2) + '\n', { encoding: 'utf8' }),
    fs.writeFile(path.join(__dirname, '../typography.scss'), toScssModule(typography) + '\n', { encoding: 'utf8' }),
  ]);
};

const build = () => Promise.all([
  buildBreakpoints(),
  buildColors(),
  buildTypography(),
]);

if (require.main === module) {
  build();
}
