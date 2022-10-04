import { parse } from '../src';
import {
  italic,
  paragraph,
  plain,
  strike,
  bold,
  emoji,
  link,
  bigEmoji,
} from '../src/utils';

test.each([
  [
    '_[A brand new Gist](https://gist.github.com/24dddfa97bef58f46ac2ce0f80c58ba4)_',
    [
      paragraph([
        italic([
          link('https://gist.github.com/24dddfa97bef58f46ac2ce0f80c58ba4', [
            plain('A brand new Gist'),
          ]),
        ]),
      ]),
    ],
  ],
  ['__italic__', [paragraph([italic([plain('italic')])])]],
  ['__italic__non', [paragraph([plain('__italic__non')])]],
  ['pre__italic__post', [paragraph([plain('pre__italic__post')])]],
  [' pre__italic__post', [paragraph([plain(' pre__italic__post')])]],
  [
    ' pre__**~~boldstrikeitalic~~**__post ',
    [
      paragraph([
        plain(' pre__'),
        bold([strike([plain('boldstrikeitalic')])]),
        plain('__post '),
      ]),
    ],
  ],
  ['__', [paragraph([plain('__')])]],
  ['_ _', [paragraph([plain('_ _')])]],
  ['__ _', [paragraph([plain('__ _')])]],
  ['__ __', [paragraph([plain('__ __')])]],
  ['_ Hello_', [paragraph([italic([plain(' Hello')])])]],
  ['_Hello _', [paragraph([italic([plain('Hello ')])])]],
  [':custom_emoji_case:', [bigEmoji([emoji('custom_emoji_case')])]],
  ['_Hel lo_', [paragraph([italic([plain('Hel lo')])])]],
  ['_Hello_', [paragraph([italic([plain('Hello')])])]],
  ['__Hello__', [paragraph([italic([plain('Hello')])])]],
  ['__Hello_', [paragraph([plain('_'), italic([plain('Hello')])])]],
  ['_Hello__', [paragraph([italic([plain('Hello')]), plain('_')])]],
  ['_Hello', [paragraph([plain('_Hello')])]],
  ['Hello_', [paragraph([plain('Hello_')])]],
  ['He_llo', [paragraph([plain('He_llo')])]],
  [
    '___Hello___',
    [paragraph([plain('_'), italic([plain('Hello')]), plain('_')])],
  ],
  ['___Hello__', [paragraph([plain('_'), italic([plain('Hello')])])]],
  [
    '_Hello_ this is dog',
    [paragraph([italic([plain('Hello')]), plain(` this is dog`)])],
  ],
  [
    'Rocket cat says _Hello_',
    [paragraph([plain(`Rocket cat says `), italic([plain('Hello')])])],
  ],
  [
    'He said _Hello_ to her',
    [
      paragraph([
        plain(`He said `),
        italic([plain('Hello')]),
        plain(` to her`),
      ]),
    ],
  ],
  [
    '__Hello__ this is dog',
    [paragraph([italic([plain('Hello')]), plain(` this is dog`)])],
  ],
  [
    'Rocket cat says __Hello__',
    [paragraph([plain(`Rocket cat says `), italic([plain('Hello')])])],
  ],
  [
    'He said __Hello__ to her',
    [
      paragraph([
        plain(`He said `),
        italic([plain('Hello')]),
        plain(` to her`),
      ]),
    ],
  ],
  ['text_hello_text', [paragraph([plain('text_hello_text')])]],
  ['_hello_text', [paragraph([plain('_hello_text')])]],
  ['text_hello_', [paragraph([plain('text_hello_')])]],
])('parses %p', (input, output) => {
  expect(parse(input)).toMatchObject(output);
});
