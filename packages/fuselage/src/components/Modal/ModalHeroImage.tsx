import type { ComponentProps } from 'react';

import Box from '../Box';

export type ModalHeroImageProps = ComponentProps<typeof Box>;

export const ModalHeroImage = ({ ...props }: ModalHeroImageProps) => (
  <figure className='rcx-modal__hero-image-wrapper'>
    <Box rcx-modal__hero-image is='img' {...props} />
  </figure>
);
