import type { AllHTMLAttributes, ReactNode } from 'react';

export type CardRowProps = {
  children: ReactNode;
} & AllHTMLAttributes<HTMLElement>;

const CardRow = ({ children, ...props }: CardRowProps) => (
  <div className='rcx-card__row rcx-d-flex rcx-items-center rcx-grow-1 rcx-shrink-1' {...props}>
    {children}
  </div>
);

export default CardRow;
