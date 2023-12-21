import type { AllHTMLAttributes, ReactNode } from 'react';
import React from 'react';

const CardRow = ({
  children,
  ...props
}: { children: ReactNode } & AllHTMLAttributes<HTMLElement>) => (
  <div className='rcx-card__row' {...props}>
    {children}
  </div>
);

export default CardRow;
