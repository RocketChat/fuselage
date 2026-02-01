import { composeStories } from '@storybook/react-webpack5';
import { fireEvent } from '@testing-library/dom';

import { render } from '../../testing';

import AudioPlayer from './AudioPlayer';
import * as stories from './AudioPlayer.stories';

const { AudioPlayerDefault, AudioPlayerWithDownload } = composeStories(stories);

describe('[AudioPlayer Component]', () => {
  describe('Story renders without crashing', () => {
    it('AudioPlayerDefault', () => {
      render(<AudioPlayerDefault />);
    });
    it('AudioPlayerWithDownload', () => {
      render(<AudioPlayerWithDownload />);
    });
  });
});

it('should display the audio player', () => {
  const { container } = render(<AudioPlayer src='#' />);
  expect(container.querySelector('audio')).toBeInTheDocument();
});

it('should display the download button when download prop is true', () => {
  const { container } = render(<AudioPlayer src='#' download />);
  expect(container.querySelector('a[download]')).toBeInTheDocument();
});

it('should display the loading state when the audio is loading', () => {
  const { container } = render(<AudioPlayer src='#' />);
  const audio = container.querySelector('audio');

  if (audio) {
    fireEvent(audio, new Event('loadstart'));
  }

  expect(
    container.querySelector('.rcx-audio-player--loading'),
  ).toBeInTheDocument();
});

it('should display the play button when the audio is not playing', () => {
  const { container } = render(<AudioPlayer src='#' />);
  const audio = container.querySelector('audio');

  if (audio) {
    fireEvent(audio, new Event('canplay'));
  }

  expect(
    container.querySelector('button[aria-label="Play"]'),
  ).toBeInTheDocument();
});

it('should display the pause button when the audio is playing', () => {
  const { container } = render(<AudioPlayer src='#' />);
  const audio = container.querySelector('audio');

  if (audio) {
    fireEvent(audio, new Event('play'));
  }

  expect(
    container.querySelector('button[aria-label="Pause"]'),
  ).toBeInTheDocument();
});
