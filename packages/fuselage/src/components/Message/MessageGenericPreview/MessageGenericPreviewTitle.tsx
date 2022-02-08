import React, { ReactNode } from 'react';

type MessageGenericPreviewTitleProps = {
  children?: ReactNode;
  externalUrl?: string;
};

export const MessageGenericPreviewTitle = ({
  externalUrl,
  ...props
}: MessageGenericPreviewTitleProps) =>
  externalUrl ? (
    <a
      className='rcx-message-generic-preview__title'
      href={externalUrl}
      target='_blank'
      {...props}
    />
  ) : (
    <span className='rcx-message-generic-preview__title' {...props} />
  );
