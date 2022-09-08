import { parse } from '../src';
import { emoji, bigEmoji, paragraph, plain, emojiUnicode } from '../src/utils';

test.each([
  [':smille: asd', [paragraph([emoji('smille'), plain(' asd')])]],
  [
    `:smille:
  :smille:
  `,
    [bigEmoji([emoji('smille'), emoji('smille')])],
  ],
  [
    'asdas :smille: asd',
    [paragraph([plain('asdas '), emoji('smille'), plain(' asd')])],
  ],
  [
    'normal emojis :smile: :smile: :smile:',
    [
      paragraph([
        plain('normal emojis '),
        emoji('smile'),
        plain(' '),
        emoji('smile'),
        plain(' '),
        emoji('smile'),
      ]),
    ],
  ],
  [
    ':smile::smile::smile:',
    [bigEmoji([emoji('smile'), emoji('smile'), emoji('smile')])],
  ],
  [
    ' :smile::smile::smile: ',
    [bigEmoji([emoji('smile'), emoji('smile'), emoji('smile')])],
  ],
  [
    '\n :smile::smile::smile: \n',
    [bigEmoji([emoji('smile'), emoji('smile'), emoji('smile')])],
  ],
  [
    ':smile:  :smile:  :smile:',
    [bigEmoji([emoji('smile'), emoji('smile'), emoji('smile')])],
  ],
  [':smile::smile:', [bigEmoji([emoji('smile'), emoji('smile')])]],
  [':smile:', [bigEmoji([emoji('smile')])]],
])('parses %p', (input, output) => {
  expect(parse(input)).toMatchObject(output);
});

test.each([
  ['😀', [bigEmoji([emojiUnicode('😀')])]],
  ['😃', [bigEmoji([emojiUnicode('😃')])]],
  ['🥵', [bigEmoji([emojiUnicode('🥵')])]],
  ['🧿', [bigEmoji([emojiUnicode('🧿')])]],
  ['🐶', [bigEmoji([emojiUnicode('🐶')])]],
  ['🍏', [bigEmoji([emojiUnicode('🍏')])]],
  ['⚽', [bigEmoji([emojiUnicode('⚽')])]],
  ['⚽️', [bigEmoji([emojiUnicode('⚽️')])]],
  ['👨‍👩‍👧‍👦', [bigEmoji([emojiUnicode('👨‍👩‍👧‍👦')])]],
  ['🚗', [bigEmoji([emojiUnicode('🚗')])]],
  ['⌚️', [bigEmoji([emojiUnicode('⌚️')])]],
  ['❤️', [bigEmoji([emojiUnicode('❤️')])]],
  ['🏳️', [bigEmoji([emojiUnicode('🏳️')])]],
  ['🧑🏾‍💻', [bigEmoji([emojiUnicode('🧑🏾‍💻')])]],
  ['🧑🏾‍💻🧑🏾‍💻', [bigEmoji([emojiUnicode('🧑🏾‍💻'), emojiUnicode('🧑🏾‍💻')])]],
  [
    '🧑🏾‍💻🧑🏾‍💻🧑🏾‍💻',
    [
      bigEmoji([
        emojiUnicode('🧑🏾‍💻'),
        emojiUnicode('🧑🏾‍💻'),
        emojiUnicode('🧑🏾‍💻'),
      ]),
    ],
  ],
  ['👆🏽', [bigEmoji([emojiUnicode('👆🏽')])]],
  ['👆🏽👆🏽', [bigEmoji([emojiUnicode('👆🏽'), emojiUnicode('👆🏽')])]],
  [
    '👆🏽👆🏽👆🏽',
    [bigEmoji([emojiUnicode('👆🏽'), emojiUnicode('👆🏽'), emojiUnicode('👆🏽')])],
  ],
  ['👆🏺', [bigEmoji([emojiUnicode('👆'), emojiUnicode('🏺')])]],
])('parses %p', (input, output) => {
  expect(parse(input)).toMatchObject(output);
});
