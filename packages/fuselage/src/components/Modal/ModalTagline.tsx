import type { AllHTMLAttributes } from 'react';
import { styled } from '@tamagui/core';

import { RcxText } from '../../primitives';

const ModalTaglineFrame = styled(RcxText, {
  name: 'ModalTagline',
  display: 'block',
  color: '$fontDefault',
  fontFamily: '$body',
  fontSize: '$c2',
  fontWeight: '$c2',
  lineHeight: '$c2',
  letterSpacing: '$c2',
  overflowWrap: 'normal',
});

export type ModalTaglineProps = AllHTMLAttributes<HTMLElement>;

const ModalTagline = ({ children, ...props }: ModalTaglineProps) => (
  <ModalTaglineFrame {...(props as any)}>
    {children}
  </ModalTaglineFrame>
);

export default ModalTagline;
