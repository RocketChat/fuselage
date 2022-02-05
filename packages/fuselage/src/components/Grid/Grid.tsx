import React, { ComponentProps, FC } from 'react';

import { Box } from '../Box';
import { GridItem } from './GridItem';

type GridProps = ComponentProps<typeof Box> & {
  xs?: boolean;
  sm?: boolean;
  md?: boolean;
  lg?: boolean;
  xl?: boolean;
};

export const Grid: FC<GridProps> & { Item: typeof GridItem } = ({
  xs,
  sm,
  md,
  lg,
  xl,
  ...props
}) => (
  <Box rcx-grid__wrapper>
    <Box
      rcx-grid
      rcx-grid--xs={xs}
      rcx-grid--sm={sm}
      rcx-grid--md={md}
      rcx-grid--lg={lg}
      rcx-grid--xl={xl}
      {...props}
    />
  </Box>
);

Grid.Item = GridItem;
