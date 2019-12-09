import PropTypes from 'prop-types';
import React from 'react';

import { Box } from '../Box';
import { Text } from '../Text';

const Container = Box.extend('rcx-subtitle', 'h2');

export function Skeleton({ animated, ...props }) {
  return <Container {...props}>
    <Text.Skeleton animated={animated} defaultColor subtitle />
  </Container>;
}

Skeleton.propTypes = {
  /** Is this component visible? */
  invisible: PropTypes.bool,
  /** The heading level, from 1 to 6 (`h1` to `h6`) */
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
};
