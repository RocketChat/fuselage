import PropTypes from 'prop-types';
import React from 'react';

import { createStyledComponent } from '../../styles';
import styles from './styles';

const Container = createStyledComponent(styles, 'rcx-field__row');

export const FieldRow = React.forwardRef(function FieldRow(props, ref) {
  return <Container ref={ref} {...props} />;
});

FieldRow.displayName = 'Field.Row';

FieldRow.propTypes = {
  /** Is this component visible? */
  invisible: PropTypes.bool,
};

FieldRow.styled = Container;
