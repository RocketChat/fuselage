import PropTypes from 'prop-types';
import React from 'react';

import { useClassName } from '../../hooks';

export const Hint = React.forwardRef(function Hint({
  as: Component = 'div',
  className,
  invisible,
  ...props
}, ref) {
  const classNames = {
    container: useClassName('rcx-hint', { invisible }, className),
  };

  return <Component className={classNames.container} ref={ref} {...props} />;
});

Hint.defaultProps = {
  as: 'div',
};

Hint.displayName = 'Hint';

Hint.propTypes = {
  /**
   * The component which will behave as a `Hint`
   */
  as: PropTypes.oneOfType([PropTypes.string, PropTypes.elementType]),
  /**
   * Is this component visible?
   */
  invisible: PropTypes.bool,
};
