import '@rocket.chat/icons/dist/font/RocketChat.css';
import React, { useMemo } from 'react';


export function Icon({
  name,
  className,
  ...props
}) {
  const iconClassName = useMemo(
    () => ['rcx-icon', name && `rcx-icon--${ name }`, className].filter(Boolean).join(' '),
    [name, className]
  );

  return <i className={iconClassName} {...props} />;
}
