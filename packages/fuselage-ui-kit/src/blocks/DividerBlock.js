import { Divider } from '@rocket.chat/fuselage';
import React, { memo } from 'react';

const DividerBlock = ({ className }) => (
  <Divider className={className} marginBlock='x24' />
);

export default memo(DividerBlock);
