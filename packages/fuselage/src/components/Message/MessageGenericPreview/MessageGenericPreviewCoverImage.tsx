import React from 'react';

import { prependClassName } from '../../../helpers/prependClassName';

/** @public */
export type MessageGenericPreviewCoverImageProps = {
  url: string;
  width: number;
  height: number;
  className?: string;
};

/** @public */
const MessageGenericPreviewCoverImage = ({
  url,
  width,
  height,
  className,
  ...props
}: MessageGenericPreviewCoverImageProps) => (
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

export default MessageGenericPreviewCoverImage;
