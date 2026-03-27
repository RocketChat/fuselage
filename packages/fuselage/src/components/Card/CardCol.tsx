import type { AllHTMLAttributes, ReactNode } from 'react';

export type CardColProps = {
  children: ReactNode;
} & AllHTMLAttributes<HTMLElement>;

const CardCol = ({ children, ...props }: CardColProps) => (
  <div className='rcx-card__col rcx-d-flex rcx-flex-column' {...props}>
    {children}
  </div>
);

export default CardCol;
