import { ComponentProps, ForwardRefExoticComponent } from 'react';

import { Box } from '../Box';

type GridProps = ComponentProps<typeof Box> & {
  xs?: boolean;
  sm?: boolean;
  md?: boolean;
  lg?: boolean;
  xl?: boolean;
};

type GridItemProps = ComponentProps<typeof Box> & {
  xs?: 1 | 2 | 3 | 4;
  sm?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
  md?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
  lg?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  xl?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
};

export const Grid: ForwardRefExoticComponent<GridProps> & {
  Item: ForwardRefExoticComponent<GridItemProps>;
};
