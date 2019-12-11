import { useLayoutEffect } from 'react';

import css from '../index.scss';

export const useStyleSheet = () => {
  useLayoutEffect(() => {
    css.use();

    return () => {
      css.unuse();
    };
  }, [css]);
};
