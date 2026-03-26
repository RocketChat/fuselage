import type { AllHTMLAttributes, ReactNode } from 'react';
import { styled } from 'tamagui';

import { RcxView } from '../../primitives';

const CardRowFrame = styled(RcxView, {
  name: 'CardRow',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'row',
  gap: '$x8',
  flexGrow: 1,
  flexShrink: 1,
});

export type CardRowProps = {
  children: ReactNode;
} & AllHTMLAttributes<HTMLElement>;

const CardRow = ({ children, ...props }: CardRowProps) => (
  <CardRowFrame {...props}>{children}</CardRowFrame>
);

export default CardRow;
