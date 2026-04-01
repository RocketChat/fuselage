import type { AllHTMLAttributes, ReactNode } from 'react';
import { styled } from '@tamagui/core';

import { RcxText } from '../../primitives';

const StatesTitleFrame = styled(RcxText, {
  name: 'StatesTitle',
  display: 'block',
  marginBlockStart: 0,
  marginBlockEnd: '$x8',
  textAlign: 'center',
  color: '$fontDefault',
  fontFamily: '$body',
  fontSize: '$h3',
  fontWeight: '$h3',
  lineHeight: '$h3',
  letterSpacing: '$h3',
  overflowWrap: 'normal',
});

export type StatesTitleProps = {
  children?: ReactNode;
} & AllHTMLAttributes<HTMLHeadingElement>;

const StatesTitle = ({ children, ...props }: StatesTitleProps) => (
  <StatesTitleFrame {...props}>{children}</StatesTitleFrame>
);

export default StatesTitle;
