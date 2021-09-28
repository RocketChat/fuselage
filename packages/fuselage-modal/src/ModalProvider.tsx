import { Modal } from '@rocket.chat/fuselage';
import type { CSSProperties, ReactElement, ReactNode } from 'react';
import { useCallback, useState, useMemo, memo, useEffect } from 'react';

import { ModalContext } from './ModalContext';
import ModalPortal from './ModalPortal';

const style: CSSProperties = {
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  position: 'absolute',
};

const ModalProvider = ({ children }: { children?: ReactNode }) => {
  const [modalStack, setModalStack] = useState<Array<ReactElement>>([]);

  const push = useCallback(
    (modal: ReactElement) => {
      setModalStack((modalStack) => [...modalStack, modal]);
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
          <Modal.Backdrop zIndex={999}>{currentModal}</Modal.Backdrop>
          {restModals.map((modal) => (
            <div style={style}>{modal}</div>
          ))}
        </ModalPortal>
      )}
    </ModalContext.Provider>
  );
};

export default memo(ModalProvider);
