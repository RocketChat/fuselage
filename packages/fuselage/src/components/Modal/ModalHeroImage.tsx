import type { AllHTMLAttributes } from 'react';
import { styled } from '@tamagui/core';

import { RcxView } from '../../primitives';

const ModalHeroImageWrapper = styled(RcxView, {
  name: 'ModalHeroImageWrapper',
  tag: 'figure',
  margin: 0,
  marginBottom: '$x24',
  marginInline: -24,
});

const ModalHeroImageElement = styled(RcxView, {
  name: 'ModalHeroImage',
  tag: 'img',
  display: 'block',
  width: '100%',
  height: 'auto',
  // @ts-ignore - objectFit for img
  objectFit: 'contain',
});

export type ModalHeroImageProps = AllHTMLAttributes<HTMLImageElement>;

const ModalHeroImage = ({ ...props }: ModalHeroImageProps) => (
  <ModalHeroImageWrapper>
    <ModalHeroImageElement {...(props as any)} />
  </ModalHeroImageWrapper>
);

export default ModalHeroImage;
