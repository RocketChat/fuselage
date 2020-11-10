import PropTypes from 'prop-types';
import React, { forwardRef } from 'react';

import { Box } from '../Box';

export const Tile = forwardRef(function Tile(
  { className, elevation, ...props },
  ref
) {
  return <Box ref={ref} rcx-tile rcx-tile--elevation={elevation} {...props} />;
});

Tile.defaultProps = {
  elevation: '1',
  padding: 'x16',
};

Tile.propTypes = {
  elevation: PropTypes.oneOf(['0', '1', '2']).isRequired,
};
