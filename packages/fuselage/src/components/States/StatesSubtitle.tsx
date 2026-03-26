import type { AllHTMLAttributes, ReactNode } from 'react';
import { styled } from 'tamagui';

import { RcxText } from '../../primitives';

const StatesSubtitleFrame = styled(RcxText, {
  name: 'StatesSubtitle',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  maxWidth: 462,
  margin: 0,
  padding: 0,
  textAlign: 'center',
  marginBlockEnd: '$x24',
  fontFamily: '$body',
  fontSize: '$p1',
  fontWeight: '$p1',
  lineHeight: '$p1',
  letterSpacing: '$p1',
  color: 'inherit',
  overflowWrap: 'normal',
});

export type StatesSubtitleProps = {
  children?: ReactNode;
} & AllHTMLAttributes<HTMLDivElement>;

const StatesSubtitle = ({ children, ...props }: StatesSubtitleProps) => (
  <StatesSubtitleFrame {...props}>{children}</StatesSubtitleFrame>
);

export default StatesSubtitle;
