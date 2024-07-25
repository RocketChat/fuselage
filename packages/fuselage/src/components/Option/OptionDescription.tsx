import type { ReactNode } from 'react';
import React from 'react';

/** @public */
export type OptionDescriptionProps = {
  children?: ReactNode;
};

/** @public */
const OptionDescription = (props: OptionDescriptionProps) => (
  <div className='rcx-option__description' {...props} />
);

export default OptionDescription;
