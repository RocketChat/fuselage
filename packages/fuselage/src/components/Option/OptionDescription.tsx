import type { ReactNode } from 'react';
import React from 'react';

type OptionDescriptionProps = {
  children?: ReactNode;
};

const OptionDescription = (props: OptionDescriptionProps) => (
  <div className='rcx-option__description' {...props} />
);

export default OptionDescription;
