import type { AllHTMLAttributes, ReactNode } from 'react';

/** @public */
export type StatesTitleProps = {
  children?: ReactNode;
} & AllHTMLAttributes<HTMLHeadingElement>;

/** @public */
const StatesTitle = ({ children, ...props }: StatesTitleProps) => (
  <h3 {...props} className='rcx-states__title'>
    {children}
  </h3>
);

export default StatesTitle;
