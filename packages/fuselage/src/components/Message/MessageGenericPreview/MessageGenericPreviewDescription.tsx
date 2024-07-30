import type { ReactNode } from 'react';
import React from 'react';

/** @public */
export type MessageGenericPreviewDescriptionProps = {
  children?: ReactNode;
  clamp?: boolean;
};

/** @public */
const MessageGenericPreviewDescription = ({
  children,
  clamp = false,
}: MessageGenericPreviewDescriptionProps) => (
  <div
    className={[
      'rcx-message-generic-preview__description',
      clamp && 'rcx-message-generic-preview__description--clamp',
    ]
      .filter(Boolean)
      .join(' ')}
  >
    {children}
  </div>
);

export default MessageGenericPreviewDescription;
