import React, { ReactNode } from 'react';

type OptionAvatarProps = {
  children?: ReactNode;
};

const OptionAvatar = (props: OptionAvatarProps) => (
  <div className='rcx-option__avatar' {...props} />
);

export default OptionAvatar;
