import PropTypes from 'prop-types';
import React from 'react';

import { Box } from '../Box';
import { Text } from '../Text';

export function HeadlineSkeleton({
  animated = false,
  ...props
}) {
  return <Box componentClassName='rcx-headline' {...props}>
    <Text.Skeleton animated={animated} defaultColor headline />
  </Box>;
}

export function Headline({
  level = 1,
  ...props
}) {
  return <Box componentClassName='rcx-headline' is={`h${ level }`} {...props} />;
}

Headline.propTypes = {
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
};

Headline.Skeleton = HeadlineSkeleton;
