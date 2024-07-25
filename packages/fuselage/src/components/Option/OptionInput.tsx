import type { ReactNode } from 'react';
import React from 'react';

/** @public */
export type OptionInputProps = {
  children?: ReactNode;
};

/** @public */
const OptionInput = (props: OptionInputProps) => (
  <div className='rcx-option__input' {...props} />
);

export default OptionInput;
