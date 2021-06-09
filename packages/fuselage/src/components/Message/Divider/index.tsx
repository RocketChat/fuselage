import React, { FC } from 'react';

const Divider: FC<{
  unreadLabel?: string;
}> = ({ children, unreadLabel, ...props }) => (
  <div
    role='separator'
    className={
      !unreadLabel
        ? 'rcx-message-divider'
        : 'rcx-message-divider rcx-message-divider--unread'
    }
    {...props}
  >
    {children && (
      <>
        <div className='rcx-message-divider__bar' />
        <div className='rcx-message-divider__wrapper'>{children}</div>{' '}
      </>
    )}
    <div className='rcx-message-divider__bar'>
      {unreadLabel && (
        <div className='rcx-message-divider__wrapper--unread'>
          {unreadLabel}
        </div>
      )}
    </div>
  </div>
);
export { Divider };
