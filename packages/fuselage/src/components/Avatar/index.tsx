import React, { ComponentProps, FC } from 'react';
import flattenChildren from 'react-keyed-flatten-children';

import { Box } from '..';
import { prependClassName } from '../../helpers/prependClassName';

type AvatarProps = Omit<
  ComponentProps<typeof Box>,
  'title' | 'size' | 'className'
> & {
  title?: string;
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
  className: string | undefined;
};

export const Avatar: FC<AvatarProps> & {
  Stack: typeof AvatarStack;
} = function Avatar({
  title,
  size = 'x36',
  rounded = false,
  objectFit = false,
  url,
  ...props
}) {
  props.className = prependClassName(
    props.className,
    ['rcx-box rcx-box--full rcx-avatar', size && `rcx-avatar--${size}`]
      .filter(Boolean)
      .join(' ')
  );
  const innerClass = [
    'rcx-avatar__element',
    rounded && 'rcx-avatar__element--rounded',
    objectFit && 'rcx-avatar__element--object-fit',
    size && `rcx-avatar--${size}`,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <figure aria-label={title} {...props}>
      <img src={`${url}`} className={`${innerClass}`} />
    </figure>
  );
};

const AvatarStack: FC<AvatarProps> = ({ children, ...props }) => {
  props.className = prependClassName(props.className, 'rcx-avatar-stack');
  return <div {...props}>{flattenChildren(children).reverse()}</div>;
};

Avatar.Stack = AvatarStack;
