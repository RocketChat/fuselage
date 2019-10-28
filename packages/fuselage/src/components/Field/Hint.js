import PropTypes from 'prop-types';
import React from 'react';

import { createStyledComponent } from '../../styles';
import { Text } from '../Text';
import styles from './styles';

const Container = createStyledComponent(styles, 'rcx-field__hint', Text);

export const FieldHint = React.forwardRef(function FieldHint(props, ref) {
  return <Container hintColor is='div' paragraph ref={ref} {...props} />;
});

FieldHint.displayName = 'Field.Hint';

FieldHint.propTypes = {
  children: PropTypes.node.isRequired,
  /** Is this component visible? */
  invisible: PropTypes.bool,
};

FieldHint.styled = Container;
