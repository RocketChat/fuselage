import type { ReactElement, ReactNode } from 'react';

export type MessageGenericPreviewContentProps = {
  children?: ReactNode;
  thumb?: ReactElement;
};

const MessageGenericPreviewContent = ({
  thumb,
  ...props
}: MessageGenericPreviewContentProps) => (
  <div className='rcx-message-generic-preview__content' dir='auto'>
    {thumb}
    <div className='rcx-message-generic-preview__content-wrapper' {...props} />
  </div>
);

export default MessageGenericPreviewContent;
