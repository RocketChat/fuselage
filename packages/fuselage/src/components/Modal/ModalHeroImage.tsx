import type { ComponentProps } from 'react';
import React from 'react';

import Box from '../Box';

export type ModalHeroImageProps = ComponentProps<typeof Box>;

export const ModalHeroImage = ({ ...props }: ModalHeroImageProps) => (
  <Box rcx-modal__hero-image is='img' {...props} />
);
