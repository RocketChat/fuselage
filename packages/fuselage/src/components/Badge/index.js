import React from 'react';
import PropTypes from 'prop-types';

import { Tag } from '../Tag';

export function Badge(props) {
  return <Tag {...props} round />;
}

Badge.propTypes = {
  disabled: PropTypes.bool,
  variant: PropTypes.oneOf(['secondary', 'primary', 'danger']),
};
