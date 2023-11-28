import type { CSSProperties, ComponentProps } from 'react';
import React from 'react';

import Box from '../Box/Box';

type CardBodyProps = {
  flexDirection?: CSSProperties['flexDirection'];
  height?: ComponentProps<typeof Box>['height'];
  children: React.ReactNode;
};

const CardBody = ({
  children,
  flexDirection = 'row',
  height,
}: CardBodyProps) => (
  <Box
    fontScale='c1'
    display='flex'
    flexDirection={flexDirection}
    flexGrow={1}
    height={height}
    rcx-card__body
  >
    {children}
  </Box>
);

export default CardBody;
