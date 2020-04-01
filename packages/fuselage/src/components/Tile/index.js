import PropTypes from 'prop-types';
import React, { forwardRef } from 'react';

import { paddingPropType } from '../../propTypes/paddings';
import { Box } from '../Box';

export const Tile = forwardRef(function Tile({
  className,
  elevation,
  ...props
}, ref) {
  return <Box
    ref={ref}
    componentClassName='rcx-tile'
    mod-elevation={elevation}
    {...props}
  />;
});

Tile.defaultProps = {
  elevation: '1',
  padding: 'x16',
};

Tile.propTypes = {
  elevation: PropTypes.oneOf(['0', '1', '2']).isRequired,
  padding: paddingPropType.isRequired,
};
