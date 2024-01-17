import type { Meta } from '@storybook/react';
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
    },
  },
} as Meta<typeof AudioPlayer>;

const AUDIO_URL =
  'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-17.mp3';

export const AudioPlayerDefault = () => <AudioPlayer src={AUDIO_URL} />;
