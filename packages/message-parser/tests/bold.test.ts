import { parser } from '../src';
import { bold, paragraph, plain, italic, strike } from '../src/utils';

describe('Testing alone', () => {
  it('should return the token and the inner text', () => {
    const [tokens] = parser('**bold**');
    expect(tokens).toMatchObject(paragraph([bold([plain('bold')])]));
  });
});

describe('Testing with whitespaces inside **', () => {
  it('should return the token and the inner text', () => {
    const [tokens] = parser('** bold**');
    expect(tokens).toMatchObject(paragraph([bold([plain(' bold')])]));
  });

  it('should return the token and the inner text', () => {
    const [tokens] = parser('**bold **');
    expect(tokens).toMatchObject(paragraph([bold([plain('bold ')])]));
  });

  it('should return the token and the inner text', () => {
    const [tokens] = parser('** bold **');
    expect(tokens).toMatchObject(paragraph([bold([plain(' bold ')])]));
  });

  it('should return the token and the inner text', () => {
    const [tokens] = parser('** bo ld **');
    expect(tokens).toMatchObject(paragraph([bold([plain(' bo ld ')])]));
  });
});

describe('Testing with more inline elements', () => {
  it('should return the `pre` text and the bold token', () => {
    const [tokens] = parser('pre**bold**');
    expect(tokens).toMatchObject(
      paragraph([plain('pre'), bold([plain('bold')])])
    );
  });

  it('should return the bold token and pos text', () => {
    const [tokens] = parser('**bold**pos');
    expect(tokens).toMatchObject(
      paragraph([bold([plain('bold')]), plain('pos')])
    );
  });

  it('should return two bold blocks', () => {
    const [tokens] = parser('**bold****bold**');
    expect(tokens).toMatchObject(
      paragraph([bold([plain('bold')]), bold([plain('bold')])])
    );
  });

  it('should return two bold blocks between spaces', () => {
    const [tokens] = parser('**bold** **bold**');
    expect(tokens).toMatchObject(
      paragraph([bold([plain('bold')]), plain(' '), bold([plain('bold')])])
    );
  });

  it('should return bold and italic blocks', () => {
    const [tokens] = parser('**bold** __italic__');
    expect(tokens).toMatchObject(
      paragraph([bold([plain('bold')]), plain(' '), italic([plain('italic')])])
    );
  });

  describe('Italic inside Bold', () => {
    it('should return bold and italic blocks', () => {
      const [tokens] = parser('**__italicbold__**');
      expect(tokens).toMatchObject(
        paragraph([bold([italic([plain('italicbold')])])])
      );
    });
  });

  describe('Italic and Text inside Bold', () => {
    it('should return a plain block and an italic inside bold', () => {
      const [tokens] = parser('plain **__italicbold__**');
      expect(tokens).toMatchObject(
        paragraph([plain('plain '), bold([italic([plain('italicbold')])])])
      );
    });
  });

  describe('Strinke, Italic and Text inside Bold', () => {
    it('should return a plain block and an italic inside bold', () => {
      const [tokens] = parser('plain **__~~strikeitalicbold~~__**');
      expect(tokens).toMatchObject(
        paragraph([
          plain('plain '),
          bold([italic([strike([plain('strikeitalicbold')])])]),
        ])
      );
    });
  });
});
