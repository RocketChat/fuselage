import { parser } from '../src';
import { paragraph, plain, codeLine, code } from '../src/utils';

test.each([
  [
    `\`\`\`
code





\`\`\``,
    [code([codeLine(plain('code'))])],
  ],
  [
    `\`\`\`
code


\`\`\``,
    [code([codeLine(plain('code'))])],
  ],
  [
    `\`\`\`
code
\`\`\``,
    [code([codeLine(plain('code'))])],
  ],
  [
    `\`\`\`
var a = "teste";
\`\`\``,
    [code([codeLine(plain('var a = "teste";'))])],
  ],
  [
    `\`\`\`javascript
code
\`\`\``,
    [code([codeLine(plain('code'))], 'javascript')],
  ],
  [
    `\`\`\`bash c
code
\`\`\``,
    [code([codeLine(plain('code'))], 'bash c')],
  ],
  [
    `  \`\`\`
code
\`\`\``,
    [
      paragraph([plain(`  \`\`\``)]),
      paragraph([plain(`code`)]),
      paragraph([plain(`\`\`\``)]),
    ],
  ],
  [
    `\`\`\`
code
code
\`\`\``,
    [code([codeLine(plain(`code`)), codeLine(plain(`code`))])],
  ],
  [
    `\`\`\`
# code
**code**
\`\`\``,
    [code([codeLine(plain(`# code`)), codeLine(plain(`**code**`))])],
  ],
])('parses %p', (input, output) => {
  expect(parser(input)).toMatchObject(output);
});
