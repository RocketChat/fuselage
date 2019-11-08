const fs = require('fs');
const util = require('util');

const { parseString, Builder } = require('xml2js');

const { createIconList/* , createIconListModule */, writeFile } = require('./helpers');
const { getSvgIcons } = require('./icons');
const manifest = require('../package.json');


const createSvgSprite = async (icons) => {
  const iconSvgs = await Promise.all(icons.map(async ({ name, path }) => {
    const content = fs.readFileSync(`${ path }`, 'utf8');
    const {
      svg: {
        $: {
          viewBox,
        },
        id: _,
        ...args
      },
    } = await util.promisify(parseString)(content);
    return { name, viewBox, args };
  }));

  const xmlBuilder = new Builder({ headless: true });

  return (
    `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="display: none">
${ iconSvgs.map(({ name, viewBox, args }) => xmlBuilder.buildObject({
      symbol: {
        $: {
          id: `icon-${ name }`,
          viewBox,
          fill: 'currentColor',
        },
        ...args,
      },
    })).join('\n') }
</svg>`
  );
};

const createHtmlPreview = (icons, svgSprite) =>
  `<!DOCTYPE html>
<meta charset="UTF-8">
<title>${ manifest.name }: SVG sprite</title>
<style>
body {
  font-family: sans-serif;
  margin: 0;
  padding: 10px 20px;
  text-align: center;
}

.preview {
  width: 100px;
  display: inline-flex;
  flex-flow: column nowrap;
  align-items: stretch;
  margin: 10px;
}

.preview .inner {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 85px;
  background: #f5f5f5;
  border-radius: 3px 3px 0 0;
}

.preview .inner .icon {
  display: inline-block;
  width: 40px;
  height: 40px;
  color: #333;
}

.label {
  width: 100%;
  box-sizing: border-box;
  padding: 5px;
  font-size: 10px;
  font-family: 'Fira Code', 'Ubuntu Mono', 'DejaVu Sans Mono', 'Liberation Mono', Menlo, Monaco, 'Courier New', monospace;
  color: #666;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  background: #ddd;
  border-radius: 0 0 3px 3px;
  color: #666;
}
</style>
<h1>${ manifest.name }: <em>SVG sprite</em></h1>
${ svgSprite }
${ icons.map(({ name }) =>
    `<div class="preview">
  <div class="inner">
    <svg class="icon"><use href="#icon-${ name }"/></svg>
  </div>
  <div class="label">${ name }</div>
</div>`).join('\n') }`;

const buildSvgIcons = async (srcPath, distPath) => {
  const icons = getSvgIcons(srcPath);

  const svgSprite = await writeFile(distPath, 'RocketChat.svg', () => createSvgSprite(icons));
  await writeFile(distPath, 'index.js', () => createIconList(icons));
  await writeFile(distPath, 'index.html', () => createHtmlPreview(icons, svgSprite));
};

module.exports.buildSvgIcons = buildSvgIcons;
