import { parser } from '../src';
import { paragraph, plain, mentionUser, mentionChannel } from '../src/utils';

describe('User mention: @guilherme.gazzo', () => {
  it('should return the token and the inner text', () => {
    const [tokens] = parser('@guilherme.gazzo');
    expect(tokens).toMatchObject(paragraph([mentionUser('guilherme.gazzo')]));
  });
});

describe('mention: @guilherme.gazzo. ', () => {
  it('should return the token and the inner text', () => {
    const [tokens] = parser('@guilherme.gazzo. ');
    expect(tokens).toMatchObject(
      paragraph([mentionUser('guilherme.gazzo.'), plain(' ')])
    );
  });
});

describe('Channel mention: @GENERAL', () => {
  it('should return the token and the inner text', () => {
    const [tokens] = parser('#GENERAL');
    expect(tokens).toMatchObject(paragraph([mentionChannel('GENERAL')]));
  });
});
