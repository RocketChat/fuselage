import { css } from '@rocket.chat/css-in-js';
import { useMergedRefs, useResizeObserver } from '@rocket.chat/fuselage-hooks';
import React, { useState, useRef, forwardRef } from 'react';

import { Box, IconButton } from '../..';
import { Palette } from '../../Theme';
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
const SpeedControlStyle = css`
  cursor: pointer;
  &:hover {
    background-color: ${Palette.surface['surface-hover']};
  }
`;

export const AudioPlayer = forwardRef<
  HTMLAudioElement,
  {
    src: string;
    type?: string;
    maxPlaybackSpeed?: number;
    minPlaybackSpeed?: number;
    playbackSpeedStep?: number;
    download?: boolean;
    playLabel?: string;
    pauseLabel?: string;
    audioPlaybackRangeLabel?: string;
    reducePlaybackSpeedLabel?: string;
    increasePlaybackSpeedLabel?: string;
    downloadAudioFileLabel?: string;
  }
>(
  (
    {
      src,
      type = 'audio/mpeg',
      maxPlaybackSpeed = 2,
      minPlaybackSpeed = 0.5,
      playbackSpeedStep = 0.5,
      download = false,
      playLabel = 'Play',
      pauseLabel = 'Pause',
      audioPlaybackRangeLabel = 'Audio Playback Range',
      reducePlaybackSpeedLabel = 'Reduce Playback Speed',
      increasePlaybackSpeedLabel = 'Increase Playback Speed',
      downloadAudioFileLabel = 'Download Audio File',
    },
    ref
  ) => {
    const audioRef = useRef<HTMLAudioElement>(null);
    const refs = useMergedRefs(ref, audioRef);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [durationTime, setDurationTime] = useState(0);
    const [playbackSpeed, setPlaybackSpeed] = useState(1);
    const { ref: containerRef, borderBoxSize } = useResizeObserver();

    const showTimes =
      borderBoxSize.inlineSize && borderBoxSize.inlineSize > 280;
    const collapseControls =
      borderBoxSize.inlineSize && borderBoxSize.inlineSize < 200;

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

    const handleIncreasePlayBackSpeed = () => handlePlaybackSpeed(1);

    const handleDecreasePlayBackSpeed = () => handlePlaybackSpeed(-1);

    const handlePlaybackSpeedSingleControl = () => {
      const reachedMaxPlaybackSpeed =
        maxPlaybackSpeed === audioRef?.current?.playbackRate;

      if (reachedMaxPlaybackSpeed) {
        audioRef.current.playbackRate = minPlaybackSpeed;
        return;
      }
      handleIncreasePlayBackSpeed();
    };

    return (
      <Box
        borderWidth='default'
        bg='light'
        borderColor='extra-light'
        p='x8'
        borderRadius='x4'
        w='100%'
        maxWidth='x300'
        ref={containerRef}
      >
        <Box display='flex' alignItems='center'>
          <IconButton
            large
            onClick={handlePlay}
            aria-label={isPlaying ? pauseLabel : playLabel}
            icon={isPlaying ? 'pause-unfilled' : 'play-unfilled'}
          />
          <Box mi='x12' position='relative' w='100%'>
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
            <Box
              display='flex'
              alignItems='center'
              justifyContent='space-between'
              color='secondary-info'
              fontScale='micro'
              position='absolute'
              width='100%'
              mb={'neg-x8'}
            >
              {showTimes && getMaskTime(currentTime)}
              {collapseControls ? (
                <Box width='100%' display='flex' justifyContent='space-around'>
                  <Box
                    p='x4'
                    onClick={handlePlaybackSpeedSingleControl}
                    borderRadius='x4'
                    className={SpeedControlStyle}
                  >
                    {playbackSpeed.toFixed(1)}x
                  </Box>
                </Box>
              ) : (
                <Box
                  fontScale='micro'
                  display='flex'
                  justifyContent='space-around'
                  id='controllers'
                  {...(!showTimes && { width: '100%' })}
                >
                  <Box
                    mi='x8'
                    display='flex'
                    alignItems='center'
                    justifyContent='space-between'
                  >
                    <IconButton
                      aria-label={reducePlaybackSpeedLabel}
                      disabled={playbackSpeed <= minPlaybackSpeed}
                      icon='h-bar'
                      mini
                      onClick={handleDecreasePlayBackSpeed}
                    />
                    <Box mi='x8'>{playbackSpeed.toFixed(1)}x</Box>
                    <IconButton
                      aria-label={increasePlaybackSpeedLabel}
                      disabled={playbackSpeed >= maxPlaybackSpeed}
                      icon='plus'
                      mini
                      onClick={handleIncreasePlayBackSpeed}
                    />
                  </Box>
                </Box>
              )}
              {showTimes && getMaskTime(durationTime)}
            </Box>
          </Box>
          {download && (
            <IconButton
              aria-label={downloadAudioFileLabel}
              is='a'
              href={src}
              download
              icon='download'
              large
              onClick={(e) => {
                const { host } = new URL(src);
                if (host !== window.location.host) {
                  e.preventDefault();
                  forceDownload(src);
                }
              }}
            />
          )}
        </Box>
        <audio
          style={{ display: 'none' }}
          onTimeUpdate={(e) => {
            setCurrentTime((e.target as HTMLAudioElement).currentTime);
          }}
          onLoadedData={(e) => {
            setDurationTime((e.target as HTMLAudioElement).duration);
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
        </audio>
      </Box>
    );
  }
);
