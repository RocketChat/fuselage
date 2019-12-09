import PropTypes from 'prop-types';
import React from 'react';

import { Box } from '../Box';

const Container = Box.extend('rcx-tile');

export function Tile({ elevation, ...props }) {
  return <Container mod-elevation={elevation} {...props} />;
}

Tile.displayName = 'Tile';

Tile.propTypes = {
  /** Is this component visible? */
  invisible: PropTypes.bool,
};
