import { Margins } from '@rocket.chat/fuselage';
import React from 'react';

import { Surface } from './SurfaceContext';

const BannerSurface = ({ children }) => {
  return (
    <Surface type='banner'>
      <Margins block='x8'>{children}</Margins>
    </Surface>
  );
};

export default BannerSurface;
