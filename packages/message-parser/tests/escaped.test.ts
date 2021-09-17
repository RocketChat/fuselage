import { parser } from '../src';
import { paragraph, plain, bold } from '../src/utils';

test.each([
  [
    '\\*escaped as*bold*escaped*',
    [
      paragraph([
        plain('*escaped as'),
        bold([plain('bold')]),
        plain('escaped*'),
      ]),
    ],
  ],
  ['\\*not bold*', [paragraph([plain('*not bold*')])]],
  [
    '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~'.split('').join('\\'),
    [paragraph([plain('!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~')])],
  ],
  ['\\*not emphasized*', [paragraph([plain('*not emphasized*')])]],
  ['\\<br/> not a tag', [paragraph([plain('<br/> not a tag')])]],
  ['\\[not a link](/foo)', [paragraph([plain('[not a link](/foo)')])]],
  ['\\`not code`', [paragraph([plain('`not code`')])]],
  ['1\\. not a list', [paragraph([plain('1. not a list')])]],
  ['\\* not a list', [paragraph([plain('* not a list')])]],
  ['\\# not a heading', [paragraph([plain('# not a heading')])]],
  [
    '\\[foo]: /url "not a reference"',
    [paragraph([plain('[foo]: /url "not a reference"')])],
  ],
  [
    '\\&ouml; not a character entity',
    [paragraph([plain('&ouml; not a character entity')])],
  ],
])('parses %p', (input, output) => {
  expect(parser(input)).toMatchObject(output);
});
