import React from 'react';

import { Box } from '../..';

export function Status({ status = 'online', ...props }) {
  return <Box is='div' componentClassName='rcx-status' mod-is={status} {...props}/>;
}
