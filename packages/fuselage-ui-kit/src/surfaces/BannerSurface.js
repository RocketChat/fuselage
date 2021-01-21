import React from 'react';

import { Surface } from './SurfaceContext';

const BannerSurface = ({ children }) => {
  return <Surface type='banner'>{children}</Surface>;
};

export default BannerSurface;
