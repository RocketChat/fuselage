import React, { FC } from 'react';

export const MessageGenericPreviewFooter: FC<{ clamp?: boolean }> = ({
  children,
}) => <div className={'rcx-message-generic-preview__footer'}>{children}</div>;
