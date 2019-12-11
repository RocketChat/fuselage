import PropTypes from 'prop-types';
import React, { forwardRef } from 'react';

import { Box } from '../Box';

const Container = Box.extend('rcx-button', 'button');

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

  return <Container
    is={is}
    mod-danger={danger}
    mod-ghost={ghost}
    mod-ghost-danger={ghost && danger}
    mod-primary={primary}
    mod-primary-danger={primary && danger}
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
