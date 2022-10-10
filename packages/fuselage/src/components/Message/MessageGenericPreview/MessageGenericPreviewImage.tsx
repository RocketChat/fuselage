import type { ImgHTMLAttributes } from 'react';
import React from 'react';

import { prependClassName } from '../../../helpers/prependClassName';

type MessageGenericPreviewImageProps = {
  url: string;
  className?: string;
} & ImgHTMLAttributes<HTMLImageElement>;

export const MessageGenericPreviewImage = ({
  url,
  className,
  ...props
}: MessageGenericPreviewImageProps) => (
  <img
    src={url}
    className={prependClassName(
      className,
      'rcx-message-generic-preview__image'
    )}
    alt=''
    {...props}
  />
);
