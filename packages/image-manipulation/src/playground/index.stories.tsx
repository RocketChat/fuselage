import React from 'react';
import ImageManipulation from '..';
import { Box } from '@rocket.chat/fuselage';

export default {
  title: 'Playground',
  component: ImageManipulation,
};

export const Default = () => (
  <ImageManipulation
    imgSrc='https://img.etimg.com/thumb/msid-83596655,width-640,resizemode-4,imgsize-49175/small-is-beautiful.jpg'
    width='90vw'
    height='80vh'
  />
);

// https://images.unsplash.com/photo-1617195920950-1145bf9a9c72?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60

// https://c4.wallpaperflare.com/wallpaper/776/63/597/lights-amg-coupe-mersedes-benz-wallpaper-preview.jpg
