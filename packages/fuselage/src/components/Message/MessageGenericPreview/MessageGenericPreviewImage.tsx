import React from 'react';

import { prependClassName } from '../../../helpers/prependClassName';

type MessageGenericPreviewImageProps = {
  url: string;
  width: number;
  height: number;
  externalUrl?: string;
  className?: string;
};

export const MessageGenericPreviewImage = ({
  url,
  width,
  height,
  externalUrl,
  className,
  ...props
}: MessageGenericPreviewImageProps) => {
  const componentProps = {
    'data-testid': 'preview-image',
    'className': prependClassName(
      className,
      'rcx-message-generic-preview__preview'
    ),
    'style': { backgroundImage: `url(${url})`, maxWidth: '100%' },
    'children': <div style={{ paddingTop: `${(height / width) * 100}%` }} />,
  };

  return externalUrl ? (
    <a href={externalUrl} target='_blank' {...componentProps} {...props} />
  ) : (
    <div {...componentProps} {...props} />
  );
};
