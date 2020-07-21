import PropTypes from 'prop-types';
import React from 'react';

import { Box } from '../Box';

export const Tooltip = React.forwardRef(function Tooltip({
  placement,
  ...props
}, ref) {
  const [direction, position] = placement ? placement.split('-') : [false, false];

  return <Box
    is='div'
    ref={ref}
    rcx-tooltip
    rcx-tooltip--dir={direction}
    rcx-tooltip--pos={position}

    {...props}
  />;
});

Tooltip.propTypes = {
  position: PropTypes.oneOf([
    'top-start', 'top-middle', 'top-end',
    'bottom-start', 'bottom-middle', 'bottom-end',
    'left-start', 'left-middle', 'left-end',
    'right-start', 'right-middle', 'right-end',
    'top', 'left', 'bottom', 'right',
  ]),
};
