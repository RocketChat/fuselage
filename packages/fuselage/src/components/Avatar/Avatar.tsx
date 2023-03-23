import type { DetailedHTMLProps, HTMLAttributes, ComponentProps } from 'react';
import React from 'react';
import flattenChildren from 'react-keyed-flatten-children';

import { prependClassName } from '../../helpers/prependClassName';
import { AvatarContainer } from './AvatarContainer';

export type AvatarProps = ComponentProps<typeof AvatarContainer> & {
  rounded?: boolean;
  objectFit?: boolean;
  url: string;
};

export const Avatar = ({
  size = 'x36',
  rounded = false,
  objectFit = false,
  url,
  ...props
}: AvatarProps) => {
  const innerClass = [
    'rcx-avatar__element',
    objectFit && 'rcx-avatar__element--object-fit',
    size && `rcx-avatar__element--${size}`,
    rounded && 'rcx-avatar__element--rounded',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <AvatarContainer size={size} {...props}>
      <img src={`${url}`} className={`${innerClass}`} />
    </AvatarContainer>
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
