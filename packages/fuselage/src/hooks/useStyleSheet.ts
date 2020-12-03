import { useLayoutEffect } from 'react';

import styleSheet from '../index.scss';

export const useStyleSheet = () => {
  useLayoutEffect(() => {
    styleSheet.use();

    return () => {
      styleSheet.unuse();
    };
  }, []);
};
