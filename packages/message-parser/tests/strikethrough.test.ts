import { parser } from '../src';
import { strike, paragraph, plain } from '../src/utils';

test.each([
  ['~~strike~~', [paragraph([strike([plain('strike')])])]],
  [
    'pre~~strike~~post',
    [paragraph([plain('pre'), strike([plain('strike')]), plain('post')])],
  ],
  [
    ' pre~~strike~~post ',
    [paragraph([plain(' pre'), strike([plain('strike')]), plain('post ')])],
  ],
])('parses %p', (input, output) => {
  expect(parser(input)).toMatchObject(output);
});
