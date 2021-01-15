import React, { forwardRef, useMemo } from 'react';

import { Box } from '../Box';

export const Button = forwardRef(function Button(
  {
    info,
    success,
    warning,
    danger,
    primary,
    ghost,
    nude,
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
      (primary && !ghost && !nude && 'primary') ||
      (!primary && ghost && !nude && 'ghost') ||
      (!primary && !ghost && nude && 'nude');

    if (kind || variant) {
      return {
        [`rcx-button--${[kind, variant].filter(Boolean).join('-')}`]: true,
      };
    }

    return {};
  }, [danger, ghost, info, nude, primary, success, warning]);

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
});

export default Button;
