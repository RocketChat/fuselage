import type { ComponentPropsWithoutRef } from 'react';
import React, { useContext } from 'react';

import Box from '../Box';
import { FieldContext } from './Field';

type FieldDescriptionProps = ComponentPropsWithoutRef<typeof Box>;

export const FieldDescription = (props: FieldDescriptionProps) => {
  const isInsideField = useContext(FieldContext);
  if (process.env.NODE_ENV === 'development' && !isInsideField) {
    console.error(
      `${FieldDescription.name} should be used as children of Field Component`
    );
  }

  return <Box is='span' rcx-field__description {...props} />;
};
