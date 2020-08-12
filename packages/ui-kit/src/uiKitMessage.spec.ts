import { uiKitMessage, UiKitParserMessage } from '.';

const parser = new class extends UiKitParserMessage {}();
const parse = uiKitMessage(parser);

describe('section', () => {
  it('plain_text', () => {
    const payload = [
      {
        type: 'section',
        text: {
          type: 'plain_text',
          text: 'This is a plain text section block.',
          emoji: true,
        },
      },
    ];
    expect(parse(payload)).toStrictEqual([]);
  });

  it('mrkdwn', () => {
    const payload = [
      {
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: 'This is a mrkdwn section block :ghost: *this is bold*, and ~this is crossed out~, and <https://google.com|this is a link>',
        },
      },
    ];
    expect(parse(payload)).toStrictEqual([]);
  });

  it('text fields', () => {
    const payload = [
      {
        type: 'section',
        fields: [
          {
            type: 'plain_text',
            text: '*this is plain_text text*',
            emoji: true,
          },
          {
            type: 'plain_text',
            text: '*this is plain_text text*',
            emoji: true,
          },
          {
            type: 'plain_text',
            text: '*this is plain_text text*',
            emoji: true,
          },
          {
            type: 'plain_text',
            text: '*this is plain_text text*',
            emoji: true,
          },
          {
            type: 'plain_text',
            text: '*this is plain_text text*',
            emoji: true,
          },
        ],
      },
    ];
    expect(parse(payload)).toStrictEqual([]);
  });

  it('users select', () => {
    const payload = [
      {
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: 'Test block with users select',
        },
        accessory: {
          type: 'users_select',
          placeholder: {
            type: 'plain_text',
            text: 'Select a user',
            emoji: true,
          },
        },
      },
    ];
    expect(parse(payload)).toStrictEqual([]);
  });

  it('multi conversations select', () => {
    const payload = [
      {
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: 'Pick an item from the dropdown list',
        },
        accessory: {
          type: 'static_select',
          placeholder: {
            type: 'plain_text',
            text: 'Select an item',
            emoji: true,
          },
          options: [
            {
              text: {
                type: 'plain_text',
                text: '*this is plain_text text*',
                emoji: true,
              },
              value: 'value-0',
            },
            {
              text: {
                type: 'plain_text',
                text: '*this is plain_text text*',
                emoji: true,
              },
              value: 'value-1',
            },
            {
              text: {
                type: 'plain_text',
                text: '*this is plain_text text*',
                emoji: true,
              },
              value: 'value-2',
            },
          ],
        },
      },
    ];
    expect(parse(payload)).toStrictEqual([]);
  });

  it('button', () => {
    const payload = [
      {
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: 'This is a section block with a button.',
        },
        accessory: {
          type: 'button',
          text: {
            type: 'plain_text',
            text: 'Click Me',
            emoji: true,
          },
          value: 'click_me_123',
        },
      },
    ];
    expect(parse(payload)).toStrictEqual([]);
  });

  it('image', () => {
    const payload = [
      {
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: 'This is a section block with an accessory image.',
        },
        accessory: {
          type: 'image',
          image_url: 'https://pbs.twimg.com/profile_images/625633822235693056/lNGUneLX_400x400.jpg',
          alt_text: 'cute cat',
        },
      },
    ];
    expect(parse(payload)).toStrictEqual([]);
  });

  it('overflow', () => {
    const payload = [
      {
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: 'This is a section block with an overflow menu.',
        },
        accessory: {
          type: 'overflow',
          options: [
            {
              text: {
                type: 'plain_text',
                text: '*this is plain_text text*',
                emoji: true,
              },
              value: 'value-0',
            },
            {
              text: {
                type: 'plain_text',
                text: '*this is plain_text text*',
                emoji: true,
              },
              value: 'value-1',
            },
            {
              text: {
                type: 'plain_text',
                text: '*this is plain_text text*',
                emoji: true,
              },
              value: 'value-2',
            },
            {
              text: {
                type: 'plain_text',
                text: '*this is plain_text text*',
                emoji: true,
              },
              value: 'value-3',
            },
            {
              text: {
                type: 'plain_text',
                text: '*this is plain_text text*',
                emoji: true,
              },
              value: 'value-4',
            },
          ],
        },
      },
    ];
    expect(parse(payload)).toStrictEqual([]);
  });

  it('datepicker', () => {
    const payload = [
      {
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: 'Pick a date for the deadline.',
        },
        accessory: {
          type: 'datepicker',
          initial_date: '1990-04-28',
          placeholder: {
            type: 'plain_text',
            text: 'Select a date',
            emoji: true,
          },
        },
      },
    ];
    expect(parse(payload)).toStrictEqual([]);
  });
});

describe('actions', () => {
  it('all selects', () => {
    const payload = [
      {
        type: 'actions',
        elements: [
          {
            type: 'conversations_select',
            placeholder: {
              type: 'plain_text',
              text: 'Select a conversation',
              emoji: true,
            },
          },
          {
            type: 'channels_select',
            placeholder: {
              type: 'plain_text',
              text: 'Select a channel',
              emoji: true,
            },
          },
          {
            type: 'users_select',
            placeholder: {
              type: 'plain_text',
              text: 'Select a user',
              emoji: true,
            },
          },
          {
            type: 'static_select',
            placeholder: {
              type: 'plain_text',
              text: 'Select an item',
              emoji: true,
            },
            options: [
              {
                text: {
                  type: 'plain_text',
                  text: '*this is plain_text text*',
                  emoji: true,
                },
                value: 'value-0',
              },
              {
                text: {
                  type: 'plain_text',
                  text: '*this is plain_text text*',
                  emoji: true,
                },
                value: 'value-1',
              },
              {
                text: {
                  type: 'plain_text',
                  text: '*this is plain_text text*',
                  emoji: true,
                },
                value: 'value-2',
              },
            ],
          },
        ],
      },
    ];
    expect(parse(payload)).toStrictEqual([]);
  });

  it('filtered conversations select', () => {
    const payload = [
      {
        type: 'actions',
        elements: [
          {
            type: 'conversations_select',
            placeholder: {
              type: 'plain_text',
              text: 'Select private conversation',
              emoji: true,
            },
            filter: {
              include: [
                'private',
              ],
            },
          },
        ],
      },
    ];
    expect(parse(payload)).toStrictEqual([]);
  });

  it('selects with initial options', () => {
    const payload = [
      {
        type: 'actions',
        elements: [
          {
            type: 'conversations_select',
            placeholder: {
              type: 'plain_text',
              text: 'Select a conversation',
              emoji: true,
            },
            initial_conversation: 'D123',
          },
          {
            type: 'users_select',
            placeholder: {
              type: 'plain_text',
              text: 'Select a user',
              emoji: true,
            },
            initial_user: 'U123',
          },
          {
            type: 'channels_select',
            placeholder: {
              type: 'plain_text',
              text: 'Select a channel',
              emoji: true,
            },
            initial_channel: 'C123',
          },
        ],
      },
    ];
    expect(parse(payload)).toStrictEqual([]);
  });

  it('button', () => {
    const payload = [
      {
        type: 'actions',
        elements: [
          {
            type: 'button',
            text: {
              type: 'plain_text',
              text: 'Click Me',
              emoji: true,
            },
            value: 'click_me_123',
          },
        ],
      },
    ];
    expect(parse(payload)).toStrictEqual([]);
  });

  it('datepicker', () => {
    const payload = [
      {
        type: 'actions',
        elements: [
          {
            type: 'datepicker',
            initial_date: '1990-04-28',
            placeholder: {
              type: 'plain_text',
              text: 'Select a date',
              emoji: true,
            },
          },
          {
            type: 'datepicker',
            initial_date: '1990-04-28',
            placeholder: {
              type: 'plain_text',
              text: 'Select a date',
              emoji: true,
            },
          },
        ],
      },
    ];
    expect(parse(payload)).toStrictEqual([]);
  });
});

describe('divider', () => {
  it('plain', () => {
    const payload = [
      {
        type: 'divider',
      },
    ];
    expect(parse(payload)).toStrictEqual([]);
  });
});

describe('image', () => {
  it('title', () => {
    const payload = [
      {
        type: 'image',
        title: {
          type: 'plain_text',
          text: 'I Need a Marg',
          emoji: true,
        },
        image_url: 'https://assets3.thrillist.com/v1/image/1682388/size/tl-horizontal_main.jpg',
        alt_text: 'marg',
      },
    ];
    expect(parse(payload)).toStrictEqual([]);
  });

  it('no title', () => {
    const payload = [
      {
        type: 'image',
        image_url: 'https://i1.wp.com/thetempest.co/wp-content/uploads/2017/08/The-wise-words-of-Michael-Scott-Imgur-2.jpg?w=1024&ssl=1',
        alt_text: 'inspiration',
      },
    ];
    expect(parse(payload)).toStrictEqual([]);
  });
});

describe('context', () => {
  it('plain text', () => {
    const payload = [
      {
        type: 'context',
        elements: [
          {
            type: 'plain_text',
            text: 'Author: K A Applegate',
            emoji: true,
          },
        ],
      },
    ];
    expect(parse(payload)).toStrictEqual([]);
  });

  it('mrkdwn', () => {
    const payload = [
      {
        type: 'context',
        elements: [
          {
            type: 'image',
            image_url: 'https://pbs.twimg.com/profile_images/625633822235693056/lNGUneLX_400x400.jpg',
            alt_text: 'cute cat',
          },
          {
            type: 'mrkdwn',
            text: '*Cat* has approved this message.',
          },
        ],
      },
    ];
    expect(parse(payload)).toStrictEqual([]);
  });

  it('text and images', () => {
    const payload = [
      {
        type: 'context',
        elements: [
          {
            type: 'mrkdwn',
            text: '*This* is :smile: markdown',
          },
          {
            type: 'image',
            image_url: 'https://pbs.twimg.com/profile_images/625633822235693056/lNGUneLX_400x400.jpg',
            alt_text: 'cute cat',
          },
          {
            type: 'image',
            image_url: 'https://pbs.twimg.com/profile_images/625633822235693056/lNGUneLX_400x400.jpg',
            alt_text: 'cute cat',
          },
          {
            type: 'image',
            image_url: 'https://pbs.twimg.com/profile_images/625633822235693056/lNGUneLX_400x400.jpg',
            alt_text: 'cute cat',
          },
          {
            type: 'plain_text',
            text: 'Author: K A Applegate',
            emoji: true,
          },
        ],
      },
    ];
    expect(parse(payload)).toStrictEqual([]);
  });
});

describe('header', () => {
  it('example', () => {
    const payload = [
      {
        type: 'header',
        text: {
          type: 'plain_text',
          text: 'This is a header block',
          emoji: true,
        },
      },
    ];
    expect(parse(payload)).toStrictEqual([]);
  });
});
