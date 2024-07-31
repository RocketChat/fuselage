import { css } from '@rocket.chat/css-in-js';
import type { ForwardedRef } from 'react';
import { forwardRef } from 'react';

import type { BoxProps } from '../Box';
import Box from '../Box';

/** @public */
export type ThrobberProps = Omit<BoxProps, 'disabled'> & {
  circleCount?: number;
  disabled?: boolean;
  inheritColor?: boolean;
};

type CircleProps = {
  circleCount: number;
  iteration: number;
  inheritColor?: boolean;
  disabled?: boolean;
} & Pick<BoxProps, 'size'>;

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

/** @public */
const Throbber = forwardRef(function Throbber(
  {
    disabled,
    size = 'x16',
    circleCount = 3,
    inheritColor,
    ...props
  }: ThrobberProps,
  ref: ForwardedRef<HTMLElement>
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

export default Throbber;
