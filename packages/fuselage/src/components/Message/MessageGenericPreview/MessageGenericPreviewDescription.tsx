import React, { ReactNode } from 'react';

type MessageGenericPreviewDescriptionProps = {
  children?: ReactNode;
  clamp?: boolean;
};

export const MessageGenericPreviewDescription = ({
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
