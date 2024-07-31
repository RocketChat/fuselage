import type { ComponentMeta } from '@storybook/react';

import AudioPlayer from './AudioPlayer';

export default {
  title: 'Media/AudioPlayer',
  component: AudioPlayer,
} satisfies ComponentMeta<typeof AudioPlayer>;

const AUDIO_URL =
  'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-17.mp3';

export const AudioPlayerDefault = () => <AudioPlayer src={AUDIO_URL} />;
