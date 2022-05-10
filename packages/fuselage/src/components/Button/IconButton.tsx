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
type IconButtonProps = ComponentProps<typeof Box> &
  ButtonSize & {
    icon: ComponentProps<typeof Icon>['name'];
    children?: ReactNode;

    primary?: boolean;
    secondary?: boolean;
    info?: boolean;
    secondaryInfo?: boolean;
    danger?: boolean;
    secondaryDanger?: boolean;
    warning?: boolean;
    secondaryWarning?: boolean;
    success?: boolean;
    secondarySuccess?: boolean;
  };

const getSize = ({ mini }: ButtonSize) => (mini ? 'x16' : 'x20');

export const IconButton = forwardRef(
  (
    {
      icon,
      children,
      primary,
      info,
      secondary,
      secondaryInfo,
      danger,
      secondaryDanger,
      warning,
      secondaryWarning,
      success,
      secondarySuccess,
      square,
      ...props
    }: IconButtonProps,
    ref: Ref<HTMLElement>
  ) => {
    const kindAndVariantProps = useMemo(() => {
      const variant =
        ((primary || info) && 'primary') ||
        (secondary && 'secondary') ||
        (secondaryInfo && 'ghost-info') ||
        (danger && 'danger') ||
        (secondaryDanger && 'ghost-danger') ||
        (warning && 'warning') ||
        (secondaryWarning && 'ghost-warning') ||
        (success && 'success') ||
        (secondarySuccess && 'ghost-success');

      if (variant) {
        return {
          [`rcx-button--${[variant].filter(Boolean).join('-')}`]: true,
        };
      }

      return {};
    }, [
      primary,
      info,
      secondary,
      secondaryInfo,
      danger,
      secondaryDanger,
      warning,
      secondaryWarning,
      success,
      secondarySuccess,
    ]);

    return (
      <Box
        is='button'
        rcx-button
        rcx-button--icon
        rcx-button--square={square}
        {...kindAndVariantProps}
        rcx-button--small-square={props.small}
        rcx-button--tiny-square={props.tiny}
        rcx-button--mini-square={props.mini}
        ref={ref}
        {...props}
      >
        {children}
        <Icon name={icon} size={getSize(props)} />
      </Box>
    );
  }
);
