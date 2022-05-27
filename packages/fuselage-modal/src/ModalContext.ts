import { createContext, useContext } from 'react';

export const ModalContext = createContext({
  setModal: (): void => undefined,
});

export const useModal = () => useContext(ModalContext);

export const useSetModal = () => useContext(ModalContext).setModal;
