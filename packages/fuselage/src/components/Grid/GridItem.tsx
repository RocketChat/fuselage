import React from 'react';

import type { BoxProps } from '../Box';
import Box from '../Box';

type GridItemProps = BoxProps & {
  xs?: 1 | 2 | 3 | 4;
  sm?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
  md?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
  lg?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  xl?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
};

export const GridItem = ({ xs, sm, md, lg, xl, ...props }: GridItemProps) => (
  <Box
    rcx-grid__item
    rcx-grid__item--xs={xs}
    rcx-grid__item--sm={sm}
    rcx-grid__item--md={md}
    rcx-grid__item--lg={lg}
    rcx-grid__item--xl={xl}
    {...props}
  />
);
