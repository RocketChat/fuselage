import React from 'react';

type MessageGenericPreviewImageProps = {
  url: string;
  width: number;
  height: number;
};

export const MessageGenericPreviewImage = ({
  url,
  width,
  height,
  ...props
}: MessageGenericPreviewImageProps) => (
  <div
    className='rcx-message-generic-preview__preview'
    style={{ backgroundImage: `url(${url})`, maxWidth: '100%' }}
    {...props}
  >
    <div style={{ paddingTop: `${(height / width) * 100}%` }} />
  </div>
);
