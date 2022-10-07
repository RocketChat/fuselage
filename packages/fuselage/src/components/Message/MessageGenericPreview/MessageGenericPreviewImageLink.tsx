import React from 'react';

import { prependClassName } from '../../../helpers/prependClassName';

type MessageGenericPreviewImageLinkProps = {
  url: string;
  className?: string;
};

export const MessageGenericPreviewImageLink = ({
  url,
  className,
}: MessageGenericPreviewImageLinkProps) => (
  <img
    src={url}
    data-testid='preview-image'
    className={prependClassName(
      className,
      'rcx-message-generic-preview__image'
    )}
  />
);
