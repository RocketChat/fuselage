import React, { ReactNode } from 'react';

type OptionDescriptionProps = {
  children?: ReactNode;
};

const OptionDescription = (props: OptionDescriptionProps) => (
  <div className='rcx-option__description' {...props} />
);

export default OptionDescription;
