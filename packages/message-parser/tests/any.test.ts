import { parser } from "../src";

const { bold, paragraph, plain } = require('../src/utils');

var assert = require('assert');
describe('Any', function () {
  describe('free text', function () {
    it('should return the token and the inner text', function () {
      const [tokens] = parser('free text');
      assert.deepEqual(tokens, paragraph([plain('free text')]));
    });
  });
  describe('free text, with comma', function () {
    it('should return the token and the inner text', function () {
      const [tokens] = parser('free text, with comma');
      assert.deepEqual(tokens, paragraph([plain('free text, with comma')]));
    });
  });

  describe('free text with unxpected/unfinished blocks *bold', function () {
    it('should return the token and the inner text', function () {
      const [tokens, ...args] = parser(
        'free text with unxpected/unfinished blocks *bold_'
      );
      assert.deepEqual(
        tokens,
        paragraph([plain('free text with unxpected/unfinished blocks *bold_')])
      );
    });
  });
});
