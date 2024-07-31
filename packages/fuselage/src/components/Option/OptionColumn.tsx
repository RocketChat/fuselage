import type { ReactNode } from 'react';

/** @public */
export type OptionColumnProps = {
  children?: ReactNode;
};

/** @public */
const OptionColumn = (props: OptionColumnProps) => (
  <div className='rcx-option__column' {...props} />
);

export default OptionColumn;
