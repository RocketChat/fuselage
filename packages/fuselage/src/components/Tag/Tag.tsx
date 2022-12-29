import type { AllHTMLAttributes, ReactNode } from 'react';
import React from 'react';

import { prependClassName } from '../../helpers/prependClassName';

type TagProps = {
  medium?: boolean;
  large?: boolean;
  variant?:
    | 'primary'
    | 'secondary'
    | 'danger'
    | 'warning'
    | 'secondary-danger'
    | 'featured';
  disabled?: boolean;
  icon?: ReactNode;
} & AllHTMLAttributes<HTMLSpanElement>;

export const Tag = ({
  large,
  medium,
  className,
  disabled,
  onClick,
  variant,
  children,
  icon,
  ...props
}: TagProps) => {
  const modifiers = [
    variant,
    medium && 'medium',
    large && 'large',
    disabled && 'disabled',
    onClick && 'clickable',
  ]
    .filter(Boolean)
    .map((modifier) => `rcx-tag--${modifier}`)
    .join(' ');

  return (
    <span
      className={prependClassName(className as string, `rcx-tag ${modifiers}`)}
      onClick={onClick}
      {...props}
    >
      {icon}
      <span className='rcx-tag__inner'>{children}</span>
    </span>
  );
};
