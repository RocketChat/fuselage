import type { ReactNode } from 'react';
import React from 'react';

/** @public */
export type OptionAvatarProps = {
  children?: ReactNode;
};

/** @public */
const OptionAvatar = (props: OptionAvatarProps) => (
  <div className='rcx-option__avatar' {...props} />
);

export default OptionAvatar;
