import type { AllHTMLAttributes, ReactNode } from 'react';

/** @public */
export type StatesSubtitleProps = {
  children?: ReactNode;
} & AllHTMLAttributes<HTMLDivElement>;

/** @public */
const StatesSubtitle = ({ children, ...props }: StatesSubtitleProps) => (
  <div {...props} className='rcx-states__subtitle'>
    {children}
  </div>
);

export default StatesSubtitle;
