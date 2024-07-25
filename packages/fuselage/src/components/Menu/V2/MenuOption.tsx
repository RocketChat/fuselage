import type { Ref, ReactNode, MouseEvent, AllHTMLAttributes } from 'react';
import React, { forwardRef, memo } from 'react';

import { prevent } from '../../../helpers/prevent';
import type { BoxProps } from '../../Box';

export type MenuOptionProps = {
  is?: BoxProps['is'];
  id?: string;
  children?: ReactNode;
  focus?: boolean;
  selected?: boolean;
  className?: BoxProps['className'];
  ref?: Ref<Element>;
  title?: string;
  disabled?: boolean;
  value?: string;
  variant?: 'danger' | 'success' | 'warning' | 'primary';
  onClick?: (event: MouseEvent<HTMLElement>) => void;
  description?: ReactNode;
} & Omit<AllHTMLAttributes<HTMLElement>, 'label'>;

const MenuOption = memo(
  forwardRef(
    (
      {
        is: Tag = 'li',
        id,
        children,
        focus,
        selected,
        className,
        title,
        disabled,
        variant,
        onClick,
        ...props
      }: MenuOptionProps,
      ref
    ) => (
      <Tag
        {...props}
        key={id}
        id={id}
        ref={ref}
        aria-selected={!!selected}
        aria-disabled={!!disabled}
        title={title}
        onClick={(e: React.MouseEvent<HTMLDivElement>) => {
          if (disabled) {
            prevent(e);
            return;
          }
          onClick?.(e);
        }}
        className={[
          'rcx-option',
          className,
          focus && 'rcx-option--focus',
          selected && 'rcx-option--selected',
          disabled && 'rcx-option--disabled',
          variant && `rcx-option--${variant}`,
        ]
          .filter(Boolean)
          .join(' ')}
      >
        {children}
      </Tag>
    )
  )
);

export default MenuOption;
