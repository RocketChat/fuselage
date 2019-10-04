import PropTypes from 'prop-types';
import React from 'react';

import { useClassName } from '../../hooks';

export const Subtitle = React.forwardRef(function Headline({
  as: _as,
  className,
  invisible,
  level = 2,
  ...props
}, ref) {
  const Component = _as || `h${ level }`;

  const classNames = {
    container: useClassName('rcx-subtitle', { invisible }, className),
  };

  return <Component className={classNames.container} ref={ref} {...props} />;
});

Subtitle.defaultProps = {
  level: 2,
};

Subtitle.displayName = 'Subtitle';

Subtitle.propTypes = {
  /**
   * The component which will behave as a `Subtitle`
   */
  as: PropTypes.oneOfType([PropTypes.string, PropTypes.elementType]),
  /**
   * Is this component visible?
   */
  invisible: PropTypes.bool,
  /**
   * The heading level, from 1 to 6 (`h1` to `h6`)
   */
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
};
