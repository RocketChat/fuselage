import React from 'react';
import centered from '@storybook/addon-centered/react';


export const horizontallyCentered = (storyFn) => centered(() => (
  <div style={{
    height: '100vh',
  }}>
    {storyFn()}
  </div>
));

export const verticallyCentered = (storyFn) => centered(() => (
  <div style={{
    width: '100vw',
  }}>
    {storyFn()}
  </div>
));
