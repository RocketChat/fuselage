import PropTypes from 'prop-types';
import React from 'react';

import { Box } from '../Box';

export function Skeleton({
  variant = 'text',
  ...props
}) {
  return <Box
    is='span'
    rcx-skeleton
    rcx-skeleton--text={variant === 'text'}
    rcx-skeleton--rect={variant === 'rect'}
    {...props}
  />;
}

Skeleton.propTypes = {
  variant: PropTypes.oneOf(['text', 'rect']),
};
