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
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
};
