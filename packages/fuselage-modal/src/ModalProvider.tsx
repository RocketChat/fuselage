import { Modal } from '@rocket.chat/fuselage';
import type { ReactNode } from 'react';
import { useState, useMemo, memo, useEffect } from 'react';

import { ModalContext } from './ModalContext';
import ModalPortal from './ModalPortal';

const ModalProvider = ({ children }: any) => {
  const [currentModal, setCurrentModal] = useState<ReactNode>(null);

  const contextValue = useMemo(() => ({ setModal: () => undefined }), []);

  const closeModal = () => setCurrentModal(null);

  useEffect(() => {
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    });
  }, []);

  return (
    <ModalContext.Provider value={contextValue}>
      {children}
      {currentModal && (
        <ModalPortal>
          <Modal.Backdrop zIndex={999}>{currentModal}</Modal.Backdrop>
        </ModalPortal>
      )}
    </ModalContext.Provider>
  );
};

export default memo(ModalProvider);
