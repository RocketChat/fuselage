import PropTypes from 'prop-types';
import React from 'react';

import { Box } from '../Box';
import { Text } from '../Text';
import { Skeleton } from './Skeleton';

const Container = Box.extend('rcx-headline', 'h1');

export function Headline({
  children,
  level,
  ...props
}) {
  return <Container is={`h${ level }`} {...props}>
    <Text children={children} headline />
  </Container>;
}

Headline.defaultProps = {
  level: 1,
};

Headline.displayName = 'Headline';

Headline.propTypes = {
  /** Is this component visible? */
  invisible: PropTypes.bool,
  /** The heading level, from 1 to 6 (`h1` to `h6`) */
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
};

Headline.Skeleton = Skeleton;
