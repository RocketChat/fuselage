import PropTypes from 'prop-types';
import React, { forwardRef } from 'react';

import { Box } from '../Box';

export const Button = forwardRef(function Button({
  danger,
  success,
  external,
  ghost,
  is = 'button',
  primary,
  rel,
  small,
  square,
  ...props
}, ref) {
  const extraProps = (is === 'a' && {
    rel: external && 'noopener noreferrer',
    target: external && '_blank',
  })
  || (is === 'button' && {
    type: 'button',
  })
  || {};

  return <Box
    is={is}
    rcx-button
    rcx-button--danger={!primary && danger && !ghost}
    rcx-button--success={!primary && success && !ghost}
    rcx-button--ghost={!primary && !danger && ghost}
    rcx-button--ghost-danger={!primary && danger && ghost}
    rcx-button--ghost-success={!primary && success && ghost}
    rcx-button--primary={primary && !danger && !ghost}
    rcx-button--primary-danger={primary && danger && !ghost}
    rcx-button--primary-success={primary && success && !ghost}
    rcx-button--small={small}
    rcx-button--square={square}
    rcx-button--small-square={small && square}
    ref={ref}
    {...extraProps}
    {...props}
  />;
});

Button.propTypes = {
  external: PropTypes.bool,
};
