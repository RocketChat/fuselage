import { css } from '@rocket.chat/css-in-js';
import type { ComponentProps } from 'react';
import React from 'react';

import Box from '../Box';

type CircleProps = {
  circleCount: number;
  iteration: number;
  inheritColor?: boolean;
  disabled?: boolean;
} & Pick<ComponentProps<typeof Box>, 'size'>;

const Circle = ({
  disabled,
  circleCount,
  iteration,
  inheritColor,
  ...props
}: CircleProps) => (
  <Box
    is='span'
    className={css`
      animation-duration: ${circleCount * 0.466}s;
      animation-delay: ${iteration * 0.16}s;
    `}
    rcx-throbber__circle
    rcx-throbber__circle--disabled={disabled}
    rcx-throbber__circle--inherit-color={inheritColor}
    {...props}
  />
);

export default Circle;
