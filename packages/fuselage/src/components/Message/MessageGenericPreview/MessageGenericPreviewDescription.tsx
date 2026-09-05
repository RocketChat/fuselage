import type { ReactNode } from 'react';

export type MessageGenericPreviewDescriptionProps = {
  children?: ReactNode;
  clamp?: boolean;
};

const MessageGenericPreviewDescription = ({
  children,
  clamp = false,
}: MessageGenericPreviewDescriptionProps) => (
  <div
    className={[
      'rcx-message-generic-preview__description',
      clamp && 'rcx-message-generic-preview__description--clamp',
    ]
      .filter(Boolean)
      .join(' ')}
    dir='auto'
  >
    {children}
  </div>
);

export default MessageGenericPreviewDescription;
