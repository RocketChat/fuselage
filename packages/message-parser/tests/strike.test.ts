import { parser } from '../src';
import { strike, paragraph, plain } from '../src/utils';

var assert = require('assert');
describe('Strike', function () {
  describe('~~strike~~', function () {
    it('should return the token and the inner text', function () {
      const [tokens] = parser('~~strike~~');
      assert.deepEqual(tokens, paragraph([strike([plain('strike')])]));
    });
  });

  describe('pre~~strike~~post', function () {
    it('should return the token and the inner text', function () {
      const [tokens] = parser('pre~~strike~~post');
      assert.deepEqual(
        tokens,
        paragraph([plain('pre'), strike([plain('strike')]), plain('post')])
      );
    });
  });

  describe(' pre~~strike~~post ', function () {
    it('should return the token and the inner text', function () {
      const [tokens] = parser(' pre~~strike~~post ');
      assert.deepEqual(
        tokens,
        paragraph([plain(' pre'), strike([plain('strike')]), plain('post ')])
      );
    });
  });
});
