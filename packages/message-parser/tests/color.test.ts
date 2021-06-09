import { parser } from '../src';
import { color, paragraph, plain } from '../src/utils';

test.each([
  ['color:#ccc', [paragraph([color(0xcc, 0xcc, 0xcc)])]],
  ['color:#cccc', [paragraph([color(0xcc, 0xcc, 0xcc, 0xcc)])]],
  ['color:#c7c7c7', [paragraph([color(0xc7, 0xc7, 0xc7)])]],
  ['color:#c7c7c7c7', [paragraph([color(0xc7, 0xc7, 0xc7, 0xc7)])]],
  ['color:#c7c7c7c7c7', [paragraph([plain('color:#c7c7c7c7c7')])]],
  ['color:#c7', [paragraph([plain('color:#c7')])]],
  ['color:#zzz', [paragraph([plain('color:#zzz')])]],
])('parses %p', (input, output) => {
  expect(parser(input)).toMatchObject(output);
});
