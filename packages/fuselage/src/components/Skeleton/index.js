import PropTypes from 'prop-types';
import React from 'react';

import { Box } from '../Box';

export function Skeleton({
  height,
  variant = 'text',
  width,
  ...props
}) {
  return <Box
    is='span'
    componentClassName='rcx-skeleton'
    style={{ width, height }}
    mod-text={variant === 'text'}
    mod-rect={variant === 'rect'}
    {...props}
  />;
}

Skeleton.propTypes = {
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  variant: PropTypes.oneOf(['text', 'rect']),
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};
