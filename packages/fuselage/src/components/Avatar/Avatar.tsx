import type { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';
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
  children?: ReactNode;
  image?: string;
  emojiClassname?: string;
} & HTMLAttributes<HTMLElement>;

export const Avatar = ({
  title,
  size = 'x36',
  rounded = false,
  objectFit = false,
  url,
  children,
  image,
  emojiClassname,
  ...props
}: AvatarProps) => {
  props.className = prependClassName(
    props.className,
    ['rcx-box rcx-box--full rcx-avatar', size && `rcx-avatar--${size}`]
      .filter(Boolean)
      .join(' ')
  );
  const innerClass = prependClassName(
    emojiClassname,
    [
      'rcx-avatar__element',
      objectFit && 'rcx-avatar__element--object-fit',
      size && `rcx-avatar__element--${size}`,
      rounded && 'rcx-avatar__element--rounded',
    ]
      .filter(Boolean)
      .join(' ')
  );

  return (
    <figure aria-label={title} {...props}>
      {children || image ? (
        <span
          className={`${innerClass}`}
          style={image && image.length ? { backgroundImage: image } : undefined}
        >
          {children}
        </span>
      ) : (
        <img src={`${url}`} className={`${innerClass}`} />
      )}
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
