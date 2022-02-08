import React, { ReactNode } from 'react';

type OptionMenuProps = {
  children?: ReactNode;
};

const OptionMenu = (props: OptionMenuProps) => (
  <div className='rcx-box--animated rcx-option__menu-wrapper' {...props} />
);

export default OptionMenu;
