const { promisify } = require('util');

const { parseString, Builder } = require('xml2js');

const { readFile } = require('./files');

const xmlBuilder = new Builder({ headless: true });

const mirrorSvg = async (content) => {
  const xml = await promisify(parseString)(content);
  const [x1, , x2] = xml.svg.$.viewBox.split(' ');
  xml.svg.$.transform = `translate(${x2 - x1} 0) scale(-1 1)`;
  return xmlBuilder.buildObject(xml);
};

const createSvgIcons = (icons) =>
  Promise.all(
    icons.map(async ({ name, type, path }) => {
      const content = await readFile(path);
      const {
        svg: {
          $: { viewBox },
          ...elements
        },
      } = await promisify(parseString)(content);

      const xml = xmlBuilder.buildObject({
        svg: {
          $: {
            xmlns: 'http://www.w3.org/2000/svg',
            viewBox,
            class: type === 'dir' ? 'rcx-svg--directional' : undefined,
            fill: 'currentColor',
          },
          ...elements,
        },
      });

      return { name, type, viewBox, elements, xml };
    })
  );

const createSvgSprite = async (svgIcons) =>
  [
    '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="display: none">',
    ...svgIcons.map(({ name, type, viewBox, elements }) =>
      xmlBuilder.buildObject({
        symbol: {
          $: {
            id: `icon-${name}`,
            viewBox,
            class: type === 'dir' ? 'rcx-svg--directional' : undefined,
            fill: 'currentColor',
          },
          ...elements,
        },
      })
    ),
    '</svg>',
  ].join('\n');

module.exports.mirrorSvg = mirrorSvg;
module.exports.createSvgIcons = createSvgIcons;
module.exports.createSvgSprite = createSvgSprite;
