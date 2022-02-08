import React, { ComponentProps } from 'react';

import Position from '.';
import AnimatedVisibility from '../AnimatedVisibility';

type PositionAnimatedProps = {
  visible?: 'hidden' | 'visible' | 'hiding' | 'unhiding';
} & ComponentProps<typeof Position>;

const PositionAnimated = ({
  width,
  visible,
  children,
  ...props
}: PositionAnimatedProps) => (
  <AnimatedVisibility visibility={visible}>
    <Position {...props}>{children}</Position>
  </AnimatedVisibility>
);

export default PositionAnimated;
