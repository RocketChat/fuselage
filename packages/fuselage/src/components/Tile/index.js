import PropTypes from 'prop-types';
import React from 'react';

import { Box } from '../Box';

export const Tile = React.forwardRef(function Tile({
  elevation,
  padding,
  ...props
}, ref) {
  return <Box
    ref={ref}
    componentClassName='rcx-tile'
    mod-elevation={elevation}
    mod-padding={padding}
    {...props}
  />;
});

Tile.defaultProps = {
  elevation: '1',
  padding: 'x16',
};

Tile.displayName = 'Tile';

Tile.propTypes = {
  elevation: PropTypes.oneOf(['0', '1', '2']).isRequired,
  padding: PropTypes.oneOf(['none', 'x1', 'x2', 'x4', 'x8', 'x12', 'x16', 'x20', 'x24', 'x28', 'x32', 'x36', 'x40', 'x44']).isRequired,
};
