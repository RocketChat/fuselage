import type { AllHTMLAttributes } from 'react';
import { styled } from '@tamagui/core';

import { RcxView } from '../../primitives';

const ModalHeaderTextFrame = styled(RcxView, {
  name: 'ModalHeaderText',
  display: 'flex',
  flexDirection: 'column',
  flexGrow: 1,
  flexShrink: 1,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
});

export type ModalHeaderTextProps = AllHTMLAttributes<HTMLElement>;

const ModalHeaderText = ({ children, ...props }: ModalHeaderTextProps) => (
  <ModalHeaderTextFrame {...(props as any)}>
    {children}
  </ModalHeaderTextFrame>
);

export default ModalHeaderText;
