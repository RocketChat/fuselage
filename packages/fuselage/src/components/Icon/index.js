import React, { useMemo } from 'react';
import '@rocket.chat/icons/dist/font/RocketChat.css';


export function Icon({
  name,
  className,
  ...props
}) {
  const extendedClassName = useMemo(
    () => ['rcx-icon', name && `rcx-icon--${ name }`, className].filter(Boolean).join(' '),
    [name, className]
  );

  return (
    <i
      className={extendedClassName}
      {...props}
    />
  );
}
