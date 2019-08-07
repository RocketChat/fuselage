import React, { useLayoutEffect, useState } from 'react';
import { createPortal } from 'react-dom';

import { useStyle } from '../../hooks/styles';
import styles from './styles.scss';


let globalBackdropContainer;

const useBackdropContainer = () => {
  const [container, setContainer] = useState(globalBackdropContainer);
  const globalBackdropContainerId = useStyle(styles, 'rcx-backdrop__container');

  useLayoutEffect(() => {
    if (!globalBackdropContainer) {
      globalBackdropContainer = document.getElementById(globalBackdropContainerId);
    }

    if (!globalBackdropContainer) {
      globalBackdropContainer = document.createElement('div');
      globalBackdropContainer.setAttribute('id', globalBackdropContainerId);
      document.body.appendChild(globalBackdropContainer);
    }

    setContainer(globalBackdropContainer);
  }, []);

  return container;
};

export function Backdrop({
  className,
  invisible,
  ...props
}) {
  const container = useBackdropContainer();

  const backdropClassName = useStyle(styles, 'rcx-backdrop', {
    invisible,
  }, className);

  if (!container) {
    return null;
  }

  return createPortal(<div className={backdropClassName} {...props} />, container);
}
