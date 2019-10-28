import PropTypes from 'prop-types';
import React from 'react';

import { createStyledComponent } from '../../styles';
import { Text } from '../Text';
import styles from './styles';

const Container = createStyledComponent(styles, 'rcx-field__error', Text);

export const FieldError = React.forwardRef(function FieldError(props, ref) {
  return <Container dangerColor is='span' paragraph ref={ref} {...props} />;
});

FieldError.displayName = 'Field.Error';

FieldError.propTypes = {
  children: PropTypes.node.isRequired,
  /** Is this component visible? */
  invisible: PropTypes.bool,
};

FieldError.styled = Container;
