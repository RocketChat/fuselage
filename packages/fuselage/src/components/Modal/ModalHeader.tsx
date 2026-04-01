import type { AllHTMLAttributes } from 'react';
import { styled } from '@tamagui/core';

import { RcxView } from '../../primitives';
import { Margins } from '../Margins';

const ModalHeaderFrame = styled(RcxView, {
  name: 'ModalHeader',
  tag: 'header',
  margin: '$x24',
});

const ModalHeaderInner = styled(RcxView, {
  name: 'ModalHeaderInner',
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'nowrap',
  margin: -4,
});

export type ModalHeaderProps = AllHTMLAttributes<HTMLElement>;

const ModalHeader = ({ children, ...props }: ModalHeaderProps) => (
  <ModalHeaderFrame {...(props as any)}>
    <ModalHeaderInner>
      <Margins all='x4'>{children}</Margins>
    </ModalHeaderInner>
  </ModalHeaderFrame>
);

export default ModalHeader;
