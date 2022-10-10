import type { ImgHTMLAttributes } from 'react';
import React from 'react';

import { prependClassName } from '../../../helpers/prependClassName';

type MessageGenericPreviewImageLinkProps = {
  url: string;
  className?: string;
} & ImgHTMLAttributes<HTMLImageElement>;

export const MessageGenericPreviewImageLink = ({
  url,
  className,
  ...props
}: MessageGenericPreviewImageLinkProps) => (
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
