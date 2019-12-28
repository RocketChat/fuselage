import ReactDOM from 'react-dom';
import React, { useState, createContext, useContext } from 'react';

import { AnimatedWrapper, Box, VISIBILITY } from '../Box';


const Context = createContext();

const createModalRoot = () => {
  const node = document.createElement('div');
  document.querySelector('body').appendChild(node);
  return node;
};

export const ModalPortal = ({ children, el = createModalRoot() }) => ReactDOM.createPortal(
  children,
  el,
);

export const ModalProvider = ({ children }) => {
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
    <Context.Provider value={{ stack, open, push, pop, close, update }}>
      {children}
      <Container/>
    </Context.Provider>
  );
};

const Backdrop = React.memo(() => <Box is='div' className='rcx-modal__backdrop'/>);
const Container = () => {
  const { stack } = useContext(Context);
  return (
    <ModalPortal>
      {stack.size > 0 && <Backdrop/>}
      {Array.from(stack.entries()).map(([key, element], i, arr) => <AnimatedWrapper key={key} visible={ arr.length === i + 1 ? VISIBILITY.VISIBLE : VISIBILITY.HIDEN } children={element}/>)}
    </ModalPortal>
  );
};
