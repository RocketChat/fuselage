import ReactDOM from 'react-dom';
import React, { useState } from 'react';

import { Modal } from '.';

export const useStack = () => {
  const [stack, setStack] = useState(new Map([
    [1, <Modal>teste</Modal>],
    [2, <Modal>teste 2</Modal>]]));

  const open = ({ id, ...data }) => {
    setStack(new Map([id, data]));
  };

  const push = ({ id, ...data }) => {
    setStack(new Map(stack.set(id, data)));
  };

  const pop = () => {

  };

  const close = () => {

  };

  return [stack, { open, push, pop, close }];
};

const appRoot = document.querySelector('body #root');

export const ModalPortal = ({ children }) => ReactDOM.createPortal(
  children,
  appRoot,
);

export const ModalWrapper = () => {
  const [stack] = useStack();
  return (
    <ModalPortal>
      <>
        {Array.from(stack.entries()).map(([, element]) => element)}
      </>
    </ModalPortal>
  );
};
