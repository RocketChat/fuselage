import type { ReactNode } from 'react';
import React from 'react';

type OptionTitleProps = {
  children?: ReactNode;
};

const OptionTitle = (props: OptionTitleProps) => (
  <div className='rcx-option__title' {...props} />
);

export default OptionTitle;
