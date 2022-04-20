import type { ComponentProps } from 'react';
import React from 'react';

import { prependClassName } from '../../helpers/prependClassName';
import type Box from '../Box';

type TagProps = ComponentProps<typeof Box> & {
  small?: boolean;
  variant?:
    | 'secondary'
    | 'primary'
    | 'danger'
    | 'warning'
    | 'ghost'
    | 'default';
  medium?: boolean;
  disabled?: boolean;
};

export function Tag({
  is: TagName = 'span',
  small,
  medium,
  className,
  disabled,
  onClick,
  variant = 'default',
  ...props
}: TagProps) {
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
    <TagName
      className={prependClassName(className as string, `rcx-tag ${modifiers}`)}
      {...props}
    />
  );
}
