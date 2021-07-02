import { ReactElement, ReactNode } from 'react';

type AnimatedVisibilityProps = {
  children: ReactNode;
  visibility?: 'hidden' | 'visible' | 'hiding' | 'unhiding';
};

const AnimatedVisibility: {
  (props: AnimatedVisibilityProps): ReactElement;
  HIDDEN: 'hidden';
  VISIBLE: 'visible';
  HIDING: 'hiding';
  UNHIDING: 'unhiding';
};

export = AnimatedVisibility;
