import assert from 'assert';

import { parser } from '../src';
import { strike, paragraph, plain } from '../src/utils';

describe('Strike', () => {
  describe('~~strike~~', () => {
    it('should return the token and the inner text', () => {
      const [tokens] = parser('~~strike~~');
      assert.deepEqual(tokens, paragraph([strike([plain('strike')])]));
    });
  });

  describe('pre~~strike~~post', () => {
    it('should return the token and the inner text', () => {
      const [tokens] = parser('pre~~strike~~post');
      assert.deepEqual(
        tokens,
        paragraph([plain('pre'), strike([plain('strike')]), plain('post')])
      );
    });
  });

  describe(' pre~~strike~~post ', () => {
    it('should return the token and the inner text', () => {
      const [tokens] = parser(' pre~~strike~~post ');
      assert.deepEqual(
        tokens,
        paragraph([plain(' pre'), strike([plain('strike')]), plain('post ')])
      );
    });
  });
});
