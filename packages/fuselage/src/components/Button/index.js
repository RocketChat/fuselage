import PropTypes from 'prop-types';
import React from 'react';

import { useClassName } from '../../hooks';

/**
 * A `Button` indicates an actionable user action.
 */
export const Button = React.forwardRef(function Button({
  as: Component = 'button',
  className,
  danger,
  external,
  ghost,
  invisible,
  primary,
  rel,
  small,
  square,
  ...props
}, ref) {
  const classNames = {
    container: useClassName('rcx-button', {
      danger,
      ghost,
      invisible,
      primary,
      small,
      square,
    }, className),
  };

  const extraProps = (Component === 'a' && {
    rel: external && 'noopener noreferrer',
    target: external && '_blank',
  })
  || (Component === 'button' && {
    type: 'button',
  })
  || {};

  return <Component className={classNames.container} ref={ref} {...extraProps} {...props} />;
});

Button.defaultProps = {
  as: 'button',
};

Button.displayName = 'Button';

Button.propTypes = {
  /**
   * The component which will behave as a `Button`
   */
  as: PropTypes.oneOfType([PropTypes.string, PropTypes.elementType]),
  /**
   * Is this component a link to an external URL?
   */
  external: PropTypes.bool,
  /**
   * Is this component visible?
   */
  invisible: PropTypes.bool,
};
