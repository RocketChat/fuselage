import { Box, Divider } from '@rocket.chat/fuselage';
import React, { ComponentProps, FC, memo } from 'react';

const DividerBlock: FC<{
  className: ComponentProps<typeof Box>['className'];
}> = ({ className }) => <Divider className={className} marginBlock='x24' />;

export default memo(DividerBlock);
