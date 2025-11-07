import type { Meta } from '@storybook/react-vite';

import { AudioPlayer } from './AudioPlayer.js';

export default {
  title: 'Media/AudioPlayer',
  component: AudioPlayer,
} satisfies Meta<typeof AudioPlayer>;

const AUDIO_URL =
  'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-17.mp3';

export const AudioPlayerDefault = () => <AudioPlayer src={AUDIO_URL} />;
