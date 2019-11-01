import PropTypes from 'prop-types';
import React from 'react';

import { createStyledComponent } from '../../styles';
import { Text } from '../Text';
import styles from './styles';

const Container = createStyledComponent(styles, 'rcx-field__error', 'span');

export const FieldError = React.forwardRef(function FieldError({
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
