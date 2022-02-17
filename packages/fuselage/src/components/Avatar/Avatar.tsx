import type { DetailedHTMLProps, HTMLAttributes } from 'react';
import React from 'react';
import flattenChildren from 'react-keyed-flatten-children';

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

export const Avatar = ({
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

type AvatarStackProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

const AvatarStack = ({ children, ...props }: AvatarStackProps) => {
  props.className = prependClassName(props.className, 'rcx-avatar-stack');
  return <div {...props}>{flattenChildren(children).reverse()}</div>;
};

Avatar.Stack = AvatarStack;
