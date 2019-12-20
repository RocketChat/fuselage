import PropTypes from 'prop-types';
import React from 'react';

import { Box } from '../Box';
import { Skeleton } from '../Skeleton';

export function Subtitle({
  level = 2,
  ...props
}) {
  return <Box is={`h${ level }`} componentClassName='rcx-subtitle' {...props} />;
}

Subtitle.propTypes = {
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
};

export function SubtitleSkeleton(props) {
  return <Box componentClassName='rcx-subtitle' {...props}>
    <Skeleton />
  </Box>;
}

Subtitle.Skeleton = SubtitleSkeleton;
