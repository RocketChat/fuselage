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
  styles = ['rcx-box', {}],
  ...props
}, ref) {
  const [componentClassName, modifiers = {}] = styles;
  const enhancedClassName = useClassName(componentClassName, { ...modifiers, invisible }, className);

  return <Component className={enhancedClassName} ref={ref} {...props} />;
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
  /**
   * The styles object
   */
  styles: PropTypes.shape({
    0: PropTypes.string,
    1: PropTypes.object,
  }),
};
