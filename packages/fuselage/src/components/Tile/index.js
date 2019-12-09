import PropTypes from 'prop-types';
import React, { forwardRef } from 'react';

import { Box } from '../Box';

const Container = Box.extend('rcx-tile');

export const Tile = forwardRef(function Tile({ elevation, ...props }, ref) {
  return <Container mod-elevation={elevation} ref={ref} {...props} />;
});

Tile.displayName = 'Tile';

Tile.propTypes = {
  /** Is this component visible? */
  invisible: PropTypes.bool,
};
