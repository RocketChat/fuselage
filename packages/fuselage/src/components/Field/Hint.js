import PropTypes from 'prop-types';
import React, { forwardRef } from 'react';

import { Box } from '../Box';
import { Text } from '../Text';

const Container = Box.extend('rcx-field__hint');

export const FieldHint = forwardRef(function FieldHint({
  children,
  ...props
}, ref) {
  return <Container ref={ref} {...props}>
    <Text children={children} hintColor paragraph />
  </Container>;
});

FieldHint.displayName = 'Field.Hint';

FieldHint.propTypes = {
  children: PropTypes.node.isRequired,
  /** Is this component visible? */
  invisible: PropTypes.bool,
};
