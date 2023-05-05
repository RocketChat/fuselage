import { css } from '@rocket.chat/css-in-js';
import React, { useState, useRef } from 'react';

import { Box, IconButton, Slider } from '../..';

const AUDIO_URL =
  'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-17.mp3';

const getDurationTime = (durationTime: number) => {
  if (durationTime === 0) {
    return `00:00`;
  }

  let mins = Math.floor(durationTime / 60);
  if (mins < 10) {
    mins = `0${String(mins)}`;
  }
  let secs = Math.floor(durationTime % 60);
  if (secs < 10) {
    secs = `0${String(secs)}`;
  }

  return `${mins}:${secs}`;
};

const getPassedTime = (currentTime: 0) => {
  if (currentTime === 0) {
    return `00:00`;
  }

  let mins = Math.floor(currentTime / 60);
  if (mins < 10) {
    mins = `0${String(mins)}`;
  }
  let secs = Math.floor(currentTime % 60);
  if (secs < 10) {
    secs = `0${String(secs)}`;
  }

  return `${mins}:${secs}`;
};

export const AudioPlayer = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [durationTime, setDurantionTime] = useState(0);
  const [playbackSpeed, setPlaybackspeed] = useState(1);

  const handleInit = (e) => {
    setDurantionTime(e.target.duration);
  };

  const handleTimeUpdate = (e) => {
    setCurrentTime(e.target.currentTime);
  };

  const handlePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        return setIsPlaying(false);
      }

      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleChange = (value) => {
    if (audioRef.current) {
      audioRef.current.currentTime = value;
      setCurrentTime(value);
    }
  };

  const handleDownload = () => {
    console.log('download');
  };

  const handleIncresePlayBackSpeed = () => {
    if (audioRef.current) {
      if (audioRef.current.playbackRate < 2) {
        audioRef.current.playbackRate += 0.5;
        return setPlaybackspeed(audioRef.current.playbackRate);
      }
    }
  };

  const handleDecresePlayBackSpeed = () => {
    if (audioRef.current) {
      if (audioRef.current.playbackRate === 0.5) {
        return;
      }

      audioRef.current.playbackRate -= 0.5;
      return setPlaybackspeed(audioRef.current.playbackRate);
    }
  };

  const customFooter = css`
    position: relative;
    bottom: 0.5rem;
    margin-bottom: -0.5rem;
  `;

  return (
    <>
      <Box
        position='relative'
        borderWidth={1}
        borderColor='extra-light'
        p='x12'
        width='fit-content'
        borderRadius='x4'
      >
        <Box display='flex' alignItems='center'>
          <Box>
            <IconButton
              onClick={handlePlay}
              icon={isPlaying ? 'pause-unfilled' : 'play-unfilled'}
            />
          </Box>
          <Box mi='x12'>
            <Slider
              showOutput={false}
              value={currentTime}
              maxValue={durationTime}
              onChange={handleChange}
            />
          </Box>
          <Box>
            <IconButton onClick={handleDownload} icon='download' />
          </Box>
        </Box>
        <Box
          className={customFooter}
          mi='x52'
          display='flex'
          alignItems='center'
          justifyContent='space-between'
          color='secondary-info'
        >
          <Box fontScale='micro'>{getPassedTime(currentTime)}</Box>
          <Box
            fontScale='micro'
            display='flex'
            justifyContent='space-around'
            id='controlers'
          >
            <Box
              mi='x8'
              display='flex'
              alignItems='center'
              justifyContent='space-between'
            >
              <IconButton
                disabled={playbackSpeed === 0.5}
                icon='h-bar'
                mini
                onClick={handleDecresePlayBackSpeed}
              />
              <Box mi='x8'>{playbackSpeed.toFixed(1)}x</Box>
              <IconButton
                disabled={playbackSpeed === 2}
                icon='plus'
                mini
                onClick={handleIncresePlayBackSpeed}
              />
            </Box>
          </Box>
          <Box fontScale='micro'>{getDurationTime(durationTime)}</Box>
        </Box>
      </Box>

      <audio
        style={{ display: 'none' }}
        onTimeUpdate={handleTimeUpdate}
        onLoadedData={handleInit}
        onEnded={() => setIsPlaying(false)}
        ref={audioRef}
        controls
      >
        <source src={AUDIO_URL} type='audio/mpeg' />
      </audio>
    </>
  );
};
