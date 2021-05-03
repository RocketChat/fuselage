import assert from 'assert';

import { parser } from '../src';
import { bold, paragraph, plain, italic, strike } from '../src/utils';

describe('Bold', () => {
  describe('Testing alone', () => {
    it('should return the token and the inner text', () => {
      const [tokens] = parser('**bold**');
      assert.deepEqual(tokens, paragraph([bold([plain('bold')])]));
    });
  });
  describe('Testing with whitespaces inside **', () => {
    it('should return the token and the inner text', () => {
      const [tokens] = parser('** bold**');
      assert.deepEqual(tokens, paragraph([bold([plain(' bold')])]));
    });
    it('should return the token and the inner text', () => {
      const [tokens] = parser('**bold **');
      assert.deepEqual(tokens, paragraph([bold([plain('bold ')])]));
    });
    it('should return the token and the inner text', () => {
      const [tokens] = parser('** bold **');
      assert.deepEqual(tokens, paragraph([bold([plain(' bold ')])]));
    });

    it('should return the token and the inner text', () => {
      const [tokens] = parser('** bo ld **');
      assert.deepEqual(tokens, paragraph([bold([plain(' bo ld ')])]));
    });
  });

  describe('Testing with more inline elements', () => {
    it('should return the `pre` text and the bold token', () => {
      const [tokens] = parser('pre**bold**');
      assert.deepEqual(
        tokens,
        paragraph([plain('pre'), bold([plain('bold')])])
      );
    });

    it('should return the bold token and pos text', () => {
      const [tokens] = parser('**bold**pos');
      assert.deepEqual(
        tokens,
        paragraph([bold([plain('bold')]), plain('pos')])
      );
    });

    it('should return two bold blocks', () => {
      const [tokens] = parser('**bold****bold**');
      assert.deepEqual(
        tokens,
        paragraph([bold([plain('bold')]), bold([plain('bold')])])
      );
    });

    it('should return two bold blocks between spaces', () => {
      const [tokens] = parser('**bold** **bold**');
      assert.deepEqual(
        tokens,
        paragraph([bold([plain('bold')]), plain(' '), bold([plain('bold')])])
      );
    });

    it('should return bold and italic blocks', () => {
      const [tokens] = parser('**bold** __italic__');
      assert.deepEqual(
        tokens,
        paragraph([
          bold([plain('bold')]),
          plain(' '),
          italic([plain('italic')]),
        ])
      );
    });

    describe('Italic inside Bold', () => {
      it('should return bold and italic blocks', () => {
        const [tokens] = parser('**__italicbold__**');
        assert.deepEqual(
          tokens,
          paragraph([bold([italic([plain('italicbold')])])])
        );
      });
    });

    describe('Italic and Text inside Bold', () => {
      it('should return a plain block and an italic inside bold', () => {
        const [tokens] = parser('plain **__italicbold__**');
        assert.deepEqual(
          tokens,
          paragraph([plain('plain '), bold([italic([plain('italicbold')])])])
        );
      });
    });

    describe('Strinke, Italic and Text inside Bold', () => {
      it('should return a plain block and an italic inside bold', () => {
        const [tokens] = parser('plain **__~~strikeitalicbold~~__**');
        assert.deepEqual(
          tokens,
          paragraph([
            plain('plain '),
            bold([italic([strike([plain('strikeitalicbold')])])]),
          ])
        );
      });
    });
  });
});
