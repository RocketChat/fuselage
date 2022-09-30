import type { ComponentProps } from 'react';
import React from 'react';

import Box from '../Box';

export type ModalHeroImageProps = ComponentProps<typeof Box>;

export const ModalHeroImage = ({ title, ...props }: ModalHeroImageProps) => (
  <Box
    rcx-modal__hero-image
    aria-label={title}
    title={title}
    is='img'
    width='100%'
    height='auto'
    maxHeight='x256'
    mbe='x24'
    {...props}
  />
);
