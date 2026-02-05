import type { Keys as IconName } from '@rocket.chat/icons';
import type { ReactElement } from 'react';
import { isValidElement, useMemo, forwardRef } from 'react';

import { Box, type BoxProps } from '../Box';
import { Icon, type IconProps } from '../Icon';

type ButtonSize = {
  large?: boolean;
  medium?: boolean;
  small?: boolean;
  tiny?: boolean;
  mini?: boolean;
};

export type IconButtonProps = {
  icon: IconName | ReactElement;
  primary?: boolean;
  secondary?: boolean;
  info?: boolean;
  danger?: boolean;
  warning?: boolean;
  success?: boolean;
  pressed?: boolean;
} & ButtonSize &
  BoxProps;

const getVariantClass = (variant: string) => {
  if (variant) {
    const variantClass = [
      `rcx-button--icon-${[variant].filter(Boolean).join('-')}`,
    ];
    return variantClass;
  }
  return [''];
};

const getPressedClass = (variant: string) => {
  const variantClass = [
    `rcx-button--icon-${[variant].filter(Boolean).join('-')}-pressed`,
  ];
  return variantClass;
};

const IconButton = forwardRef<HTMLElement, IconButtonProps>(
  (
    {
      icon,
      primary,
      info,
      secondary,
      danger,
      warning,
      success,
      mini,
      large,
      tiny,
      small,
      medium,
      pressed,
      children,
      ...props
    },
    ref,
  ) => {
    const variant = useMemo(
      () =>
        (secondary && danger && 'secondary-danger') ||
        (secondary && warning && 'secondary-warning') ||
        (secondary && success && 'secondary-success') ||
        (secondary && info && 'secondary-info') ||
        (info && 'info') ||
        (success && 'success') ||
        (warning && 'warning') ||
        (danger && 'danger') ||
        (primary && 'secondary-info') ||
        (secondary && 'secondary') ||
        '',
      [danger, info, primary, secondary, success, warning],
    );

    const kindAndVariantProps = useMemo(() => {
      const variantProp = {} as any;
      if (variant) {
        variantProp[`${getVariantClass(variant)}`] = true;
      }
      if (pressed) {
        variantProp[`${getPressedClass(variant)}`] = true;
      }
      return variantProp;
    }, [variant, pressed]);

    const size = useMemo(
      () =>
        (mini && 'mini') ||
        (tiny && 'tiny') ||
        (small && 'small') ||
        (medium && 'medium') ||
        (large && 'large') ||
        'large',
      [medium, mini, small, tiny, large],
    );

    const getSizeClass = () => ({ [`rcx-button--${size}-square`]: true });

    const getIconSize = () =>
      (large && 'x28') ||
      (medium && 'x24') ||
      (small && 'x20') ||
      (tiny && 'x16') ||
      (mini && 'x12') ||
      'x28';

    return (
      <Box
        is='button'
        type='button'
        rcx-button
        rcx-button--icon
        rcx-button--square
        {...kindAndVariantProps}
        {...getSizeClass()}
        rcx-button--icon-pressed={pressed}
        ref={ref}
        {...props}
      >
        {isValidElement(icon) ? (
          icon
        ) : (
          <Icon name={icon as IconProps['name']} size={getIconSize()} />
        )}
        {children}
      </Box>
    );
  },
);

export default IconButton;
