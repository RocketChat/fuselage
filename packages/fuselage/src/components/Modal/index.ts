import { Modal } from './Modal';
import { ModalBackdrop } from './ModalBackdrop';
import { ModalClose } from './ModalClose';
import { ModalContent } from './ModalContent';
import { ModalFooter } from './ModalFooter';
import { ModalHeader } from './ModalHeader';
import { ModalIcon } from './ModalIcon';
import { ModalThumb } from './ModalThumb';
import { ModalTitle } from './ModalTitle';

/* @deprecated use named exports */
Object.assign(Modal, {
  Backdrop: ModalBackdrop,
  Close: ModalClose,
  Content: ModalContent,
  Footer: ModalFooter,
  Header: ModalHeader,
  Icon: ModalIcon,
  Thumb: ModalThumb,
  Title: ModalTitle,
});

export {
  Modal,
  ModalBackdrop,
  ModalClose,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalThumb,
  ModalTitle,
  ModalIcon,
};
