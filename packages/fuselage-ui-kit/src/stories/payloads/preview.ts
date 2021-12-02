// import * as UiKit from '@rocket.chat/ui-kit';
import { PreviewBlock } from '@rocket.chat/ui-kit/dist/cjs/blocks/layout/PreviewBlock';

import img from './img';

export const preview: PreviewBlock[] = [
  {
    type: 'preview',
    title: [
      {
        type: 'plain_text',
        text: 'I Need a Marg',
        emoji: true,
      },
    ],
    description: {
      type: 'plain_text',
      text: 'I Need a Description',
      emoji: true,
    },
    thumb: { url: img },
    footer: [
      {
        type: 'plain_text',
        text: 'google.com',
      },
    ],
  },
];
