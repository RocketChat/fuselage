import type { ReactNode } from 'react';
import React from 'react';

type StatesSubtitleProps = {
  children?: ReactNode;
};

const StatesSubtitle = ({ children }: StatesSubtitleProps) => (
  <div className='rcx-states__subtitle'>{children}</div>
);

export default StatesSubtitle;
