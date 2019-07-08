import React from 'react';


export const fullViewport = (storyFn) => <div style={{ width: '100vw', height: '100vh', display: 'flex' }}>
  {storyFn()}
</div>;
