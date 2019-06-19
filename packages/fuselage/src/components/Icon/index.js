import React, { useLayoutEffect, useMemo } from 'react';
import iconStyles from '@rocket.chat/icons/dist/font/RocketChat.css';


export function Icon({
  name,
  className,
  ...props
}) {
  useLayoutEffect(() => {
    iconStyles.use();

    return () => {
      iconStyles.unuse();
    };
  }, []);

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
