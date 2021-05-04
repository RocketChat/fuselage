import { parser } from '../src';
import { italic, paragraph, plain, strike, bold } from '../src/utils';

test.each([
  ['__italic__', [paragraph([italic([plain('italic')])])]],
  [
    'pre__italic__post',
    [paragraph([plain('pre'), italic([plain('italic')]), plain('post')])],
  ],
  [
    ' pre__italic__post ',
    [paragraph([plain(' pre'), italic([plain('italic')]), plain('post ')])],
  ],
  [
    ' pre__**~~boldstrikeitalic~~**__post ',
    [
      paragraph([
        plain(' pre'),
        italic([bold([strike([plain('boldstrikeitalic')])])]),
        plain('post '),
      ]),
    ],
  ],
])('parses %p', (input, output) => {
  expect(parser(input)).toMatchObject(output);
});
