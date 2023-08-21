import type { ComponentPropsWithoutRef } from 'react';
import React, { useContext } from 'react';

import Box from '../Box';
import { Label } from '../Label';
import { FieldContext } from './Field';

type FieldLabelProps = ComponentPropsWithoutRef<typeof Box>;

export const FieldLabel = (props: FieldLabelProps) => {
  const isInsideField = useContext(FieldContext);
  if (process.env.NODE_ENV === 'development' && !isInsideField) {
    console.error(
      `${FieldLabel.name} should be used as children of Field Component`
    );
  }

  return <Box is={Label} rcx-field__label {...props} />;
};
