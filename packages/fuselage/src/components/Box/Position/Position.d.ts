import { Placements, PositionOptions } from '@rocket.chat/fuselage-hooks';
import { ComponentProps, FC, RefObject } from 'react';

import { Box } from '..';

type PositionProps = {
  anchor?: RefObject<Element>;
  placement?: Placements;
  margin?: PositionOptions['margin'];
} & ComponentProps<typeof Box>;

declare const Position: FC<PositionProps>;

export = Position;
