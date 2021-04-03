import PropTypes from 'prop-types';
import React from 'react';

export const StatusBullet = ({
  status = 'loading',
  className = '',
  ...props
}) => (
  <span
    className={`rcx-box rcx-box--full rcx-status-bullet rcx-status-bullet--${status} ${className}`}
    {...props}
  />
);

StatusBullet.propTypes = {
  status: PropTypes.oneOf(['online', 'busy', 'away', 'offline']),
  size: PropTypes.string,
};
