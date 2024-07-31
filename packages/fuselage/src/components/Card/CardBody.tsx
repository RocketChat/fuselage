import type { AllHTMLAttributes, CSSProperties, ReactNode } from 'react';

import type { BoxProps } from '../Box/Box';
import Box from '../Box/Box';

/** @public */
export type CardBodyProps = {
  flexDirection?: CSSProperties['flexDirection'];
  height?: BoxProps['height'];
  children: ReactNode;
} & Omit<AllHTMLAttributes<HTMLElement>, 'is'>;

/** @public */
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
