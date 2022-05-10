import type { ComponentProps, ReactNode, Ref } from 'react';
import React, { useMemo, forwardRef } from 'react';

import Box from '../Box';
import { Icon } from '../Icon';

type ButtonSize = {
  mini?: boolean;
  tiny?: boolean;
  small?: boolean;
};
type IconButtonProps = ButtonSize & {
  icon: ComponentProps<typeof Icon>['name'];
  children?: ReactNode;

  primary?: boolean;
  secondary?: boolean;
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
      secondary,
      danger,
      secondaryDanger,
      warning,
      secondaryWarning,
      success,
      secondarySuccess,
      ...props
    }: IconButtonProps,
    ref: Ref<HTMLElement>
  ) => {
    const kindAndVariantProps = useMemo(() => {
      const variant =
        (primary && 'primary') ||
        (secondary && 'secondary') ||
        (danger && 'danger') ||
        (secondaryDanger && 'secondary-danger') ||
        (warning && 'warning') ||
        (secondaryWarning && 'secondary-warning') ||
        (success && 'success') ||
        (secondarySuccess && 'secondary-success');

      if (variant) {
        return {
          [`rcx-button--${[variant].filter(Boolean).join('-')}`]: true,
        };
      }

      return {};
    }, [
      primary,
      secondary,
      secondaryDanger,
      danger,
      warning,
      secondaryWarning,
      success,
      secondarySuccess,
    ]);

    return (
      <Box
        is='button'
        rcx-button--icon
        rcx-button--square
        {...kindAndVariantProps}
        rcx-button--small={props.small}
        rcx-button--tiny={props.tiny}
        rcx-button--mini={props.mini}
        ref={ref}
        {...props}
      >
        {children}
        <Icon name={icon} size={getSize(props)} />
      </Box>
    );
  }
);
