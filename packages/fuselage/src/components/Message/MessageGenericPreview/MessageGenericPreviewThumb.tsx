import type { HTMLAttributes } from 'react';

/** @public */
export type MessageGenericPreviewThumbProps = HTMLAttributes<HTMLDivElement>;

/** @public */
const MessageGenericPreviewThumb = (props: MessageGenericPreviewThumbProps) => (
  <div className='rcx-message-generic-preview__thumb' {...props} />
);

export default MessageGenericPreviewThumb;
