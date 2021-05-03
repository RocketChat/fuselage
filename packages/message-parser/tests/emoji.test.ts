import assert from 'assert';

import { parser } from '../src';
import { paragraph, emoji } from '../src/utils';

describe('Emoji', () => {
  describe('Simple test', () => {
    it('should return the token and the inner text', () => {
      const [tokens] = parser(':smile:');
      assert.deepEqual(tokens, paragraph([emoji('smile')]));
    });
  });
});
