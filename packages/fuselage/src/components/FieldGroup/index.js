import PropTypes from 'prop-types';
import React from 'react';

import styles from './styles';
import { createStyledComponent } from '../../styles';

const Container = createStyledComponent(styles, 'rcx-field-group', 'fieldset');

export const FieldGroup = React.forwardRef(function FieldGroup(props, ref) {
  return <Container ref={ref} role='group' {...props} />;
});

FieldGroup.displayName = 'FieldGroup';

FieldGroup.propTypes = {
  /** Is this component visible? */
  invisible: PropTypes.bool,
};
