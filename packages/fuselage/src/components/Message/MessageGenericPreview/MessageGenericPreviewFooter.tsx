import React, { ReactNode } from 'react';

type MessageGenericPreviewFooterProps = {
  children?: ReactNode;
  clamp?: boolean;
};

export const MessageGenericPreviewFooter = ({
  children,
}: MessageGenericPreviewFooterProps) => (
  <div className={'rcx-message-generic-preview__footer'}>{children}</div>
);
