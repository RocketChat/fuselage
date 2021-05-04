import { parser } from '../src';
import { inlineCode, paragraph, plain } from '../src/utils';

test.each([[`\`code\``, [paragraph([inlineCode(plain('code'))])]]])(
  'parses %p',
  (input, output) => {
    expect(parser(input)).toMatchObject(output);
  }
);
