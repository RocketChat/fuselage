import type { ReactNode } from 'react';

/** @public */
export type MessageGenericPreviewFooterProps = {
  children?: ReactNode;
  clamp?: boolean;
};

/** @public */
const MessageGenericPreviewFooter = ({
  children,
}: MessageGenericPreviewFooterProps) => (
  <div className={'rcx-message-generic-preview__footer'}>{children}</div>
);

export default MessageGenericPreviewFooter;
