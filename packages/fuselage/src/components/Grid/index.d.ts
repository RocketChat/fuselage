import { ComponentProps, ForwardRefExoticComponent } from 'react';

import { Box } from '../Box';

type GridProps = ComponentProps<typeof Box> & {
  xl: number | boolean;
};

type GridItemProps = ComponentProps<typeof Box> & {
  xl: number | boolean;
};

export const Grid: ForwardRefExoticComponent<GridProps> & {
  Item: ForwardRefExoticComponent<GridItemProps>;
};
