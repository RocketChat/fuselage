import { uiKitText, UiKitParserText, BLOCK_CONTEXT } from '.';

class TestParser extends UiKitParserText {
  plainText = (...args: unknown[]): any => args

  mrkdwn = (...args: unknown[]): any => args
}

const parser = new TestParser();
const parse = uiKitText(parser);

it('renders plain_text', () => {
  const payload = [
    {
      type: 'plain_text',
      text: 'This is a plain text section block.',
      emoji: true,
    },
  ];
  expect(parse(payload)).toStrictEqual([
    [
      {
        type: 'plain_text',
        text: 'This is a plain text section block.',
        emoji: true,
      },
      BLOCK_CONTEXT.BLOCK,
      0,
    ],
  ]);
});

it('renders mrkdwn', () => {
  const payload = [
    {
      type: 'mrkdwn',
      text: 'This is a mrkdwn section block :ghost: *this is bold*, and ~this is crossed out~, and <https://google.com|this is a link>',
    },
  ];
  expect(parse(payload)).toStrictEqual([
    [
      {
        type: 'mrkdwn',
        text: 'This is a mrkdwn section block :ghost: *this is bold*, and ~this is crossed out~, and <https://google.com|this is a link>',
      },
      BLOCK_CONTEXT.BLOCK,
      0,
    ],
  ]);
});

it('renders all elements', () => {
  const payload = [
    {
      type: 'plain_text',
      text: 'This is a plain text section block.',
      emoji: true,
    },
    {
      type: 'mrkdwn',
      text: 'This is a mrkdwn section block :ghost: *this is bold*, and ~this is crossed out~, and <https://google.com|this is a link>',
    },
  ];
  expect(parse(payload)).toStrictEqual([
    [
      {
        type: 'plain_text',
        text: 'This is a plain text section block.',
        emoji: true,
      },
      BLOCK_CONTEXT.BLOCK,
      0,
    ],
    [
      {
        type: 'mrkdwn',
        text: 'This is a mrkdwn section block :ghost: *this is bold*, and ~this is crossed out~, and <https://google.com|this is a link>',
      },
      BLOCK_CONTEXT.BLOCK,
      1,
    ],
  ]);
});
