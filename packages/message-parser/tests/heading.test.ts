import { parser } from '../src';
const { heading, paragraph, plain } = require('../src/utils');

var assert = require('assert');
describe('Heading', function () {
  describe('# h1', function () {
    it('should return the token and the inner text', function () {
      const [tokens] = parser('# h1');
      assert.deepEqual(tokens, heading(plain('h1')));
    });
  });
});
