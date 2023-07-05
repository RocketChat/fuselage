import type {
  Ref,
  ComponentProps,
  ReactNode,
  MouseEvent,
  AllHTMLAttributes,
} from 'react';
import React, { forwardRef, memo } from 'react';

import { prevent } from '../../../helpers/prevent';
import type Box from '../../Box/Box';

type OptionProps = {
  is?: ComponentProps<typeof Box>['is'];
  id?: string;
  children?: ReactNode;
  focus?: boolean;
  selected?: boolean;
  className?: ComponentProps<typeof Box>['className'];
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
      }: OptionProps,
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
