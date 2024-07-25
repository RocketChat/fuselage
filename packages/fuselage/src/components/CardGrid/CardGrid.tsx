import React from 'react';

import type { GridItemProps } from '../Grid';
import Grid, { GridItem } from '../Grid';

export type CardGridProps = {
  children: React.ReactNode;
  breakpoints?: GridItemProps;
};

export const CardGrid = ({
  children,
  breakpoints,
  ...props
}: CardGridProps) => (
  <Grid rcx-card-grid m={-8} {...props}>
    {React.Children.map(children, (child) => (
      <GridItem rcx-card-grid__item p={8} {...breakpoints}>
        {child}
      </GridItem>
    ))}
  </Grid>
);
