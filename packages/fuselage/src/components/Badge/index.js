import React from 'react';
import PropTypes from 'prop-types';

import { Tag } from '../..';

export function Badge(props) {
  return <Tag round {...props} />;
}

Badge.propTypes = {
  variant: PropTypes.oneOf(['secondary', 'primary', 'danger']),
  disabled: PropTypes.bool,
};
