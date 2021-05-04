import { parser } from '../src';
import { color, paragraph, plain } from '../src/utils';

test.each([
  ['color:#ccc', [paragraph([color('#ccc')])]],
  ['color:#cccc', [paragraph([color('#cccc')])]],
  ['color:#c7c7c7', [paragraph([color('#c7c7c7')])]],
  ['color:#c7c7c7c7', [paragraph([color('#c7c7c7c7')])]],
  ['color:#c7c7c7c7c7', [paragraph([plain('color:#c7c7c7c7c7')])]],
  ['color:#c7', [paragraph([plain('color:#c7')])]],
])('parses %p', (input, output) => {
  expect(parser(input)).toMatchObject(output);
});
