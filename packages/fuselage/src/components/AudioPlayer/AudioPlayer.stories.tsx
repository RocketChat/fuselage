import type { Meta } from '@storybook/react-webpack5';
import { useState } from 'react';

import AudioPlayer from './AudioPlayer';
import AudioPlayerControls from './AudioPlayerControls';

export default {
  title: 'Media/AudioPlayer',
  component: AudioPlayer,
} satisfies Meta<typeof AudioPlayer>;

const AUDIO_URL =
  'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-17.mp3';

export const AudioPlayerDefault = () => <AudioPlayer src={AUDIO_URL} />;

export const Controls = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(12);
  const [playbackSpeed, setPlaybackSpeed] = useState(1);
  const durationTime = 86;

  return (
    <AudioPlayerControls
      isPlaying={isPlaying}
      currentTime={currentTime}
      durationTime={durationTime}
      playbackSpeed={playbackSpeed}
      onTogglePlay={() => setIsPlaying((playing) => !playing)}
      onSeek={setCurrentTime}
      onChangePlaybackSpeed={() =>
        setPlaybackSpeed((speed) => (speed >= 2 ? 1 : speed + 0.5))
      }
    />
  );
};
