import PropTypes from 'prop-types';
import React from 'react';

import { Box } from '../Box';

export function Grid({ xs, sm, md, lg, xl, ...props }) {
  return <Box rcx-grid__wrapper>
    <Box
      rcx-grid
      rcx-grid--xs={xs}
      rcx-grid--sm={sm}
      rcx-grid--md={md}
      rcx-grid--lg={lg}
      rcx-grid--xl={xl}
      {...props}
    />
  </Box>;
}

Grid.propTypes = {
  xs: PropTypes.bool,
  sm: PropTypes.bool,
  md: PropTypes.bool,
  lg: PropTypes.bool,
  xl: PropTypes.bool,
};

export function GridItem({ xs, sm, md, lg, xl, ...props }) {
  return <Box
    rcx-grid__item
    rcx-grid__item--xs={xs}
    rcx-grid__item--sm={sm}
    rcx-grid__item--md={md}
    rcx-grid__item--lg={lg}
    rcx-grid__item--xl={xl}
    {...props}
  />;
}

GridItem.propTypes = {
  xs: PropTypes.oneOf([1, 2, 3, 4]),
  sm: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8]),
  md: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8]),
  lg: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
  xl: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
};

Grid.Item = GridItem;
