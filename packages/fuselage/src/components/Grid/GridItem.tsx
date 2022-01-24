import PropTypes from 'prop-types';
import React, { ComponentProps, FC } from 'react';

import { Box } from '../Box';

type GridItemProps = ComponentProps<typeof Box> & {
  xs?: 1 | 2 | 3 | 4;
  sm?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
  md?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
  lg?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  xl?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
};

export const GridItem: FC<GridItemProps> = ({
  xs,
  sm,
  md,
  lg,
  xl,
  ...props
}) => (
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

GridItem.propTypes = {
  xs: PropTypes.oneOf([1, 2, 3, 4]),
  sm: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8]),
  md: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8]),
  lg: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
  xl: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
};
