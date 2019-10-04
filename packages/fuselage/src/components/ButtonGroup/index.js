import PropTypes from 'prop-types';
import React from 'react';

import { useChildrenWithClassName, useClassName } from '../../hooks';
import { Button } from '../Button';

/**
 * A container for grouping buttons that semantically share a common action context.
 */
export const ButtonGroup = React.forwardRef(function ButtonGroup({
  align,
  as: Component = 'div',
  className,
  children,
  invisible,
  stretch,
  vertical,
  wrap,
  ...props
}, ref) {
  const classNames = {
    container: useClassName('rcx-button-group', {
      align,
      invisible,
      stretch,
      vertical,
      stretchVertical: !!stretch && !!vertical,
      wrap,
    }, className),
    item: useClassName('rcx-button-group__item', { stretch }),
  };

  const childrenWithClassName = useChildrenWithClassName(classNames.item, children, (child) => child.type === Button);

  return <Component className={classNames.container} ref={ref} role='group' {...props}>
    {childrenWithClassName}
  </Component>;
});

ButtonGroup.defaultProps = {
  as: 'div',
};

ButtonGroup.displayName = 'ButtonGroup';

ButtonGroup.propTypes = {
  /**
   * The alignment that should be applied to the items
   */
  align: PropTypes.oneOf(['start', 'end']),
  /**
   * The component which will behave as a `ButtonGroup`
   */
  as: PropTypes.oneOfType([PropTypes.string, PropTypes.elementType]),
  /**
   * Is this component visible?
   */
  invisible: PropTypes.bool,
  /**
   * Will be the items stretched to fill space?
   */
  stretch: PropTypes.bool,
  /**
   * Is the items vertically placed?
   */
  vertical: PropTypes.bool,
  /**
   * Will wrap the items when they exceed the container space?
   */
  wrap: PropTypes.bool,
};
