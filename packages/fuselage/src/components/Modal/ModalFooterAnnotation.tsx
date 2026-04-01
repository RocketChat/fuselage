import type { AllHTMLAttributes } from 'react';
import { styled } from '@tamagui/core';

import { RcxText } from '../../primitives';

const ModalFooterAnnotationFrame = styled(RcxText, {
  name: 'ModalFooterAnnotation',
  display: 'block',
  color: '$fontSecondaryInfo',
  fontFamily: '$body',
  fontSize: '$c1',
  fontWeight: '$c1',
  lineHeight: '$c1',
  letterSpacing: '$c1',
  overflowWrap: 'normal',
});

export type ModalFooterAnnotationProps = AllHTMLAttributes<HTMLElement>;

const ModalFooterAnnotation = ({ children }: ModalFooterAnnotationProps) => (
  <ModalFooterAnnotationFrame>{children}</ModalFooterAnnotationFrame>
);

export default ModalFooterAnnotation;
