import PropTypes from 'prop-types';
import React from 'react';

import { Box } from '../Box';
import { Text } from '../Text';

const Container = Box.extend('rcx-headline', 'h1');

export function Skeleton({
  animated,
  level,
  ...props
}) {
  return <Container is={`h${ level }`} {...props}>
    <Text.Skeleton animated={animated} defaultColor headline />
  </Container>;
}

Skeleton.defaultProps = {
  level: 1,
};

Skeleton.propTypes = {
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
};
