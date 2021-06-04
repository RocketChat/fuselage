import { ComponentProps, FC } from 'react';

import Position from '.';

type PositionAnimatedProps = {
  visible?: 'hidden' | 'visible' | 'hiding' | 'unhiding';
} & ComponentProps<typeof Position>;

declare const PositionAnimated: FC<PositionAnimatedProps>;

export = PositionAnimated;
