import type { ComponentProps } from 'react';

import AnimatedVisibility from '../AnimatedVisibility/index.js';
import Position from '../Position/index.js';

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
