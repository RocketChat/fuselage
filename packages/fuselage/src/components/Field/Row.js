import PropTypes from 'prop-types';
import React, { forwardRef } from 'react';

import { Box } from '../Box';

const Container = Box.extend('rcx-field__row');

export const FieldRow = forwardRef(function FieldRow(props, ref) {
  return <Container ref={ref} {...props} />;
});

FieldRow.displayName = 'Field.Row';

FieldRow.propTypes = {
  /** Is this component visible? */
  invisible: PropTypes.bool,
};
