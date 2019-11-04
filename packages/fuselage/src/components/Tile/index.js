import PropTypes from 'prop-types';
import React from 'react';

import { createStyledComponent } from '../../styles';

const Container = createStyledComponent('rcx-tile');

export const Tile = React.forwardRef(function Tile({ elevation, ...props }, ref) {
  return <Container mod-elevation={elevation} ref={ref} {...props} />;
});

Tile.displayName = 'Tile';

Tile.propTypes = {
  /** Is this component visible? */
  invisible: PropTypes.bool,
};
