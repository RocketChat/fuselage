import type { ReactNode } from 'react';

/** @public */
export type OptionHeaderProps = {
  children: ReactNode;
};

/** @public */
const OptionHeader = ({ children }: OptionHeaderProps) => (
  <div className='rcx-option__header'>{children}</div>
);

export default OptionHeader;
