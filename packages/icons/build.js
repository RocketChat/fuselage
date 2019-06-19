const { build: buildFont } = require('./font');
const { build: buildSvgSprite } = require('./svg');

(async () => {
  console.log('Building font...');
  await buildFont();

  console.log('Building SVG sprite...');
  await buildSvgSprite();
})();
