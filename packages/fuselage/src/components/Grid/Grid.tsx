import type { ComponentProps } from 'react';
import React from 'react';

import { Box } from '../Box';
import { GridItem } from './GridItem';

type GridProps = ComponentProps<typeof Box> & {
  xs?: boolean;
  sm?: boolean;
  md?: boolean;
  lg?: boolean;
  xl?: boolean;
};

export const Grid = ({ xs, sm, md, lg, xl, ...props }: GridProps) => (
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
