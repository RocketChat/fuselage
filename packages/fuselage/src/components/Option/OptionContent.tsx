import type { HTMLAttributes } from 'react';
import React from 'react';

/** @public */
export type OptionContentProps = HTMLAttributes<HTMLDivElement>;

/** @public */
const OptionContent = (props: OptionContentProps) => (
  <div className='rcx-option__content' {...props} />
);

export default OptionContent;
