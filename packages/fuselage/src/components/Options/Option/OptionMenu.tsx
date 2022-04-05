import type { ReactNode } from 'react';
import React from 'react';

type OptionMenuProps = {
  children?: ReactNode;
};

const OptionMenu = (props: OptionMenuProps) => (
  <div className='rcx-box--animated rcx-option__menu-wrapper' {...props} />
);

export default OptionMenu;
