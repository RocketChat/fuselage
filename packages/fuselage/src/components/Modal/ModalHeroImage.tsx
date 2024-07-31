import type { BoxProps } from '../Box';
import Box from '../Box';

export type ModalHeroImageProps = BoxProps;

/** @public */
export const ModalHeroImage = ({ ...props }: ModalHeroImageProps) => (
  <figure className='rcx-modal__hero-image-wrapper'>
    <Box rcx-modal__hero-image is='img' {...props} />
  </figure>
);
