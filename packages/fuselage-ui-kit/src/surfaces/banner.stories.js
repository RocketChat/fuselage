/* eslint-disable new-cap */
import { Banner, Icon } from '@rocket.chat/fuselage';
import { action } from '@storybook/addon-actions';
import React from 'react';

import { kitContext, UiKitBanner } from '..';

export default {
  title: 'Surfaces/Banner',
  argTypes: {
    payload: { control: 'object' },
  },
  decorators: [
    (storyFn) => (
      <kitContext.Provider
        value={{
          action: action('action'),
          state: action('state'),
          appId: 'core',
          errors: {},
        }}
      >
        {storyFn()}
      </kitContext.Provider>
    ),
  ],
};

const createStory = (payload) => {
  const story = ({ payload }) => (
    <Banner icon={<Icon name='info' size='x20' />} closeable>
      {UiKitBanner(payload)}
    </Banner>
  );
  story.args = {
    payload,
  };

  return story;
};

export const Divider = createStory([
  {
    type: 'divider',
  },
]);

export const SectionWithPlainText = createStory([
  {
    type: 'section',
    text: {
      type: 'plain_text',
      text: 'This is a plain text section block.',
      emoji: true,
    },
  },
]);

export const SectionWithMrkdwn = createStory([
  {
    type: 'section',
    text: {
      type: 'mrkdwn',
      text:
        'This is a mrkdwn section block :ghost: *this is bold*, and ~this is crossed out~, and <https://google.com|this is a link>',
    },
  },
]);

export const SectionWithTextFields = createStory([
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
]);

export const SectionWithButtonAccessory = createStory([
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
]);

export const SectionWithImageAccessory = createStory([
  {
    type: 'section',
    text: {
      type: 'mrkdwn',
      text: 'This is a section block with an accessory image.',
    },
    accessory: {
      type: 'image',
      imageUrl:
        'https://pbs.twimg.com/profile_images/625633822235693056/lNGUneLX_400x400.jpg',
      altText: 'cute cat',
    },
  },
]);

export const SectionWithOverflowMenuAccessory = createStory([
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
]);

export const SectionWithDatePickerAccessory = createStory([
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
]);

export const ImageWithTitle = createStory([
  {
    type: 'image',
    title: {
      type: 'plain_text',
      text: 'I Need a Marg',
      emoji: true,
    },
    imageUrl:
      'https://assets3.thrillist.com/v1/image/1682388/size/tl-horizontal_main.jpg',
    altText: 'marg',
  },
]);

export const ImageWithoutTitle = createStory([
  {
    type: 'image',
    imageUrl:
      'https://i1.wp.com/thetempest.co/wp-content/uploads/2017/08/The-wise-words-of-Michael-Scott-Imgur-2.jpg?w=1024&ssl=1',
    altText: 'inspiration',
  },
]);

export const ActionsWithAllSelects = createStory([
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
]);

export const ActionsWithFilteredConversationsSelect = createStory([
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
          include: ['private'],
        },
      },
    ],
  },
]);

export const ActionsWithInitializedSelects = createStory([
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
        initialConversation: 'D123',
      },
      {
        type: 'users_select',
        placeholder: {
          type: 'plain_text',
          text: 'Select a user',
          emoji: true,
        },
        initialUser: 'U123',
      },
      {
        type: 'channels_select',
        placeholder: {
          type: 'plain_text',
          text: 'Select a channel',
          emoji: true,
        },
        initialChannel: 'C123',
      },
    ],
  },
]);

export const ActionsWithButton = createStory([
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
]);

export const ActionsWithDatePicker = createStory([
  {
    type: 'actions',
    elements: [
      {
        type: 'datepicker',
        initialDate: '1990-04-28',
        placeholder: {
          type: 'plain_text',
          text: 'Select a date',
          emoji: true,
        },
      },
      {
        type: 'datepicker',
        initialDate: '1990-04-28',
        placeholder: {
          type: 'plain_text',
          text: 'Select a date',
          emoji: true,
        },
      },
    ],
  },
]);

export const ContextWithPlainText = createStory([
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
]);

export const ContextWithMrkdwn = createStory([
  {
    type: 'context',
    elements: [
      {
        type: 'image',
        imageUrl:
          'https://pbs.twimg.com/profile_images/625633822235693056/lNGUneLX_400x400.jpg',
        altText: 'cute cat',
      },
      {
        type: 'mrkdwn',
        text: '*Cat* has approved this message.',
      },
    ],
  },
]);

export const ContextWithTextAndImages = createStory([
  {
    type: 'context',
    elements: [
      {
        type: 'mrkdwn',
        text: '*This* is :smile: markdown',
      },
      {
        type: 'image',
        imageUrl:
          'https://pbs.twimg.com/profile_images/625633822235693056/lNGUneLX_400x400.jpg',
        altText: 'cute cat',
      },
      {
        type: 'image',
        imageUrl:
          'https://pbs.twimg.com/profile_images/625633822235693056/lNGUneLX_400x400.jpg',
        altText: 'cute cat',
      },
      {
        type: 'image',
        imageUrl:
          'https://pbs.twimg.com/profile_images/625633822235693056/lNGUneLX_400x400.jpg',
        altText: 'cute cat',
      },
      {
        type: 'plain_text',
        text: 'Author: K A Applegate',
        emoji: true,
      },
    ],
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
        type: 'section',
        text: {
          type: 'plain_text',
          text: 'This is a plain text section block.',
          emoji: true,
        },
      },
    ],
  },
]);
