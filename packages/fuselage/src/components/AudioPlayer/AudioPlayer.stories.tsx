import {
  Title,
  Subtitle,
  Description,
  Primary as PrimaryStory,
  ArgsTable,
  Stories,
  PRIMARY_STORY,
} from '@storybook/addon-docs';
import type { ComponentMeta } from '@storybook/react';
import React from 'react';

import { AudioPlayer } from '../..';

export default {
  title: 'Media/AudioPlayer',
  component: AudioPlayer,
  parameters: {
    docs: {
      description: {
        component: 'A fuselage`s custom AudioPlayer.',
      },
      page: () => (
        <>
          <Title />
          <Subtitle />
          <Description />
          <PrimaryStory />
          <Stories title={''} />
          <ArgsTable story={PRIMARY_STORY} />
        </>
      ),
    },
  },
} as ComponentMeta<typeof AudioPlayer>;

export const AudioPlayerDefault = () => <AudioPlayer />;
