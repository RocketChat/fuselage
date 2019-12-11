import PropTypes from 'prop-types';
import React from 'react';

import { Box } from '../Box';
import { Text } from '../Text';
import { Skeleton } from './Skeleton';

const Container = Box.extend('rcx-subtitle', 'h2');

export function Subtitle({
  children,
  level,
  ...props
}) {
  return <Container is={`h${ level }`} {...props}>
    <Text children={children} subtitle />
  </Container>;
}

Subtitle.defaultProps = {
  level: 2,
};

Subtitle.displayName = 'Subtitle';

Subtitle.propTypes = {
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
};

Subtitle.Skeleton = Skeleton;
