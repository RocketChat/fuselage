import type { AllHTMLAttributes, ComponentProps } from 'react';

import AvatarContainer from './AvatarContainer.js';

export type AvatarProps = ComponentProps<typeof AvatarContainer> & {
  rounded?: boolean;
  objectFit?: boolean;
  url: string;
} & Omit<AllHTMLAttributes<HTMLImageElement>, 'size'>;

const Avatar = ({
  size = 'x36',
  rounded = false,
  objectFit = false,
  url,
  className,
  alt,
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
    <AvatarContainer size={size} className={className}>
      <img src={url} className={innerClass} alt={alt || ''} {...props} />
    </AvatarContainer>
  );
};

export default Avatar;
