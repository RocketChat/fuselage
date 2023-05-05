import { useMergedRefs } from '@rocket.chat/fuselage-hooks';
import React, { useState, useRef, forwardRef } from 'react';

import { Box, IconButton, Slider } from '../..';

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

export const AudioPlayer = forwardRef<
  HTMLAudioElement,
  {
    src: string;
    maxPlaybackSpeed?: number;
    minPlaybackSpeed?: number;
    playbackSpeedStep?: number;
  }
>(
  (
    {
      src,
      maxPlaybackSpeed = 2,
      minPlaybackSpeed = 0.5,
      playbackSpeedStep = 0.5,
    },
    ref
  ) => {
    const audioRef = useRef<HTMLAudioElement>(null);
    const refs = useMergedRefs(ref, audioRef);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [durationTime, setDurationTime] = useState(0);
    const [playbackSpeed, setPlaybackSpeed] = useState(1);

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
        audioRef.current.playbackRate = Math.max(
          Math.min(
            audioRef.current.playbackRate + playbackSpeedStep * mod,
            maxPlaybackSpeed
          ),
          minPlaybackSpeed
        );
      }
    };

    const handleIncreasePlayBackSpeed = () => handlePlaybackSpeed(1);

    const handleDecreasePlayBackSpeed = () => handlePlaybackSpeed(-1);

    return (
      <Box
        borderWidth='default'
        borderColor='extra-light'
        p='x16'
        width='fit-content'
        borderRadius='x4'
      >
        <Box display='flex' alignItems='center'>
          <IconButton
            large
            onClick={handlePlay}
            icon={isPlaying ? 'pause-unfilled' : 'play-unfilled'}
          />
          <Box mi='x12' position='relative'>
            <Slider
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
              {getMaskTime(currentTime)}
              <Box
                fontScale='micro'
                display='flex'
                justifyContent='space-around'
                id='controllers'
              >
                <Box
                  mi='x8'
                  display='flex'
                  alignItems='center'
                  justifyContent='space-between'
                >
                  <IconButton
                    disabled={playbackSpeed <= minPlaybackSpeed}
                    icon='h-bar'
                    mini
                    onClick={handleDecreasePlayBackSpeed}
                  />
                  <Box mi='x8'>{playbackSpeed.toFixed(1)}x</Box>
                  <IconButton
                    disabled={playbackSpeed >= maxPlaybackSpeed}
                    icon='plus'
                    mini
                    onClick={handleIncreasePlayBackSpeed}
                  />
                </Box>
              </Box>
              {getMaskTime(durationTime)}
            </Box>
          </Box>
          <IconButton
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
          <source src={src} type='audio/mpeg' />
        </audio>
      </Box>
    );
  }
);
