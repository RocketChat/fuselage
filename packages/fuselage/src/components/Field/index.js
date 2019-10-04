import PropTypes from 'prop-types';
import React from 'react';

import { useChildrenWithClassName, useClassName, Hint } from '../..';

export const Field = React.forwardRef(function Field({
  as: Component = 'div',
  children,
  className,
  invisible,
  ...props
}, ref) {
  const classNames = {
    container: useClassName('rcx-field', { invisible }, className),
    hint: useClassName('rcx-field__hint'),
  };

  const patchedChildren = useChildrenWithClassName(classNames.hint, children, (child) => child.type === Hint);

  return <Component children={patchedChildren} className={classNames.container} ref={ref} {...props} />;
});

Field.defaultProps = {
  as: 'div',
};

Field.displayName = 'Field';

Field.propTypes = {
  /**
   * The component which will behave as a `Field`
   */
  as: PropTypes.oneOfType([PropTypes.string, PropTypes.elementType]),
  /**
   * Is this component visible?
   */
  invisible: PropTypes.bool,
};
