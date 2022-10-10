import type { ReactNode } from 'react';
import React from 'react';

type OptionHeaderProps = {
  children: ReactNode;
};

const OptionHeader = ({ children }: OptionHeaderProps) => (
  <div className='rcx-option__header'>{children}</div>
);

export default OptionHeader;
