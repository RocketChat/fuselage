import { parser } from '../src';
import { bigEmoji, paragraph, plain, emoticon } from '../src/utils';

test.each([
  ['=) asd', [paragraph([emoticon('=)', 'slight_smile'), plain(' asd')])]],
  [
    `=)
  =)
  `,
    [
      bigEmoji([
        emoticon('=)', 'slight_smile'),
        emoticon('=)', 'slight_smile'),
      ]),
    ],
  ],
  [
    'asdas =) asd',
    [
      paragraph([
        plain('asdas '),
        emoticon('=)', 'slight_smile'),
        plain(' asd'),
      ]),
    ],
  ],
  [
    'normal emojis :):):)',
    [
      paragraph([
        plain('normal emojis '),
        emoticon(':)', 'slight_smile'),
        emoticon(':)', 'slight_smile'),
        emoticon(':)', 'slight_smile'),
      ]),
    ],
  ],
  [
    ':):):)',
    [
      bigEmoji([
        emoticon(':)', 'slight_smile'),
        emoticon(':)', 'slight_smile'),
        emoticon(':)', 'slight_smile'),
      ]),
    ],
  ],
  [
    ' :):):) ',
    [
      bigEmoji([
        emoticon(':)', 'slight_smile'),
        emoticon(':)', 'slight_smile'),
        emoticon(':)', 'slight_smile'),
      ]),
    ],
  ],
  [
    '\n :):):) \n',
    [
      bigEmoji([
        emoticon(':)', 'slight_smile'),
        emoticon(':)', 'slight_smile'),
        emoticon(':)', 'slight_smile'),
      ]),
    ],
  ],
  [
    ':)  :)  :)',
    [
      bigEmoji([
        emoticon(':)', 'slight_smile'),
        emoticon(':)', 'slight_smile'),
        emoticon(':)', 'slight_smile'),
      ]),
    ],
  ],
  [
    ':):)',
    [
      bigEmoji([
        emoticon(':)', 'slight_smile'),
        emoticon(':)', 'slight_smile'),
      ]),
    ],
  ],
  [':)', [bigEmoji([emoticon(':)', 'slight_smile')])]],
])('parses %p', (input, output) => {
  expect(parser(input, { emoticons: true })).toMatchObject(output);
});
