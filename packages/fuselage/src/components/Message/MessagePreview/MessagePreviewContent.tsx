import React, { FC, ReactElement } from 'react';

type MessagePreviewContentProps = {
  thumb?: ReactElement;
};

export const MessagePreviewContent: FC<MessagePreviewContentProps> = ({
  thumb,
  ...props
}) => (
  <div className='rcx-message-generic-preview__content'>
    {thumb}
    <div className='rcx-message-generic-preview__content-wrapper' {...props} />
  </div>
);
