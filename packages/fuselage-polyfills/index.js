/* eslint-disable @typescript-eslint/no-require-imports */
if (!navigator.clipboard) {
  navigator.clipboard = require('clipboard-polyfill');
}
require('element-closest-polyfill');
require('new-event-polyfill');
