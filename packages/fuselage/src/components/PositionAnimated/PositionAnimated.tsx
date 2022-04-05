import type { ComponentProps } from 'react';
import React from 'react';

import AnimatedVisibility from '../AnimatedVisibility';
import Position from '../Position';

type PositionAnimatedProps = {
  visible?: 'hidden' | 'visible' | 'hiding' | 'unhiding';
} & ComponentProps<typeof Position>;

const PositionAnimated = ({
  width: _width,
  visible,
  children,
  ...props
}: PositionAnimatedProps) => (
  <AnimatedVisibility visibility={visible}>
    <Position {...props}>{children}</Position>
  </AnimatedVisibility>
);

export default PositionAnimated;
