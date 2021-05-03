import assert from 'assert';

import { parser } from '../src';
import { italic, paragraph, plain, strike, bold } from '../src/utils';

describe('Italic', () => {
  describe('__italic__', () => {
    it('should return the token and the inner text', () => {
      const [tokens] = parser('__italic__');
      assert.deepEqual(tokens, paragraph([italic([plain('italic')])]));
    });
  });

  describe('pre__italic__post', () => {
    it('should return the token and the inner text', () => {
      const [tokens] = parser('pre__italic__post');
      assert.deepEqual(
        tokens,
        paragraph([plain('pre'), italic([plain('italic')]), plain('post')])
      );
    });
  });

  describe(' pre__italic__post ', () => {
    it('should return the token and the inner text', () => {
      const [tokens] = parser(' pre__italic__post ');
      assert.deepEqual(
        tokens,
        paragraph([plain(' pre'), italic([plain('italic')]), plain('post ')])
      );
    });
  });

  describe('rendering bold and strike inside a italic ', () => {
    it('should return the token and the inner text', () => {
      const [tokens] = parser(' pre__**~~boldstrikeitalic~~**__post ');
      assert.deepEqual(
        tokens,
        paragraph([
          plain(' pre'),
          italic([bold([strike([plain('boldstrikeitalic')])])]),
          plain('post '),
        ])
      );
    });
  });
});
