import type { ReactNode } from 'react';
import { Children } from 'react';

import type { GridItemProps } from '../Grid';
import Grid, { GridItem } from '../Grid';

/** @public */
export type CardGridProps = {
  children: ReactNode;
  breakpoints?: GridItemProps;
};

/** @public */
const CardGrid = ({ children, breakpoints, ...props }: CardGridProps) => (
  <Grid rcx-card-grid m={-8} {...props}>
    {Children.map(children, (child) => (
      <GridItem rcx-card-grid__item p={8} {...breakpoints}>
        {child}
      </GridItem>
    ))}
  </Grid>
);

export default CardGrid;
