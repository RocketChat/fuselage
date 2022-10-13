import type { AllHTMLAttributes, ComponentProps } from 'react';
import React from 'react';

import { prependClassName } from '../../helpers/prependClassName';
import type Box from '../Box';

type TagProps = Pick<ComponentProps<typeof Box>, 'onClick' | 'className'> & {
  small?: boolean;
  variant?: 'primary' | 'secondary' | 'danger' | 'warning' | 'secondary-danger';
  medium?: boolean;
  disabled?: boolean;
} & AllHTMLAttributes<HTMLSpanElement>;

export const Tag = ({
  small,
  medium,
  className,
  disabled,
  onClick,
  variant,
  ...props
}: TagProps) => {
  const modifiers = [
    variant,
    small && 'small',
    medium && 'medium',
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
    />
  );
};
