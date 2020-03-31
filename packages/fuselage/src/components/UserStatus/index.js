import React from 'react';
import PropTypes from 'prop-types';

import { Box } from '../..';

export function UserStatus({ status = 'offline', ...props }) {
  return <Box is='div' componentClassName='rcx-status' mod-is={status} {...props}/>;
}

UserStatus.propTypes = {
  status: PropTypes.oneOf(['online', 'away', 'busy', 'offline']),
};
