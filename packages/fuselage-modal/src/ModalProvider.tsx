import { Modal } from '@rocket.chat/fuselage';
import type {
  CSSProperties,
  ReactElement,
  ReactNode,
  ReactPortal,
} from 'react';
import { useCallback, useState, useMemo, memo, useEffect } from 'react';
import { createPortal } from 'react-dom';

import { ModalContext } from './ModalContext';
import ModalPortal from './ModalPortal';
import PortalNodeHandler from './PortalNodeHandler';

const style: CSSProperties = {
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  position: 'absolute',
};

const ModalProvider = ({ children }: { children?: ReactNode }) => {
  const [modalStack, setModalStack] = useState<
    Array<[ReactPortal, HTMLDivElement]>
  >([]);

  const push = useCallback(
    (modal: ReactElement) => {
      const node = document.createElement('div');
      const key = Math.random().toString(16).slice(2);
      setModalStack((modalStack) => [
        ...modalStack,
        [createPortal(modal, node, key), node],
      ]);
    },
    [setModalStack]
  );

  const pop = useCallback(
    () =>
      setModalStack((modalStack) => modalStack.slice(0, modalStack.length - 1)),
    [setModalStack]
  );

  const clear = useCallback(() => setModalStack([]), [setModalStack]);

  const isOpen = modalStack.length > 0;

  useEffect(() => {
    const closeWithEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        pop();
      }
    };
    window.addEventListener('keydown', closeWithEsc);
    return () => window.removeEventListener('keydown', closeWithEsc);
  }, [pop]);

  const contextValue = useMemo(
    () => ({ push, pop, clear, isOpen }),
    [push, pop, clear, isOpen]
  );

  const currentModal = modalStack[modalStack.length - 1];
  const restModals = modalStack.slice(0, modalStack.length - 1);

  return (
    <ModalContext.Provider value={contextValue}>
      {children}
      {isOpen && (
        <ModalPortal>
          {modalStack.map(([portal]) => portal)}
          <Modal.Backdrop zIndex={999}>
            <PortalNodeHandler node={currentModal[1]} />
          </Modal.Backdrop>
          {restModals.map(([, node], index) => (
            <PortalNodeHandler key={index} style={style} node={node} />
          ))}
        </ModalPortal>
      )}
    </ModalContext.Provider>
  );
};

export default memo(ModalProvider);
