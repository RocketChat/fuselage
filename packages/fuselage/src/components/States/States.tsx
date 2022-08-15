import type { ReactNode } from 'react';
import React from 'react';

type StatesProps = {
  children?: ReactNode;
};

const States = ({ children }: StatesProps) => (
  <div className='rcx-states'>{children}</div>
);

export default States;
