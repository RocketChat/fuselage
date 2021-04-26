const grammar = require('../grammar');
const { link, paragraph, plain } = require ('../utils');

var assert = require('assert');
describe('Link', function() {
  describe('[title](link)', function() {
    it('should return the token and the inner text', function() {
        const [tokens] = grammar.parse('[title](link)');
        assert.deepEqual(tokens, paragraph([link([plain('title') , plain('link')])]));
    });
  });
});