import PropTypes from 'prop-types';
import React from 'react';

import { createStyledComponent } from '../../styles';
import { Text } from '../Text';

const Container = createStyledComponent('rcx-headline', 'h1');

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
  /** Is this component visible? */
  invisible: PropTypes.bool,
  /** The heading level, from 1 to 6 (`h1` to `h6`) */
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
};
