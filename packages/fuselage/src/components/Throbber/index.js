import { css } from '@rocket.chat/css-in-js';
import PropTypes from 'prop-types';
import React, { forwardRef } from 'react';

import { Box } from '../Box';
import { useCss } from '../Box/useCss';

function Circle({ disabled, size, circleCount, iteration, inheritColor }) {
  const circleClassName = useCss(css`
    animation-duration: ${ circleCount * 0.466 }s;
    animation-delay: ${ iteration * 0.16 }s;
  `, [circleCount, iteration]);

  return <Box
    componentClassName='rcx-throbber__circle'
    is='span'
    className={circleClassName}
    mod-disabled={disabled}
    mod-size={size}
    mod-inherit-color={inheritColor}
  />;
}

export const Throbber = forwardRef(function Throbber({
  disabled,
  size = 'x16',
  circleCount = 3,
  inheritColor,
  ...props
}, ref) {
  return <Box
    componentClassName='rcx-throbber'
    is='div'
    ref={ref}
    {...props}
  >
    {Array.from(
      { length: circleCount || 3 },
      (_, iteration) => <Circle
        key={iteration}
        iteration={iteration}
        disabled={!!disabled}
        size={size}
        inheritColor={!!inheritColor}
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
