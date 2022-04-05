import type { ReactNode } from 'react';
import React from 'react';

type StatesTitleProps = {
  children?: ReactNode;
};

const StatesTitle = ({ children }: StatesTitleProps) => (
  <div className='rcx-states__title'>{children}</div>
);

export default StatesTitle;
