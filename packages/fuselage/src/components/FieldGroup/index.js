import PropTypes from 'prop-types';
import React from 'react';

import { useChildrenWithClassName, useClassName } from '../../hooks';
import { Field } from '../Field';

/**
 * A container for grouping fields that semantically share a common data context.
 */
export const FieldGroup = React.forwardRef(function FieldGroup({
  as: Component = 'fieldset',
  className,
  children,
  invisible,
  ...props
}, ref) {
  const classNames = {
    container: useClassName('rcx-field-group', {
      invisible,
    }, className),
    item: useClassName('rcx-field-group__item'),
  };

  const childrenWithClassName = useChildrenWithClassName(classNames.item, children, (child) => child.type === Field);

  return <Component className={classNames.container} ref={ref} role='group' {...props}>
    {childrenWithClassName}
  </Component>;
});

FieldGroup.defaultProps = {
  as: 'fieldset',
};

FieldGroup.displayName = 'FieldGroup';

FieldGroup.propTypes = {
  /**
   * The component which will behave as a `FieldGroup`
   */
  as: PropTypes.oneOfType([PropTypes.string, PropTypes.elementType]),
  /**
   * Is this component visible?
   */
  invisible: PropTypes.bool,
};
