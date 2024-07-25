import type { AllHTMLAttributes } from 'react';
import React from 'react';

import type { AvatarContainerProps } from './AvatarContainer';
import AvatarContainer from './AvatarContainer';
import AvatarStack from './AvatarStack';

/** @public */
export type AvatarProps = AvatarContainerProps & {
  rounded?: boolean;
  objectFit?: boolean;
  url: string;
} & Omit<AllHTMLAttributes<HTMLImageElement>, 'size'>;

/** @public */
function Avatar({
  size = 'x36',
  rounded = false,
  objectFit = false,
  url,
  className,
  ...props
}: AvatarProps) {
  const innerClass = [
    'rcx-avatar__element',
    objectFit && 'rcx-avatar__element--object-fit',
    size && `rcx-avatar__element--${size}`,
    rounded && 'rcx-avatar__element--rounded',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <AvatarContainer size={size} className={className}>
      <img src={`${url}`} className={`${innerClass}`} {...props} />
    </AvatarContainer>
  );
}

/**
 * @deprecated Use named import instead
 */
Avatar.Stack = AvatarStack;

/** @public */
// eslint-disable-next-line @typescript-eslint/no-namespace
declare namespace Avatar {}

export default Avatar;
