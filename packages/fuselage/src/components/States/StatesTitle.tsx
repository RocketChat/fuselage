import type { AllHTMLAttributes, ReactNode } from 'react';
import React from 'react';

type StatesTitleProps = {
  children?: ReactNode;
} & AllHTMLAttributes<HTMLHeadingElement>;

const StatesTitle = ({ children, ...props }: StatesTitleProps) => (
  <h3 {...props} className='rcx-states__title'>
    {children}
  </h3>
);

export default StatesTitle;
