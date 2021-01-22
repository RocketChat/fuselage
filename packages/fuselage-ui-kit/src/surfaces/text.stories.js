/* eslint-disable new-cap */
import { UiKitText } from '..';

export default {
  title: 'Surfaces/Text',
  argTypes: {
    blocks: { control: 'object' },
  },
};

const createStory = (blocks) => {
  const story = ({ blocks }) => UiKitText(blocks);
  story.args = {
    blocks,
  };

  return story;
};

export const PlainText = createStory([
  {
    type: 'plain_text',
    text: 'This is a plain text section block.',
    emoji: true,
  },
]);

export const Mrkdwn = createStory([
  {
    type: 'mrkdwn',
    text:
      'This is a mrkdwn section block :ghost: *this is bold*, and ~this is crossed out~, and <https://google.com|this is a link>',
  },
]);

export const AllElements = createStory([
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
]);

export const ConditionalBlock = createStory([
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
]);
