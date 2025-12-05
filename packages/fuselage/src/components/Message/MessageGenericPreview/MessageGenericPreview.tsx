import type { HTMLAttributes } from 'react';

import './MessageGenericPreview.styles.scss';

export type MessageGenericPreviewProps = HTMLAttributes<HTMLDivElement>;

const MessageGenericPreview = (props: MessageGenericPreviewProps) => (
  <div className='rcx-message-generic-preview' {...props} />
);

export default MessageGenericPreview;
