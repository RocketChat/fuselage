import { parser } from '../src';
import {
  italic,
  paragraph,
  plain,
  strike,
  bold,
  mentionUser,
  mentionChannel,
} from '../src/utils';

var assert = require('assert');
describe('Mentions', function () {
  describe('User mention: @guilherme.gazzo', function () {
    it('should return the token and the inner text', function () {
      const [tokens] = parser('@guilherme.gazzo');
      assert.deepEqual(
        tokens,
        paragraph([mentionUser(plain('guilherme.gazzo'))])
      );
    });
  });

  describe('mention: @guilherme.gazzo. ', function () {
    it('should return the token and the inner text', function () {
      const [tokens] = parser('@guilherme.gazzo. ');
      assert.deepEqual(
        tokens,
        paragraph([mentionUser(plain('guilherme.gazzo.')), plain(" ")])
      );
    });
  });

  describe('Channel mention: @GENERAL', function () {
    it('should return the token and the inner text', function () {
      const [tokens] = parser('#GENERAL');
      assert.deepEqual(tokens, paragraph([mentionChannel(plain('GENERAL'))]));
    });
  });
});
