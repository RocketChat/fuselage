import type { AllHTMLAttributes, RefAttributes } from 'react';
import { useMemo } from 'react';

import { Box, type BoxProps } from '../Box';
import { Icon, type IconProps } from '../Icon';

export type ButtonProps = Omit<BoxProps, 'ref'> & {
  variant?:
    | 'primary'
    | 'secondary'
    | 'danger'
    | 'warning'
    | 'success'
    | 'secondary-danger'
    | 'secondary-warning'
    | 'secondary-success';
  size?: 'mini' | 'tiny' | 'small' | 'medium' | 'large';
  disabled?: boolean;
  loading?: boolean;
  square?: boolean;
  external?: boolean;
  icon?: IconProps['name'];
} & Omit<
    AllHTMLAttributes<HTMLButtonElement | HTMLAnchorElement>,
    'is' | 'className' | 'size'
  > &
  RefAttributes<HTMLButtonElement | HTMLAnchorElement>;

/**
 * Indicates an actionable user action.
 */
function Button({
  ref,
  variant,
  external,
  icon,
  is = 'button',
  rel: _rel,
  size,
  square,
  loading,
  disabled,
  children,
  ...props
}: ButtonProps) {
  const extraProps =
    (is === 'a' && {
      rel: external ? 'noopener noreferrer' : undefined,
      target: external ? '_blank' : undefined,
    }) ||
    (is === 'button' && {
      type: 'button',
    }) ||
    {};

  const variantProps = useMemo(
    () => (variant ? { [`rcx-button--${variant}`]: true } : {}),
    [variant],
  );

  return (
    <Box
      is={is}
      type='button'
      rcx-button
      {...variantProps}
      rcx-button--small={size === 'small'}
      rcx-button--medium={size === 'medium'}
      rcx-button--large={size === 'large'}
      rcx-button--square={square}
      rcx-button--tiny-square={size === 'tiny' && square}
      rcx-button--mini-square={size === 'mini' && square}
      rcx-button--small-square={size === 'small' && square}
      rcx-button--medium-square={size === 'medium' && square}
      rcx-button--large-square={size === 'large' && square}
      rcx-button--loading={loading}
      disabled={disabled || loading}
      ref={ref}
      {...extraProps}
      {...props}
    >
      <span className='rcx-button--content'>
        {icon && !loading && (
          <Icon size='x16' name={icon} marginInlineEnd={4} />
        )}
        {loading && <Icon size='x16' name='loading' marginInlineEnd={4} />}
        {children}
      </span>
    </Box>
  );
}

export default Button;
