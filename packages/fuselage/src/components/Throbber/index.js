import PropTypes from 'prop-types';
import React, { forwardRef } from 'react';

import { Box } from '../Box';

export const Throbber = forwardRef(function Throbber({ disabled, size = 'x16', circleCount = 3, inheritColor, ...props }, ref) {
  return <Box
    componentClassName='rcx-throbber'
    is='div'
    ref={ref}
    {...props}
  >
    {Array.from(
      { length: circleCount || 3 },
      (_, iteration) => <Box
        componentClassName='rcx-throbber__circle'
        is='span'
        mod-disabled={!!disabled}
        mod-size={size}
        style={{ animationDuration: `${ circleCount * 0.466 }s`, animationDelay: `${ iteration * 0.16 }s` }}
        mod-inherit-color={!!inheritColor && !disabled}
        key={iteration}
      />,
    )}
  </Box>;
});

Throbber.propTypes = {
  disabled: PropTypes.bool,
  size: PropTypes.oneOf(['x2', 'x4', 'x8', 'x12', 'x16',
    'x20', 'x24', 'x28', 'x32', 'x36', 'x40', 'x80', 'x120',
    'x160', 'x200', 'x240', 'x280', 'x320', 'x360', 'x400',
    'x440', 'x480', 'x520', 'x560', 'x600', 'x640', 'x680',
    'x720', 'x760', 'x800', 'x840', 'x880', 'x920', 'x960',
    'x1000', 'x1040', 'x1080', 'x1120', 'x1160', 'x1200',
    'x1240', 'x1280', 'x1320', 'x1360', 'x1400', 'x1440',
    'x1480', 'x1520', 'x1560', 'x1600']),
  circleCount: PropTypes.number,
  inheritColor: PropTypes.bool,
};
