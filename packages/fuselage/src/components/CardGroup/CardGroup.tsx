import type { ReactNode } from 'react';
import React from 'react';

import { appendClassName } from '../../helpers/appendClassName';
import { patchChildren } from '../../helpers/patchChildren';
import Box from '../Box';

type CardGroupProps = {
  align?: 'start' | 'center' | 'end';
  stretch?: boolean;
  wrap?: boolean;
  vertical?: boolean;
  small?: boolean;
  large?: boolean;
  children?: ReactNode;
};

export const CardGroup = ({
  align = 'start',
  children,
  stretch,
  vertical,
  wrap,
  small,
  large,
  ...props
}: CardGroupProps) => (
  <Box
    rcx-card-group
    rcx-card-group--align={align}
    rcx-card-group--stretch={stretch}
    rcx-card-group--vertical={vertical}
    rcx-card-group--small={small}
    rcx-card-group--large={large}
    rcx-card-group--wrap={wrap}
    role='group'
    {...props}
  >
    {patchChildren(
      children,
      (childProps: { className: string | string[] }) => ({
        className: appendClassName(
          childProps.className,
          'rcx-card-group__item'
        ),
      })
    )}
  </Box>
);
