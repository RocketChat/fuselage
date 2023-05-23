import type { ReactElement, ReactNode } from 'react';
import React from 'react';

type MessageGenericPreviewContentProps = {
  children?: ReactNode;
  thumb?: ReactElement;
};

export const MessageGenericPreviewContent = ({
  thumb,
  ...props
}: MessageGenericPreviewContentProps) => (
  <div className='rcx-message-generic-preview__content' dir='auto'>
    {thumb}
    <div className='rcx-message-generic-preview__content-wrapper' {...props} />
  </div>
);
