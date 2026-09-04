import type { Keys as IconName } from '@rocket.chat/icons';
import type { ReactElement } from 'react';
import { isValidElement, useContext, useMemo } from 'react';

import { Box, type BoxProps } from '../Box';
import {
  ButtonGroupContext,
  warnGhostOutsideJoinedGroup,
} from '../ButtonGroup/ButtonGroupContext';
import { Icon } from '../Icon';

export type IconButtonSize = {
  large?: boolean;
  medium?: boolean;
  small?: boolean;
  tiny?: boolean;
  mini?: boolean;
};

export type IconButtonProps = {
  icon: IconName | ReactElement<any>;
  primary?: boolean;
  secondary?: boolean;
  info?: boolean;
  danger?: boolean;
  warning?: boolean;
  success?: boolean;
  pressed?: boolean;
  /** Transparent "ghost" segment; only takes effect inside a joined `ButtonGroup`. */
  ghost?: boolean;
} & IconButtonSize &
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

function IconButton({
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
  ghost,
  children,
  ...props
}: IconButtonProps) {
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

  const { joined } = useContext(ButtonGroupContext);

  warnGhostOutsideJoinedGroup('IconButton', ghost, joined);

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
      rcx-button--ghost={ghost && joined}
      rcx-button--icon-pressed={pressed}
      {...props}
    >
      {isValidElement<any>(icon) ? (
        icon
      ) : (
        <Icon name={icon} size={getIconSize()} />
      )}
      {children}
    </Box>
  );
}

export default IconButton;
