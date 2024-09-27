import type { AllHTMLAttributes, ReactNode } from 'react';

const CardCol = ({
  children,
  ...props
}: { children: ReactNode } & AllHTMLAttributes<HTMLElement>) => (
  <div className='rcx-card__col' {...props}>
    {children}
  </div>
);

export default CardCol;
