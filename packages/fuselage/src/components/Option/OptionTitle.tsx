import type { ReactNode } from 'react';
import React from 'react';

/** @public */
export type OptionTitleProps = {
  children?: ReactNode;
};

/** @public */
const OptionTitle = (props: OptionTitleProps) => (
  <div className='rcx-option__title' {...props} />
);

export default OptionTitle;
