import PropTypes from 'prop-types';
import React, { useMemo } from 'react';

import { Box } from '../Box';

const Container = Box.extend('rcx-field-group', 'fieldset');
const ItemContainer = Box.extend('rcx-field-group__item');

export const FieldGroup = React.forwardRef(function FieldGroup({
  children,
  ...props
}, ref) {
  const wrappedChildren = useMemo(() =>
    React.Children.map(children, (child, index) =>
      <ItemContainer key={index} children={child} />), [children]);

  return <Container children={wrappedChildren} ref={ref} role='group' {...props} />;
});

FieldGroup.displayName = 'FieldGroup';

FieldGroup.propTypes = {
  /** Is this component visible? */
  invisible: PropTypes.bool,
};
