const grammar = require('../grammar');
const { italic, paragraph, plain } = require ('../utils');

var assert = require('assert');
describe('Italic', function() {
  describe('*italic*', function() {
    it('should return the token and the inner text', function() {
        const [tokens] = grammar.parse('*italic*');
        assert.deepEqual(tokens, paragraph([italic(plain('italic'))]));
    });
  });

  describe('pre*italic*post', function() {
    it('should return the token and the inner text', function() {
        const [tokens] = grammar.parse('pre*italic*post');
        assert.deepEqual(tokens, paragraph([plain('pre'), italic(plain('italic')), plain('post')]));
    });
  });

  describe(' pre*italic*post ', function() {
    it('should return the token and the inner text', function() {
        const [tokens] = grammar.parse(' pre*italic*post ');
        assert.deepEqual(tokens, paragraph([plain(' pre'), italic(plain('italic')), plain('post ')]));
    });
  });

});