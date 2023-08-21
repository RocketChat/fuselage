import type { ComponentPropsWithoutRef } from 'react';
import React, { useContext } from 'react';

import Box from '../Box';
import { FieldContext } from './Field';

type FieldErrorProps = ComponentPropsWithoutRef<typeof Box>;

export const FieldError = (props: FieldErrorProps) => {
  const isInsideField = useContext(FieldContext);
  if (process.env.NODE_ENV === 'development' && !isInsideField) {
    console.error(
      `${FieldError.name} should be used as children of Field Component`
    );
  }

  return <Box is='span' rcx-field__error {...props} />;
};
