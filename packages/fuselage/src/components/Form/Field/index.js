import React, { createContext, useContext } from 'react';

import { useStyle } from '../../../hooks/styles';
import styles from './styles.scss';


const FormFieldErrorContext = createContext();

export const useFormFieldError = () => useContext(FormFieldErrorContext);

export function FormField({
  accessKey,
  children,
  className,
  description,
  error,
  label,
  required,
  ...props
}) {
  const formFieldClassName = useStyle(styles, 'FormField', { required, error: !!error }, className);
  const formFieldLabelClassName = useStyle(styles, 'FormField__Label');
  const formFieldLabelSpanClassName = useStyle(styles, 'FormField__LabelSpan');
  const formFieldInputWrapperClassName = useStyle(styles, 'FormField__InputWrapper');
  const formFieldDescriptionClassName = useStyle(styles, 'FormField__Description');

  return <div className={formFieldClassName} {...props}>
    <label accessKey={accessKey} className={formFieldLabelClassName}>
      {label
        ? <span className={formFieldLabelSpanClassName}>{label}</span>
        : null}
      <span className={formFieldInputWrapperClassName}>
        <FormFieldErrorContext.Provider value={error}>
          {children}
        </FormFieldErrorContext.Provider>
      </span>
    </label>
    <small className={formFieldDescriptionClassName}>
      {error || description}
    </small>
  </div>;
}
