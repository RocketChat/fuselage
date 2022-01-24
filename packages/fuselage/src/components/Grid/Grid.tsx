import PropTypes from 'prop-types';
import React, { ComponentProps, FC } from 'react';

import { Box } from '../Box';

type GridProps = ComponentProps<typeof Box> & {
  xs?: boolean;
  sm?: boolean;
  md?: boolean;
  lg?: boolean;
  xl?: boolean;
};

export const Grid: FC<GridProps> = ({ xs, sm, md, lg, xl, ...props }) => (
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

Grid.propTypes = {
  xs: PropTypes.bool,
  sm: PropTypes.bool,
  md: PropTypes.bool,
  lg: PropTypes.bool,
  xl: PropTypes.bool,
};
