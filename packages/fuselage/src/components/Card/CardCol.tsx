import type { AllHTMLAttributes, ReactNode } from 'react';
import React from 'react';

/** @public */
export type CardColProps = AllHTMLAttributes<HTMLElement> & {
  children: ReactNode;
};

/** @public */
const CardCol = ({ children, ...props }: CardColProps) => (
  <div className='rcx-card__col' {...props}>
    {children}
  </div>
);

export default CardCol;
