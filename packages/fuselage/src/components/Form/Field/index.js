import React from 'react';

import { FormItem } from '../Item';
import { FormLabel } from '../Label';
import { FormDescription } from '../Description';


export function FormField({
  id,
  accessKey,
  children,
  className,
  description,
  error,
  label,
  required,
  ...props
}) {
  return <FormItem {...props}>
    {label && <FormLabel htmlFor={id} accessKey={accessKey} required={required} error={!!error}>
      {label}
    </FormLabel>}

    {children}

    {(error || description) && <FormDescription error={!!error}>
      {error || description}
    </FormDescription>}
  </FormItem>;
}

export * from './hooks';
