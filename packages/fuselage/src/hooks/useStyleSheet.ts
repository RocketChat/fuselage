import { useLayoutEffect } from 'react';

import defaultStyleSheet from '../index.scss';

export const useStyleSheet = (styleSheet = defaultStyleSheet) => {
  useLayoutEffect(() => {
    styleSheet.use();

    return () => {
      styleSheet.unuse();
    };
  }, [styleSheet]);
};
