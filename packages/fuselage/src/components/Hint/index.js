import PropTypes from 'prop-types';
import React from 'react';

import { createStyledComponent } from '../../styles';
import { Text } from '../Text';
import styles from './styles';

const Container = createStyledComponent(styles, 'rcx-hint', Text);

export const Hint = React.forwardRef(function Hint(props, ref) {
  return <Container hintColor is='div' paragraph ref={ref} {...props} />;
});

Hint.displayName = 'Hint';

Hint.propTypes = {
  children: PropTypes.node.isRequired,
  /** Is this component visible? */
  invisible: PropTypes.bool,
};

Hint.styled = Container;
