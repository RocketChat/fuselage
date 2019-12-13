import PropTypes from 'prop-types';
import React from 'react';

import { Box } from '../Box';
import { Text } from '../Text';

export function SubtitleSkeleton({ animated, ...props }) {
  return <Box componentClassName='rcx-subtitle' {...props}>
    <Text.Skeleton animated={animated} defaultColor subtitle />
  </Box>;
}

export function Subtitle({
  level = 2,
  ...props
}) {
  return <Box is={`h${ level }`} componentClassName='rcx-subtitle' {...props} />;
}

Subtitle.propTypes = {
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
};

Subtitle.Skeleton = SubtitleSkeleton;
