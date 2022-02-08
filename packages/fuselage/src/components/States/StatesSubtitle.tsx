import React, { ReactNode } from 'react';

type StatesSubtitleProps = {
  children?: ReactNode;
};

const StatesSubtitle = ({ children }: StatesSubtitleProps) => (
  <div className='rcx-states__subtitle'>{children}</div>
);

export default StatesSubtitle;
