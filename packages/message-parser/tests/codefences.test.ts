import { parser } from '../src';
import { paragraph, plain, inlineCode, codeLine, code } from '../src/utils';

describe('One sigle line of content', () => {
  it('should return the token and the inner text', () => {
    const [tokens] = parser(`\`\`\`
code
\`\`\``);
    expect(tokens).toMatchObject(code([codeLine(plain('code'))]));
  });
});

describe('One sigle line of content', () => {
  it('should return the token and the inner text', () => {
    const tokens = parser(`  \`\`\`
code
\`\`\``);
    expect(tokens).toMatchObject([
      paragraph([plain(`  \`\`\``)]),
      paragraph([plain(`code`)]),
      paragraph([plain(`\`\`\``)]),
    ]);
  });
});

describe('One sigle line of content', () => {
  it('should return the token and the inner text', () => {
    const [tokens] = parser(`\`\`\`
code
code
\`\`\``);
    expect(tokens).toMatchObject(
      code([codeLine(plain(`code`)), codeLine(plain(`code`))])
    );
  });
});

describe('Other markups inside code', () => {
  it('should return the token and the inner text', () => {
    const [tokens] = parser(`\`\`\`
# code
**code**
\`\`\``);
    expect(tokens).toMatchObject(
      code([codeLine(plain(`# code`)), codeLine(plain(`**code**`))])
    );
  });
});

describe('Inline Code', () => {
  const snippet = `\`code\``;
  describe(snippet, () => {
    it('should return the token and the inner text', () => {
      const [tokens] = parser(snippet);
      expect(tokens).toMatchObject(paragraph([inlineCode(plain('code'))]));
    });
  });
});
