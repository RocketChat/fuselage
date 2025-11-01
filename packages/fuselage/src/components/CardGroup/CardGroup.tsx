import type { AllHTMLAttributes, ReactNode } from 'react';

import { appendClassName } from '../../helpers/appendClassName.js';
import { patchChildren } from '../../helpers/patchChildren.js';
import Box from '../Box/index.js';

type CardGroupProps = {
  align?: 'start' | 'center' | 'end';
  stretch?: boolean;
  wrap?: boolean;
  vertical?: boolean;
  small?: boolean;
  large?: boolean;
  children?: ReactNode;
} & Omit<AllHTMLAttributes<HTMLElement>, 'is' | 'wrap'>;

export const CardGroup = ({
  align = 'start',
  children,
  stretch,
  vertical,
  wrap,
  ...props
}: CardGroupProps) => (
  <Box
    rcx-card-group
    rcx-card-group--align={align}
    rcx-card-group--stretch={stretch}
    rcx-card-group--vertical={vertical}
    rcx-card-group--wrap={wrap}
    role='group'
    {...props}
  >
    {patchChildren(
      children,
      (childProps: { className: string | string[] }) => ({
        className: appendClassName(
          childProps.className,
          'rcx-card-group__item',
        ),
      }),
    )}
  </Box>
);
