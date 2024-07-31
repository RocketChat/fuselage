import type { AllHTMLAttributes, ReactNode } from 'react';

/** @public */
export type StatesProps = {
  children?: ReactNode;
} & AllHTMLAttributes<HTMLDivElement>;

/** @public */
const States = ({ children, ...props }: StatesProps) => (
  <div {...props} className='rcx-states'>
    {children}
  </div>
);

export default States;
