import { Modal } from './Modal';
import { ModalBackdrop } from './ModalBackdrop';
import { ModalClose } from './ModalClose';
import { ModalContent } from './ModalContent';
import { ModalFooter } from './ModalFooter';
import { ModalFooterAnnotation } from './ModalFooterAnnotation';
import { ModalFooterControllers } from './ModalFooterControllers';
import { ModalHeader } from './ModalHeader';
import { ModalHeaderText } from './ModalHeaderText';
import { ModalHeroImage } from './ModalHeroImage';
import { ModalIcon } from './ModalIcon';
import { ModalTagline } from './ModalTagline';
import { ModalThumb } from './ModalThumb';
import { ModalTitle } from './ModalTitle';

/* @deprecated use named exports */
export default Object.assign(Modal, {
  Backdrop: ModalBackdrop,
  Close: ModalClose,
  Content: ModalContent,
  Footer: ModalFooter,
  Header: ModalHeader,
  Icon: ModalIcon,
  Thumb: ModalThumb,
  Title: ModalTitle,
  Tagline: ModalTagline,
  HeaderText: ModalHeaderText,
  HeroImage: ModalHeroImage,
  FooterControllers: ModalFooterControllers,
  FooterAnnotation: ModalFooterAnnotation,
});

export {
  ModalBackdrop,
  ModalClose,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalThumb,
  ModalTitle,
  ModalIcon,
  ModalTagline,
  ModalHeaderText,
  ModalHeroImage,
  ModalFooterControllers,
  ModalFooterAnnotation,
};
