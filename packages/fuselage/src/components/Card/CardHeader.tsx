import type { AllHTMLAttributes, ReactNode } from 'react';
import React from 'react';

/** @public */
export type CardHeaderProps = AllHTMLAttributes<HTMLElement> & {
  children: ReactNode;
};

/** @public */
const CardHeader = ({ children, ...props }: CardHeaderProps) => (
  <div className='rcx-card__header' {...props}>
    {children}
  </div>
);

export default CardHeader;
