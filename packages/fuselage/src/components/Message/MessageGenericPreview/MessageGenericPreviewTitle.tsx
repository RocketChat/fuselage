import type { AnchorHTMLAttributes, HTMLAttributes } from 'react';
import React from 'react';

type MessageGenericPreviewTitleProps = {
  externalUrl?: string;
} & HTMLAttributes<HTMLSpanElement> &
  AnchorHTMLAttributes<HTMLAnchorElement>;

export const MessageGenericPreviewTitle = ({
  externalUrl,
  children,
  ...props
}: MessageGenericPreviewTitleProps) => {
  if (externalUrl) {
    return (
      <a
        className='rcx-message-generic-preview__title rcx-message-generic-preview__title-link'
        href={externalUrl}
        target='_blank'
        {...props}
      >
        {children}
      </a>
    );
  }

  return <span className='rcx-message-generic-preview__title' {...props} />;
};
