import type { ComponentProps } from 'react';
import React from 'react';

import Grid, { GridItem } from '../Grid';

type CardGroupGridProps = {
  children: React.ReactNode;
  breakpoints: ComponentProps<typeof GridItem>;
};

export const CardGroupGrid = ({
  children,
  breakpoints,
  ...props
}: CardGroupGridProps) => (
  <Grid rcx-card__grid m={-8} {...props}>
    {React.Children.map(children, (child) => (
      <GridItem rcx-card__grid--item p={8} {...breakpoints}>
        {child}
      </GridItem>
    ))}
  </Grid>
);
