import { uiKitText, UiKitParserText, BLOCK_CONTEXT } from '.';

class TestParser extends UiKitParserText {
  plainText = (element: any, context: any, index: any): any => ({
    component: 'text',
    props: {
      key: index,
      children: element.text,
      emoji: element.emoji,
      block: context === BLOCK_CONTEXT.BLOCK,
    },
  });

  mrkdwn = (element: any, context: any, index: any): any => ({
    component: 'markdown',
    props: {
      key: index,
      children: element.text,
      verbatim: Boolean(element.verbatim),
      block: context === BLOCK_CONTEXT.BLOCK,
    },
  });
}

const parser = new TestParser();
const parse = uiKitText(parser);

const conditionalParse = uiKitText(parser, {
  engine: 'rocket.chat',
});

it('renders plain_text', () => {
  const payload = [
    {
      type: 'plain_text',
      text: 'This is a plain text section block.',
      emoji: true,
    },
  ];
  expect(parse(payload)).toStrictEqual([
    {
      component: 'text',
      props: {
        key: 0,
        children: 'This is a plain text section block.',
        emoji: true,
        block: true,
      },
    },
  ]);
});

it('renders mrkdwn', () => {
  const payload = [
    {
      type: 'mrkdwn',
      text:
        'This is a mrkdwn section block :ghost: *this is bold*, and ~this is crossed out~, and <https://google.com|this is a link>',
    },
  ];
  expect(parse(payload)).toStrictEqual([
    {
      component: 'markdown',
      props: {
        key: 0,
        children:
          'This is a mrkdwn section block :ghost: *this is bold*, and ~this is crossed out~, and <https://google.com|this is a link>',
        verbatim: false,
        block: true,
      },
    },
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
      text:
        'This is a mrkdwn section block :ghost: *this is bold*, and ~this is crossed out~, and <https://google.com|this is a link>',
    },
  ];
  expect(parse(payload)).toStrictEqual([
    {
      component: 'text',
      props: {
        key: 0,
        children: 'This is a plain text section block.',
        emoji: true,
        block: true,
      },
    },
    {
      component: 'markdown',
      props: {
        key: 1,
        children:
          'This is a mrkdwn section block :ghost: *this is bold*, and ~this is crossed out~, and <https://google.com|this is a link>',
        verbatim: false,
        block: true,
      },
    },
  ]);
});

it('evaluates conditional block', () => {
  const blocks = [
    {
      type: 'conditional',
      when: {
        engine: ['rocket.chat'],
      },
      render: [
        {
          type: 'plain_text',
          text: 'This is a plain text section block.',
          emoji: true,
        },
        {
          type: 'mrkdwn',
          text:
            'This is a mrkdwn section block :ghost: *this is bold*, and ~this is crossed out~, and <https://google.com|this is a link>',
        },
      ],
    },
  ];

  expect(parse(blocks)).toStrictEqual([]);

  expect(conditionalParse(blocks)).toStrictEqual([
    {
      component: 'text',
      props: {
        key: 0,
        children: 'This is a plain text section block.',
        emoji: true,
        block: true,
      },
    },
    {
      component: 'markdown',
      props: {
        key: 1,
        children:
          'This is a mrkdwn section block :ghost: *this is bold*, and ~this is crossed out~, and <https://google.com|this is a link>',
        verbatim: false,
        block: true,
      },
    },
  ]);
});
