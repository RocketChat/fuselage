import PropTypes from 'prop-types';
import React from 'react';

import { createStyledComponent } from '../../styles';
import styles from './styles';

const OptionContainer = createStyledComponent(styles, 'rcx-input-box__option', 'option');

export const Option = React.forwardRef(function Option(props, ref) {
  return <OptionContainer ref={ref} {...props} />;
});

Option.displayName = 'InputBox.Option';

Option.propTypes = {
  children: PropTypes.node,
  invisible: PropTypes.bool,
};
