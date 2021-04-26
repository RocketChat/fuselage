const grammar = require('../grammar');
const { bold, paragraph, plain } = require ('../utils');

var assert = require('assert');
describe('Bold', function() {
  describe('**bold**', function() {
    it('should return the token and the inner text', function() {
        const [tokens] = grammar.parse('**bold**', console.log);
        assert.deepEqual(tokens, paragraph([bold(plain('bold'))]));
    });
  });

  describe('pre**bold**post', function() {
    it('should return the token and the inner text', function() {
        const [tokens] = grammar.parse('pre**bold**post');
        assert.deepEqual(tokens, paragraph([plain('pre'), bold(plain('bold')), plain('post')]));
    });
  });

  describe(' pre**bold**post ', function() {
    it('should return the token and the inner text', function() {
        const [tokens] = grammar.parse(' pre**bold**post ');
        assert.deepEqual(tokens, paragraph([plain(' pre'), bold(plain('bold')), plain('post ')]));
    });
  });

});