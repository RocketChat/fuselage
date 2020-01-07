import PropTypes from 'prop-types';
import React, { forwardRef } from 'react';

import { Box } from '../Box';

const Container = Box.extend('rcx-button', 'button');

export const Button2 = forwardRef(function Button2({
  external,
  is = 'button',
  rel,
  small,
  large,
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
    ref={ref}
    mod-small={small}
    mod-large={large}
    mod-square={square}
    mod-small-square={small && square}
    mod-large-square={large && square}
    {...extraProps}
    {...props}
  />;
});

Button2.displayName = 'Button2';

Button2.propTypes = {
  external: PropTypes.bool,
};
