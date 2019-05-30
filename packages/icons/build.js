const { build: buildFont } = require('./font');

(async () => {
  console.log('Building font...');
  await buildFont();
})();
