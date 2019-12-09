import PropTypes from 'prop-types';
import React, { forwardRef } from 'react';

import { Box } from '../Box';

const StyledGrid = Box.extend('rcx-grid');
const StyledGridItem = Box.extend('rcx-grid__item');

export const Grid = forwardRef(function Grid({ xs, sm, md, lg, xl, ...props }, ref) {
  return <StyledGrid
    mod-xs={xs}
    mod-sm={sm}
    mod-md={md}
    mod-lg={lg}
    mod-xl={xl}
    ref={ref}
    {...props}
  />;
});

Grid.displayName = 'Grid.Row';

Grid.propTypes = {
  xs: PropTypes.bool,
  sm: PropTypes.bool,
  md: PropTypes.bool,
  lg: PropTypes.bool,
  xl: PropTypes.bool,
};

export const GridItem = React.forwardRef(function GridItem({ xs, sm, md, lg, xl, ...props }, ref) {
  return <StyledGridItem
    mod-xs={xs}
    mod-sm={sm}
    mod-md={md}
    mod-lg={lg}
    mod-xl={xl}
    ref={ref}
    {...props}
  />;
});

GridItem.displayName = 'Grid.Item';

GridItem.propTypes = {
  xs: PropTypes.oneOf([1, 2, 3, 4]),
  sm: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8]),
  md: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8]),
  lg: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
  xl: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
};

Grid.Item = GridItem;
