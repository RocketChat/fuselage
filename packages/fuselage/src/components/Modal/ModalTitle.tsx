import type { AllHTMLAttributes } from 'react';
import { styled } from '@tamagui/core';

import { RcxText } from '../../primitives';

const ModalTitleFrame = styled(RcxText, {
  name: 'ModalTitle',
  tag: 'h2',
  display: 'block',
  flexGrow: 1,
  flexShrink: 1,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  color: '$fontDefault',
  fontFamily: '$body',
  fontSize: '$h2',
  fontWeight: '$h2',
  lineHeight: '$h2',
  letterSpacing: '$h2',
  overflowWrap: 'normal',
});

export type ModalTitleProps = AllHTMLAttributes<HTMLElement>;

const ModalTitle = ({ children, ...props }: ModalTitleProps) => (
  <ModalTitleFrame {...(props as any)}>
    {children}
  </ModalTitleFrame>
);

export default ModalTitle;
