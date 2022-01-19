import { ComponentProps, ForwardRefExoticComponent } from 'react';

import { Box } from '../Box';

type ChipProps = ComponentProps<typeof Box> & {
  thumbUrl: string;
};
const Chip: ForwardRefExoticComponent<ChipProps>;

export = Chip;
