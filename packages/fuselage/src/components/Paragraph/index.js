import PropTypes from 'prop-types';
import React from 'react';

import { useClassName } from '../../hooks';

export const Paragraph = React.forwardRef(function Paragraph({
  as: Component = 'p',
  className,
  invisible,
  ...props
}, ref) {
  const classNames = {
    container: useClassName('rcx-paragraph', { invisible }, className),
  };

  return <Component className={classNames.container} ref={ref} {...props} />;
});

Paragraph.defaultProps = {
  as: 'p',
};

Paragraph.displayName = 'Paragraph';

Paragraph.propTypes = {
  /**
   * The component which will behave as a `Paragraph`
   */
  as: PropTypes.oneOfType([PropTypes.string, PropTypes.elementType]),
  /**
   * Is this component visible?
   */
  invisible: PropTypes.bool,
};
