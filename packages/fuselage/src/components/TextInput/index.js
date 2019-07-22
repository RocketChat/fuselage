import React from 'react';

import { useStyle } from '../../hooks/styles';
import styles from './styles.scss';


function TextInputWrapper({ children }) {
  const textInputWrapperClassName = useStyle(styles, 'rcx-text-input__wrapper');

  return <span className={textInputWrapperClassName}>
    {children}
  </span>;
}

export function TextInput({
  error = false,
  icon = null,
  rows = 1,
  className,
  ...props
}) {
  const textInputClassName = useStyle(styles, 'rcx-text-input', { error }, className);

  const input = rows > 1
    ? <textarea className={textInputClassName} rows={rows} {...props} />
    : <input className={textInputClassName} {...props} />;

  if (icon) {
    return <TextInputWrapper>
      {input}
      {icon}
    </TextInputWrapper>;
  }

  return input;
}
