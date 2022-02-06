import React, { ReactNode } from 'react';

import './States.styles.scss';

type StatesProps = {
  children?: ReactNode;
};

const States = ({ children }: StatesProps) => (
  <div className='rcx-states'>{children}</div>
);

export default States;
