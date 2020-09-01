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

    return JSON.stringify(value);
  }

  if (typeof value === 'object') {
    return [
      '(',
      ...Object.entries(value).map(([key, value]) => `${indent}  ${JSON.stringify(fromCamelToKebab(key))}: ${toScss(value, indent + '  ')},`),
      `${indent})`,
    ]
      .join('\n');
  }
};

const toScssModule = (value) => {
  return Object.entries(value)
    .map(([key, value]) => `\$${fromCamelToKebab(key)}: ${toScss(value)};`)
    .join('\n');
};

const buildBreakpoints = async () => {
  const breakpoints = require('../breakpoints');

  await fs.writeFile(path.join(__dirname, '../breakpoints.json'), JSON.stringify(breakpoints, null, 2) + '\n', { encoding: 'utf8' });
  await fs.writeFile(path.join(__dirname, '../breakpoints.scss'), toScssModule({ breakpoints }) + '\n', { encoding: 'utf8' });
};

const buildColors = async () => {
  const colors = require('../colors');

  await fs.writeFile(path.join(__dirname, '../colors.json'), JSON.stringify(colors, null, 2) + '\n', { encoding: 'utf8' });
  await fs.writeFile(path.join(__dirname, '../colors.scss'), toScssModule({ colors }) + '\n', { encoding: 'utf8' });
};

const build = async () => {
  // await buildBreakpoints();
  await buildColors();
};

if (require.main === module) {
  build();
}
