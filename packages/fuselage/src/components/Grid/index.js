import PropTypes from 'prop-types';
import React from 'react';

import { Box } from '../Box';

export function Grid({ xs, sm, md, lg, xl, ...props }) {
  return <Box componentClassName='rcx-grid__wrapper'>
    <Box
      componentClassName='rcx-grid'
      mod-xs={xs}
      mod-sm={sm}
      mod-md={md}
      mod-lg={lg}
      mod-xl={xl}
      {...props}
    />
  </Box>;
}

Grid.displayName = 'Grid.Row';

Grid.propTypes = {
  xs: PropTypes.bool,
  sm: PropTypes.bool,
  md: PropTypes.bool,
  lg: PropTypes.bool,
  xl: PropTypes.bool,
};

export function GridItem({ xs, sm, md, lg, xl, ...props }) {
  return <Box
    componentClassName='rcx-grid__item'
    mod-xs={xs}
    mod-sm={sm}
    mod-md={md}
    mod-lg={lg}
    mod-xl={xl}
    {...props}
  />;
}

GridItem.displayName = 'Grid.Item';

GridItem.propTypes = {
  xs: PropTypes.oneOf([1, 2, 3, 4]),
  sm: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8]),
  md: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8]),
  lg: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
  xl: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
};

Grid.Item = GridItem;
