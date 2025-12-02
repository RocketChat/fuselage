import AnimatedVisibility from '../AnimatedVisibility';
import type { PositionProps } from '../Position';
import Position from '../Position';

type PositionAnimatedProps = {
  visible?: 'hidden' | 'visible' | 'hiding' | 'unhiding';
} & PositionProps;

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
