import React, { ComponentProps } from 'react';

import { Box } from '..';
import { prependClassName } from '../../helpers/prependClassName';

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
    .map((modifier) => `rcx-tag--${modifier}`)
    .filter(Boolean)
    .join(' ');

  return (
    <TagName
      className={prependClassName(className as string, `rcx-tag ${modifiers}`)}
      {...props}
    />
  );
}
