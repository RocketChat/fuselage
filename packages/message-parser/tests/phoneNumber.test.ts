import { parser } from '../src';
import { link, paragraph, plain, bold } from '../src/utils';

test.each([
  ['+07563546725', [paragraph([link('+07563546725')])]],
  ['+075-63546725', [paragraph([link('+075-63546725')])]],
  ['+(075)-63546725', [paragraph([link('+(075)-63546725')])]],
  ['+(075)63546725', [paragraph([link('+(075)63546725')])]],
  [
    '[here](+(075)63546725)',
    [paragraph([link('+(075)63546725', plain('here'))])],
  ],
  [
    '[**here**](+(075)63546725)',
    [paragraph([link('+(075)63546725', bold([plain('here')]))])],
  ],
])('parses %p', (input, output) => {
  expect(parser(input)).toMatchObject(output);
});
