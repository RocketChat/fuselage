import assert from 'assert';

import { parser } from '../src';
import { paragraph, plain, inlineCode, code } from '../src/utils';

describe('Blockcode', () => {
  describe('One sigle line of content', () => {
    it('should return the token and the inner text', () => {
      const [tokens] = parser(`\`\`\`
        code
        \`\`\``);
      assert.deepEqual(tokens, code([plain('code')]));
    });
  });

  describe('One sigle line of content', () => {
    it('should return the token and the inner text', () => {
      const [tokens] = parser(`\`\`\`
code
code
\`\`\``);
      assert.deepEqual(
        tokens,
        code([
          plain(`code
code`),
        ])
      );
    });
  });
  describe('Inline Code', () => {
    const snippet = `\`code\``;
    describe(snippet, () => {
      it('should return the token and the inner text', () => {
        const [tokens] = parser(snippet);
        assert.deepEqual(tokens, paragraph([inlineCode(plain('code'))]));
      });
    });
  });
});
