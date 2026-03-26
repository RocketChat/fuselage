import type { AllHTMLAttributes, ReactNode } from 'react';
import { styled } from 'tamagui';

import { RcxView } from '../../primitives';

const CardHeaderFrame = styled(RcxView, {
  name: 'CardHeader',
  display: 'flex',
  alignItems: 'center',
  gap: '$x8',
});

export type CardHeaderProps = {
  children: ReactNode;
} & AllHTMLAttributes<HTMLElement>;

const CardHeader = ({ children, ...props }: CardHeaderProps) => (
  <CardHeaderFrame {...props}>{children}</CardHeaderFrame>
);

export default CardHeader;
