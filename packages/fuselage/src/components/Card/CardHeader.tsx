import type { AllHTMLAttributes, ReactNode } from 'react';

const CardHeader = ({
  children,
  ...props
}: { children: ReactNode } & AllHTMLAttributes<HTMLElement>) => (
  <div className='rcx-card__header' {...props}>
    {children}
  </div>
);

export default CardHeader;
