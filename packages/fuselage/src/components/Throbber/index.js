import { css } from '@rocket.chat/css-in-js';
import PropTypes from 'prop-types';
import React, { forwardRef } from 'react';

import { Box } from '../Box';
import { sizePropType } from '../../propTypes/sizes';

function Circle({ disabled, size, circleCount, iteration, inheritColor }) {
  return <Box
    is='span'
    className={css`
      animation-duration: ${ circleCount * 0.466 }s;
      animation-delay: ${ iteration * 0.16 }s;
    `}
    rcx-throbber__circle
    rcx-throbber__circle--disabled={disabled}
    rcx-throbber__circle--inherit-color={inheritColor}
    width={size}
    height={size}
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
    rcx-throbber
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
