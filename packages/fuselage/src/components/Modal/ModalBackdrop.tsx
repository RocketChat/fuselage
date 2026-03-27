import type { AllHTMLAttributes } from 'react';
import { styled } from 'tamagui';

import { RcxView } from '../../primitives';

const ModalBackdropFrame = styled(RcxView, {
  name: 'ModalBackdrop',
  position: 'fixed',
  zIndex: '$x100',
  // @ts-ignore - inset shorthand
  inset: 0,
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '$surfaceOverlay',
});

export type ModalBackdropProps = AllHTMLAttributes<HTMLElement>;

const ModalBackdrop = (props: ModalBackdropProps) => (
  <ModalBackdropFrame {...(props as any)} />
);

export default ModalBackdrop;
