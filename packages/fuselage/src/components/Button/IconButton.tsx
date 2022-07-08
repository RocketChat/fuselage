import type { ComponentProps, ReactNode, Ref } from 'react';
import React, { useMemo, forwardRef } from 'react';

import Box from '../Box';
import { Icon } from '../Icon';

type ButtonSize = {
  square?: boolean;
  mini?: boolean;
  tiny?: boolean;
  small?: boolean;
};

type IconButtonProps = {
  icon: ComponentProps<typeof Icon>['name'];
  children?: ReactNode;
  primary?: boolean;
  secondary?: boolean;
  info?: boolean;
  danger?: boolean;
  warning?: boolean;
  success?: boolean;
} & ButtonSize &
  ComponentProps<typeof Box>;

const getSize = ({ mini }: ButtonSize) => (mini ? 'x16' : 'x20');

export const IconButton = forwardRef(
  (
    {
      icon,
      children,
      primary,
      info,
      secondary,
      danger,
      warning,
      success,
      square,
      small,
      tiny,
      mini,
      ...props
    }: IconButtonProps,
    ref: Ref<HTMLElement>
  ) => {
    const kindAndVariantProps = useMemo(() => {
      const variant =
        (secondary && info && 'secondary-info') ||
        (secondary && danger && 'secondary-danger') ||
        (secondary && warning && 'secondary-warning') ||
        (secondary && success && 'secondary-success') ||
        ((primary || info) && 'info') ||
        (success && 'success') ||
        (warning && 'warning') ||
        (danger && 'danger') ||
        (secondary && 'secondary');

      if (variant) {
        return {
          [`rcx-button--icon-${[variant].filter(Boolean).join('-')}`]: true,
        };
      }

      return {};
    }, [primary, info, secondary, danger, warning, success]);

    return (
      <Box
        is='button'
        type='button'
        rcx-button
        rcx-button--icon
        rcx-button--square={square}
        {...kindAndVariantProps}
        rcx-button--small-square={small}
        rcx-button--tiny-square={tiny}
        rcx-button--mini-square={mini}
        ref={ref}
        {...props}
      >
        {children}
        <Icon name={icon} size={getSize({ mini })} />
      </Box>
    );
  }
);
