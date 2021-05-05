import { parser } from '../src';
import { emoji, bigEmoji, paragraph, plain } from '../src/utils';

test.each([
  [
    'normal emojis :smile::smile::smile:',
    [
      paragraph([
        plain('normal emojis '),
        emoji('smile'),
        emoji('smile'),
        emoji('smile'),
      ]),
    ],
  ],
  [
    ':smile::smile::smile:',
    [bigEmoji([emoji('smile'), emoji('smile'), emoji('smile')])],
  ],
  [
    ':smile:  :smile:  :smile:',
    [bigEmoji([emoji('smile'), emoji('smile'), emoji('smile')])],
  ],
  [':smile::smile:', [bigEmoji([emoji('smile'), emoji('smile')])]],
  [':smile:', [bigEmoji([emoji('smile')])]],
])('parses %p', (input, output) => {
  expect(parser(input)).toMatchObject(output);
});
