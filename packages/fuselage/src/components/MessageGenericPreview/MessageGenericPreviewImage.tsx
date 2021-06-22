import React, { FC } from 'react';

export const MessageGenericPreviewImage: FC<{
  url: string;
  width: number;
  aspectRatio: number;
}> = ({ url, width, aspectRatio, ...props }) => (
  <div
    className='rcx-message-generic-preview__preview'
    style={{ backgroundImage: `url(${url})`, width, maxWidth: '100%' }}
    {...props}
  >
    <div style={{ paddingTop: `${aspectRatio * 100}%` }} />
  </div>
);
