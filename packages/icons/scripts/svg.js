const { promisify } = require('util');

const { parseString, Builder } = require('xml2js');

const { readFile } = require('./files');

const mirrorSvg = async (content) => {
  const xml = await promisify(parseString)(content);
  const [x1, , x2] = xml.svg.$.viewBox.split(' ');
  xml.svg.$.transform = `translate(${ x2 - x1 } 0) scale(-1 1)`;
  const builder = new Builder({ headless: true });
  return builder.buildObject(xml);
};

const readXmls = (icons) => Promise.all(
  icons.map(async ({ name, path }) => {
    const content = await readFile(path);
    const xml = await promisify(parseString)(content);
    return { name, xml };
  }),
);

const createSvgSprite = async (icons) => {
  const xmls = await readXmls(icons);

  const xmlBuilder = new Builder({ headless: true });

  return [
    '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="display: none">',
    ...xmls.map(({
      name,
      xml: {
        svg: {
          $: { viewBox },
          ...args
        },
      },
    }) => xmlBuilder.buildObject({
      symbol: {
        $: {
          id: `icon-${ name }`,
          viewBox,
          fill: 'currentColor',
        },
        ...args,
      },
    })),
    '</svg>',
  ].join('\n');
};

module.exports.mirrorSvg = mirrorSvg;
module.exports.createSvgSprite = createSvgSprite;
