import React from 'react';

import { prependClassName } from '../../../helpers/prependClassName';

type MessageGenericPreviewImageProps = {
  url: string;
  width: number;
  height: number;
  externalUrl?: string;
  imagePreview?: boolean;
  className?: string;
};

export const MessageGenericPreviewImage = ({
  url,
  width,
  height,
  className,
  ...props
}: MessageGenericPreviewImageProps) => (
  <div
    className={prependClassName(
      className,
      'rcx-message-generic-preview__preview'
    )}
    style={{ backgroundImage: `url(${url})`, maxWidth: '100%' }}
    data-testid='preview-image'
    {...props}
  >
    <div style={{ paddingTop: `${(height / width) * 100}%` }} />
  </div>
);
