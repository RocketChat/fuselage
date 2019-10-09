import PropTypes from 'prop-types';
import React from 'react';

import { useClassName } from '../../hooks';

/**
 * A primitive component with normalized styles.
 */
export const Box = React.forwardRef(function Box({
  className,
  invisible = false,
  is: Component = 'div',
  ...props
}, ref) {
  const compoundClassName = useClassName('rcx-box', { invisible }, className);

  return <Component className={compoundClassName} ref={ref} {...props} />;
});

Box.defaultProps = {
  is: 'div',
  invisible: false,
};

Box.displayName = 'Box';

Box.propTypes = {
  /**
   * The component which will render as a `Box`
   */
  is: PropTypes.elementType,
  /**
   * Is this component visible?
   */
  invisible: PropTypes.bool,
};
