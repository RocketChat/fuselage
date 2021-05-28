import { ComponentProps } from 'react';

import Position from '.';

type PositionAnimatedProps = {
  visibility?: boolean;
} & ComponentProps<typeof Position>;

declare const PositionAnimated: FC<PositionAnimatedProps>;
