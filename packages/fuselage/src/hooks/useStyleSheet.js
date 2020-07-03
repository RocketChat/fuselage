import { useLayoutEffect } from 'react';

import { use, unuse } from '../index.scss';

const effect = () => {
  use();
  return unuse;
};

const emptyDeps = [];

export const useStyleSheet = () => {
  useLayoutEffect(effect, emptyDeps);
};
