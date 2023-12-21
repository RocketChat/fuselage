import type { AllHTMLAttributes, CSSProperties, ComponentProps } from 'react';
import React from 'react';

import Box from '../Box/Box';

type CardBodyProps = {
  flexDirection?: CSSProperties['flexDirection'];
  height?: ComponentProps<typeof Box>['height'];
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
