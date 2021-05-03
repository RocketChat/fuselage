import assert from 'assert';

import { parser } from '../src';
import { heading, plain } from '../src/utils';

describe('Heading', () => {
  describe('# h1', () => {
    it('should return the token and the inner text', () => {
      const [tokens] = parser('# h1');
      assert.deepEqual(tokens, heading([plain('h1')]));
    });
  });
});
