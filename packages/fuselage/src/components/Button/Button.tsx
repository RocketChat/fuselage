import type { ComponentProps, Ref } from 'react';
import React, { forwardRef, useMemo } from 'react';

import Box from '../Box';

export type ButtonProps = ComponentProps<typeof Box> & {
  primary?: boolean;
  secondary?: boolean;
  danger?: boolean;
  warning?: boolean;
  success?: boolean;

  disabled?: boolean;
  small?: boolean;
  mini?: boolean;
  tiny?: boolean;
  square?: boolean;
  external?: boolean;
};

export const Button = forwardRef(function Button(
  {
    primary,
    secondary,
    danger,
    warning,
    success,
    external,
    is = 'button',
    rel: _rel,
    small,
    tiny,
    mini,
    square,
    ...props
  }: ButtonProps,
  ref: Ref<HTMLElement>
) {
  const extraProps =
    (is === 'a' && {
      rel: external ? 'noopener noreferrer' : undefined,
      target: external ? '_blank' : undefined,
    }) ||
    (is === 'button' && {
      type: 'button',
    }) ||
    {};

  const kindAndVariantProps = useMemo(() => {
    const variant =
      (primary && 'primary') ||
      (secondary && success && 'secondary-success') ||
      (secondary && warning && 'secondary-warning') ||
      (secondary && danger && 'secondary-danger') ||
      (success && 'success') ||
      (warning && 'warning') ||
      (danger && 'danger') ||
      (secondary && 'secondary');

    if (variant) {
      return {
        [`rcx-button--${[variant].filter(Boolean).join('-')}`]: true,
      };
    }

    return {};
  }, [primary, secondary, danger, warning, success]);

  return (
    <Box
      animated
      is={is}
      type='button'
      rcx-button
      {...kindAndVariantProps}
      rcx-button--small={small}
      rcx-button--square={square}
      rcx-button--small-square={small && square}
      rcx-button--tiny-square={tiny && square}
      rcx-button--mini-square={mini && square}
      ref={ref}
      {...extraProps}
      {...props}
    />
  );
});

export default Button;
