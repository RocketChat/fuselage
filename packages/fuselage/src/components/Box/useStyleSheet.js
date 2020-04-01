import { useLayoutEffect } from 'react';

import { use, unuse } from '../../index.scss';

export const useStyleSheet = () => {
  useLayoutEffect(() => {
    use();
    return unuse;
  }, []);
};
