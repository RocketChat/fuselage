import { parser } from '../src';
import { bold, paragraph, plain, italic, strike } from '../src/utils';

test.each([
  ['**bold**', [paragraph([bold([plain('bold')])])]],
  ['** bold**', [paragraph([bold([plain(' bold')])])]],
  ['** bold **', [paragraph([bold([plain(' bold ')])])]],
  ['** bo ld **', [paragraph([bold([plain(' bo ld ')])])]],
  ['pre**bold**', [paragraph([plain('pre'), bold([plain('bold')])])]],
  ['**bold**pos', [paragraph([bold([plain('bold')]), plain('pos')])]],
  [
    '**bold****bold**',
    [paragraph([bold([plain('bold')]), bold([plain('bold')])])],
  ],
  [
    '**bold** **bold**',
    [paragraph([bold([plain('bold')]), plain(' '), bold([plain('bold')])])],
  ],
  [
    '**bold** __italic__',
    [paragraph([bold([plain('bold')]), plain(' '), italic([plain('italic')])])],
  ],
  ['**__italicbold__**', [paragraph([bold([italic([plain('italicbold')])])])]],
  [
    'plain **__italicbold__**',
    [paragraph([plain('plain '), bold([italic([plain('italicbold')])])])],
  ],
  [
    'plain **__~~strikeitalicbold~~__**',
    [
      paragraph([
        plain('plain '),
        bold([italic([strike([plain('strikeitalicbold')])])]),
      ]),
    ],
  ],
])('parses %p', (input, output) => {
  expect(parser(input)).toMatchObject(output);
});
