import assert from 'assert';

import { parser } from '../src';
import { paragraph, plain } from '../src/utils';

describe('Any', () => {
  describe('free text', () => {
    it('should return the token and the inner text', () => {
      const [tokens] = parser('free text');
      assert.deepEqual(tokens, paragraph([plain('free text')]));
    });
  });
  describe('free text, with comma', () => {
    it('should return the token and the inner text', () => {
      const [tokens] = parser('free text, with comma');
      assert.deepEqual(tokens, paragraph([plain('free text, with comma')]));
    });
  });

  describe('free text with unxpected/unfinished blocks *bold', () => {
    it('should return the token and the inner text', () => {
      const [tokens] = parser(
        'free text with unxpected/unfinished blocks *bold_'
      );
      assert.deepEqual(
        tokens,
        paragraph([plain('free text with unxpected/unfinished blocks *bold_')])
      );
    });
  });
});
