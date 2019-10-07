import PropTypes from 'prop-types';
import React from 'react';

import { Box } from '../Box';
import { useClassName } from '../../hooks';

/**
 * A `Button` indicates an actionable user action.
 */
export const Button = React.forwardRef(function Button({
  className,
  is = 'button',
  danger,
  external,
  ghost,
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

  const compoundClassName = useClassName('rcx-button', {
    danger,
    ghost,
    ghostDanger: ghost && danger,
    primary,
    primaryDanger: primary && danger,
    small,
    square,
    smallSquare: small && square,
  }, className);

  return <Box className={compoundClassName} is={is} ref={ref} {...extraProps} {...props} />;
});

Button.defaultProps = {
  basic: true,
  medium: true,
};

Button.displayName = 'Button';

Button.propTypes = {
  /**
   * Is this component a link to an external URL?
   */
  external: PropTypes.bool,
};
