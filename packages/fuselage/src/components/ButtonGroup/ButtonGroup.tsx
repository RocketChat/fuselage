import React, { ComponentProps } from 'react';

import { appendClassName } from '../../helpers/appendClassName';
import { patchChildren } from '../../helpers/patchChildren';
import { Box } from '../Box';

type ButtonGroupProps = ComponentProps<typeof Box> & {
  align?: 'start' | 'center' | 'end';
  stretch?: boolean;
  wrap?: boolean;
  vertical?: boolean;
  small?: boolean;
  medium?: boolean;
};

export const ButtonGroup = ({
  align = 'start',
  children,
  stretch,
  vertical,
  wrap,
  small,
  medium,
  ...props
}: ButtonGroupProps) => (
  <Box
    rcx-button-group
    rcx-button-group--align={align}
    rcx-button-group--stretch={stretch}
    rcx-button-group--vertical={vertical}
    rcx-button-group--small={small}
    rcx-button-group--medium={medium}
    rcx-button-group--wrap={wrap}
    role='group'
    {...props}
  >
    {patchChildren(
      children,
      (childProps: { className: string | string[] }) => ({
        className: appendClassName(
          childProps.className,
          'rcx-button-group__item'
        ),
      })
    )}
  </Box>
);
