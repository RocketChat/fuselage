import { Box, Divider } from '@rocket.chat/fuselage';
import React, { ComponentProps, memo, ReactElement } from 'react';

type DividerBlockProps = {
  className?: ComponentProps<typeof Box>['className'];
};

const DividerBlock = ({ className }: DividerBlockProps): ReactElement => (
  <Divider className={className} marginBlock='x24' />
);

export default memo(DividerBlock);
