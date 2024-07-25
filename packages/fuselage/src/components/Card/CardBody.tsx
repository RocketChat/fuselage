import type { AllHTMLAttributes, CSSProperties } from 'react';
import React from 'react';

import type { BoxProps } from '../Box/Box';
import Box from '../Box/Box';

type CardBodyProps = {
  flexDirection?: CSSProperties['flexDirection'];
  height?: BoxProps['height'];
  children: React.ReactNode;
} & Omit<AllHTMLAttributes<HTMLElement>, 'is'>;

const CardBody = ({
  children,
  flexDirection = 'row',
  height,
  ...props
}: CardBodyProps) => (
  <Box
    fontScale='p2m'
    display='flex'
    flexDirection={flexDirection}
    flexGrow={1}
    height={height}
    rcx-card__body
    {...props}
  >
    {children}
  </Box>
);

export default CardBody;
