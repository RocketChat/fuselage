import React, { ComponentProps, FC } from 'react';

import Position from '.';
import AnimatedVisibility from '../AnimatedVisibility';

type PositionAnimatedProps = {
  visible?: 'hidden' | 'visible' | 'hiding' | 'unhiding';
} & ComponentProps<typeof Position>;

const PositionAnimated: FC<PositionAnimatedProps> = ({
  width,
  visible,
  children,
  ...props
}) => (
  <AnimatedVisibility visibility={visible}>
    <Position {...props}>{children}</Position>
  </AnimatedVisibility>
);

export default PositionAnimated;
