import { parse } from '../src';
import { inlineCode, paragraph, plain } from '../src/utils';

test.each([
  [
    '`[asd](https://localhost)`',
    [paragraph([inlineCode(plain('[asd](https://localhost)'))])],
  ],
  [`\`code\``, [paragraph([inlineCode(plain('code'))])]],
])('parses %p', (input, output) => {
  expect(parse(input)).toMatchObject(output);
});
