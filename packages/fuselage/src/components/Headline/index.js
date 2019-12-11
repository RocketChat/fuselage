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
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
};

Headline.Skeleton = Skeleton;
