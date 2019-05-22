import classnames from 'classnames';
import React from 'react';
import styles from './Button.module.scss';


export function Button({
	children,
	className,
	disabled,
	outline,
	nude,
	danger,
	secondary,
	stack,
	small,
  loading,
  onClick,
}) {
  return (
    <button
      className={classnames(
        styles['button'],
        {
          [styles['button--disabled']]: disabled,
          [styles['button--outline']]: outline,
          [styles['button--nude']]: nude,
          [styles['button--danger']]: danger,
          [styles['button--secondary']]: secondary,
          [styles['button--stack']]: stack,
          [styles['button--small']]: small,
          [styles['button--loading']]: loading,
        },
        className
      )}
      type={secondary ? 'button' : 'submit'}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
