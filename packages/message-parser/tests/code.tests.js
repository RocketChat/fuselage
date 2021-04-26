const grammar = require('../grammar');
const { code, inlineCode, paragraph, plain } = require ('../utils');

var assert = require('assert');
describe('Code', function() {
    describe('Block Code', function() {
        const snippet = `\`\`\`
code
\`\`\``
        describe(snippet, function() {
            it('should return the token and the inner text', function() {
                const [tokens] = grammar.parse(snippet);
                assert.deepEqual(tokens, code('code'));
            });
        });
    });
    describe('Inline Code', function() {
        const snippet = `\`code\``
        describe(snippet, function() {
            it('should return the token and the inner text', function() {
                const [tokens] = grammar.parse(snippet);
                assert.deepEqual(tokens, paragraph([inlineCode(plain('code'))]));
            });
        });
    });
});