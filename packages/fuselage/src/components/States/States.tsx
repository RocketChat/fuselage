import type { ReactNode } from 'react';
import React from 'react';

import './States.styles.scss';

type StatesProps = {
  children?: ReactNode;
};

const States = ({ children }: StatesProps) => (
  <div className='rcx-states'>{children}</div>
);

export default States;
