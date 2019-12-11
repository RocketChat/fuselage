import PropTypes from 'prop-types';
import React from 'react';

import { Box } from '../Box';
import { Skeleton } from './Skeleton';

export function Headline({
  children,
  level,
  ...props
}) {
  return <Box componentClassName='rcx-headline' is={`h${ level }`} {...props}>
    <Box children={children} is='span' textStyle='headline' />
  </Box>;
}

Headline.defaultProps = {
  level: 1,
};

Headline.displayName = 'Headline';

Headline.propTypes = {
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
};

Headline.Skeleton = Skeleton;
