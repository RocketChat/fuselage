import { css } from '@rocket.chat/css-in-js';
import React, {
  ComponentProps,
  forwardRef,
  ForwardRefExoticComponent,
} from 'react';

import { Box } from '../Box';

type ThrobberProps = Omit<ComponentProps<typeof Box>, 'disabled' | 'size'> & {
  circleCount?: number;
  disabled?: boolean;
  inheritColor?: boolean;
  size?: string;
};

type CircleProps = ThrobberProps & {
  iteration: number | undefined;
};

function Circle({
  disabled,
  circleCount,
  iteration,
  inheritColor,
  ...props
}: CircleProps) {
  return (
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
}

export const Throbber: ForwardRefExoticComponent<ThrobberProps> = forwardRef(
  function Throbber(
    { disabled, size = 'x16', circleCount = 3, inheritColor, ...props },
    ref
  ) {
    return (
      <Box rcx-throbber ref={ref} {...props}>
        {Array.from({ length: circleCount || 3 }, (_, iteration) => (
          <Circle
            key={iteration}
            iteration={iteration}
            disabled={!!disabled}
            size={size}
            inheritColor={!!inheritColor}
          />
        ))}
      </Box>
    );
  }
);
