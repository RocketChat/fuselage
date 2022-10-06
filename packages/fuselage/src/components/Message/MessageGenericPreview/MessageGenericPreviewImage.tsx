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
  externalUrl,
  imagePreview,
  className,
  ...props
}: MessageGenericPreviewImageProps) => {
  const componentProps = {
    'data-testid': 'preview-image',
    'className': prependClassName(
      className,
      `rcx-message-generic-preview__preview ${
        imagePreview && 'rcx-message-generic-preview__preview--image'
      }`
    ),
    'style': { backgroundImage: `url(${url})`, maxWidth: '100%' },
    'children': <div style={{ paddingTop: `${(height / width) * 100}%` }} />,
  };

  return externalUrl ? (
    <a
      href={externalUrl}
      target='_blank'
      rel='noopener noreferrer'
      {...componentProps}
      {...props}
    />
  ) : (
    <div {...componentProps} {...props} />
  );
};
