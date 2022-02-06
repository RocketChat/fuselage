import React, { ReactNode } from 'react';

type OptionContentProps = {
  children?: ReactNode;
};

const OptionContent = (props: OptionContentProps) => (
  <div className='rcx-option__content' {...props} />
);

export default OptionContent;
