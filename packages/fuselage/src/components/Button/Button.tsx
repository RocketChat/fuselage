import type { AllHTMLAttributes } from 'react';
import { forwardRef, useMemo, Children } from 'react';

import { Box, type BoxProps } from '../Box';
import { Icon, type IconProps } from '../Icon';

export type ButtonProps = BoxProps & {
  primary?: boolean;
  secondary?: boolean;
  danger?: boolean;
  warning?: boolean;
  success?: boolean;
  disabled?: boolean;
  loading?: boolean;
  mini?: boolean;
  tiny?: boolean;
  small?: boolean;
  medium?: boolean;
  large?: boolean;
  square?: boolean;
  external?: boolean;
  icon?: IconProps['name'];
} & Omit<
    AllHTMLAttributes<HTMLButtonElement | HTMLAnchorElement>,
    'is' | 'className' | 'size'
  >;

/**
 * Indicates an actionable user action.
 */
const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  function Button(
    {
      primary,
      secondary,
      danger,
      warning,
      success,
      external,
      icon,
      is = 'button',
      rel: _rel,
      tiny,
      mini,
      small,
      medium,
      large,
      square,
      loading,
      disabled,
      children,
      ...props
    },
    ref,
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

    // --- Accessibility Check (Dev Only) ---
    if (process.env.NODE_ENV !== 'production') {
      const childrenArray = Children.toArray(children);
      const hasTextContent = childrenArray.some(
        (child) => typeof child === 'string' && child.trim().length > 0
      );

      const isVisualOnly = !hasTextContent && (!!icon || !!loading || square);

      if (isVisualOnly && !props['aria-label'] && !props['aria-labelledby']) {
        console.warn(
          `Fuselage [Button]: Buttons without visible text (icon-only or square buttons) must provide an 'aria-label' or 'aria-labelledby' prop for accessibility.`
        );
      }
    }

    return (
      <Box
        is={is}
        type='button'
        rcx-button
        {...kindAndVariantProps}
        rcx-button--small={small}
        rcx-button--medium={medium}
        rcx-button--large={large}
        rcx-button--square={square}
        rcx-button--tiny-square={tiny && square}
        rcx-button--mini-square={mini && square}
        rcx-button--small-square={small && square}
        rcx-button--medium-square={medium && square}
        rcx-button--large-square={large && square}
        rcx-button--loading={loading}
        disabled={disabled || loading}
        ref={ref}
        {...extraProps}
        {...props}
      >
        <span className='rcx-button--content'>
          {icon && !loading && <Icon size='x16' name={icon} mie={4} />}
          {loading && <Icon size='x16' name='loading' mie={4} />}
          {children}
        </span>
      </Box>
    );
  },
);

export default Button;