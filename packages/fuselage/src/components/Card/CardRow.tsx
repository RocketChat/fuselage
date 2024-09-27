import type { AllHTMLAttributes, ReactNode } from 'react';

const CardRow = ({
  children,
  ...props
}: { children: ReactNode } & AllHTMLAttributes<HTMLElement>) => (
  <div className='rcx-card__row' {...props}>
    {children}
  </div>
);

export default CardRow;
