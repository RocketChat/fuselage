import type { ReactElement, ReactNode } from 'react';

/** @public */
export type MessageGenericPreviewContentProps = {
  children?: ReactNode;
  thumb?: ReactElement;
};

/** @public */
const MessageGenericPreviewContent = ({
  thumb,
  ...props
}: MessageGenericPreviewContentProps) => (
  <div className='rcx-message-generic-preview__content'>
    {thumb}
    <div className='rcx-message-generic-preview__content-wrapper' {...props} />
  </div>
);

export default MessageGenericPreviewContent;
