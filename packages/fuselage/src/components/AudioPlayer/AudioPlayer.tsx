import { useMergedRefs, useResizeObserver } from '@rocket.chat/fuselage-hooks';
import type { TrackHTMLAttributes } from 'react';
import React, { useState, useRef, forwardRef } from 'react';

import { Box, Button, IconButton, Margins } from '../..';
import { Slider } from '../Slider';

const getMaskTime = (durationTime: number) =>
  new Date(durationTime * 1000)
    .toISOString()
    .slice(durationTime > 60 * 60 ? 11 : 14, 19);

function forceDownload(url: string, fileName?: string) {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  xhr.responseType = 'blob';
  xhr.onload = function () {
    const urlCreator = window.URL || window.webkitURL;
    const imageUrl = urlCreator.createObjectURL(this.response);
    const tag = document.createElement('a');
    tag.href = imageUrl;
    if (fileName) {
      tag.download = fileName;
    }
    document.body.appendChild(tag);
    tag.click();
    document.body.removeChild(tag);
  };
  xhr.send();
}

const getDurationForInfinityDurationAudioFile = (
  src: string,
  callback: (duration: number) => void
) => {
  const audioElement = new Audio();
  audioElement.src = src;

  audioElement.addEventListener('loadedmetadata', () => {
    const { duration } = audioElement;
    if (duration === Infinity) {
      audioElement.currentTime = 1e101;
      return;
    }

    return callback(duration);
  });

  audioElement.addEventListener('durationchange', () => {
    if (audioElement.duration === Infinity) {
      return;
    }
    callback(audioElement.duration);
    audioElement.remove();
  });
};

type AudioPlayerProps = {
  src: string;
  type?: string;
  maxPlaybackSpeed?: number;
  minPlaybackSpeed?: number;
  playbackSpeedStep?: number;
  download?: boolean;
  playLabel?: string;
  pauseLabel?: string;
  audioPlaybackRangeLabel?: string;
  changePlaybackSpeedLabel?: string;
  downloadAudioFileLabel?: string;
  trackProps?: TrackHTMLAttributes<HTMLTrackElement>;
};

export const AudioPlayer = forwardRef<HTMLAudioElement, AudioPlayerProps>(
  (
    {
      src,
      type = 'audio/mpeg',
      maxPlaybackSpeed = 2,
      minPlaybackSpeed = 0.5,
      playbackSpeedStep = 0.25,
      download = false,
      playLabel = 'Play',
      pauseLabel = 'Pause',
      audioPlaybackRangeLabel = 'Audio Playback Range',
      changePlaybackSpeedLabel = 'Change Playback Speed',
      downloadAudioFileLabel = 'Download Audio File',
      trackProps,
    },
    ref
  ) => {
    const audioRef = useRef<HTMLAudioElement>(null);
    const refs = useMergedRefs(ref, audioRef);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [durationTime, setDurationTime] = useState(0);
    const [playbackSpeed, setPlaybackSpeed] = useState(1);
    const { ref: containerRef } = useResizeObserver();

    const handlePlay = () => {
      const isPlaying = audioRef.current?.paused;

      if (isPlaying) {
        audioRef.current?.play();
      } else {
        audioRef.current?.pause();
      }
    };

    const handlePlaybackSpeed = (mod: 1 | -1) => {
      if (audioRef.current) {
        audioRef.current.playbackRate += playbackSpeedStep * mod;
      }
    };

    const handlePlaybackSpeedSingleControl = () => {
      const reachedMaxPlaybackSpeed =
        maxPlaybackSpeed === audioRef?.current?.playbackRate;

      if (reachedMaxPlaybackSpeed) {
        audioRef.current.playbackRate = minPlaybackSpeed;
        return;
      }
      handlePlaybackSpeed(1);
    };

    return (
      <Box
        borderWidth='default'
        bg='tint'
        borderColor='extra-light'
        pb={12}
        pie={8}
        pis={16}
        borderRadius='x4'
        w='100%'
        maxWidth='x300'
        ref={containerRef}
        display='flex'
        alignItems='center'
      >
        <IconButton
          primary
          medium
          onClick={handlePlay}
          aria-label={isPlaying ? pauseLabel : playLabel}
          icon={isPlaying ? 'pause-shape-filled' : 'play-shape-filled'}
        />
        <Margins inline={8}>
          <Box fontScale='p2' color='secondary-info'>
            {isPlaying || currentTime > 0
              ? getMaskTime(currentTime)
              : getMaskTime(durationTime)}
          </Box>
          <Box mi={16} w='full'>
            <Slider
              aria-label={audioPlaybackRangeLabel}
              showOutput={false}
              value={currentTime}
              maxValue={durationTime}
              onChange={(value) => {
                if (audioRef.current) {
                  audioRef.current.currentTime = value;
                }
              }}
            />
          </Box>

          <Button
            secondary
            small
            onClick={handlePlaybackSpeedSingleControl}
            aria-label={changePlaybackSpeedLabel}
          >
            {playbackSpeed}x
          </Button>
        </Margins>
        {download && (
          <IconButton
            primary
            aria-label={downloadAudioFileLabel}
            is='a'
            href={src}
            download
            icon='download'
            medium
            onClick={(e) => {
              const { host } = new URL(src);
              if (host !== window.location.host) {
                e.preventDefault();
                forceDownload(src);
              }
            }}
          />
        )}
        <audio
          style={{ display: 'none' }}
          onTimeUpdate={(e) => {
            setCurrentTime((e.target as HTMLAudioElement).currentTime);
          }}
          onLoadedMetadata={(e) => {
            const { duration } = e.target as HTMLAudioElement;

            if (duration !== Infinity) {
              return setDurationTime(duration);
            }

            getDurationForInfinityDurationAudioFile(src, setDurationTime);
          }}
          onEnded={() => setIsPlaying(false)}
          ref={refs}
          preload='metadata'
          onRateChange={(e) => {
            setPlaybackSpeed((e.target as HTMLAudioElement).playbackRate);
          }}
          onPlay={() => {
            setIsPlaying(true);
          }}
          onPause={() => {
            setIsPlaying(false);
          }}
          controls
        >
          <source src={src} type={type} />
          <track kind='captions' {...trackProps} />
        </audio>
      </Box>
    );
  }
);
