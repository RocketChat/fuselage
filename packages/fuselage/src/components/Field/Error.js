import PropTypes from 'prop-types';
import React, { forwardRef } from 'react';

import { Box } from '../Box';
import { Text } from '../Text';

const Container = Box.extend('rcx-field__error', 'span');

export const FieldError = forwardRef(function FieldError({
  children,
  ...props
}, ref) {
  return <Container ref={ref} {...props}>
    <Text children={children} dangerColor paragraph />
  </Container>;
});

FieldError.displayName = 'Field.Error';

FieldError.propTypes = {
  children: PropTypes.node.isRequired,
  /** Is this component visible? */
  invisible: PropTypes.bool,
};
