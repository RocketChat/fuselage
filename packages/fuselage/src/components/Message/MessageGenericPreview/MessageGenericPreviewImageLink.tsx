import type { ImgHTMLAttributes } from 'react';
import React from 'react';

import { prependClassName } from '../../../helpers/prependClassName';

type MessageGenericPreviewImageLinkProps = {
  url: string;
  className?: string;
  onError?: ImgHTMLAttributes<HTMLImageElement>['onError'];
};

export const MessageGenericPreviewImageLink = ({
  url,
  className,
  onError,
}: MessageGenericPreviewImageLinkProps) => (
  <img
    src={url}
    className={prependClassName(
      className,
      'rcx-message-generic-preview__image'
    )}
    alt=''
    onError={onError}
  />
);
