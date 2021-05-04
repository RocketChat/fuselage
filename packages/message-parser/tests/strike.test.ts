import { parser } from '../src';
import { strike, paragraph, plain } from '../src/utils';

describe('~~strike~~', () => {
  it('should return the token and the inner text', () => {
    const [tokens] = parser('~~strike~~');
    expect(tokens).toMatchObject(paragraph([strike([plain('strike')])]));
  });
});

describe('pre~~strike~~post', () => {
  it('should return the token and the inner text', () => {
    const [tokens] = parser('pre~~strike~~post');
    expect(tokens).toMatchObject(
      paragraph([plain('pre'), strike([plain('strike')]), plain('post')])
    );
  });
});

describe(' pre~~strike~~post ', () => {
  it('should return the token and the inner text', () => {
    const [tokens] = parser(' pre~~strike~~post ');
    expect(tokens).toMatchObject(
      paragraph([plain(' pre'), strike([plain('strike')]), plain('post ')])
    );
  });
});
