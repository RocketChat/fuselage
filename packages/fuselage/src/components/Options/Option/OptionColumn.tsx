import React, { ReactNode } from 'react';

type OptionColumnProps = {
  children?: ReactNode;
};

const OptionColumn = (props: OptionColumnProps) => (
  <div className='rcx-option__column' {...props} />
);

export default OptionColumn;
