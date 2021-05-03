import assert from 'assert';

import { parser } from '../src';
import { link, paragraph, plain, bold, strike, italic } from '../src/utils';

describe('Link', () => {
  describe('[title](link)', () => {
    it('should return the token and the inner text', () => {
      const [tokens] = parser('[title](link)');
      assert.deepEqual(
        tokens,
        paragraph([link([plain('title'), plain('link')])])
      );
    });
  });

  describe('[title](http://localhost)', () => {
    it('should return the token and the inner text', () => {
      const [tokens] = parser('[title](http://localhost)');
      assert.deepEqual(
        tokens,
        paragraph([link([plain('title'), plain('http://localhost')])])
      );
    });
  });

  describe('[title](http://localhost?testing=true)', () => {
    it('should return the token and the inner text', () => {
      const [tokens] = parser('[title](http://localhost?testing=true)');
      assert.deepEqual(
        tokens,
        paragraph([
          link([plain('title'), plain('http://localhost?testing=true')]),
        ])
      );
    });
  });

  describe('Links should accept bold inside', () => {
    it('should return the token and the inner text', () => {
      const [tokens] = parser('[**title**](link)');
      assert.deepEqual(
        tokens,
        paragraph([link([bold([plain('title')]), plain('link')])])
      );
    });
  });

  describe('Links should accept strike inside', () => {
    it('should return the token and the inner text', () => {
      const [tokens] = parser('[~~title~~](link)');
      assert.deepEqual(
        tokens,
        paragraph([link([strike([plain('title')]), plain('link')])])
      );
    });
  });
  describe('Links should accept italic inside', () => {
    it('should return the token and the inner text', () => {
      const [tokens] = parser('[__title__](link)');
      assert.deepEqual(
        tokens,
        paragraph([link([italic([plain('title')]), plain('link')])])
      );
    });
  });

  describe('Links should accept italic + strike + bold inside', () => {
    it('should return the token and the inner text', () => {
      const [tokens] = parser('[__**~~title~~**__](link)');
      assert.deepEqual(
        tokens,
        paragraph([
          link([italic([bold([strike([plain('title')])])]), plain('link')]),
        ])
      );
    });
  });
});
