import PropTypes from 'prop-types';
import React from 'react';

export const StatusBullet = ({
  status = 'loading',
  size,
  className = '',
  ...props
}) => (
  <span
    className={`rcx-box rcx-box--full rcx-status-bullet rcx-status-bullet--${status} ${
      size === 'small' ? 'rcx-status-bullet--small' : ''
    } ${className}`}
    {...props}
  />
);

StatusBullet.propTypes = {
  status: PropTypes.oneOf(['online', 'busy', 'away', 'offline']),
  size: PropTypes.string,
};
