import { parser } from '../src';
const { italic, paragraph, plain, strike, bold } = require('../src/utils');

var assert = require('assert');
describe('Italic', function () {
  describe('__italic__', function () {
    it('should return the token and the inner text', function () {
      const [tokens] = parser('__italic__');
      assert.deepEqual(tokens, paragraph([italic([plain('italic')])]));
    });
  });

  describe('pre__italic__post', function () {
    it('should return the token and the inner text', function () {
      const [tokens] = parser('pre__italic__post');
      assert.deepEqual(
        tokens,
        paragraph([plain('pre'), italic([plain('italic')]), plain('post')])
      );
    });
  });

  describe(' pre__italic__post ', function () {
    it('should return the token and the inner text', function () {
      const [tokens] = parser(' pre__italic__post ');
      assert.deepEqual(
        tokens,
        paragraph([plain(' pre'), italic([plain('italic')]), plain('post ')])
      );
    });
  });

  describe('rendering bold and strike inside a italic ', function () {
    it('should return the token and the inner text', function () {
      const [tokens] = parser(' pre__**~~boldstrikeitalic~~**__post ');
      assert.deepEqual(
        tokens,
        paragraph([plain(' pre'), italic([bold([strike([plain('boldstrikeitalic')])])]), plain('post ')])
      );
    });
  });
});
