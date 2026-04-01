import type { AllHTMLAttributes } from 'react';
import { styled } from '@tamagui/core';

import { RcxView } from '../../primitives';

const ModalFooterFrame = styled(RcxView, {
  name: 'ModalFooter',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  margin: '$x24',
});

export type ModalFooterProps = {
  justifyContent?: 'start' | 'center' | 'end' | 'space-between';
} & AllHTMLAttributes<HTMLElement>;

const ModalFooter = ({
  children,
  justifyContent = 'end',
  ...props
}: ModalFooterProps) => (
  <ModalFooterFrame justifyContent={justifyContent as any} {...(props as any)}>
    {children}
  </ModalFooterFrame>
);

export default ModalFooter;
