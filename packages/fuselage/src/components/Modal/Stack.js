import ReactDOM from 'react-dom';
import React, { useState, createContext, useContext } from 'react';

import { AnimatedVisibility, Box } from '../Box';

export const ModalContext = createContext();

export const useModalStack = () => useContext(ModalContext);

const createModalRoot = () => {
  const node = document.createElement('div');
  document.querySelector('body').appendChild(node);
  return node;
};

export const ModalPortal = ({ children, rootElement = createModalRoot() }) =>
  ReactDOM.createPortal(children, rootElement);

export const ModalBackdrop = (props) => <Box rcx-modal__backdrop {...props}/>;

export function ModalContainer() {
  const { stack } = useModalStack();

  return (
    <ModalPortal>
      {stack.size > 0 && <ModalBackdrop />}
      {Array.from(stack.entries(), ([key, element], i, array) =>
        <AnimatedVisibility
          key={key}
          children={element}
          visibility={array.length === i + 1 ? AnimatedVisibility.VISIBLE : AnimatedVisibility.HIDDEN}
        />,
      )}
    </ModalPortal>
  );
}

export function ModalStack({ children }) {
  const [stack, setStack] = useState(new Map());

  const open = ({ id, ...data }) => {
    setStack(new Map([id, data]));
  };

  const update = ({ id, ...data }) => {
    setStack(new Map([id, data]));
  };

  const push = ({ id, ...data }) => {
    setStack(new Map(stack.set(id, data)));
  };

  const pop = () => {
    if (!stack.size) {
      return;
    }

    const key = Array.from(stack.keys()).pop();
    stack.delete(key);
    setStack(new Map(stack));
  };

  const close = () => {
    setStack(new Map());
  };

  return (
    <ModalContext.Provider value={{ stack, open, push, pop, close, update }}>
      {children}
      <ModalContainer />
    </ModalContext.Provider>
  );
}
