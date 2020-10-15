import PropTypes from 'prop-types';
import React from 'react';

import { useStyleSheet } from '../../hooks/useStyleSheet';

export const StatusBullet = ({ status, size, ...props }) => {
  useStyleSheet();
  let statusClass;
  switch (status) {
    case 'online':
      statusClass = 'rcx-status-bullet-online';
      break;
    case 'away':
      statusClass = 'rcx-status-bullet-away';
      break;
    case 'busy':
      statusClass = 'rcx-status-bullet-busy';
      break;
    case 'loading':
      statusClass = 'rcx-status-bullet-loading';
      break;
    default:
      statusClass = 'rcx-status-bullet-offline';
  }
  return (
    <div
      className={[
        'rcx-status-bullet',
        statusClass,
        size && size === 'small' ? 'rcx-status-bullet-small' : 'rcx-status-bullet-medium',
      ].filter(Boolean).join(' ')} {...props}
    >
    </div>
  );
};

StatusBullet.propTypes = {
  status: PropTypes.string,
  size: PropTypes.string,
};
