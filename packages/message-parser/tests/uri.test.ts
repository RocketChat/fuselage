import assert from 'assert';

import { parser } from '../src';
import { link, paragraph } from '../src/utils';

describe('Mentions', () => {
  describe('link', () => {
    it('should match url with path', () => {
      const [tokens] = parser('https://rocket.chat/test');
      assert.deepEqual(tokens, paragraph([link('https://rocket.chat/test')]));
    });
    it('should match url with path and port', () => {
      const [tokens] = parser('https://rocket.chat:3000/test');
      assert.deepEqual(
        tokens,
        paragraph([link('https://rocket.chat:3000/test')])
      );
    });

    it('should match url with ?search', () => {
      const [tokens] = parser('https://rocket.chat/test?search');
      assert.deepEqual(
        tokens,
        paragraph([link('https://rocket.chat/test?search')])
      );
    });

    it('should match url with search=test', () => {
      const [tokens] = parser('https://rocket.chat/test?search=test');
      assert.deepEqual(
        tokens,
        paragraph([link('https://rocket.chat/test?search=test')])
      );
    });

    it('should match url with no path', () => {
      const [tokens] = parser('https://rocket.chat');
      assert.deepEqual(tokens, paragraph([link('https://rocket.chat')]));
    });

    it('should match url with localhost', () => {
      const [tokens] = parser('https://localhost');
      assert.deepEqual(tokens, paragraph([link('https://localhost')]));
    });

    it('should match url with localhost and port', () => {
      const [tokens] = parser('https://localhost:3000');
      assert.deepEqual(tokens, paragraph([link('https://localhost:3000')]));
    });
  });
});
