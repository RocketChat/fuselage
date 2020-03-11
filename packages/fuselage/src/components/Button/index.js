import PropTypes from 'prop-types';
import React, { forwardRef } from 'react';

import { ButtonVariant } from '..';

export const Button = forwardRef(function Button({
  danger,
  external,
  nude,
  ghost,
  is = 'button',
  primary,
  rel,
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

  const mapVariant = () => (primary && danger && 'primary-danger')
      || (primary && ghost && 'ghost-primary')
      || (primary && nude && 'nude-primary')
      || (primary && 'primary')
      || (ghost && danger && 'ghost-danger')
      || (ghost && 'ghost')
      || (nude && danger && 'nude-danger')
      || (nude && danger && 'ghost')
      || (danger && 'danger')
      || 'secondary';

  return <ButtonVariant
    is={is}
    variant={mapVariant()}
    ref={ref}
    {...extraProps}
    {...props}
  />;
});

Button.displayName = 'Button';

Button.propTypes = {
  external: PropTypes.bool,
};
