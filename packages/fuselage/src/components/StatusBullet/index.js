import PropTypes from 'prop-types';
import React from 'react';

import { useStyleSheet } from '../../hooks/useStyleSheet';

export const StatusBullet = ({ status = 'loading', size, className = '', ...props }) => {
  useStyleSheet();
  return <span className={`rcx-status-bullet rcx-status-bullet--${ status } ${ size === 'small' ? 'rcx-status-bullet--small' : '' } ${ className }`} {...props} />;
};

StatusBullet.propTypes = {
  status: PropTypes.oneOf(['online', 'busy', 'away', 'offline']),
  size: PropTypes.string,
};
