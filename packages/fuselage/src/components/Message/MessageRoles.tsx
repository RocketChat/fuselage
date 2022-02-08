import React, { ReactNode } from 'react';

type MessageRolesProps = {
  children?: ReactNode;
};

export const MessageRoles = (props: MessageRolesProps) => (
  <div className='rcx-box rcx-box--full rcx-message-header__roles' {...props} />
);
