const grammar = require('../grammar');
const { heading, paragraph, plain } = require ('../utils');

var assert = require('assert');
describe('Heading', function() {
  describe('# h1', function() {
    it('should return the token and the inner text', function() {
        const [tokens] = grammar.parse('# h1');
        assert.deepEqual(tokens, heading(plain('h1')));
    });
  });
});