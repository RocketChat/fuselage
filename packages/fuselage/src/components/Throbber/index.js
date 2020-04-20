import { css } from '@rocket.chat/css-in-js';
import PropTypes from 'prop-types';
import React, { forwardRef } from 'react';

import { Box } from '../Box';
import { useCss } from '../Box/useCss';
import { getSizeValue, sizePropType } from '../../propTypes/sizes';

function Circle({ disabled, size, circleCount, iteration, inheritColor }) {
  const circleClassName = useCss(css`
    animation-duration: ${ circleCount * 0.466 }s;
    animation-delay: ${ iteration * 0.16 }s;
    width: ${ getSizeValue(size) };
    height: ${ getSizeValue(size) };
  `, [circleCount, iteration]);

  return <Box
    componentClassName='rcx-throbber__circle'
    is='span'
    className={circleClassName}
    mod-disabled={disabled}
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
  size: sizePropType,
  circleCount: PropTypes.number,
  inheritColor: PropTypes.bool,
};
