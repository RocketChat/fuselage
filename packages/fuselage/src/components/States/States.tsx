import type { AllHTMLAttributes, ReactNode } from 'react';

export type StatesProps = {
  children?: ReactNode;
} & AllHTMLAttributes<HTMLDivElement>;

const States = ({ children, ...props }: StatesProps) => (
  <div {...props} className='rcx-states rcx-d-flex rcx-flex-column rcx-justify-center rcx-items-center rcx-p-16'>
    {children}
  </div>
);

export default States;
