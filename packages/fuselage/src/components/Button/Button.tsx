import React, {
  ComponentProps,
  forwardRef,
  ForwardRefExoticComponent,
  useMemo,
} from 'react';

import { Box } from '../Box';

export type ButtonProps = ComponentProps<typeof Box> & {
  info?: boolean;
  success?: boolean;
  warning?: boolean;
  danger?: boolean;
  primary?: boolean;
  ghost?: boolean;
  nude?: boolean;
  ghostish?: boolean;
  small?: boolean;
  mini?: boolean;
  tiny?: boolean;
  square?: boolean;
  external?: boolean;
};

export const Button: ForwardRefExoticComponent<ButtonProps> = forwardRef(
  function Button(
    {
      info,
      success,
      warning,
      danger,
      primary,
      ghost,
      nude,
      ghostish,
      external,
      is = 'button',
      rel,
      small,
      tiny,
      mini,
      square,
      ...props
    },
    ref
  ) {
    const extraProps =
      (is === 'a' && {
        rel: external && 'noopener noreferrer',
        target: external && '_blank',
      }) ||
      (is === 'button' && {
        type: 'button',
      }) ||
      {};

    const kindAndVariantProps = useMemo(() => {
      const variant =
        (info && 'info') ||
        (success && 'success') ||
        (warning && 'warning') ||
        (danger && 'danger');

      const kind =
        (primary && !ghost && !nude && !ghostish && 'primary') ||
        (!primary && ghost && !nude && !ghostish && 'ghost') ||
        (!primary && !ghost && nude && !ghostish && 'nude') ||
        (!primary && !ghost && !nude && ghostish && 'ghostish');

      if (kind || variant) {
        return {
          [`rcx-button--${[kind, variant].filter(Boolean).join('-')}`]: true,
        };
      }

      return {};
    }, [danger, ghost, ghostish, info, nude, primary, success, warning]);

    return (
      <Box
        animated
        is={is}
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
  }
);

export default Button;
