import type { AllHTMLAttributes, ReactNode } from 'react';
import React from 'react';

/** @public */
export type CardRowProps = AllHTMLAttributes<HTMLElement> & {
  children: ReactNode;
};

/** @public */
const CardRow = ({ children, ...props }: CardRowProps) => (
  <div className='rcx-card__row' {...props}>
    {children}
  </div>
);

export default CardRow;
