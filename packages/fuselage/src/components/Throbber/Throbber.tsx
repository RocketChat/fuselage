import type { ComponentProps, Ref } from 'react';
import React, { forwardRef } from 'react';

import Box from '../Box';
import Circle from './Circle';

type ThrobberProps = Omit<ComponentProps<typeof Box>, 'disabled'> & {
  circleCount?: number;
  disabled?: boolean;
  inheritColor?: boolean;
};

export const Throbber = forwardRef(function Throbber(
  {
    disabled,
    size = 'x16',
    circleCount = 3,
    inheritColor,
    ...props
  }: ThrobberProps,
  ref: Ref<HTMLElement>
) {
  return (
    <Box rcx-throbber ref={ref} {...props}>
      {Array.from({ length: circleCount || 3 }, (_, iteration) => (
        <Circle
          key={iteration}
          circleCount={circleCount}
          iteration={iteration}
          disabled={!!disabled}
          size={size}
          inheritColor={!!inheritColor}
        />
      ))}
    </Box>
  );
});
