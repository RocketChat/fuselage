import { parser } from '../src';
import { link, paragraph, plain, bold, strike, italic } from '../src/utils';

var assert = require('assert');
describe('Link', function () {
  describe('[title](link)', function () {
    it('should return the token and the inner text', function () {
      const [tokens] = parser('[title](link)');
      assert.deepEqual(
        tokens,
        paragraph([link([plain('title'), plain('link')])])
      );
    });
  });

  describe('[title](http://localhost)', function () {
    it('should return the token and the inner text', function () {
      const [tokens] = parser('[title](http://localhost)');
      assert.deepEqual(
        tokens,
        paragraph([link([plain('title'), plain('http://localhost')])])
      );
    });
  });


  describe('[title](http://localhost?testing=true)', function () {
    it('should return the token and the inner text', function () {
      const [tokens] = parser('[title](http://localhost?testing=true)');
      assert.deepEqual(
        tokens,
        paragraph([link([plain('title'), plain('http://localhost?testing=true')])])
      );
    });
  });


  describe('Links should accept bold inside', function () {
    it('should return the token and the inner text', function () {
      const [tokens] = parser('[**title**](link)');
      assert.deepEqual(
        tokens,
        paragraph([link([bold([plain('title')]), plain('link')])])
      );
    });
  });

  describe('Links should accept strike inside', function () {
    it('should return the token and the inner text', function () {
      const [tokens] = parser('[~~title~~](link)');
      assert.deepEqual(
        tokens,
        paragraph([link([strike([plain('title')]), plain('link')])])
      );
    });
  });
  describe('Links should accept italic inside', function () {
    it('should return the token and the inner text', function () {
      const [tokens] = parser('[__title__](link)');
      assert.deepEqual(
        tokens,
        paragraph([link([italic([plain('title')]), plain('link')])])
      );
    });
  });

  describe('Links should accept italic + strike + bold inside', function () {
    it('should return the token and the inner text', function () {
      const [tokens] = parser('[__**~~title~~**__](link)');
      assert.deepEqual(
        tokens,
        paragraph([link([italic([bold([strike([plain('title')])])]), plain('link')])])
      );
    });
  });
});
