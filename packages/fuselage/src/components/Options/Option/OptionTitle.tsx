import React, { ReactNode } from 'react';

type OptionTitleProps = {
  children?: ReactNode;
};

const OptionTitle = (props: OptionTitleProps) => (
  <div className='rcx-option__title' {...props} />
);

export default OptionTitle;
