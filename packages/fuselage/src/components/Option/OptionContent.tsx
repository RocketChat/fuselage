import type { HTMLAttributes } from 'react';
import React from 'react';

const OptionContent = (props: HTMLAttributes<HTMLDivElement>) => (
  <div className='rcx-option__content' {...props} />
);

export default OptionContent;
