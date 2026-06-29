import type { Meta, StoryFn } from '@storybook/react-webpack5';

import AudioPlayer from './AudioPlayer';

export default {
  title: 'Media/AudioPlayer',
  component: AudioPlayer,
} satisfies Meta<typeof AudioPlayer>;

const AUDIO_URL =
  'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-17.mp3';

const Template: StoryFn<typeof AudioPlayer> = (args) => (
  <AudioPlayer {...args} />
);

export const AudioPlayerDefault = Template.bind({});
AudioPlayerDefault.args = {
  src: AUDIO_URL,
};

export const AudioPlayerWithDownload = Template.bind({});
AudioPlayerWithDownload.args = {
  src: AUDIO_URL,
  download: true,
};
