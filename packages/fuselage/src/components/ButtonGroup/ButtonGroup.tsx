import type { HTMLAttributes, Ref } from 'react';
import React, { forwardRef } from 'react';

import { appendClassName } from '../../helpers/appendClassName';
import { patchChildren } from '../../helpers/patchChildren';

type ButtonGroupProps = {
  align?: 'start' | 'center' | 'end';
  stretch?: boolean;
  wrap?: boolean;
  vertical?: boolean;
  small?: boolean;
  large?: boolean;
} & HTMLAttributes<HTMLDivElement>;

export const ButtonGroup = forwardRef(function ButtonGroup(
  {
    align = 'start',
    children,
    stretch,
    vertical,
    wrap,
    small,
    large,
    ...props
  }: ButtonGroupProps,
  ref: Ref<HTMLDivElement>
) {
  return (
    <div
      ref={ref}
      className={[
        'rcx-button-group',
        stretch && 'rcx-button-group--stretch',
        vertical && 'rcx-button-group--vertical',
        align && `rcx-button-group--align-${align}`,
        small && 'rcx-button-group--small',
        large && 'rcx-button-group--large',
        wrap && 'rcx-button-group--wrap',
      ]
        .filter(Boolean)
        .join(' ')}
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
    </div>
  );
});
