import React, { ComponentProps, forwardRef, Ref } from 'react';

import { useStyleSheet } from '../../hooks/useStyleSheet';
import { Box } from '../Box';
import tooltipStyleSheet from './Tooltip.styles.scss';

type TooltipProps = ComponentProps<typeof Box> & {
  placement?:
    | 'top-start'
    | 'top-middle'
    | 'top-end'
    | 'bottom-start'
    | 'bottom-middle'
    | 'bottom-end'
    | 'left-start'
    | 'left-middle'
    | 'left-end'
    | 'right-start'
    | 'right-middle'
    | 'right-end'
    | 'top'
    | 'left'
    | 'bottom'
    | 'right'
    | null;
};

const Tooltip = forwardRef(function Tooltip(
  { placement, ...props }: TooltipProps,
  ref: Ref<HTMLElement>
) {
  useStyleSheet();
  useStyleSheet(tooltipStyleSheet);

  const [direction, position] = placement
    ? placement.split('-')
    : [false, false];

  return (
    <Box
      is='div'
      ref={ref}
      rcx-tooltip
      rcx-tooltip--dir={direction}
      rcx-tooltip--pos={position}
      {...props}
    />
  );
});

export default Tooltip;
