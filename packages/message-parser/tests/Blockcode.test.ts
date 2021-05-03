import assert from 'assert';

import { parser } from '../src';
import { bold, paragraph, plain, inlineCode, codeLine, code } from '../src/utils';

describe('Blockcode', () => {
  describe('One sigle line of content', () => {
    it('should return the token and the inner text', () => {
      const [tokens] = parser(`\`\`\`
code
\`\`\``);
      assert.deepEqual(tokens, code([codeLine(plain('code'))]));
    });
  });

  describe('One sigle line of content', function () {
    it('should return the token and the inner text', function () {
      const tokens = parser(`  \`\`\`
code
\`\`\``);
      assert.deepEqual(
        tokens,
        [
          paragraph([
            plain(`  \`\`\``)
          ]),
          paragraph([
            plain(`code`)
          ]),
          paragraph([
            plain(`\`\`\``)
          ]),
        ]
      );
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
          codeLine(plain(`code`)),
          codeLine(plain(`code`)),
        ])
      );
    });
  });

  describe('Other markups inside code', function () {
    it('should return the token and the inner text', function () {
      const [tokens] = parser(`\`\`\`
# code
**code**
\`\`\``);
      assert.deepEqual(
        tokens,
        code([
          codeLine(plain(`# code`)),
          codeLine(plain(`**code**`)),
        ])
      );
    });
  });

  describe('Inline Code', function () {
    const snippet = `\`code\``;
    describe(snippet, () => {
      it('should return the token and the inner text', () => {
        const [tokens] = parser(snippet);
        assert.deepEqual(tokens, paragraph([inlineCode(plain('code'))]));
      });
    });
  });
});
