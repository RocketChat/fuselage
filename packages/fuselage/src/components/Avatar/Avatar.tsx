import type { HTMLAttributes } from 'react';
import React from 'react';

import { prependClassName } from '../../helpers/prependClassName';

export type AvatarProps = {
  size?:
    | 'x16'
    | 'x18'
    | 'x20'
    | 'x24'
    | 'x28'
    | 'x32'
    | 'x36'
    | 'x40'
    | 'x48'
    | 'x124'
    | 'x200'
    | 'x332';
  rounded?: boolean;
  objectFit?: boolean;
  url: string;
} & HTMLAttributes<HTMLElement>;

const Avatar = ({
  title,
  size = 'x36',
  rounded = false,
  objectFit = false,
  url,
  ...props
}: AvatarProps) => {
  props.className = prependClassName(
    props.className,
    ['rcx-box rcx-box--full rcx-avatar', size && `rcx-avatar--${size}`]
      .filter(Boolean)
      .join(' ')
  );
  const innerClass = [
    'rcx-avatar__element',
    objectFit && 'rcx-avatar__element--object-fit',
    size && `rcx-avatar__element--${size}`,
    rounded && 'rcx-avatar__element--rounded',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <figure aria-label={title} {...props}>
      <img src={`${url}`} className={`${innerClass}`} />
    </figure>
  );
};

export default Avatar;
