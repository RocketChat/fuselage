import { Box } from '@rocket.chat/fuselage';
import type { FC, CSSProperties, ComponentProps } from 'react';
import React from 'react';

type CardBodyProps = {
  flexDirection?: CSSProperties['flexDirection'];
  height?: ComponentProps<typeof Box>['height'];
};

const CardBody: FC<CardBodyProps> = ({
  children,
  flexDirection = 'row',
  height,
}) => (
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
