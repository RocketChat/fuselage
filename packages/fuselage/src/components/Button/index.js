import PropTypes from 'prop-types';
import React, { forwardRef } from 'react';

import { Box } from '../Box';

export const Button = forwardRef(function Button({
  danger,
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
    componentClassName='rcx-button'
    is={is}
    mod-danger={!primary && danger && !ghost}
    mod-ghost={!primary && !danger && ghost}
    mod-ghost-danger={!primary && danger && ghost}
    mod-primary={primary && !danger && !ghost}
    mod-primary-danger={primary && danger && !ghost}
    mod-small={small}
    mod-square={square}
    mod-small-square={small && square}
    ref={ref}
    {...extraProps}
    {...props}
  />;
});

Button.displayName = 'Button';

Button.propTypes = {
  external: PropTypes.bool,
};
