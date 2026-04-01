import type { AllHTMLAttributes, ReactNode } from 'react';
import { styled } from '@tamagui/core';

import { RcxView } from '../../primitives';

const StatesFrame = styled(RcxView, {
  name: 'States',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '$x16',
  color: '$fontSecondaryInfo',
});

export type StatesProps = {
  children?: ReactNode;
} & AllHTMLAttributes<HTMLDivElement>;

const States = ({ children, ...props }: StatesProps) => (
  <StatesFrame {...props}>{children}</StatesFrame>
);

export default States;
