import React, { ElementType } from 'react';

import { prependClassName } from '../../helpers/prependClassName';

export type BadgeProps = {
  is?: ElementType;
  variant?: 'secondary' | 'primary' | 'danger' | 'warning' | 'ghost';
  disabled?: boolean;
  className?: string;
  children?: any;
  title?: any;
};

export function Badge({
  is: Tag = 'span',
  variant = 'secondary',
  className,
  disabled,
  ...props
}: BadgeProps) {
  return (
    <Tag
      className={prependClassName(
        className,
        `rcx-box rcx-box--full rcx-badge ${
          disabled ? 'rcx-badge--disabled' : ''
        } rcx-badge--${variant}`
      )}
      {...props}
    />
  );
}
