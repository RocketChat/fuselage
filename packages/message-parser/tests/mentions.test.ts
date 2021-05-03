import assert from 'assert';

import { parser } from '../src';
import { paragraph, plain, mentionUser, mentionChannel } from '../src/utils';

describe('Mentions', () => {
  describe('User mention: @guilherme.gazzo', () => {
    it('should return the token and the inner text', () => {
      const [tokens] = parser('@guilherme.gazzo');
      assert.deepEqual(tokens, paragraph([mentionUser('guilherme.gazzo')]));
    });
  });

  describe('mention: @guilherme.gazzo. ', () => {
    it('should return the token and the inner text', () => {
      const [tokens] = parser('@guilherme.gazzo. ');
      assert.deepEqual(
        tokens,
        paragraph([mentionUser('guilherme.gazzo.'), plain(' ')])
      );
    });
  });

  describe('Channel mention: @GENERAL', () => {
    it('should return the token and the inner text', () => {
      const [tokens] = parser('#GENERAL');
      assert.deepEqual(tokens, paragraph([mentionChannel('GENERAL')]));
    });
  });
});
