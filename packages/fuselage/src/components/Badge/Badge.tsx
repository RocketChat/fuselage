import type { ElementType } from 'react';
import React from 'react';

import { prependClassName } from '../../helpers/prependClassName';

export type BadgeProps = {
  is?: ElementType;
  variant?: 'secondary' | 'primary' | 'danger' | 'warning' | 'ghost' | 'small';
  small?: boolean;
  disabled?: boolean;
  className?: string;
  children?: any;
  title?: any;
};

export function Badge({
  is: Tag = 'span',
  variant = 'secondary',
  small,
  className,
  disabled,
  ...props
}: BadgeProps) {
  return (
    <Tag
      className={prependClassName(
        className,
        `rcx-box rcx-box--full rcx-badge ${small ? 'rcx-badge--small' : ''} ${
          disabled ? 'rcx-badge--disabled' : ''
        } rcx-badge--${variant}`
      )}
      {...props}
    />
  );
}
