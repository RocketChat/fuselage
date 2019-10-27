import PropTypes from 'prop-types';
import React from 'react';

import { createStyledComponent } from '../../styles';
import styles from './styles';

const Container = createStyledComponent(styles, 'rcx-field');

export const Field = React.forwardRef(function Field(props, ref) {
  return <Container ref={ref} {...props} />;
});

Field.displayName = 'Field';

Field.propTypes = {
  /** Is this component visible? */
  invisible: PropTypes.bool,
};

Field.styled = Container;
