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
  padding: '16',
};

Tile.displayName = 'Tile';

Tile.propTypes = {
  elevation: PropTypes.oneOf(['0', '1', '2']).isRequired,
  padding: PropTypes.oneOf(['none', '1', '2', '4', '8', '12', '16', '20', '24', '28', '32', '36', '40', '44']).isRequired,
};
