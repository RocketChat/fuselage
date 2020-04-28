import PropTypes from 'prop-types';
import React from 'react';

import { Box } from '../Box';
import { Skeleton } from '../Skeleton';

export function Headline({
  level = 1,
  ...props
}) {
  return <Box is={`h${ level }`} rcx-headline {...props} />;
}

Headline.propTypes = {
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
};

export function HeadlineSkeleton(props) {
  return <Box rcx-headline {...props}>
    <Skeleton />
  </Box>;
}

Headline.Skeleton = HeadlineSkeleton;
