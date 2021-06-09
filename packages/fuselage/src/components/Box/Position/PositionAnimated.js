import React from 'react';

import Position from '.';
import AnimatedVisibility from '../AnimatedVisibility';

const PositionAnimated = ({ width, visible, children, ...props }) => (
  <AnimatedVisibility visibility={visible}>
    <Position {...props}>{children}</Position>
  </AnimatedVisibility>
);

export default PositionAnimated;
