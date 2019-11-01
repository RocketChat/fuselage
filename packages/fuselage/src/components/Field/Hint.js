import PropTypes from 'prop-types';
import React from 'react';

import { createStyledComponent } from '../../styles';
import { Text } from '../Text';
import styles from './styles';

const Container = createStyledComponent(styles, 'rcx-field__hint', 'div');

export const FieldHint = React.forwardRef(function FieldHint({
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
